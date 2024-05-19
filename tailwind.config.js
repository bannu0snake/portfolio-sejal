/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        pecita: ["Pecita", "sans-serif"],
        pontano: ["Pontano Sans", "sans-serif"],
        pinyon: ["Pinyon Script", "sans-serif"],
        play: ["Play", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
