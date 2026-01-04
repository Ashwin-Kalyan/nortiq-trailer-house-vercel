import { useState } from 'react'
import { Link } from 'react-router-dom'

const ShintikuPage = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="section-padding bg-gradient-primary position-relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="position-absolute top-0 end-0" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(201,169,98,0.1) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(25%, -25%)' }}></div>
        <div className="position-absolute bottom-0 start-0" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(-5%, 15%)' }}></div>
        <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-1" style={{ maxWidth: '1200px' }}>
          <div className="row g-4 g-md-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="text-white">
                <div className="d-inline-flex align-items-center gap-3 mb-4 mb-md-5 small text-uppercase fw-medium" style={{ color: '#c9a962', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                  <div className="bg-secondary" style={{ width: '2.5rem', height: '1px' }}></div>
                  <span className="d-flex align-items-center gap-2">
                    <span>🏠</span>
                    NEW BUILT INN
                  </span>
                  <div className="bg-secondary" style={{ width: '2.5rem', height: '1px' }}></div>
                </div>
                <h1 className="responsive-title text-white lh-sm mb-4 mb-md-5 fw-bold">
                  新築戸建旅館運用
                </h1>
                <p className="lead mb-4 mb-md-5" style={{ opacity: 0.9, lineHeight: '1.8', fontWeight: 300 }}>
                  一棟マンションや区分所有ではなく、<br className="d-none d-md-block" />
                  戸建を建築して旅館運用を行い収益を得る投資です。<br className="d-none d-md-block" />
                  新築ならではの安心感と、年<span className="d-inline-block fw-semibold" style={{ color: '#c9a962' }}>10%</span>の高利回りを両立。
                </p>
                <div className="d-flex flex-wrap gap-3 gap-md-4 mb-4 mb-md-5">
                  {[
                    { icon: '💰', text: '2,500万円〜' },
                    { icon: '📈', text: '年間250万円収益' },
                    { icon: '🔧', text: '修繕不安が少ない' },
                  ].map((feature, i) => (
                    <div key={i} className="d-flex align-items-center gap-2 small rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem 1.25rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)' }}>
                      <span style={{ color: '#c9a962' }}>{feature.icon}</span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="d-flex align-items-center gap-2 small mb-0" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>
                  <span className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '1.5rem', height: '1.5rem', color: '#c9a962', fontSize: '0.75rem' }}>✓</span>
                  <span className="fw-semibold">利回り10%保証</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 position-relative">
              <div
                className="w-100 bg-cover rounded position-relative overflow-hidden shadow-strong"
                style={{
                  height: '400px',
                  minHeight: '300px',
                  backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')`,
                }}
              >
                <span className="position-absolute top-0 start-0 m-3 bg-secondary text-dark py-2 px-3 small fw-bold text-uppercase rounded" style={{ color: '#1a1a1a', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                  利回り10%保証
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Prompt Section */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '900px' }}>
          <div className="text-center">
            <div className="mx-auto mb-4 mb-md-5 bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center shadow-medium" style={{ width: '6rem', height: '6rem', fontSize: '3rem' }}>
              📋
            </div>
            <h2 className="responsive-heading mb-4 mb-md-5" style={{ lineHeight: '1.8' }}>
              新築戸建旅館運用について<br />
              詳しく知りたい方へ
            </h2>
            <p className="lead mb-4 mb-md-5" style={{ color: '#3d3d3d', lineHeight: '1.8' }}>
              新築戸建旅館運用は、お客様一人ひとりのご状況に合わせた<br className="d-none d-md-block" />
              オーダーメイドのご提案をさせていただいております。
            </p>

            <div className="bg-gradient-primary rounded p-4 p-md-5 mb-4 mb-md-5 border border-2" style={{ background: 'linear-gradient(to bottom right, rgba(26,42,74,0.05), rgba(45,74,124,0.08))', borderColor: '#1a2a4a' }}>
              <p className="h5 fw-semibold mb-0" style={{ fontFamily: "'Noto Serif JP', serif", color: '#1a2a4a', lineHeight: '1.8' }}>
                新築戸建旅館運用のシミュレーションが知りたい方、<br className="d-none d-md-block" />
                ご興味がある方は、お電話またはお問い合わせフォームより<br className="d-none d-md-block" />
                お気軽にご連絡ください。
              </p>
            </div>

            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4 mb-md-5">
              <a
                href="tel:0120-929-727"
                className="btn btn-lg d-inline-flex align-items-center gap-2 text-decoration-none transition-all"
                style={{
                  backgroundColor: '#c9a962',
                  color: '#1a1a1a',
                  padding: '1rem 2.5rem',
                  fontWeight: 600,
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
                <span>📞</span>
                0120-929-727
              </a>
              <a
                href="#"
                className="btn btn-lg d-inline-flex align-items-center gap-2 text-decoration-none"
                style={{
                  backgroundColor: '#06c755',
                  color: '#ffffff',
                  padding: '1rem 2.5rem',
                  fontWeight: 600,
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
                LINE公式アカウント
              </a>
              <Link
                to="/operation#contact"
                className="btn btn-lg d-inline-flex align-items-center gap-2 text-decoration-none"
                style={{
                  background: 'linear-gradient(to bottom right, #1a2a4a, #2d4a7c)',
                  color: '#ffffff',
                  padding: '1rem 2.5rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <span>✉️</span>
                お問い合わせフォーム
              </Link>
            </div>

            <p className="small mb-0" style={{ color: '#6b6b6b' }}>※ 相談は無料です。専門スタッフが丁寧にご説明いたします。</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-warm">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1400px' }}>
          <div className="text-center mb-4 mb-md-5">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              Gallery
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              実際の物件をご覧ください
            </h2>
            <p className="text-base mx-auto" style={{ color: '#6b6b6b', maxWidth: '600px' }}>
              高品質な設備と洗練されたデザイン
            </p>
          </div>

          <div 
            className="d-flex gap-3 gap-md-4 overflow-x-auto pb-3"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#1a2a4a #f0f2f7',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {[
              { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', label: '外観' },
              { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', label: 'リビング' },
              { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', label: 'キッチン' },
              { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', label: '浴室' },
              { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', label: 'ベッドルーム' },
              { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', label: 'デッキ' },
            ].map((item, i) => {
              const [isHovered, setIsHovered] = useState(false)
              return (
                <div
                  key={i}
                  className="position-relative rounded overflow-hidden flex-shrink-0"
                  style={{
                    width: '350px',
                    height: '400px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isHovered ? '0 8px 40px rgba(26, 42, 74, 0.15)' : 'none'
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient" style={{ background: 'linear-gradient(to top, rgba(26,42,74,0.7), transparent)', opacity: isHovered ? '1' : '0', transition: 'opacity 0.3s ease', zIndex: '10', pointerEvents: 'none' }}></div>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-100 h-100 object-cover"
                    style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s ease' }}
                  />
                  <span className="position-absolute bottom-0 start-0 w-100 text-white fw-medium small p-3 z-2" style={{ opacity: isHovered ? '1' : '0', transition: 'opacity 0.3s ease', fontSize: '0.875rem', pointerEvents: 'none' }}>
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Custom scrollbar styling for webkit browsers */}
          <style>{`
            .overflow-x-auto::-webkit-scrollbar {
              height: 8px;
            }
            .overflow-x-auto::-webkit-scrollbar-track {
              background: #f0f2f7;
              border-radius: 4px;
            }
            .overflow-x-auto::-webkit-scrollbar-thumb {
              background: #1a2a4a;
              border-radius: 4px;
            }
            .overflow-x-auto::-webkit-scrollbar-thumb:hover {
              background: #2d4a7c;
            }
          `}</style>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-5 mb-md-6">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              Company
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4">運営会社</h2>
            <p className="text-base mx-auto" style={{ color: '#6b6b6b', maxWidth: '600px' }}>
              20年の実績と5,000社以上の取引先を持つ総合不動産会社
            </p>
          </div>

          <div className="row g-4 g-md-5 align-items-center">
            <div className="col-12 col-lg-4 text-center">
              <div className="fw-bold mb-3 mb-md-4" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '4rem', color: '#1a2a4a', letterSpacing: '0.1em' }}>PLEAST</div>
              <p className="text-base" style={{ color: '#6b6b6b', letterSpacing: '0.05em' }}>株式会社PLEAST（プレスト）</p>
            </div>

            <div className="col-12 col-lg-8">
              <div className="bg-cream rounded p-5 p-md-6 p-lg-7 position-relative overflow-hidden shadow-soft">
                <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'linear-gradient(to right, #1a2a4a, #c9a962)' }}></div>
                <h3 className="h4 mb-5 mb-md-6 pb-4 pb-md-5 border-bottom" style={{ borderColor: 'rgba(26, 42, 74, 0.1)' }}>会社概要</h3>
                <table className="w-100">
                  <tbody>
                    {[
                      { label: '会社名', value: '株式会社PLEAST' },
                      { label: '設立', value: '2005年7月' },
                      { label: '本社', value: '福岡県博多区祇園町2-35' },
                      { label: '事業内容', value: '総合不動産事業' },
                      { label: '取引先', value: '5,000社以上' },
                      { label: '代表電話', value: <a href="tel:092-283-7555" className="text-decoration-none" style={{ color: '#3d3d3d' }}>092-283-7555</a> },
                      { label: 'フリーダイヤル', value: <a href="tel:0120-929-727" className="text-decoration-none" style={{ color: '#3d3d3d' }}>0120-929-727</a> },
                      { label: 'URL', value: <a href="https://www.pleast.co.jp" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#3d3d3d' }}>https://www.pleast.co.jp</a> },
                    ].map((row, i) => (
                      <tr key={i} className="border-bottom" style={{ borderColor: 'rgba(26, 42, 74, 0.05)' }}>
                        <th className="py-4 py-md-5 text-start align-top fw-semibold small" style={{ width: '140px', color: '#1a2a4a', fontSize: '0.875rem' }}>{row.label}</th>
                        <td className="py-4 py-md-5 text-start align-top small" style={{ color: '#3d3d3d', fontSize: '0.875rem' }}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-gradient-primary-dark position-relative overflow-hidden">
        <div
          className="position-absolute top-0 end-0"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(201,169,98,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(25%, -25%)'
          }}
        ></div>
        <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-1" style={{ maxWidth: '1200px' }}>
          <div className="text-center">
            <h2 className="responsive-heading text-white mb-4">
              まずはお気軽に<br className="d-none d-md-block" />
              ご相談ください
            </h2>
            <p className="text-white mb-5 mb-md-6 lead" style={{ opacity: 0.7 }}>
              新築戸建旅館運用に関するお問い合わせはこちら
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4 mb-md-5">
              <a
                href="#"
                className="btn btn-lg d-inline-flex align-items-center gap-2 text-decoration-none transition-all"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#06c755',
                  color: '#ffffff',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  lineHeight: '1.5'
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
                LINE公式アカウント
              </a>
              <a
                href="tel:0120-929-727"
                className="btn btn-lg d-inline-flex align-items-center gap-2 text-decoration-none transition-all"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#c9a962',
                  color: '#1a1a1a',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  lineHeight: '1.5'
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
                <span>📞</span>
                0120-929-727
              </a>
            </div>
            <p className="text-white-50 small mb-0" style={{ opacity: 0.5 }}>※ 相談は無料です。お気軽にお問い合わせください。</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShintikuPage
