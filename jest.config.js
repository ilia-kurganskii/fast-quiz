module.exports = {
  preset: "react-native",
  setupFiles: ["<rootDir>/test/setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/e2e"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|react-native|@storybook|@react-native-community)",
  ],
}
