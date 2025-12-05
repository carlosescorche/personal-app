import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'
import '@testing-library/jest-dom'

describe('Logo Component', () => {
  test('renders with default text', () => {
    render(<Logo />)
    const logoElement = screen.getByText(/Playling/i)
    expect(logoElement).toBeInTheDocument()
  })

  test('renders with custom text', () => {
    render(<Logo text='MyLogo' />)
    const logoElement = screen.getByText(/MyLogo/i)
    expect(logoElement).toBeInTheDocument()
  })

  test('applies small size styles', () => {
    render(<Logo size='sm' />)
    const logoElement = screen.getByText(/Playling/i)
    expect(logoElement).toHaveClass('text-[1.3rem]')

    const iconElement = screen.getByRole('img', { hidden: true }) // PlayIcon usa <svg>, que es accesible como una imagen
    expect(iconElement).toHaveClass('w-8', 'h-8')
  })

  test('applies large size styles', () => {
    render(<Logo size='lg' />)
    const logoElement = screen.getByText(/Playling/i)
    expect(logoElement).toHaveClass('text-[1.5rem]')

    const iconElement = screen.getByRole('img', { hidden: true })
    expect(iconElement).toHaveClass('w-9', 'h-9')
  })

  test('renders the PlayIcon correctly', () => {
    render(<Logo />)
    const iconElement = screen.getByRole('img', { hidden: true })
    expect(iconElement).toBeInTheDocument()
  })
})
