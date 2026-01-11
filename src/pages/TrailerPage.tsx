import { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FixedCTA from '../components/FixedCTA'
import './TrailerPage.css'

const TrailerPage = () => {
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
    const animateElements = document.querySelectorAll('.target-card, .problem-content, .inheritance-box, .simulation-card, .sdgs-card, .company-info-card')
    animateElements.forEach(el => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(30px)'
      htmlEl.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      observerRef.current?.observe(el)
    })

    // Staggered animation for grid items
    const targetCards = document.querySelectorAll('.target-card')
    targetCards.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.1}s`
    })

    const sdgsCards = document.querySelectorAll('.sdgs-card')
    sdgsCards.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.15}s`
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
                  <span>🚚</span>
                  <span>TRANSFORM TRAILER HOUSE</span>
                </div>
                <h1 className="page-hero-title">
                  トランスフォーム型<br />
                  トレーラーハウス運用
                </h1>
                <p className="page-hero-desc">
                  "移動できる実物資産"でありながら、<br />
                  4年償却による相続評価の大幅圧縮と<br />
                  年<span className="accent">10%</span>の安定収益を両立。
                </p>
                <div className="page-hero-features">
                  <div className="page-hero-feature">
                    <span className="page-hero-feature-icon">💰</span>
                    <span>2,500万円〜</span>
                  </div>
                  <div className="page-hero-feature">
                    <span className="page-hero-feature-icon">📈</span>
                    <span>年間200万円収益</span>
                  </div>
                  <div className="page-hero-feature">
                    <span className="page-hero-feature-icon">📉</span>
                    <span>4年で簿価ゼロ</span>
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

        {/* Target Section */}
        <section className="section target-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Target</div>
              <h2 className="section-title">こんな方におすすめ</h2>
              <p className="section-subtitle">現金を持っていても増えない、でもリスクは取りたくない方へ</p>
            </div>

            <div className="target-grid">
              {[
                { icon: '💵', title: '現金で多額の資産を', title2: '保有する方' },
                { icon: '👨‍👩‍👧‍👦', title: '相続を見据えた', title2: '資産対策をしたい方' },
                { icon: '📊', title: '節税しながら', title2: '収入も欲しい方' },
                { icon: '😤', title: '株や不動産で', title2: '損失経験がある方' },
                { icon: '🌍', title: '社会貢献にも', title2: '関心がある方' },
              ].map((target, i) => (
                <div key={i} className="target-card">
                  <div className="target-icon">{target.icon}</div>
                  <h3 className="target-title">{target.title}<br />{target.title2}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section problem-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Issues</div>
              <h2 className="section-title">日本人の資産を蝕む "五重苦"</h2>
              <p className="section-subtitle">あなたの資産を確実に目減りさせる5つの構造的問題</p>
            </div>

            {[
              {
                title: '📈 物価上昇（インフレ）',
                desc: '30年間で主な食料品・光熱費は約1.5倍に上昇。銀行預金の金利は0.001%程度。現金で持っていても、実質的な資産価値は毎年目減りしています。',
                stat: { number: '1.5', label: '倍（30年間の物価上昇）' },
                chart: (
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#8B1A1A',stopOpacity:0.3}}/>
                        <stop offset="100%" style={{stopColor:'#8B1A1A',stopOpacity:0}}/>
                      </linearGradient>
                    </defs>
                    <path d="M 40 160 Q 100 155 160 140 T 280 100 T 380 60" stroke="#8B1A1A" strokeWidth="3" fill="none"/>
                    <path d="M 40 160 Q 100 155 160 140 T 280 100 T 380 60 V 180 H 40 Z" fill="url(#chartGrad)"/>
                    <text x="40" y="190" fontSize="11" fill="#6b6b6b">1994</text>
                    <text x="200" y="190" fontSize="11" fill="#6b6b6b">2009</text>
                    <text x="360" y="190" fontSize="11" fill="#6b6b6b">2024</text>
                    <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#8B1A1A" textAnchor="middle">消費者物価指数の推移</text>
                  </svg>
                )
              },
              {
                title: '💰 給与停滞',
                desc: '日本の平均賃金は過去30年間ほぼ横ばい。先進国で唯一成長していません。物価は上がるのに、収入は増えない — この構造が家計を圧迫します。',
                stat: { number: '30', label: '年間 賃金成長なし' },
                chart: (
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="60" y="80" width="50" height="100" fill="#A52A2A" rx="4"/>
                    <rect x="130" y="60" width="50" height="120" fill="#c9a962" rx="4"/>
                    <rect x="200" y="50" width="50" height="130" fill="#c9a962" rx="4"/>
                    <rect x="270" y="40" width="50" height="140" fill="#c9a962" rx="4"/>
                    <text x="85" y="195" fontSize="10" fill="#6b6b6b" textAnchor="middle">日本</text>
                    <text x="155" y="195" fontSize="10" fill="#6b6b6b" textAnchor="middle">米国</text>
                    <text x="225" y="195" fontSize="10" fill="#6b6b6b" textAnchor="middle">英国</text>
                    <text x="295" y="195" fontSize="10" fill="#6b6b6b" textAnchor="middle">韓国</text>
                    <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#8B1A1A" textAnchor="middle">先進国の賃金上昇率比較</text>
                  </svg>
                )
              },
              {
                title: '📊 税負担の増加',
                desc: '国民負担率（税金＋社会保険料）は過去20年で10%以上増加。稼いでも手取りは減る一方です。合法的な節税対策がますます重要になっています。',
                stat: { number: '47', label: '%（国民負担率 2023年）' },
                chart: (
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="taxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#b8432f',stopOpacity:0.3}}/>
                        <stop offset="100%" style={{stopColor:'#b8432f',stopOpacity:0}}/>
                      </linearGradient>
                    </defs>
                    <path d="M 40 150 L 120 140 L 200 120 L 280 90 L 360 60" stroke="#b8432f" strokeWidth="3" fill="none"/>
                    <path d="M 40 150 L 120 140 L 200 120 L 280 90 L 360 60 V 180 H 40 Z" fill="url(#taxGrad)"/>
                    <circle cx="40" cy="150" r="5" fill="#b8432f"/>
                    <circle cx="120" cy="140" r="5" fill="#b8432f"/>
                    <circle cx="200" cy="120" r="5" fill="#b8432f"/>
                    <circle cx="280" cy="90" r="5" fill="#b8432f"/>
                    <circle cx="360" cy="60" r="5" fill="#b8432f"/>
                    <text x="40" y="190" fontSize="11" fill="#6b6b6b">2003</text>
                    <text x="200" y="190" fontSize="11" fill="#6b6b6b">2013</text>
                    <text x="360" y="190" fontSize="11" fill="#6b6b6b">2023</text>
                    <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#8B1A1A" textAnchor="middle">国民負担率の推移</text>
                  </svg>
                )
              },
              {
                title: '🤖 AIによる雇用リスク',
                desc: 'ChatGPTをはじめとするAIの急速な進化により、ホワイトカラーの仕事も安泰ではなくなりました。給与収入だけに頼らない収入源の確保が急務です。',
                stat: { number: '49', label: '%（AIに代替されうる仕事の割合）' },
                chart: (
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="60" y="60" width="80" height="30" fill="#8B1A1A" rx="4"/>
                    <rect x="60" y="100" width="120" height="30" fill="#A52A2A" rx="4"/>
                    <rect x="60" y="140" width="180" height="30" fill="#c9a962" rx="4"/>
                    <text x="150" y="80" fontSize="11" fill="#fff">事務職 30%</text>
                    <text x="190" y="120" fontSize="11" fill="#fff">営業職 45%</text>
                    <text x="250" y="160" fontSize="11" fill="#1a1a1a">専門職 60%</text>
                    <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#8B1A1A" textAnchor="middle">職種別AI代替リスク</text>
                  </svg>
                )
              },
              {
                title: '🏛️ 相続税の重圧',
                desc: '"資産は三代で消える"と言われます。相続税率は最大55%。10億円の資産も三代後にはわずか1.8億円に。事前対策なしでは資産は守れません。',
                stat: { number: '55', label: '%（相続税 最高税率）' },
                chart: (
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="80" height="130" fill="#8B1A1A" rx="4"/>
                    <rect x="160" y="90" width="80" height="90" fill="#A52A2A" rx="4"/>
                    <rect x="270" y="130" width="80" height="50" fill="#c9a962" rx="4"/>
                    <text x="90" y="40" fontSize="12" fontWeight="bold" fill="#8B1A1A" textAnchor="middle">10億円</text>
                    <text x="200" y="80" fontSize="12" fontWeight="bold" fill="#A52A2A" textAnchor="middle">4.5億円</text>
                    <text x="310" y="120" fontSize="12" fontWeight="bold" fill="#c9a962" textAnchor="middle">1.8億円</text>
                    <text x="90" y="195" fontSize="11" fill="#6b6b6b" textAnchor="middle">初代</text>
                    <text x="200" y="195" fontSize="11" fill="#6b6b6b" textAnchor="middle">二代目</text>
                    <text x="310" y="195" fontSize="11" fill="#6b6b6b" textAnchor="middle">三代目</text>
                    <text x="200" y="20" fontSize="14" fontWeight="bold" fill="#8B1A1A" textAnchor="middle">相続税による資産減少イメージ</text>
                  </svg>
                )
              },
            ].map((problem, i) => (
              <div key={i} className="problem-content">
                <div className="problem-text">
                  <h3>{problem.title}</h3>
                  <p>{problem.desc}</p>
                  <div className="problem-stat">
                    <span className="problem-stat-number">{problem.stat.number}</span>
                    <span className="problem-stat-label">{problem.stat.label}</span>
                  </div>
                </div>
                <div className="problem-chart">
                  {problem.chart}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inheritance Section */}
        <section className="section inheritance-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Solution</div>
              <h2 className="section-title">相続税を"ほぼゼロ"に圧縮する方法</h2>
              <p className="section-subtitle">2,500万円のトレーラーハウスの場合</p>
            </div>

            <div className="inheritance-comparison">
              <div className="inheritance-box before">
                <span className="inheritance-box-label">BEFORE</span>
                <div className="inheritance-amount">1億円</div>
                <p className="inheritance-desc">現金のまま保有</p>
                <div className="inheritance-detail">
                  相続税評価額＝1億円（そのまま課税対象）
                </div>
              </div>

              <div className="inheritance-arrow">
                <span className="inheritance-arrow-icon">→</span>
                <span className="inheritance-arrow-text">転換</span>
              </div>

              <div className="inheritance-box after">
                <span className="inheritance-box-label">AFTER</span>
                <div className="inheritance-amount">2,000万円</div>
                <p className="inheritance-desc">トレーラーハウス4台に転換</p>
                <div className="inheritance-detail">
                  4年後の相続評価額＝1台500万円×4台＝2,000万円
                </div>
              </div>
            </div>

            <div className="inheritance-result">
              <h3>基礎控除内に収まれば...</h3>
              <span className="inheritance-result-highlight">相続税 0円</span>
              <p>
                基礎控除3,600万円（配偶者＋子1人の場合4,200万円）を活用すれば、<br />
                評価額2,000万円の資産は非課税で相続可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Depreciation Section */}
        <section className="section depreciation-section">
          <div className="container">
            <div className="depreciation-content">
              <div className="depreciation-chart">
                <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.2rem' }}>4年間の減価償却イメージ</h3>
                <div className="depreciation-bars">
                  {[1, 2, 3, 4].map((year) => (
                    <div key={year} className="depreciation-bar">
                      <div className="depreciation-bar-fill" style={{ height: '100%' }}></div>
                      <span className="depreciation-bar-value">625万</span>
                      <span className="depreciation-bar-label">{year}年目</span>
                    </div>
                  ))}
                </div>
                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '1rem' }}>
                  ※ 2,500万円を4年で均等償却した場合
                </p>
              </div>

              <div className="depreciation-info">
                <div className="section-label" style={{ justifyContent: 'flex-start' }}>Depreciation</div>
                <h3>4年償却で"実質利回り"はさらに高く</h3>
                <p>
                  トレーラーハウスは車両扱いのため、法定耐用年数はわずか4年。
                  毎年の減価償却費を経費計上することで、
                  表面利回り10%を超える"実質利回り"を実現できます。
                </p>

                <div className="depreciation-highlight">
                  <h4>2,500万円投資時の年間収支（概算）</h4>
                  <div className="depreciation-calc">
                    <div className="depreciation-calc-row">
                      <span>リース収益</span>
                      <span>+200万円</span>
                    </div>
                    <div className="depreciation-calc-row">
                      <span>減価償却費（経費）</span>
                      <span>−625万円</span>
                    </div>
                    <div className="depreciation-calc-row">
                      <span>課税所得の圧縮効果</span>
                      <span>約200万円相当</span>
                    </div>
                    <div className="depreciation-calc-row total">
                      <span>実質利回り</span>
                      <span>15%以上</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simulation Section */}
        <section className="section simulation-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Simulation</div>
              <h2 className="section-title">10年間の収益シミュレーション</h2>
              <p className="section-subtitle">初期投資から10年後までの収益を試算</p>
            </div>

            <div className="simulation-grid">
              {[
                {
                  units: '1ユニット',
                  price: '2,500',
                  lease: '200万円',
                  total: '2,000万円',
                  sale: '500万円（保証）',
                  result: '約2,000万円'
                },
                {
                  units: '2ユニット',
                  price: '4,000',
                  lease: '320万円',
                  total: '3,200万円',
                  sale: '800万円（保証）',
                  result: '約3,200万円'
                },
              ].map((sim, i) => (
                <div key={i} className="simulation-card">
                  <div className="simulation-card-header">
                    <div className="simulation-card-units">{sim.units}</div>
                    <div className="simulation-card-price">{sim.price}<span>万円</span></div>
                  </div>
                  <div className="simulation-card-body">
                    <div className="simulation-row">
                      <span className="simulation-row-label">年間リース収益</span>
                      <span className="simulation-row-value">{sim.lease}</span>
                    </div>
                    <div className="simulation-row">
                      <span className="simulation-row-label">10年間の累計収益</span>
                      <span className="simulation-row-value">{sim.total}</span>
                    </div>
                    <div className="simulation-row">
                      <span className="simulation-row-label">10年後の売却価格</span>
                      <span className="simulation-row-value">{sim.sale}</span>
                    </div>
                    <div className="simulation-result">
                      <span className="simulation-result-label">10年後の手取り</span>
                      <span className="simulation-result-value">{sim.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="simulation-note">
              <p>
                ※ 上記は概算シミュレーションです。<strong>減価償却による節税効果</strong>を含めると、<br />
                実質的な利回りはさらに高くなります。詳細シミュレーションは個別相談にてご案内いたします。
              </p>
            </div>
          </div>
        </section>

        {/* SDGs Section */}
        <section className="section sdgs-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Social Impact</div>
              <h2 className="section-title">社会貢献にもなる投資</h2>
              <p className="section-subtitle">収益を得ながら、地域と環境に貢献できます</p>
            </div>

            <div className="sdgs-grid">
              {[
                { icon: '🏕️', title: '災害時対応', desc: '移動可能なため、災害時には仮設住宅や避難所として活用可能。地域の防災力向上に貢献します。' },
                { icon: '🏞️', title: '遊休地活用', desc: '使われていない土地を観光資源として再活用。空き地問題の解決と地域経済の活性化に寄与します。' },
                { icon: '🌾', title: '地方創生', desc: '観光客を地方に誘導し、地域の雇用創出と経済循環を促進。過疎化対策にも貢献します。' },
                { icon: '🌲', title: '環境配慮', desc: 'CLT（木材）構造でCO₂を固定。製造時の環境負荷も低く、サステナブルな建築を実現します。' },
              ].map((sdgs, i) => (
                <div key={i} className="sdgs-card">
                  <div className="sdgs-icon">{sdgs.icon}</div>
                  <h3 className="sdgs-title">{sdgs.title}</h3>
                  <p className="sdgs-desc">{sdgs.desc}</p>
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
              <h2 className="cta-title">あなたに最適な<br />シミュレーションをご案内します</h2>
              <p className="cta-subtitle">
                トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
              </p>
              <div className="cta-buttons">
                <a href="#" className="btn btn-primary" style={{ background: '#06c755' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINE公式アカウント
                </a>
                <a href="tel:0120-727-875" className="btn btn-primary">
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

export default TrailerPage