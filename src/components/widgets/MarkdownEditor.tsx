import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'
import dynamic from 'next/dynamic'
import { ChangeEvent } from 'react'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

interface Props {
  markdown: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const MarkdownEditor = ({ markdown, onChange }: Props) => {
  const onChangeMarkdown = (
    _?: string,
    event?: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (event) {
      onChange(event)
    }
  }

  return <MDEditor value={markdown} onChange={onChangeMarkdown} />
}

export default MarkdownEditor
