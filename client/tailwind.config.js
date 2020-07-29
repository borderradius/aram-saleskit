module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: {
    enabled: false
  },
  theme: {
    container: {
      center: false
    },
    customForms: (theme) => ({
      dark: {
        'input, textarea, multiselect, checkbox, radio': {
          backgroundColor: theme('colors.gray.900')
        },
        select: {
          backgroundColor: theme('colors.gray.600')
        }
      },
      sm: {
        'input, textarea, multiselect, select': {
          fontSize: theme('fontSize.sm'),
          padding: `${theme('spacing.1')} ${theme('spacing.2')}`
        },
        select: {
          paddingRight: `${theme('spacing.4')}`
        },
        'checkbox, radio': {
          width: theme('spacing.3'),
          height: theme('spacing.3')
        }
      }
    }),
    extend: {
      // opacity: {
      //   '0': '0',
      //   '25': '0.25',
      //   '50': '0.5',
      //   '75': '0.75',
      //   '100': '1'
      // },
      zIndex: {
        '999': '999'
      },
      colors: {
        black: '#000',
        white: '#fff',
        'adm-blue': '#494b74',
        'adm-blue-light': '#90a3ff',
        'main-green': '#7fd334'
      },
      spacing: {
        '12': '2.5rem',
        '14': '3.5rem',
        '18': '4.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '100': '100px',
        '120': '120px',
        '140': '140px',
        '160': '160px',
        '180': '180px',
        '300': '300px',
        '380': '380px',
        '480': '480px',
        '40': '40px',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '70p': '70%',
        '10p': '10%',
        '5p': '5%',
        '4p': '4%',
        '3p': '3%',
        '2p': '2%',
        '1p': '1%'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover'],
    tableLayout: ['responsive', 'hover', 'focus']
  },
  plugins: [require('@tailwindcss/custom-forms')]
}
