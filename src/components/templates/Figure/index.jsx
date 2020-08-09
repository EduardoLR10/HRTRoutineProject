import React from 'react';
import { Image, ScrollView, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import styles, { imageStyles } from './styles'
import ImageModal from 'react-native-image-modal';

const { width, height } = Dimensions.get('window')

export default class Figure extends React.Component {

  render = () =>
    <View style={styles.container}>
      <Text style={styles.topLabel}>{this.props.top_label}</Text>
      <ImageModal {...imageStyles} source={this.props.source} />
      <Text style={styles.bottomLabel}>{this.props.bottom_label}</Text>
    </View>
}