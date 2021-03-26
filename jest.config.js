module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", "\\.cache", `<rootDir>.*/public`],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  snapshotSerializers: ["enzyme-to-json"],
  globals: {
    __PATH_PREFIX__: "",
    "ts-jest": {

    }
  },
  collectCoverage    : true,
  coverageDirectory  : "coverage",
  coverageReporters  : ["json-summary", "text", "lcov", "html"],
}
