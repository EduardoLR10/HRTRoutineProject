import { RoutineId } from './Routine'

export default class User {
  constructor(public favorites: RoutineId[]) {
    console.log('Olá mundo')
  }
}
