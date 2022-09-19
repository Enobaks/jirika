/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sideNav-white": "#F0F0F0",
        "body-grey": "#E5E5E5",
        carton: "#D0A564",
        primary: "#2D2F7E",
      },
    },
  },
  plugins: [],
};
