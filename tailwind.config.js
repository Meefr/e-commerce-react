/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "scrollbar-thumb": "#888", // Customize thumb color
        "scrollbar-track": "#f1f1f1", // Customize track color
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0%)" }, // Start from right
          "100%": { transform: "translateX(-100%)" }, // End at left
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" }, // Start from left
          "100%": { transform: "translateX(0%)" }, // Loop back to left
        },
      },
      animation: {
        slideLeft: "slideLeft 40s linear infinite",
        slideRight: "slideRight 40s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".pause-animation": {
            "animation-play-state": "paused",
          },
        },
        ["hover"]
      );
    },
  ],
};
