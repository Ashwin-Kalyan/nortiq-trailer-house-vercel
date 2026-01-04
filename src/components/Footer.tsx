import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-12">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-16 mb-12">
          <div>
            <Link to="/" className="font-serif text-2xl font-bold mb-4 inline-block">
              PLEAST
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              株式会社PLEAST（プレスト）<br />
              〒812-0038 福岡県博多区祇園町2-35
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 mb-3 text-white/70 text-sm">
                <span>📞</span>
                <a href="tel:092-283-7555" className="text-white/70 hover:text-secondary transition-colors">
                  092-283-7555
                </a>
              </div>
              <div className="flex items-center gap-3 mb-3 text-white/70 text-sm">
                <span>🆓</span>
                <a href="tel:0120-929-727" className="text-white/70 hover:text-secondary transition-colors">
                  0120-929-727（フリーダイヤル）
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <span>🌐</span>
                <a
                  href="https://www.pleast.co.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  https://www.pleast.co.jp
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-secondary text-sm tracking-wider uppercase mb-6">商品</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shintiku" className="text-white/70 text-sm hover:text-secondary transition-colors">
                  新築戸建旅館運用
                </Link>
              </li>
              <li>
                <Link to="/trailer-house" className="text-white/70 text-sm hover:text-secondary transition-colors">
                  トレーラーハウス運用
                </Link>
              </li>
              <li>
                <Link to="/operation" className="text-white/70 text-sm hover:text-secondary transition-colors">
                  運用説明・Q&A
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-secondary text-sm tracking-wider uppercase mb-6">会社情報</h4>
            <ul className="space-y-3">
              <li>
                <a href="#company" className="text-white/70 text-sm hover:text-secondary transition-colors">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 text-sm hover:text-secondary transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 text-sm hover:text-secondary transition-colors">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs text-white/50">
          <span>© 2025 PLEAST Inc. All Rights Reserved.</span>
          <div>
            <a href="#" className="text-white/50 hover:text-secondary transition-colors ml-8">
              プライバシーポリシー
            </a>
            <a href="#" className="text-white/50 hover:text-secondary transition-colors ml-8">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

