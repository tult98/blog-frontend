import { notion } from '~/services/notion'

export const getDatabase = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID

  if (!databaseId) {
    console.error('Missing NOTION_DATABASE_ID env variable')
    return
  }
  const database = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID ?? '' })

  return database
}
