import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FixedCTA from '../components/FixedCTA'
import './TopPage.css'

const TopPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Smooth scroll for anchor links
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
    const animateElements = document.querySelectorAll('.problem-card, .solution-card, .stat-item, .clt-feature, .area-location, .company-info-card')
    animateElements.forEach(el => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(30px)'
      htmlEl.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      observerRef.current?.observe(el)
    })

    // Staggered animation for grid items
    const problemCards = document.querySelectorAll('.problem-card')
    problemCards.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.1}s`
    })

    const statItems = document.querySelectorAll('.stat-item')
    statItems.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.15}s`
    })

    const cltFeatures = document.querySelectorAll('.clt-feature')
    cltFeatures.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.1}s`
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
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-tagline">New Investment Style</div>
            <h1 className="hero-title">
              資産を守りながら、<br />
              年<span className="accent">10%</span>の収益を。
            </h1>
            <p className="hero-subtitle">
              CLTセルユニット × 旅館運用 × 完全手離れ。<br />
              新築ヴィラタイプ旅館とトランスフォーム型トレーラーハウスで、<br />
              新時代の不動産投資を実現します。
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <span className="hero-feature-icon">✓</span>
                <span>利回り10%保証</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">✓</span>
                <span>相続税80%圧縮可能</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">✓</span>
                <span>完全手離れ運用</span>
              </div>
            </div>
            <div className="hero-cta-group">
              <a href="#contact" className="btn btn-primary">
                無料相談はこちら
                <span>→</span>
              </a>
              <a href="#solution" className="btn btn-outline">
                詳しく見る
              </a>
            </div>
          </div>
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="hero-scroll-line"></div>
          </div>
        </section>

        {/* Anniversary Section */}
        <section className="anniversary-section">
          <div className="anniversary-bg"></div>
          <div className="anniversary-overlay"></div>
          <div className="confetti-container">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="confetti"></div>
            ))}
          </div>
          <div className="anniversary-content">
            <div className="elegant-ribbon">
              <span className="ribbon-text">20TH ANNIVERSARY</span>
            </div>
            <div className="celebration-number">20</div>
            <div className="celebration-th">th Anniversary</div>
            <h2 className="celebration-title">PLEAST 20周年プロジェクト</h2>
            <p className="celebration-year">2 0 0 5 — 2 0 2 5</p>
            <p className="celebration-message">
              おかげさまで創業20周年。<br />
              これからも皆様の資産形成をサポートしてまいります。
            </p>
            <a href="#contact" className="celebration-btn">
              詳しく見る →
            </a>
          </div>
        </section>

        {/* Problem Section */}
        <section className="problem-section" id="problem">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Issue</div>
              <h2 className="section-title">「資産が減る時代」—<br />あなたの資産は大丈夫ですか？</h2>
              <p className="section-subtitle">日本人の資産を確実に目減りさせる"五重苦"が押し寄せています</p>
            </div>
            
            <div className="problem-grid">
              {[
                { icon: '📈', title: '物価上昇', desc: '30年で主な食料品・光熱費は1.5倍に上昇' },
                { icon: '💰', title: '給与停滞', desc: '日本の平均賃金は30年ほぼ横ばい' },
                { icon: '📊', title: '税負担増加', desc: '国民負担率は20年で10%以上増加' },
                { icon: '🤖', title: '雇用不安', desc: 'AIがホワイトカラーの仕事も代替する時代へ' },
                { icon: '🏛️', title: '相続税', desc: '資産は三代で消える — 10億円が1.8億円に' },
              ].map((problem, i) => (
                <div key={i} className="problem-card">
                  <div className="problem-icon">{problem.icon}</div>
                  <h3 className="problem-title">{problem.title}</h3>
                  <p className="problem-desc">{problem.desc}</p>
                </div>
              ))}
            </div>

            <div className="problem-highlight">
              <p>現金で持っていても、インフレには勝てません。<br />今こそ、資産の形を変える時です。</p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="solution-section" id="solution">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Solution</div>
              <h2 className="section-title">PLEASTの解決策 —<br />「動く実物資産」で資産を守る</h2>
              <p className="section-subtitle">2つの投資商品で、相続対策と高利回りを両立</p>
            </div>

            <div className="solution-grid">
              <div className="solution-card">
                <div className="solution-image">
                  <span className="solution-badge">利回り10%保証</span>
                </div>
                <div className="solution-content">
                  <h3 className="solution-title">新築ヴィラタイプ旅館経営</h3>
                  <p className="solution-desc">
                    一棟マンションや区分所有ではなく、戸建を建築して旅館運用を行い収益を得る投資です。
                  </p>
                  <ul className="solution-features">
                    <li>物件価格2,500万円〜で年間250万円の収益</li>
                    <li>新築のため修繕不安が少ない</li>
                    <li>運用はPLEASTが旅館業として代行</li>
                    <li>実需転用可能で出口戦略も安心</li>
                  </ul>
                  <Link to="/shintiku" className="solution-link">
                    詳しく見る <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="solution-card">
                <div className="solution-image solution-image-2">
                  <span className="solution-badge">4年償却で節税</span>
                </div>
                <div className="solution-content">
                  <h3 className="solution-title">トランスフォーム型<br />トレーラーハウス運用</h3>
                  <p className="solution-desc">
                    "移動できる実物資産"でありながら、4年償却による相続評価の大幅圧縮と年10%の安定収益を両立。
                  </p>
                  <ul className="solution-features">
                    <li>1台2,500万円〜で年間200万円の収益</li>
                    <li>4年で簿価ゼロ、相続評価は大幅圧縮</li>
                    <li>移動可能で場所選定の自由度が高い</li>
                    <li>CLT構造でSDGs・地方創生にも貢献</li>
                  </ul>
                  <Link to="/trailer" className="solution-link">
                    詳しく見る <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {[
                { number: '10', unit: '%', label: '表面利回り保証', desc: '一般不動産投資の4-8%を大きく上回る' },
                { number: '80', unit: '%', label: '相続税圧縮可能', desc: '1億円 → 評価額2,000〜2,500万円に' },
                { number: '20', unit: '年', label: '運営実績', desc: '創業からの信頼と経験' },
              ].map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-number">{stat.number}<span className="stat-unit">{stat.unit}</span></div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-desc">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section" id="testimonials">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Voice</div>
              <h2 className="section-title">お客様の声</h2>
              <p className="section-subtitle">実際にご購入いただいたお客様からの声をご紹介します</p>
            </div>

            <div className="testimonials-grid">
              {[
                {
                  product: '新築ヴィラタイプ旅館',
                  age: '70代男性',
                  content: '築年数が30年以上経った一棟アパートを所有していましたが、ここ数年大きな修繕費が年に何回も掛かり、実際の手取り収入が毎月のローン金額とほぼ一緒まで減ってしまったので、愛着はありましたが昨年売却を決意しました。そこで出来た資金で利回りが10%近い新築ヴィラタイプ旅館に興味を持ち、インバウンド需要や無人運営システム、最新の設備を導入した建物に絶対的な価値は出てくると判断し、今後の運用に期待して購入を決断しました。',
                highlight: '利回りが10%近い新築ヴィラタイプ旅館'
                },
                {
                  product: 'トレーラーハウス',
                  age: '60代男性',
                  content: '区分所有を金融機関の融資で多数所有しておりましたが、管理費や修繕積立金が購入時より全体的に高くなり、毎月の収支が赤字になったので昨年全て売却を決めました。売却も良いタイミングで出来たのもあり、ある程度の現金を残せました。その資金での運用を考えていた為、今回は不動産ではなく、可動産であるトレーラーハウスの購入を決めました。いざとなった時に宿泊の需要がある所に短期間で移動する事が出来る所に最大のメリットを感じました。',
                  highlight: '可動産であるトレーラーハウス'
                },
                {
                  product: 'トレーラーハウス',
                  age: '50代男性',
                  content: 'トランスフォーム型トレーラーハウスとの事でしたので、初めは何だろうと思ったのですが床面積が通常の倍近くもあり、とても魅力的な商品に思いました。さらに購入から設置運営まで全て丸投げでお任せ出来る為、初めてでも非常に安心感を覚えました。比較的高利回りで安全で早い投資回収が可能な点と短期で償却ができるスキームは税制優遇とキャッシュフロー改善の両方を求めている私にとってはとても魅力的に感じました。',
                  highlight: '購入から設置運営まで全て丸投げでお任せ'
                },
              ].map((testimonial, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonial.age}</h4>
                      <span className="testimonial-product">{testimonial.product}</span>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      {testimonial.content.split(testimonial.highlight).map((part, j) => (
                        <span key={j}>
                          {part}
                          {j === 0 && <span className="testimonial-highlight">{testimonial.highlight}</span>}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="testimonials-disclaimer">※あくまで個人の感想であり、将来の運用成果を保証するものではありません。</p>
          </div>
        </section>

        {/* CLT Section */}
        <section className="clt-section" id="clt">
          <div className="container">
            <div className="clt-grid">
              <div className="clt-content">
                <div className="section-label" style={{ justifyContent: 'flex-start' }}>Technology</div>
                <h2>なぜCLTセルユニットなのか？</h2>
                <p className="clt-intro">
                  CLT（Cross Laminated Timber）は、木材を直交に積層した次世代の建築素材。
                  100%木材の箱型ユニットでありながら、コンクリート並みの強度を持ち、
                  従来の建築の常識を覆す革新的な構造です。
                </p>
                <div className="clt-features">
                  {[
                    { icon: '💪', title: '圧倒的な強度', desc: '曲げ強さは鉄の約15倍、コンクリートの約400倍' },
                    { icon: '🏠', title: '高断熱・高耐震', desc: '夏は涼しく冬は暖かい、地震にも強い' },
                    { icon: '⚡', title: '工期短縮', desc: '従来の木造・鉄骨の約1/3に短縮' },
                    { icon: '🌿', title: '環境貢献', desc: 'CO₂固定で地球環境に貢献' },
                    { icon: '🚚', title: '移動可能', desc: 'ユニット解体で別場所へ移動可能' },
                    { icon: '🔄', title: '転用可能', desc: '住宅への転用で出口戦略が広がる' },
                  ].map((feature, i) => (
                    <div key={i} className="clt-feature">
                      <div className="clt-feature-icon">{feature.icon}</div>
                      <div className="clt-feature-text">
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="clt-visual">
                <div className="clt-image"></div>
                <div className="clt-badge">
                  <span className="clt-badge-number">1/5</span>
                  <span className="clt-badge-text">重量は鉄筋の約1/5</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Area Section */}
        <section className="area-section" id="area">
          <div className="container">
            <div className="area-content">
              <div className="area-map">
                <h3 className="area-map-title">📍 運用エリア</h3>
                <div className="area-locations">
                  {[
                    { icon: '🏖️', name: '糸島市', desc: '人気の海辺リゾート。福岡市街地からアクセス良好' },
                    { icon: '🏯', name: '唐津市', desc: '唐津城、虹の松原など歴史・自然の観光名所' },
                    { icon: '🦑', name: '呼子', desc: '新鮮なイカの名所。朝市も人気のスポット' },
                  ].map((location, i) => (
                    <div key={i} className="area-location">
                      <div className="area-location-icon">{location.icon}</div>
                      <div>
                        <div className="area-location-name">{location.name}</div>
                        <div className="area-location-desc">{location.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="area-info">
                <div className="section-label" style={{ justifyContent: 'flex-start' }}>Location</div>
                <h2>福岡・佐賀の<br />観光地で展開</h2>
                <p>
                  九州の玄関口・福岡と、自然豊かな佐賀県。
                  インバウンドと国内観光客の両方を取り込む好立地で展開しています。
                </p>
                <p>
                  観光需要の高いエリアを厳選し、安定した稼働率を実現。
                  地域創生にも貢献する、新しい形の不動産投資です。
                </p>
                <div className="area-stats">
                  <div className="area-stat">
                    <div className="area-stat-number">2,000万+</div>
                    <div className="area-stat-label">年間観光客数（福岡県）</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="company-section" id="company">
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
              <h2 className="cta-title">あなたに最適な<br />シミュレーションをご案内します</h2>
              <p className="cta-subtitle">
                新築ヴィラタイプ旅館経営 ／ トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
              </p>
              <div className="cta-buttons">
                <a href="#" className="btn btn-primary" style={{ background: '#06c755' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINE公式アカウント
                </a>
                <a href="tel:0120-727-875" className="btn btn-outline" style={{ borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>
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

export default TopPage