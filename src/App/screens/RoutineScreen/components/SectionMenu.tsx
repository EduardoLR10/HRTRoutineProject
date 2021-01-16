import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import { useTheme } from 'styled-components/native'
import Routine from '../../../../models/Routine'
import ListItem from '../../../shared/ListItem'
import Screen, { Main } from '../../../shared/Screen'

export interface SectionMenuProps {
  routine: Routine
  sectionIdx: number
  onSectionIdxChange: (sectionIdx: number) => void
}
export default function SectionMenu({
  routine,
  sectionIdx,
  onSectionIdxChange
}: SectionMenuProps): JSX.Element {
  const theme = useTheme()

  return (
    <Screen>
      <Main
        style={{
          backgroundColor: theme.color.surface,
          marginLeft: 4,
          borderRightWidth: 4,
          borderRightColor: theme.color.primaryVariant
        }}
      >
        {routine.sections.map((section, idx) => (
          <TouchableRipple
            key={section}
            style={{
              backgroundColor:
                sectionIdx === idx ? theme.color.primaryVariant : undefined
            }}
            onPress={() => onSectionIdxChange(idx)}
          >
            <ListItem
              color={
                sectionIdx === idx
                  ? theme.color.onPrimary
                  : theme.color.onSurface
              }
              numberOfLines={0}
            >
              {section}
            </ListItem>
          </TouchableRipple>
        ))}
      </Main>
    </Screen>
  )
}
