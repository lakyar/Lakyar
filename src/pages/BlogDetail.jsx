// pages/BlogDetail.jsx
import React, { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../data/blogs";
import {
  FaCalendar,
  FaEye,
  FaClock,
  FaArrowLeft,
  FaTag,
  FaUser,
} from "react-icons/fa";
import NotFound from "./NotFound";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

const BlogDetail = () => {
  const { slug } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef(null);

  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return <NotFound title="blog post" />;
  }

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-96 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithSkeleton
            src={blog.cover}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-200 via-neutral-200/60 to-transparent dark:from-neutral-950 dark:via-neutral-900/60" />
        </div>

        <div className="absolute right-0 bottom-0 left-0 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <FaUser className="text-orange-500" />
                {blog.author.name}
              </span>
              {/* <span className="flex items-center gap-2">
                <FaEye className="text-orange-500" />
                {blog.views.toLocaleString()} views
              </span> */}
              <span className="flex items-center gap-2">
                <FaCalendar className="text-orange-500" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-600 dark:text-orange-400"
                >
                  <FaTag className="text-[10px]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="border-primary dark:border-primary-dark mx-auto min-h-screen max-w-3xl border-b px-4 py-12 sm:px-6 md:py-16 xl:max-w-4xl">
        <span className="mb-4 flex items-center justify-end gap-2 text-xs md:text-sm">
          <FaClock className="text-orange-500" />
          {blog.readTime} min read
        </span>
        <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          {blog.content?.map((item, index) => {
            if (item.type === "heading") {
              return (
                <h2 key={index} className="mt-8 mb-4">
                  {item.text}
                </h2>
              );
            }
            if (item.type === "paragraph") {
              return (
                <p key={index} className="leading-relaxed">
                  {item.text}
                </p>
              );
            }
            if (item.type === "image") {
              return (
                <figure key={index} className="my-8 px-[10%]">
                  <ImageWithSkeleton
                    src={item.src}
                    alt={item.caption}
                    className="w-full rounded-lg object-cover"
                  />
                  {item.caption && (
                    <figcaption className="mt-2 text-center text-sm text-neutral-500">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return null;
          })}
        </article>
      </main>
    </div>
  );
};

export default BlogDetail;
