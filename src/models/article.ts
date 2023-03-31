import * as yup from 'yup'
import { ICategory } from '~/models/category'
import { ITag } from '~/models/tag'
import { REQUIRED_ERROR_MESSAGE } from '~/utils/validators'

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

export interface ArticleInstance {
  id: string
  title: string
  slug: string
  preface: string
  content: string
  thumbnail: string
  createdAt: Date
  updatedAt: Date
}

export const articleSchema = yup
  .object({
    title: yup.string().required(REQUIRED_ERROR_MESSAGE),
    thumbnail: yup.mixed().test('required', REQUIRED_ERROR_MESSAGE, (file: any) => {
      if (file[0]) return true
      return false
    }),
    preface: yup.string().required(REQUIRED_ERROR_MESSAGE),
    content: yup.string().required(REQUIRED_ERROR_MESSAGE),
  })
  .required()

export type ArticleFormData = yup.InferType<typeof articleSchema>
