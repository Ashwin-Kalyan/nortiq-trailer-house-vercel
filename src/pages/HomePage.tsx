import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const problemSectionRef = useRef<HTMLDivElement>(null)

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
    const elements = document.querySelectorAll('.problem-card, .solution-card, .stat-item, .clt-feature, .area-location, .company-info-card')
    elements.forEach((el) => {
      el.setAttribute('data-animate', 'true')
      ;(el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(30px)'
      ;(el as HTMLElement).style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      observer.observe(el)
    })

    // Staggered animation delays - matching HTML exactly
    document.querySelectorAll('.problem-card').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
    })

    document.querySelectorAll('.stat-item').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${i * 0.15}s`
    })

    document.querySelectorAll('.clt-feature').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
    })

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      {/* Hero Section - matching HTML exactly */}
      <section className="hero" style={{
        height: '100vh',
        minHeight: '800px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div className="hero-bg" style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, rgba(26, 42, 74, 0.92) 0%, rgba(45, 74, 124, 0.85) 50%, rgba(15, 26, 46, 0.95) 100%), url('https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}></div>
        <div className="hero-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          pointerEvents: 'none'
        }}></div>
        <div className="hero-content container px-3 px-md-4 px-lg-5" style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div className="hero-tagline" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            color: '#c9a962',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            opacity: 0,
            animation: 'fadeInUp 0.8s 0.3s forwards'
          }}>
            <div style={{ width: '40px', height: '1px', background: '#c9a962' }}></div>
            New Investment Style
          </div>
          <h1 className="hero-title" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '1.5rem',
            opacity: 0,
            animation: 'fadeInUp 0.8s 0.5s forwards',
            fontFamily: "'Noto Serif JP', serif"
          }}>
            資産を守りながら、<br />
            年<span style={{ color: '#c9a962', display: 'inline-block' }}>10%</span>の収益を。
          </h1>
          <p className="hero-subtitle" style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '600px',
            marginBottom: '3rem',
            fontWeight: 300,
            opacity: 0,
            animation: 'fadeInUp 0.8s 0.7s forwards'
          }}>
            CLTセルユニット × 旅館運用 × 完全手離れ。<br />
            新築戸建旅館とトランスフォーム型トレーラーハウスで、<br />
            新時代の不動産投資を実現します。
          </p>
          <div className="hero-features" style={{
            display: 'flex',
            gap: '3rem',
            marginBottom: '3rem',
            opacity: 0,
            animation: 'fadeInUp 0.8s 0.9s forwards',
            flexWrap: 'wrap'
          }}>
            <div className="hero-feature" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.95rem'
            }}>
              <span className="hero-feature-icon" style={{
                width: '24px',
                height: '24px',
                border: '1px solid #c9a962',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c9a962',
                fontSize: '0.7rem'
              }}>✓</span>
              <span>利回り10%保証</span>
            </div>
            <div className="hero-feature" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.95rem'
            }}>
              <span className="hero-feature-icon" style={{
                width: '24px',
                height: '24px',
                border: '1px solid #c9a962',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c9a962',
                fontSize: '0.7rem'
              }}>✓</span>
              <span>相続税80%圧縮可能</span>
            </div>
            <div className="hero-feature" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.95rem'
            }}>
              <span className="hero-feature-icon" style={{
                width: '24px',
                height: '24px',
                border: '1px solid #c9a962',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c9a962',
                fontSize: '0.7rem'
              }}>✓</span>
              <span>完全手離れ運用</span>
            </div>
          </div>
          <div className="hero-cta-group" style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            opacity: 0,
            animation: 'fadeInUp 0.8s 1.1s forwards'
          }}>
            <a href="#contact" className="btn btn-primary" style={{
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
              無料相談はこちら
              <span>→</span>
            </a>
            <a href="#solution" className="btn btn-outline" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.1rem 2.5rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.borderColor = '#ffffff'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
            }}>
              詳しく見る
            </a>
          </div>
        </div>
        <div className="hero-scroll" style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          opacity: 0,
          animation: 'fadeInUp 0.8s 1.3s forwards'
        }}>
          <span>Scroll</span>
          <div className="hero-scroll-line" style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
            animation: 'scrollPulse 2s infinite'
          }}></div>
        </div>
      </section>

      {/* Problem Section - matching HTML exactly */}
      <section ref={problemSectionRef} id="problem" className="problem-section" style={{
        padding: '8rem 0',
        background: '#ffffff',
        position: 'relative'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '5rem'
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
              Issue
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
            </div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>
              「資産が減る時代」—<br />あなたの資産は大丈夫ですか？
            </h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              日本人の資産を確実に目減りさせる"五重苦"が押し寄せています
            </p>
          </div>

          <div className="problem-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.5rem'
          }}>
            {[
              { icon: '📈', title: '物価上昇', desc: '30年で主な食料品・光熱費は1.5倍に上昇' },
              { icon: '💰', title: '給与停滞', desc: '日本の平均賃金は30年ほぼ横ばい' },
              { icon: '📊', title: '税負担増加', desc: '国民負担率は20年で10%以上増加' },
              { icon: '🤖', title: '雇用不安', desc: 'AIがホワイトカラーの仕事も代替する時代へ' },
              { icon: '🏛️', title: '相続税', desc: '資産は三代で消える — 10億円が1.8億円に' },
            ].map((item, i) => (
              <div key={i} className="problem-card" style={{
                background: '#f8f9fc',
                padding: '2.5rem 1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
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
                  background: 'linear-gradient(90deg, #b8432f, #c9a962)',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.4s'
                }} className="problem-card-top-line"></div>
                <div className="problem-icon" style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 1.5rem',
                  background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>{item.icon}</div>
                <h3 className="problem-title" style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  color: '#1a1a1a'
                }}>{item.title}</h3>
                <p className="problem-desc" style={{
                  fontSize: '0.85rem',
                  color: '#6b6b6b',
                  lineHeight: 1.6
                }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="problem-highlight" style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '3rem',
            background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
            borderRadius: '12px',
            color: '#ffffff'
          }}>
            <p style={{
              fontSize: '1.3rem',
              fontFamily: "'Noto Serif JP', serif",
              lineHeight: 1.8,
              margin: 0
            }}>
              現金で持っていても、インフレには勝てません。<br />今こそ、資産の形を変える時です。
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - matching HTML exactly */}
      <section id="solution" className="solution-section" style={{
        padding: '8rem 0',
        background: '#f0f2f7',
        position: 'relative'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '5rem'
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
            }}>
              PLEASTの解決策 —<br />「動く実物資産」で資産を守る
            </h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              2つの投資商品で、相続対策と高利回りを両立
            </p>
          </div>

          <div className="solution-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3rem'
          }}>
            <div className="solution-card" style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 30px rgba(26, 42, 74, 0.08)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(26, 42, 74, 0.15)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
            }}>
              <div className="solution-image" style={{
                height: '280px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')`
              }}>
                <span className="solution-badge" style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  background: '#c9a962',
                  color: '#1a1a1a',
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  borderRadius: '4px'
                }}>利回り10%保証</span>
              </div>
              <div className="solution-content" style={{ padding: '2.5rem' }}>
                <h3 className="solution-title" style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  fontFamily: "'Noto Serif JP', serif"
                }}>新築戸建旅館運用</h3>
                <p className="solution-desc" style={{
                  color: '#6b6b6b',
                  marginBottom: '2rem',
                  fontSize: '0.95rem'
                }}>
                  一棟マンションや区分所有ではなく、戸建を建築して旅館運用を行い収益を得る投資です。
                </p>
                <ul className="solution-features" style={{
                  listStyle: 'none',
                  marginBottom: '2rem',
                  padding: 0
                }}>
                  {['物件価格2,500万円〜で年間250万円の収益', '新築のため修繕不安が少ない', '運用はPLEASTが旅館業として代行', '実需転用可能で出口戦略も安心'].map((feature, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      fontSize: '0.9rem'
                    }}>
                      <span style={{ color: '#2d4a7c', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/shintiku" className="solution-link" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1a2a4a',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '1rem'
                  e.currentTarget.style.color = '#2d4a7c'
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '0.5rem'
                  e.currentTarget.style.color = '#1a2a4a'
                }}>
                  詳しく見る <span>→</span>
                </Link>
              </div>
            </div>

            <div className="solution-card" style={{
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 30px rgba(26, 42, 74, 0.08)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(26, 42, 74, 0.15)'
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
            }}>
              <div className="solution-image" style={{
                height: '280px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80')`
              }}>
                <span className="solution-badge" style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  background: '#c9a962',
                  color: '#1a1a1a',
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  borderRadius: '4px'
                }}>4年償却で節税</span>
              </div>
              <div className="solution-content" style={{ padding: '2.5rem' }}>
                <h3 className="solution-title" style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  fontFamily: "'Noto Serif JP', serif"
                }}>トランスフォーム型<br />トレーラーハウス運用</h3>
                <p className="solution-desc" style={{
                  color: '#6b6b6b',
                  marginBottom: '2rem',
                  fontSize: '0.95rem'
                }}>
                  "移動できる実物資産"でありながら、4年償却による相続評価の大幅圧縮と年10%の安定収益を両立。
                </p>
                <ul className="solution-features" style={{
                  listStyle: 'none',
                  marginBottom: '2rem',
                  padding: 0
                }}>
                  {['1台2,500万円〜で年間200万円の収益', '4年で簿価ゼロ、相続評価は大幅圧縮', '移動可能で場所選定の自由度が高い', 'CLT構造でSDGs・地方創生にも貢献'].map((feature, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      fontSize: '0.9rem'
                    }}>
                      <span style={{ color: '#2d4a7c', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/trailer-house" className="solution-link" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1a2a4a',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '1rem'
                  e.currentTarget.style.color = '#2d4a7c'
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '0.5rem'
                  e.currentTarget.style.color = '#1a2a4a'
                }}>
                  詳しく見る <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - matching HTML exactly */}
      <section className="stats-section" style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #1a2a4a 0%, #0f1a2e 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3rem'
          }}>
            {[
              { number: '10', unit: '%', label: '表面利回り保証', desc: '一般不動産投資の4-8%を大きく上回る' },
              { number: '80', unit: '%', label: '相続税圧縮可能', desc: '1億円 → 評価額2,000〜2,500万円に' },
              { number: '5,000', unit: '+', label: '国内取引先', desc: '20年の実績と信頼' },
            ].map((stat, i) => (
              <div key={i} className="stat-item" style={{
                textAlign: 'center',
                color: '#ffffff'
              }}>
                <div className="stat-number" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #c9a962 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {stat.number}
                  <span className="stat-unit" style={{
                    fontSize: '1.5rem',
                    opacity: 0.9
                  }}>{stat.unit}</span>
                </div>
                <div className="stat-label" style={{
                  fontSize: '1rem',
                  opacity: 0.85,
                  fontWeight: 500,
                  marginBottom: '0.5rem'
                }}>{stat.label}</div>
                <div className="stat-desc" style={{
                  fontSize: '0.8rem',
                  opacity: 0.6
                }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLT Section - matching HTML exactly */}
      <section id="clt" className="clt-section" style={{
        padding: '8rem 0',
        background: '#ffffff'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="clt-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center'
          }}>
            <div className="clt-content">
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
                Technology
                <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
              </div>
              <h2 style={{
                fontSize: '2rem',
                marginBottom: '1.5rem',
                fontFamily: "'Noto Serif JP', serif"
              }}>なぜCLTセルユニットなのか？</h2>
              <p className="clt-intro" style={{
                fontSize: '1.1rem',
                color: '#3d3d3d',
                marginBottom: '2rem',
                lineHeight: 1.9
              }}>
                CLT（Cross Laminated Timber）は、木材を直交に積層した次世代の建築素材。
                100%木材の箱型ユニットでありながら、コンクリート並みの強度を持ち、
                従来の建築の常識を覆す革新的な構造です。
              </p>
              <div className="clt-features" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem'
              }}>
                {[
                  { icon: '💪', title: '圧倒的な強度', desc: '曲げ強さは鉄の約15倍、コンクリートの約400倍' },
                  { icon: '🏠', title: '高断熱・高耐震', desc: '夏は涼しく冬は暖かい、地震にも強い' },
                  { icon: '⚡', title: '工期短縮', desc: '従来の木造・鉄骨の約1/3に短縮' },
                  { icon: '🌿', title: '環境貢献', desc: 'CO₂固定で地球環境に貢献' },
                  { icon: '🚚', title: '移動可能', desc: 'ユニット解体で別場所へ移動可能' },
                  { icon: '🔄', title: '転用可能', desc: '住宅への転用で出口戦略が広がる' },
                ].map((feature, i) => (
                  <div key={i} className="clt-feature" style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    <div className="clt-feature-icon" style={{
                      width: '40px',
                      height: '40px',
                      background: '#f8f9fc',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '1.2rem'
                    }}>{feature.icon}</div>
                    <div className="clt-feature-text">
                      <h4 style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        marginBottom: '0.25rem'
                      }}>{feature.title}</h4>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#6b6b6b'
                      }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="clt-visual" style={{ position: 'relative' }}>
              <div className="clt-image" style={{
                width: '100%',
                height: '500px',
                background: `linear-gradient(135deg, rgba(26, 42, 74, 0.1), rgba(201, 169, 98, 0.1)), url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px'
              }}></div>
              <div className="clt-badge" style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '2rem',
                background: '#c9a962',
                color: '#1a1a1a',
                padding: '1.5rem 2rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(26, 42, 74, 0.15)'
              }}>
                <span className="clt-badge-number" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  display: 'block'
                }}>1/5</span>
                <span className="clt-badge-text" style={{
                  fontSize: '0.8rem',
                  fontWeight: 500
                }}>重量は鉄筋の約1/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Section - matching HTML exactly */}
      <section id="area" className="area-section" style={{
        padding: '8rem 0',
        background: '#f0f2f7'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="area-content" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div className="area-map" style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: '0 4px 30px rgba(26, 42, 74, 0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #1a2a4a, #c9a962)'
              }}></div>
              <h3 className="area-map-title" style={{
                fontSize: '1.3rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: "'Noto Serif JP', serif"
              }}>
                📍 運用エリア
              </h3>
              <div className="area-locations" style={{
                display: 'grid',
                gap: '1.5rem'
              }}>
                {[
                  { icon: '🏖️', name: '糸島市', desc: '人気の海辺リゾート。福岡市街地からアクセス良好' },
                  { icon: '🏯', name: '唐津市', desc: '唐津城、虹の松原など歴史・自然の観光名所' },
                  { icon: '🦑', name: '呼子', desc: '新鮮なイカの名所。朝市も人気のスポット' },
                ].map((location, i) => (
                  <div key={i} className="area-location" style={{
                    display: 'flex',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: '#f8f9fc',
                    borderRadius: '12px',
                    transition: 'all 0.3s'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)'
                    e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}>
                    <div className="area-location-icon" style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>{location.icon}</div>
                    <div>
                      <div className="area-location-name" style={{
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        marginBottom: '0.25rem'
                      }}>{location.name}</div>
                      <div className="area-location-desc" style={{
                        fontSize: '0.85rem',
                        color: '#6b6b6b'
                      }}>{location.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="area-info">
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
                Location
                <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
              </div>
              <h2 style={{
                fontSize: '2rem',
                marginBottom: '1.5rem',
                fontFamily: "'Noto Serif JP', serif"
              }}>
                福岡・佐賀の<br />
                観光地で展開
              </h2>
              <p style={{
                color: '#3d3d3d',
                marginBottom: '1.5rem',
                lineHeight: 1.9
              }}>
                九州の玄関口・福岡と、自然豊かな佐賀県。
                インバウンドと国内観光客の両方を取り込む好立地で展開しています。
              </p>
              <p style={{
                color: '#3d3d3d',
                marginBottom: '1.5rem',
                lineHeight: 1.9
              }}>
                観光需要の高いエリアを厳選し、安定した稼働率を実現。
                地域創生にも貢献する、新しい形の不動産投資です。
              </p>
              <div className="area-stats" style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                <div className="area-stat" style={{ textAlign: 'center' }}>
                  <div className="area-stat-number" style={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: '#1a2a4a'
                  }}>2,000万+</div>
                  <div className="area-stat-label" style={{
                    fontSize: '0.8rem',
                    color: '#6b6b6b'
                  }}>年間観光客数（福岡県）</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section - matching HTML exactly */}
      <section id="company" className="company-section" style={{
        padding: '8rem 0',
        background: '#ffffff'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="section-header" style={{
            textAlign: 'center',
            marginBottom: '5rem'
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
            }}>
              20年の実績と5,000社以上の取引先を持つ総合不動産会社
            </p>
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
              overflow: 'hidden'
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
      <section id="contact" className="cta-section" style={{
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
              新築戸建旅館運用 ／ トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
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

export default HomePage
