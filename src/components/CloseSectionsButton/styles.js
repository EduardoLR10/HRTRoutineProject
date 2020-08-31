import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    height: 20, width: 20
  }
})
export default styles

export const containerStyles = {
  style: { ...styles.container },
  size: 20,
}