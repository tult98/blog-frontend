import { IMeta } from '~/utils/common'

interface Tag {
  name: string
  slug: string
  description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface TagEntity {
  id: string
  attributes: Tag
}

export interface TagEntityResponseCollection {
  data: TagEntity[]
  meta: IMeta
}

export interface TagRelationResponseCollection {
  data: TagEntity[]
}
