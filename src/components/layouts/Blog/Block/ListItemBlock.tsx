import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import TextBlock from '~/components/layouts/Blog/Block/TextBlock'

export interface IListItemBlock {
  type: 'list_item'
  blocks: BlockObjectResponse[]
}

const ListItemBlock = ({ blocks }: { blocks: BlockObjectResponse[] }) => {
  return (
    <ul
      style={{ padding: 'revert' }}
      className={`text-[1.1875rem] list-outside mb-6 ${
        blocks[0].type === 'bulleted_list_item' ? '!list-disc' : '!list-decimal'
      }`}
    >
      {blocks.map((block) =>
        block.type === 'numbered_list_item' ? (
          <NumberListItemBlock key={block.id} block={block as NumberedListItemBlockObjectResponse} />
        ) : (
          <BulletListItemBlock key={block.id} block={block as BulletedListItemBlockObjectResponse} />
        ),
      )}
    </ul>
  )
}

const NumberListItemBlock = ({ block }: { block: NumberedListItemBlockObjectResponse }) => {
  return (
    <li>
      {block.numbered_list_item.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </li>
  )
}

const BulletListItemBlock = ({ block }: { block: BulletedListItemBlockObjectResponse }) => {
  return (
    <li>
      {block.bulleted_list_item.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </li>
  )
}

export default ListItemBlock
