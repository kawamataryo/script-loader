module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 6,
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/vue",
  ],
  rules: {},
};
