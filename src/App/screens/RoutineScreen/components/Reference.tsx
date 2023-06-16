import React from 'react'
import { Linking } from 'react-native'
import Icon from '../../../shared/Icon'
import { Body, Bold, Text } from '../../../shared/typography'

export interface ReferenceProps {
  idx: number
  body: string
}

export function Reference({
  idx,
  body
}: // children
ReferenceProps): JSX.Element {
  const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi
  const urlLink = body.match(urlRegex)?.[0]

  return (
    <Body
      style={{
        marginBottom: 8
      }}
    >
      <Bold>{idx}. </Bold>
      <Text
        onPress={() => urlLink && Linking.openURL(urlLink)}
        style={{
          textDecorationLine: urlLink ? 'underline' : 'none'
        }}
      >
        {body}
        {urlLink && (
          <>
            {' '}
            <Icon name="hyperlink" size={14} style={{ paddingLeft: 4 }} />
          </>
        )}
      </Text>
    </Body>
  )
}
