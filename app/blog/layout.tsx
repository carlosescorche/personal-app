import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Blog | Carlos Escorche',
    template: '%s | Blog Carlos Escorche'
  },
  description:
    'Blog de Carlos Escorche sobre desarrollo de software, programación, tecnología y mejores prácticas. Descubre insights, tutoriales y contenido técnico.',
  keywords: [
    'desarrollo de software',
    'programación',
    'tecnología',
    'inteligencia artificial',
    'tutoriales',
    'código',
    'software engineering'
  ],
  authors: [{ name: 'Carlos Escorche' }],
  creator: 'Carlos Escorche',
  publisher: 'Carlos Escorche',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://carlosescorche.com'),
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    type: 'website',
    siteName: 'Carlos Escorche',
    locale: 'es_ES',
    title: 'Blog | Carlos Escorche',
    description:
      'Blog de Carlos Escorche sobre desarrollo de software, programación, tecnología y mejores prácticas.',
    url: '/blog',
    images: [
      {
        url: '/images/carlos-escorche.webp',
        width: 1200,
        height: 630,
        alt: 'Blog Carlos Escorche'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Carlos Escorche',
    description:
      'Blog de Carlos Escorche sobre desarrollo de software, programación, tecnología y mejores prácticas.',
    images: ['/images/blog-default.jpg'],
    creator: '@caescorche',
    site: '@caescorche'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

