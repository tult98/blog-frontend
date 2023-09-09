import axios from 'axios'

export const request = axios.create({
  baseURL: process.env.NOTION_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28',
    Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
  },
})
