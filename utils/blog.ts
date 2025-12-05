/**
 * Blog utility functions
 * Funciones utilitarias comunes para el blog
 */

import type { Category, Post } from '@/types/blog'

export interface BlogFilters {
  type: string
  enabled: boolean
  visible: boolean
  page?: number
  pageSize: number
  sortBy: string
  sortOrder: string
  categories?: string[]
  featured?: boolean
}

export interface PostCountText {
  count: number
  text: string
}

/**
 * Formats a date string to Spanish locale
 */
export const formatDate = (dateString: string, format: 'short' | 'long' = 'short'): string => {
  const date = new Date(dateString)

  if (format === 'long') {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

/**
 * Calculates estimated reading time for content
 */
export const calculateReadTime = (content: string, wordsPerMinute: number = 200): string => {
  const textLength = content.replace(/<[^>]*>/g, '').length
  const words = textLength / 5
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min`
}

/**
 * Gets the appropriate color classes for a category
 */
export const getCategoryColor = (category: Category | string, allCategories?: Category[]): string => {
  let color: string | undefined

  if (typeof category === 'string') {
    if (allCategories) {
      const foundCategory = allCategories.find((c) => c.id === category)
      color = foundCategory?.color
    }
  } else {
    color = category.color
  }

  // Map color to badge variant
  if (color === 'primary') return 'bg-primary text-primary-foreground'
  if (color === 'accent') return 'bg-accent text-accent-foreground'
  if (color === 'secondary') return 'bg-secondary text-secondary-foreground'
  
  return 'bg-primary text-primary-foreground'
}

/**
 * Generates base filters for blog posts
 */
export const generatePostFilters = (options: Partial<BlogFilters> = {}): BlogFilters => {
  return {
    type: 'post',
    enabled: true,
    visible: true,
    pageSize: 9,
    sortBy: 'published_at',
    sortOrder: 'desc',
    ...options
  }
}

/**
 * Generates post count text with proper pluralization
 */
export const getPostCountText = (count: number): PostCountText => {
  const text = `${count} artículo${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`
  return { count, text }
}

/**
 * Generates categories filter array based on selected parent and child categories
 */
export const generateCategoriesFilter = (
  selectedParentCategory: string,
  selectedChildCategory: string,
  childCategories: Category[]
): string[] => {
  const categoriesToFilter: string[] = []

  if (selectedChildCategory) {
    categoriesToFilter.push(selectedChildCategory)
  } else if (selectedParentCategory) {
    categoriesToFilter.push(selectedParentCategory)
    const children = childCategories.filter((child) => child.parent === selectedParentCategory)
    categoriesToFilter.push(...children.map((child) => child.id))
  }

  return categoriesToFilter
}

/**
 * Gets children categories of a selected parent category
 */
export const getChildrenOfSelectedParent = (
  selectedParentCategory: string,
  childCategories: Category[]
): Category[] => {
  if (!selectedParentCategory) return []
  return childCategories.filter((child) => child.parent === selectedParentCategory)
}

/**
 * Finds category name by ID
 */
export const getCategoryNameById = (categoryId: string, allCategories: Category[]): string => {
  const category = allCategories.find((c) => c.id === categoryId)
  return category?.name || 'General'
}

/**
 * Generates section title based on selected filters
 */
export const getBlogSectionTitle = (
  selectedChildCategory: string,
  selectedParentCategory: string,
  allCategories: Category[],
  customTitle?: string
): string => {
  if (customTitle) return customTitle

  if (selectedChildCategory) {
    return `Artículos de ${getCategoryNameById(selectedChildCategory, allCategories)}`
  }

  if (selectedParentCategory) {
    return `Artículos de ${getCategoryNameById(selectedParentCategory, allCategories)}`
  }

  return 'Últimos Artículos'
}

