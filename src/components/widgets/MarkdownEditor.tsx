import { useMutation } from '@apollo/client'
import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { ChangeEvent, useEffect, useState } from 'react'
import { CREATE_PRESIGNED_URLS } from '~/mutations/file'
import { onUploadImage } from '~/utils/fileUtils'
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

interface Props {
  markdown: string
  onChange: (value?: string, event?: ChangeEvent<HTMLTextAreaElement>) => void
}

const MarkdownEditor = ({ markdown, onChange }: Props) => {
  // @ts-expect-error
  const [mutate, { data, loading, error }] =
    useMutation<{ createPresignedUrls: { presignedUrls: string[] } }>(CREATE_PRESIGNED_URLS)
  const [files, setFiles] = useState<File[]>()

  useEffect(() => {
    if (!data || !files) {
      return
    }
    const { presignedUrls } = data.createPresignedUrls
    presignedUrls.forEach(async (url, index) => {
      try {
        const results = await fetch(url, {
          method: 'PUT',
          body: files[index],
        })
        onChange(`${markdown}\n![${files[index].name.split('.')[0]}](${results.url.split('?')[0]})`)
      } catch (error: unknown) {
        console.error('Failed to upload the images.', error)
      }
    })
  }, [data, files])

  const onChangeMarkdown = (value?: string, event?: ChangeEvent<HTMLTextAreaElement>) => {
    if (value) {
      onChange(value)
    } else if (event) {
      onChange(undefined, event)
    }
  }

  return (
    <MDEditor
      value={markdown}
      onChange={onChangeMarkdown}
      onPaste={(event: any) => {
        if (!!event.clipboardData?.files?.length) {
          event.preventDefault()
        }
        onUploadImage({
          data: event.clipboardData,
          createPresignedUrls: mutate,
          setFiles,
        })
      }}
      onDrop={(event: any) => {
        if (event.dataTransfer) {
          event.preventDefault()
          onUploadImage({
            data: event.dataTransfer,
            createPresignedUrls: mutate,
            setFiles,
          })
        }
      }}
    />
  )
}

export default MarkdownEditor
