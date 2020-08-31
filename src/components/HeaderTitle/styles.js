import { StyleSheet } from 'react-native'
import collorPallete from '../../assets/collorPallete'

export default StyleSheet.create({
  container: title => ({
    fontSize: title.length > 40 ? 14
      : title.length > 35 ? 16
        : title.length > 30 ? 18
          : 20,
    color: collorPallete.red
  })
})