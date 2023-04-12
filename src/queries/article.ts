import { gql } from '@apollo/client'

export const GET_ARTICLES = gql`
  query Articles(
    $filters: ArticleFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
  ) {
    articles(filters: $filters, pagination: $pagination, sort: $sort, publicationState: $publicationState) {
      data {
        id
        attributes {
          title
          coverImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          category {
            data {
              id
              attributes {
                name
                slug
                description
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
                slug
                description
              }
            }
          }
          content
          preface
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

export const GET_ARTICLE_BY_SLUG = gql`
  query Article($slug: String!) {
    article(slug: $slug) {
      data {
        id
        attributes {
          title
          slug
          coverImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          preface
          content
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`
