import Image from 'next/image'
import BlogLayout from '~/components/layouts/BlogLayout'
import { Article } from '~/models/article'
import { formatTimeFromUTC } from '~/utils/dateUtils'

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
        <article dangerouslySetInnerHTML={{ __html: article.content }} />
      </>
    </BlogLayout>
  )
}

export default ArticleDetail
