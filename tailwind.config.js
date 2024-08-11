/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "scrollbar-thumb": "#888", // Customize thumb color
        "scrollbar-track": "#f1f1f1", // Customize track color
      },
    },
  },
  plugins: [],
};
