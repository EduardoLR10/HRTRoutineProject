import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import {
  Body1,
  Body2,
  Button,
  Caption,
  fonts,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Overline,
  Subtitle1,
  Subtitle2
} from './shared/typography'
import styled, { ThemeProvider } from 'styled-components/native'
import { lightTheme } from './themes/lightTheme'

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.error};
  flex: 1;
`

export default function App(): JSX.Element {
  const [areFontsLoaded] = useFonts(fonts)
  if (!areFontsLoaded) return <></>
  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar style="dark" />
      <Container>
        <H1>Headline 1</H1>
        <H2>Headline 2</H2>
        <H3>Headline 3</H3>
        <H4>Headline 4</H4>
        <H5>Headline 5</H5>
        <H6>Headline 6</H6>
        <Subtitle1>Subtitle 1</Subtitle1>
        <Subtitle2>Subtitle 2</Subtitle2>
        <Body1>Body 1</Body1>
        <Body2>Body 2</Body2>
        <Button>Button</Button>
        <Caption>Caption</Caption>
        <Overline>Overline</Overline>
        <Body1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar
          urna et scelerisque fringilla. Nunc sit amet lorem a nunc elementum
          malesuada non dapibus elit. Sed accumsan, diam at vulputate iaculis,
          augue velit dapibus orci, blandit fringilla tellus ligula sed tellus.
          Morbi iaculis vel magna vel volutpat. Morbi non ex porttitor,
          dignissim nisi a, consequat orci. Praesent eleifend, risus vitae
          eleifend pretium, velit odio euismod ligula, quis finibus libero massa
          sed ipsum. Suspendisse eu accumsan magna.
        </Body1>
      </Container>
    </ThemeProvider>
  )
}

registerRootComponent(App)
