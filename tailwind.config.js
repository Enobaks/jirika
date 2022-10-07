/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sideNav-white": "#F0F0F0",
        "body-grey": "#f8f8f8",
        carton: "#D0A564",
        primary: "#2D2F7E",
        arc: "#e4e4ec",
        mute: "rgba(0, 0, 0, 0.2)",
        search: "#e8e5f9",
        completed: "#FFB961",
        live: "#35A500",
        book: "#4339F2",
      },
    },
  },
  plugins: [],
};
