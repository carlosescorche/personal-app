import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@/components/common/Link'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { getCategoryBySlug, getAllPosts, getAllCategories } from '@/lib/blog'
import { getCategoryColor } from '@/utils/blog'
import { CategoryPageContent } from '@/containers/blog/CategoryPageContent'
import type { Metadata } from 'next'

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    return {
      title: 'Categoría no encontrada',
      description: 'La categoría que buscas no está disponible.'
    }
  }

  return {
    title: `${category.name} | Blog`,
    description: category.description || `Artículos sobre ${category.name}`
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const allPosts = await getAllPosts()
  const allCategories = await getAllCategories()
  const categoryColor = getCategoryColor(category, allCategories)

  return (
    <div className='min-h-screen pt-20'>
      {/* Header */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Back Button */}
          <div className='mb-8'>
            <Link href='/blog'>
              <Button
                variant='outline'
                size='sm'
              >
                <ArrowLeft
                  size={16}
                  className='mr-2'
                />
                Volver al Blog
              </Button>
            </Link>
          </div>

          {/* Category Header */}
          <div className='text-center max-w-4xl mx-auto mb-12'>
            <div className='flex justify-center mb-6'>
              <Badge className={`${categoryColor} text-lg px-4 py-2`}>{category.name}</Badge>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>{category.name}</h1>
            <p className='text-xl text-muted-foreground leading-relaxed'>{category.description}</p>
          </div>
        </div>
      </section>

      {/* Client Component para las páginas */}
      <CategoryPageContent
        category={category}
        allPosts={allPosts}
        allCategories={allCategories}
      />
    </div>
  )
}

