import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="group relative cursor-pointer"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {/* Main container - sleek pill shape */}
        <div
          className={`relative h-8 w-16 overflow-hidden rounded-full border border-neutral-300/50 bg-linear-to-r from-neutral-200 to-neutral-300 shadow-sm transition-all duration-500 ease-out dark:border-neutral-700/50 dark:from-neutral-800 dark:to-neutral-900 ${isHover ? "scale-105" : "scale-100"} `}
        >
          {/* Animated gradient overlay */}
          <div
            className={`absolute inset-0 rounded-full transition-opacity duration-700 ${
              theme === "dark"
                ? "bg-linear-to-r from-amber-500/10 to-amber-500/10 opacity-100"
                : "bg-linear-to-r from-amber-300/30 to-orange-400/30 opacity-100"
            } `}
          />

          {/* Sun & Moon Icons positioned absolutely */}
          <div className="absolute inset-0 flex items-center justify-between px-2">
            {/* Sun Icon - Fixed position */}
            <div
              className={`h-4 w-4 transition-all duration-700 ease-out ${
                theme === "dark"
                  ? "scale-75 opacity-40"
                  : "scale-100 opacity-100"
              } `}
            >
              <div className="h-full w-full rounded-full bg-amber-500" />
            </div>

            <div
              className={`h-4 w-4 transition-all duration-700 ease-out ${
                theme === "dark"
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-40"
              } `}
            >
              <div className="h-full w-full rounded-full bg-neutral-400" />
            </div>
          </div>

          <div
            className={`absolute top-1 h-6 w-6 rounded-full shadow-md transition-all duration-700 ease-out ${
              theme === "dark"
                ? "left-8 bg-linear-to-br from-neutral-300 to-neutral-100"
                : "left-1 bg-linear-to-br from-orange-500 to-orange-400"
            } flex items-center justify-center`}
          >
            {/* Inner dot */}
            <div
              className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                theme === "dark" ? "bg-neutral-500" : "bg-orange-600"
              } `}
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default ThemeToggle;
