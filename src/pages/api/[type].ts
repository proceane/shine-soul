import { Star } from '@/theme/Star'
import { Theme } from '@/theme/theme'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function themeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, method } = req
  if (method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${method} Not Allowed`)
    return
  }

  const themes: {[key: string]: new () => Theme} = {
    'star': Star
  }
  const ThemeConstructor = themes[query.type as string]
  if (!ThemeConstructor) {
    res.setHeader('Allow', ['GET'])
    res.status(404).end(`Not Found Type: ${query.type}`)
    return
  }
  const theme = new ThemeConstructor()

  res.setHeader("content-type", "image/svg+xml")
  res.end(theme.getTag());
}