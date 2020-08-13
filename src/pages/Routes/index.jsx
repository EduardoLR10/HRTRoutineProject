import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOptions } from './styles'
import Home from '../Home'
import routines from '../../routines'
import CloseSectionsButton from '../../components/CloseSectionsButton'
import AboutButton from '../../components/AboutButton'
import HeaderTitle from '../../components/HeaderTitle'

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