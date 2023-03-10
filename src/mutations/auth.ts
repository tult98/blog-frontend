import { gql } from '@apollo/client'

export const REGISTER = gql`
  mutation Register($input: AccountInput!) {
    register(input: $input) {
      id
      email
      firstName
      lastName
      fullName
      createdAt
      updatedAt
    }
  }
`
