import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { getTextStyleByAnnotations } from '~/utils/common'

const ParagraphBlock = (block: ParagraphBlockObjectResponse) => {
  console.log('block', block)
  return (
    <p className="text-[1.1875rem] mb-6 break-words">
      {block.paragraph?.rich_text?.map((text, index) => {
        const annotations = text.annotations
        const style = getTextStyleByAnnotations(annotations)
        return (
          <span className={style} key={index}>
            {text.plain_text}
          </span>
        )
      })}
    </p>
  )
}

export default ParagraphBlock
