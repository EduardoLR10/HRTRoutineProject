import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator as createTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HomeScreen from './HomeScreen'
import FavoritesScreen from './FavoritesScreen'
import AboutScreen from './AboutScreen'
import RoutineScreen from './RoutineScreen'

const Stack = createStackNavigator()
const Tab = createTabNavigator()

function TabNavigation(): JSX.Element {
  return (
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
  )
}

export default function Routes(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Menu" component={TabNavigation} />
          <Stack.Screen name="Routine" component={RoutineScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
