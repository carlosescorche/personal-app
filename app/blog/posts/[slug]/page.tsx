import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Link } from '@/components/common/Link'
import { Badge } from '@/components/common/Badge'
import { getPostBySlug, getAllCategories } from '@/lib/blog'
import { formatDate, calculateReadTime, getCategoryColor } from '@/utils/blog'
import type { Metadata } from 'next'

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no está disponible.'
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.cover_image ? [post.cover_image] : []
    }
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allCategories = await getAllCategories()
  const postCategories = allCategories.filter((category) => post.categories.includes(category.id))
  const parentCategories = postCategories.filter((category) => !category.parent)
  const childCategories = postCategories.filter((category) => category.parent)
  const displayCategories = childCategories.length === 0 ? parentCategories : childCategories

  const formattedDate = formatDate(post.published_at, 'long')
  const readTime = calculateReadTime(post.html)

  return (
    <div className='min-h-screen pt-20'>
      {/* Breadcrumb */}
      <section className='py-8 border-b border-border'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center text-sm text-muted-foreground'>
            <Link
              href='/blog'
              className='hover:text-primary transition-colors flex items-center gap-2 uppercase'
            >
              <ArrowLeft size={16} />
              Volver al listado de artículos
            </Link>
          </div>
        </div>
      </section>

      {/* Article Header and Content */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            {/* Article Header */}
            <div className='mb-8'>
              <div className='flex items-center justify-between gap-4 mb-6 flex-wrap'>
                <div className='flex flex-col md:flex-row gap-4'>
                  <div className='flex gap-4 flex-wrap'>
                    {displayCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/blog/categories/${category.slug}`}
                      >
                        <Badge className={getCategoryColor(category, allCategories)}>
                          {category.name}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                  <div className='hidden md:flex items-center text-sm text-muted-foreground'>
                    <Calendar size={14} />
                    <span className='ml-1'>{formattedDate}</span>
                  </div>
                  <div className='hidden md:flex items-center text-sm text-muted-foreground'>
                    <Clock size={14} />
                    <span className='ml-1'>{readTime}</span>
                  </div>
                </div>
              </div>

              <h1 className='text-foreground text-4xl md:text-[3rem] md:leading-[3.5rem] md:mb-8 font-semibold'>
                {post.title}
              </h1>
            </div>

            {/* Article Content */}
            <div 
              className='pt-4 pb-12 prose prose-lg dark:prose-invert max-w-none'
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

