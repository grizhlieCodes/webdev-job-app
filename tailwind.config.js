module.exports = {
  mode: 'jit',
  purge: ['index.html', './scripts/*.js'],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'sans': ['Kumbh Sans'],
    },
    extend: {
      colors: {
        'violet': '#5964E0',
        'light-violet': '#939BF4',
        'dark-blue': '#19202D',
        'midnight': '#121721',
        'light-grey': '#F4F6F8',
        'grey': '#9DAEC2',
        'dark-grey': '#6E8098'
      },
      screens: {
        'l400': '400px'
      },
      backgroundImage: theme => ({
        'headerMobile': "url('/assets/mobile/bg-pattern-header.svg')",
        'headerTablet': "url('/assets/tablet/bg-pattern-header.svg')",
        'headerDesktop': "url('/assets/desktop/bg-pattern-header.svg')",
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked']
    },
  },
  plugins: [],
}