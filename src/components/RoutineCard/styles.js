import { StyleSheet } from 'react-native'
import '../../assets/collorPallete'
import collorPallete from '../../assets/collorPallete'

export default StyleSheet.create({
  container: { 
    marginVertical: 4, 
    borderWidth: 1, 
    borderColor: collorPallete.blueHalfPastel,
    borderRadius: 4, 
    padding: 8, 
  },
  title: {
    fontSize: 16,
    color: collorPallete.blue,
  },
  info: {
    fontSize: 12,
    color: collorPallete.black,
  }

})

const iconStyles = {
  size: 10,
  color: collorPallete.red
}

export { iconStyles }
