/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import Routine from '../../../models/Routine'
import User from '../../../models/User'

export interface UserContextValue {
  readonly user: User
  isFavoriteRoutine: (routine: Routine) => boolean
  toggleFavoriteRoutine: (routine: Routine) => void
  pushRoutineHistory: (routine: Routine) => void
  // getLastSeenCategories: () => Category[]
}
export const UserContext = React.createContext<UserContextValue>({
  user: new User(),
  isFavoriteRoutine: () => {
    throw new Error('Missing UserContext')
  },
  toggleFavoriteRoutine: () => {
    throw new Error('Missing UserContext')
  },
  pushRoutineHistory: () => {
    throw new Error('Missing UserContext')
  }
})
export default UserContext

export interface UserProviderProps {
  children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = React.useState(new User())

  function isFavoriteRoutine(routine: Routine) {
    return user.favoriteRoutines.includes(routine.id)
  }

  function toggleFavoriteRoutine(routine: Routine) {
    const favoriteRoutines = isFavoriteRoutine(routine)
      ? user.favoriteRoutines.filter(id => id !== routine.id)
      : [routine.id, ...user.favoriteRoutines]
    setUser({ ...user, favoriteRoutines })
  }

  function pushRoutineHistory(routine: Routine): void {
    const lastSeenRoutines = [
      routine.id,
      ...user.lastSeenRoutines.filter(id => id !== routine.id)
    ]
    setUser({ ...user, lastSeenRoutines })
  }
  React.useEffect(() => console.log(user.lastSeenRoutines), [user])

  return (
    <UserContext.Provider
      value={{
        user,
        isFavoriteRoutine,
        toggleFavoriteRoutine,
        pushRoutineHistory
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
