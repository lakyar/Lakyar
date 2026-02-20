import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    {
      id: "home",
      label: "Home",
      href: "/#home",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: "skills",
      label: "Skills",
      href: "/#skills",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      href: "/#projects",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      id: "contact",
      label: "Contact",
      href: "/#contact",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only update active link on homepage
      if (isHomePage) {
        const sections = navLinks.map((link) => {
          const id = link.href.split("#")[1];
          return id ? document.getElementById(id) : null;
        });
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i] && scrollPosition >= sections[i].offsetTop) {
            setActiveLink(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Set active link based on current page when not on homepage
  useEffect(() => {
    if (!isHomePage) {
      setActiveLink("home");
    }
  }, [location.pathname, isHomePage]);

  const handleClick = (e, id, href) => {
    e.preventDefault();
    setActiveLink(id);

    if (href.includes("#") && !isHomePage) {
      // Navigate to homepage first, then scroll to section
      window.location.href = href;
    } else if (href.includes("#") && isHomePage) {
      // On homepage, just scroll to section
      const element = document.getElementById(href.split("#")[1]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Regular navigation to different page
      window.location.href = href;
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-full max-w-2xl -translate-x-1/2 px-4">
      <div
        className={`relative mx-auto flex items-center justify-between rounded-full bg-transparent px-5 py-2 transition-all duration-500 ${
          scrolled
            ? "scale-95 border shadow-lg backdrop-blur-sm md:shadow-xl"
            : ""
        } border-white/20 dark:border-neutral-700/50`}
      >
        {/* Navigation Links - Conditional */}
        <div className="flex items-center gap-1 gap-x-3 rounded-full">
          {isHomePage ? (
            navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleClick(e, link.id, link.href)}
                className={`group relative flex size-10 items-center justify-center rounded-full transition-all duration-300 active:scale-75 ${
                  activeLink === link.id
                    ? "scale-110"
                    : "text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                } `}
                aria-label={link.label}
                title={link.label}
              >
                {/* Active Background */}
                <span
                  className={`absolute inset-0 rounded-full bg-linear-to-r from-orange-400 to-orange-500 transition-all duration-500 ease-out ${
                    activeLink === link.id
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-20"
                  } `}
                />

                {/* Icon */}
                <span
                  className={`relative z-10 transition-transform duration-300 ${
                    activeLink === link.id ? "scale-105" : "scale-100"
                  } `}
                >
                  {link.icon}
                </span>

                {/* Tooltip */}
                <span
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-2 py-0 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 dark:bg-white dark:text-neutral-900 ${
                    activeLink === link.id ? "hidden" : ""
                  } `}
                >
                  {link.label}
                </span>
              </a>
            ))
          ) : (
            <>
              <button
                onClick={goBack}
                className="group relative flex size-10 cursor-pointer items-center justify-center rounded-full text-neutral-800 transition-all duration-300 hover:text-neutral-900 active:scale-75 dark:text-neutral-300 dark:hover:text-white"
                aria-label="Go back"
                title="Go back"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-linear-to-r from-orange-400 to-orange-500 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-20" />
                <span className="relative z-10">
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </span>
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-2 py-0 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 dark:bg-white dark:text-neutral-900">
                  Back
                </span>
              </button>

              <button
                onClick={goHome}
                className="group relative flex size-10 cursor-pointer items-center justify-center rounded-full text-neutral-800 transition-all duration-300 hover:text-neutral-900 active:scale-75 dark:text-neutral-300 dark:hover:text-white"
                aria-label="Home"
                title="Home"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-linear-to-r from-orange-400 to-orange-500 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-20" />
                <span className="relative z-10">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-md bg-neutral-900 px-2 py-0 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 dark:bg-white dark:text-neutral-900">
                  Home
                </span>
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>

        <div className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-orange-500/5 to-orange-500/1 blur-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
