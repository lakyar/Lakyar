// components/Blog.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../lib/sanity'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../lib/sanity'

const Blog = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    const fetchBlog = async () => {
      try {
        const query = `*[_type == "blog" && slug.current == $slug][0]{
          title,
          description,
          date,
          mainImage,
          content
        }`
        
        const data = await client.fetch(query, { slug })
        setBlog(data)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchBlog()
  }, [slug])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading blog post...</p>
      </div>
    )
  }

  if (!slug) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-red-600">Blog post not found</h1>
      </div>
    )
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>
        
        <div className="flex items-center text-gray-600 mb-6">
          <span className="mr-4">📅 {formattedDate}</span>
        </div>
        
        {blog.mainImage && (
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={urlFor(blog.mainImage).width(1200).height(600).url()} 
              alt={blog.mainImage.alt || blog.title}
              className="w-full h-auto"
            />
            {blog.mainImage.alt && (
              <p className="text-sm text-gray-500 italic p-2 bg-gray-50">
                {blog.mainImage.alt}
              </p>
            )}
          </div>
        )}
        
        {blog.description && (
          <p className="text-xl text-gray-700 mb-6 italic border-l-4 border-blue-500 pl-4">
            {blog.description}
          </p>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {blog.content && blog.content.length > 0 ? (
          <PortableText 
            value={blog.content}
            components={{
              types: {
                image: ({ value }) => (
                  <div className="my-8">
                    <img 
                      src={urlFor(value).width(800).url()} 
                      alt={value.alt || ''}
                      className="rounded-lg shadow-md"
                    />
                    {value.alt && (
                      <p className="text-sm text-gray-500 italic mt-2 text-center">
                        {value.alt}
                      </p>
                    )}
                  </div>
                ),
              },
              block: {
                normal: ({ children }) => (
                  <p className="my-4 text-gray-800 leading-relaxed">{children}</p>
                ),
                h1: ({ children }) => (
                  <h2 className="text-3xl font-bold my-6 text-gray-900">{children}</h2>
                ),
                h2: ({ children }) => (
                  <h3 className="text-2xl font-bold my-5 text-gray-900">{children}</h3>
                ),
                h3: ({ children }) => (
                  <h4 className="text-xl font-bold my-4 text-gray-900">{children}</h4>
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong className="font-bold text-teal-700">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic">{children}</em>
                ),
              },
            }}
          />
        ) : (
          <p className="text-gray-600">No content available.</p>
        )}
      </div>
    </article>
  )
}

export default Blog