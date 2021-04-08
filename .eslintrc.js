module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'comma-dangle': 0,
    'no-loop-func': 0,
    'no-undef': 0,
    'no-restricted-globals': 0,
    'operator-linebreak': 0,
    'no-unused-vars': 0,
  },
};
