// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/display-name': 'off',
    'prettier/prettier': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index'
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['type'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
};
