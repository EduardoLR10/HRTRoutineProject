import React from 'react'
import Text from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Home from '../Home'
import routines from '../../routines'
import collorPallete from '../../assets/collorPallete'
import { Animated } from 'react-native';

const Stack = createStackNavigator()

export default class Routes extends React.Component {

  render = () =>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        headerMode='float'
        screenOptions={{
          headerTintColor: collorPallete.red,
          headerTitleAlign: 'center',
          cardStyle: {
            backgroundColor: collorPallete.white
          }
        }}
        
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Rotinas HRT' }} />
        {routines.map((Routine, idx) =>
          <Stack.Screen key={idx} name={Routine.title} component={Routine} />
        )}
      </Stack.Navigator>
    </NavigationContainer>


}