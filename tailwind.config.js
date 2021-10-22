// tailwind.config.css
module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
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
