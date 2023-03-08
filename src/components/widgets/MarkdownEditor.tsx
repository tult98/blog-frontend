import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'
import { ChangeEvent, useState } from 'react'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState<string>('')

  const onChangeMarkdown = (
    value?: string,
    event?: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (value) {
      setMarkdown(value)
    } else if (event) {
      setMarkdown(event.target.value)
    }
  }

  return <MDEditor value={markdown} onChange={onChangeMarkdown} />
}

export default MarkdownEditor
