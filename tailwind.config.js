const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    greenCustom: {
      700: '#858b7a',
      600: "#636e59",
      500: "#42563d",
      400: "#57844d",
      300: "#cadaaa",

    },
    gold: {
      600: "#a68955",
      500: "#ac884c",
      400: "#d4b279",
      300: "#dfc599",
      200: "#fce8b9"
    },
    grey: {
      DEFAULT: "#afafaf",
    },
    redCustom: {
      DEFAULT: "#C32122",
    },
  },
};


module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      translate: {
        '11/12': '90%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
