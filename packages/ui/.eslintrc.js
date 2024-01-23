/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ezisnap/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  rules: {
    "@typescript-eslint/no-unsafe-assignment": "off",
  },
};
