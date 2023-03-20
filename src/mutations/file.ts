import { gql } from '@apollo/client'

export const CREATE_PRESIGNED_URLS = gql`
  mutation CreatePresignedUrls($filenames: [String]!) {
    createPresignedUrls(filenames: $filenames) {
      presignedUrls
    }
  }
`
