// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#fc8804",
          600: "#db7503",
        },
      },
    },
  },
  plugins: [],
};
