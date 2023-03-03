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

export const GET_CATEGORY_BY_SLUG = gql`
  query GetCategoryBySlug($slug: String!) {
    getCategoryBySlug(slug: $slug) {
      id
      title
      slug
      description
      createdAt
      updatedAt
    }
  }
`
