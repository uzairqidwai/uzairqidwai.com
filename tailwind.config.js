module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
    },
    container: {
      center: true
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.625rem',
      lg: '0.935rem',
      xl: '1.565rem',
      '2xl': '1.875rem',
      '3xl': '2.120rem',
      full: '9999px',
    },
    extend: {},
  },
  variants: {
    extend: {
    }
  },
  plugins: [],
}
