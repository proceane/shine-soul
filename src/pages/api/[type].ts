import { Color } from '@/theme/Color'
import { Star } from '@/theme/Star'
import { Theme } from '@/theme/Theme'
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

  const color = query.color as string || 'BLUE'
  const colorValue = Color.getColorByName(color)
  const isAnimate: boolean = query.isAnimate as boolean | undefined || false
  
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
  res.end(isAnimate ? theme.getAnimateTag(colorValue) : theme.getTag(colorValue));
}