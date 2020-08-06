import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native'
import { Table as LibTable, Row } from 'react-native-table-component'
import styles from './styles'

/**
 * @property {string} props.title - Title of the table
 * @property {string} props.label - Additional information to the table.
 * @property {string[]} props.head - Array with the head information.
 * @property {string[][]} props.data - Content cells in the table.
 */
export default class Table extends Component {

  constructor(props) {
    super(props)
    this.widthArr = new Array(props.head.length).fill(150)
  }

  render = () =>
    <View style={styles.container}>
      {this.props.title ? <Text style={styles.title}>{this.props.title}</Text> : <></>}
      <ScrollView horizontal>
        <View style={styles.table}>
          <LibTable>
            <Row data={this.props.head} widthArr={this.widthArr}
              style={styles.head} textStyle={styles.headText} />
          </LibTable>
          <ScrollView>
            <LibTable>{
              this.props.data.map((row, idx) => (
                <Row key={idx} data={row} widthArr={this.widthArr}
                  style={idx % 2 === 0 ? styles.evenRow : styles.oddRow} textStyle={styles.text} />
              ))
            }</LibTable>
          </ScrollView>
        </View>
      </ScrollView>
      {this.props.label ? <Text style={styles.label}>{this.props.label}</Text> : <></>}
    </View>
}