module.exports = {
  parser: 'babel-eslint',

  plugins: [
    'react',
  ],

  ecmaFeatures: {
    modules: false
  },

  rules: {
    'no-use-before-define': 2,
  },
};
