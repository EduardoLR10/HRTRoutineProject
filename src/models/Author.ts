import { ImageURISource } from 'react-native'

export default class Author {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly avatar: ImageURISource,
    public readonly curriculumLink: string
  ) {}
}
