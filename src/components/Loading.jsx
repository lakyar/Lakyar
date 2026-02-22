import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="relative z-50 flex min-h-[inherit] items-center justify-center">
      <div className="text-center">
        <ScaleLoader color="#f54900" height={35} width={4} />

        <p className="font-display text-primary mt-4 animate-pulse text-lg md:text-xl xl:text-2xl">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
