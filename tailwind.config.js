module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "pokemon-yellow": "#ffcb05",
        "pokemon-red": "#CC0000",
        "pokemon-blue": "#2a75bb",
      },
    },
  },
  plugins: [],
};
