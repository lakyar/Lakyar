// components/BlogList.jsx
import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { urlFor } from '../lib/sanity'
import { Link } from 'react-router-dom' // or next/link for Next.js

const BlogList = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "blog"] | order(date desc){
          title,
          description,
          date,
          slug,
          mainImage
        }`
        
        const data = await client.fetch(query)
        setBlogs(data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchBlogs()
  }, [])

  if (loading) {
    return <div className="p-8 text-center">Loading blogs...</div>
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <article 
            key={blog.slug.current} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {blog.mainImage && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={urlFor(blog.mainImage).width(600).height(400).url()} 
                  alt={blog.mainImage.alt || blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {new Date(blog.date).toLocaleDateString()}
              </p>
              
              <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600">
                <Link to={`/blog/${blog.slug.current}`}>
                  {blog.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {blog.description}
              </p>
              
              <Link 
                to={`/blog/${blog.slug.current}`}
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      {blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts yet.</p>
        </div>
      )}
    </div>
  )
}

export default BlogList