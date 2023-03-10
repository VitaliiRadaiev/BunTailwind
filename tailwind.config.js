module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        lg: '20px',
        xl: '20px',
        '2xl': '20px',
      },
      screens: {
        DEFAULT: '100%',
        sm: '100%',
        lg: '100%',
        xl: '100%',
      }
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1268px',
      '2xl': '1536px',
    },
    extend: {
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '51': '51',
        '52': '52',
      },
      colors: {
        textColorDark: '#1E1D1B',
        textColorDarkSecond: '#808695', 
        textColorLight: '#fff',
        themeColor: '#1E1D1B',
        themeColorSecond: '#fff',
        themeColorThird: '#00A1E2',
        themeColorFourth: '#F0FAFC',

      },
      fontFamily: {
        icomoon: 'icomoon',
        main: 'Montserrat, sans-serif',
        second: 'Anton, sans-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
