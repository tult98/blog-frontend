import * as yup from 'yup'
import { REQUIRED_ERROR_MESSAGE } from '~/utils/validators'

export interface ICategory {
  id: string
  title: string
  slug: string
  description: string
  createdAt: Date
  updatedAt: Date
}

export interface IMeta {
  total: number
}

interface Category {
  name: string
  slug: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

interface CategoryEntity {
  id: string
  attributes: Category
}
export interface CategoryEntityResponse {
  data: CategoryEntity
}

export const categorySchema = yup
  .object({
    title: yup.string().required(REQUIRED_ERROR_MESSAGE),
    slug: yup.string().required(REQUIRED_ERROR_MESSAGE),
    description: yup.string().required(REQUIRED_ERROR_MESSAGE),
  })
  .required()

export type CategoryData = yup.InferType<typeof categorySchema>
