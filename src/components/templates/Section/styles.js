import { StyleSheet } from 'react-native'
import collorPallete from '../../../assets/collorPallete'

const containerStyle = (props, state) => ({
  style: {
    marginBottom: state.expanded ? 20 : 0,
    padding: 4,
  },
  titleStyle: {
    fontSize: 20, fontWeight: 'normal',
    color: state.expanded ? collorPallete.red : collorPallete.blue
  },
  titleNumberOfLines: 0, // Don't define a limitit to title number of lines.
})

export { containerStyle }