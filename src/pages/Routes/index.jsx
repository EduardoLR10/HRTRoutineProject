import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from './styles'
import Home from '../Home'
import routines from '../../routines'

const Stack = createStackNavigator()

export default class Routes extends React.Component {

  render = () =>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode='float' screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Rotinas HRT' }} />
        {routines.map((Routine, idx) =>
          <Stack.Screen key={idx} name={Routine.title} component={Routine} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    
}