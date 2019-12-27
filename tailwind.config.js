module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Josefin Sans','Roboto','system-ui','BlinkMacSystemFont','-apple-system','Segoe UI','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif' ],
    },
    extend: {
      width: {
        "14": "3.5rem" 
      },
      height: {
        "14": "3.5rem" 
      },
      padding: {
        "14": "3.5rem" 
      },
      margin: {
        "14": "3.5rem" 
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "focus-within", "active"],
    borderStyle: ["responsive", "hover"],
    flexbox: ["responsive", "group-hover"],
    overflow: ["responsive", "hover", "group-hover"],
    visibility: ["responsive", "group-hover"]
  },
  plugins: []
};
