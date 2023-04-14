import Image from 'next/image'
import { Article } from '~/models/article'
import { formatTimeFromUTC } from '~/utils/dateUtils'

interface Props {
  article: Article
}

const ArticleItem = ({ article }: Props) => {
  return (
    <div>
      <div className="relative w-full mb-6 aspect-[2/1]">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN}${article.coverImage.data.attributes.url}`}
          alt=""
          className="object-cover rounded"
          fill={true}
        />
      </div>
      <p className="text-[#959DAA] uppercase mb-1 tracking-[0.125em] text-sm leading-5">
        {formatTimeFromUTC(new Date(article.publishedAt), 'MMMM dd, yyyy')}
      </p>
      <p className="mb-2 text-xl font-bold">{article.title}</p>
      <div className="flex">
        <a
          href=""
          className="inline-block m-1 px-1.5 py-px uppercase border border-[#d9cfff] hover:bg-[#ebe6ff80] hover:border-[#7156d9] rounded text-[#3f20ba] leading-[18px] text-xs"
        >
          Sample category
        </a>
      </div>
      <p className="pt-4 pb-6 text-sm leading-[1.5] text-[#959DAA]">{article.preface}</p>
    </div>
  )
}

export default ArticleItem
