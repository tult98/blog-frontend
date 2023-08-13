import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

export interface RichTextBlock {
  id: string
  type: 'rich_text'
  rich_text: RichTextItemResponse[]
}
