import { ReactNode } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  className = '',
  threshold = 0.1,
  rootMargin = '0px'
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ 
    threshold,
    rootMargin,
    triggerOnce: true 
  })

  const delayClass = delay > 0 ? `scroll-reveal-delay-${Math.min(delay, 5)}` : ''

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollReveal

