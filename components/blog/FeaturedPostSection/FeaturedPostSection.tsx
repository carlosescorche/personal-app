import { FeaturedPostCard } from '../FeaturedPostCard'
import type { Post, Category } from '@/types/blog'

interface FeaturedPostSectionProps {
  post: Post | null
  allCategories: Category[]
  categoryColor?: string
  categoryName?: string
  sectionTitle?: string
  className?: string
}

const FeaturedPostSection = ({
  post,
  allCategories,
  categoryColor,
  categoryName,
  sectionTitle = 'Artículo Destacado',
  className = ''
}: FeaturedPostSectionProps) => {
  if (!post) return null

  return (
    <section className={`py-12 ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-foreground mb-4'>{sectionTitle}</h2>
        </div>

        <FeaturedPostCard
          post={post}
          allCategories={allCategories}
          categoryColor={categoryColor}
          categoryName={categoryName}
        />
      </div>
    </section>
  )
}

export default FeaturedPostSection

