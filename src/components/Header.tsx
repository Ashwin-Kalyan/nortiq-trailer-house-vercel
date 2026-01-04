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
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-12 flex justify-between items-center">
        <Link
          to="/"
          className={`font-serif text-3xl font-bold tracking-wider no-underline transition-colors duration-300 ${
            scrolled || !isHomePage ? 'text-primary' : 'text-white'
          }`}
        >
          PLEAST
        </Link>
        <nav className="flex gap-10 items-center">
          <Link
            to="/#problem"
            className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
              scrolled || !isHomePage ? 'text-text-body' : 'text-white/90'
            }`}
          >
            課題
            <span className="absolute bottom-[-4px] left-0 w-0 h-px bg-secondary transition-all duration-300 hover:w-full"></span>
          </Link>
          <Link
            to="/#solution"
            className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
              scrolled || !isHomePage ? 'text-text-body' : 'text-white/90'
            }`}
          >
            商品
            <span className="absolute bottom-[-4px] left-0 w-0 h-px bg-secondary transition-all duration-300 hover:w-full"></span>
          </Link>
          <Link
            to="/#clt"
            className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
              scrolled || !isHomePage ? 'text-text-body' : 'text-white/90'
            }`}
          >
            CLT構造
            <span className="absolute bottom-[-4px] left-0 w-0 h-px bg-secondary transition-all duration-300 hover:w-full"></span>
          </Link>
          <Link
            to="/#company"
            className={`text-sm font-medium tracking-wide transition-all duration-300 relative ${
              scrolled || !isHomePage ? 'text-text-body' : 'text-white/90'
            }`}
          >
            会社概要
            <span className="absolute bottom-[-4px] left-0 w-0 h-px bg-secondary transition-all duration-300 hover:w-full"></span>
          </Link>
          <Link
            to="/#contact"
            className="bg-secondary text-text-dark py-2.5 px-6 rounded font-semibold text-sm transition-all duration-300 hover:bg-secondary-light hover:-translate-y-0.5"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

