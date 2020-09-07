import { StyleSheet } from 'react-native'
import styled from 'styled-components'
import collorPallete from '../../assets/collorPallete'

export default StyleSheet.create({})

export const FilterBar = styled.View`
  elevation: 4;
  padding-vertical: 4px;
  background: ${collorPallete.white};
`

export const searchbarStyle = {
  style: {
    height: 40,
    elevation: 0, borderRadius: 4, borderTopWidth: 0.2,
  },
  inputStyle: { fontSize: 14 }
}

export const cardsListStyle = {
  showsVerticalScrollIndicator: false,
  style: {
    backgroundColor: collorPallete.white,
  },
  contentContainerStyle: {
    paddingVertical: 10, paddingHorizontal: 2,
  },
}