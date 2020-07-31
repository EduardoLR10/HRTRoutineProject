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
        {this.props.head.map(header =>
          <DataTable.Title numeric>{header}</DataTable.Title>
        )}
      </DataTable.Header>
      {this.props.data.map(row =>
        <DataTable.Row>
          {row.map(cell =>
            <DataTable.Cell numeric>{cell}</DataTable.Cell>
          )}
        </DataTable.Row>
      )}
    <Label>{this.props.label}</Label>
    </DataTable>
}
