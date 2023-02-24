import { gql } from '@apollo/client'

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`
