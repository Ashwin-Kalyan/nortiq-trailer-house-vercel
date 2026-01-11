import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FixedCTA from '../components/FixedCTA'
import './OperationPage.css'

const OperationPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    consultationMethod: [] as string[],
    consultationType: [] as string[],
    content: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

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
    const animateElements = document.querySelectorAll('.flow-step, .operation-card, .merit-box, .risk-card, .faq-item, .contact-method')
    animateElements.forEach(el => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateY(30px)'
      htmlEl.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      observerRef.current?.observe(el)
    })

    // Staggered animation for grid items
    const flowSteps = document.querySelectorAll('.flow-step')
    flowSteps.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.15}s`
    })

    const operationCards = document.querySelectorAll('.operation-card')
    operationCards.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.1}s`
    })

    const riskCards = document.querySelectorAll('.risk-card')
    riskCards.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.1}s`
    })

    const contactMethods = document.querySelectorAll('.contact-method')
    contactMethods.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.transitionDelay = `${i * 0.15}s`
    })

    // Form validation visual feedback
    const formInputs = document.querySelectorAll('.form-input, .form-textarea')
    const formHandlers: Array<{ input: HTMLInputElement | HTMLTextAreaElement; blurHandler: () => void; focusHandler: () => void }> = []
    
    formInputs.forEach(input => {
      const htmlInput = input as HTMLInputElement | HTMLTextAreaElement
      const blurHandler = function(this: HTMLInputElement | HTMLTextAreaElement) {
        if (this.value.trim() !== '') {
          this.style.borderColor = 'var(--success)'
        }
      }
      const focusHandler = function(this: HTMLInputElement | HTMLTextAreaElement) {
        this.style.borderColor = 'var(--primary)'
      }
      
      htmlInput.addEventListener('blur', blurHandler)
      htmlInput.addEventListener('focus', focusHandler)
      formHandlers.push({ input: htmlInput, blurHandler, focusHandler })
    })

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if (observerRef.current) {
        animateElements.forEach(el => observerRef.current?.unobserve(el))
      }
      formHandlers.forEach(({ input, blurHandler, focusHandler }) => {
        input.removeEventListener('blur', blurHandler)
        input.removeEventListener('focus', focusHandler)
      })
    }
  }, [])

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }))
  }

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'consultationMethod' | 'consultationType') => {
    const { value, checked } = e.target
    setFormData((prev: typeof formData) => {
      const currentArray = prev[field]
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] }
      } else {
        return { ...prev, [field]: currentArray.filter((item: string) => item !== value) }
      }
    })
  }

  // Map form values to backend expected format
  const mapConsultationMethod = (values: string[]): string => {
    const mapping: Record<string, string> = {
      'online': 'オンライン（Team / Zoom）',
      'phone': '電話'
    }
    return values.map(v => mapping[v] || v).join(', ')
  }

  const mapConsultationType = (values: string[]): string => {
    const mapping: Record<string, string> = {
      'trailer': 'トレーラーハウスについて聞きたい',
      'inn': '新築戸建設施について聞きたい',
      'estimate': 'お見積りについて聞きたい',
      'other': 'その他'
    }
    return values.map(v => mapping[v] || v).join(', ')
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.furigana || !formData.email || !formData.phone) {
      setSubmitStatus('error')
      setSubmitMessage('必須項目を入力してください。')
      return
    }

    if (formData.consultationMethod.length === 0) {
      setSubmitStatus('error')
      setSubmitMessage('ご相談方法を選択してください。')
      return
    }

    if (formData.consultationType.length === 0) {
      setSubmitStatus('error')
      setSubmitMessage('ご相談の種類を選択してください。')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const payload = {
        name: formData.name,
        furigana: formData.furigana,
        email: formData.email,
        phone: formData.phone,
        consultation_method: mapConsultationMethod(formData.consultationMethod),
        consultation_type: mapConsultationType(formData.consultationType),
        content: formData.content || ''
      }

      const response = await fetch('https://nortiq-trailer-house-backend.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      await response.json()
      
      setSubmitStatus('success')
      setSubmitMessage('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。')
      
      // Reset form
      setFormData({
        name: '',
        furigana: '',
        email: '',
        phone: '',
        consultationMethod: [],
        consultationType: [],
        content: ''
      })
      
      // Reset checkboxes
      const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>
      checkboxes.forEach(checkbox => {
        if (checkbox.id !== 'privacy') {
          checkbox.checked = false
        }
      })
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage('送信に失敗しました。しばらく時間をおいて再度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqs = [
    {
      question: 'ホテルの運用は自分でできますか？',
      answer: 'いいえ、年180日を超える宿泊事業は旅館業の取得が必要です。PLEASTが旅館運用を代行し、オーナー様はリース収益を受け取るのみです。面倒な手続きや運営業務は一切不要です。'
    },
    {
      question: '初期費用はトレーラーハウス代金以外にかかりますか？',
      answer: 'いいえ、代金に含まれているため別途の初期費用はかかりません。設置費用、各種申請費用なども全て含まれています。'
    },
    {
      question: '売却時に買い手がつかないのでは？',
      answer: '10年後に最低500万円での買い取りを保証しています。また修繕積立金で新車同然にして再販も可能です。戸建旅館は実需物件としても転用できるため、出口戦略の選択肢は豊富です。'
    },
    {
      question: '相続税対策の仕組みを教えてください。',
      answer: 'トレーラーハウスは4年で簿価ゼロになり、相続評価は1台500万円です。1億円分（4台）持っても評価額は2,000万円に圧縮でき、基礎控除内に収まれば相続税0円も可能です。毎年の収益を得ながら、相続対策もできる一石二鳥の投資です。'
    },
    {
      question: 'インフレが続いたらどうなりますか？',
      answer: 'インフレは追い風になります。物価上昇に合わせて再販価格やリース料が上がる可能性があり、実物資産は有利です。現金で持っているよりも、インフレヘッジとして優れた選択肢です。'
    },
    {
      question: '今すぐ相談するメリットはありますか？',
      answer: '相続税対策は事前準備がすべてです。また、トレーラーハウスの台数には限りがあります。好条件のエリアは早い者勝ちとなりますので、早めの準備が有利な条件につながります。'
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <h1 className="page-hero-title">運用説明・Q&A・お問い合わせ</h1>
            <p className="page-hero-subtitle">
              ご購入から運用まで、PLEASTが全てサポートいたします。<br />
              よくあるご質問とお問い合わせ方法をご案内します。
            </p>
          </div>
        </section>

        {/* Flow Section */}
        <section className="section flow-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Flow</div>
              <h2 className="section-title">ご購入から運用までの流れ</h2>
              <p className="section-subtitle">シンプルな5ステップで、すぐに収益を得られます</p>
            </div>

            <div className="flow-timeline">
              {[
                { number: '1', title: '📞 無料相談・シミュレーション', desc: 'お客様のご状況やご希望をヒアリングし、最適な投資プランと収益シミュレーションをご提案します。' },
                { number: '2', title: '📋 物件選定・ご契約', desc: 'エリアや物件タイプを選定し、契約内容を確認。ご納得いただいた上でご契約となります。' },
                { number: '3', title: '🏗️ 物件建築・設置', desc: 'CLTセルユニットにより、従来の約1/3の工期で完成。早期に収益化が可能です。' },
                { number: '4', title: '📝 旅館業申請・運営開始', desc: 'PLEASTが旅館業の申請から運営まで全て代行。オーナー様の手続きは不要です。' },
                { number: '5', title: '💰 毎月リース収益をお受け取り', desc: '運営が始まれば、毎月安定したリース収益をお受け取りいただけます。' },
              ].map((step, i) => (
                <div key={i} className="flow-step">
                  <div className="flow-step-content">
                    <h3 className="flow-step-title">{step.title}</h3>
                    <p className="flow-step-desc">{step.desc}</p>
                  </div>
                  <div className="flow-step-number">{step.number}</div>
                </div>
              ))}
            </div>

            <div className="flow-result">
              <h3>オーナー様は収益を受け取るだけ</h3>
              <p>運営の手間は一切かかりません。<br />PLEASTが責任を持って旅館運営を行います。</p>
            </div>
          </div>
        </section>

        {/* Operation Section */}
        <section className="section operation-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Support</div>
              <h2 className="section-title">PLEASTが全て代行します</h2>
              <p className="section-subtitle">運営に関するあらゆる業務をワンストップでサポート</p>
            </div>

            <div className="operation-grid">
              {[
                { icon: '📋', title: '旅館業の申請・取得', desc: '複雑な許認可手続きを全て代行' },
                { icon: '🌐', title: '予約サイト掲載・集客', desc: '主要OTAへの掲載とマーケティング' },
                { icon: '📊', title: 'ダイナミックプライシング', desc: 'AIによる最適価格設定で収益最大化' },
                { icon: '🛎️', title: 'ゲスト対応・清掃', desc: 'チェックイン対応から清掃まで' },
                { icon: '💹', title: '売上管理・収益分配', desc: '透明性の高い収益レポート' },
              ].map((op, i) => (
                <div key={i} className="operation-card">
                  <div className="operation-icon">{op.icon}</div>
                  <h3 className="operation-title">{op.title}</h3>
                  <p className="operation-desc">{op.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Merit/Demerit Section */}
        <section className="section merit-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Analysis</div>
              <h2 className="section-title">メリット・デメリット</h2>
              <p className="section-subtitle">投資判断のために、両面を正直にお伝えします</p>
            </div>

            <div className="merit-grid">
              <div className="merit-box merit">
                <div className="merit-box-header">
                  <div className="merit-box-icon">✓</div>
                  <h3 className="merit-box-title">メリット</h3>
                </div>
                <ul className="merit-list">
                  <li>利回り10%保証で安定した収益</li>
                  <li>完全手離れ運用で手間がかからない</li>
                  <li>相続税・節税効果が大きい</li>
                  <li>新築で修繕不安が少ない</li>
                  <li>実需転用・売却の選択肢がある</li>
                  <li>社会貢献・SDGsにも貢献</li>
                </ul>
              </div>

              <div className="merit-box demerit">
                <div className="merit-box-header">
                  <div className="merit-box-icon">!</div>
                  <h3 className="merit-box-title">デメリット・リスク</h3>
                </div>
                <ul className="merit-list">
                  <li>市場変動リスク（観光需要の変化）</li>
                  <li>火災リスク（保険でカバー可能）</li>
                  <li>ランニングコスト（修繕積立等）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Section */}
        <section className="section risk-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Risk Management</div>
              <h2 className="section-title">リスクへの対策</h2>
              <p className="section-subtitle">想定されるリスクに対し、万全の対策を講じています</p>
            </div>

            <div className="risk-grid">
              {[
                {
                  icon: '📉',
                  title: '稼働率リスク',
                  risk: '観光需要の変動により、宿泊稼働率が低下する可能性があります。',
                  solution: 'ダイナミックプライシング（AI価格最適化）、観光課・地元との連携、需要の高いエリアを厳選して設置。トレーラーハウスは移動可能でエリア変更も可能。'
                },
                {
                  icon: '✈️',
                  title: 'インバウンド依存リスク',
                  risk: '外国人観光客への依存度が高いと、国際情勢の影響を受けやすくなります。',
                  solution: '中国渡航者は日本全体の外国人渡航者の約2割。福岡・佐賀県はさらに割合が低く、国内旅行者も十分にターゲットにしています。'
                },
                {
                  icon: '🔥',
                  title: '火災リスク',
                  risk: '建物である以上、火災のリスクは常に存在します。',
                  solution: 'CLT構造は表面が炭化層を形成し燃え広がりを防止。さらに火災保険・地震保険で万全にカバーします。'
                },
                {
                  icon: '⚠️',
                  title: '事故リスク',
                  risk: '宿泊施設では、ゲストの事故が発生する可能性があります。',
                  solution: '旅館賠償責任保険に加入し、宿泊中の事故もカバー。安心してオーナーシップを持っていただけます。'
                },
              ].map((risk, i) => (
                <div key={i} className="risk-card">
                  <div className="risk-card-header">
                    <div className="risk-card-icon">{risk.icon}</div>
                    <h3 className="risk-card-title">{risk.title}</h3>
                  </div>
                  <div className="risk-card-body">
                    <p>{risk.risk}</p>
                    <div className="risk-solution">
                      <div className="risk-solution-label">対策</div>
                      <p>{risk.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section faq-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">FAQ</div>
              <h2 className="section-title">よくあるご質問</h2>
              <p className="section-subtitle">お客様からよくいただくご質問にお答えします</p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, i) => {
                const isActive = activeFaq === i
                return (
                  <div key={i} className={`faq-item ${isActive ? 'active' : ''}`}>
                    <div className="faq-question" onClick={() => setActiveFaq(isActive ? null : i)}>
                      <span className="faq-question-icon">Q</span>
                      <span className="faq-question-text">{faq.question}</span>
                      <span className="faq-question-toggle"></span>
                    </div>
                    <div className="faq-answer">
                      <div className="faq-answer-content">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="section company-section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">Company</div>
              <h2 className="section-title">運営会社</h2>
            </div>

            <div className="company-content">
              <div className="company-logo">
                <div className="company-logo-text">PLEAST</div>
                <p className="company-logo-tagline">株式会社PLEAST（プレスト）</p>
              </div>

              <div className="company-info">
                <h3>会社概要</h3>
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

        {/* Contact Section */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-intro">
              <h2>お問い合わせ</h2>
              <p>新築ヴィラタイプ旅館経営／トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら</p>
            </div>

            <div className="contact-methods">
              {[
                {
                  type: 'line',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                  ),
                  title: 'LINE公式アカウント',
                  desc: '友だち追加で気軽にご相談\n24時間受付中',
                  action: '友だち追加はこちら'
                },
                {
                  type: 'form',
                  icon: '✉️',
                  title: '無料相談フォーム',
                  desc: '下記フォームからお問い合わせ\n担当者より折り返しご連絡',
                  action: 'フォームへ進む'
                },
                {
                  type: 'tel',
                  icon: '📞',
                  title: 'お電話',
                  desc: '受付時間 10:00〜18:00\n（土日祝除く）',
                  action: '0120-727-875'
                },
              ].map((method, i) => (
                <div key={i} className={`contact-method ${method.type}`}>
                  <div className="contact-method-icon">{method.icon}</div>
                  <h3 className="contact-method-title">{method.title}</h3>
                  <p className="contact-method-desc">{method.desc}</p>
                  <a href={method.type === 'tel' ? 'tel:0120-727-875' : '#contact-form'} className="contact-method-btn">
                    {method.action}
                  </a>
                </div>
              ))}
            </div>

            <div className="contact-form-wrapper" id="contact-form">
              <h3 className="contact-form-title">お問い合わせフォーム</h3>
              
              {submitStatus === 'success' && (
                <div className="form-message form-message-success">
                  {submitMessage}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message form-message-error">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">ご相談方法<span className="required">*</span></label>
                  <div className="form-checkbox-group">
                    <label className="form-checkbox">
                      <input 
                        type="checkbox" 
                        name="consultationMethod" 
                        value="online"
                        checked={formData.consultationMethod.includes('online')}
                        onChange={(e) => handleCheckboxChange(e, 'consultationMethod')}
                      />
                      <span>オンライン（Teams / Zoom）</span>
                    </label>
                    <label className="form-checkbox">
                      <input 
                        type="checkbox" 
                        name="consultationMethod" 
                        value="phone"
                        checked={formData.consultationMethod.includes('phone')}
                        onChange={(e) => handleCheckboxChange(e, 'consultationMethod')}
                      />
                      <span>電話</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">ご相談の種類<span className="required">*</span></label>
                  <div className="form-checkbox-group">
                    <label className="form-checkbox">
                      <input 
                        type="checkbox" 
                        name="consultationType" 
                        value="trailer"
                        checked={formData.consultationType.includes('trailer')}
                        onChange={(e) => handleCheckboxChange(e, 'consultationType')}
                      />
                      <span>トレーラーハウスについて聞きたい</span>
                    </label>
                    <label className="form-checkbox">
                      <input 
                        type="checkbox" 
                        name="consultationType" 
                        value="inn"
                        checked={formData.consultationType.includes('inn')}
                        onChange={(e) => handleCheckboxChange(e, 'consultationType')}
                      />
                      <span>新築ヴィラタイプ旅館について聞きたい</span>
                    </label>
                    <label className="form-checkbox">
                      <input 
                        type="checkbox" 
                        name="consultationType" 
                        value="estimate"
                        checked={formData.consultationType.includes('estimate')}
                        onChange={(e) => handleCheckboxChange(e, 'consultationType')}
                      />
                      <span>お見積りについて聞きたい</span>
                    </label>
                    <label className="form-checkbox">
                      <input 
                        type="checkbox" 
                        name="consultationType" 
                        value="other"
                        checked={formData.consultationType.includes('other')}
                        onChange={(e) => handleCheckboxChange(e, 'consultationType')}
                      />
                      <span>その他</span>
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">お名前<span className="required">*</span></label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-input" 
                      placeholder="山田 太郎" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ふりがな<span className="required">*</span></label>
                    <input 
                      type="text" 
                      name="furigana"
                      className="form-input" 
                      placeholder="やまだ たろう" 
                      value={formData.furigana}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">メールアドレス<span className="required">*</span></label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-input" 
                      placeholder="example@email.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">電話番号<span className="required">*</span></label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="form-input" 
                      placeholder="090-1234-5678" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">ご相談内容</label>
                  <textarea 
                    name="content"
                    className="form-textarea" 
                    placeholder="ご質問やご要望がございましたらご記入ください"
                    value={formData.content}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-privacy">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy"><a href="#" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>に同意する</label>
                </div>

                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '入力内容を送信'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FixedCTA />
    </>
  )
}

export default OperationPage