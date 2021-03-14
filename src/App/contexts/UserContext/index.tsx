/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import Category from '../../../models/Category'
import Routine from '../../../models/Routine'
import CategoriesContext from '../CategoriesContext'
import RoutinesContext from '../RoutinesContext'
import * as userService from './userService'

export type User = {
  readonly favoriteRoutines: Routine[]
  isFavoriteRoutine: (routine: Routine) => boolean
  toggleFavoriteRoutine: (routine: Routine) => void
  readonly lastSeenRoutines: Routine[]
  readonly lastSeenCategories: Category[]
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
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const { routines } = useContext(RoutinesContext)
  const { categories } = useContext(CategoriesContext)

  const [favoriteRoutines, setFavoriteRoutines] = useState<Routine[]>([])
  useEffect(() => {
    userService
      .getFavoritesRoutines()
      .then(favsId => favsId.filter(favId => !!routines[favId])) // Check if routine still exists
      .then(favsId => favsId.map(favId => routines[favId]))
      .then(setFavoriteRoutines)
  }, [])

  function isFavoriteRoutine(routine: Routine) {
    return favoriteRoutines.includes(routine)
  }

  function toggleFavoriteRoutine(routine: Routine) {
    const newFavoriteRoutines = isFavoriteRoutine(routine)
      ? favoriteRoutines.filter(fav => fav.id !== routine.id)
      : [routine, ...favoriteRoutines]
    setFavoriteRoutines(newFavoriteRoutines)
    userService.setFavoriteRoutines(newFavoriteRoutines.map(r => r.id))
  }

  const [lastSeenRoutines, setLastSeenRoutines] = React.useState<Routine[]>([])
  useEffect(() => {
    userService
      .getLastSeenRoutines()
      .then(ids => ids.filter(id => !!routines[id])) // Check if routine still exists
      .then(ids => ids.map(id => routines[id]))
      .then(setLastSeenRoutines)
  }, [])

  useEffect(
    () =>
      console.log(
        'Categories: ',
        lastSeenRoutines.reduce(
          (lastSeenCategories, routine) =>
            routine.categories.reduce(
              (lastSeenCategories, category) =>
                lastSeenCategories.includes(category)
                  ? lastSeenCategories
                  : [...lastSeenCategories, category],
              lastSeenCategories
            ),
          [] as string[]
        )
      ),
    [lastSeenRoutines]
  )
  const lastSeenCategories = lastSeenRoutines
    .reduce(
      (lastSeenCategories, routine) =>
        routine.categories.reduce(
          (lastSeenCategories, category) =>
            lastSeenCategories.includes(category)
              ? lastSeenCategories
              : [...lastSeenCategories, category],
          lastSeenCategories
        ),
      [] as string[]
    )
    .map(id => categories[id])

  function pushRoutineHistory(routine: Routine): void {
    const newLastSeenRoutines = [
      routine,
      ...lastSeenRoutines.filter(({ id }) => id !== routine.id)
    ]
    setLastSeenRoutines(newLastSeenRoutines)
    userService.setLastSeenRoutines(newLastSeenRoutines.map(({ id }) => id))
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
