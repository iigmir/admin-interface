module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": ["error", "always"],
    "quotes": ["error", "double", {
        "avoidEscape": true,
        "allowTemplateLiterals": true
    }],
    "indent": ["error", 4]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
