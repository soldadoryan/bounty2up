module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "class-methods-use-this": "off",  
    "no-param-reassign": "off", 
    "camelCase": "off", 
    "no-unused-var": ["error", { "argsIgnorePattern": "next" }],  
    'prettier/prettier': "error",
  },
};
