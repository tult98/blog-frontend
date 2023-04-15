import { CategoryEntityResponse } from '~/models/category'
import { Meta, UploadFileEntityResponse } from '~/utils/common'

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

export interface ArticleEntityResponse {
  data: ArticleEntity
}

export interface ArticleEntityResponseCollection {
  data: ArticleEntity[]
  meta: Meta
}
