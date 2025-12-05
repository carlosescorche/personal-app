'use client'
import { ReactNode } from 'react'
import NextLink from 'next/link'
import { cn } from '../utils'

interface LinkProperties {
  children: ReactNode
  variant?: 'default' | 'secondary' | 'primary'
  className?: string
  href: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  [key: string]: unknown
}

const variants = {
  default: '',
  secondary: 'text-foreground font-medium hover:text-primary cursor-pointer',
  primary: 'text-primary font-medium hover:underline cursor-pointer'
}

/**
 * Link component wrapper for Next.js Link
 */
export function Link({ variant = 'default', children, className, href, ...props }: LinkProperties) {
  return (
    <NextLink
      href={href}
      className={cn('transition-all duration-300', variants[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}

