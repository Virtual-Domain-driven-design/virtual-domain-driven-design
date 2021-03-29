const babelOptions = {
  presets: [`@babel/env`, "babel-preset-gatsby", "@babel/preset-typescript"],
  plugins: ["babel-plugin-macros"],
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = require("babel-jest").createTransformer(babelOptions)
