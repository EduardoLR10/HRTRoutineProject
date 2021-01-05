import React from 'react'
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native'
import Category from '../../../../models/Category'
import CategoryItem from '../../../shared/CategoryItem'
import Gap from '../../../shared/Gap'
import { H2 } from '../../../shared/typography'

export interface CategoriesSectionProps {
  categories: Category[]
  selectedCategory: Category | null
  onSelectCategory: (seletedCategory: Category) => void
  style?: ViewStyle
}
export default function CategoriesSection({
  categories,
  selectedCategory,
  onSelectCategory,
  style
}: CategoriesSectionProps): JSX.Element {
  return (
    <View style={style}>
      <H2 style={{ marginBottom: 16, paddingHorizontal: 4 }}>Categorias</H2>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 4 }}
      >
        {categories.map(category => (
          <React.Fragment key={category.id}>
            <CategoryItem
              category={category}
              onPress={() => onSelectCategory(category)}
              selected={!selectedCategory || category === selectedCategory}
            />
            <Gap width={8} />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  )
}
