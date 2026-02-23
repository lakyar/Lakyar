import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../data/blogs";
import { FaCalendar, FaClock, FaLink, FaTag, FaUser } from "react-icons/fa";
import NotFound from "./NotFound";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

const BlogDetail = () => {
  const { slug } = useParams();
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
            <h1 className="font-heading mb-4 text-2xl font-bold text-black md:text-3xl xl:text-4xl dark:text-white">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <FaUser className="text-primary dark:text-primary-dark" />
                {blog.author.name}
              </span>
              {/* <span className="flex items-center gap-2">
                <FaEye className="text-primary dark:text-primary-dark" />
                {blog.views.toLocaleString()} views
              </span> */}
              <span className="flex items-center gap-2">
                <FaCalendar className="text-primary dark:text-primary-dark" />
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
          <FaClock className="text-primary dark:text-primary-dark" />
          {blog.readTime} min read
        </span>
        <article className="prose prose-lg prose-neutral dark:prose-invert flex max-w-none flex-col gap-2 font-sans text-neutral-800 md:gap-3 dark:text-neutral-200">
          {blog.content?.map((item, index) => {
            if (item.type === "heading1") {
              return (
                <h2
                  key={index}
                  className="mt-1.5 text-lg font-semibold md:mt-3 md:text-xl xl:mt-4 xl:text-2xl"
                >
                  {item.text}
                </h2>
              );
            }
            if (item.type === "heading2") {
              return (
                <h2
                  key={index}
                  className="mt-1 text-base font-semibold md:mt-2 md:text-lg xl:mt-3 xl:text-xl"
                >
                  {item.text}
                </h2>
              );
            }
            if (item.type === "paragraph") {
              return (
                <p key={index} className="text-base leading-relaxed lg:text-lg">
                  {item.text}
                </p>
              );
            }
            if (item.type === "link") {
              return (
                <a
                  href={item.url}
                  key={index}
                  className="hover:text-primary dark:hover:text-primary-dark flex w-fit items-center gap-x-2 border-b"
                >
                  <FaLink />
                  <span className="leading-relaxed">{item.text}</span>
                </a>
              );
            }
            if (item.type === "list") {
              return (
                <ul
                  key={index}
                  className="list-disc px-6 text-base md:px-8 lg:text-lg"
                >
                  {item.text.map((t, index) => (
                    <li key={index}> {t}</li>
                  ))}
                </ul>
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
            if (item.type === "br") {
              return (
                <div
                  key={index}
                  className="h-px w-full bg-neutral-900/50 dark:bg-neutral-100/50"
                ></div>
              );
            }
            if (item.type === "hr") {
              return (
                <div key={index} className="h-4 w-full bg-transparent"></div>
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
