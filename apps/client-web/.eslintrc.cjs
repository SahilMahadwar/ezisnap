/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "@ezisnap/eslint-config/react.js",
    "@ezisnap/eslint-config/remix.js"
  ],
  parser: "@typescript-eslint/parser",
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
