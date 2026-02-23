import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogs";
import { FaCalendar, FaEye, FaClock } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const cardsRef = useRef([]);

  const sortedBlogs = [...blogData].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const showMore = () => setVisibleCount((prev) => prev + 4);
  const showAll = () => setVisibleCount(sortedBlogs.length);

  return (
    <section id="blogs" className="w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-left">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            Lakyar's <span className="text-orange-500">Blog Posts</span>
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            I'll be writing about whatever catches my interest — tech, web dev,
            books I'm reading, or just random thoughts. Basically a digital
            garden of things I find cool.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {sortedBlogs.slice(0, visibleCount).map((blog, index) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-neutral-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithSkeleton
                  src={blog.cover}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Tags Overlay */}
                <div className="absolute top-3 right-3 flex gap-1">
                  {blog.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 2 && (
                    <span className="rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                      +{blog.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-3 md:p-5">
                <h3 className="mb-2 line-clamp-2 text-base text-neutral-900 transition-colors group-hover:text-orange-500 sm:font-semibold md:text-lg dark:text-white">
                  {blog.title}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500">
                  <span className="flex items-center gap-2">
                    <FaCalendar className="text-orange-500" />
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock className="text-orange-500" />
                    {blog.readTime} min read
                  </span>
                  {/* <span className="flex items-center gap-1">
                    <FaEye className="text-orange-500" />
                    {blog.views.toLocaleString()}
                  </span> */}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visibleCount < sortedBlogs.length && (
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={showMore}
              className="group relative overflow-hidden rounded-full bg-orange-500 px-8 py-1.5 font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 md:py-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Load More
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7-7-7m14-6l-7-7-7 7"
                  />
                </svg>
              </span>
            </button>

            <button
              onClick={showAll}
              className="group rounded-full border border-neutral-300 px-8 py-1.5 font-medium text-neutral-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 md:py-2 dark:border-neutral-700 dark:text-neutral-300"
            >
              See All ({sortedBlogs.length})
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {visibleCount >= sortedBlogs.length && visibleCount > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount(4)}
              className="group rounded-full border border-neutral-300 px-8 py-1.5 font-medium text-neutral-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 md:py-2 dark:border-neutral-700 dark:text-neutral-300"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
