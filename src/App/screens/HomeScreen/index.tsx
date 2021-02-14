import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components/native'
import Screen, { Main } from './../../shared/Screen'
import { View } from 'react-native'
import BottomNav from './../../shared/BottomNav'
import Category from '../../../models/Category'
import Searchbar from './components/Searchbar'
import CategoriesSection from './components/CategoriesSection'
import RoutinesSection from './components/RoutinesSection'
import useSortedCategories from './hooks/useSortedCategories'
import useSortedRoutines from './hooks/useSortedRoutines'
import Empty from '../../shared/Empty'
import { Bold, Text } from '../../shared/typography'
import { ActivityIndicator } from 'react-native-paper'

const SearchbarContainer = styled.View`
  padding: 16px 16px 0px;
  position: absolute;
  width: 100%;
  height: 64px;
`

export default function HomeScreen(): JSX.Element {
  const theme = useTheme()

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

  const { sortedRoutines, isLoading } = useSortedRoutines(
    selectedCategory,
    _searchedTxt
  )

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <Main
          style={{ overflow: 'visible' }}
          contentContainerStyle={{ paddingTop: 88 }}
        >
          <CategoriesSection
            categories={sortedCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            style={{ marginBottom: 32 }}
          />
          {!isLoading && sortedRoutines.length !== 0 && (
            <RoutinesSection routines={sortedRoutines} />
          )}
          {!isLoading && sortedRoutines.length === 0 && (
            <Empty
              style={{ padding: 32 }}
              color={theme.color.onBackground}
              message={
                <Text>
                  Nenhuma rotina{' '}
                  {selectedCategory && (
                    <Text>
                      de <Bold>{selectedCategory.name}</Bold>{' '}
                    </Text>
                  )}
                  encontrada
                  {searchTxt && (
                    <Text>
                      {' '}
                      na busca por <Bold>{searchTxt} </Bold>
                    </Text>
                  )}
                </Text>
              }
            />
          )}
          {isLoading && (
            <ActivityIndicator
              color={theme.color.primaryVariant}
              size={32}
              style={{ padding: 32 }}
            />
          )}
        </Main>
        <SearchbarContainer>
          <Searchbar
            value={searchTxt}
            onChangeText={setSearchTxt}
            placeholder="Nome, categoria ou marcador"
            onSubmitEditing={onSearch}
            onCancelSearch={onCancelSearch}
          />
        </SearchbarContainer>
      </View>

      <BottomNav />
    </Screen>
  )
}
