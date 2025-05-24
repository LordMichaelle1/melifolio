module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': true },
      browsers: 'last 2 versions',
    },
  },
}
