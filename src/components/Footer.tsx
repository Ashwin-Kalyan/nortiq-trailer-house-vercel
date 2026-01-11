import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">PLEAST</Link>
            <p>
              株式会社PLEAST（プレスト）<br />
              〒812-0038 福岡県博多区祇園町2-35
            </p>
          </div>
          <div className="footer-links">
            <h4>商品</h4>
            <ul>
              <li><Link to="/shintiku">新築ヴィラタイプ旅館経営</Link></li>
              <li><Link to="/trailer">トレーラーハウス運用</Link></li>
              <li><Link to="/operation">運用説明・Q&A</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>会社情報</h4>
            <ul>
              <li><a href="/#company">会社概要</a></li>
              <li><a href="/#contact">お問い合わせ</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 PLEAST Inc. All Rights Reserved.</span>
          <div className="footer-legal">
            <a href="#">プライバシーポリシー</a>
            <a href="#">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer