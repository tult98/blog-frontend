import { gql } from '@apollo/client'

export interface IToken {
  accessToken: string
  refreshToken: string
  expiresAt: string
}

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
      expiresAt
    }
  }
`

export const ME = gql`
  query Me {
    me {
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

export const GET_NEW_TOKEN = gql`
  query GetNewToken($refreshToken: String!) {
    getNewToken(refreshToken: $refreshToken) {
      accessToken
      refreshToken
      expiresAt
    }
  }
`
