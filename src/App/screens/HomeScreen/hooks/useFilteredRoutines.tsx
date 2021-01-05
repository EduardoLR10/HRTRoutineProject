import { useContext } from 'react'
import Category from '../../../../models/Category'
import Routine from '../../../../models/Routine'
import CategoriesContext from '../../../contexts/CategoriesContext'

const normalizeString = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const findSearch = (text: string, search: string): number =>
  normalizeString(text).indexOf(normalizeString(search))
type FilterParam = {
  routine: Routine
  category: Category
  idxFindedName: number
  idxFindedCategoryName: number
  findedTags: string[]
}

export default function useFilteredRoutines(
  routines: Routine[],
  selectedCategory: Category | null,
  searchTxt: string
): Routine[] {
  const { categories } = useContext(CategoriesContext)

  const filter = [
    (fp: FilterParam): boolean =>
      !selectedCategory || selectedCategory.id === fp.category.id,

    (fp: FilterParam): boolean =>
      fp.idxFindedName !== -1 ||
      fp.idxFindedCategoryName !== -1 ||
      fp.findedTags.length > 0
  ].reduce(
    (resultFilter, partialFilter) => fp =>
      resultFilter(fp) && partialFilter(fp),
    () => true
  )

  const classifier = (routine: Routine): FilterParam => ({
    routine,
    category: categories[routine.category],
    idxFindedName: findSearch(routine.name, searchTxt),
    idxFindedCategoryName: findSearch(
      categories[routine.category].name,
      searchTxt
    ),
    findedTags: routine.tags.filter(tag => findSearch(tag, searchTxt) !== -1)
  })

  return routines
    .map(classifier)
    .filter(filter)
    .map(({ routine }) => routine)
}
