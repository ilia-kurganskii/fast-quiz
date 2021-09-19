module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:react-hooks/recommended",
    "standard",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-native"],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    "comma-dangle": 0,
    "no-unused-vars": 0,
    "no-undef": 0,
    quotes: 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": "off",
    "react-native/no-raw-text": 0,
    "space-before-function-paren": 0,
    "no-useless-constructor": 0,
    "no-console": 2,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "@features/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        warnOnUnassignedImports: true,
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
      },
    ],
  },
  ignorePatterns: ["*.mock.ts"],
}
