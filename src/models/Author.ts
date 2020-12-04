export type AuthorId = string

export default class Author {
  constructor(
    public readonly id: AuthorId,
    public readonly name: string,
    public readonly avatar: string
  ) {}
}
