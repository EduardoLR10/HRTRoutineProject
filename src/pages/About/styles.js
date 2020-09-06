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
    height: 250, width: 225,
    borderRadius: 4,
    alignSelf: 'center',
  },
})

export const avatarStyle = {
  size: 88,
}

export const contactIconStyle = {
  color: collorPallete.red,
}

export const lattesButtonStyle = {
  uppercase: false,
  color: collorPallete.red,
  style: {
    borderColor: collorPallete.red,
  },
}

export const lattesIconStyle = {
  size: 16,
  color: collorPallete.red,
  style: { marginRight: 2 }
}

export const lattesTextStyle = {
  style: { color: collorPallete.red },
}