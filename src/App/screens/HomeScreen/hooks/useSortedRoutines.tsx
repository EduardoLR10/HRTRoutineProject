import React, { useContext } from 'react'
import Routine from '../../../../models/Routine'
import RoutinesContext from '../../../contexts/RoutinesContext'
import UserContext from '../../../contexts/UserContext'

export default function useSortedRoutines(): Routine[] {
  const { routines } = useContext(RoutinesContext)
  const { lastSeenRoutines } = useContext(UserContext)
  return [
    ...lastSeenRoutines,
    ...Object.values(routines).filter(
      routine => !lastSeenRoutines.includes(routine)
    )
  ]
}
