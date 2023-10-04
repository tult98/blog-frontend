import { Sandpack } from '@codesandbox/sandpack-react'
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { useEffect, useState } from 'react'
import { nightOwl } from '@codesandbox/sandpack-themes'

const CodePlayground = ({ block }: { block: CodeBlockObjectResponse }) => {
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

  return (
    <div className="max-w-[750px] -mx-8 py-6">
      <Sandpack theme={nightOwl} template={template} files={files} options={{ classes: { 'sp-layout': 'flex-col' } }} />
    </div>
  )
}

export default CodePlayground
