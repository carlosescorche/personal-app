'use client'
import { useState, useEffect } from 'react'
import { BlogPostGrid } from '@/components/blog/BlogPostGrid'
import { CategoryFilters } from '@/components/blog/CategoryFilters'
import type { Post, Category } from '@/types/blog'

interface BlogContainerProps {
  allPosts: Post[]
  allCategories: Category[]
  parentCategories: Category[]
  childCategories: Category[]
}

const BlogContainer = ({
  allPosts,
  allCategories,
  parentCategories,
  childCategories
}: BlogContainerProps) => {
  const [selectedParentCategory, setSelectedParentCategory] = useState<string>('')
  const [selectedChildCategory, setSelectedChildCategory] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const pageSize = 9

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true)

      try {
        let filtered = [...allPosts]

        // Apply category filters
        if (selectedChildCategory) {
          filtered = filtered.filter((post) => post.categories.includes(selectedChildCategory))
        } else if (selectedParentCategory) {
          const children = childCategories.filter((child) => child.parent === selectedParentCategory)
          const categoryIds = [selectedParentCategory, ...children.map((child) => child.id)]
          filtered = filtered.filter((post) => 
            post.categories.some((catId) => categoryIds.includes(catId))
          )
        }

        // Sort by published_at desc
        filtered.sort((a, b) => 
          new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
        )

        // Paginate
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        const paginatedPosts = filtered.slice(startIndex, endIndex)

        if (currentPage === 1) {
          setPosts(paginatedPosts)
        } else {
          setPosts((prev) => [...prev, ...paginatedPosts])
        }

        setHasMore(endIndex < filtered.length)
      } catch (error) {
        console.error('Error loading posts:', error)
        setPosts([])
        setHasMore(false)
      } finally {
        setIsLoading(false)
        setIsLoadingMore(false)
      }
    }

    loadPosts()
  }, [selectedParentCategory, selectedChildCategory, currentPage, allPosts, childCategories])

  const handleParentCategoryChange = (categoryId: string) => {
    if (selectedParentCategory === categoryId) {
      setSelectedParentCategory('')
      setSelectedChildCategory('')
    } else {
      setSelectedParentCategory(categoryId)
      setSelectedChildCategory('')
    }
    setCurrentPage(1)
    setHasMore(true)
  }

  const handleChildCategoryChange = (categoryId: string) => {
    if (selectedChildCategory === categoryId) {
      setSelectedChildCategory('')
    } else {
      setSelectedChildCategory(categoryId)
    }
    setCurrentPage(1)
    setHasMore(true)
  }

  const clearAllFilters = () => {
    setSelectedParentCategory('')
    setSelectedChildCategory('')
    setCurrentPage(1)
    setHasMore(true)
  }

  const loadMorePosts = () => {
    setIsLoadingMore(true)
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <>
      {/* Category Filters */}
      <section className='py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <CategoryFilters
            parentCategories={parentCategories}
            childCategories={childCategories}
            selectedParentCategory={selectedParentCategory}
            selectedChildCategory={selectedChildCategory}
            onParentCategoryChange={handleParentCategoryChange}
            onChildCategoryChange={handleChildCategoryChange}
            onClearAllFilters={clearAllFilters}
          />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <BlogPostGrid
        posts={posts}
        allCategories={allCategories}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        hasMore={hasMore}
        selectedParentCategory={selectedParentCategory}
        selectedChildCategory={selectedChildCategory}
        onLoadMore={loadMorePosts}
      />
    </>
  )
}

export { BlogContainer }
