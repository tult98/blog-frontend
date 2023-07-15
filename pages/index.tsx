import BlogContainer, { IArticleListing } from '~/components/modules/Blog/BlogContainer'
import TabHeader from '~/components/widgets/TabHeader'

const Home = ({ articles, tags, pagination }: IArticleListing) => {
  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen">
        <BlogContainer articles={articles} tags={tags} pagination={pagination} />
      </div>
    </>
  )
}

export default Home
