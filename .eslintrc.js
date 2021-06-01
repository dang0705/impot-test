module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
    browser: true,
  },
  // required to lint *.vue files
  plugins: ["vue"],
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/essential` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/strongly-recommended"],
  // add your custom rules here
  rules: {
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": 0,
    "vue/attribute-hyphenation": 0,
    "vue/component-definition-name-casing": ["error", "PascalCase"],
  },
};
