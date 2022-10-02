import { IPost } from '~/models/post'

export interface ITag {
  id: string
  name: string
  slug: string
  description?: string
  posts?: IPost[]
}
