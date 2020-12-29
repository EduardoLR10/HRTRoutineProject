import React from 'react'
import styled from 'styled-components/native'
import Screen, { Main } from './../../shared/Screen'
import { ScrollView, View } from 'react-native'
import BottomNav from './../../shared/BottomNav'
import { H2 } from '../../shared/typography'
import RoutinesContext from '../../contexts/RoutinesContext'
import RoutineItem from '../../shared/RoutineItem'
import CategoriesContext from '../../contexts/CategoriesContext'
import CategoryItem from '../../shared/CategoryItem'
import Category from '../../../models/Category'
import Gap from '../../shared/Gap'
import Searchbar from './components/Searchbar'
import UserContext from '../../contexts/UserContext'
import CategoriesSection from './components/CategoriesSection'

const SearchbarContainer = styled.View`
  padding: 16px 16px 0px;
`

const RoutinesList = styled.View`
  padding: 0px 4px;
`

export default function HomeScreen(): JSX.Element {
  const { categories } = React.useContext(CategoriesContext)
  const { lastSeenRoutines, lastSeenCategories } = React.useContext(UserContext)

  const { routines } = React.useContext(RoutinesContext)
  const orderedRoutines = [
    ...lastSeenRoutines,
    ...Object.keys(routines).filter(id => !lastSeenRoutines.includes(id))
  ]

  const orderedCategories = [
    ...lastSeenCategories,
    ...Object.keys(categories).filter(
      category => !lastSeenCategories.includes(category)
    )
  ]

  const [searchString, setSearchString] = React.useState('')
  const [selectedCategory, setCategory] = React.useState<Category | null>(null)
  function onSearch(): void {
    console.log('Olá')
  }

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <SearchbarContainer>
          <Searchbar
            value={searchString}
            onChangeText={setSearchString}
            placeholder="Nome, categoria ou marcador"
            onSubmitEditing={onSearch}
          />
        </SearchbarContainer>
        <Main
          style={{ overflow: 'visible' }}
          contentContainerStyle={{ paddingTop: 32 }}
        >
          <CategoriesSection
            categories={orderedCategories.map(id => categories[id])}
            style={{ marginBottom: 32 }}
          />
          {/* Routines */}
          <RoutinesList>
            <H2 style={{ marginBottom: 16 }}>Rotinas Pediátricas</H2>
            {orderedRoutines
              .map(id => routines[id])
              .map(routine => (
                <React.Fragment key={routine.id}>
                  <RoutineItem routine={routine} />
                  <Gap height={8} />
                </React.Fragment>
              ))}
          </RoutinesList>
        </Main>
      </View>
      <BottomNav />
    </Screen>
  )
}
