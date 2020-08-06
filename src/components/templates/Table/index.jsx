import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native'
import { Table as LibTable, TableWrapper, Row } from 'react-native-table-component'
import styled from 'styled-components'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
    backgroundColor: '#ffffff',
    alignItems: "center"
  },
  head: {
    padding: 5,
    backgroundColor: '#000',
  },
  headText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
  text: {
    textAlign: 'center'
  },
  dataWrapper: {
    marginTop: 0
  },
  row: {
    backgroundColor: '#F7F8FA'
  }
})

const Label = styled.Text`
`

export default class Table extends Component {

  constructor(props) {
    super(props)
    this.widthArr = new Array(props.head.length).fill(150)
  }

  render = () =>
    <View style={styles.container}>
      {this.props.title ? <Label>{this.props.title}</Label> : <></>}
      <ScrollView horizontal>
        <View>
          <LibTable borderStyle={{ borderColor: '#C1C0B9' }}>
            <Row data={this.props.head} widthArr={this.widthArr} style={styles.head} textStyle={styles.headText} />
          </LibTable>
          <ScrollView style={styles.dataWrapper}>
            <LibTable borderStyle={{ borderColor: '#C1C0B9' }}>{
              this.props.data.map((row, idx) => (
                <Row key={idx} data={row} widthArr={this.widthArr}
                  style={[styles.row, idx % 2 && { backgroundColor: '#ffffff' }]} textStyle={styles.text} />
              ))
            }</LibTable>
          </ScrollView>
        </View>
      </ScrollView>
      {this.props.label ? <Label>{this.props.label}</Label> : <></>}
    </View>
}