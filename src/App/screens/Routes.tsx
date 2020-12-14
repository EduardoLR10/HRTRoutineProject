import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator as createTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HomeScreen from './HomeScreen'
import FavoritesScreen from './FavoritesScreen'
import AboutScreen from './AboutScreen'

const Tab = createTabNavigator()

export default function Routes(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{ tabBarVisible: false }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarLabel: 'Rotinas' }}
          />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
