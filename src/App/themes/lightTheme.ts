import { AppTheme } from './styled.d'

export const lightTheme: AppTheme = {
  color: {
    primary: '#0000FF',
    primaryVariant: '#0000AA',
    onPrimary: '#FFFFFF',

    secondary: '#000000',
    secondaryVariant: '#DDDDDD',
    onSecondary: '#FFFFFF',

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
    0: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    1: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    2: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    3: '0px 3px 4px rgba(0, 0, 0, 0.25)',
    4: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    8: '0px 8px 4px rgba(0, 0, 0, 0.25)'
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
