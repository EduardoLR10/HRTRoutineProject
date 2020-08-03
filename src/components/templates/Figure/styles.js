import { Dimensions } from 'react-native';
import styled from 'styled-components'
import collorPallete from '../../../assets/collorPallete'

const SFigure = styled.View`
  align-items: center;
  margin-bottom: 32px;
`

const SImage = styled.Image`
`

const TopLabel = styled.Text `
  text-align: center;
  font-size: 14px;
  font-weight: bold
  color: ${collorPallete.red};
`

const BottomLabel = styled.Text`
  color: ${collorPallete.black};
  font-size: 10px;
  font-weight: bold;
`


export { SFigure, SImage, TopLabel, BottomLabel}