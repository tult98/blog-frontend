import { useMutation } from '@apollo/client'
import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { CREATE_PRESIGNED_URLS } from '~/mutations/file'
import { insertImageToCaretPosition, onUploadImage } from '~/utils/fileUtils'
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

interface Props {
  markdown: string
  onChange: (value?: string, event?: ChangeEvent<HTMLTextAreaElement>) => void
}

const MarkdownEditor = ({ markdown, onChange }: Props) => {
  // @ts-expect-error
  const [mutate, { data, loading, error }] =
    useMutation<{ createPresignedUrls: { presignedUrls: string[] } }>(CREATE_PRESIGNED_URLS)
  const markdownRef = useRef<HTMLTextAreaElement>()
  const [files, setFiles] = useState<File[]>()
  const [caretPosition, setCaretPosition] = useState<number>(0)
  const [isMdEditorLoaded, setIsMDeditorLoaded] = useState<boolean>(false)

  useEffect(() => {
    // if cannot get returned image's url or there is no files need to be uploaded
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
        // it cannot be re-uploaded when caretPosition is changed
        setFiles(undefined)
        onChange(
          insertImageToCaretPosition(
            markdown,
            caretPosition,
            files[index].name.split('.')[0],
            results.url.split('?')[0],
          ),
        )
      } catch (error: unknown) {
        console.error('Failed to upload the images.', error)
      }
    })
  }, [data, caretPosition, files])

  useEffect(() => {
    if (!isMdEditorLoaded) {
      return
    }
    markdownRef?.current?.addEventListener('keydown', onUpdateCaretPosition)
    markdownRef?.current?.addEventListener('focus', onUpdateCaretPosition)
    markdownRef?.current?.addEventListener('click', onUpdateCaretPosition)

    return () => {
      markdownRef?.current?.removeEventListener('keydown', onUpdateCaretPosition)
      markdownRef?.current?.removeEventListener('focus', onUpdateCaretPosition)
      markdownRef?.current?.removeEventListener('click', onUpdateCaretPosition)
    }
  }, [isMdEditorLoaded])

  const onChangeMarkdown = (value?: string, event?: ChangeEvent<HTMLTextAreaElement>) => {
    if (!markdownRef.current) {
      const mdEditor = document.getElementById('markdown-editor') as HTMLTextAreaElement | null
      if (mdEditor) {
        markdownRef.current = mdEditor
        setCaretPosition(mdEditor.selectionStart)
        setIsMDeditorLoaded(true)
      }
    }
    if (value) {
      onChange(value)
    } else if (event) {
      onChange(undefined, event)
    }
  }

  const onUpdateCaretPosition = () => {
    if (markdownRef.current) {
      setCaretPosition(markdownRef.current.selectionStart)
    }
  }

  return (
    <MDEditor
      value={markdown}
      textareaProps={{
        id: 'markdown-editor',
      }}
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
