import { View } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'

// const Surface = styled.View`
//   border-radius: ${props => props.theme.round.md};
//   padding: 8px;
//   background: ${props => props.theme.color.surface};
//   box-shadow: ${props => props.theme.elevation[1]};
// `

function Surface({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <View style={{ borderRadius: 16, padding: 8, backgroundColor: 'white' }}>
      {children}
    </View>
  )
}

export default Surface
