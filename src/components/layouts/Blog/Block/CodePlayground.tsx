import { Sandpack } from '@codesandbox/sandpack-react'
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { useEffect, useState } from 'react'
import { nightOwl } from '@codesandbox/sandpack-themes'

const CodeBlock = ({ block }: { block: CodeBlockObjectResponse }) => {
  // FIXME: move this to static site generation later
  const [template, setTemplate] = useState()
  const [files, setFiles] = useState()

  useEffect(() => {
    try {
      const sandpack = JSON.parse(block.code.rich_text[0].plain_text)
      setTemplate(sandpack.template)
      setFiles(sandpack.files)
    } catch (error) {
      console.error(error)
    }
  }, [block.code])

  return <Sandpack theme={nightOwl} template={template} files={files} />
}

export default CodeBlock
