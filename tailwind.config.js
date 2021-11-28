module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'dark-navy': '#020c1b',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'dark-slate': '#495670',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
