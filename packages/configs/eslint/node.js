const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript"
  ].map(require.resolve),
  parserOptions: {
    project
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  plugins: ["only-warn", "@typescript-eslint/eslint-plugin"],
  settings: {
    "import/resolver": {
      typescript: {
        project
      }
    }
  },
  ignorePatterns: [
    ".*.js",
    "node_modules/",
    "dist/",
    ".eslintrc.js",
    "*spec.ts"
  ],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
};
