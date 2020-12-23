import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import Routes from './screens/Routes'
import { lightTheme } from './contexts/ThemeContext/lightTheme'
import { fonts } from './shared/typography'
import { ThemeProvider } from 'styled-components/native'
import { AuthorsProvider } from './contexts/AuthorsContext'
import { CategoriesProvider } from './contexts/CategoriesContext'
import { RoutinesProvider } from './contexts/RoutinesContext'
import { UserProvider } from './contexts/UserContext'
import { PortalProvider } from 'react-native-portal'

export default function App(): JSX.Element {
  const [areFontsLoaded] = useFonts(fonts)
  if (!areFontsLoaded) return <></>

  return (
    <ThemeProvider theme={lightTheme}>
      <PortalProvider>
        <StatusBar style="dark" />
        <CategoriesProvider>
          <RoutinesProvider>
            <AuthorsProvider>
              <UserProvider>
                <Routes />
              </UserProvider>
            </AuthorsProvider>
          </RoutinesProvider>
        </CategoriesProvider>
      </PortalProvider>
    </ThemeProvider>
  )
}

registerRootComponent(App)
