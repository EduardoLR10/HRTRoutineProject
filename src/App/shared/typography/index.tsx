/* eslint-disable camelcase */
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto'
import styled from 'styled-components/native'

export const fonts = {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
}

export const H1 = styled.Text`
  font-family: Roboto_300Light;
  font-size: 42px;
  line-height: 48px;
  letter-spacing: 1px;
`
export const H2 = styled.Text`
  font-family: Roboto_300Light;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1.2px;
`

export const H3 = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 32px;
  line-height: 40px;
`

export const H4 = styled.Text`
  font-family: Roboto_300Light;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.25px;
`

export const H5 = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 24px;
  line-height: 32px;
`

export const H6 = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
`
export const Subtitle1 = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
`

export const Subtitle2 = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
`

export const Body1 = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`

export const Body2 = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 14px;
  line-height: 20px;
`

export const Button = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`

export const Caption = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
`

export const Overline = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`

export const Bold = styled.Text`
  font-weight: bold;
`

export const Italic = styled.Text`
  font-style: italic;
`
