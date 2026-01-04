import { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollableHeight = documentHeight - windowHeight
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div
      className="position-fixed top-0 start-0 w-100"
      style={{
        height: '4px',
        backgroundColor: 'transparent',
        zIndex: 9999,
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          backgroundColor: '#1a2a4a',
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  )
}

export default ScrollProgress

