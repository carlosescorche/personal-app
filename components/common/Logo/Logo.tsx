import clsx from 'clsx'
import Image from 'next/image'

type LogoProps = {
  text?: string
  size?: 'sm' | 'lg'
}

const sizes = {
  sm: {
    text: 'text-sm',
    icon: 'w-8 h-8'
  },
  md: {
    text: 'text-md',
    icon: 'w-9 h-9'
  },
  lg: {
    text: 'text-lg',
    icon: 'w-9 h-9'
  }
}

export function Logo({ text = 'Carlos Escorche', size = 'sm' }: LogoProps) {
  return (
    <div
      className={clsx(
        'flex font-normal tracking-wider uppercase whitespace-nowrap text-foreground gap-2 items-center justify-center',
        sizes[size].text
      )}
    >
      <span className='inline-flex items-center'>
        <Image
          src='/images/carlos-escorche-logo.svg'
          alt='Carlos Escorche'
          width={28}
          height={28}
        />
      </span>
      {text}
    </div>
  )
}
