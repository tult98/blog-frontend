import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import BlogLayout from '~/components/layouts/BlogLayout'
import { Article } from '~/models/article'
import { formatTimeFromUTC } from '~/utils/dateUtils'
// @ts-expect-error NOTE: error with type declaration of this dependency
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface Props {
  article: Article
}

const ArticleDetail = ({ article }: Props) => {
  return (
    <BlogLayout>
      <>
        <p className="mb-3 text-[#959DAA] uppercase tracking-[2px] leading-5 text-[13px]">
          {formatTimeFromUTC(new Date(article.publishedAt), 'MMMM dd, yyyy')}
        </p>
        <h1>{article.title}</h1>
        <div className="flex">
          <a
            href=""
            className="mt-8 inline-block m-1 py-1.5 px-3 uppercase border border-[#d9cfff] hover:bg-[#ebe6ff80] hover:border-[#7156d9] rounded text-[#3f20ba] leading-[18px] text-xs"
          >
            Sample category
          </a>
        </div>
        <p className="my-8 text-sm text-[#959DAA]">{article.preface}</p>
        <div className="mt-4 relative w-full h-auto aspect-[2/1] mb-[90px]">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}${article.coverImage.data.attributes.url}`}
            alt="cover image"
            fill={true}
            className="object-cover object-left rounded-lg"
          />
        </div>
        <article>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, ...props }) => <h2 className="heading-2" {...props} />,
              h3: ({ node, ...props }) => <h3 style={{ paddingTop: '60px', paddingBottom: '32px' }} {...props} />,
              ul: ({ node, ...props }) => (
                <ul
                  style={
                    props.className === 'contains-task-list'
                      ? {
                          listStyle: 'none',
                          paddingInlineStart: '20px',
                        }
                      : {}
                  }
                  {...props}
                />
              ),
              img: ({ node, ...props }) => <img style={{ margin: '60px 0px' }} {...props} />,
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter {...props} language={match[1]} PreTag="div">
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </article>
      </>
    </BlogLayout>
  )
}

export default ArticleDetail
