import React from 'react';
import { Image, ScrollView, Text, View, Dimensions } from 'react-native'
import styles from './styles'
import ImageModal from 'react-native-image-modal';

const { width, height } = Dimensions.get('window')

export default class Figure extends React.Component {

  render = () =>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 2}}>
      <ImageModal source={this.props.source} resizeMode='contain'
        imageBackgroundColor={'white'} style={{ maxWidth: width, maxHeight: width, justifyContent: "center" }} />
    </View>

  render2 = () =>
    <View style={styles.container}>
      <Text style={styles.topLabel}>{this.props.top_label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source={this.props.source} />
      </ScrollView>
      <Text style={styles.bottomLabel}>{this.props.bottom_label}</Text>
    </View>

}