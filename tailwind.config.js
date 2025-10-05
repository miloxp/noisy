/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "noisy-primary": "#FF6B6B",
        "noisy-secondary": "#4ECDC4",
        "noisy-accent": "#45B7D1",
        "noisy-warm": "#FFA07A",
        "noisy-cool": "#98D8C8",
        "noisy-purple": "#A8E6CF",
        "noisy-pink": "#FFB3BA",
        "noisy-yellow": "#FFD93D",
        "noisy-orange": "#FF8C42",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
