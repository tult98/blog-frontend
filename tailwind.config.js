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
        text: 'hsl(var(--color-text) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        tertiary: 'hsl(var(--color-tertiary) / <alpha-value>)',
        decorative: 'hsl(var(--color-decorative) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        info: 'hsl(var(--color-info) / <alpha-value>)',
        success: 'hsl(var(--color-success) / <alpha-value>)',
        error: 'hsl(var(--color-error) / <alpha-value>)',
        alert: 'hsl(var(--color-alert) / <alpha-value>)',
        'venn-0': 'hsl(var(--color-venn-0) / <alpha-value>)',
        'venn-1': 'hsl(var(--color-venn-1) / <alpha-value>)',
        'gray-100': 'hsl(var(--color-gray-100) / <alpha-value>)',
        'gray-200': 'hsl(var(--color-gray-200) / <alpha-value>)',
        'gray-300': 'hsl(var(--color-gray-300) / <alpha-value>)',
        'gray-400': 'hsl(var(--color-gray-400) / <alpha-value>)',
        'gray-500': 'hsl(var(--color-gray-500) / <alpha-value>)',
        'gray-600': 'hsl(var(--color-gray-600) / <alpha-value>)',
        'gray-700': 'hsl(var(--color-gray-700) / <alpha-value>)',
        'gray-800': 'hsl(var(--color-gray-800) / <alpha-value>)',
        'gray-900': 'hsl(var(--color-gray-900) / <alpha-value>)',
        'gray-1000': 'hsl(var(--color-gray-1000) / <alpha-value>)',
        'subtle-background': 'hsl(var(--color-subtle-background) / <alpha-value>)',
        'subtle-floating': 'hsl(var(--color-subtle-floating) / <alpha-value>)',
        'homepage-light': 'hsl(var(--color-homepage-light) / <alpha-value>)',
        'homepage-dark': 'hsl(var(--color-homepage-dark) / <alpha-value>)',
        'homepage-bg': 'hsl(var(--color-homepage-bg) / <alpha-value>)',
        'syntax-bg': 'hsl(var(--color-syntax-bg) / <alpha-value>)',
        'syntax-highlight': 'hsl(var(--color-syntax-highlight) / <alpha-value>)',
        'syntax-txt': 'hsl(var(--color-syntax-txt) / <alpha-value>)',
        'syntax-comment': 'hsl(var(--color-syntax-comment) / <alpha-value>)',
        'syntax-prop': 'hsl(var(--color-syntax-prop) / <alpha-value>)',
        'syntax-bool': 'hsl(var(--color-syntax-bool) / <alpha-value>)',
        'syntax-val': 'hsl(var(--color-syntax-val) / <alpha-value>)',
        'syntax-str': 'hsl(var(--color-syntax-str) / <alpha-value>)',
        'syntax-name': 'hsl(var(--color-syntax-name) / <alpha-value>)',
        'syntax-del': 'hsl(var(--color-syntax-del) / <alpha-value>)',
        'syntax-regexp': 'hsl(var(--color-syntax-regexp) / <alpha-value>)',
        'syntax-fn': 'hsl(var(--color-syntax-fn) / <alpha-value>)',
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
        sans: ['var(--font-wot-fard)'],
        calibre: ['Calibre'],
        sfmono: ['SF Mono'],
        sourceSansPro: ['var(--font-source-sans-pro)', 'sans-serif'],
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
