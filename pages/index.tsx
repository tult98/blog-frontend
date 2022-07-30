import type { NextPage } from 'next'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import TabHeader from '~/components/widgets/TabHeader'
// import { signInWithGoogle } from '~/services/firebase'
import BlogContainer from '~/components/widgets/BlogContainer'

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
    <div>
      <main className="min-h-screen">
        <BlogContainer />
      </main>
    </div>
  )
}

export default Home
