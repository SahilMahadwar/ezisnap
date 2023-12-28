/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ezisnap/eslint-config/node.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true
  }
};
