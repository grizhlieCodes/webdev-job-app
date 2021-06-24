module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: 'media',
  theme: {
    fontFamily:{
      'sans': ['Kumbh Sans'],
    },
    extend: {
      colors: {
        violet: '#5964E0',
        'light-violet': '#939BF4',
        'dark-blue': '#19202D',
        midnight: '#121721',
        'light-grey': '#F4F6F8',
        grey: '#9DAEC2',
        'dark-grey': '#6E8098'
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
