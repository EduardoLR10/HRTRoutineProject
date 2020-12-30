import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import Screen, { Main } from './../../shared/Screen'
import { View } from 'react-native'
import BottomNav from './../../shared/BottomNav'
import RoutinesContext from '../../contexts/RoutinesContext'
import CategoriesContext from '../../contexts/CategoriesContext'
import Category from '../../../models/Category'
import Searchbar from './components/Searchbar'
import UserContext from '../../contexts/UserContext'
import CategoriesSection from './components/CategoriesSection'
import RoutinesSection from './components/RoutinesSection'
import useSortedCategories from './hooks/useSortedCategories'
import useSortedRoutines from './hooks/useSortedRoutines'

const SearchbarContainer = styled.View`
  padding: 16px 16px 0px;
`
export default function HomeScreen(): JSX.Element {
  const sortedRoutines = useSortedRoutines()
  const sortedCategories = useSortedCategories()

  const [searchTxt, setSearchTxt] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )
  function onSearch(): void {
    console.log('Olá')
  }

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <SearchbarContainer>
          <Searchbar
            value={searchTxt}
            onChangeText={setSearchTxt}
            placeholder="Nome, categoria ou marcador"
            onSubmitEditing={onSearch}
          />
        </SearchbarContainer>
        <Main
          style={{ overflow: 'visible' }}
          contentContainerStyle={{ paddingTop: 32 }}
        >
          <CategoriesSection
            categories={sortedCategories}
            style={{ marginBottom: 32 }}
          />
          <RoutinesSection routines={sortedRoutines} />
        </Main>
      </View>
      <BottomNav />
    </Screen>
  )
}
