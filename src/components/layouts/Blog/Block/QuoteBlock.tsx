import { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import TextBlock from '~/components/layouts/Blog/Block/TextBlock'

const QuoteBlock = ({ block }: { block: QuoteBlockObjectResponse }) => {
  return (
    <blockquote>
      <p className="text-[1.1875rem] mt-6 break-words text-gray-700 w-fit my-12">
        {block.quote.rich_text.map((text, index) => (
          <TextBlock key={index} item={text} />
        ))}
      </p>
    </blockquote>
  )
}

export default QuoteBlock
