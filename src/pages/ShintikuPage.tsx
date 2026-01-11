import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FixedCTA from '../components/FixedCTA'
import './ShintikuPage.css'

const ShintikuPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.inquiry-box, .gallery-item, .company-info-card')
    animateElements.forEach(el => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(30px)'
      htmlEl.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      observerRef.current?.observe(el)
    })

    // Staggered animation for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item')
    galleryItems.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.08}s`
    })

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if (observerRef.current) {
        animateElements.forEach(el => observerRef.current?.unobserve(el))
      }
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <div className="page-hero-text">
                <div className="page-hero-badge">
                  <span>🏠</span>
                  <span>NEW BUILT INN</span>
                </div>
                <h1 className="page-hero-title">
                  新築ヴィラタイプ旅館経営
                </h1>
                <p className="page-hero-desc">
                  一棟マンションや区分所有ではなく、<br />
                  戸建を建築して旅館運用を行い収益を得る投資です。<br />
                  新築ならではの安心感と、年<span className="accent">10%</span>の高利回りを両立。
                </p>
                <div className="page-hero-features">
                  <div className="page-hero-feature">
                    <span className="page-hero-feature-icon">💰</span>
                    <span>2,500万円〜</span>
                  </div>
                  <div className="page-hero-feature">
                    <span className="page-hero-feature-icon">📈</span>
                    <span>年間250万円収益</span>
                  </div>
                  <div className="page-hero-feature">
                    <span className="page-hero-feature-icon">🔧</span>
                    <span>修繕不安が少ない</span>
                  </div>
                </div>
              </div>
              <div className="page-hero-image">
                <div className="page-hero-image-main"></div>
                <div className="page-hero-image-badge">
                  <span className="page-hero-image-badge-number">10%</span>
                  <span className="page-hero-image-badge-text">利回り保証</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Prompt Section */}
        <section className="inquiry-section">
          <div className="container">
            <div className="inquiry-box">
              <div className="inquiry-icon">📋</div>
              <h2 className="inquiry-title">新築ヴィラタイプ旅館経営について<br />詳しく知りたい方へ</h2>
              <p className="inquiry-desc">
                新築ヴィラタイプ旅館経営は、お客様一人ひとりのご状況に合わせた<br />
                オーダーメイドのご提案をさせていただいております。
              </p>

              <div className="inquiry-highlight">
                <p className="inquiry-highlight-text">
                  新築ヴィラタイプ旅館経営のシミュレーションが知りたい方、<br />
                  ご興味がある方は、お電話またはお問い合わせフォームより<br />
                  お気軽にご連絡ください。
                </p>
              </div>

              <div className="inquiry-buttons">
                <a href="tel:0120-727-875" className="btn btn-tel">
                  <span>📞</span>
                  0120-727-875
                </a>
                <a href="#" className="btn btn-line">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINE公式アカウント
                </a>
                <Link to="/operation#contact" className="btn btn-primary">
                  <span>✉️</span>
                  お問い合わせフォーム
                </Link>
              </div>

              <p className="inquiry-note">※ 相談は無料です。専門スタッフが丁寧にご説明いたします。</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Gallery</div>
              <h2 className="section-title">実際の物件をご覧ください</h2>
              <p className="section-subtitle">高品質な設備と洗練されたデザイン</p>
            </div>

            <div className="gallery-grid">
              {[
                { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', label: '外観', large: true },
                { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', label: 'リビング', large: false },
                { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', label: 'キッチン', large: false },
                { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', label: '浴室', large: false },
                { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', label: 'ベッドルーム', large: false },
                { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', label: 'デッキ', large: false },
              ].map((item, i) => (
                <div key={i} className={`gallery-item ${item.large ? 'large' : ''}`}>
                  <img src={item.src} alt={item.label} />
                  <span className="gallery-item-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="section company-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Company</div>
              <h2 className="section-title">運営会社</h2>
              <p className="section-subtitle">創業20年の実績を持つ総合不動産会社</p>
            </div>

            <div className="company-content">
              <div className="company-logo-area">
                <div className="company-logo-text">PLEAST</div>
                <p className="company-tagline">株式会社PLEAST（プレスト）</p>
              </div>

              <div className="company-info-card">
                <h3 className="company-info-title">会社概要</h3>
                <table className="company-table">
                  <tbody>
                    <tr>
                      <th>会社名</th>
                      <td>株式会社PLEAST</td>
                    </tr>
                    <tr>
                      <th>設立</th>
                      <td>2005年7月</td>
                    </tr>
                    <tr>
                      <th>本社</th>
                      <td>福岡県博多区祇園町2-35</td>
                    </tr>
                    <tr>
                      <th>事業内容</th>
                      <td>総合不動産事業</td>
                    </tr>
                    <tr>
                      <th>代表電話</th>
                      <td><a href="tel:092-283-7555">092-283-7555</a></td>
                    </tr>
                    <tr>
                      <th>URL</th>
                      <td><a href="https://www.pleast.co.jp" target="_blank" rel="noopener noreferrer">https://www.pleast.co.jp</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">まずはお気軽に<br />ご相談ください</h2>
              <p className="cta-subtitle">
                新築ヴィラタイプ旅館経営に関するお問い合わせはこちら
              </p>
              <div className="cta-buttons">
                <a href="#" className="btn btn-line">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINE公式アカウント
                </a>
                <a href="tel:0120-727-875" className="btn btn-tel">
                  <span>📞</span>
                  0120-727-875
                </a>
              </div>
              <p className="cta-note">※ 相談は無料です。お気軽にお問い合わせください。</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FixedCTA />
    </>
  )
}

export default ShintikuPage