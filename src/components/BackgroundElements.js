import React from "react";

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating soundwave elements */}
      <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full text-noisy-primary">
          <path
            d="M10 50 Q30 20, 50 50 T90 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div
        className="absolute top-40 right-20 w-20 h-20 opacity-15 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-noisy-secondary"
        >
          <path
            d="M10 30 Q30 10, 50 30 T90 30 M10 50 Q30 30, 50 50 T90 50 M10 70 Q30 50, 50 70 T90 70"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-40 left-20 w-24 h-24 opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-noisy-accent">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
          />
          <circle
            cx="50"
            cy="50"
            r="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div
        className="absolute top-60 left-1/3 w-12 h-12 opacity-25 animate-float"
        style={{ animationDelay: "3s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-noisy-warm">
          <path
            d="M20 20 L80 20 L80 80 L20 80 Z M30 30 L70 30 L70 70 L30 70 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-60 right-1/3 w-18 h-18 opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-noisy-cool">
          <path
            d="M50 10 L60 40 L90 40 L70 60 L80 90 L50 70 L20 90 L30 60 L10 40 L40 40 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Speaker icon elements */}
      <div
        className="absolute top-1/4 right-10 w-14 h-14 opacity-15 animate-float"
        style={{ animationDelay: "2.5s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-noisy-purple">
          <rect
            x="20"
            y="30"
            width="20"
            height="40"
            rx="4"
            fill="currentColor"
          />
          <path d="M50 40 L70 30 L70 70 L50 60 Z" fill="currentColor" />
          <circle
            cx="75"
            cy="50"
            r="15"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-1/4 left-10 w-16 h-16 opacity-20 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-noisy-pink">
          <rect
            x="25"
            y="25"
            width="25"
            height="50"
            rx="6"
            fill="currentColor"
          />
          <path d="M55 35 L75 25 L75 75 L55 65 Z" fill="currentColor" />
          <circle
            cx="80"
            cy="50"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Musical note elements */}
      <div className="absolute top-1/3 left-1/4 w-8 h-8 opacity-30 animate-bounce-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full text-noisy-yellow">
          <circle cx="20" cy="20" r="8" fill="currentColor" />
          <path d="M28 20 L28 60" stroke="currentColor" strokeWidth="3" />
          <path
            d="M28 60 Q35 60, 35 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-1/3 right-1/4 w-10 h-10 opacity-25 animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-noisy-orange">
          <circle cx="25" cy="25" r="10" fill="currentColor" />
          <path d="M35 25 L35 65" stroke="currentColor" strokeWidth="3" />
          <path
            d="M35 65 Q42 65, 42 55"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-br from-noisy-primary/10 to-noisy-secondary/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-noisy-accent/10 to-noisy-warm/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-noisy-cool/10 to-noisy-purple/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
};

export default BackgroundElements;
