import React from 'react';
import { Text } from 'react-native'
import styles from './styles';

/**
 * @property {number} props.idx - Index of the reference.
 * @property {string} props.body - Content of the the reference item.
 */
export default class Reference extends React.Component {

  render = () =>
    <Text style={styles.reference}>
      <Text style={styles.index}>{this.props.idx}</Text>. {this.props.body || ""}
    </Text>
}