module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        testingColor: 'red'  ,
        violet700: '#5964E0',
        violet400: '#939BF4',
        blue800: '#19202D',
        blue900: '#121721',
        white: '#FFFFFF',
        grey100: '#F4F6F8',
        grey500: '#9DAEC2',
        grey700: '#6E8098'
        

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
