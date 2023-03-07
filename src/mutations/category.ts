import { gql } from '@apollo/client'

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      id
    }
  }
`

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: CategoryInput) {
    createCategory(input: $input) {
      id
      title
      slug
      description
      createdAt
      updatedAt
    }
  }
`

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: ID!, $input: CategoryInput) {
    updateCategory(id: $id, input: $input) {
      id
      title
      slug
      description
      createdAt
      updatedAt
    }
  }
`
