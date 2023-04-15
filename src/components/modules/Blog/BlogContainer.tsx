import BlogLayout from '~/components/layouts/BlogLayout'
import ArticleItem from '~/components/widgets/ArticleItem'
import TagListNav from '~/components/widgets/TagListNav'
import { ArticleEntity } from '~/models/article'

export interface Props {
  articles: ArticleEntity[]
}

const BlogContainer = ({ articles }: Props) => {
  return (
    <BlogLayout>
      <TagListNav />
      <p className="mb-12 font-bold tracking-[3px] text-xl leading-[1.42857] text-[#2f353f]">WHAT&apos;S NEW</p>
      <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:mt-20 gap-x-8 gap-y-8">
        {articles.map((article: ArticleEntity) => (
          <ArticleItem article={article.attributes} key={article.id} />
        ))}
      </div>
    </BlogLayout>
  )
}

export default BlogContainer
