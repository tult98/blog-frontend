import { gql } from '@apollo/client'

export const CREATE_ARTICLE = gql`
  mutation CreateArticle($input: ArticleInput!) {
    createArticle(input: $input) {
      id
      title
      slug
      thumbnail
      preface
      content
      createdAt
      updatedAt
    }
  }
`
