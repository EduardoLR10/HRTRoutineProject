import React, { useContext } from 'react'
import Category from '../../../../models/Category'
import CategoriesContext from '../../../contexts/CategoriesContext'
import UserContext from '../../../contexts/UserContext'

export default function useSortedCategories(): Category[] {
  const { categories } = useContext(CategoriesContext)
  const { lastSeenCategories } = useContext(UserContext)
  return [
    ...lastSeenCategories,
    ...Object.values(categories).filter(
      category => !lastSeenCategories.includes(category)
    )
  ]
}
