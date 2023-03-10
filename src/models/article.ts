import { ICategory } from '~/models/category'
import { ITag } from '~/models/tag'

export interface IPost {
  id: string
  title: string
  slug: string
  cover_image: string
  content: string
  updated_at: Date | string
  category?: ICategory
  tags?: ITag[]
}

export interface ArticleInput {
  title: string
  slug: string
  preface: string
  content: string
  coverImage?: string
}
