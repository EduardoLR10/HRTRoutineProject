import React from 'react'
import { Text, Container, Icon } from './styles'

export default class NoFoundedRoutines extends React.Component {
  render = () =>
    <Container>
      <Icon name="file-find-outline" />
      <Text>Nenhuma rotina encontrada</Text>
    </Container>
}