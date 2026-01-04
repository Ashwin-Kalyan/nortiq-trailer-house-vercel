import { useEffect } from 'react'

const TrailerHousePage = () => {
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

  useEffect(() => {
    // Intersection Observer for animations - matching HTML exactly
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true')
          ;(entry.target as HTMLElement).style.opacity = '1'
          ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe elements for animation - matching HTML selectors
    const elements = document.querySelectorAll('.target-card, .problem-content, .inheritance-box, .simulation-card, .sdgs-card, .company-info-card')
    elements.forEach((el) => {
      el.setAttribute('data-animate', 'true')
      ;(el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(30px)'
      ;(el as HTMLElement).style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      observer.observe(el)
    })

    // Staggered animation delays - matching HTML exactly
    document.querySelectorAll('.target-card').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
    })

    document.querySelectorAll('.sdgs-card').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
    })

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      {/* Page Hero - matching HTML exactly */}
      <section className="page-hero" style={{
        padding: '10rem 0 5rem',
        background: 'linear-gradient(135deg, #1a2a4a 0%, #2d4a7c 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(201, 169, 98, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="page-hero-content" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center'
          }}>
            <div className="page-hero-text" style={{ textAlign: 'left' }}>
              <div className="page-hero-badge" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                marginBottom: '2rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#ffffff'
              }}>
                <span>🚚</span>
                <span>TRANSFORM TRAILER HOUSE</span>
              </div>
              <h1 className="page-hero-title" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#ffffff',
                lineHeight: 1.3,
                marginBottom: '1.5rem',
                fontFamily: "'Noto Serif JP', serif"
              }}>
                トランスフォーム型<br />
                トレーラーハウス運用
              </h1>
              <p className="page-hero-desc" style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '2rem',
                lineHeight: 1.9
              }}>
                "移動できる実物資産"でありながら、<br />
                4年償却による相続評価の大幅圧縮と<br />
                年<span style={{ color: '#c9a962' }}>10%</span>の安定収益を両立。
              </p>
              <div className="page-hero-features" style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}>
                <div className="page-hero-feature" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem'
                }}>
                  <span className="page-hero-feature-icon" style={{
                    fontSize: '1.25rem'
                  }}>💰</span>
                  <span>2,500万円〜</span>
                </div>
                <div className="page-hero-feature" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem'
                }}>
                  <span className="page-hero-feature-icon" style={{
                    fontSize: '1.25rem'
                  }}>📈</span>
                  <span>年間200万円収益</span>
                </div>
                <div className="page-hero-feature" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem'
                }}>
                  <span className="page-hero-feature-icon" style={{
                    fontSize: '1.25rem'
                  }}>📉</span>
                  <span>4年で簿価ゼロ</span>
                </div>
              </div>
            </div>
            <div className="page-hero-image" style={{ position: 'relative' }}>
              <div className="page-hero-image-main" style={{
                width: '100%',
                height: '400px',
                background: `linear-gradient(135deg, rgba(26, 42, 74, 0.1), rgba(201, 169, 98, 0.1)), url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(26, 42, 74, 0.15)'
              }}></div>
              <div className="page-hero-image-badge" style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '2rem',
                background: '#c9a962',
                color: '#1a1a1a',
                padding: '1.25rem 2rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(26, 42, 74, 0.15)'
              }}>
                <span className="page-hero-image-badge-number" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  display: 'block',
                  lineHeight: 1
                }}>10%</span>
                <span className="page-hero-image-badge-text" style={{
                  fontSize: '0.8rem',
                  fontWeight: 500
                }}>利回り保証</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section - matching HTML exactly */}
      <section className="section target-section" style={{
        background: '#ffffff',
        padding: '8rem 0'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div className="section-label" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#2d4a7c',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
              Target
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
            </div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>こんな方におすすめ</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>現金を持っていても増えない、でもリスクは取りたくない方へ</p>
          </div>

          <div className="target-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.5rem'
          }}>
            {[
              { icon: '💵', title: '現金で多額の資産を\n保有する方' },
              { icon: '👨‍👩‍👧‍👦', title: '相続を見据えた\n資産対策をしたい方' },
              { icon: '📊', title: '節税しながら\n収入も欲しい方' },
              { icon: '😤', title: '株や不動産で\n損失経験がある方' },
              { icon: '🌍', title: '社会貢献にも\n関心がある方' },
            ].map((item, i) => (
              <div key={i} className="target-card" style={{
                background: '#f8f9fc',
                padding: '2rem 1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #1a2a4a, #c9a962)',
                  borderRadius: '12px 12px 0 0',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.4s'
                }} className="target-card-top-line"></div>
                <div className="target-icon" style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 1.25rem',
                  background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>{item.icon}</div>
                <h3 className="target-title" style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line'
                }}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - matching HTML exactly with SVG charts */}
      <section className="section problem-section" style={{
        background: '#f0f2f7',
        padding: '8rem 0'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div className="section-label" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#2d4a7c',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
              Issues
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
            </div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>日本人の資産を蝕む "五重苦"</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>あなたの資産を確実に目減りさせる5つの構造的問題</p>
          </div>

          {[
            {
              title: '📈 物価上昇（インフレ）',
              desc: '30年間で主な食料品・光熱費は約1.5倍に上昇。銀行預金の金利は0.001%程度。現金で持っていても、実質的な資産価値は毎年目減りしています。',
              stat: { number: '1.5', label: '倍（30年間の物価上昇）' },
              chart: (
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  <defs>
                    <linearGradient id="chartGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#1a2a4a', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#1a2a4a', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path d="M 40 160 Q 100 155 160 140 T 280 100 T 380 60" stroke="#1a2a4a" strokeWidth="3" fill="none" />
                  <path d="M 40 160 Q 100 155 160 140 T 280 100 T 380 60 V 180 H 40 Z" fill="url(#chartGrad1)" />
                  <text x="40" y="190" fontSize="11" fill="#6b6b6b">1994</text>
                  <text x="200" y="190" fontSize="11" fill="#6b6b6b">2009</text>
                  <text x="360" y="190" fontSize="11" fill="#6b6b6b">2024</text>
                  <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#1a2a4a" textAnchor="middle">消費者物価指数の推移</text>
                </svg>
              )
            },
            {
              title: '💰 給与停滞',
              desc: '日本の平均賃金は過去30年間ほぼ横ばい。先進国で唯一成長していません。物価は上がるのに、収入は増えない — この構造が家計を圧迫します。',
              stat: { number: '30', label: '年間 賃金成長なし' },
              chart: (
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  <rect x="60" y="80" width="50" height="100" fill="#2d4a7c" rx="4" />
                  <rect x="130" y="60" width="50" height="120" fill="#c9a962" rx="4" />
                  <rect x="200" y="50" width="50" height="130" fill="#c9a962" rx="4" />
                  <rect x="270" y="40" width="50" height="140" fill="#c9a962" rx="4" />
                  <text x="85" y="195" fontSize="10" fill="#6b6b6b" textAnchor="middle">日本</text>
                  <text x="155" y="195" fontSize="10" fill="#6b6b6b" textAnchor="middle">米国</text>
                  <text x="225" y="195" fontSize="10" fill="#6b6b6b" textAnchor="middle">英国</text>
                  <text x="295" y="195" fontSize="10" fill="#6b6b6b" textAnchor="middle">韓国</text>
                  <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#1a2a4a" textAnchor="middle">先進国の賃金上昇率比較</text>
                </svg>
              )
            },
            {
              title: '📊 税負担の増加',
              desc: '国民負担率（税金＋社会保険料）は過去20年で10%以上増加。稼いでも手取りは減る一方です。合法的な節税対策がますます重要になっています。',
              stat: { number: '47', label: '%（国民負担率 2023年）' },
              chart: (
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  <defs>
                    <linearGradient id="taxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#b8432f', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#b8432f', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path d="M 40 150 L 120 140 L 200 120 L 280 90 L 360 60" stroke="#b8432f" strokeWidth="3" fill="none" />
                  <path d="M 40 150 L 120 140 L 200 120 L 280 90 L 360 60 V 180 H 40 Z" fill="url(#taxGrad)" />
                  <circle cx="40" cy="150" r="5" fill="#b8432f" />
                  <circle cx="120" cy="140" r="5" fill="#b8432f" />
                  <circle cx="200" cy="120" r="5" fill="#b8432f" />
                  <circle cx="280" cy="90" r="5" fill="#b8432f" />
                  <circle cx="360" cy="60" r="5" fill="#b8432f" />
                  <text x="40" y="190" fontSize="11" fill="#6b6b6b">2003</text>
                  <text x="200" y="190" fontSize="11" fill="#6b6b6b">2013</text>
                  <text x="360" y="190" fontSize="11" fill="#6b6b6b">2023</text>
                  <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#1a2a4a" textAnchor="middle">国民負担率の推移</text>
                </svg>
              )
            },
            {
              title: '🤖 AIによる雇用リスク',
              desc: 'ChatGPTをはじめとするAIの急速な進化により、ホワイトカラーの仕事も安泰ではなくなりました。給与収入だけに頼らない収入源の確保が急務です。',
              stat: { number: '49', label: '%（AIに代替されうる仕事の割合）' },
              chart: (
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  <rect x="60" y="60" width="80" height="30" fill="#1a2a4a" rx="4" />
                  <rect x="60" y="100" width="120" height="30" fill="#2d4a7c" rx="4" />
                  <rect x="60" y="140" width="180" height="30" fill="#c9a962" rx="4" />
                  <text x="150" y="80" fontSize="11" fill="#fff">事務職 30%</text>
                  <text x="190" y="120" fontSize="11" fill="#fff">営業職 45%</text>
                  <text x="250" y="160" fontSize="11" fill="#1a1a1a">専門職 60%</text>
                  <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#1a2a4a" textAnchor="middle">職種別AI代替リスク</text>
                </svg>
              )
            },
            {
              title: '🏛️ 相続税の重圧',
              desc: '「資産は三代で消える」と言われます。相続税率は最大55%。10億円の資産も三代後にはわずか1.8億円に。事前対策なしでは資産は守れません。',
              stat: { number: '55', label: '%（相続税 最高税率）' },
              chart: (
                <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                  <rect x="50" y="50" width="80" height="130" fill="#1a2a4a" rx="4" />
                  <rect x="160" y="90" width="80" height="90" fill="#2d4a7c" rx="4" />
                  <rect x="270" y="130" width="80" height="50" fill="#c9a962" rx="4" />
                  <text x="90" y="40" fontSize="12" fontWeight="bold" fill="#1a2a4a" textAnchor="middle">10億円</text>
                  <text x="200" y="80" fontSize="12" fontWeight="bold" fill="#2d4a7c" textAnchor="middle">4.5億円</text>
                  <text x="310" y="120" fontSize="12" fontWeight="bold" fill="#c9a962" textAnchor="middle">1.8億円</text>
                  <text x="90" y="195" fontSize="11" fill="#6b6b6b" textAnchor="middle">初代</text>
                  <text x="200" y="195" fontSize="11" fill="#6b6b6b" textAnchor="middle">二代目</text>
                  <text x="310" y="195" fontSize="11" fill="#6b6b6b" textAnchor="middle">三代目</text>
                  <text x="200" y="20" fontSize="14" fontWeight="bold" fill="#1a2a4a" textAnchor="middle">相続税による資産減少イメージ</text>
                </svg>
              )
            },
          ].map((problem, i) => (
            <div key={i} className="problem-content" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              marginBottom: '5rem',
              direction: i % 2 === 1 ? 'rtl' : 'ltr'
            }}>
              <div className="problem-text" style={{ direction: 'ltr' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontFamily: "'Noto Serif JP', serif"
                }}>{problem.title}</h3>
                <p style={{
                  color: '#3d3d3d',
                  marginBottom: '1.5rem',
                  lineHeight: 1.9
                }}>{problem.desc}</p>
                <div className="problem-stat" style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  background: '#ffffff',
                  padding: '1rem 1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 30px rgba(26, 42, 74, 0.08)'
                }}>
                  <span className="problem-stat-number" style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#1a2a4a'
                  }}>{problem.stat.number}</span>
                  <span className="problem-stat-label" style={{
                    fontSize: '0.9rem',
                    color: '#6b6b6b'
                  }}>{problem.stat.label}</span>
                </div>
              </div>
              <div className="problem-chart" style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 30px rgba(26, 42, 74, 0.08)',
                direction: 'ltr'
              }}>
                {problem.chart}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inheritance Section - matching HTML exactly */}
      <section className="section inheritance-section" style={{
        background: '#ffffff',
        padding: '8rem 0'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div className="section-label" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#2d4a7c',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
              Solution
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
            </div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>相続税を"ほぼゼロ"に圧縮する方法</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>2,500万円のトレーラーハウスの場合</p>
          </div>

          <div className="inheritance-comparison" style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            <div className="inheritance-box before" style={{
              background: '#f8f9fc',
              borderRadius: '16px',
              padding: '3rem',
              textAlign: 'center',
              border: '2px solid #b8432f'
            }}>
              <span className="inheritance-box-label" style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                display: 'inline-block',
                background: 'rgba(184, 67, 47, 0.1)',
                color: '#b8432f'
              }}>BEFORE</span>
              <div className="inheritance-amount" style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: '#b8432f'
              }}>1億円</div>
              <p className="inheritance-desc" style={{
                fontSize: '0.95rem',
                color: '#6b6b6b',
                marginBottom: '1.5rem'
              }}>現金のまま保有</p>
              <div className="inheritance-detail" style={{
                background: '#ffffff',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#3d3d3d'
              }}>
                相続税評価額＝1億円（そのまま課税対象）
              </div>
            </div>

            <div className="inheritance-arrow" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#c9a962'
            }}>
              <span className="inheritance-arrow-icon" style={{
                fontSize: '2rem'
              }}>→</span>
              <span className="inheritance-arrow-text" style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.05em'
              }}>転換</span>
            </div>

            <div className="inheritance-box after" style={{
              background: 'linear-gradient(135deg, rgba(26, 42, 74, 0.05), rgba(45, 74, 124, 0.05))',
              borderRadius: '16px',
              padding: '3rem',
              textAlign: 'center',
              border: '2px solid #1a2a4a'
            }}>
              <span className="inheritance-box-label" style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                display: 'inline-block',
                background: 'rgba(26, 42, 74, 0.1)',
                color: '#1a2a4a'
              }}>AFTER</span>
              <div className="inheritance-amount" style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: '#1a2a4a'
              }}>2,000万円</div>
              <p className="inheritance-desc" style={{
                fontSize: '0.95rem',
                color: '#6b6b6b',
                marginBottom: '1.5rem'
              }}>トレーラーハウス4台に転換</p>
              <div className="inheritance-detail" style={{
                background: '#ffffff',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#3d3d3d'
              }}>
                4年後の相続評価額＝1台500万円×4台＝2,000万円
              </div>
            </div>
          </div>

          <div className="inheritance-result" style={{
            background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center',
            color: '#ffffff'
          }}>
            <h3 style={{
              color: '#ffffff',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>基礎控除内に収まれば...</h3>
            <span className="inheritance-result-highlight" style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '3.5rem',
              fontWeight: 700,
              color: '#c9a962',
              display: 'block',
              marginBottom: '1rem'
            }}>相続税 0円</span>
            <p style={{
              opacity: 0.9,
              fontSize: '1rem',
              margin: 0,
              lineHeight: 1.8
            }}>
              基礎控除3,600万円（配偶者＋子1人の場合4,200万円）を活用すれば、<br />
              評価額2,000万円の資産は非課税で相続可能です。
            </p>
          </div>
        </div>
      </section>

      {/* Depreciation Section - matching HTML exactly */}
      <section className="section depreciation-section" style={{
        background: '#f0f2f7',
        padding: '8rem 0'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="depreciation-content" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div className="depreciation-chart" style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 4px 30px rgba(26, 42, 74, 0.08)'
            }}>
              <h3 style={{
                textAlign: 'center',
                marginBottom: '2rem',
                fontSize: '1.2rem',
                fontFamily: "'Noto Serif JP', serif"
              }}>4年間の減価償却イメージ</h3>
              <div className="depreciation-bars" style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                height: '250px',
                padding: '0 1rem',
                borderBottom: '2px solid #f8f9fc',
                marginBottom: '1rem'
              }}>
                {[1, 2, 3, 4].map((year) => (
                  <div key={year} className="depreciation-bar" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div className="depreciation-bar-fill" style={{
                      width: '50px',
                      height: '100%',
                      background: 'linear-gradient(to top, #1a2a4a, #2d4a7c)',
                      borderRadius: '8px 8px 0 0',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}></div>
                    <span className="depreciation-bar-value" style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#1a2a4a'
                    }}>625万</span>
                    <span className="depreciation-bar-label" style={{
                      fontSize: '0.8rem',
                      color: '#6b6b6b'
                    }}>{year}年目</span>
                  </div>
                ))}
              </div>
              <p style={{
                textAlign: 'center',
                fontSize: '0.85rem',
                color: '#6b6b6b',
                marginTop: '1rem',
                margin: 0
              }}>
                ※ 2,500万円を4年で均等償却した場合
              </p>
            </div>

            <div className="depreciation-info">
              <div className="section-label" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                color: '#2d4a7c',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                justifyContent: 'flex-start'
              }}>
                <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
                Depreciation
                <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                fontFamily: "'Noto Serif JP', serif"
              }}>4年償却で"実質利回り"はさらに高く</h3>
              <p style={{
                color: '#3d3d3d',
                marginBottom: '1.5rem',
                lineHeight: 1.9
              }}>
                トレーラーハウスは車両扱いのため、法定耐用年数はわずか4年。
                毎年の減価償却費を経費計上することで、
                表面利回り10%を超える"実質利回り"を実現できます。
              </p>

              <div className="depreciation-highlight" style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '2rem',
                borderLeft: '4px solid #c9a962'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  marginBottom: '1rem',
                  color: '#1a2a4a',
                  fontFamily: "'Noto Serif JP', serif"
                }}>2,500万円投資時の年間収支（概算）</h4>
                <div className="depreciation-calc" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {[
                    { label: 'リース収益', value: '+200万円' },
                    { label: '減価償却費（経費）', value: '−625万円' },
                    { label: '課税所得の圧縮効果', value: '約200万円相当' },
                  ].map((row, i) => (
                    <div key={i} className="depreciation-calc-row" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.95rem'
                    }}>
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                  <div className="depreciation-calc-row total" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.95rem',
                    borderTop: '1px solid #f8f9fc',
                    paddingTop: '0.75rem',
                    marginTop: '0.5rem',
                    fontWeight: 700,
                    color: '#1a2a4a'
                  }}>
                    <span>実質利回り</span>
                    <span>15%以上</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulation Section - matching HTML exactly */}
      <section className="section simulation-section" style={{
        background: '#ffffff',
        padding: '8rem 0'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div className="section-label" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#2d4a7c',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
              Simulation
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
            </div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>10年間の収益シミュレーション</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>初期投資から10年後までの収益を試算</p>
          </div>

          <div className="simulation-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                units: '1ユニット',
                price: '2,500',
                items: [
                  { label: '年間リース収益', value: '200万円' },
                  { label: '10年間の累計収益', value: '2,000万円' },
                  { label: '10年後の売却価格', value: '500万円（保証）' },
                ],
                result: '約2,000万円'
              },
              {
                units: '2ユニット',
                price: '4,000',
                items: [
                  { label: '年間リース収益', value: '320万円' },
                  { label: '10年間の累計収益', value: '3,200万円' },
                  { label: '10年後の売却価格', value: '800万円（保証）' },
                ],
                result: '約3,200万円'
              },
            ].map((sim, i) => (
              <div key={i} className="simulation-card" style={{
                background: '#f8f9fc',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 30px rgba(26, 42, 74, 0.08)',
                transition: 'all 0.4s'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(26, 42, 74, 0.15)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
              }}>
                <div className="simulation-card-header" style={{
                  background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
                  color: '#ffffff',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div className="simulation-card-units" style={{
                    fontSize: '0.85rem',
                    opacity: 0.8,
                    marginBottom: '0.5rem'
                  }}>{sim.units}</div>
                  <div className="simulation-card-price" style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: '2.5rem',
                    fontWeight: 700
                  }}>
                    {sim.price}
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: 400
                    }}>万円</span>
                  </div>
                </div>
                <div className="simulation-card-body" style={{
                  padding: '2rem'
                }}>
                  {sim.items.map((item, j) => (
                    <div key={j} className="simulation-row" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '1rem 0',
                      borderBottom: j < sim.items.length - 1 ? '1px solid #ffffff' : 'none'
                    }}>
                      <span className="simulation-row-label" style={{
                        color: '#6b6b6b',
                        fontSize: '0.95rem'
                      }}>{item.label}</span>
                      <span className="simulation-row-value" style={{
                        fontWeight: 600,
                        color: '#1a1a1a'
                      }}>{item.value}</span>
                    </div>
                  ))}
                  <div className="simulation-result" style={{
                    background: '#ffffff',
                    margin: '1rem -2rem -2rem',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span className="simulation-result-label" style={{
                      fontWeight: 600,
                      color: '#1a1a1a'
                    }}>10年後の手取り</span>
                    <span className="simulation-result-value" style={{
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: '#1a2a4a'
                    }}>{sim.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="simulation-note" style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: '#f8f9fc',
            borderRadius: '12px',
            border: '2px dashed #c9a962'
          }}>
            <p style={{
              color: '#6b6b6b',
              fontSize: '0.95rem',
              margin: 0,
              lineHeight: 1.8
            }}>
              ※ 上記は概算シミュレーションです。<strong style={{ color: '#1a1a1a' }}>減価償却による節税効果</strong>を含めると、<br />
              実質的な利回りはさらに高くなります。詳細シミュレーションは個別相談にてご案内いたします。
            </p>
          </div>
        </div>
      </section>

      {/* SDGs Section - matching HTML exactly */}
      <section className="section sdgs-section" style={{
        background: 'linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 0'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div className="section-label" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#c9a962',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <div style={{ width: '30px', height: '1px', background: '#c9a962' }}></div>
              Social Impact
              <div style={{ width: '30px', height: '1px', background: '#c9a962' }}></div>
            </div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif",
              color: '#ffffff'
            }}>社会貢献にもなる投資</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>収益を得ながら、地域と環境に貢献できます</p>
          </div>

          <div className="sdgs-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🏕️',
                title: '災害時対応',
                desc: '移動可能なため、災害時には仮設住宅や避難所として活用可能。地域の防災力向上に貢献します。'
              },
              {
                icon: '🏞️',
                title: '遊休地活用',
                desc: '使われていない土地を観光資源として再活用。空き地問題の解決と地域経済の活性化に寄与します。'
              },
              {
                icon: '🌾',
                title: '地方創生',
                desc: '観光客を地方に誘導し、地域の雇用創出と経済循環を促進。過疎化対策にも貢献します。'
              },
              {
                icon: '🌲',
                title: '環境配慮',
                desc: 'CLT（木材）構造でCO₂を固定。製造時の環境負荷も低く、サステナブルな建築を実現します。'
              },
            ].map((sdg, i) => (
              <div key={i} className="sdgs-card" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                transition: 'all 0.4s'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div className="sdgs-icon" style={{
                  width: '70px',
                  height: '70px',
                  margin: '0 auto 1.5rem',
                  background: 'linear-gradient(135deg, #c9a962, #d4b87a)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
                }}>{sdg.icon}</div>
                <h3 className="sdgs-title" style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: '#ffffff',
                  fontFamily: "'Noto Serif JP', serif"
                }}>{sdg.title}</h3>
                <p className="sdgs-desc" style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.7,
                  margin: 0
                }}>{sdg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section - matching HTML exactly */}
      <section className="section company-section" style={{
        background: '#ffffff',
        padding: '8rem 0'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div className="section-label" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              color: '#2d4a7c',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
              Company
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
            </div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>運営会社</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>20年の実績と5,000社以上の取引先を持つ総合不動産会社</p>
          </div>

          <div className="company-content" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div className="company-logo-area" style={{ textAlign: 'center' }}>
              <div className="company-logo-text" style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: '3.5rem',
                fontWeight: 700,
                color: '#1a2a4a',
                letterSpacing: '0.15em',
                marginBottom: '1rem'
              }}>PLEAST</div>
              <p className="company-tagline" style={{
                fontSize: '1rem',
                color: '#6b6b6b',
                letterSpacing: '0.1em'
              }}>株式会社PLEAST（プレスト）</p>
            </div>

            <div className="company-info-card" style={{
              background: '#f8f9fc',
              borderRadius: '16px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 30px rgba(26, 42, 74, 0.08)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #1a2a4a, #c9a962)'
              }}></div>
              <h3 className="company-info-title" style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(26, 42, 74, 0.1)',
                fontFamily: "'Noto Serif JP', serif"
              }}>会社概要</h3>
              <table className="company-table" style={{ width: '100%' }}>
                <tbody>
                  {[
                    { label: '会社名', value: '株式会社PLEAST' },
                    { label: '設立', value: '2005年7月' },
                    { label: '本社', value: '福岡県博多区祇園町2-35' },
                    { label: '事業内容', value: '総合不動産事業' },
                    { label: '取引先', value: '5,000社以上' },
                    { label: '代表電話', value: <a href="tel:092-283-7555" style={{ color: '#2d4a7c', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = '#2d4a7c'}>092-283-7555</a> },
                    { label: 'フリーダイヤル', value: <a href="tel:0120-929-727" style={{ color: '#2d4a7c', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = '#2d4a7c'}>0120-929-727</a> },
                    { label: 'URL', value: <a href="https://www.pleast.co.jp" target="_blank" rel="noopener noreferrer" style={{ color: '#2d4a7c', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#c9a962'; e.currentTarget.style.textDecoration = 'underline' }} onMouseLeave={(e) => { e.currentTarget.style.color = '#2d4a7c'; e.currentTarget.style.textDecoration = 'none' }}>https://www.pleast.co.jp</a> },
                  ].map((row, i) => (
                    <tr key={i} style={{
                      borderBottom: i < 7 ? '1px solid rgba(26, 42, 74, 0.05)' : 'none'
                    }}>
                      <th style={{
                        width: '140px',
                        fontWeight: 600,
                        color: '#1a2a4a',
                        fontSize: '0.9rem',
                        padding: '1rem 0',
                        textAlign: 'left',
                        verticalAlign: 'top'
                      }}>{row.label}</th>
                      <td style={{
                        color: '#3d3d3d',
                        fontSize: '0.95rem',
                        padding: '1rem 0',
                        textAlign: 'left',
                        verticalAlign: 'top'
                      }}>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matching HTML exactly */}
      <section className="cta-section" id="contact" style={{
        padding: '8rem 0',
        background: 'linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201, 169, 98, 0.15) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="cta-content" style={{ textAlign: 'center' }}>
            <h2 className="cta-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#ffffff',
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>
              あなたに最適な<br />
              シミュレーションをご案内します
            </h2>
            <p className="cta-subtitle" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.1rem',
              marginBottom: '3rem'
            }}>
              トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
            </p>
            <div className="cta-buttons" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <a href="#" className="btn btn-primary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.1rem 2.5rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: '#06c755',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#05b04a'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(6, 199, 85, 0.3)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#06c755'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINE公式アカウント
              </a>
              <a href="tel:0120-929-727" className="btn btn-primary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.1rem 2.5rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: '#c9a962',
                color: '#1a1a1a',
                border: 'none',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d4b87a'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(201, 169, 98, 0.3)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#c9a962'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <span>📞</span>
                0120-929-727
              </a>
            </div>
            <p className="cta-note" style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.85rem'
            }}>※ 相談は無料です。お気軽にお問い合わせください。</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrailerHousePage
