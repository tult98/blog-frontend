import { gql } from '@apollo/client'

export const REGISTER = gql`
  mutation Register(
    $email: String!
    $firstName: String!
    $lastName: String!
    $fullName: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      email: $email
      firstName: $firstName
      lastName: $lastName
      fullName: $fullName
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      firstName
      lastName
      fullName
      role
      createdAt
      updatedAt
    }
  }
`
