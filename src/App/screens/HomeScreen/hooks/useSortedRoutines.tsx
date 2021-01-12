import { useContext } from 'react'
import Category from '../../../../models/Category'
import Routine from '../../../../models/Routine'
import CategoriesContext from '../../../contexts/CategoriesContext'
import RoutinesContext from '../../../contexts/RoutinesContext'
import UserContext from '../../../contexts/UserContext'

type FilterParam = {
  routine: Routine
  category: Category
  idxFindedName: number
  idxFindedCategoryName: number
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
  !selected || selected.id === fp.category.id

const searchFilter: Filter = fp =>
  fp.idxFindedName !== -1 ||
  fp.idxFindedCategoryName !== -1 ||
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
): Routine[] {
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
    category: categories[routine.category],
    idxFindedName: findSearch(routine.name, searchTxt),
    idxFindedCategoryName: findSearch(
      categories[routine.category].name,
      searchTxt
    ),
    findedTags: routine.tags.filter(tag => findSearch(tag, searchTxt) !== -1),
    lastSeenIdx: lastSeenRoutines.indexOf(routine)
  })

  return routines
    .map(classifier)
    .filter(filter)
    .sort(sorter)
    .map(({ routine }) => routine)
}
