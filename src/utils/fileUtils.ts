import { ChangeEvent } from 'react'

export const IMAGE_EXTENSIONS = '.jpg, .jpeg, .png'

export const onUploadImage = async (
  dataTransfer: DataTransfer,
  markdown: string,
  onChangeMarkdown: (value: string, event?: ChangeEvent<HTMLTextAreaElement>) => void,
) => {
  const files: File[] = []

  for (let index = 0; index < dataTransfer.items.length; index += 1) {
    const file = dataTransfer.files.item(index)

    if (file) {
      files.push(file)
    }
  }
  onChangeMarkdown(`${markdown}\n![]('https://web.dev/read-files/#select-dnd')`)
}
