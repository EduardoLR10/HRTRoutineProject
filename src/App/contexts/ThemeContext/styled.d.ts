/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components'

export type AppTheme = {
  color: {
    primary: string
    primaryVariant: string
    onPrimary: string

    secondary: string
    secondaryVariant: string
    onSecondary: string

    background: string
    onBackground: string

    surface: string
    onSurface: string

    success: string
    onSuccess: string

    warning: string
    onWarning: string

    error: string
    onError: string
  }

  space: {
    none: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }

  size: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }

  elevation: {
    0: string
    1: string
    2: string
    3: string
    4: string
    8: string
  }

  round: {
    sm: string
    md: string
    lg: string
  }
}
export default AppTheme

declare module 'styled-components/native' {
  export interface DefaultTheme extends AppTheme {}
}
