module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          "dao-header-box-light": "#F6F8F8",
          "dao-header-box-dim": "#192734",
          "dao-header-box-dark": "#15171A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
