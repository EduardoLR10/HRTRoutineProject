/* eslint-disable space-before-function-paren */
import { useContext, useEffect, useState } from 'react'
import Category from '../../../../models/Category'
import Routine from '../../../../models/Routine'
import CategoriesContext from '../../../contexts/CategoriesContext'
import RoutinesContext from '../../../contexts/RoutinesContext'
import UserContext from '../../../contexts/UserContext'

type FilterParam = {
  routine: Routine
  categories: Category[]
  idxFindedName: number
  minimumIdxFindedCategoryName: number
  findedTags: string[]
  lastSeenIdx: number
}

type Filter = (fp: FilterParam) => boolean

type Sorter = (fp1: FilterParam, fp2: FilterParam) => number

const normalizeString = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const findSearch = (text: string, search: string): number =>
  normalizeString(text).indexOf(normalizeString(search))

const categoryFilter = (selected: Category | null): Filter => fp =>
  !selected || fp.categories.some(category => selected.id === category.id)

const searchFilter: Filter = fp =>
  fp.idxFindedName !== -1 ||
  fp.minimumIdxFindedCategoryName !== Infinity ||
  fp.findedTags.length > 0

const lastSeenSorter: Sorter = (fp1, fp2) =>
  fp1.lastSeenIdx !== -1 && fp2.lastSeenIdx !== -1
    ? fp1.lastSeenIdx - fp2.lastSeenIdx
    : fp2.lastSeenIdx

const alphabeticSorter: Sorter = (fp1, fp2) =>
  fp1.routine.name.localeCompare(fp2.routine.name, undefined, {
    sensitivity: 'accent'
  })

export default function useSortedRoutines(
  selectedCategory: Category | null,
  searchTxt: string
): { sortedRoutines: Routine[]; isLoading: boolean } {
  const { routines: routinesDict } = useContext(RoutinesContext)
  const routines = Object.values(routinesDict)
  const { categories } = useContext(CategoriesContext)
  const { lastSeenRoutines } = useContext(UserContext)

  const filter: Filter = [
    categoryFilter(selectedCategory),
    searchFilter
  ].reduce(
    (resultFilter, partialFilter) => fp =>
      resultFilter(fp) && partialFilter(fp),
    () => true
  )

  const sorter: Sorter = [
    // lastSeenSorter,
    alphabeticSorter
  ].reduce(
    (resultSort, partialSorter) => (fp1, fp2) =>
      resultSort(fp1, fp2) !== 0
        ? resultSort(fp1, fp2)
        : partialSorter(fp1, fp2),
    () => 0
  )

  const classifier = (routine: Routine): FilterParam => ({
    routine,
    categories: routine.categories.map(category => categories[category]),
    idxFindedName: findSearch(routine.name, searchTxt),
    minimumIdxFindedCategoryName: Math.min(
      ...routine.categories
        .map(category => findSearch(categories[category].name, searchTxt))
        .filter(idx => idx >= 0)
    ),
    findedTags: routine.tags.filter(tag => findSearch(tag, searchTxt) !== -1),
    lastSeenIdx: lastSeenRoutines.indexOf(routine)
  })

  const [sortedRoutines, setSortedRoutines] = useState<Routine[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const sort = () => {
    setSortedRoutines(
      routines
        .map(classifier)
        .filter(filter)
        .sort(sorter)
        .map(({ routine }) => routine)
    )
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      sort()
      setIsLoading(false)
    }, 0)
  }, [selectedCategory, searchTxt])
  return { sortedRoutines, isLoading }
}
