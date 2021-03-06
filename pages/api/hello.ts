// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type User from '@types/user'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({ name: 'John Doe' })
}
