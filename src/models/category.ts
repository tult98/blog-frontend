import * as yup from 'yup'
export interface ICategory {
  id: string
  title: string
  slug: string
  description: string
}

export interface IMeta {
  total: number
}

export const categorySchema = yup.object({
  title: yup.string().required('Title is required.'),
  slug: yup.string().required('Slug is required'),
  description: yup.string().required('Description is required.'),
})
