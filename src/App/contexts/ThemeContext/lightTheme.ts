import { AppTheme } from './styled.d'

export const lightTheme: AppTheme = {
  color: {
    primary: '#0000FF',
    primaryVariant: '#0000AA',
    onPrimary: '#FFFFFF',

    secondary: '#000000',
    secondaryVariant: '#DDDDDD',
    onSecondary: '#000000',

    background: '#DDDDDD',
    onBackground: '#000000',

    surface: '#FFFFFF',
    onSurface: '#333333',

    success: '#333333',
    onSuccess: '#FFFFFF',

    warning: '#FFC107',
    onWarning: '#FFFFFF',

    error: '#FF0000',
    onError: '#FFFFFF'
  },

  elevation: {
    0: '0px 1px 0px #000; elevation: 0',
    1: '0px 1px 1px #000; elevation: 1',
    2: '0px 1px 1.41px #000; elevation: 2',
    3: '0px 1px 2.22px #000; elevation: 3',
    4: '0px 2px 2.62px #000; elevation: 4',
    8: '0px 4px 4.65px #000; elevation: 8'
  },

  space: {
    none: '0px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px'
  },

  size: {
    xs: '64px',
    sm: '126px',
    md: '256px',
    lg: '512px',
    xl: '1024px'
  },

  round: {
    sm: '4px',
    md: '8px',
    lg: '16px'
  }
}
