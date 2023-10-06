export interface ICategory {
  id: string
  title: string
  slug: string
  description: string
  createdAt: Date
  updatedAt: Date
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
