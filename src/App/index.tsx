import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import Routes from './screens/Routes'
import { lightTheme } from './themes/lightTheme'
import { fonts } from './shared/typography'
import { ThemeProvider } from 'styled-components/native'
import { AuthorsProvider } from './contexts/AuthorsContext'

export default function App(): JSX.Element {
  const [areFontsLoaded] = useFonts(fonts)
  if (!areFontsLoaded) return <></>

  return (
    <ThemeProvider theme={lightTheme}>
      <AuthorsProvider>
        <StatusBar style="dark" />
        <Routes />
      </AuthorsProvider>
    </ThemeProvider>
  )
}

registerRootComponent(App)
