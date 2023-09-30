import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { IListItemBlock } from '~/components/layouts/Blog/Block/ListItemBlock'

export interface IPagination {
  total: number
  page: number
  pageSize: number
  pageCount: number
}

export interface IMeta {
  pagination: IPagination
}

interface UploadFile {
  name?: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  size: number
  url: string
  previewUrl?: string
  provider: string
}

interface UploadFileEntity {
  id: string
  attributes: UploadFile
}

interface IAnnotation {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface UploadFileEntityResponse {
  data: UploadFileEntity
}

export const getTableOfContents = (blocks: (BlockObjectResponse | IListItemBlock)[]) => {
  const headings = blocks.filter((block: any) => block.type.startsWith('heading'))

  return headings as BlockObjectResponse[]
}

export const getTextStyleByAnnotations = (annotations: IAnnotation) => {
  let style = ''
  if (annotations.bold) style += 'font-bold'
  if (annotations.italic) style += 'italic'
  if (annotations.strikethrough) style += 'line-through'
  if (annotations.underline) style += 'underline'
  if (annotations.color !== 'default') style += `text-[${annotations.color}]`

  return style
}

export const TEXT_COLORS = {
  gray: 'text-[#808080]',
  brown: 'text-[#A52A2A]',
  orange: 'text-[#FFA500]',
  yellow: 'text-[#FFFF00]',
  green: 'text-[#008000]',
  blue: 'text-[#0000FF]',
  purple: 'text-[#800080]',
  pink: 'text-[#FFC0CB]',
  red: 'text-[#FF0000]',
}

export const LIST_TYPES = ['bulleted_list_item', 'numbered_list_item']
