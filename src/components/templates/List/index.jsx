import React from 'react';
import { View, Text } from 'react-native'
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Entypo'; Icon.loadFont()


const List = styled.View`
  padding-left: 8px;
  margin-bottom: 4px;
`

const SLItem = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
`

class LItem extends React.Component {

  render = () =>
    <SLItem>
      <Icon name="dot-single" size={14} />{this.props.children}
    </SLItem>
}

// function LItem({ children }) {
//   return (
//     <Text>{children ? '-' + children : console.log('Aqui:', children)}</Text>

//   )
// }

export { List, LItem }