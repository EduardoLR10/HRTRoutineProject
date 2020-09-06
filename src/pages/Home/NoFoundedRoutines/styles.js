import React from 'react'
import styled from 'styled-components'
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  flex-grow: 1;
  align-items: center; justify-content: center;
`

export const Text = styled.Text`
  text-align: center; font-size: 24px; color: #aaa;
`

export const Icon = props => <MaterialCIcon size={96} color="#aaa" {...props} />