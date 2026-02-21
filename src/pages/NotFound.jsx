// pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const NotFound = ({ title = "Page" }) => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <FaExclamationTriangle className="animate-pulse text-6xl text-orange-500" />
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="mb-4 text-8xl font-bold text-neutral-900 md:text-9xl dark:text-white">
          404
        </h1>

        {/* Title */}
        <h2 className="mb-4 text-2xl font-semibold text-neutral-800 capitalize md:text-3xl dark:text-neutral-200">
          {title} Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-md text-neutral-600 dark:text-neutral-400">
          The {title} you're looking for doesn't exist or has been moved. Let's
          get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <FaHome />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
