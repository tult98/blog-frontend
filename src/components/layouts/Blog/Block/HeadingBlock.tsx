import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

type HeadingBlockObjectResponse =
  | Heading1BlockObjectResponse
  | Heading2BlockObjectResponse
  | Heading3BlockObjectResponse

const HeadingBlock = ({ block }: { block: HeadingBlockObjectResponse }) => {
  // @ts-ignore next-line
  const headingId = block[block.type].rich_text[0].plain_text.toLowerCase().replace(/ /g, '-')
  return (
    <p id={headingId} className="mt-24 mb-8 text-[2rem] font-bold break-words text-tertiary">
      {/* @ts-ignore next-line */}
      {block[block.type].rich_text[0].plain_text}
    </p>
  )
}

export default HeadingBlock
