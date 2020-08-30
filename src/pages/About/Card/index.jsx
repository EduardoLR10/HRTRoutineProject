import React from 'react'
import { Card as PaperCard } from 'react-native-paper'
import styles from './styles'

export default class Card extends React.Component {

  render = () =>
    <PaperCard elevation={5} style={{ marginBottom: 10 }}>
      <PaperCard.Title title={this.props.title} titleStyle={styles.title} />
      <PaperCard.Content>
        {this.props.image
          ? <PaperCard.Cover source={this.props.image} style={styles.image} />
          : <></>
        }
        {this.props.children}
      </PaperCard.Content>
    </PaperCard>
}