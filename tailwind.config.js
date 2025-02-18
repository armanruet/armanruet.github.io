// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindTypography = require('@tailwindcss/typography');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindForms = require('@tailwindcss/forms');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindScrollbar = require('tailwind-scrollbar');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx', './lib/**/*.ts'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
        0.75: '0.1875rem',
        'content-sm': 'calc(100vh - 4.5rem)',
        content: 'calc(100vh - 4rem)',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      letterSpacing: {
        tightest: '-.075em',
      },
      fontSize: {
        'base': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px base
        'lg': ['1.25rem', { lineHeight: '1.875rem' }],    // 20px
        'xl': ['1.5rem', { lineHeight: '2rem' }],         // 24px
        '2xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
        '4xl': ['3rem', { lineHeight: '3rem' }],          // 48px
        '5xl': ['3.75rem', { lineHeight: '3.75rem' }],    // 60px
        '6xl': ['4.5rem', { lineHeight: '4.5rem' }],      // 72px
        '7xl': ['6rem', { lineHeight: '6rem' }],          // 96px
        '8xl': ['8rem', { lineHeight: '8rem' }],          // 128px
        '8.5xl': ['9rem', { lineHeight: '9rem' }],        // 144px
      },
      fontFamily: {
        sans: ['Mukta', ...defaultTheme.fontFamily.sans],
      },
      gradientColorStops: {
        'gradient-1-start': '#F20089',
        'gradient-1-end': '#D100D1',
        'gradient-2-start': '#D100D1',
        'gradient-2-end': '#A100F2',
        'gradient-3-start': '#A100F2',
        'gradient-3-end': '#2D00F7',
      },
      colors: {
        primary: {
          100: '#FDD1D9',
          200: '#FBA4BC',
          300: '#F575A5',
          400: '#EB519B',
          500: '#DE1D8D',
          600: '#BE1588',
          700: '#9F0E7F',
          800: '#800972',
          900: '#6A0568',
        },
        success: {
          100: '#E4FCDB',
          200: '#C3FAB9',
          300: '#99F193',
          400: '#74E377',
          500: '#49D159',
          600: '#35B34F',
          700: '#249647',
          800: '#17793D',
          900: '#0E6437',
        },
        info: {
          100: '#CCFCFF',
          200: '#99F2FF',
          300: '#66E2FF',
          400: '#3FCEFF',
          500: '#00AEFF',
          600: '#0087DB',
          700: '#0065B7',
          800: '#004793',
          900: '#00337A',
        },
        warning: {
          100: '#FEF1CF',
          200: '#FDE09F',
          300: '#FBC96F',
          400: '#F8B24B',
          500: '#F48E11',
          600: '#D1700C',
          700: '#AF5508',
          800: '#8D3D05',
          900: '#752D03',
        },
        danger: {
          100: '#FFDCD3',
          200: '#FFB1A8',
          300: '#FF7D7C',
          400: '#FF5C6A',
          500: '#FF264D',
          600: '#DB1B50',
          700: '#B7134F',
          800: '#930C4A',
          900: '#7A0747',
        },
        'spotify-green': '#1DB954',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '1.125rem',
            color: theme('colors.gray.700'),
            lineHeight: '1.75',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'h1, h2, h3, h4': {
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3',
            },
            h1: {
              fontSize: '2.5em',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontSize: '2em',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontSize: '1.5em',
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              fontSize: '1.25em',
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.gray.700'),
              '&:hover': {
                color: theme('colors.gray.700'),
              },
              code: { color: theme('colors.primary.400') },
            },
            code: {
              color: theme('colors.green.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            'ul li > :last-child': {
              margin: 0,
            },
            'ul li > :first-child': {
              margin: 0,
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            fontSize: '1.125rem',
            color: theme('colors.gray.300'),
            lineHeight: '1.75',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'h1, h2, h3, h4': {
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3',
            },
            h1: {
              fontSize: '2.5em',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontSize: '2em',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontSize: '1.5em',
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              fontSize: '1.25em',
              color: theme('colors.gray.100'),
            },
            a: {
              color: theme('colors.gray.300'),
              '&:hover': {
                color: theme('colors.gray.300'),
              },
              code: { color: theme('colors.primary.400') },
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            'ul li > :last-child': {
              margin: 0,
            },
            'ul li > :first-child': {
              margin: 0,
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    tailwindForms,
    tailwindTypography(),
    tailwindScrollbar({ nocompatible: true }),
  ],
};
