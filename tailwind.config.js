module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#112240',
          DEFAULT: '#0a192f',
          dark: '#020c1b',
          lightest: '#233554',
        },
        slate: {
          light: '#a8b2d1',
          DEFAULT: '#8892b0',
          dark: '#495670',
          lightest: '#ccd6f6',
        },
        green: '#64ffda',
      },
      maxWidth: {
        '1000px': '1000px',
        '700px': '700px',
        '600px': '600px',
      },
      minWidth: {
        '150px': '150px',
      },
      screens: {
        tablet: '900px',
        laptop: '1220px', // breakpoint for blog page
        'max-md': { max: '767px' },
        'max-xl': { max: '1220px' },
      },
      animation: {
        fadeInButton: 'fadeInButton 0.4s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-in forwards',
        fadeInFromBottom: 'fadeInFromBottom 0.2s ease-in-out forwards',
        fadeInFromBottomSlow: 'fadeInFromBottomSlow 0.6s ease-in-out forwards',
        fadeInFromRight: 'fadeInFromRight 0.5s ease-in-out forwards',
        fadeOutFromRight: 'fadeOutFromRight 0.5s ease-in-out forwards',
        slideUpLittle: 'slideUpLittle 0.2s ease-in-out forwards',
        appear: 'appear 0.2s ease-in-out forwards',
      },
      keyframes: {
        fadeInButton: {
          '0%': {
            backgroundColor: '#0a192f',
          },
          '100%': {
            backgroundColor: '#233554',
          },
        },
        fadeIn: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInFromBottom: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInFromBottomSlow: {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInFromRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeOutFromRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUpLittle: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5px)' },
        },
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        calibre: ['Calibre'],
        sfmono: ['SF Mono'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        small: '0.8125rem',
      },
      transitionDelay: {
        400: '400ms',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
}
