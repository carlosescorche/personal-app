import { Button } from '@/components/common/Button'
import { getChildrenOfSelectedParent } from '@/utils/blog'
import type { Category } from '@/types/blog'

interface CategoryFiltersProps {
  parentCategories: Category[]
  childCategories: Category[]
  selectedParentCategory: string
  selectedChildCategory: string
  onParentCategoryChange: (categoryId: string) => void
  onChildCategoryChange: (categoryId: string) => void
  onClearAllFilters: () => void
  className?: string
}

const CategoryFilters = ({
  parentCategories,
  childCategories,
  selectedParentCategory,
  selectedChildCategory,
  onParentCategoryChange,
  onChildCategoryChange,
  onClearAllFilters,
  className = ''
}: CategoryFiltersProps) => {
  const childrenOfSelectedParent = getChildrenOfSelectedParent(selectedParentCategory, childCategories)

  return (
    <div className={className}>
      {/* Parent Category Filters */}
      <div className='flex flex-wrap gap-3 justify-center mb-4'>
        <Button
          variant={!selectedParentCategory && !selectedChildCategory ? 'primary' : 'outline'}
          onClick={onClearAllFilters}
        >
          Todos los Temas
        </Button>

        {parentCategories.length > 0
          ? parentCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedParentCategory === category.id ? 'primary' : 'outline'}
                onClick={() => onParentCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))
          : [1, 2, 3, 4].map((item) => (
              <Button
                key={item}
                variant='outline'
                className='w-32'
                disabled
              >
                {''}
              </Button>
            ))}
      </div>

      {/* Child Category Filters - Only show if parent category is selected */}
      {selectedParentCategory && childrenOfSelectedParent.length > 0 && (
        <div className='flex flex-wrap gap-2 justify-center'>
          {childrenOfSelectedParent.map((category) => (
            <Button
              key={category.id}
              variant={selectedChildCategory === category.id ? 'primary' : 'outline'}
              size='sm'
              onClick={() => onChildCategoryChange(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryFilters

