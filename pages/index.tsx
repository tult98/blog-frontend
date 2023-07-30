import TabHeader from '~/components/widgets/TabHeader'

const Home = () => {
  return (
    <>
      <TabHeader name="Blogs" />
      <div className="relative flex flex-col items-center min-h-screen">
        <p>Article page</p>
        {/* <BlogContainer articles={articles} tags={tags} pagination={pagination} /> */}
      </div>
    </>
  )
}

export default Home
