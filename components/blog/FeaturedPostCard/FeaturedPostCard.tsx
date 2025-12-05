import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { Link } from '@/components/common/Link'
import Image from 'next/image'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import { formatDate, calculateReadTime, getCategoryColor, getCategoryNameById } from '@/utils/blog'
import type { Post, Category } from '@/types/blog'

interface FeaturedPostCardProps {
  post: Post
  allCategories: Category[]
  categoryColor?: string
  categoryName?: string
}

const FeaturedPostCard = ({ post, allCategories, categoryColor, categoryName }: FeaturedPostCardProps) => {
  const primaryCategory = post.categories.length > 0 ? post.categories[0] : null
  const displayCategoryColor =
    categoryColor || (primaryCategory ? getCategoryColor(primaryCategory, allCategories) : '')
  const displayCategoryName =
    categoryName || (primaryCategory ? getCategoryNameById(primaryCategory, allCategories) : 'General')

  return (
    <div className='bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-8'>
        {/* Content */}
        <div className='order-2 lg:order-1'>
          {/* Metadata */}
          <div className='flex items-center gap-4 mb-4 flex-wrap'>
            <Badge className={displayCategoryColor}>{displayCategoryName}</Badge>
            <div className='flex items-center text-sm text-muted-foreground'>
              <Calendar
                size={14}
                className='mr-1'
              />
              {formatDate(post.published_at)}
            </div>
            <div className='flex items-center text-sm text-muted-foreground'>
              <Clock
                size={14}
                className='mr-1'
              />
              {calculateReadTime(post.html)}
            </div>
          </div>

          {/* Title */}
          <h3 className='text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4'>
            {post.title}
          </h3>

          {/* Description */}
          <p className='text-lg mb-6 leading-relaxed text-muted-foreground'>{post.description}</p>

          {/* CTA Button */}
          <Link href={`/blog/posts/${post.slug}`}>
            <Button>
              Leer Artículo
              <ArrowRight
                size={16}
                className='ml-2'
              />
            </Button>
          </Link>
        </div>

        {/* Image */}
        <div className='order-1 lg:order-2'>
          <div className='aspect-video flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden'>
            {post.cover_image ? (
              <Image
                src={post.cover_image}
                alt={post.title}
                width={600}
                height={400}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
              />
            ) : (
              <div className='text-6xl text-gray-400'>📝</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPostCard

