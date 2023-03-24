import * as yup from 'yup'
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

export const articleSchema = yup.object({
  title: yup.string().required(),
  slug: yup.string().required(),
  thumbnail: yup.string().required(),
  preface: yup.string().required(),
  content: yup.string().required(),
})
