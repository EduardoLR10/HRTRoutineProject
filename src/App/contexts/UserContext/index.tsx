/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import Routine from '../../../models/Routine'
import User from '../../../models/User'

export interface UserContextValue {
  readonly user: User
  isFavoriteRoutine: (routine: Routine) => boolean
  toggleFavoriteRoutine: (routine: Routine) => void
}
export const UserContext = React.createContext<UserContextValue>({
  user: new User([]),
  isFavoriteRoutine: () => {
    throw new Error('Missing UserContext')
  },
  toggleFavoriteRoutine: () => {
    throw new Error('Missing UserContext')
  }
})
export default UserContext

export interface UserProviderProps {
  children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = React.useState(new User([]))

  function isFavoriteRoutine(routine: Routine) {
    return user.favoriteRoutines.includes(routine.id)
  }

  function toggleFavoriteRoutine(routine: Routine) {
    const newFavoriteRoutines = isFavoriteRoutine(routine)
      ? user.favoriteRoutines.filter(id => id !== routine.id)
      : [...user.favoriteRoutines, routine.id]
    setUser({ ...user, favoriteRoutines: newFavoriteRoutines })
  }

  return (
    <UserContext.Provider
      value={{ user, isFavoriteRoutine, toggleFavoriteRoutine }}
    >
      {children}
    </UserContext.Provider>
  )
}
