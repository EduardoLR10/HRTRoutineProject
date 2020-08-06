import { StyleSheet } from 'react-native'
import collorPallete from '../../../assets/collorPallete'

export default StyleSheet.create({
  container: {
    marginTop: 7, marginBottom: 14,
    alignItems: 'center'
  },
  table: {
    borderColor: collorPallete.bluePastel, borderWidth: 1,borderRadius: 2,
  },
  title: {
    textAlign: 'center',
    fontSize: 14, fontWeight: 'normal', color: collorPallete.red,
  },
  oddRow: {
    backgroundColor: collorPallete.bluePastel,
  },
  evenRow: {
    backgroundColor: collorPallete.white,
  },
  head: {
    padding: 5,
    backgroundColor: collorPallete.blue,
  },
  headText: {
    textAlign: 'center',
    fontSize: 14, fontWeight: 'bold', color: collorPallete.white,
  },
  text: {
    paddingHorizontal: 1,
    textAlign: 'center',
    fontSize: 14, fontWeight: 'normal', color: collorPallete.black
  },
  label: {
    fontSize: 10, fontWeight: 'bold', color: collorPallete.black,
  },
})