import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopyright,
  FaTelegram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Handle hash scrolling when page loads with hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();

    if (isHomePage) {
      // On homepage - scroll to section directly
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Not on homepage - navigate to home with hash
      navigate(`/${sectionId}`);
    }
  };

  return (
    <footer className="m-4 bg-transparent text-neutral-900 md:m-10 xl:m-16 dark:text-neutral-200">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="relative grid gap-6 md:grid-cols-[2fr_1fr_1fr] md:gap-10">
          {/* Brand Column */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-heading text-2xl font-bold">Lakyar Linn</h3>
            <p className="text-sm">
              Creating digital experiences that blend creativity with
              cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:lakyarlinn@gmail.com"
                className="hover:orange-gradient rounded-lg p-2 transition-all hover:scale-110"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/lakyar"
                className="hover:orange-gradient rounded-lg p-2 transition-all hover:scale-110"
              >
                <FaTelegram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/lakyar"
                className="hover:orange-gradient rounded-lg p-2 transition-all hover:scale-110"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lakyar"
                className="hover:orange-gradient rounded-lg p-2 transition-all hover:scale-110"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@lakyarlinn"
                className="hover:orange-gradient rounded-lg p-2 transition-all hover:scale-110"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/lakyarlinn"
                className="hover:orange-gradient rounded-lg p-2 transition-all hover:scale-110"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 md:space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#home"
                  onClick={(e) => handleNavigation(e, "#home")}
                  className="group hover:text-primary dark:hover:text-primary-dark flex items-center gap-2 transition-colors"
                >
                  <span className="bg-primary dark:bg-primary-dark size-0 rounded-full transition-all group-hover:size-1.5" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#skills"
                  onClick={(e) => handleNavigation(e, "#skills")}
                  className="group hover:text-primary dark:hover:text-primary-dark flex items-center gap-2 transition-colors"
                >
                  <span className="bg-primary dark:bg-primary-dark size-0 rounded-full transition-all group-hover:size-1.5" />
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  onClick={(e) => handleNavigation(e, "#projects")}
                  className="group hover:text-primary dark:hover:text-primary-dark flex items-center gap-2 transition-colors"
                >
                  <span className="bg-primary dark:bg-primary-dark size-0 rounded-full transition-all group-hover:size-1.5" />
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#blogs"
                  onClick={(e) => handleNavigation(e, "#blogs")}
                  className="group hover:text-primary dark:hover:text-primary-dark flex items-center gap-2 transition-colors"
                >
                  <span className="bg-primary dark:bg-primary-dark size-0 rounded-full transition-all group-hover:size-1.5" />
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavigation(e, "#contact")}
                  className="group hover:text-primary dark:hover:text-primary-dark flex items-center gap-2 transition-colors"
                >
                  <span className="bg-primary dark:bg-primary-dark size-0 rounded-full transition-all group-hover:size-1.5" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-2 md:space-y-4">
            <h4 className="font-heading text-lg font-semibold">Skills</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <span className="transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 text-sm opacity-75 md:flex-row">
          <p className="flex items-center gap-2 tracking-tighter text-nowrap">
            <FaCopyright /> {currentYear} lakyar. All rights reserved.
          </p>

          <p className="flex items-center gap-1">Thank you for visiting.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
