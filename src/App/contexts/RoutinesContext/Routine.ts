export default class Routine {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly category: string,
    public readonly authors: string[],
    public readonly tags: string[]
  ) {}
}
