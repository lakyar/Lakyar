import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
  FaCopyright,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="orange-gradient relative m-4 overflow-hidden rounded-4xl p-8 text-neutral-200 md:m-10 md:p-12 lg:p-16 dark:text-neutral-900">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="relative grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">Lakyar Linn</h3>
            <p className="text-sm">
              Creating digital experiences that blend creativity with
              cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:lakyarlinn@gmail.com"
                className="rounded-lg p-2 transition-all hover:scale-110 hover:bg-white/20"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/lakyar"
                className="rounded-lg p-2 transition-all hover:scale-110 hover:bg-white/20"
              >
                <FaTelegram className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/lakyar"
                className="rounded-lg p-2 transition-all hover:scale-110 hover:bg-white/20"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lakyar"
                className="rounded-lg p-2 transition-all hover:scale-110 hover:bg-white/20"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group hover: flex items-center gap-2 transition-colors"
                  >
                    <span className="size-0 rounded-full bg-neutral-900 transition-all group-hover:size-1.5"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Skills</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover: transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <img src="./" alt="" />
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-1 rounded-full bg-neutral-200 dark:bg-neutral-900"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="flex items-center gap-2">
            <FaCopyright /> {currentYear} lakyar. All rights reserved.
          </p>

          <p className="flex items-center gap-1">Thank you for visiting.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
