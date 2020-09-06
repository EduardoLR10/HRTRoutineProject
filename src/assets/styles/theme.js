const black = '#000000'
const blue = '#0000ff'
const blueHalfPastel = '#8080FF'
const bluePastel = '#E6E6FF'
const red = '#ff0000'
const redHalfPastel = '#FF8080'
const redPastel = '#FFE6E6'
const white = '#ffffff'

export default theme = {
  dark: false,
  roundness: 4, 
  colors: {
    primary: blue,
    primaryLight: blueHalfPastel,
    primaryDark: undefined,
    secondary: red,
    secondaryLight: redHalfPastel,
    secondaryDark: undefined,
    background: white,
    surface: white,
    error: undefined,
    onPrimary: white,
    onSecondary: white,
    onBackground: black,
    onSurface: black,
    onError: undefined
  }
}