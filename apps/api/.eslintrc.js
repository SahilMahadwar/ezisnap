/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ezisnap/eslint-config/node.js", "@ezisnap/eslint-config/nest.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    sourceType: "module"
  }
};
