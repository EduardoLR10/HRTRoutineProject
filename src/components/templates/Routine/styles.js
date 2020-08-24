import { StyleSheet } from 'react-native'
import collorPallete from '../../../assets/collorPallete'

export default StyleSheet.create({
  routine: {
    backgroundColor: collorPallete.white,
  },
  authorText: {
    margin: 16,
    borderTopWidth: 1,  borderTopColor: collorPallete.red,
    textAlign: 'center',
  },
  authorName: {
    fontWeight: 'bold',
  }
})