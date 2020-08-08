import { StyleSheet } from 'react-native'
import collorPallete from '../../../assets/collorPallete'

const containerStyle = (props, state) => ({
  style: {
    padding: 4,
  },
  titleStyle: {
    padding: 16,
    fontSize: 16, fontWeight: 'normal',
    color: state.expanded ? collorPallete.red : collorPallete.blue
  },
  titleNumberOfLines: 0, // Don't define a limitit to title number of lines.
})

export { containerStyle }