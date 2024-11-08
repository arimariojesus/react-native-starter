const palette = {
  green: {
    500: '#47CA8F',
    300: '#61DAA3'
  },
  blue: {
    500: '#479BCA',
    300: '#61B0DD'
  },
  red: {
    500: '#CA4747',
    300: '#E05D5D'
  },
  gray: {
    900: '#2F2A36',
    800: '#36313B',
    700: '#3F3A43',
    500: '#45424B',
    300: '#6D6A70',
    0: '#FFFFFF'
  },
  black: '#000000',
  white: '#FFFFFF'
} as const;

export const colors = {
  primary: palette.green[500],
  secondary: palette.gray[800],
  neutral: palette.gray,
  success: palette.green[300],
  danger: palette.red[300],
  text: {
    primary: palette.gray[900],
    secondary: palette.gray[700],
    inverse: palette.white
  },
  background: {
    primary: palette.gray[0],
    secondary: palette.gray[900]
  }
} as const;
