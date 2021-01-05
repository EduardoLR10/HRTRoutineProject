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
import useFilteredRoutines from './hooks/useFilteredRoutines'

const SearchbarContainer = styled.View`
  padding: 16px 16px 0px;
`
export default function HomeScreen(): JSX.Element {
  const [searchTxt, setSearchTxt] = useState('')
  const [_searchedTxt, _setSearchedTxt] = useState('')
  function onSearch(): void {
    _setSearchedTxt(searchTxt)
  }
  function onCancelSearch(): void {
    setSearchTxt('')
    _setSearchedTxt('')
  }

  const sortedCategories = useSortedCategories()
  const [selectedCategory, _setSelectedCategory] = useState<Category | null>(
    null
  )
  function setSelectedCategory(category: Category): void {
    _setSelectedCategory(selectedCategory === category ? null : category)
  }

  const _sortedRoutines = useSortedRoutines()
  const filteredRoutines = useFilteredRoutines(
    _sortedRoutines,
    selectedCategory,
    _searchedTxt
  )

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <SearchbarContainer>
          <Searchbar
            value={searchTxt}
            onChangeText={setSearchTxt}
            placeholder="Nome, categoria ou marcador"
            onSubmitEditing={onSearch}
            onCancelSearch={onCancelSearch}
          />
        </SearchbarContainer>
        <Main
          style={{ overflow: 'visible' }}
          contentContainerStyle={{ paddingTop: 32 }}
        >
          <CategoriesSection
            categories={sortedCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            style={{ marginBottom: 32 }}
          />
          <RoutinesSection routines={filteredRoutines} />
        </Main>
      </View>
      <BottomNav />
    </Screen>
  )
}
