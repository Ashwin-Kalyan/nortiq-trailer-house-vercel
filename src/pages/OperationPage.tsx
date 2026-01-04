import { useState, useEffect } from 'react'

const OperationPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#contact') {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

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
      <section className="pt-40 pb-20 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        <div className="absolute top-[-25%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,169,98,0.1)_0%,transparent_70%)] rounded-full"></div>
        <div className="max-w-[1200px] mx-auto px-12 relative z-10 text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] text-white leading-tight mb-4">
            運用説明・Q&A・お問い合わせ
          </h1>
          <p className="text-white/80 text-lg max-w-[600px] mx-auto">
            ご購入から運用まで、PLEASTが全てサポートいたします。<br />
            よくあるご質問とお問い合わせ方法をご案内します。
          </p>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Flow
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              ご購入から運用までの流れ
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              シンプルな5ステップで、すぐに収益を得られます
            </p>
          </div>

          <div className="relative max-w-[900px] mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary -translate-x-1/2"></div>
            {[
              { num: 1, title: '📞 無料相談・シミュレーション', desc: 'お客様のご状況やご希望をヒアリングし、最適な投資プランと収益シミュレーションをご提案します。' },
              { num: 2, title: '📋 物件選定・ご契約', desc: 'エリアや物件タイプを選定し、契約内容を確認。ご納得いただいた上でご契約となります。' },
              { num: 3, title: '🏗️ 物件建築・設置', desc: 'CLTセルユニットにより、従来の約1/3の工期で完成。早期に収益化が可能です。' },
              { num: 4, title: '📝 旅館業申請・運営開始', desc: 'PLEASTが旅館業の申請から運営まで全て代行。オーナー様の手続きは不要です。' },
              { num: 5, title: '💰 毎月リース収益をお受け取り', desc: '運営が始まれば、毎月安定したリース収益をお受け取りいただけます。' },
            ].map((step, i) => (
              <div key={i} className={`flex items-center mb-12 relative ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-[calc(50%-40px)] bg-bg-cream p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-medium ${i % 2 === 0 ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
                  <h3 className="text-lg mb-2 flex items-center gap-2">{step.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{step.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-15 h-15 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-serif text-xl font-bold z-10 shadow-medium">
                  {step.num}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-12 bg-gradient-to-br from-primary to-primary-light rounded-2xl text-white max-w-[700px] mx-auto">
            <h3 className="text-white text-2xl mb-4">オーナー様は収益を受け取るだけ</h3>
            <p className="opacity-90 text-base">
              運営の手間は一切かかりません。<br />
              PLEASTが責任を持って旅館運営を行います。
            </p>
          </div>
        </div>
      </section>

      {/* Operation System Section */}
      <section className="py-24 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Support
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              PLEASTが全て代行します
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              運営に関するあらゆる業務をワンストップでサポート
            </p>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {[
              { icon: '📋', title: '旅館業の申請・取得', desc: '複雑な許認可手続きを全て代行' },
              { icon: '🌐', title: '予約サイト掲載・集客', desc: '主要OTAへの掲載とマーケティング' },
              { icon: '📊', title: 'ダイナミックプライシング', desc: 'AIによる最適価格設定で収益最大化' },
              { icon: '🛎️', title: 'ゲスト対応・清掃', desc: 'チェックイン対応から清掃まで' },
              { icon: '💹', title: '売上管理・収益分配', desc: '透明性の高い収益レポート' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 px-6 rounded-xl text-center relative transition-all duration-300 hover:-translate-y-2 hover:shadow-medium">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-b"></div>
                <div className="w-15 h-15 mx-auto mb-5 bg-bg-cream rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold mb-2 text-text-dark">{item.title}</h3>
                <p className="text-xs text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merit/Demerit Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Analysis
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              メリット・デメリット
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              投資判断のために、両面を正直にお伝えします
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl bg-gradient-to-br from-primary-light/5 to-primary-light/2 border-2 border-primary-light">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-black/10">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white text-2xl">✓</div>
                <h3 className="text-xl">メリット</h3>
              </div>
              <ul className="list-none space-y-3">
                {[
                  '利回り10%保証で安定した収益',
                  '完全手離れ運用で手間がかからない',
                  '相続税・節税効果が大きい',
                  '新築で修繕不安が少ない',
                  '実需転用・売却の選択肢がある',
                  '社会貢献・SDGsにも貢献',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-black/5 last:border-0">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary-light/10 text-primary font-bold text-xs flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/2 border-2 border-accent">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-black/10">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-2xl">!</div>
                <h3 className="text-xl">デメリット・リスク</h3>
              </div>
              <ul className="list-none space-y-3">
                {[
                  '市場変動リスク（観光需要の変化）',
                  '火災リスク（保険でカバー可能）',
                  'ランニングコスト（修繕積立等）',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-black/5 last:border-0">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-xs flex-shrink-0">△</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Section */}
      <section className="py-24 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Risk Management
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              リスクへの対策
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              想定されるリスクに対し、万全の対策を講じています
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
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
            ].map((risk, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
                <div className="bg-gradient-to-br from-primary to-primary-light text-white p-6 flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/15 rounded-lg flex items-center justify-center text-xl">
                    {risk.icon}
                  </div>
                  <h3 className="text-white text-lg">{risk.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-sm text-text-body leading-relaxed mb-5">{risk.desc}</p>
                  <div className="mt-5 p-4 bg-bg-cream rounded-lg border-l-4 border-secondary">
                    <div className="text-xs font-bold text-secondary tracking-wider uppercase mb-2">対策</div>
                    <p className="text-sm m-0">{risk.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              FAQ
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              よくあるご質問
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              お客様からよくいただくご質問にお答えします
            </p>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-bg-cream">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center gap-4 py-6 cursor-pointer transition-all duration-300 hover:text-primary"
                >
                  <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-serif font-bold text-base flex-shrink-0">
                    Q
                  </span>
                  <span className="flex-1 font-semibold text-base text-text-dark text-left">{faq.q}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFaq === i ? 'bg-primary' : 'bg-bg-cream'
                    }`}
                  >
                    <span className={`text-primary transition-colors ${activeFaq === i ? 'text-white' : 'text-primary'}`}>
                      {activeFaq === i ? '−' : '+'}
                    </span>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === i ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-14 pb-6 text-text-body leading-relaxed">
                    <p className="text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4">お問い合わせ</h2>
            <p className="text-text-light text-base">
              新築戸建旅館運用／トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-16">
            {[
              {
                type: 'line',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                ),
                title: 'LINE公式アカウント',
                desc: '友だち追加で気軽にご相談\n24時間受付中',
                btn: '友だち追加はこちら',
                link: '#',
              },
              {
                type: 'form',
                icon: '✉️',
                title: '無料相談フォーム',
                desc: '下記フォームからお問い合わせ\n担当者より折り返しご連絡',
                btn: 'フォームへ進む',
                link: '#contact-form',
              },
              {
                type: 'tel',
                icon: '📞',
                title: 'お電話',
                desc: '受付時間 10:00〜18:00\n（土日祝除く）',
                btn: '0120-929-727',
                link: 'tel:0120-929-727',
              },
            ].map((method, i) => (
              <div
                key={i}
                className="bg-bg-cream rounded-2xl p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
              >
                <div
                  className={`w-18 h-18 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl ${
                    method.type === 'line'
                      ? 'bg-[#06c755] text-white'
                      : method.type === 'form'
                      ? 'bg-secondary text-text-dark'
                      : 'bg-primary text-white'
                  }`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl mb-3">{method.title}</h3>
                <p className="text-sm text-text-light mb-6 whitespace-pre-line">{method.desc}</p>
                <a
                  href={method.link}
                  className={`inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full no-underline font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    method.type === 'line'
                      ? 'bg-[#06c755] text-white'
                      : method.type === 'form'
                      ? 'bg-secondary text-text-dark'
                      : 'bg-primary text-white'
                  }`}
                >
                  {method.btn}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="max-w-[800px] mx-auto bg-bg-cream rounded-[20px] p-12">
            <h3 className="text-center text-2xl mb-8">お問い合わせフォーム</h3>
            <form>
              <div className="mb-6">
                <label className="block font-semibold text-sm mb-2 text-text-dark">
                  ご相談方法<span className="text-accent text-xs ml-1">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="method" value="online" className="w-5 h-5 accent-primary" />
                    <span className="text-sm">オンライン（Teams / Zoom）</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="method" value="phone" className="w-5 h-5 accent-primary" />
                    <span className="text-sm">電話</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-sm mb-2 text-text-dark">
                  ご相談の種類<span className="text-accent text-xs ml-1">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {['トレーラーハウスについて聞きたい', '新築戸建旅館について聞きたい', 'お見積りについて聞きたい', 'その他'].map(
                    (option, i) => (
                      <label key={i} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="type" value={option} className="w-5 h-5 accent-primary" />
                        <span className="text-sm">{option}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-semibold text-sm mb-2 text-text-dark">
                    お名前<span className="text-accent text-xs ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-4 px-5 border-2 border-bg-warm rounded-lg text-base font-sans transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(26,42,74,0.1)]"
                    placeholder="山田 太郎"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-sm mb-2 text-text-dark">
                    ふりがな<span className="text-accent text-xs ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-4 px-5 border-2 border-bg-warm rounded-lg text-base font-sans transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(26,42,74,0.1)]"
                    placeholder="やまだ たろう"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-semibold text-sm mb-2 text-text-dark">
                    メールアドレス<span className="text-accent text-xs ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full py-4 px-5 border-2 border-bg-warm rounded-lg text-base font-sans transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(26,42,74,0.1)]"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-sm mb-2 text-text-dark">
                    電話番号<span className="text-accent text-xs ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full py-4 px-5 border-2 border-bg-warm rounded-lg text-base font-sans transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(26,42,74,0.1)]"
                    placeholder="090-1234-5678"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-sm mb-2 text-text-dark">ご相談内容</label>
                <textarea
                  className="w-full py-4 px-5 border-2 border-bg-warm rounded-lg text-base font-sans min-h-[150px] resize-y transition-all duration-300 bg-white focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(26,42,74,0.1)]"
                  placeholder="ご質問やご要望がございましたらご記入ください"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 my-8 p-6 bg-white rounded-lg">
                <input type="checkbox" id="privacy" required className="w-5 h-5 mt-0.5 accent-primary" />
                <label htmlFor="privacy" className="text-sm text-text-body">
                  <a href="#" target="_blank" className="text-primary">
                    プライバシーポリシー
                  </a>
                  に同意する
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-br from-primary to-primary-light text-white rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-medium"
              >
                入力内容を送信
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default OperationPage

