// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': 'warn'
  }
};
