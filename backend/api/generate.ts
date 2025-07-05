// API route for generating interview questions

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const question = "Tell me about yourself.";
  res.status(200).json({ question });
}
