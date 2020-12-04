import { CategoryId } from './Category'
export type RoutineId = string

export default class Routine {
  constructor(
    public readonly id: RoutineId,
    public readonly name: string,
    public readonly category: CategoryId
  ) {}
}
