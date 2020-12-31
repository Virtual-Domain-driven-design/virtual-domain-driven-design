module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "Josefin Sans",
        "Roboto",
        "system-ui",
        "BlinkMacSystemFont",
        "-apple-system",
        "Segoe UI",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {},
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "focus-within", "active"],
    borderStyle: ["responsive", "hover"],
    flexbox: ["responsive", "group-hover"],
    overflow: ["responsive", "hover", "group-hover"],
    visibility: ["responsive", "group-hover"],
    aspectRatio: ["responsive"],
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
}
