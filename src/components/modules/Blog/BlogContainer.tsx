import { useQuery } from '@apollo/client'
import Article from '~/components/widgets/ArticleItem'
import { ArticleEntity, ArticleEntityResponseCollection } from '~/models/article'
import { GET_ARTICLES } from '~/queries/article'

const BlogContainer = () => {
  const { data, error, loading } = useQuery<{ articles: ArticleEntityResponseCollection }>(GET_ARTICLES)
  console.log('=================', error, loading)
  return (
    <section className="grid grid-cols-1 lg:grid lg:grid-cols-12 max-w-[1220px] px-10 gap-x-20 mt-32">
      <main className="col-span-1 lg:col-span-9">
        <p className="mb-12 font-bold tracking-[3px] text-xl leading-[1.42857] text-[#2f353f]">WHAT&apos;S NEW</p>
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:mt-20 gap-x-8 gap-y-8">
          {data?.articles.data.map((article: ArticleEntity) => (
            <Article article={article.attributes} key={article.id} />
          ))}
        </div>
      </main>
      <aside className="col-span-1 lg:col-span-3">
        <p className="uppercase tracking-[3px] leading-[1.42857] text-xl font-bold">
          Receive my new post in your inbox?
        </p>
        <p className="mb-6">Be the first to know about my new posts, best practices, and community events.</p>
        <input
          className="w-full py-2 pl-2 mb-2 border border-gray-400 rounded-none focus:outline-none"
          type="text"
          placeholder="Enter your email"
        />
        <button className="h-10 w-full text-white bg-[#3f20ba] rounded">Subscribe</button>
      </aside>
    </section>
  )
}

// NOTE: this should be server side rendering in the future

export default BlogContainer
