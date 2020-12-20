import React from 'react'
import Category from '../../../models/Category'
import categoriesList from './categories'

export interface CategoriesContextValue {
  categories: { [id: string]: Category }
}

export const CategoriesContext = React.createContext<CategoriesContextValue>({
  categories: {}
})

export interface CategoriesProviderProps {
  children: React.ReactNode
}

export function CategoriesProvider({
  children
}: CategoriesProviderProps): JSX.Element {
  const categories = categoriesList.reduce((categories, category) => {
    categories[category.id] = category
    return categories
  }, {} as { [id: string]: Category })

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContext
