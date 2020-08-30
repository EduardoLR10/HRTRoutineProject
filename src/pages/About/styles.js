import { StyleSheet } from 'react-native'
import collorPallete from '../../assets/collorPallete'

export default StyleSheet.create({
  signature: {
    margin: 16,
    borderTopWidth: 1, borderTopColor: 'red',
    textAlign: 'center',
  },
  coordinatorImage: {
    marginBottom: 8,
    height: 200, width: 150,
    alignSelf: 'center',
  },
})

export const avatarStyle = {
  size: 88,
}

export const contactIconStyle = {
  color: collorPallete.red,
}