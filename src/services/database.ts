import { notion } from '~/services/notion'

export const getDatabase = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID

  if (!databaseId) {
    console.error('Missing NOTION_DATABASE_ID env variable')
    return
  }
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
    filter: {
      and: [
        {
          property: 'is_published',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'is_updated',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'published_at',
        direction: 'descending',
      },
    ],
  })

  return database
}
