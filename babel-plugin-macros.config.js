// babel-plugin-macros.config.js
module.exports = {
  twin: {
    config: "tailwind.config.js",
    preset: "styled-components",
    autoCssProp: true,
    dataTwProps: true,
    debugPlugins: false,
    debug: false,
  },
}
