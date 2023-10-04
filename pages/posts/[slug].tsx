import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { GetStaticProps } from 'next'
import React from 'react'
import CalloutBlock from '~/components/layouts/Blog/Block/CalloutBlock'
import CodePlayground from '~/components/layouts/Blog/Block/CodePlayground'
import CodeSnippet from '~/components/layouts/Blog/Block/CodeSnippet'
import HeadingBlock from '~/components/layouts/Blog/Block/HeadingBlock'
import ImageBlock from '~/components/layouts/Blog/Block/ImageBlock'
import ListItemBlock, { IListItemBlock } from '~/components/layouts/Blog/Block/ListItemBlock'
import ParagraphBlock from '~/components/layouts/Blog/Block/ParagraphBlock'
import QuoteBlock from '~/components/layouts/Blog/Block/QuoteBlock'
import BlogLayout from '~/components/layouts/Blog/BlogLayout'
import TableOfContent from '~/components/layouts/Blog/TableOfContent'
import { getDatabase } from '~/services/database'
import { notion } from '~/services/notion'
import { TitleBlock } from '~/theme/notionTypes'
import { IPost } from '~/types/blogTypes'
import { formatNotionBlocks } from '~/utils/blockUtils'
import { getTableOfContents } from '~/utils/common'

const renderBlockByType = (block: BlockObjectResponse | IListItemBlock) => {
  switch (block.type) {
    case 'heading_2':
      return <HeadingBlock block={block as any} />
    case 'heading_3':
      return <HeadingBlock block={block as any} />
    case 'paragraph':
      return <ParagraphBlock block={block as any} />
    case 'quote':
      return <QuoteBlock block={block as any} />
    case 'callout':
      return <CalloutBlock block={block as any} />
    case 'list_item':
      return <ListItemBlock blocks={block.blocks} />
    case 'image':
      return <ImageBlock block={block} />
    case 'code':
      return block.code.language !== 'json' ? <CodeSnippet block={block} /> : <CodePlayground block={block} />
    default:
      return null
  }
}

const PostDetails = ({ blocks, title }: { blocks: (BlockObjectResponse | IListItemBlock)[]; title: string }) => {
  const headings = getTableOfContents(blocks)

  return (
    <BlogLayout disableWave={true} title={title}>
      <main className="mt-[70px]">
        <div className="max-w-[1100px] pt-12 flex flex-row justify-between items-start relative">
          <article className="shrink basis-[686px]">
            {blocks.map((block, index) => {
              return <React.Fragment key={index}>{renderBlockByType(block)}</React.Fragment>
            })}
          </article>
          <TableOfContent headings={headings} />
        </div>
      </main>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  const page = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: { property: 'slug', rich_text: { equals: props.params?.slug as string } },
  })

  const pageObject = page.results[0] as PageObjectResponse

  if (!page?.results?.length) return { props: {} }

  const post = await notion.blocks.children.list({ block_id: page.results[0].id, page_size: 100 })
  const formattedBlocks = formatNotionBlocks(post.results as BlockObjectResponse[])
  return {
    props: { blocks: formattedBlocks, title: (pageObject.properties.title as TitleBlock).title?.[0].plain_text },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const database = await getDatabase()

  const paths = database?.results?.map((page) => {
    const post = (page as PageObjectResponse).properties as unknown as IPost
    return { params: { slug: post.slug.rich_text[0]?.plain_text } }
  })

  return { paths, fallback: 'blocking' }
}

export default PostDetails
