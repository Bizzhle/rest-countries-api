module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      "nunito-sans": '"Nunito Sans", sans-serif',
    },
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      colors: {
        primary: {
          "v-dark-blue": "#111517",
          "dark-gray": "	#858585",
          white: "#ffffff",
          "v-light-gray": "#fafafa",
        },
        secondary: {
          "dark-blue": "	#2b3945",
          "v-dark-blue": "	#202c37",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
