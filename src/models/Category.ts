import { RoutineId } from './Routine'

export type CategoryId = string

export default class Category {
  constructor(
    public readonly id: CategoryId,
    public readonly name: string,
    public readonly hueTheme: number,
    public routines: null | RoutineId[] = null
  ) {}
}
