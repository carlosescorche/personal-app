import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { BlogPostCard } from '../BlogPostCard'
import { BlogEmptyState } from '../BlogEmptyState'
import { BlogLoadingSkeleton } from '../BlogLoadingSkeleton'
import { getBlogSectionTitle, getPostCountText } from '@/utils/blog'
import type { Post, Category } from '@/types/blog'

interface BlogPostGridProps {
  posts: Post[]
  allCategories: Category[]
  isLoading: boolean
  isLoadingMore: boolean
  hasMore: boolean
  selectedParentCategory?: string
  selectedChildCategory?: string
  sectionTitle?: string
  onLoadMore?: () => void
  showPostCount?: boolean
  showLoadMore?: boolean
  className?: string
}

const BlogPostGrid = ({
  posts,
  allCategories,
  isLoading,
  isLoadingMore,
  hasMore,
  selectedParentCategory = '',
  selectedChildCategory = '',
  sectionTitle,
  onLoadMore,
  showPostCount = true,
  showLoadMore = true,
  className = ''
}: BlogPostGridProps) => {
  const displayTitle =
    sectionTitle || getBlogSectionTitle(selectedChildCategory, selectedParentCategory, allCategories)
  const postCountText = getPostCountText(posts.length)

  return (
    <section className={`py-12 ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-foreground mb-4'>{displayTitle}</h2>

          {isLoading && (
            <div className='flex justify-start items-center text-muted-foreground'>
              <span className='ml-2'>Cargando artículos...</span>
            </div>
          )}

          {!isLoading && showPostCount && <p className='text-muted-foreground'>{postCountText.text}</p>}
        </div>

        {isLoading && posts.length === 0 ? (
          <BlogLoadingSkeleton />
        ) : (
          <>
            {/* Posts Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {posts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  allCategories={allCategories}
                />
              ))}
            </div>

            {/* Load More Button */}
            {showLoadMore && hasMore && posts.length > 0 && onLoadMore && (
              <div className='text-center mt-12'>
                <Button
                  variant='outline'
                  onClick={onLoadMore}
                  disabled={isLoading || isLoadingMore}
                >
                  Ver más artículos{' '}
                  {isLoadingMore ? (
                    <span className='ml-2'>...</span>
                  ) : (
                    <ArrowDown
                      size={16}
                      className='ml-2'
                    />
                  )}
                </Button>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!isLoading && posts.length === 0 && (
          <BlogEmptyState
            description={
              selectedChildCategory || selectedParentCategory
                ? 'No hay artículos para este tema. Intenta con otro tema.'
                : 'No hay artículos disponibles en este momento.'
            }
          />
        )}
      </div>
    </section>
  )
}

export default BlogPostGrid

