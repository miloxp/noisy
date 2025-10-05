import React from "react";
import SoundboardGrid from "./SoundboardGrid";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-noisy-primary rounded-full opacity-10 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-noisy-secondary rounded-full opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-noisy-accent rounded-full opacity-10 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* App Name */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 mb-6 animate-pulse-slow">
          <span className="bg-gradient-to-r from-noisy-primary via-noisy-secondary to-noisy-accent bg-clip-text text-transparent">
            Noisy
          </span>
        </h1>

        <SoundboardGrid />
      </div>
    </section>
  );
};

export default Hero;
