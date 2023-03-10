import { IPost } from '~/models/article'

export interface ITag {
  id: string
  name: string
  slug: string
  description?: string
  posts?: IPost[]
}
