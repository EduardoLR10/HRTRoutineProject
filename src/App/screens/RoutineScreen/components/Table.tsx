import React from 'react'
import { ScrollView, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { Body, Caption, Subtitle1, Subtitle2 } from '../../../shared/typography'
import styled, { useTheme } from 'styled-components/native'

const Text = styled(Body)`
  padding: 8px;
`

const Row = styled.View`
  flex-direction: row;
  flex: 1;
  border-bottom-color: ${props => props.theme.color.background};
  border-bottom-width: 0.5px;
`

const Header = styled(Row)`
  background: ${props => props.theme.color.secondaryVariant};
  border-top-left-radius: ${props => props.theme.round.sm};
  border-top-right-radius: ${props => props.theme.round.sm};
`

export interface TableProps {
  title?: string
  caption?: string
  header?: React.ReactNode[]
  data: React.ReactNode[][]
  colWidths: number[]
}

export default function Table({
  title,
  caption,
  header,
  data,
  colWidths
}: TableProps): JSX.Element {
  const theme = useTheme()

  return (
    <View style={{ marginTop: 8, marginBottom: 16 }}>
      {title && (
        <Subtitle2 style={{ textAlign: 'center', marginBottom: 4 }}>
          {title}
        </Subtitle2>
      )}
      <ScrollView
        horizontal
        style={{
          marginBottom: 8,
          borderTopWidth: 0.5,
          borderTopColor: theme.color.secondaryVariant
        }}
        contentContainerStyle={{ flexDirection: 'column', minWidth: '100%' }}
      >
        {header && (
          <Header>
            {header.map((colName, column) => (
              <Subtitle1
                color={theme.color.onSecondary}
                key={column}
                style={{
                  width: colWidths[column],
                  padding: 8,
                  textAlignVertical: 'bottom'
                }}
              >
                {colName}
              </Subtitle1>
            ))}
          </Header>
        )}
        {data.map((row, rowId) => (
          <Row key={rowId}>
            {row.map((data, column) => (
              <Text
                key={column}
                style={{
                  width: colWidths[column],
                  padding: 8
                }}
              >
                {data}
              </Text>
            ))}
          </Row>
        ))}
      </ScrollView>
      {caption && <Caption>{caption}</Caption>}
    </View>
  )
}
