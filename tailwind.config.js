const colors = {
  black: "#16181c",
  red: {
    DEFAULT: "#f54400",
  },
  purple: {
    DEFAULT: "#ad3fff",
  },
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.black,
        red: colors.red,
        purple: colors.purple,
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover"],
      borderWidth: ["hover"],
    },
  },
  plugins: [],
}
