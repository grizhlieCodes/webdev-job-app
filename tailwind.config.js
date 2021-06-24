module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        testingColor: 'red'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked']
    },
  },
  plugins: [],
}
