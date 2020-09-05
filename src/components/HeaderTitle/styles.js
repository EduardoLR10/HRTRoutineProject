import { StyleSheet } from 'react-native'
import collorPallete from '../../assets/collorPallete'

export default StyleSheet.create({
  container: title => ({
    fontSize: title.length > 40 ? 14 : title.length > 30 ? 15 : title.length > 20 ? 16 : 17,
    color: collorPallete.red
  })
})