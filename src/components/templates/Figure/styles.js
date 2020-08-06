import { StyleSheet } from 'react-native';
import collorPallete from '../../../assets/collorPallete'

export default StyleSheet.create({
  container: {
    marginTop: 7, marginBottom: 14,
    alignItems: 'center',
  },
  topLabel: {
    textAlign: 'center',
    fontSize: 14, fontWeight: 'normal', color: collorPallete.red,
  },
  bottomLabel: {
    fontSize: 10, fontWeight: 'bold', color: collorPallete.black,
  },
})