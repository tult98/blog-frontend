import { BlockObjectResponse, CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { LIST_TYPES } from '~/utils/common'

const formatCodeBlock = (block: CodeBlockObjectResponse) => {
  const cloneBlock: any = { ...block }
  if (block.code.language === 'javascript') cloneBlock.code.language = 'jsx'
  else if (block.code.language === 'typescript') cloneBlock.code.language = 'tsx'

  // handle playground code block
  if (block.code.language === 'json') {
    const sandpack = JSON.parse(block.code.rich_text[0].plain_text)
    cloneBlock.code.template = sandpack.template
    cloneBlock.code.files = sandpack.files
  }

  return cloneBlock
}

export const formatNotionBlocks = (blocks: BlockObjectResponse[]) => {
  const formattedBlocks: any[] = []
  let listItems: BlockObjectResponse[] = []

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]

    // matching language between notion and prismjs
    if (block.type === 'code') {
      formattedBlocks.push(formatCodeBlock(block))
      continue
    }
    // handle list items block
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
