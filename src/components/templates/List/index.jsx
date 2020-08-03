import React from 'react';
import { Text } from 'react-native'
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Entypo'; Icon.loadFont()


const List = styled.Text`
  padding-left: 8px;
  margin: 8px 0px;
`

const SLitem = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
`

class LItem extends React.Component {
  render = () =>
    <SLitem>
      <Icon name="dot-single" size={14} />{`${this.props.children}`}
    </SLitem>
}

// function LItem({ children }) {
//   return (
//     <Text>{children ? '-' + children : console.log('Aqui:', children)}</Text>

//   )
// }

export { List, LItem }