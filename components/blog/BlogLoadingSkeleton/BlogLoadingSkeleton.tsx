interface BlogLoadingSkeletonProps {
  count?: number
  className?: string
}

const BlogLoadingSkeleton = ({ count = 9, className = '' }: BlogLoadingSkeletonProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className='bg-card border border-border rounded-xl overflow-hidden animate-pulse'
        >
          {/* Content Skeleton */}
          <div className='p-6'>
            {/* Badge and metadata skeleton */}
            <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3'></div>

            {/* Title skeleton */}
            <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3'></div>

            {/* Description skeleton */}
            <div className='h-32 bg-gray-200 dark:bg-gray-700 rounded mb-4'></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogLoadingSkeleton

