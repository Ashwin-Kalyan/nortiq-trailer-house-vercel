import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="header-inner container-fluid px-3 px-md-4 px-lg-5">
        <div className="logo-area d-flex align-items-center">
          <Link to="/" className="logo">PLEAST</Link>
          <div className="anniversary-box d-none d-sm-flex">
            <span className="number">20th</span>
            <span className="text">ANNIVERSARY</span>
          </div>
        </div>
        <nav className="d-none d-lg-flex">
          {location.pathname === '/' ? (
            <>
              <a href="#problem">課題</a>
              <a href="#solution">商品</a>
              <a href="#clt">CLT構造</a>
              <a href="#company">会社概要</a>
              <Link to="/operation">Q&A</Link>
              <a href="#contact" className="header-cta">お問い合わせ</a>
            </>
          ) : (
            <>
              <Link to="/">TOP</Link>
              <Link to="/trailer">トレーラーハウス</Link>
              <Link to="/shintiku">新築ヴィラタイプ旅館</Link>
              <Link to="/operation">Q&A</Link>
              <Link to="/#contact" className="header-cta">お問い合わせ</Link>
            </>
          )}
        </nav>
        <button 
          className={`mobile-menu-toggle d-lg-none ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu d-lg-none">
          <nav className="mobile-nav">
            {location.pathname === '/' ? (
              <>
                <a href="#problem" onClick={() => setMobileMenuOpen(false)}>課題</a>
                <a href="#solution" onClick={() => setMobileMenuOpen(false)}>商品</a>
                <a href="#clt" onClick={() => setMobileMenuOpen(false)}>CLT構造</a>
                <a href="#company" onClick={() => setMobileMenuOpen(false)}>会社概要</a>
                <Link to="/operation" onClick={() => setMobileMenuOpen(false)}>Q&A</Link>
                <a href="#contact" className="header-cta" onClick={() => setMobileMenuOpen(false)}>お問い合わせ</a>
              </>
            ) : (
              <>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>TOP</Link>
                <Link to="/trailer" onClick={() => setMobileMenuOpen(false)}>トレーラーハウス</Link>
                <Link to="/shintiku" onClick={() => setMobileMenuOpen(false)}>新築ヴィラタイプ旅館</Link>
                <Link to="/operation" onClick={() => setMobileMenuOpen(false)}>Q&A</Link>
                <Link to="/#contact" className="header-cta" onClick={() => setMobileMenuOpen(false)}>お問い合わせ</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
