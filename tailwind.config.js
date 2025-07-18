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
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
