import { CheckBoxBlock, DateBlock, MultiSelectBlock, RichTextBlock, TitleBlock } from '~/theme/notionTypes'

export interface IPost {
  title: TitleBlock
  subtitle?: RichTextBlock
  preface?: RichTextBlock
  is_published: CheckBoxBlock
  published_at: DateBlock
  tags: MultiSelectBlock
}
