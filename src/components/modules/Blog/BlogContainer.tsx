import { useQuery } from '@apollo/client'
import BlogLayout from '~/components/layouts/BlogLayout'
import Article from '~/components/widgets/ArticleItem'
import TagListNav from '~/components/widgets/TagListNav'
import { ArticleEntity, ArticleEntityResponseCollection } from '~/models/article'
import { GET_ARTICLES } from '~/queries/article'

const BlogContainer = () => {
  const { data, error, loading } = useQuery<{ articles: ArticleEntityResponseCollection }>(GET_ARTICLES)
  console.log('=================', error, loading)
  return (
    <BlogLayout>
      <TagListNav />
      <p className="mb-12 font-bold tracking-[3px] text-xl leading-[1.42857] text-[#2f353f]">WHAT&apos;S NEW</p>
      <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:mt-20 gap-x-8 gap-y-8">
        {data?.articles.data.map((article: ArticleEntity) => (
          <Article article={article.attributes} key={article.id} />
        ))}
      </div>
    </BlogLayout>
  )
}

// NOTE: this should be server side rendering in the future

export default BlogContainer
