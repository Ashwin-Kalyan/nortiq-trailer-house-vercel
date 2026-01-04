import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 py-md-5 py-lg-4" style={{ backgroundColor: '#0f1a2e' }}>
      <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
        <div className="row g-4 g-md-5 mb-4 mb-md-5">
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/" className="d-inline-block mb-3" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', textDecoration: 'none' }}>
              PLEAST
            </Link>
            <p className="text-white-50 small mb-4" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: '1.8' }}>
              株式会社PLEAST（プレスト）<br />
              〒812-0038 福岡県博多区祇園町2-35
            </p>
            <div className="pt-3 border-top border-white-10">
              <div className="d-flex align-items-center mb-2 small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                <span className="me-2">📞</span>
                <a href="tel:092-283-7555" className="text-white-50 text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  092-283-7555
                </a>
              </div>
              <div className="d-flex align-items-center mb-2 small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                <span className="me-2">🆓</span>
                <a href="tel:0120-929-727" className="text-white-50 text-decoration-none" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  0120-929-727（フリーダイヤル）
                </a>
              </div>
              <div className="d-flex align-items-center small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                <span className="me-2">🌐</span>
                <a
                  href="https://www.pleast.co.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50 text-decoration-none"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  https://www.pleast.co.jp
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h4 className="small text-uppercase mb-3 mb-md-4" style={{ color: '#c9a962', fontSize: '0.875rem', letterSpacing: '0.1em', fontWeight: '600' }}>商品</h4>
            <ul className="list-unstyled">
              <li className="mb-2 mb-md-3">
                <Link to="/shintiku" className="text-white-50 text-decoration-none small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  新築戸建旅館運用
                </Link>
              </li>
              <li className="mb-2 mb-md-3">
                <Link to="/trailer-house" className="text-white-50 text-decoration-none small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  トレーラーハウス運用
                </Link>
              </li>
              <li className="mb-2 mb-md-3">
                <Link to="/operation" className="text-white-50 text-decoration-none small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  運用説明・Q&A
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h4 className="small text-uppercase mb-3 mb-md-4" style={{ color: '#c9a962', fontSize: '0.875rem', letterSpacing: '0.1em', fontWeight: '600' }}>会社情報</h4>
            <ul className="list-unstyled">
              <li className="mb-2 mb-md-3">
                <a href="#company" className="text-white-50 text-decoration-none small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  会社概要
                </a>
              </li>
              <li className="mb-2 mb-md-3">
                <a href="#contact" className="text-white-50 text-decoration-none small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  お問い合わせ
                </a>
              </li>
              <li className="mb-2 mb-md-3">
                <a href="#" className="text-white-50 text-decoration-none small" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-3 pt-md-4 border-top border-white-10 d-flex flex-column flex-md-row justify-content-between align-items-center small" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
          <span className="mb-2 mb-md-0">© 2025 PLEAST Inc. All Rights Reserved.</span>
          <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3">
            <a href="#" className="text-white-50 text-decoration-none" style={{ color: 'rgba(255,255,255,0.5)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
              プライバシーポリシー
            </a>
            <a href="#" className="text-white-50 text-decoration-none" style={{ color: 'rgba(255,255,255,0.5)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
