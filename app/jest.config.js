module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/app/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/app/__mocks__/file-mock.js`,
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", "\\.cache", "public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  watchPathIgnorePatterns: ["\\.gql\\.json$"],
  watchPlugins: ["gatsby-plugin-testing/jest-plugin"],
  globals: {
    __PATH_PREFIX__: "",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json-summary", "text", "lcov", "html"],
  snapshotResolver: "<rootDir>/app/snapshot-resolver.js",
}
