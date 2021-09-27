module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat']
      }
    },
  },
  variants: {
    extend: {
      strokeWidth: ['hover', 'focus'],
      borderRadius : ['hover']

    },
  },
  plugins: [require('daisyui')],
}
