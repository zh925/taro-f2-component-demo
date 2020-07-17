module.exports = {
  'extends': ['taro/react'],
    rules: {
        'no-shadow': "off",
        quotes: ['error', 'single'],
        'no-console': 'error',
        semi: ['error', 'never'],
        indent: ["error", 4],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent-props': [4, 4],
    }
}
