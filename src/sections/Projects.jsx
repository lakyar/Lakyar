import React from "react";
import { projectData } from "../data/projects";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import SplitText from "gsap/SplitText.js";

const Projects = () => {
  const [shuffledProjects] = useState(() =>
    [...projectData].sort(() => Math.random() - 0.5),
  );

  // Generate random scale
  const getRandomScale = () => {
    return (0.8 + Math.random() * 0.6).toFixed(2);
  };

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  useGSAP(
    () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 40%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-left">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            Selected <span className="text-orange-500">Work</span>
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
            A collection of projects I've built and contributed to.
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-6 gap-y-4 md:gap-y-8">
          {shuffledProjects.map((project, index) => {
            const scale = getRandomScale();

            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="project-card group relative w-[80%] rounded-lg sm:w-[45%] lg:w-[30%]"
              >
                <div className="w-full p-4 md:p-10">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="transition-transform duration-500 group-hover:scale-105 hover:z-20"
                    style={{
                      transform: `scale(${scale})`,
                    }}
                    loading="lazy"
                  />
                  <div className="absolute top-0 md:top-4">
                    <h3 className="text-primary font-heading dark:text-primary-dark hidden text-xs font-bold duration-300 text-shadow-sm group-hover:scale-110 md:block md:text-sm lg:text-base">
                      {project.title}
                    </h3>
                    <p
                      className={`font-heading mt-4 w-fit -translate-x-3 -rotate-z-12 rounded-lg border px-1 py-0.5 text-xs text-neutral-900 backdrop-blur-lg transition-all duration-300 group-hover:-translate-x-12 group-hover:-rotate-z-90 group-hover:opacity-60 md:-translate-x-8 md:px-2 md:text-sm lg:text-base dark:text-white ${
                        project.startDate.split("-")[0] === "2025"
                          ? "bg-primary/50 border-primary"
                          : project.startDate.split("-")[0] === "2026"
                            ? "border-blue-500 bg-blue-400/50"
                            : "border-pink-300 bg-pink-300/30"
                      }`}
                    >
                      {project.startDate.split("-")[0]}
                    </p>
                  </div>

                  <h3 className="text-primary font-heading dark:text-primary-dark relative z-10 mb-2 scale-125 text-xs font-bold duration-300 text-shadow-sm group-hover:scale-110 md:hidden">
                    {project.title}
                  </h3>
                  <h3 className="description-text line-clamp-2! hidden text-[10px] font-thin tracking-widest group-hover:opacity-30 md:line-clamp-3! md:block md:opacity-75 lg:text-xs">
                    {project.description}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
