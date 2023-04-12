import { Article } from '~/models/article'

interface Props {
  article: Article
}

const ArticleDetail = ({ article }: Props) => {
  return (
    <div>
      {article.title}
      <p>Article Detail page</p>
    </div>
  )
}

export default ArticleDetail
