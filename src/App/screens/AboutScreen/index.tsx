import React from 'react'
import styled, { useTheme } from 'styled-components/native'
import Screen, { Main } from './../../shared/Screen'
import BottomNav from './../../shared/BottomNav'
import { H1 } from './../../shared/typography'
import HrtSection from './HrtSection'
import GoalSection from './GoalSection'
import CoordinatorSection from './CoordinationSection'
import PreceptorsSection from './PreceptorsSection'
import DevelopersSection from './DevelopersSection'

const Gap = styled.View`
  height: 16px;
`

export default function AboutScreen(): JSX.Element {
  const theme = useTheme()

  return (
    <Screen>
      <Main
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 4 }}
      >
        <H1 style={{ color: theme.color.onBackground, marginBottom: 16 }}>
          Sobre nós
        </H1>
        <Gap />
        <HrtSection />
        <Gap />
        <GoalSection />
        <Gap />
        <CoordinatorSection />
        <Gap />
        <PreceptorsSection />
        <Gap />
        <DevelopersSection />
      </Main>
      <BottomNav />
    </Screen>
  )
}
