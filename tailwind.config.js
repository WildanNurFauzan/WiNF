const { color } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        silkscreen: ["var(--font-silkscreen)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        cerah: "#94db55",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.7) 1px, #fff 5.5px, #fff 100px );",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 7px, #1b1b1b 100px );",
      },
    },
  },
  plugins: [],
};
