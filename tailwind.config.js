// tailwind.config.css
module.exports = {
  purge: [
    "./components/**/*.js",
    "./pages/**/*.js",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

// postcss.config.js
module.exports = {
  plugins: ["tailwindcss", "postcss-preset-env"],
};
