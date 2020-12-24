/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import Routine from '../../../models/Routine'
import categories from '../CategoriesContext/categories'
import RoutinesContext from '../RoutinesContext'
import * as userService from './userService'

export type User = {
  readonly favoriteRoutines: string[]
  isFavoriteRoutine: (routine: Routine) => boolean
  toggleFavoriteRoutine: (routine: Routine) => void
  readonly lastSeenRoutines: string[]
  readonly lastSeenCategories: string[]
  pushRoutineHistory: (routine: Routine) => void
}

export const UserContext = React.createContext<User>({
  favoriteRoutines: [],
  lastSeenRoutines: [],
  isFavoriteRoutine: () => {
    throw new Error('Missing UserContext')
  },
  toggleFavoriteRoutine: () => {
    throw new Error('Missing UserContext')
  },
  lastSeenCategories: [],
  pushRoutineHistory: () => {
    throw new Error('Missing UserContext')
  }
})
export default UserContext

export interface UserProviderProps {
  children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const { routines } = React.useContext(RoutinesContext)

  const [favoriteRoutines, setFavoriteRoutines] = React.useState<string[]>([])
  React.useEffect(() => {
    userService
      .getFavoritesRoutines()
      .then(favs => favs.filter(fav => !!routines[fav])) // Check if routine still exists
      .then(setFavoriteRoutines)
  }, [])

  function isFavoriteRoutine(routine: Routine) {
    return favoriteRoutines.includes(routine.id)
  }

  function toggleFavoriteRoutine(routine: Routine) {
    const newFavoriteRoutines = isFavoriteRoutine(routine)
      ? favoriteRoutines.filter(id => id !== routine.id)
      : [routine.id, ...favoriteRoutines]
    setFavoriteRoutines(newFavoriteRoutines)
    userService.setFavoriteRoutines(newFavoriteRoutines)
  }

  const [lastSeenRoutines, setLastSeenRoutines] = React.useState<string[]>([])
  React.useEffect(() => {
    userService
      .getLastSeenRoutines()
      .then(favs => favs.filter(fav => !!routines[fav])) // Check if routine still exists
      .then(setLastSeenRoutines)
  }, [])
  const lastSeenCategories = Object.keys(
    lastSeenRoutines.reduce((categoriesMap, routine) => {
      categoriesMap[routines[routine].category] = routine
      return categoriesMap
    }, {} as { [category: string]: unknown })
  )

  function pushRoutineHistory(routine: Routine): void {
    const newLastSeenRoutines = [
      routine.id,
      ...lastSeenRoutines.filter(id => id !== routine.id)
    ]
    setLastSeenRoutines(newLastSeenRoutines)
    userService.setLastSeenRoutines(newLastSeenRoutines)
  }

  return (
    <UserContext.Provider
      value={{
        favoriteRoutines,
        isFavoriteRoutine,
        toggleFavoriteRoutine,
        lastSeenRoutines,
        lastSeenCategories,
        pushRoutineHistory
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
