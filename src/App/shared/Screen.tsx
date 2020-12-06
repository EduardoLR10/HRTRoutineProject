import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Screen = styled(SafeAreaView)`
  flex: 1 0 0;
  background: ${props => props.theme.color.background};
`

export default Screen

Screen.Main = styled.ScrollView`
  flex: 1 0 0;
`
