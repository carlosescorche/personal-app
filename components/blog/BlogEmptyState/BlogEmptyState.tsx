import { Search } from 'lucide-react'

interface BlogEmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  className?: string
}

const BlogEmptyState = ({
  title = 'No se encontraron artículos',
  description = 'No hay artículos disponibles en este momento.',
  icon,
  className = ''
}: BlogEmptyStateProps) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className='w-16 h-16 bg-gray-500/20 rounded-xl flex items-center justify-center mx-auto mb-4'>
        {icon || (
          <Search
            className='text-gray-500'
            size={24}
          />
        )}
      </div>
      <h3 className='text-xl font-semibold text-foreground mb-2'>{title}</h3>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  )
}

export default BlogEmptyState

