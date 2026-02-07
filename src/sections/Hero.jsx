import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/5 to-pink-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Availability Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </div>

          {/* Main Headline */}
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
            Hi, I'm Lakyar
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-8 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
            Passionate web developer specializing in building modern, performant
            applications with{" "}
            <span className="font-semibold text-[#50a5b8] dark:text-[#77c1d2]">
              Alpine
            </span>
            ,{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React
            </span>
            ,{" "}
            <span className="font-semibold text-[#0092c7] dark:text-[#00bcff]">
              Tailwind CSS
            </span>
            , and{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              cutting-edge tech
            </span>
            . Let's turn your ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                View My Work
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a> */}

            <a
              href="mailto:lakyarlinn@gmail.com"
              className="group rounded-full border-2 border-slate-300 bg-white/50 px-8 py-4 text-lg font-semibold text-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:bg-white/80 hover:text-blue-600 active:scale-95 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:hover:border-blue-400 dark:hover:bg-slate-800/80"
            >
              <span className="flex items-center gap-3">
                Get In Touch
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { value: "20+", label: "Projects Built" },
              { value: "3+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "∞", label: "Cups of Coffee" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
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
