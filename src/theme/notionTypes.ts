import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

export interface RichTextBlock {
  id: string
  type: 'rich_text'
  rich_text: RichTextItemResponse[]
}

export interface TitleBlock {
  id: string
  type: 'title'
  title: RichTextItemResponse[]
}

export interface CheckBoxBlock {
  id: string
  type: 'checkbox'
  checkbox: boolean
}

export interface DateBlock {
  id: string
  type: 'date'
  date: string | null
}

export interface CreatedTimeBlock {
  id: string
  type: 'created_time'
  created_time: string
}

export interface MultiSelectBlock {
  id: string
  type: 'multi_select'
  multi_select: { color: string; id: string; name: string }
}
