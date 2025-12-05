import Image from 'next/image'
import { Link } from '../Link'

const Footer = () => {
  return (
    <footer className='w-full max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start justify-center md:justify-between text-sm uppercase text-foreground'>
      <div className='flex flex-col xl:flex-row items-start gap-2 mb-8 md:mb-0'>
        <span>Correo electrónico</span>
        <span className='mx-2 hidden xl:inline'> ⎯ </span>

        <Link
          variant='secondary'
          href='mailto:contacto@carlosescorche.com'
          target='_blank'
        >
          contacto@carlosescorche.com
        </Link>
      </div>

      <div className='flex flex-col xl:flex-row items-start xl:items-center gap-2 mb-12 md:mb-0'>
        <span className='text-foreground'>Donde encontrarme</span>
        <span className='mx-3 hidden xl:inline'> ⎯ </span>

        <ul className='flex flex-row gap-4 mt-2 md:mt-0'>
          <li>
            <Link
              variant='secondary'
              className='flex flex-row gap-2 items-center bg-primary p-3 rounded-lg hover:bg-primary/10 transition-all duration-300'
              href='https://www.instagram.com/caescorche'
            >
              <Image
                src='/icons/instagram.svg'
                alt='Instagram'
                width={16}
                height={16}
              />
            </Link>
          </li>
          <li>
            <Link
              variant='secondary'
              className='flex flex-row gap-2 items-center bg-primary p-3 rounded-lg hover:bg-primary/10 transition-all duration-300'
              href='https://www.linkedin.com/in/carlosescorche/'
            >
              <Image
                src='/icons/linkedin.svg'
                alt='LinkedIn'
                width={16}
                height={16}
              />
            </Link>
          </li>
          <li>
            <Link
              variant='secondary'
              className='flex flex-row gap-2 items-center bg-primary p-3 rounded-lg hover:bg-primary/10 transition-all duration-300'
              href='https://www.youtube.com/@caescorche'
            >
              <Image
                src='/icons/youtube.svg'
                alt='YouTube'
                width={16}
                height={16}
              />
            </Link>
          </li>
          <li>
            <Link
              variant='secondary'
              className='flex flex-row gap-2 items-center bg-primary p-3 rounded-lg hover:bg-primary/10 transition-all duration-300'
              href='https://www.tiktok.com/@caescorche'
            >
              <Image
                src='/icons/tiktok.svg'
                alt='TikTok'
                width={16}
                height={16}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

