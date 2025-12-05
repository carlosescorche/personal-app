// Blog types - transformed from topics to categories

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  parent: string
  color?: string
  created_at: string
  updated_at: string
}

export interface TOCItem {
  id: string
  text: string
  level: number
}

export interface Post {
  id: string
  title: string
  categories: string[]
  type: string
  slug: string
  json: string
  html: string
  description: string
  order: number
  published_at: string
  parent?: string
  cover_image?: string
  visible: boolean
  enabled: boolean
  layout?: string
  icon?: string
  featured: boolean
  visible_in_home: boolean
  toc?: TOCItem[]
}

