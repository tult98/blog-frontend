import * as yup from 'yup'
import { REQUIRED_ERROR_MESSAGE } from '~/utils/validators'
export interface ICategory {
  id: string
  title: string
  slug: string
  description: string
}

export interface IMeta {
  total: number
}

export const categorySchema = yup
  .object({
    title: yup.string().required(REQUIRED_ERROR_MESSAGE),
    slug: yup.string().required(REQUIRED_ERROR_MESSAGE),
    description: yup.string().required(REQUIRED_ERROR_MESSAGE),
  })
  .required()

export type CategoryData = yup.InferType<typeof categorySchema>
