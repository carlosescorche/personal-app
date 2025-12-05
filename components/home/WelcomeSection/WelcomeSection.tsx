import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/common/Button'

function WelcomeSection() {
  return (
    <div className='w-full max-w-7xl min-h-[calc(100vh-7rem)] mx-auto px-4 py-[12rem] flex flex-col justify-center'>
      <div className='flex flex-col md:flex-row gap-12 xl:gap-32 items-center'>
        <div className='w-full sm:w-1/2'>
          <Image
            src='/images/carlos-escorche.webp'
            alt='Carlos Escorche'
            width={600}
            height={800}
            className='w-full xl:w-11/12 object-cover rounded-lg'
          />
        </div>
        <div className='w-full sm:w-1/2'>
          <h1 className='text-3xl xl:text-4xl font-bold mb-6 text-primary'>
            Hola.
          </h1>
          <p className='text-xl xl:text-2xl leading-relaxed text-foreground'>
            Soy Carlos Escorche, ingeniero en informática con más de 10 años de experiencia en
            desarrollo de software. A lo largo de mi carrera he trabajado creando soluciones
            digitales y aprendiendo a usar la tecnología como una herramienta práctica para resolver
            problemas reales.
            <br />
            <br />
            Hoy exploro la inteligencia artificial y la automatización como herramientas para
            trabajar de manera más productiva y creativa. En este sitio comparto mi proceso de
            aprendizaje con un enfoque práctico y accesible, para que cualquiera pueda inspirarse y
            aplicarlo en su día a día.
          </p>
          <div className='flex flex-col lg:flex-row gap-4 mt-8'>
            <Button
              variant='primary'
              size='lg'
            >
              <span>Explorar Artículos</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection

