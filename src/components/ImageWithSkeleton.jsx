import React, { useState } from "react";

const ImageWithSkeleton = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton */}
      {!loaded && (
        <div className="bg-primary/10 absolute inset-0 animate-pulse overflow-hidden rounded-lg">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white to-transparent dark:via-white/20" />
        </div>
      )}

      {/* Image */}
      {!error && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800">
          <span className="p-2 text-xs text-wrap text-neutral-500">
            Failed to load image
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;
