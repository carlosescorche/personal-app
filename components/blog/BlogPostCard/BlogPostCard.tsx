import { Badge } from '@/components/common/Badge'
import { Link } from '@/components/common/Link'
import { Clock, Calendar } from 'lucide-react'
import { formatDate, calculateReadTime, getCategoryColor, getCategoryNameById } from '@/utils/blog'
import type { Post, Category } from '@/types/blog'

interface BlogPostCardProps {
  post: Post
  allCategories: Category[]
  showFullDate?: boolean
}

const BlogPostCard = ({ post, allCategories, showFullDate = false }: BlogPostCardProps) => {
  const categories = post.categories.map((categoryId) => allCategories.find((c) => c.id === categoryId))
  const parentCategories = categories.filter((c) => !c?.parent)
  const childCategories = categories.filter((c) => c?.parent)
  const postCategories = childCategories.length === 0 ? parentCategories : childCategories

  return (
    <Link href={`/blog/posts/${post.slug}`}>
      <article className='bg-card border border-border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary'>
        {/* Post Content */}
        <div className='p-6'>
          {/* Category Badge and Metadata */}
          <div className='flex items-center gap-3 mb-3 flex-wrap'>
            {postCategories.map(
              (category) =>
                category && (
                  <Badge
                    key={category.id}
                    className={getCategoryColor(category.id, allCategories)}
                  >
                    {getCategoryNameById(category.id, allCategories)}
                  </Badge>
                )
            )}
            <div className='flex items-center text-sm text-muted-foreground'>
              <Clock
                size={12}
                className='mr-1'
              />
              {calculateReadTime(post.html)}
            </div>
          </div>

          {/* Post Title */}
          <h3 className='text-xl font-semibold text-foreground mb-3'>{post.title}</h3>

          {/* Post Description */}
          <p className='text-sm mb-4 leading-relaxed text-muted-foreground'>{post.description}</p>

          {/* Post Footer */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-xs text-muted-foreground'>
              <Calendar
                size={12}
                className='mr-1'
              />
              {formatDate(post.published_at, showFullDate ? 'long' : 'short')}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogPostCard

