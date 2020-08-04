import React from 'react';
import { StatusBar } from 'react-native'
import collorPallete from './src/assets/collorPallete'

import Routes from './src/pages/Routes'

export default class App extends React.Component {

  render = () =>
    <>
      <StatusBar barStyle="dark-content" backgroundColor={collorPallete.white} />
      <Routes />
    </>
}
