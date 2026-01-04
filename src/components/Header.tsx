import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = location.pathname === '/'

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled || !isHomePage ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      style={{
        transition: 'all 0.3s ease',
        ...(scrolled || !isHomePage ? {} : { backgroundColor: 'transparent' }),
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
            color: scrolled || !isHomePage ? '#1a2a4a' : '#ffffff',
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
            color: scrolled || !isHomePage ? '#1a2a4a' : '#ffffff',
            borderColor: scrolled || !isHomePage ? '#1a2a4a' : '#ffffff'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3 gap-lg-4">
            <li className="nav-item">
              <Link
                to="/#problem"
                className="nav-link"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: scrolled || !isHomePage ? '#3d3d3d' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled || !isHomePage ? '#3d3d3d' : 'rgba(255,255,255,0.9)'
                }}
              >
                課題
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#solution"
                className="nav-link"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: scrolled || !isHomePage ? '#3d3d3d' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled || !isHomePage ? '#3d3d3d' : 'rgba(255,255,255,0.9)'
                }}
              >
                商品
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#clt"
                className="nav-link"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: scrolled || !isHomePage ? '#3d3d3d' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled || !isHomePage ? '#3d3d3d' : 'rgba(255,255,255,0.9)'
                }}
              >
                CLT構造
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#company"
                className="nav-link"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  color: scrolled || !isHomePage ? '#3d3d3d' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c9a962'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled || !isHomePage ? '#3d3d3d' : 'rgba(255,255,255,0.9)'
                }}
              >
                会社概要
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/#contact"
                className="btn"
                style={{
                  backgroundColor: '#c9a962',
                  color: '#1a1a1a',
                  padding: '0.625rem 1.5rem',
                  borderRadius: '0.25rem',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  border: 'none',
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
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
