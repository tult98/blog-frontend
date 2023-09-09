import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'

const ParagraphBlock = ({ block }: { block: ParagraphBlockObjectResponse }) => {
  return (
    <p className="text-[1.1875rem] mb-6 break-words">
      {block.paragraph.rich_text.map((text, index) => (
        <React.Fragment key={index}>{text.plain_text}</React.Fragment>
      ))}
    </p>
  )
}

export default ParagraphBlock
