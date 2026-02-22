import React, { useRef } from "react";
import {
  FaReact,
  FaPaintBrush,
  FaProjectDiagram,
  FaGlobeAsia,
  FaHandshake,
  FaBookOpen,
} from "react-icons/fa";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: 1,
    title: "Frontend Engineering",
    icon: <FaReact className="text-2xl text-blue-400" />,
    description: "Building responsive, performant user interfaces",
    bullets: [
      "React, Vite, Tailwind CSS",
      "Component architecture & reusable systems",
      "API integration & state management",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    title: "UI / UX Design",
    icon: <FaPaintBrush className="text-2xl text-pink-400" />,
    description: "Creating intuitive, accessible user experiences",
    bullets: [
      "Wireframing & layout systems",
      "User flow design",
      "Accessibility basics",
      "Responsive design strategy",
    ],
  },
  {
    id: 3,
    title: "System Architecture & Planning",
    icon: <FaProjectDiagram className="text-2xl text-amber-400" />,
    description: "Structuring scalable, maintainable applications",
    bullets: [
      "Feature scoping & roadmap planning",
      "Database-aware UI thinking",
      "Role-based system design",
    ],
  },
  {
    id: 4,
    title: "Domain Knowledge",
    icon: <FaGlobeAsia className="text-2xl text-emerald-400" />,
    description: "Understanding user context & market needs",
    bullets: [
      "Understanding of anime/manga & media platforms",
      "Knowledge of user behavior in Myanmar market",
      "Familiarity with content subscription & wallet flows",
      "Awareness of common frontend challenges in similar apps",
    ],
  },
  {
    id: 5,
    title: "Communication & Collaboration",
    icon: <FaHandshake className="text-2xl text-green-400" />,
    description: "Bridging technical and non-technical worlds",
    bullets: [
      "Client requirement clarification",
      "Cross-functional collaboration",
      "Technical explanation to non-tech stakeholders",
      "Documentation writing",
    ],
  },
  {
    id: 6,
    title: "Continuous Learning",
    icon: <FaBookOpen className="text-2xl text-rose-400" />,
    description: "Always evolving with the industry",
    bullets: [
      "Learning from documentation & official specs",
      "Rapid adoption of new libraries",
      "AI-assisted productivity workflows",
      "Debugging unfamiliar systems",
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 40%",
              scrub: true,
              // toggleActions: "play none none reverse",
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
      id="skills"
      className="w-full px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-left">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
            Technical &{" "}
            <span className="text-primary dark:text-primary-dark">
              Professional
            </span>{" "}
            Skills
          </h2>
          <p className="mt-4 max-w-2xl text-[13px] tracking-tight sm:text-sm sm:tracking-normal md:mt-6 lg:text-base xl:max-w-4xl dark:text-neutral-300">
            A blend of technical expertise and professional capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group border-primary/50 dark:border-primary-dark rounded-xl border p-3 shadow-sm hover:shadow-md md:p-6"
            >
              <div className="mb-2 flex items-start justify-between md:mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative rounded-lg bg-neutral-100/50 p-2.5 dark:bg-neutral-800/50">
                    <div className="flex h-full w-full items-center justify-center">
                      {skill.icon}
                    </div>
                    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-50 blur-sm duration-300 group-hover:opacity-100 group-hover:blur-lg">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 md:text-lg dark:text-white">
                    {skill.title}
                  </h3>
                </div>
              </div>

              <p className="mb-2 text-sm md:mb-4">{skill.description}</p>

              <ul className="mb-5 space-y-1 sm:space-y-2">
                {skill.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="bg-primary dark:bg-primary-dark mt-1.5 h-1 w-1 shrink-0 rounded-full"></span>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
