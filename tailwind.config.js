/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
      },

      colors: {
        primary: "#33C38A",
        darkprimary: "#27EB8C",
        secondary: "#717171",
        darksecondary: "#AEA8A8",
        debugger: "#F3F3F3",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
};
