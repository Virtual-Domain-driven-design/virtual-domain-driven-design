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
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "focus-within", "active"],
    borderStyle: ["responsive", "hover"],
    flexbox: ["responsive", "group-hover"],
    overflow: ["responsive", "hover", "group-hover"],
    visibility: ["responsive", "group-hover"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}
