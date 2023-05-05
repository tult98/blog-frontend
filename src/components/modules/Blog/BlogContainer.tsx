import BlogLayout from '~/components/layouts/BlogLayout'
import ArticleItem from '~/components/widgets/ArticleItem'
import Pagination from '~/components/widgets/Pagination'
import { ArticleEntity } from '~/models/article'
import { TagEntity } from '~/models/tag'
import { IPagination } from '~/utils/common'

export interface IArticleListing {
  articles: ArticleEntity[]
  pagination: IPagination
  tags?: TagEntity[]
}

const BlogContainer = ({ articles, tags, pagination }: IArticleListing) => {
  return (
    <BlogLayout tags={tags}>
      <p className="mb-12 font-bold tracking-[3px] text-xl leading-[1.42857] text-[#2f353f]">WHAT&apos;S NEW</p>
      <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:mt-20 gap-x-8 gap-y-8">
        {articles.map((article: ArticleEntity) => (
          <ArticleItem article={article.attributes} key={article.id} />
        ))}
      </div>
      {pagination.pageCount > 1 && <Pagination currentPage={pagination.page} totalPage={pagination.pageCount} />}
    </BlogLayout>
  )
}

export default BlogContainer
