import { StyleSheet } from 'react-native'
import collorPallete from '../../assets/collorPallete'

export default StyleSheet.create({
  container: {
    // backgroundColor: collorPallete.white,
  },
  cardList: {
    paddingHorizontal: 8,
  },
})

const buttonGroupStyles = {
  containerStyle: {
    borderWidth: 0,
  },
  innerBorderStyle: {
    width: 0,
  },
  buttonContainerStyle: {
    paddingVertical: 2,
  },
  buttonStyle: {
    marginHorizontal: 2,
    minWidth: 70, maxWidth: 170,
    borderRadius: 4,
    padding: 4,
  },
  textStyle: {
    textAlign: 'center',
    color: collorPallete.black,
  },
  selectedTextStyle: {
    color: collorPallete.red,
  },
  selectedButtonStyle: {
    backgroundColor: collorPallete.redPastel,
  },
}

const searchBarSyles = {
  lightTheme: true,
  containerStyle: {
    elevation: 1,
    marginVertical: 8,
    height: 35,
    padding: 0,
    backgroundColor: 'transparent',
  },
  inputContainerStyle: {
    paddingBottom: 4,
    backgroundColor: collorPallete.white,
  },
  inputStyle: {
    justifyContent: 'center',
    fontSize: 14,
    color: 'black',
  },
}

const cardsListStyles = {
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 10,
    paddingBottom: 128, // This add an invisible component, so all content goes up to the screen. (issue #14)
  },
}

export { buttonGroupStyles, searchBarSyles, cardsListStyles }