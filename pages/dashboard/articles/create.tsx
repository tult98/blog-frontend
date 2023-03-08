import BaseLayout from '~/components/layouts/Dashboard/BaseLayout'
import ArticleCreate from '~/components/screens/ArticleCreate'

const ArticleCreatePage = () => {
  return (
    <BaseLayout title="TuLamThings | new article">
      <ArticleCreate />
    </BaseLayout>
  )
}

export default ArticleCreatePage
