import { ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables } from '@apollo/client'
import { Dispatch, SetStateAction } from 'react'

export const IMAGE_EXTENSIONS = '.jpg, .jpeg, .png'

export const onUploadImage = async ({
  data,
  createPresignedUrls,
  setFiles,
}: {
  data: DataTransfer
  createPresignedUrls: (
    options: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>>,
  ) => Promise<any>
  setFiles: Dispatch<SetStateAction<File[] | undefined>>
}) => {
  const files: File[] = []
  for (let index = 0; index < data.items.length; index += 1) {
    const file = data.files.item(index)

    if (file) {
      files.push(file)
    }
  }
  setFiles(files)

  createPresignedUrls({
    variables: { filenames: files.map((file) => file.name) },
  })
}

export const insertImageToCaretPosition = (
  markdown: string,
  caretPosition: number,
  filename: string,
  url: string,
): string => {
  return `${markdown.slice(0, caretPosition)}![${filename}](${url})${markdown.slice(caretPosition)}`
}
