import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    satisfaction: 0,
    coffeeCups: 9999,
  });

  const targetCounts = {
    projects: 20,
    years: 2,
    satisfaction: 100,
    coffeeCups: 999,
  };

  const duration = 1500;
  const frameRate = 240;
  const totalFrames = Math.round(duration / (1000 / frameRate));
  const countStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countStarted.current) {
          countStarted.current = true;
          startCounting();
        }
      },
      { threshold: 0.5 },
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const increment = (target, current, setter) => {
      const step = target / totalFrames;
      let count = 0;

      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        setter(Math.floor(count));
      }, duration / totalFrames);
    };

    increment(targetCounts.projects, counts.projects, (val) =>
      setCounts((prev) => ({ ...prev, projects: val })),
    );
    increment(targetCounts.years, counts.years, (val) =>
      setCounts((prev) => ({ ...prev, years: val })),
    );
    increment(targetCounts.satisfaction, counts.satisfaction, (val) =>
      setCounts((prev) => ({ ...prev, satisfaction: val })),
    );
    increment(targetCounts.coffeeCups, counts.coffeeCups, (val) =>
      setCounts((prev) => ({ ...prev, coffeeCups: val })),
    );
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (typeof window.lenis !== "undefined") {
      window.lenis.scrollTo(section, {
        duration: 1.5,
        offset: -80,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Availability Badge */}
          <div className="font-SG mb-2 inline-flex scale-90 items-center gap-2 rounded-full bg-emerald-50 px-4 py-1 text-xs sm:scale-100 md:mb-6 md:text-sm dark:bg-emerald-900/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </div>

          {/* Main Headline */}
          <h1 className="font-heading mx-auto text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Lakyar Linn
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-4 mb-2 max-w-xl tracking-tighter text-nowrap sm:text-base sm:tracking-normal md:mt-6 md:text-lg xl:max-w-3xl xl:text-xl">
            Freelance Developer · Co-Founder at{" "}
            <a
              href="https://digitlab.cc"
              className="hover:text-primary dark:hover:text-primary-dark hover:border-primary dark:hover:border-primary-dark border-b border-black duration-300 dark:border-white"
            >
              DigitLab
            </a>
          </p>
          <p className="mx-auto max-w-xl tracking-tighter sm:text-base sm:tracking-normal md:text-lg xl:max-w-3xl xl:text-xl">
            I focus on building modern, high-performance apps with{" "}
            <span className="font-semibold text-[#50a5b8] dark:text-[#77c1d2]">
              Alpine
            </span>
            ,{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React
            </span>
            ,{" "}
            <span className="font-semibold text-[#0092c7] dark:text-[#00bcff]">
              Tailwind
            </span>
            , and{" "}
            <span className="text-primary dark:text-primary-dark font-semibold">
              cutting-edge tech
            </span>
            . Let's turn your ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="md:mt10 mt-6 flex flex-col items-center justify-around gap-4 sm:flex-row">
            <button
              onClick={(e) => scrollToSection(e, "projects")}
              className="group orange-gradient hover:shadow-primary/25 relative flex w-[80%] cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 py-2 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 md:w-1/2 md:px-8 md:py-3 md:text-lg xl:w-1/3"
            >
              <span className="relative z-10 flex items-center gap-2 duration-300 group-hover:tracking-widest">
                View My Work
                <svg
                  className="group-hover:tranneutral-x-1 h-5 w-5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="hover:orange-linear-hover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button
              onClick={(e) => scrollToSection(e, "contact")}
              className="group hover:border-primary hover:text-primary border-primary dark:hover:text-primary-dark dark:border-primary-dark flex w-[80%] cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-base font-semibold text-black transition-all duration-300 active:scale-95 md:w-1/2 md:px-8 md:py-3 md:text-lg xl:w-1/3 dark:text-white dark:hover:border-orange-400"
            >
              <span className="flex items-center gap-2 duration-300 group-hover:tracking-widest">
                Get In Touch
                <svg
                  className="group-hover:tranneutral-x-1 group-hover:text-primary dark:group-hover:text-primary-dark h-5 w-5 text-black duration-300 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats - with counting animation */}
          <div
            id="stats-section"
            className="mt-10 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6 xl:mt-20 xl:gap-8"
          >
            {[
              {
                value: `${counts.projects}+`,
                label: "Projects Built",
                suffix: "+",
              },
              {
                value: `${counts.years}+`,
                label: "Years Experience",
                suffix: "+",
              },
              {
                value: `${counts.satisfaction}%`,
                label: "Client Satisfaction",
                suffix: "%",
              },
              {
                value: `${counts.coffeeCups}+`,
                label: "Cups of Coffee",
                suffix: "+",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-neutral-900 opacity-75 md:text-3xl dark:text-white">
                  {stat.value}
                </div>
                <div className="leading-widest font-SG mt-2 text-xs tracking-tight text-neutral-600 sm:text-sm xl:text-base dark:text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
