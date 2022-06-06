module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  // 配置包拓展，可以拓展他人集成的规则集
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {}
}
