import React from 'react'
import Routine from '../../../models/Routine'
import routinesList from './routines'

export interface RoutineContextValue {
  routines: { [id: string]: Routine }
}

export const RoutinesContext = React.createContext<RoutineContextValue>({
  routines: {}
})

export interface RoutinesProviderProps {
  children: React.ReactNode
}

export function RoutinesProvider({
  children
}: RoutinesProviderProps): JSX.Element {
  const routines = routinesList().reduce((routines, routine) => {
    routines[routine.id] = routine
    return routines
  }, {} as { [id: string]: Routine })

  return (
    <RoutinesContext.Provider value={{ routines }}>
      {children}
    </RoutinesContext.Provider>
  )
}

export default RoutinesContext
