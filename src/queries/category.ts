import { gql } from '@apollo/client'

export const GET_CATEGORIES = gql`
  query GetCategories {
    getCategories {
      categories {
        id
        title
        slug
        description
        createdAt
        updatedAt
      }
      meta {
        total
      }
    }
  }
`
