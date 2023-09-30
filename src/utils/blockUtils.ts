import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { LIST_TYPES } from '~/utils/common'

export const formatNotionBlocks = (blocks: BlockObjectResponse[]) => {
  const formattedBlocks: any[] = []
  let listItems: BlockObjectResponse[] = []

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    const isListItem = LIST_TYPES.includes(block.type)

    if (isListItem && (!listItems.length || block.type === listItems[listItems.length - 1]?.type)) {
      listItems.push(block)
    } else if (isListItem) {
      formattedBlocks.push({ type: 'list_item', blocks: listItems })
      listItems = [block]
    } else {
      if (listItems.length) {
        formattedBlocks.push({ type: 'list_item', blocks: listItems })
        listItems = []
      }
      formattedBlocks.push(block)
    }

    if (i === blocks.length - 1 && listItems.length) {
      formattedBlocks.push({ type: 'list_item', blocks: listItems })
    }
  }

  return formattedBlocks
}
