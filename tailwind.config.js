/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        vsm: "400px",
        xmd: "800px",
        "2xl": "1400px",
      },
      fontFamily: {
        k2d: ["K2D", "sans-serif"],
      },
    },
  },
  plugins: [],
};
