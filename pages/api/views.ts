import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const forwarded = req.headers['x-forwarded-for']

  const ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress
  res.status(200).json({ message: `your ip is: ${ip}` })
}
