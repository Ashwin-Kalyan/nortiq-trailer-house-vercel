import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const problemSectionRef = useRef<HTMLDivElement>(null)
  const solutionSectionRef = useRef<HTMLDivElement>(null)
  const cltSectionRef = useRef<HTMLDivElement>(null)
  const companySectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth scroll handling
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-cover"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(26, 42, 74, 0.92) 0%, rgba(45, 74, 124, 0.85) 50%, rgba(15, 26, 46, 0.95) 100%), url('https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1920&q=80')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none'
        }}></div>
        <div className="container-fluid position-relative z-2 px-3 px-md-4 px-lg-5" style={{ maxWidth: '1400px' }}>
          <div className="d-inline-flex align-items-center gap-3 mb-4 mb-md-5 small text-uppercase fw-medium animate-fade-in-up" style={{ color: '#c9a962', fontSize: '0.875rem', letterSpacing: '0.1em', opacity: 0, animationDelay: '0.3s' }}>
            <div className="bg-secondary" style={{ width: '2.5rem', height: '1px' }}></div>
            New Investment Style
          </div>
          <h1 className="responsive-hero text-white lh-sm mb-4 mb-md-5 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.5s', fontWeight: 700 }}>
            資産を守りながら、<br className="d-none d-md-block" />
            年<span className="d-inline-block" style={{ color: '#c9a962' }}>10%</span>の収益を。
          </h1>
          <p className="lead text-white mb-4 mb-md-5 animate-fade-in-up" style={{ opacity: 0.85, maxWidth: '600px', animationDelay: '0.7s', fontWeight: 300 }}>
            CLTセルユニット × 旅館運用 × 完全手離れ。<br className="d-none d-md-block" />
            新築戸建旅館とトランスフォーム型トレーラーハウスで、<br className="d-none d-md-block" />
            新時代の不動産投資を実現します。
          </p>
          <div className="d-flex flex-wrap gap-3 gap-md-4 mb-4 mb-md-5 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.9s' }}>
            <div className="d-flex align-items-center gap-2 small" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>
              <span className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '1.5rem', height: '1.5rem', color: '#c9a962', fontSize: '0.75rem' }}>✓</span>
              <span>利回り10%保証</span>
            </div>
            <div className="d-flex align-items-center gap-2 small" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>
              <span className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '1.5rem', height: '1.5rem', color: '#c9a962', fontSize: '0.75rem' }}>✓</span>
              <span>相続税80%圧縮可能</span>
            </div>
            <div className="d-flex align-items-center gap-2 small" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>
              <span className="border border-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '1.5rem', height: '1.5rem', color: '#c9a962', fontSize: '0.75rem' }}>✓</span>
              <span>完全手離れ運用</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 animate-fade-in-up" style={{ opacity: 0, animationDelay: '1.1s' }}>
            <a
              href="#contact"
              className="btn btn-lg d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none transition-all"
              style={{
                backgroundColor: '#c9a962',
                color: '#1a1a1a',
                padding: '1rem 2.5rem',
                borderRadius: '0.25rem',
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
              無料相談はこちら
              <span>→</span>
            </a>
            <a
              href="#solution"
              className="btn btn-lg btn-outline-light d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
              style={{ padding: '1rem 2.5rem' }}
            >
              詳しく見る
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section ref={problemSectionRef} id="problem" className="section-padding bg-white position-relative">
        <div className="position-absolute top-0 start-0 w-100" style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(26,42,74,0.1), transparent)' }}></div>
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-4 mb-md-5">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              Issue
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              「資産が減る時代」—<br />
              あなたの資産は大丈夫ですか？
            </h2>
            <p className="text-base mx-auto" style={{ color: '#6b6b6b', maxWidth: '600px' }}>
              日本人の資産を確実に目減りさせる"五重苦"が押し寄せています
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {[
              { icon: '📈', title: '物価上昇', desc: '30年で主な食料品・光熱費は1.5倍に上昇' },
              { icon: '💰', title: '給与停滞', desc: '日本の平均賃金は30年ほぼ横ばい' },
              { icon: '📊', title: '税負担増加', desc: '国民負担率は20年で10%以上増加' },
              { icon: '🤖', title: '雇用不安', desc: 'AIがホワイトカラーの仕事も代替する時代へ' },
              { icon: '🏛️', title: '相続税', desc: '資産は三代で消える — 10億円が1.8億円に' },
            ].map((item, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg">
                <div
                  className="bg-cream p-4 p-md-5 rounded text-center position-relative overflow-hidden transition-all h-100"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="position-absolute top-0 start-0 w-100" style={{ height: '2px', background: 'linear-gradient(to right, #b8432f, #c9a962)', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></div>
                  <div className="mx-auto mb-3 mb-md-4 bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '3.75rem', height: '3.75rem', fontSize: '1.5rem' }}>
                    {item.icon}
                  </div>
                  <h3 className="h5 fw-semibold mb-2 mb-md-3" style={{ color: '#1a1a1a' }}>{item.title}</h3>
                  <p className="small" style={{ color: '#6b6b6b', lineHeight: '1.8' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 mt-md-5 text-center p-4 p-md-5 bg-gradient-primary rounded text-white">
            <p className="h5 fw-normal mb-0" style={{ fontFamily: "'Noto Serif JP', serif", lineHeight: '1.8' }}>
              現金で持っていても、インフレには勝てません。<br className="d-none d-md-block" />
              今こそ、資産の形を変える時です。
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={solutionSectionRef} id="solution" className="section-padding bg-warm position-relative">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-4 mb-md-5">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              Solution
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              PLEASTの解決策 —<br />
              「動く実物資産」で資産を守る
            </h2>
            <p className="text-base mx-auto" style={{ color: '#6b6b6b', maxWidth: '600px' }}>
              2つの投資商品で、相続対策と高利回りを両立
            </p>
          </div>

          <div className="row g-4 g-md-5">
            <div className="col-12 col-lg-6">
              <div className="bg-white rounded overflow-hidden shadow-soft transition-all h-100" style={{ transition: 'all 0.5s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(26, 42, 74, 0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)' }}>
                <div
                  className="bg-cover position-relative"
                  style={{
                    height: '280px',
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')`,
                  }}
                >
                  <span className="position-absolute top-0 start-0 m-3 bg-secondary text-dark py-2 px-3 small fw-bold text-uppercase rounded" style={{ color: '#1a1a1a', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                    利回り10%保証
                  </span>
                </div>
                <div className="p-4 p-md-5">
                  <h3 className="h4 mb-3 mb-md-4">新築戸建旅館運用</h3>
                  <p className="mb-4 small" style={{ color: '#6b6b6b' }}>
                    一棟マンションや区分所有ではなく、戸建を建築して旅館運用を行い収益を得る投資です。
                  </p>
                  <ul className="list-unstyled mb-4">
                    {[
                      '物件価格2,500万円〜で年間250万円の収益',
                      '新築のため修繕不安が少ない',
                      '運用はPLEASTが旅館業として代行',
                      '実需転用可能で出口戦略も安心',
                    ].map((item, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 mb-2 small">
                        <span className="fw-bold flex-shrink-0" style={{ color: '#2d4a7c' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/shintiku" className="d-inline-flex align-items-center gap-2 text-decoration-none small fw-semibold transition-all" style={{ color: '#1a2a4a', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.gap = '0.5rem'; e.currentTarget.style.color = '#2d4a7c' }} onMouseLeave={(e) => { e.currentTarget.style.gap = '0.5rem'; e.currentTarget.style.color = '#1a2a4a' }}>
                    詳しく見る <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="bg-white rounded overflow-hidden shadow-soft transition-all h-100" style={{ transition: 'all 0.5s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(26, 42, 74, 0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)' }}>
              <div
                className="h-70 bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80')`,
                }}
              >
                <span className="absolute top-6 left-6 bg-secondary text-text-dark py-2 px-4 text-xs font-bold tracking-wider rounded">
                  4年償却で節税
                </span>
              </div>
                <div className="p-4 p-md-5">
                  <h3 className="h4 mb-3 mb-md-4">
                    トランスフォーム型<br />
                    トレーラーハウス運用
                  </h3>
                  <p className="mb-4 small" style={{ color: '#6b6b6b' }}>
                    "移動できる実物資産"でありながら、4年償却による相続評価の大幅圧縮と年10%の安定収益を両立。
                  </p>
                  <ul className="list-unstyled mb-4">
                    {[
                      '1台2,500万円〜で年間200万円の収益',
                      '4年で簿価ゼロ、相続評価は大幅圧縮',
                      '移動可能で場所選定の自由度が高い',
                      'CLT構造でSDGs・地方創生にも貢献',
                    ].map((item, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 mb-2 small">
                        <span className="fw-bold flex-shrink-0" style={{ color: '#2d4a7c' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/trailer-house" className="d-inline-flex align-items-center gap-2 text-decoration-none small fw-semibold transition-all" style={{ color: '#1a2a4a', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.gap = '0.5rem'; e.currentTarget.style.color = '#2d4a7c' }} onMouseLeave={(e) => { e.currentTarget.style.gap = '0.5rem'; e.currentTarget.style.color = '#1a2a4a' }}>
                    詳しく見る <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section bg-gradient-primary-dark position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-1" style={{ maxWidth: '1200px' }}>
          <div className="row g-4 g-md-5">
            {[
              { number: '10', unit: '%', label: '表面利回り保証', desc: '一般不動産投資の4-8%を大きく上回る' },
              { number: '80', unit: '%', label: '相続税圧縮可能', desc: '1億円 → 評価額2,000〜2,500万円に' },
              { number: '5,000', unit: '+', label: '国内取引先', desc: '20年の実績と信頼' },
            ].map((stat, i) => (
              <div key={i} className="col-12 col-md-4 text-center text-white">
                <div className="mb-2 fw-bold lh-1" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', background: 'linear-gradient(to bottom right, white, #c9a962)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {stat.number}
                  <span className="opacity-75" style={{ fontSize: '1.5rem' }}>{stat.unit}</span>
                </div>
                <div className="mb-2 fw-medium" style={{ opacity: 0.85, fontSize: '1rem' }}>{stat.label}</div>
                <div className="small" style={{ opacity: 0.6, fontSize: '0.75rem' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLT Section */}
      <section ref={cltSectionRef} id="clt" className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="row g-4 g-md-5 align-items-center">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
                Technology
                <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              </div>
              <h2 className="h3 mb-4 mb-md-5">なぜCLTセルユニットなのか？</h2>
              <p className="lead mb-4 mb-md-5" style={{ color: '#3d3d3d', lineHeight: '1.8' }}>
                CLT（Cross Laminated Timber）は、木材を直交に積層した次世代の建築素材。
                100%木材の箱型ユニットでありながら、コンクリート並みの強度を持ち、
                従来の建築の常識を覆す革新的な構造です。
              </p>
              <div className="row g-3 g-md-4">
                {[
                  { icon: '💪', title: '圧倒的な強度', desc: '曲げ強さは鉄の約15倍、コンクリートの約400倍' },
                  { icon: '🏠', title: '高断熱・高耐震', desc: '夏は涼しく冬は暖かい、地震にも強い' },
                  { icon: '⚡', title: '工期短縮', desc: '従来の木造・鉄骨の約1/3に短縮' },
                  { icon: '🌿', title: '環境貢献', desc: 'CO₂固定で地球環境に貢献' },
                  { icon: '🚚', title: '移動可能', desc: 'ユニット解体で別場所へ移動可能' },
                  { icon: '🔄', title: '転用可能', desc: '住宅への転用で出口戦略が広がる' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-bg-cream rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">{feature.title}</h4>
                      <p className="text-xs text-text-light">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 position-relative">
              <div
                className="w-100 bg-cover rounded"
                style={{
                  height: '400px',
                  minHeight: '300px',
                  backgroundImage: `linear-gradient(135deg, rgba(26, 42, 74, 0.1), rgba(201, 169, 98, 0.1)), url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80')`,
                }}
              ></div>
              <div className="position-absolute bottom-0 start-50 translate-middle-x translate-middle-y bg-secondary text-dark p-4 rounded text-center shadow-strong" style={{ color: '#1a1a1a', transform: 'translate(-50%, 50%)' }}>
                <span className="d-block fw-bold" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.875rem' }}>1/5</span>
                <span className="small fw-medium" style={{ fontSize: '0.75rem' }}>重量は鉄筋の約1/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section id="area" className="py-32 bg-bg-warm">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div className="bg-white rounded-2xl p-12 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <h3 className="text-xl mb-8 flex items-center gap-3">
                <span>📍</span> 運用エリア
              </h3>
              <div className="space-y-6">
                {[
                  { icon: '🏖️', name: '糸島市', desc: '人気の海辺リゾート。福岡市街地からアクセス良好' },
                  { icon: '🏯', name: '唐津市', desc: '唐津城、虹の松原など歴史・自然の観光名所' },
                  { icon: '🦑', name: '呼子', desc: '新鮮なイカの名所。朝市も人気のスポット' },
                ].map((location, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-bg-cream rounded-xl transition-all duration-300 hover:translate-x-2.5 hover:shadow-soft">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      {location.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">{location.name}</div>
                      <div className="text-xs text-text-light">{location.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-6">
                <div className="w-8 h-px bg-primary-light"></div>
                Location
                <div className="w-8 h-px bg-primary-light"></div>
              </div>
              <h2 className="text-3xl mb-6">
                福岡・佐賀の<br />
                観光地で展開
              </h2>
              <p className="text-text-body mb-6 leading-relaxed">
                九州の玄関口・福岡と、自然豊かな佐賀県。
                インバウンドと国内観光客の両方を取り込む好立地で展開しています。
              </p>
              <p className="text-text-body mb-8 leading-relaxed">
                観光需要の高いエリアを厳選し、安定した稼働率を実現。
                地域創生にも貢献する、新しい形の不動産投資です。
              </p>
              <div className="flex gap-8 mt-8">
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold text-primary">2,000万+</div>
                  <div className="text-xs text-text-light">年間観光客数（福岡県）</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section ref={companySectionRef} id="company" className="py-32 bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-6">
              <div className="w-8 h-px bg-primary-light"></div>
              Company
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">運営会社</h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              20年の実績と5,000社以上の取引先を持つ総合不動産会社
            </p>
          </div>

          <div className="grid grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div className="text-center">
              <div className="font-serif text-6xl font-bold text-primary tracking-widest mb-4">PLEAST</div>
              <p className="text-base text-text-light tracking-wider">株式会社PLEAST（プレスト）</p>
            </div>

            <div className="bg-bg-cream rounded-2xl p-12 relative overflow-hidden shadow-soft">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <h3 className="text-2xl mb-8 pb-4 border-b border-primary/10">会社概要</h3>
              <table className="w-full">
                <tbody>
                  {[
                    { label: '会社名', value: '株式会社PLEAST' },
                    { label: '設立', value: '2005年7月' },
                    { label: '本社', value: '福岡県博多区祇園町2-35' },
                    { label: '事業内容', value: '総合不動産事業' },
                    { label: '取引先', value: '5,000社以上' },
                    { label: '代表電話', value: <a href="tel:092-283-7555">092-283-7555</a> },
                    { label: 'フリーダイヤル', value: <a href="tel:0120-929-727">0120-929-727</a> },
                    { label: 'URL', value: <a href="https://www.pleast.co.jp" target="_blank" rel="noopener noreferrer">https://www.pleast.co.jp</a> },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-primary/5 last:border-0">
                      <th className="w-[140px] py-4 text-left align-top font-semibold text-primary text-sm">{row.label}</th>
                      <td className="py-4 text-left align-top text-text-body text-sm">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={contactSectionRef} id="contact" className="py-32 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div
          className="absolute top-[-25%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,169,98,0.15)_0%,transparent_70%)] rounded-full"
        ></div>
        <div className="max-w-[1200px] mx-auto px-12 relative z-10">
          <div className="text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] text-white mb-4">
              あなたに最適な<br />
              シミュレーションをご案内します
            </h2>
            <p className="text-white/70 text-lg mb-12">
              新築戸建旅館運用 ／ トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
            </p>
            <div className="flex justify-center gap-6 flex-wrap mb-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 py-4 px-10 text-base font-semibold no-underline rounded transition-all duration-300 bg-[#06c755] text-white hover:bg-[#05b04a] hover:-translate-y-1"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINE公式アカウント
              </a>
              <a
                href="tel:0120-929-727"
                className="inline-flex items-center gap-3 py-4 px-10 text-base font-semibold no-underline rounded transition-all duration-300 bg-secondary text-text-dark hover:bg-secondary-light hover:-translate-y-1"
              >
                <span>📞</span>
                0120-929-727
              </a>
            </div>
            <p className="text-white/50 text-sm">※ 相談は無料です。お気軽にお問い合わせください。</p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scrollPulse {
          0%, 100% {
            opacity: 1;
            transform: scaleY(1);
          }
          50% {
            opacity: 0.5;
            transform: scaleY(0.8);
          }
        }
      `}</style>
    </>
  )
}

export default HomePage

