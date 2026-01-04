import { useState, useEffect } from 'react'

const FixedCTA = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`position-fixed d-flex flex-column flex-md-row gap-3 transition-all ${visible ? 'opacity-100' : 'opacity-0'} ${visible ? 'translate-y-0' : 'translate-y-5'}`}
      style={{
        bottom: '0',
        right: '0',
        left: '0',
        zIndex: 1040,
        padding: '1rem',
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        transform: visible ? 'translateY(0)' : 'translateY(100%)'
      }}
    >
      <a
        href="#"
        className="btn flex-fill d-flex align-items-center justify-content-center gap-2"
        style={{
          backgroundColor: '#06c755',
          color: '#ffffff',
          padding: '1rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          fontSize: '0.875rem',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#05b04a'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#06c755'
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
        className="btn flex-fill d-flex align-items-center justify-content-center gap-2"
        style={{
          backgroundColor: '#c9a962',
          color: '#1a1a1a',
          padding: '1rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          fontSize: '0.875rem',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#d4b87a'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#c9a962'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        📞 電話相談
      </a>
    </div>
  )
}

export default FixedCTA
