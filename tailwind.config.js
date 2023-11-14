/** @type {import('tailwindcss').Config} */
module.exports = {
  important: "#root",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite")],
};
