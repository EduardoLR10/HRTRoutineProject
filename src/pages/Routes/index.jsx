import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from './styles'
import Home from '../Home'
import routines from '../../routines'
import CloseSectionsButton from '../../components/CloseSectionsButton'
import AboutButton from '../../components/AboutButton'

const Stack = createStackNavigator()

export default class Routes extends React.Component {

  render = () =>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode='float' screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle: props => <HeaderTitle title="Rotinas HRT" />,
          headerRight: props => <AboutButton />
        }} />
        {routines.map((Routine, idx) =>
          <Stack.Screen key={idx} name={Routine.title} component={Routine}
            options={{
              headerTitle: props => <HeaderTitle title={Routine.title} />,
              headerRight: props => <CloseSectionsButton />,
            }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>

}

const { width, height } = Dimensions.get('window')

class HeaderTitle extends React.Component {

  render = () =>
    <Text style={{ fontSize: 20, color: 'red' }}>{this.props.title}</Text>
}