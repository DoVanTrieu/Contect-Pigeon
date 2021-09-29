module.exports = {
  purge: [
    '*.html',
    '*.js',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'maven-pro': ['Maven Pro']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
