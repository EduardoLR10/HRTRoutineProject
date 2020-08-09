import { StyleSheet, Dimensions } from 'react-native';
import collorPallete from '../../../assets/collorPallete'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    marginTop: 7, marginBottom: 14,
    alignItems: 'center',
  },
  topLabel: {
    textAlign: 'center',
    fontSize: 14, fontWeight: 'normal', color: collorPallete.red,
  },
  image: {
    width: width, maxHeight: width / 2,
  },
  bottomLabel: {
    fontSize: 10, fontWeight: 'bold', color: collorPallete.black,
  },
})

const imageStyles = {
  resizeMode: "contain",
  style: styles.image,
}

export default styles
export { imageStyles }