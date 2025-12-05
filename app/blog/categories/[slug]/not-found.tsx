import { Link } from '@/components/common/Link'
import { Button } from '@/components/common/Button'

export default function NotFound() {
  return (
    <div className='min-h-screen pt-20 flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-foreground mb-4'>Categoría no encontrada</h1>
        <p className='text-muted-foreground mb-8'>
          La categoría que buscas no existe o ha sido eliminada.
        </p>
        <Link href='/blog'>
          <Button>Volver al Blog</Button>
        </Link>
      </div>
    </div>
  )
}

