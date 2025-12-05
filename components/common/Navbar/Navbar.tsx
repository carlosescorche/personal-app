'use client'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { Link } from '@/components/common/Link'
import  { Logo }  from '@/components/common/Logo'
import { cn } from '@/components/common/utils'

const Navbar = () => {
  const location = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isScrolled) {
      timer = setTimeout(() => {
        setShowText(false)
      }, 0)
    } else {
      timer = setTimeout(() => {
        setShowText(true)
      }, 200)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [isScrolled])

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Newsletter', href: '', isExternal: true }
  ]

  const isActive = (href: string) => location === href

  return (
    <nav
      className={cn(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 transition-all duration-500 ease-out',
        isScrolled ? 'w-full max-w-7xl' : 'w-full max-w-7xl'
      )}
    >
      <div
        className={cn(
          'rounded-3xl md:rounded-full border transition-all duration-500 ease-out',
          isScrolled
            ? 'px-6 backdrop-blur-[24px] bg-gray-950/20 border-gray-500/20 shadow-2xl'
            : 'bg-transparent border-transparent shadow-2xl shadow-transparent'
        )}
      >
        <div
          className={cn(
            'flex justify-between items-center transition-all ease-out',
            isScrolled ? 'h-14' : 'h-14'
          )}
        >
          <Link
            href='/'
            className='flex items-center space-x-2'
          >
            <div className='flex items-center space-x-2'>
              <Logo text={showText && !isScrolled ? 'Carlos Escorche' : ''} size='sm' />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.isExternal ? '_blank' : '_self'}
                className={cn(
                  'uppercase px-2 py-2 font-medium tracking-wider transition-all duration-500 ease-out flex items-center gap-1',
                  isScrolled ? 'text-sm' : 'text-sm',
                  isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                )}
              >
                {item.name}
                {item.isExternal && <ArrowUpRight size={16} />}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'text-foreground hover:text-primary p-2 transition-all duration-500 ease-out',
                isScrolled ? 'scale-75' : 'scale-100'
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-secondary rounded-b-3xl overflow-hidden'>
            <div
              className={cn(
                'pt-2 pb-4 space-y-1 transition-all duration-500',
                isScrolled ? 'px-0' : 'px-2 bg-white border-secondary'
              )}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.isExternal ? '_blank' : '_self'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'uppercase tracking-wider py-2 font-medium transition-all duration-500 ease-out flex items-center gap-1',
                    isScrolled ? 'text-sm px-0' : 'text-sm px-3',
                    isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                  )}
                >
                  {item.name}
                  {item.isExternal && <ArrowUpRight size={16} />}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

