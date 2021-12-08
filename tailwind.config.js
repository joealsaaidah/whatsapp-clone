module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      /* colors: {
        "purple-heart": {
          50: "#f9f5fe",
          100: "#f4ecfe",
          200: "#e2cffc",
          300: "#d1b1fa",
          400: "#af77f7",
          500: "#8c3df3",
          600: "#7e37db",
          700: "#692eb6",
          800: "#542592",
          900: "#451e77",
        },
      }, */
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
