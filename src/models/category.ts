import { IPost } from '~/models/post'

export interface ICategory {
  id: string
  title: string
  slug: string
  description?: string
  posts?: IPost[]
}
