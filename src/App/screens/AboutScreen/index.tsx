import React from 'react'
import { useTheme } from 'styled-components/native'
import Screen from './../../shared/Screen'
import BottomNav from './../../shared/BottomNav'
import { H1 } from './../../shared/typography'
import HrtSection from './HrtSection'
import GoalSection from './GoalSection'
import CoordinatorSection from './CoordinationSection'

export default function AboutScreen(): JSX.Element {
  const theme = useTheme()

  return (
    <Screen>
      <Screen.Main
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 4 }}
      >
        <H1 color={theme.color.onBackground}>Sobre nós</H1>
        <HrtSection />
        <GoalSection />
        <CoordinatorSection />
      </Screen.Main>
      <BottomNav />
    </Screen>
  )
}
