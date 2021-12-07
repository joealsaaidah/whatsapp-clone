module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#56483b",
      secondary: "#a7967b",
      /* 'danger': '#e3342f', */
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
