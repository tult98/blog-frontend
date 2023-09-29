import { Heading2BlockObjectResponse, Heading3BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

type HeadingBlockObjectResponse = Heading2BlockObjectResponse | Heading3BlockObjectResponse

const HeadingBlock = ({ block }: { block: HeadingBlockObjectResponse }) => {
  // @ts-ignore next-line
  const headingId = block[block.type].rich_text[0].plain_text.toLowerCase().replace(/ /g, '-')
  if (block.type === 'heading_2') return <Heading2Block block={block} id={headingId} />
  else if (block.type === 'heading_3') return <Heading3Block block={block} id={headingId} />
  return null
}

const Heading2Block = ({ block, id }: { block: Heading2BlockObjectResponse; id: string }) => {
  return (
    <h2 id={id} className="mt-24 mb-8 text-[2rem] font-bold break-words text-tertiary">
      {block.heading_2.rich_text[0].plain_text}
    </h2>
  )
}

const Heading3Block = ({ block, id }: { block: Heading3BlockObjectResponse; id: string }) => {
  return (
    <h3 id={id} className="mt-16 mb-3 text-[1.5625rem] font-bold break-words text-color-gray-900">
      {block.heading_3.rich_text[0].plain_text}
    </h3>
  )
}

export default HeadingBlock
