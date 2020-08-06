import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native'
import styles from './styles'

export default class Figure extends React.Component {

  render = () =>
    <View style={styles.container}>
      <Text style={styles.topLabel}>{this.props.top_label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source={this.props.source} />
      </ScrollView>
      <Text style={styles.bottomLabel}>{this.props.bottom_label}</Text>
    </View>

}