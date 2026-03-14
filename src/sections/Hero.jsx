import React, { useState, useEffect, useRef } from "react";
import heroD from "../assets/images/heroLyD.png";
import heroL from "../assets/images/heroLyL.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    satisfaction: 0,
    coffeeCups: 0,
  });

  const targetCounts = {
    projects: 20,
    years: 2,
    satisfaction: 99,
    coffeeCups: 999,
  };

  const duration = 1500;
  const frameRate = 240;
  const totalFrames = Math.round(duration / (1000 / frameRate));
  const countStarted = useRef(false);

  // Move ALL refs inside the component!
  const lightImageRef = useRef(null);
  const darkImageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textContainerRef = useRef(null);

  // Image scroll animation
  useEffect(() => {
    // Create timeline for both images
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    // Animate both images
    tl.to(
      [lightImageRef.current, darkImageRef.current],
      {
        y: 0,
        ease: "none",
        duration: 1,
      },
      0,
    ).to(
      [lightImageRef.current, darkImageRef.current],
      {
        y: -30,
        ease: "none",
        duration: 1,
      },
      1,
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Button floating animation
  useEffect(() => {
    const buttons = document.querySelectorAll(".cta-button");

    buttons.forEach((button, index) => {
      gsap.to(button, {
        y: -3,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    });

    return () => {
      gsap.killTweensOf(".cta-button");
    };
  }, []);

  // Text animation
  useEffect(() => {
    if (!textContainerRef.current?.children) return;

    const tl = gsap.timeline();

    gsap.set(textContainerRef.current.children, {
      scaleY: 0,
      yPercent: -50,
    });

    tl.to(textContainerRef.current.children, {
      scaleY: 1,
      yPercent: 0,
      duration: 0.4,
      stagger: 0.2,
      delay: 1.5,
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Intersection Observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          !countStarted.current &&
          entries.some((entry) => entry.isIntersecting)
        ) {
          countStarted.current = true;
          startCounting();
        }
      },
      { threshold: 0.5 },
    );

    const statsSections = document.querySelectorAll(
      "#stats-section, #stats-section-mobile",
    );
    statsSections.forEach((section) => {
      observer.observe(section);
    });

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
      className="@container relative min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-48"
    >
      <div className="relative z-10 mx-auto flex w-full flex-wrap justify-between px-4 sm:px-6 lg:px-8 2xl:max-w-7xl @min-[800px]:flex-nowrap">
        <div className="w-[70%] lg:w-3/5 @max-[800px]:w-full @max-[800px]:text-center">
          {/* Main Headline */}
          <h1 className="font-heading mx-auto w-fit text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-white">
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
          <p className="mx-auto max-w-xl text-sm tracking-tighter sm:tracking-normal md:text-base xl:max-w-3xl xl:text-lg">
            Focusing on building modern, high-performance apps with{" "}
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
          <div className="md:mt10 relative z-30 mt-4 flex flex-row items-center justify-around gap-4 md:mt-6">
            <button
              onClick={(e) => scrollToSection(e, "projects")}
              className="group orange-gradient hover:shadow-primary/25 relative flex min-w-fit cursor-pointer items-center justify-center overflow-hidden rounded-md rounded-bl-2xl px-4 py-2 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 md:px-8 md:py-2 md:text-lg lg:py-3 xl:w-1/3 @max-[800px]:w-[35%]"
            >
              <span className="cta-button relative z-10 flex items-center gap-2 text-sm duration-300 group-hover:tracking-widest">
                View My Work
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </span>
              <div className="hover:orange-linear-hover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button
              onClick={(e) => scrollToSection(e, "contact")}
              className="group hover:border-primary hover:text-primary border-primary dark:hover:text-primary-dark dark:border-primary-dark flex min-w-fit cursor-pointer items-center justify-center rounded-md rounded-bl-2xl border-2 px-4 py-2 text-base font-semibold text-black transition-all duration-300 active:scale-95 md:px-8 md:py-2 md:text-lg lg:py-3 xl:w-1/3 @max-[800px]:w-[35%] dark:text-white dark:hover:border-orange-400"
            >
              <span className="cta-button flex items-center gap-2 text-sm duration-300 group-hover:tracking-widest">
                Get In Touch
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats - with counting animation */}
          <div
            id="stats-section"
            className="stats-section mt-10 grid grid-cols-2 gap-4 @max-[800px]:hidden"
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
                <div className="font-bold text-neutral-900 opacity-75 md:text-2xl xl:text-3xl dark:text-white">
                  {stat.value}
                </div>
                <div className="leading-widest font-SG mt-2 text-xs tracking-tight text-neutral-600 sm:text-sm xl:text-base dark:text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* lakyar potrait */}
        <div className="border-primary relative h-80 w-[30%] lg:w-2/5 @max-[800px]:w-full">
          {/* sign text */}
          <div
            ref={textContainerRef}
            className="absolute top-6 z-10 flex w-full flex-col items-center md:top-0"
          >
            <div>
              <h1 className="font-sign -rotate-12 text-6xl tracking-wider text-nowrap text-shadow-lg lg:text-[100px] lg:tracking-normal dark:text-shadow-white/30">
                Lakyar Linn
              </h1>
            </div>
            <div>
              <h1 className="font-sign -rotate-12 text-6xl tracking-wider text-nowrap opacity-50 text-shadow-lg lg:text-[100px] lg:tracking-normal dark:text-shadow-white/30">
                Lakyar Linn
              </h1>
            </div>
            <div>
              <h1 className="font-sign -rotate-12 text-6xl tracking-wider text-nowrap opacity-25 text-shadow-lg lg:text-[100px] lg:tracking-normal dark:text-shadow-white/30">
                Lakyar Linn
              </h1>
            </div>
            <div>
              <h1 className="font-sign -rotate-12 text-6xl tracking-wider text-nowrap opacity-12 text-shadow-lg lg:text-[100px] lg:tracking-normal dark:text-shadow-white/30">
                Lakyar Linn
              </h1>
            </div>
          </div>

          {/* orange ambient */}
          <div className="bg-primary-dark absolute top-0 left-0 size-32 rounded-full opacity-75 blur-3xl lg:size-40"></div>
          {/* <div className="from-primary/0 to-primary-dark absolute -bottom-10 -left-10 z-30 h-32 w-full rounded-full bg-linear-to-b opacity-50 blur-3xl md:bottom-0 dark:opacity-20"></div> */}

          {/* images */}
          <div ref={imageContainerRef} className="relative w-full">
            <div
              ref={lightImageRef}
              className="absolute top-0 left-0 z-20 flex h-90 w-full items-center justify-center lg:h-120 xl:h-140 dark:hidden"
            >
              <div
                className="h-full w-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
                }}
              >
                <img
                  src={heroL}
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            </div>
            <div
              ref={darkImageRef}
              className="absolute top-0 left-0 z-20 hidden h-90 w-full items-center justify-center lg:h-120 xl:h-140 dark:flex"
            >
              <div
                className="h-full w-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
                }}
              >
                <img
                  src={heroD}
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Stats - with counting animation mobile */}
          <div
            id="stats-section-mobile"
            className="stats-section absolute bottom-0 z-30 mt-10 grid w-full grid-cols-2 justify-center gap-4 gap-x-20 md:mt-16 md:gap-6 xl:mt-20 @min-[800px]:hidden"
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
                <div className="leading-widest font-SG mt-2 text-sm tracking-tight text-neutral-800 text-shadow-black/50 text-shadow-xs xl:text-base dark:text-neutral-300 dark:text-shadow-black">
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
