import { BlogContainer } from '@/containers/blog/BlogContainer'
import { getAllCategories, getAllPosts } from '@/lib/blog'

export default async function BlogPage() {
  const allCategories = await getAllCategories()
  const allPosts = await getAllPosts()

  const parentCategories = allCategories.filter((category) => !category.parent || category.parent === '')
  const childCategories = allCategories.filter((category) => category.parent && category.parent !== '')

  return (
    <div className='min-h-screen pt-20 pb-14'>
      {/* Header */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-4xl mx-auto mb-12'>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>Blog</h1>
            <p className='text-xl text-muted-foreground mb-8'>
              Comparto mis aprendizajes sobre automatización e inteligencia artificial con ejemplos
              prácticos y simples, para que puedas aplicarlos en tu día a día.
            </p>
          </div>

        </div>
      </section>

      {/* Blog Posts Grid - Client Component */}
      <BlogContainer
        allPosts={allPosts}
        allCategories={allCategories}
        parentCategories={parentCategories}
        childCategories={childCategories}
      />
    </div>
  )
}

