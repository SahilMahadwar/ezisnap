/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ezisnap/eslint-config/index.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
