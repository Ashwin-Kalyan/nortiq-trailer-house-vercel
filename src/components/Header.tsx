import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (hash: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first, then scroll
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // If on homepage, just scroll to the section
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Update URL without scrolling
        window.history.pushState(null, '', hash)
      }
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 1050
      }}
    >
      <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1400px' }}>
        <Link
          to="/"
          className="navbar-brand"
          style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: 'clamp(1.5rem, 2.5vw, 1.875rem)',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            color: '#1a2a4a',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }}
        >
          PLEAST
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            color: '#1a2a4a',
            borderColor: '#1a2a4a'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2 gap-lg-3 gap-xl-4">
            <li className="nav-item">
              <a
                href="/#problem"
                onClick={(e) => handleNavClick('#problem', e)}
                className="nav-link text-center text-lg-start"
                style={{
                  fontSize: 'clamp(0.813rem, 0.8vw, 0.875rem)',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: '#3d3d3d',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#3d3d3d'
                }}
              >
                課題
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#solution"
                onClick={(e) => handleNavClick('#solution', e)}
                className="nav-link text-center text-lg-start"
                style={{
                  fontSize: 'clamp(0.813rem, 0.8vw, 0.875rem)',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: '#3d3d3d',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#3d3d3d'
                }}
              >
                商品
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#clt"
                onClick={(e) => handleNavClick('#clt', e)}
                className="nav-link text-center text-lg-start"
                style={{
                  fontSize: 'clamp(0.813rem, 0.8vw, 0.875rem)',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: '#3d3d3d',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#3d3d3d'
                }}
              >
                CLT構造
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#company"
                onClick={(e) => handleNavClick('#company', e)}
                className="nav-link text-center text-lg-start"
                style={{
                  fontSize: 'clamp(0.813rem, 0.8vw, 0.875rem)',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: '#3d3d3d',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#3d3d3d'
                }}
              >
                会社概要
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/operation"
                className="nav-link text-center text-lg-start"
                style={{
                  fontSize: 'clamp(0.813rem, 0.8vw, 0.875rem)',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: '#3d3d3d',
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#3d3d3d'
                }}
              >
                運用説明・Q&A
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center justify-content-lg-start mt-2 mt-lg-0">
              <a
                href="/#contact"
                onClick={(e) => handleNavClick('#contact', e)}
                className="btn w-100 w-lg-auto"
                style={{
                  backgroundColor: '#c9a962',
                  color: '#1a1a1a',
                  padding: '0.625rem 1.5rem',
                  borderRadius: '0.25rem',
                  fontWeight: '600',
                  fontSize: 'clamp(0.813rem, 0.8vw, 0.875rem)',
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  maxWidth: '200px'
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
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
