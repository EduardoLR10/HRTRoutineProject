import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Home from '../Home'
import routines from '../../routines'
import collorPallete from '../../assets/collorPallete'

const Stack = createStackNavigator()

export default class Routes extends React.Component {

  render = () =>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        title: 'Rotinas HRT',
        headerStyle: {
          backgroundColor: collorPallete.white,
        },
        headerTintColor: collorPallete.black,
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Rotinas HRT' }} />
        {
          routines.map((Routine, idx) =>
            <Stack.Screen key={idx} name={Routine.title} component={Routine} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>


}