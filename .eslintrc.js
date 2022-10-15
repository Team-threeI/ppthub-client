module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react",  'prettier'],
  rules: { semi: "warn", "no-unused-vars": "warn",  "react/jsx-filename-extension": ["warn",{"extensions":[".js"]}] },
};
