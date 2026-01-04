import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ShintikuPage = () => {
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
    const elements = document.querySelectorAll('.inquiry-box, .gallery-item, .company-info-card')
    elements.forEach((el) => {
      el.setAttribute('data-animate', 'true')
      ;(el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(30px)'
      ;(el as HTMLElement).style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      observer.observe(el)
    })

    // Staggered animation delays - matching HTML exactly
    document.querySelectorAll('.gallery-item').forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${i * 0.08}s`
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
                <span>🏠</span>
                <span>NEW BUILT INN</span>
              </div>
              <h1 className="page-hero-title" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#ffffff',
                lineHeight: 1.3,
                marginBottom: '1.5rem',
                fontFamily: "'Noto Serif JP', serif"
              }}>
                新築戸建旅館運用
              </h1>
              <p className="page-hero-desc" style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '2rem',
                lineHeight: 1.9
              }}>
                一棟マンションや区分所有ではなく、<br />
                戸建を建築して旅館運用を行い収益を得る投資です。<br />
                新築ならではの安心感と、年<span style={{ color: '#c9a962' }}>10%</span>の高利回りを両立。
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
                  <span>年間250万円収益</span>
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
                  }}>🔧</span>
                  <span>修繕不安が少ない</span>
                </div>
              </div>
            </div>
            <div className="page-hero-image" style={{ position: 'relative' }}>
              <div className="page-hero-image-main" style={{
                width: '100%',
                height: '400px',
                background: `linear-gradient(135deg, rgba(26, 42, 74, 0.1), rgba(201, 169, 98, 0.1)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px'
              }}></div>
              <div className="page-hero-image-badge" style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: '#c9a962',
                color: '#1a1a1a',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(26, 42, 74, 0.15)'
              }}>
                <span className="page-hero-image-badge-number" style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  display: 'block',
                  lineHeight: 1.2
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

      {/* Inquiry Prompt Section - matching HTML exactly */}
      <section className="inquiry-section" style={{
        background: '#ffffff',
        padding: '8rem 0'
      }}>
        <div className="container" style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 3rem'
        }}>
          <div className="inquiry-box" style={{
            textAlign: 'center'
          }}>
            <div className="inquiry-icon" style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 2rem',
              background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              boxShadow: '0 8px 40px rgba(26, 42, 74, 0.12)'
            }}>📋</div>
            <h2 className="inquiry-title" style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
              fontFamily: "'Noto Serif JP', serif"
            }}>
              新築戸建旅館運用について<br />
              詳しく知りたい方へ
            </h2>
            <p className="inquiry-desc" style={{
              fontSize: '1.1rem',
              color: '#3d3d3d',
              marginBottom: '3rem',
              lineHeight: 1.9
            }}>
              新築戸建旅館運用は、お客様一人ひとりのご状況に合わせた<br />
              オーダーメイドのご提案をさせていただいております。
            </p>

            <div className="inquiry-highlight" style={{
              background: 'linear-gradient(135deg, rgba(26, 42, 74, 0.05), rgba(45, 74, 124, 0.08))',
              border: '2px solid #1a2a4a',
              borderRadius: '16px',
              padding: '3rem',
              marginBottom: '3rem'
            }}>
              <p className="inquiry-highlight-text" style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#1a2a4a',
                lineHeight: 1.8,
                margin: 0
              }}>
                新築戸建旅館運用のシミュレーションが知りたい方、<br />
                ご興味がある方は、お電話またはお問い合わせフォームより<br />
                お気軽にご連絡ください。
              </p>
            </div>

            <div className="inquiry-buttons" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <a href="tel:0120-929-727" className="btn btn-tel" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 3rem',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: '#c9a962',
                color: '#1a1a1a',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 40px rgba(26, 42, 74, 0.12)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d4b87a'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(26, 42, 74, 0.15)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#c9a962'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
              }}>
                <span>📞</span>
                0120-929-727
              </a>
              <a href="#" className="btn btn-line" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 3rem',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: '#06c755',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 40px rgba(26, 42, 74, 0.12)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#05b04a'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(6, 199, 85, 0.3)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#06c755'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINE公式アカウント
              </a>
              <Link to="/operation#contact" className="btn btn-primary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 3rem',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 40px rgba(26, 42, 74, 0.12)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(26, 42, 74, 0.15)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
              }}>
                <span>✉️</span>
                お問い合わせフォーム
              </Link>
            </div>

            <p className="inquiry-note" style={{
              marginTop: '2rem',
              fontSize: '0.9rem',
              color: '#6b6b6b'
            }}>※ 相談は無料です。専門スタッフが丁寧にご説明いたします。</p>
          </div>
        </div>
      </section>

      {/* Gallery Section - matching HTML exactly */}
      <section className="gallery-section" style={{
        background: '#f0f2f7',
        padding: '6rem 0'
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
              Gallery
              <div style={{ width: '30px', height: '1px', background: '#2d4a7c' }}></div>
            </div>
            <h2 className="section-title" style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              lineHeight: 1.4,
              marginBottom: '1rem',
              fontFamily: "'Noto Serif JP', serif"
            }}>実際の物件をご覧ください</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.05rem',
              color: '#6b6b6b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>高品質な設備と洗練されたデザイン</p>
          </div>

          <div className="gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            {[
              { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', label: '外観', large: true },
              { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', label: 'リビング', large: false },
              { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', label: 'キッチン', large: false },
              { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', label: '浴室', large: false },
              { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', label: 'ベッドルーム', large: false },
              { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', label: 'デッキ', large: false },
            ].map((item, i) => (
              <div key={i} className={`gallery-item ${item.large ? 'large' : ''}`} style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                cursor: 'pointer',
                gridColumn: item.large ? 'span 2' : 'span 1',
                gridRow: item.large ? 'span 2' : 'span 1'
              }} onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement
                const label = e.currentTarget.querySelector('.gallery-item-label') as HTMLElement
                const img = e.currentTarget.querySelector('img') as HTMLElement
                if (overlay) overlay.style.opacity = '1'
                if (label) {
                  label.style.opacity = '1'
                  label.style.transform = 'translateY(0)'
                }
                if (img) img.style.transform = 'scale(1.1)'
              }} onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement
                const label = e.currentTarget.querySelector('.gallery-item-label') as HTMLElement
                const img = e.currentTarget.querySelector('img') as HTMLElement
                if (overlay) overlay.style.opacity = '0'
                if (label) {
                  label.style.opacity = '0'
                  label.style.transform = 'translateY(10px)'
                }
                if (img) img.style.transform = 'scale(1)'
              }}>
                <div className="gallery-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26, 42, 74, 0.7) 0%, transparent 50%)',
                  opacity: 0,
                  transition: 'opacity 0.4s',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}></div>
                <img src={item.src} alt={item.label} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s'
                }} />
                <span className="gallery-item-label" style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  zIndex: 2,
                  opacity: 0,
                  transform: 'translateY(10px)',
                  transition: 'all 0.4s',
                  pointerEvents: 'none'
                }}>{item.label}</span>
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
        padding: '6rem 0',
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
              まずはお気軽に<br />
              ご相談ください
            </h2>
            <p className="cta-subtitle" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.1rem',
              marginBottom: '3rem'
            }}>
              新築戸建旅館運用に関するお問い合わせはこちら
            </p>
            <div className="cta-buttons" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <a href="#" className="btn btn-line" style={{
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
              <a href="tel:0120-929-727" className="btn btn-tel" style={{
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

export default ShintikuPage
