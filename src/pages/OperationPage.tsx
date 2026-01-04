import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const OperationPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#contact' || hash === '#contact-form') {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }

    // Intersection Observer for animations - run after DOM updates
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true')
            // Set inline styles for animation
            ;(entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
          }
        })
      }, observerOptions)

      // Observe elements for animation
      const elements = document.querySelectorAll('.flow-step, .operation-card, .merit-box, .risk-card, .contact-method')
      elements.forEach((el) => {
        el.setAttribute('data-animate', 'true')
        ;(el as HTMLElement).style.opacity = '0'
        ;(el as HTMLElement).style.transform = 'translateY(30px)'
        ;(el as HTMLElement).style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        observer.observe(el)
      })

      // Staggered animation delays
      document.querySelectorAll('.flow-step').forEach((el, i) => {
        ;(el as HTMLElement).style.transitionDelay = `${i * 0.15}s`
      })
      document.querySelectorAll('.operation-card').forEach((el, i) => {
        ;(el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
      })
      document.querySelectorAll('.risk-card').forEach((el, i) => {
        ;(el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
      })
      document.querySelectorAll('.contact-method').forEach((el, i) => {
        ;(el as HTMLElement).style.transitionDelay = `${i * 0.15}s`
      })

      return () => {
        elements.forEach(el => observer.unobserve(el))
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [activeFaq])

  const flowSteps = [
    { num: 1, title: '📞 無料相談・シミュレーション', desc: 'お客様のご状況やご希望をヒアリングし、最適な投資プランと収益シミュレーションをご提案します。' },
    { num: 2, title: '📋 物件選定・ご契約', desc: 'エリアや物件タイプを選定し、契約内容を確認。ご納得いただいた上でご契約となります。' },
    { num: 3, title: '🏗️ 物件建築・設置', desc: 'CLTセルユニットにより、従来の約1/3の工期で完成。早期に収益化が可能です。' },
    { num: 4, title: '📝 旅館業申請・運営開始', desc: 'PLEASTが旅館業の申請から運営まで全て代行。オーナー様の手続きは不要です。' },
    { num: 5, title: '💰 毎月リース収益をお受け取り', desc: '運営が始まれば、毎月安定したリース収益をお受け取りいただけます。' },
  ]

  const operationCards = [
    { icon: '📋', title: '旅館業の申請・取得', desc: '複雑な許認可手続きを全て代行' },
    { icon: '🌐', title: '予約サイト掲載・集客', desc: '主要OTAへの掲載とマーケティング' },
    { icon: '📊', title: 'ダイナミックプライシング', desc: 'AIによる最適価格設定で収益最大化' },
    { icon: '🛎️', title: 'ゲスト対応・清掃', desc: 'チェックイン対応から清掃まで' },
    { icon: '💹', title: '売上管理・収益分配', desc: '透明性の高い収益レポート' },
  ]

  const merits = [
    '利回り10%保証で安定した収益',
    '完全手離れ運用で手間がかからない',
    '相続税・節税効果が大きい',
    '新築で修繕不安が少ない',
    '実需転用・売却の選択肢がある',
    '社会貢献・SDGsにも貢献',
  ]

  const demerits = [
    '市場変動リスク（観光需要の変化）',
    '火災リスク（保険でカバー可能）',
    'ランニングコスト（修繕積立等）',
  ]

  const risks = [
    {
      icon: '📉',
      title: '稼働率リスク',
      desc: '観光需要の変動により、宿泊稼働率が低下する可能性があります。',
      solution: 'ダイナミックプライシング（AI価格最適化）、観光課・地元との連携、需要の高いエリアを厳選して設置。トレーラーハウスは移動可能でエリア変更も可能。',
    },
    {
      icon: '✈️',
      title: 'インバウンド依存リスク',
      desc: '外国人観光客への依存度が高いと、国際情勢の影響を受けやすくなります。',
      solution: '中国渡航者は日本全体の外国人渡航者の約2割。福岡・佐賀県はさらに割合が低く、国内旅行者も十分にターゲットにしています。',
    },
    {
      icon: '🔥',
      title: '火災リスク',
      desc: '建物である以上、火災のリスクは常に存在します。',
      solution: 'CLT構造は表面が炭化層を形成し燃え広がりを防止。さらに火災保険・地震保険で万全にカバーします。',
    },
    {
      icon: '⚠️',
      title: '事故リスク',
      desc: '宿泊施設では、ゲストの事故が発生する可能性があります。',
      solution: '旅館賠償責任保険に加入し、宿泊中の事故もカバー。安心してオーナーシップを持っていただけます。',
    },
  ]

  const faqs = [
    {
      q: 'ホテルの運用は自分でできますか？',
      a: 'いいえ、年180日を超える宿泊事業は旅館業の取得が必要です。PLEASTが旅館運用を代行し、オーナー様はリース収益を受け取るのみです。面倒な手続きや運営業務は一切不要です。',
    },
    {
      q: '初期費用はトレーラーハウス代金以外にかかりますか？',
      a: 'いいえ、代金に含まれているため別途の初期費用はかかりません。設置費用、各種申請費用なども全て含まれています。',
    },
    {
      q: '売却時に買い手がつかないのでは？',
      a: '10年後に最低500万円での買い取りを保証しています。また修繕積立金で新車同然にして再販も可能です。戸建旅館は実需物件としても転用できるため、出口戦略の選択肢は豊富です。',
    },
    {
      q: '相続税対策の仕組みを教えてください。',
      a: 'トレーラーハウスは4年で簿価ゼロになり、相続評価は1台500万円です。1億円分（4台）持っても評価額は2,000万円に圧縮でき、基礎控除内に収まれば相続税0円も可能です。毎年の収益を得ながら、相続対策もできる一石二鳥の投資です。',
    },
    {
      q: 'インフレが続いたらどうなりますか？',
      a: 'インフレは追い風になります。物価上昇に合わせて再販価格やリース料が上がる可能性があり、実物資産は有利です。現金で持っているよりも、インフレヘッジとして優れた選択肢です。',
    },
    {
      q: '今すぐ相談するメリットはありますか？',
      a: '相続税対策は事前準備がすべてです。また、トレーラーハウスの台数には限りがあります。好条件のエリアは早い者勝ちとなりますので、早めの準備が有利な条件につながります。',
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="section-padding position-relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #1a2a4a 0%, #2d4a7c 100%)' }}>
        <div className="position-absolute top-0 start-0" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(201,169,98,0.1) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(-20%, -50%)' }}></div>
        <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-1 text-center" style={{ maxWidth: '1200px' }}>
          <h1 className="text-white responsive-title mb-3 mb-md-4" style={{ lineHeight: '1.3' }}>
            運用説明・Q&A・お問い合わせ
          </h1>
          <p className="text-white mx-auto" style={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', lineHeight: '1.8' }}>
            ご購入から運用まで、PLEASTが全てサポートいたします。<br className="d-none d-md-block" />
            よくあるご質問とお問い合わせ方法をご案内します。
          </p>
        </div>
      </section>

      {/* Flow Section */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <ScrollReveal>
            <div className="text-center mb-5 mb-md-6">
              <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-3 mb-md-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
                Flow
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
            </div>
              <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              ご購入から運用までの流れ
            </h2>
              <p className="mx-auto" style={{ fontSize: '1.05rem', color: '#6b6b6b', maxWidth: '600px' }}>
              シンプルな5ステップで、すぐに収益を得られます
            </p>
          </div>
          </ScrollReveal>

          <div className="position-relative" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="position-absolute start-50 top-0 bottom-0 translate-middle-x" style={{ width: '2px', background: 'linear-gradient(to bottom, #c9a962, #1a2a4a)' }}></div>
            
            {flowSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className={`d-flex align-items-center mb-4 mb-md-5 position-relative flow-step ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div 
                    className={`bg-cream p-4 p-md-5 rounded shadow-soft transition-all h-100 flow-step-content`}
                    style={{ 
                      width: 'calc(50% - 40px)',
                      transition: 'all 0.4s ease',
                      textAlign: i % 2 === 0 ? 'right' : 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
                    }}
                  >
                    <h3 className="h5 mb-2 mb-md-3 d-flex align-items-center gap-2 flow-step-title" style={{ fontSize: '1.2rem', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      {step.title}
                    </h3>
                    <p className="mb-0 flow-step-desc" style={{ fontSize: '0.95rem', color: '#6b6b6b', lineHeight: '1.7' }}>
                      {step.desc}
                    </p>
                </div>
                  <div 
                    className="position-absolute start-50 translate-middle-x bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-medium flow-step-number"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
                      fontFamily: "'Noto Serif JP', serif",
                      fontSize: '1.2rem',
                      zIndex: 1
                    }}
                  >
                  {step.num}
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-5 mt-md-6 p-4 p-md-5 bg-primary rounded shadow-soft mx-auto" style={{ maxWidth: '700px', background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)' }}>
              <h3 className="text-white mb-3 mb-md-4" style={{ fontSize: '1.5rem' }}>オーナー様は収益を受け取るだけ</h3>
              <p className="text-white mb-0" style={{ fontSize: '1.05rem', opacity: 0.9, lineHeight: '1.8' }}>
                運営の手間は一切かかりません。<br className="d-none d-md-block" />
              PLEASTが責任を持って旅館運営を行います。
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Operation Section */}
      <section className="section-padding bg-warm">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <ScrollReveal>
            <div className="text-center mb-5 mb-md-6">
              <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-3 mb-md-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
              Support
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
            </div>
              <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              PLEASTが全て代行します
            </h2>
              <p className="mx-auto" style={{ fontSize: '1.05rem', color: '#6b6b6b', maxWidth: '600px' }}>
              運営に関するあらゆる業務をワンストップでサポート
            </p>
          </div>
          </ScrollReveal>

          <div className="row g-3 g-md-4">
            {operationCards.map((card, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4 col-lg operation-card">
                <ScrollReveal delay={i + 1}>
                  <div 
                    className="bg-white p-4 p-md-5 rounded text-center position-relative h-100 transition-all"
                    style={{ transition: 'all 0.4s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)'
                      e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="position-absolute top-0 start-50 translate-middle-x" style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #1a2a4a, #c9a962)', borderRadius: '0 0 3px 3px' }}></div>
                    <div className="mx-auto mb-3 mb-md-4 bg-cream rounded-circle d-flex align-items-center justify-content-center operation-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                      {card.icon}
                    </div>
                    <h3 className="h6 fw-semibold mb-2 operation-title" style={{ fontSize: '0.95rem', color: '#1a1a1a' }}>
                      {card.title}
                    </h3>
                    <p className="small mb-0 operation-desc" style={{ fontSize: '0.8rem', color: '#6b6b6b', lineHeight: '1.6' }}>
                      {card.desc}
                    </p>
                </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merit/Demerit Section */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <ScrollReveal>
            <div className="text-center mb-5 mb-md-6">
              <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-3 mb-md-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
              Analysis
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
            </div>
              <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              メリット・デメリット
            </h2>
              <p className="mx-auto" style={{ fontSize: '1.05rem', color: '#6b6b6b', maxWidth: '600px' }}>
              投資判断のために、両面を正直にお伝えします
            </p>
          </div>
          </ScrollReveal>

          <div className="row g-4 g-md-5">
            <div className="col-12 col-lg-6 merit-box merit">
              <ScrollReveal delay={1}>
                <div 
                  className="p-4 p-md-5 rounded"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(45, 74, 124, 0.05), rgba(45, 74, 124, 0.02))',
                    border: '2px solid #2d4a7c'
                  }}
                >
                  <div className="d-flex align-items-center gap-3 gap-md-4 mb-4 mb-md-5 pb-3 pb-md-4 border-bottom" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    <div className="bg-primary-light rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>
                      ✓
                    </div>
                    <h3 className="h4 mb-0 merit-box-title" style={{ fontSize: '1.3rem' }}>メリット</h3>
              </div>
                  <ul className="list-unstyled mb-0 merit-list">
                    {merits.map((item, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 gap-md-3 py-2 py-md-3 border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                        <span className="bg-primary-light bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 text-primary fw-bold small" style={{ width: '24px', height: '24px', fontSize: '0.75rem', backgroundColor: 'rgba(45, 74, 124, 0.1)', color: '#1a2a4a' }}>
                          ✓
                        </span>
                        <span style={{ fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="col-12 col-lg-6 merit-box demerit">
              <ScrollReveal delay={2}>
                <div 
                  className="p-4 p-md-5 rounded"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(184, 67, 47, 0.05), rgba(184, 67, 47, 0.02))',
                    border: '2px solid #b8432f'
                  }}
                >
                  <div className="d-flex align-items-center gap-3 gap-md-4 mb-4 mb-md-5 pb-3 pb-md-4 border-bottom" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    <div className="bg-accent rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '50px', height: '50px', fontSize: '1.5rem', backgroundColor: '#b8432f' }}>
                      !
                    </div>
                    <h3 className="h4 mb-0 merit-box-title" style={{ fontSize: '1.3rem' }}>デメリット・リスク</h3>
              </div>
                  <ul className="list-unstyled mb-0 merit-list">
                    {demerits.map((item, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 gap-md-3 py-2 py-md-3 border-bottom" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                        <span className="bg-accent bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 text-accent fw-bold small" style={{ width: '24px', height: '24px', fontSize: '0.75rem', backgroundColor: 'rgba(184, 67, 47, 0.1)', color: '#b8432f' }}>
                          △
                        </span>
                        <span style={{ fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Section */}
      <section className="section-padding bg-warm">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <ScrollReveal>
            <div className="text-center mb-5 mb-md-6">
              <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-3 mb-md-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
              Risk Management
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
            </div>
              <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              リスクへの対策
            </h2>
              <p className="mx-auto" style={{ fontSize: '1.05rem', color: '#6b6b6b', maxWidth: '600px' }}>
              想定されるリスクに対し、万全の対策を講じています
            </p>
          </div>
          </ScrollReveal>

          <div className="row g-3 g-md-4">
            {risks.map((risk, i) => (
              <div key={i} className="col-12 col-md-6 risk-card">
                <ScrollReveal delay={i + 1}>
                  <div 
                    className="bg-white rounded overflow-hidden shadow-soft transition-all h-100"
                    style={{ transition: 'all 0.4s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
                    }}
                  >
                    <div className="p-4 p-md-5 text-white d-flex align-items-center gap-3 gap-md-4 risk-card-header" style={{ background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)' }}>
                      <div className="bg-white bg-opacity-15 rounded d-flex align-items-center justify-content-center risk-card-icon" style={{ width: '45px', height: '45px', fontSize: '1.25rem', borderRadius: '10px' }}>
                    {risk.icon}
                  </div>
                      <h3 className="h5 mb-0 text-white risk-card-title" style={{ fontSize: '1.1rem' }}>{risk.title}</h3>
                    </div>
                    <div className="p-4 p-md-5 risk-card-body">
                      <p className="mb-0" style={{ fontSize: '0.95rem', color: '#3d3d3d', lineHeight: '1.8' }}>{risk.desc}</p>
                      <div className="mt-3 mt-md-4 p-3 p-md-4 bg-cream rounded risk-solution" style={{ borderLeft: '3px solid #c9a962' }}>
                        <div className="small fw-bold text-secondary text-uppercase mb-2 risk-solution-label" style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                          対策
                        </div>
                        <p className="mb-0" style={{ fontSize: '0.9rem', color: '#3d3d3d' }}>{risk.solution}</p>
                      </div>
                </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <ScrollReveal>
            <div className="text-center mb-5 mb-md-6">
              <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-3 mb-md-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
                FAQ
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
            </div>
              <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              よくあるご質問
            </h2>
              <p className="mx-auto" style={{ fontSize: '1.05rem', color: '#6b6b6b', maxWidth: '600px' }}>
              お客様からよくいただくご質問にお答えします
            </p>
          </div>
          </ScrollReveal>

          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`faq-item border-bottom ${activeFaq === i ? 'active' : ''}`}
                style={{ borderColor: '#f8f9fc' }}
              >
                <div
                  className="d-flex align-items-center gap-3 gap-md-4 py-4 cursor-pointer transition-all faq-question"
                  style={{ transition: 'all 0.3s ease', padding: '1.5rem 0' }}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1a2a4a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                  }}
                >
                  <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 faq-question-icon" style={{ width: '40px', height: '40px', fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '1rem' }}>
                    Q
                  </span>
                  <span className="flex-grow-1 fw-semibold faq-question-text" style={{ fontSize: '1.05rem', color: '#1a1a1a' }}>
                    {faq.q}
                  </span>
                  <span
                    className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 faq-question-toggle ${activeFaq === i ? 'bg-primary' : 'bg-cream'}`}
                    style={{ width: '30px', height: '30px', transition: 'all 0.3s ease' }}
                  >
                    <span style={{ fontSize: '1.25rem', fontWeight: 300, color: activeFaq === i ? '#ffffff' : '#1a2a4a' }}>
                      {activeFaq === i ? '−' : '+'}
                    </span>
                  </span>
                </div>
                <div 
                  className={`overflow-hidden transition-all faq-answer ${activeFaq === i ? '' : ''}`}
                  style={{ 
                    maxHeight: activeFaq === i ? '500px' : '0',
                    transition: 'max-height 0.4s ease'
                  }}
                >
                  <div className="faq-answer-content" style={{ padding: '0 0 1.5rem 3.5rem', color: '#3d3d3d', lineHeight: '1.9' }}>
                    <p className="mb-0" style={{ fontSize: '0.95rem' }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="section-padding bg-warm">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <ScrollReveal>
            <div className="text-center mb-5 mb-md-6">
              <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-3 mb-md-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
                Company
                <div className="bg-primary-light" style={{ width: '30px', height: '1px' }}></div>
              </div>
              <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
                運営会社
              </h2>
            </div>
          </ScrollReveal>

          <div className="row g-4 g-md-5 align-items-center">
            <div className="col-12 col-lg-4 text-center">
              <div className="company-logo-text mb-3" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(3rem, 6vw, 4rem)', fontWeight: 700, color: '#1a2a4a', letterSpacing: '0.15em' }}>
                PLEAST
              </div>
              <p className="small mb-0 company-logo-tagline" style={{ fontSize: '0.9rem', color: '#6b6b6b', letterSpacing: '0.1em' }}>
                株式会社PLEAST（プレスト）
              </p>
            </div>
            <div className="col-12 col-lg-8">
              <ScrollReveal delay={1}>
                <div className="bg-white rounded p-4 p-md-5 shadow-soft position-relative overflow-hidden company-info" style={{ borderRadius: '16px' }}>
                  <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'linear-gradient(90deg, #1a2a4a, #c9a962)' }}></div>
                  <h3 className="h4 mb-4 mb-md-5 pb-3 pb-md-4 border-bottom" style={{ fontSize: '1.5rem', borderColor: '#f8f9fc' }}>会社概要</h3>
                  <table className="w-100 company-table">
                    <tbody>
                      <tr className="border-bottom" style={{ borderColor: '#f8f9fc' }}>
                        <th className="py-3 py-md-4" style={{ width: '140px', fontWeight: 600, color: '#1a2a4a', fontSize: '0.9rem', textAlign: 'left', verticalAlign: 'top' }}>会社名</th>
                        <td className="py-3 py-md-4" style={{ color: '#3d3d3d', fontSize: '0.95rem' }}>株式会社PLEAST</td>
                      </tr>
                      <tr className="border-bottom" style={{ borderColor: '#f8f9fc' }}>
                        <th className="py-3 py-md-4" style={{ width: '140px', fontWeight: 600, color: '#1a2a4a', fontSize: '0.9rem', textAlign: 'left', verticalAlign: 'top' }}>設立</th>
                        <td className="py-3 py-md-4" style={{ color: '#3d3d3d', fontSize: '0.95rem' }}>2005年7月</td>
                      </tr>
                      <tr className="border-bottom" style={{ borderColor: '#f8f9fc' }}>
                        <th className="py-3 py-md-4" style={{ width: '140px', fontWeight: 600, color: '#1a2a4a', fontSize: '0.9rem', textAlign: 'left', verticalAlign: 'top' }}>本社</th>
                        <td className="py-3 py-md-4" style={{ color: '#3d3d3d', fontSize: '0.95rem' }}>福岡県博多区祇園町2-35</td>
                      </tr>
                      <tr className="border-bottom" style={{ borderColor: '#f8f9fc' }}>
                        <th className="py-3 py-md-4" style={{ width: '140px', fontWeight: 600, color: '#1a2a4a', fontSize: '0.9rem', textAlign: 'left', verticalAlign: 'top' }}>事業内容</th>
                        <td className="py-3 py-md-4" style={{ color: '#3d3d3d', fontSize: '0.95rem' }}>総合不動産事業</td>
                      </tr>
                      <tr className="border-bottom" style={{ borderColor: '#f8f9fc' }}>
                        <th className="py-3 py-md-4" style={{ width: '140px', fontWeight: 600, color: '#1a2a4a', fontSize: '0.9rem', textAlign: 'left', verticalAlign: 'top' }}>取引先</th>
                        <td className="py-3 py-md-4" style={{ color: '#3d3d3d', fontSize: '0.95rem' }}>5,000社以上</td>
                      </tr>
                      <tr className="border-bottom" style={{ borderColor: '#f8f9fc' }}>
                        <th className="py-3 py-md-4" style={{ width: '140px', fontWeight: 600, color: '#1a2a4a', fontSize: '0.9rem', textAlign: 'left', verticalAlign: 'top' }}>代表電話</th>
                        <td className="py-3 py-md-4" style={{ color: '#3d3d3d', fontSize: '0.95rem' }}>
                          <a href="tel:092-283-7555" className="text-decoration-none" style={{ color: '#2d4a7c', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = '#2d4a7c'}>
                            092-283-7555
                          </a>
                        </td>
                      </tr>
                      <tr className="border-bottom" style={{ borderColor: '#f8f9fc' }}>
                        <th className="py-3 py-md-4" style={{ width: '140px', fontWeight: 600, color: '#1a2a4a', fontSize: '0.9rem', textAlign: 'left', verticalAlign: 'top' }}>フリーダイヤル</th>
                        <td className="py-3 py-md-4" style={{ color: '#3d3d3d', fontSize: '0.95rem' }}>
                          <a href="tel:0120-929-727" className="text-decoration-none" style={{ color: '#2d4a7c', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = '#2d4a7c'}>
                            0120-929-727
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th className="py-3 py-md-4" style={{ width: '140px', fontWeight: 600, color: '#1a2a4a', fontSize: '0.9rem', textAlign: 'left', verticalAlign: 'top' }}>URL</th>
                        <td className="py-3 py-md-4" style={{ color: '#3d3d3d', fontSize: '0.95rem' }}>
                          <a href="https://www.pleast.co.jp" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: '#2d4a7c', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'} onMouseLeave={(e) => e.currentTarget.style.color = '#2d4a7c'}>
                            https://www.pleast.co.jp
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <ScrollReveal>
            <div className="text-center mb-5 mb-md-6 contact-intro">
              <h2 className="h3 mb-3 mb-md-4" style={{ fontSize: '2rem' }}>お問い合わせ</h2>
              <p className="mx-auto" style={{ fontSize: '1.05rem', color: '#6b6b6b', maxWidth: '600px' }}>
              新築戸建旅館運用／トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
            </p>
          </div>
          </ScrollReveal>

          <div className="row g-3 g-md-4 mb-5 mb-md-6 contact-methods">
            <div className="col-12 col-md-6 col-lg-4 contact-method line">
              <ScrollReveal delay={1}>
                <div 
                  className="bg-cream rounded p-4 p-md-5 text-center transition-all h-100"
                  style={{ borderRadius: '16px', transition: 'all 0.4s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="mx-auto mb-3 mb-md-4 bg-success rounded-circle d-flex align-items-center justify-content-center contact-method-icon" style={{ width: '70px', height: '70px', backgroundColor: '#06c755', fontSize: '1.75rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  </div>
                  <h3 className="h5 mb-2 mb-md-3 contact-method-title" style={{ fontSize: '1.2rem' }}>LINE公式アカウント</h3>
                  <p className="small mb-3 mb-md-4 contact-method-desc" style={{ fontSize: '0.9rem', color: '#6b6b6b' }}>
                    友だち追加で気軽にご相談<br />24時間受付中
                  </p>
                  <a 
                    href="#" 
                    className="d-inline-flex align-items-center justify-content-center gap-2 py-2 px-4 px-md-5 rounded-pill text-decoration-none fw-semibold small transition-all contact-method-btn"
                    style={{ 
                      padding: '0.9rem 2rem',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      backgroundColor: '#06c755',
                      color: '#ffffff',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    友だち追加はこちら
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="col-12 col-md-6 col-lg-4 contact-method form">
              <ScrollReveal delay={2}>
                <div 
                  className="bg-cream rounded p-4 p-md-5 text-center transition-all h-100"
                  style={{ borderRadius: '16px', transition: 'all 0.4s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="mx-auto mb-3 mb-md-4 bg-secondary rounded-circle d-flex align-items-center justify-content-center contact-method-icon" style={{ width: '70px', height: '70px', fontSize: '1.75rem' }}>
                    ✉️
                  </div>
                  <h3 className="h5 mb-2 mb-md-3 contact-method-title" style={{ fontSize: '1.2rem' }}>無料相談フォーム</h3>
                  <p className="small mb-3 mb-md-4 contact-method-desc" style={{ fontSize: '0.9rem', color: '#6b6b6b' }}>
                    下記フォームからお問い合わせ<br />担当者より折り返しご連絡
                  </p>
                  <a 
                    href="#contact-form" 
                    className="d-inline-flex align-items-center justify-content-center gap-2 py-2 px-4 px-md-5 rounded-pill text-decoration-none fw-semibold small transition-all contact-method-btn"
                    onClick={(e) => {
                      e.preventDefault()
                      const form = document.getElementById('contact-form')
                      if (form) {
                        form.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    style={{ 
                      padding: '0.9rem 2rem',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      backgroundColor: '#c9a962',
                      color: '#1a1a1a',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    フォームへ進む
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="col-12 col-md-6 col-lg-4 contact-method tel">
              <ScrollReveal delay={3}>
                <div 
                  className="bg-cream rounded p-4 p-md-5 text-center transition-all h-100"
                  style={{ borderRadius: '16px', transition: 'all 0.4s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="mx-auto mb-3 mb-md-4 bg-primary rounded-circle d-flex align-items-center justify-content-center contact-method-icon" style={{ width: '70px', height: '70px', fontSize: '1.75rem' }}>
                    📞
                  </div>
                  <h3 className="h5 mb-2 mb-md-3 contact-method-title" style={{ fontSize: '1.2rem' }}>お電話</h3>
                  <p className="small mb-3 mb-md-4 contact-method-desc" style={{ fontSize: '0.9rem', color: '#6b6b6b' }}>
                    受付時間 10:00〜18:00<br />（土日祝除く）
                  </p>
                  <a 
                    href="tel:0120-929-727" 
                    className="d-inline-flex align-items-center justify-content-center gap-2 py-2 px-4 px-md-5 rounded-pill text-decoration-none fw-semibold small transition-all contact-method-btn"
                    style={{ 
                      padding: '0.9rem 2rem',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      backgroundColor: '#1a2a4a',
                      color: '#ffffff',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    0120-929-727
                </a>
              </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Contact Form */}
          <ScrollReveal>
            <div id="contact-form" className="mx-auto bg-cream rounded p-4 p-md-5 contact-form-wrapper" style={{ maxWidth: '800px', borderRadius: '20px' }}>
              <h3 className="text-center h4 mb-4 mb-md-5 contact-form-title" style={{ fontSize: '1.5rem' }}>お問い合わせフォーム</h3>
            <form>
                <div className="mb-4 mb-md-5 form-group">
                  <label className="d-block fw-semibold small mb-2 mb-md-3 form-label" style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>
                    ご相談方法<span className="text-accent ms-1" style={{ color: '#b8432f', fontSize: '0.75rem' }}>*</span>
                  </label>
                  <div className="d-flex flex-wrap gap-3 gap-md-4 form-checkbox-group">
                    <label className="d-flex align-items-center gap-2 cursor-pointer form-checkbox">
                      <input type="checkbox" name="method" value="online" className="form-check-input" style={{ width: '20px', height: '20px', accentColor: '#1a2a4a' }} />
                      <span className="small" style={{ fontSize: '0.95rem' }}>オンライン（Teams / Zoom）</span>
                    </label>
                    <label className="d-flex align-items-center gap-2 cursor-pointer form-checkbox">
                      <input type="checkbox" name="method" value="phone" className="form-check-input" style={{ width: '20px', height: '20px', accentColor: '#1a2a4a' }} />
                      <span className="small" style={{ fontSize: '0.95rem' }}>電話</span>
                  </label>
                </div>
              </div>

                <div className="mb-4 mb-md-5 form-group">
                  <label className="d-block fw-semibold small mb-2 mb-md-3 form-label" style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>
                    ご相談の種類<span className="text-accent ms-1" style={{ color: '#b8432f', fontSize: '0.75rem' }}>*</span>
                </label>
                  <div className="d-flex flex-wrap gap-3 gap-md-4 form-checkbox-group">
                    {[
                      { value: 'trailer', label: 'トレーラーハウスについて聞きたい' },
                      { value: 'inn', label: '新築戸建旅館について聞きたい' },
                      { value: 'estimate', label: 'お見積りについて聞きたい' },
                      { value: 'other', label: 'その他' },
                    ].map((option, i) => (
                      <label key={i} className="d-flex align-items-center gap-2 cursor-pointer form-checkbox">
                        <input type="checkbox" name="type" value={option.value} className="form-check-input" style={{ width: '20px', height: '20px', accentColor: '#1a2a4a' }} />
                        <span className="small" style={{ fontSize: '0.95rem' }}>{option.label}</span>
                      </label>
                    ))}
                  </div>
              </div>

                <div className="row g-3 g-md-4 mb-4 mb-md-5 form-row">
                  <div className="col-12 col-md-6 form-group">
                    <label className="d-block fw-semibold small mb-2 mb-md-3 form-label" style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>
                      お名前<span className="text-accent ms-1" style={{ color: '#b8432f', fontSize: '0.75rem' }}>*</span>
                  </label>
                  <input
                    type="text"
                      className="form-control form-input w-100" 
                    placeholder="山田 太郎"
                    required
                      style={{ 
                        padding: '1rem 1.25rem',
                        border: '2px solid #f0f2f7',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#ffffff'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#1a2a4a'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 42, 74, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#f0f2f7'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                  />
                </div>
                  <div className="col-12 col-md-6 form-group">
                    <label className="d-block fw-semibold small mb-2 mb-md-3 form-label" style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>
                      ふりがな<span className="text-accent ms-1" style={{ color: '#b8432f', fontSize: '0.75rem' }}>*</span>
                  </label>
                  <input
                    type="text"
                      className="form-control form-input w-100" 
                    placeholder="やまだ たろう"
                    required
                      style={{ 
                        padding: '1rem 1.25rem',
                        border: '2px solid #f0f2f7',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#ffffff'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#1a2a4a'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 42, 74, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#f0f2f7'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                  />
                </div>
              </div>

                <div className="row g-3 g-md-4 mb-4 mb-md-5 form-row">
                  <div className="col-12 col-md-6 form-group">
                    <label className="d-block fw-semibold small mb-2 mb-md-3 form-label" style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>
                      メールアドレス<span className="text-accent ms-1" style={{ color: '#b8432f', fontSize: '0.75rem' }}>*</span>
                  </label>
                  <input
                    type="email"
                      className="form-control form-input w-100" 
                    placeholder="example@email.com"
                    required
                      style={{ 
                        padding: '1rem 1.25rem',
                        border: '2px solid #f0f2f7',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#ffffff'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#1a2a4a'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 42, 74, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#f0f2f7'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                  />
                </div>
                  <div className="col-12 col-md-6 form-group">
                    <label className="d-block fw-semibold small mb-2 mb-md-3 form-label" style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>
                      電話番号<span className="text-accent ms-1" style={{ color: '#b8432f', fontSize: '0.75rem' }}>*</span>
                  </label>
                  <input
                    type="tel"
                      className="form-control form-input w-100" 
                    placeholder="090-1234-5678"
                    required
                      style={{ 
                        padding: '1rem 1.25rem',
                        border: '2px solid #f0f2f7',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#ffffff'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#1a2a4a'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 42, 74, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#f0f2f7'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                  />
                </div>
              </div>

                <div className="mb-4 mb-md-5 form-group">
                  <label className="d-block fw-semibold small mb-2 mb-md-3 form-label" style={{ fontSize: '0.9rem', color: '#1a1a1a' }}>
                    ご相談内容
                  </label>
                <textarea
                    className="form-control form-textarea w-100" 
                  placeholder="ご質問やご要望がございましたらご記入ください"
                    style={{ 
                      padding: '1rem 1.25rem',
                      border: '2px solid #f0f2f7',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      minHeight: '150px',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#1a2a4a'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26, 42, 74, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#f0f2f7'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                ></textarea>
              </div>

                <div className="d-flex align-items-start gap-2 gap-md-3 my-4 my-md-5 p-4 p-md-5 bg-white rounded form-privacy" style={{ borderRadius: '8px' }}>
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    required 
                    className="mt-1" 
                    style={{ width: '20px', height: '20px', accentColor: '#1a2a4a', marginTop: '2px' }}
                  />
                  <label htmlFor="privacy" className="small" style={{ fontSize: '0.9rem', color: '#3d3d3d' }}>
                    <a href="#" target="_blank" className="text-decoration-none" style={{ color: '#1a2a4a' }}>プライバシーポリシー</a>
                  に同意する
                </label>
              </div>

              <button
                type="submit"
                  className="w-100 py-3 py-md-4 text-white rounded fw-semibold border-0 form-submit"
                  style={{ 
                    background: 'linear-gradient(135deg, #1a2a4a, #2d4a7c)',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
              >
                入力内容を送信
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

export default OperationPage
