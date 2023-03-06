import BaseLayout from '~/components/layouts/Dashboard/BaseLayout'
import CreateCategory from '~/components/screens/CreateCategory'

const CreateCategoryPage = () => {
  return (
    <BaseLayout title="TuLamThings | create new category">
      <CreateCategory />
    </BaseLayout>
  )
}

export default CreateCategoryPage
