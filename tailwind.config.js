module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        urw_form_family: ['urw-form', 'sans-serif']
      },
      colors: {
        t_white: '#ffffff',
        t_orange: {
          100: '#ecb250',
          200: '#f7931e'
        },
        t_green: {
          100: '#95b840',
          200: '#255d57'
        },
        t_dark_brown: '#594a42',
        t_purple: '#990088',
        o_purple: {
          100: '#6154a5',
          200: '#413960'
        },
        o_green: '#85d0a0',
        o_pink: '#fe917d'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
