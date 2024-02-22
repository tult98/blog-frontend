import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { GetStaticProps } from 'next'
import Head from 'next/head'
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
import ShareButtons from '~/components/widgets/ShareButtons'
import { getDatabase } from '~/services/database'
import { notion } from '~/services/notion'
import { RichTextBlock, TitleBlock } from '~/theme/notionTypes'
import { IPost } from '~/types/blogTypes'
import { formatNotionBlocks } from '~/utils/blockUtils'
import { getTableOfContents } from '~/utils/common'

const renderBlockByType = (block: BlockObjectResponse | IListItemBlock, isFirstHeading = false) => {
  switch (block.type) {
    case 'heading_2':
      return <HeadingBlock block={block as any} isFirstHeading={isFirstHeading} />
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

const PostDetails = ({
  blocks,
  title,
  pageUrl,
  preface,
  thumbnail,
}: {
  blocks: (BlockObjectResponse | IListItemBlock)[]
  title: string
  pageUrl: string
  preface: string
  thumbnail?: string
}) => {
  const headings = getTableOfContents(blocks)
  let isFirstHeading = false

  return (
    <BlogLayout disableWave={true} title={title}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={preface} />
        {thumbnail && <meta property="og:image" content={thumbnail} />}
      </Head>
      <main className="mt-[70px]">
        <div className="max-w-[1100px] pt-12 lg:px-0 flex flex-row justify-between items-start relative">
          <article className="shrink basis-[686px] w-screen lg:w-auto px-4 lg:px-0 mb-12">
            <div>
              {blocks.map((block, index) => {
                if (block.type === 'heading_2' && !isFirstHeading) {
                  isFirstHeading = true
                  return <React.Fragment key={index}>{renderBlockByType(block, true)}</React.Fragment>
                }

                return <React.Fragment key={index}>{renderBlockByType(block)}</React.Fragment>
              })}
            </div>
            <div className="lg:hidden">
              <ShareButtons shareUrl={pageUrl} />
            </div>
          </article>

          <aside className="hidden lg:block sticky grow-0 shrink basis-[250px] top-[148px] ">
            <TableOfContent headings={headings} />
            <ShareButtons shareUrl={pageUrl} />
          </aside>
        </div>
      </main>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  const page = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: { property: 'slug', formula: { string: { equals: props.params?.slug as string } } },
  })

  const pageObject = page.results[0] as PageObjectResponse

  if (!page?.results?.length) return { props: {} }

  const pageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/posts/${props.params?.slug as string}`
  const preface = (pageObject.properties.preface as RichTextBlock).rich_text.reduce(
    (acc, cur) => acc + cur.plain_text,
    '',
  )
  const thumbnail =
    (pageObject.properties.thumbnail as any).files?.[0]?.external?.url ??
    (pageObject.properties.thumbnail as any).files?.[0]?.file?.url

  const post = await notion.blocks.children.list({ block_id: page.results[0].id, page_size: 100 })
  const formattedBlocks = formatNotionBlocks(post.results as BlockObjectResponse[])
  return {
    props: {
      blocks: formattedBlocks,
      title: (pageObject.properties.title as TitleBlock).title?.[0].plain_text,
      preface,
      thumbnail,
      pageUrl,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const database = await getDatabase()

  const paths = database?.results?.map((page) => {
    const post = (page as PageObjectResponse).properties as unknown as IPost
    return { params: { slug: (post.slug as any).formula.string } }
  })

  return { paths, fallback: false }
}

export default PostDetails
