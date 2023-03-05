import { useRouter } from 'next/router'
import BaseLayout from '~/components/layouts/Dashboard/BaseLayout'
import CategoryDetails from '~/components/screens/CategoryDetails'

const CategoryDetailsPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <BaseLayout title={`TuLamThings | ${slug}`}>
      <CategoryDetails slug={slug as string} />
    </BaseLayout>
  )
}

export default CategoryDetailsPage
