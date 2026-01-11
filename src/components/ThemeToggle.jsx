import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setIsAnimating(true);
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggle}
        className={`
          relative w-20 h-10 rounded-full transition-all ease-in-out
          bg-gradient-to-r from-blue-400 to-purple-300
          dark:from-gray-700 dark:to-gray-900
          shadow-md cursor-pointer
          transform scale-[0.6] hover:scale-[0.65] md:scale-[0.7] md:hover:scale-[0.8]
          
          ${isAnimating ? 'scale-110' : ''}
        `}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {/* Track */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Sun/Moon Background Effects */}
          <div className={`
            absolute inset-0 bg-yellow-200 transition-all rounded-full
            ${theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
          `} />
          <div className={`
            absolute inset-0 bg-blue-900 transition-all rounded-full
            ${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
          `} />
        </div>

        {/* Stars for Dark Mode */}
        <div className={`
          absolute inset-0 transition-opacity
          ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}
        `}>
          <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-4 left-6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-100" />
          <div className="absolute top-1 left-8 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-200" />
        </div>

        {/* Toggle Handle */}
        <div className={`
          absolute top-1 left-1 w-8 h-8 rounded-full
          transition-all ease-in-out
          transform-gpu
          ${theme === 'dark' 
            ? 'translate-x-10 bg-gray-300' 
            : 'translate-x-0 bg-yellow-400'
          }
          ${isAnimating ? theme === 'dark' ? 'rotate-180' : 'rotate-0' : ''}
          shadow-lg
          flex items-center justify-center
        `}>
          {/* Sun/Moon Icons */}
          <div className="relative w-4 h-4">
            {/* Sun Rays */}
            <div className={`
              absolute inset-0 transition-opacity
              ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}
            `}>
              <div className="absolute top-0 left-1/2 w-0.5 h-1.5 bg-yellow-600 transform -translate-x-1/2 -translate-y-1" />
              <div className="absolute right-0 top-1/2 w-1.5 h-0.5 bg-yellow-600 transform translate-x-1 -translate-y-1/2" />
              <div className="absolute bottom-0 left-1/2 w-0.5 h-1.5 bg-yellow-600 transform -translate-x-1/2 translate-y-1" />
              <div className="absolute left-0 top-1/2 w-1.5 h-0.5 bg-yellow-600 transform -translate-x-1 -translate-y-1/2" />
            </div>
            
            {/* Moon Craters */}
            <div className={`
              absolute inset-0 transition-opacity
              ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}
            `}>
              <div className="absolute top-1 left-1 w-1 h-1 bg-gray-400 rounded-full" />
              <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Cloud for Light Mode */}
        <div className={`
          absolute top-2 right-3 transition-all duration-500
          ${theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
        `}>
          <div className="w-3 h-2 bg-white rounded-full relative">
            <div className="absolute -top-1 left-1 w-2 h-2 bg-white rounded-full" />
            <div className="absolute -top-1 right-1 w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
      </button>

    </div>
  );
}

export default ThemeToggle;