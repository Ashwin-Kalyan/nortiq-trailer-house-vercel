const TrailerHousePage = () => {
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
                    <span>🚚</span>
                    TRANSFORM TRAILER HOUSE
                  </span>
                  <div className="bg-secondary" style={{ width: '2.5rem', height: '1px' }}></div>
                </div>
                <h1 className="responsive-title text-white lh-sm mb-4 mb-md-5 fw-bold">
                  トランスフォーム型<br />
                  トレーラーハウス運用
                </h1>
                <p className="lead mb-4 mb-md-5" style={{ opacity: 0.9, lineHeight: '1.8', fontWeight: 300 }}>
                  "移動できる実物資産"でありながら、<br className="d-none d-md-block" />
                  4年償却による相続評価の大幅圧縮と<br className="d-none d-md-block" />
                  年<span className="d-inline-block fw-semibold" style={{ color: '#c9a962' }}>10%</span>の安定収益を両立。
                </p>
                <div className="d-flex flex-wrap gap-3 gap-md-4 mb-4 mb-md-5">
                  {[
                    { icon: '💰', text: '2,500万円〜' },
                    { icon: '📈', text: '年間200万円収益' },
                    { icon: '📉', text: '4年で簿価ゼロ' },
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
                  backgroundImage: `url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80')`,
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

      {/* Target Section */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-5 mb-md-6">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              Target
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              こんな方におすすめ
            </h2>
            <p className="text-base mx-auto" style={{ color: '#6b6b6b', maxWidth: '600px' }}>
              現金を持っていても増えない、でもリスクは取りたくない方へ
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {[
              { icon: '💵', title: '現金で多額の資産を\n保有する方' },
              { icon: '👨‍👩‍👧‍👦', title: '相続を見据えた\n資産対策をしたい方' },
              { icon: '📊', title: '節税しながら\n収入も欲しい方' },
              { icon: '😤', title: '株や不動産で\n損失経験がある方' },
              { icon: '🌍', title: '社会貢献にも\n関心がある方' },
            ].map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="bg-cream rounded p-4 p-md-5 text-center position-relative h-100 transition-all shadow-soft" style={{ transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 42, 74, 0.12)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)' }}>
                  <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'linear-gradient(to right, #1a2a4a, #c9a962)', opacity: '0', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}></div>
                  <div className="mx-auto mb-4 bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '4rem', height: '4rem', fontSize: '1.5rem' }}>
                    {item.icon}
                  </div>
                  <h3 className="small fw-semibold mb-0" style={{ color: '#1a1a1a', lineHeight: '1.6', whiteSpace: 'pre-line' }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Deep Dive Section */}
      <section className="section-padding bg-warm">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-5 mb-md-6">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              Issues
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              日本人の資産を蝕む "五重苦"
            </h2>
            <p className="text-base mx-auto" style={{ color: '#6b6b6b', maxWidth: '600px' }}>
              あなたの資産を確実に目減りさせる5つの構造的問題
            </p>
          </div>

          {[
            {
              title: '📈 物価上昇（インフレ）',
              desc: '30年間で主な食料品・光熱費は約1.5倍に上昇。銀行預金の金利は0.001%程度。現金で持っていても、実質的な資産価値は毎年目減りしています。',
              stat: { number: '1.5', label: '倍（30年間の物価上昇）' },
            },
            {
              title: '💰 給与停滞',
              desc: '日本の平均賃金は過去30年間ほぼ横ばい。先進国で唯一成長していません。物価は上がるのに、収入は増えない — この構造が家計を圧迫します。',
              stat: { number: '30', label: '年間 賃金成長なし' },
            },
            {
              title: '📊 税負担の増加',
              desc: '国民負担率（税金＋社会保険料）は過去20年で10%以上増加。稼いでも手取りは減る一方です。合法的な節税対策がますます重要になっています。',
              stat: { number: '47', label: '%（国民負担率 2023年）' },
            },
            {
              title: '🤖 AIによる雇用リスク',
              desc: 'ChatGPTをはじめとするAIの急速な進化により、ホワイトカラーの仕事も安泰ではなくなりました。給与収入だけに頼らない収入源の確保が急務です。',
              stat: { number: '49', label: '%（AIに代替されうる仕事の割合）' },
            },
            {
              title: '🏛️ 相続税の重圧',
              desc: '「資産は三代で消える」と言われます。相続税率は最大55%。10億円の資産も三代後にはわずか1.8億円に。事前対策なしでは資産は守れません。',
              stat: { number: '55', label: '%（相続税 最高税率）' },
            },
          ].map((problem, i) => (
            <div key={i} className={`row g-4 g-md-5 align-items-center mb-5 mb-md-6 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className="col-12 col-md-6">
                <h3 className="h4 mb-3 mb-md-4 d-flex align-items-center gap-2">{problem.title}</h3>
                <p className="mb-4 mb-md-5" style={{ color: '#3d3d3d', lineHeight: '1.8' }}>{problem.desc}</p>
                <div className="d-inline-flex align-items-baseline gap-2 bg-white py-3 px-4 rounded shadow-soft">
                  <span className="fw-bold" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.875rem', color: '#1a2a4a' }}>{problem.stat.number}</span>
                  <span className="small" style={{ color: '#6b6b6b' }}>{problem.stat.label}</span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="bg-white rounded p-4 p-md-5 shadow-soft">
                  <div className="w-100 bg-cream rounded d-flex align-items-center justify-content-center" style={{ height: '12rem', color: '#6b6b6b' }}>
                    チャート表示エリア
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inheritance Section */}
      <section className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-5 mb-md-6">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              Solution
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              相続税を"ほぼゼロ"に圧縮する方法
            </h2>
            <p className="text-base mx-auto" style={{ color: '#6b6b6b', maxWidth: '600px' }}>
              2,500万円のトレーラーハウスの場合
            </p>
          </div>

          <div className="row g-4 g-md-5 align-items-center mb-4 mb-md-5">
            <div className="col-12 col-md-4">
              <div className="bg-cream rounded p-4 p-md-5 text-center border border-2 position-relative overflow-hidden shadow-soft" style={{ borderColor: '#b8432f' }}>
                <span className="small fw-bold text-uppercase mb-4 d-inline-block py-2 px-3 rounded-pill" style={{ backgroundColor: 'rgba(184,67,47,0.1)', color: '#b8432f', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                  BEFORE
                </span>
                <div className="fw-bold mb-2" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '2.5rem', color: '#b8432f' }}>1億円</div>
                <p className="small mb-4" style={{ color: '#6b6b6b' }}>現金のまま保有</p>
                <div className="bg-white p-3 rounded small" style={{ color: '#3d3d3d', fontSize: '0.75rem' }}>
                  相続税評価額＝1億円（そのまま課税対象）
                </div>
              </div>
            </div>

            <div className="col-12 col-md-auto d-flex flex-column align-items-center gap-2" style={{ color: '#c9a962' }}>
              <span className="fs-3">→</span>
              <span className="small fw-semibold text-uppercase" style={{ letterSpacing: '0.05em' }}>転換</span>
            </div>

            <div className="col-12 col-md-4">
              <div className="bg-gradient-primary rounded p-4 p-md-5 text-center border border-2 position-relative overflow-hidden shadow-soft" style={{ borderColor: '#1a2a4a', background: 'linear-gradient(to bottom right, rgba(26,42,74,0.05), rgba(45,74,124,0.05))' }}>
                <span className="small fw-bold text-uppercase mb-4 d-inline-block py-2 px-3 rounded-pill" style={{ backgroundColor: 'rgba(26,42,74,0.1)', color: '#1a2a4a', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                  AFTER
                </span>
                <div className="fw-bold mb-2" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '2.5rem', color: '#1a2a4a' }}>2,000万円</div>
                <p className="small mb-4" style={{ color: '#6b6b6b' }}>トレーラーハウス4台に転換</p>
                <div className="bg-white p-3 rounded small" style={{ color: '#3d3d3d', fontSize: '0.75rem' }}>
                  4年後の相続評価額＝1台500万円×4台＝2,000万円
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-primary rounded p-5 p-md-6 text-center text-white shadow-soft">
            <h3 className="h4 text-white mb-3 mb-md-4">基礎控除内に収まれば...</h3>
            <span className="d-block fw-bold mb-3 mb-md-4" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '3rem', color: '#c9a962' }}>相続税 0円</span>
            <p className="mb-0" style={{ opacity: 0.9, lineHeight: '1.8' }}>
              基礎控除3,600万円（配偶者＋子1人の場合4,200万円）を活用すれば、<br className="d-none d-md-block" />
              評価額2,000万円の資産は非課税で相続可能です。
            </p>
          </div>
        </div>
      </section>

      {/* Depreciation Section */}
      <section className="section-padding bg-warm">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="row g-4 g-md-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="bg-white rounded p-4 p-md-5 shadow-soft">
                <h3 className="h5 text-center mb-4 mb-md-5">4年間の減価償却イメージ</h3>
                <div className="d-flex align-items-end justify-content-between mb-4 pb-3 border-bottom" style={{ height: '250px', paddingLeft: '1rem', paddingRight: '1rem' }}>
                  {[1, 2, 3, 4].map((year) => (
                    <div key={year} className="d-flex flex-column align-items-center gap-2">
                      <div className="w-100 bg-gradient-primary rounded-top" style={{ height: `${(year / 4) * 100}%`, background: 'linear-gradient(to top, #1a2a4a, #2d4a7c)' }}></div>
                      <span className="fw-bold small" style={{ fontFamily: "'Noto Serif JP', serif", color: '#1a2a4a' }}>625万</span>
                      <span className="small" style={{ color: '#6b6b6b', fontSize: '0.75rem' }}>{year}年目</span>
                    </div>
                  ))}
                </div>
                <p className="text-center small mb-0" style={{ color: '#6b6b6b', fontSize: '0.75rem' }}>
                  ※ 2,500万円を4年で均等償却した場合
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 mb-md-5 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
                Depreciation
                <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              </div>
              <h3 className="h3 mb-4 mb-md-5">4年償却で"実質利回り"はさらに高く</h3>
              <p className="mb-4 mb-md-5" style={{ color: '#3d3d3d', lineHeight: '1.8' }}>
                トレーラーハウスは車両扱いのため、法定耐用年数はわずか4年。
                毎年の減価償却費を経費計上することで、
                表面利回り10%を超える"実質利回り"を実現できます。
              </p>

              <div className="bg-white rounded p-4 p-md-5 border-start border-4 shadow-soft" style={{ borderColor: '#c9a962' }}>
                <h4 className="h6 mb-3 mb-md-4" style={{ color: '#1a2a4a' }}>2,500万円投資時の年間収支（概算）</h4>
                <div className="d-flex flex-column gap-2">
                  {[
                    { label: 'リース収益', value: '+200万円' },
                    { label: '減価償却費（経費）', value: '−625万円' },
                    { label: '課税所得の圧縮効果', value: '約200万円相当' },
                  ].map((row, i) => (
                    <div key={i} className="d-flex justify-content-between small">
                      <span style={{ color: '#3d3d3d' }}>{row.label}</span>
                      <span style={{ color: '#3d3d3d' }}>{row.value}</span>
                    </div>
                  ))}
                  <div className="d-flex justify-content-between small fw-bold pt-3 mt-2 border-top" style={{ color: '#1a2a4a', borderColor: '#f0f2f7' }}>
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
      <section className="section-padding bg-white">
        <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-5 mb-md-6">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#2d4a7c', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
              Simulation
              <div className="bg-primary-light" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4">
              10年間の収益シミュレーション
            </h2>
            <p className="text-base mx-auto" style={{ color: '#6b6b6b', maxWidth: '600px' }}>
              初期投資から10年後までの収益を試算
            </p>
          </div>

          <div className="row g-4 g-md-5 mb-4 mb-md-5">
            {[
              {
                units: '1ユニット',
                price: '2,500',
                items: [
                  { label: '年間リース収益', value: '200万円' },
                  { label: '10年間の累計収益', value: '2,000万円' },
                  { label: '10年後の売却価格', value: '500万円（保証）' },
                ],
                result: '約2,000万円',
              },
              {
                units: '2ユニット',
                price: '4,000',
                items: [
                  { label: '年間リース収益', value: '320万円' },
                  { label: '10年間の累計収益', value: '3,200万円' },
                  { label: '10年後の売却価格', value: '800万円（保証）' },
                ],
                result: '約3,200万円',
              },
            ].map((sim, i) => (
              <div key={i} className="col-12 col-md-6">
                <div className="bg-cream rounded overflow-hidden shadow-soft transition-all h-100" style={{ transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(26, 42, 74, 0.15)' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(26, 42, 74, 0.08)' }}>
                  <div className="bg-gradient-primary text-white p-4 p-md-5 text-center">
                    <div className="small mb-2" style={{ opacity: 0.8 }}>{sim.units}</div>
                    <div className="fw-bold" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '2rem' }}>
                      {sim.price}
                      <span className="small fw-normal">万円</span>
                    </div>
                  </div>
                  <div className="p-4 p-md-5">
                    {sim.items.map((item, j) => (
                      <div key={j} className="d-flex justify-content-between py-3 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>
                        <span className="small" style={{ color: '#6b6b6b' }}>{item.label}</span>
                        <span className="fw-semibold" style={{ color: '#1a1a1a' }}>{item.value}</span>
                      </div>
                    ))}
                    <div className="bg-white mt-4 p-4 d-flex justify-content-between align-items-center rounded">
                      <span className="fw-semibold" style={{ color: '#1a1a1a' }}>10年後の手取り</span>
                      <span className="fw-bold" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.5rem', color: '#1a2a4a' }}>{sim.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-4 p-md-5 bg-cream rounded border border-2 border-dashed" style={{ borderColor: '#c9a962' }}>
            <p className="small mb-0" style={{ color: '#6b6b6b' }}>
              ※ 上記は概算シミュレーションです。<strong style={{ color: '#1a1a1a' }}>減価償却による節税効果</strong>
              を含めると、<br className="d-none d-md-block" />
              実質的な利回りはさらに高くなります。詳細シミュレーションは個別相談にてご案内いたします。
            </p>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="section-padding bg-gradient-primary-dark text-white position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            pointerEvents: 'none'
          }}
        ></div>
        <div className="container-fluid px-3 px-md-4 px-lg-5 position-relative z-1" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-5 mb-md-6">
            <div className="d-inline-flex align-items-center gap-3 gap-md-4 mb-4 small text-uppercase fw-semibold" style={{ color: '#c9a962', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              <div className="bg-secondary" style={{ width: '2rem', height: '1px' }}></div>
              Social Impact
              <div className="bg-secondary" style={{ width: '2rem', height: '1px' }}></div>
            </div>
            <h2 className="responsive-heading lh-sm mb-3 mb-md-4 text-white">
              社会貢献にもなる投資
            </h2>
            <p className="text-white mx-auto" style={{ opacity: 0.7, maxWidth: '600px' }}>
              収益を得ながら、地域と環境に貢献できます
            </p>
          </div>

          <div className="row g-4 g-md-5">
            {[
              {
                icon: '🏕️',
                title: '災害時対応',
                desc: '移動可能なため、災害時には仮設住宅や避難所として活用可能。地域の防災力向上に貢献します。',
              },
              {
                icon: '🏞️',
                title: '遊休地活用',
                desc: '使われていない土地を観光資源として再活用。空き地問題の解決と地域経済の活性化に寄与します。',
              },
              {
                icon: '🌾',
                title: '地方創生',
                desc: '観光客を地方に誘導し、地域の雇用創出と経済循環を促進。過疎化対策にも貢献します。',
              },
              {
                icon: '🌲',
                title: '環境配慮',
                desc: 'CLT（木材）構造でCO₂を固定。製造時の環境負荷も低く、サステナブルな建築を実現します。',
              },
            ].map((sdg, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3">
                <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded p-4 p-md-5 text-center transition-all h-100 shadow-soft" style={{ transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <div className="mx-auto mb-4 bg-gradient-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '4.5rem', height: '4.5rem', fontSize: '2rem', background: 'linear-gradient(to bottom right, #c9a962, #d4b87a)' }}>
                    {sdg.icon}
                  </div>
                  <h3 className="h6 text-white mb-3">{sdg.title}</h3>
                  <p className="small mb-0 text-white" style={{ opacity: 0.7, lineHeight: '1.8' }}>{sdg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="section-padding bg-warm">
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
              あなたに最適な<br className="d-none d-md-block" />
              シミュレーションをご案内します
            </h2>
            <p className="text-white mb-5 mb-md-6 lead" style={{ opacity: 0.7 }}>
              トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
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

export default TrailerHousePage
