import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'
import TextBlock from '~/components/layouts/Blog/Block/TextBlock'

const ParagraphBlock = ({ block }: { block: ParagraphBlockObjectResponse }) => {
  return (
    <p className="text-[1.1875rem] mb-6 break-words">
      {block.paragraph.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </p>
  )
}

export default ParagraphBlock
