import type { NextPage } from 'next'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
import TabHeader from '~/components/widgets/TabHeader'
// import { signInWithGoogle } from '~/services/firebase'
import BlogContainer from '~/components/modules/Blog/BlogContainer'
import BlogHeader from '~/components/layouts/BlogHeader'

const Home: NextPage = () => {
  // const router = useRouter()

  // const onSignIn = async () => {
  //   try {
  //     await signInWithGoogle()
  //     router.push('/blogs')
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  return (
    <>
      <TabHeader name="Blogs" />
      <div>
        <main className="relative flex flex-col items-center min-h-screen">
          <BlogHeader />
          <BlogContainer />
        </main>
      </div>
    </>
  )
}

export default Home
