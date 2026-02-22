import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projects";
import { FaExternalLinkAlt, FaLaptop, FaCode } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NotFound from "./NotFound";
import Loading from "../components/Loading";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      const found = projectData.find((p) => p.slug === slug);
      setProject(found);
      setLoading(false);
    }, 500); // Small delay to show loading state

    return () => clearTimeout(timer);
  }, [slug]);

  const projectDetails = project && {
    ...project,
    techStack: project.techStack?.split(", ") || [],
    images: project.images || [{ src: project.cover, name: "Main" }],
  };

  useGSAP(
    () => {
      if (!project || loading) return;

      // Animate content sections on scroll
      gsap.utils.toArray(".animate-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef, dependencies: [project, loading] },
  );

  if (loading) {
    return <Loading />;
  }

  if (!project) {
    return <NotFound title="project" />;
  }

  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-200 via-neutral-200/60 to-transparent dark:from-neutral-950 dark:via-neutral-900/60" />
        </div>

        <div className="absolute right-0 bottom-0 left-0 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex w-full flex-wrap items-center justify-between gap-x-10">
              <h1 className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
                {project.title}
              </h1>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary dark:bg-primary-dark inline-flex min-w-fit items-center gap-2 rounded-lg px-6 py-3 text-white transition-all duration-300 hover:bg-orange-600"
                >
                  <FaLaptop />
                  Live
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="animate-section mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <span className="bg-primary dark:bg-primary-dark h-6 w-1 rounded-full" />
              Project Overview
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.description ||
                  `This project showcases a modern web application built with ${project.techStack}. 
                   The goal was to create a seamless user experience while maintaining high performance 
                   and scalability. Working closely with the client, we delivered a solution that exceeded 
                   expectations and improved their business metrics significantly.`}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="rounded-xl border border-neutral-200 p-3 md:p-6 dark:border-neutral-800">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <FaCode className="text-primary dark:text-primary-dark" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectDetails.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="border-primary dark:border-primary-dark rounded-full border px-3 py-1 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-6 dark:border-neutral-800">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-x-4 text-sm">
                  <span className="text-neutral-500">Status</span>
                  <span className="text-green-600 dark:text-green-400">
                    {project.status}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-x-4 text-sm">
                  <span className="text-neutral-500">Year</span>
                  <span className="">{project.year || "2024"}</span>
                </div>
                <div className="flex items-start justify-between gap-x-4 text-end text-sm">
                  <span className="text-neutral-500">Category</span>
                  <span className="text-xs md:text-sm">{project.industry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="animate-section mb-16">
          <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold">
            <span className="bg-primary dark:bg-primary-dark h-6 w-1 rounded-full" />
            Project Gallery
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6">
            {projectDetails.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  activeImage === index
                    ? "border-primary dark:border-primary-dark scale-105 shadow-lg"
                    : "hover:border-primary/50 border-transparent"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Active Image Preview */}
          <div className="mx-auto mt-6 aspect-video max-w-3xl overflow-hidden rounded-xl">
            <img
              src={projectDetails.images[activeImage].src}
              alt={projectDetails.images[activeImage].name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
