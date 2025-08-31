// eslint.config.cjs
const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  { ignores: ["**/*.cjs", "node_modules/**", "dist/**"] },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ),
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    rules: {},
  },
];
