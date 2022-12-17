module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    indent: 0,
    "no-tabs": 0,
    "no-underscore-dangle": 0,
    "space-before-function-paren": 0,
    "quote-props": 0,
    "comma-dangle": 0,
    "operator-linebreak": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "arrow-parens": 0,
    "object-curly-newline": 0,
    "react/no-children-prop": 0,
    "function-paren-newline": 0,
    "implicit-arrow-linebreak": 0,
    "import/prefer-default-export": 0,
    "no-confusing-arrow": 0,
    "react/prop-types": 0
  }
};
