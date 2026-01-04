import { useState, useEffect } from 'react'

const FixedCTA = () => {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div
      className={`position-fixed d-flex ${visible ? 'visible' : ''}`}
      style={{
        bottom: isMobile ? '0' : '2rem',
        right: isMobile ? '0' : '2rem',
        left: isMobile ? '0' : 'auto',
        zIndex: 999,
        flexDirection: isMobile ? 'row' : 'column',
        gap: '0.75rem',
        padding: isMobile ? '1rem' : '0',
        backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isMobile ? 'blur(10px)' : 'none',
        boxShadow: isMobile ? '0 -4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        borderRadius: isMobile ? '0' : '0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none'
      }}
      id="fixedCta"
    >
      <a
        href="#"
        className="fixed-cta-btn line"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.5rem',
          borderRadius: isMobile ? '8px' : '50px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.9rem',
          backgroundColor: '#06c755',
          color: '#ffffff',
          boxShadow: '0 20px 60px rgba(26, 42, 74, 0.15)',
          transition: 'all 0.3s ease',
          flex: isMobile ? '1' : 'auto',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        LINE
      </a>
      <a
        href="tel:0120-929-727"
        className="fixed-cta-btn contact"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.5rem',
          borderRadius: isMobile ? '8px' : '50px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.9rem',
          backgroundColor: '#c9a962',
          color: '#1a1a1a',
          boxShadow: '0 20px 60px rgba(26, 42, 74, 0.15)',
          transition: 'all 0.3s ease',
          flex: isMobile ? '1' : 'auto',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <span>📞</span>
        電話相談
      </a>
    </div>
  )
}

export default FixedCTA
