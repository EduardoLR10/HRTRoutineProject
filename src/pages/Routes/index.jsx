import React from 'react'
import { screenOptions, tabBarOptions } from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../Home'
import routines from '../../routines'
import CloseSectionsButton from '../../components/CloseSectionsButton'
import HeaderTitle from '../../components/HeaderTitle'
import About from '../About';

import 'react-native'

const Stack = createStackNavigator()

export default class Routes extends React.Component {

  render = () =>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="screen" screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={Main}
          options={({ navigation }) => ({
            headerTitle: props => <HeaderTitle title="Rotinas Pediatria HRT" />
          })}
        />
        {routines.map((Routine, idx) =>
          <Stack.Screen key={idx} name={Routine.title} component={Routine}
            options={{
              headerTitle: props => <HeaderTitle title={Routine.title} />,
              headerRight: props => <CloseSectionsButton />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>

}


const Tab = createMaterialTopTabNavigator()

class Main extends React.Component {
  render = () =>
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Routines" component={Home} options={{ title: 'Rotinas' }} />
      <Tab.Screen name="About" component={About} options={{ title: 'Sobre' }} />
    </Tab.Navigator>
}