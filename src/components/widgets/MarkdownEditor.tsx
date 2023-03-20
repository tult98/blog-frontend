import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { ChangeEvent } from 'react'
import { onUploadImage } from '~/utils/fileUtils'
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

interface Props {
  markdown: string
  onChange: (value?: string, event?: ChangeEvent<HTMLTextAreaElement>) => void
}

const MarkdownEditor = ({ markdown, onChange }: Props) => {
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
        if (event.clipboardData) {
          onUploadImage(event.clipboardData, markdown, onChangeMarkdown)
        }
      }}
      onDrop={(event: any) => {
        if (event.dataTransfer) {
          event.preventDefault()
          onUploadImage(event.dataTransfer, markdown, onChangeMarkdown)
        }
      }}
    />
  )
}

export default MarkdownEditor
