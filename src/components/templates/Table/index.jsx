import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import styled from 'styled-components'

const Label = styled.Text`
`
export default class Table extends Component {

  render = () =>
    <DataTable>
      <DataTable.Header>
        {this.props.head.map((header, idx) =>
          <DataTable.Title key={idx} numeric>{header}</DataTable.Title>
        )}
      </DataTable.Header>
      {this.props.data.map((row, idx) =>
        <DataTable.Row key={idx}>
          {row.map((cell, idx) =>
            <DataTable.Cell key={idx} numeric>{cell}</DataTable.Cell>
          )}
        </DataTable.Row>
      )}
    <Label>{this.props.label}</Label>
    </DataTable>
}
