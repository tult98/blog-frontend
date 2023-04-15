import { gql } from '@apollo/client'

export const GET_TAGS = gql`
  query Tags(
    $filters: TagFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
  ) {
    tags(filters: $filters, pagination: $pagination, sort: $sort, publicationState: $publicationState) {
      data {
        id
        attributes {
          name
          description
          slug
          createdAt
          updatedAt
          publishedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`
