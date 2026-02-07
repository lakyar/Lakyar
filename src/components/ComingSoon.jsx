import React from "react";

const ComingSoon = ({ sectionName = "Projects", progress = "10%" }) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Section Name */}
        <div className="mb-4 inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
          {sectionName} Section
        </div>

        {/* Main Heading */}
        <h2 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl dark:text-white">
          Coming{" "}
          <span className="relative inline-block">
            <span className="relative bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent dark:from-orange-400 dark:to-orange-400">
              Soon
            </span>
            <span className="absolute -bottom-2 left-0 h-1 w-full animate-pulse bg-gradient-to-r from-orange-500 to-orange-500" />
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
          This section is currently under construction. I'm working hard to
          bring you something amazing. Stay tuned for updates!
        </p>

        {/* Progress Bar */}
        <div className="mx-auto mb-12 max-w-md">
          <div className="mb-2 flex justify-between text-sm text-slate-600 dark:text-slate-400">
            <span>Progress</span>
            <span>{progress}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-500 transition-all duration-1000"
              style={{ width: `${progress}` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
