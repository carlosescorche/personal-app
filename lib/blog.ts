import { readFile } from 'fs/promises'
import { join } from 'path'
import type { Post, Category } from '@/types/blog'

const storagePath = join(process.cwd(), 'storage')

export async function getAllCategories(): Promise<Category[]> {
  try {
    const filePath = join(storagePath, 'categories.json')
    const fileContents = await readFile(filePath, 'utf8')
    return JSON.parse(fileContents) as Category[]
  } catch (error) {
    console.error('Error reading categories:', error)
    return []
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const filePath = join(storagePath, 'posts.json')
    const fileContents = await readFile(filePath, 'utf8')
    return JSON.parse(fileContents) as Post[]
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug) || null
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getAllCategories()
  return categories.find((category) => category.slug === slug) || null
}

export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.categories.includes(categoryId))
}


