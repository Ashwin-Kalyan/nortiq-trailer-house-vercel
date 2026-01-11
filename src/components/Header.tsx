import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

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
      </div>
    </header>
  )
}

export default Header