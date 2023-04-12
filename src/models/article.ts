import * as yup from 'yup'
import { CategoryEntityResponse } from '~/models/category'
import { Meta, UploadFileEntityResponse } from '~/utils/common'
import { REQUIRED_ERROR_MESSAGE } from '~/utils/validators'

export interface Article {
  title: string
  coverImage: UploadFileEntityResponse
  content: string
  category: CategoryEntityResponse
  // tags
  preface: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface ArticleEntity {
  id: string
  attributes: Article
}

export interface ArticleEntityResponseCollection {
  data: ArticleEntity[]
  meta: Meta
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
