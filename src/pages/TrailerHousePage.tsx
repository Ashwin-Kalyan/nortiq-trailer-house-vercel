const TrailerHousePage = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        <div className="absolute top-[-25%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,169,98,0.1)_0%,transparent_70%)] rounded-full"></div>
        <div className="absolute bottom-[-15%] left-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] rounded-full"></div>
        <div className="max-w-[1200px] mx-auto px-12 relative z-10">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary text-secondary py-2 px-4 rounded-full text-xs font-semibold tracking-wider mb-6">
                <span>🚚</span>
                <span>TRANSFORM TRAILER HOUSE</span>
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] text-white leading-tight mb-6">
                トランスフォーム型<br />
                トレーラーハウス運用
              </h1>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                "移動できる実物資産"でありながら、<br />
                4年償却による相続評価の大幅圧縮と<br />
                年<span className="text-secondary">10%</span>の安定収益を両立。
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: '💰', text: '2,500万円〜' },
                  { icon: '📈', text: '年間200万円収益' },
                  { icon: '📉', text: '4年で簿価ゼロ' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 py-3 px-5 rounded-lg text-sm">
                    <span className="text-secondary">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="w-full h-[400px] bg-cover bg-center rounded-2xl shadow-strong"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80')`,
                }}
              ></div>
              <div className="absolute -bottom-6 left-8 bg-secondary text-text-dark py-5 px-8 rounded-xl shadow-strong">
                <span className="font-serif text-3xl font-bold block leading-none">10%</span>
                <span className="text-xs font-medium">利回り保証</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Target
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              こんな方におすすめ
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              現金を持っていても増えない、でもリスクは取りたくない方へ
            </p>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {[
              { icon: '💵', title: '現金で多額の資産を\n保有する方' },
              { icon: '👨‍👩‍👧‍👦', title: '相続を見据えた\n資産対策をしたい方' },
              { icon: '📊', title: '節税しながら\n収入も欲しい方' },
              { icon: '😤', title: '株や不動産で\n損失経験がある方' },
              { icon: '🌍', title: '社会貢献にも\n関心がある方' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-bg-cream p-8 px-6 rounded-xl text-center relative transition-all duration-300 hover:-translate-y-2 hover:shadow-medium group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-t-xl scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                <div className="w-15 h-15 mx-auto mb-5 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-text-dark leading-snug whitespace-pre-line">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Deep Dive Section */}
      <section className="py-24 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Issues
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              日本人の資産を蝕む "五重苦"
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
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
            <div key={i} className={`grid grid-cols-2 gap-16 items-center mb-20 ${i % 2 === 1 ? 'direction-rtl' : ''}`}>
              <div className={i % 2 === 1 ? 'direction-ltr' : ''}>
                <h3 className="text-2xl mb-4 flex items-center gap-3">{problem.title}</h3>
                <p className="text-text-body mb-6 leading-relaxed">{problem.desc}</p>
                <div className="inline-flex items-baseline gap-2 bg-white py-4 px-6 rounded-lg shadow-soft">
                  <span className="font-serif text-3xl font-bold text-primary">{problem.stat.number}</span>
                  <span className="text-sm text-text-light">{problem.stat.label}</span>
                </div>
              </div>
              <div className={`bg-white rounded-2xl p-8 shadow-soft ${i % 2 === 1 ? 'direction-ltr' : ''}`}>
                <div className="w-full h-48 bg-bg-cream rounded-lg flex items-center justify-center text-text-light">
                  チャート表示エリア
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inheritance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Solution
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              相続税を"ほぼゼロ"に圧縮する方法
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              2,500万円のトレーラーハウスの場合
            </p>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center mb-12">
            <div className="bg-bg-cream rounded-2xl p-12 text-center border-2 border-accent">
              <span className="text-xs font-bold tracking-wider uppercase mb-6 inline-block py-2 px-4 bg-accent/10 text-accent rounded-full">
                BEFORE
              </span>
              <div className="text-5xl font-serif font-bold text-accent mb-2">1億円</div>
              <p className="text-sm text-text-light mb-6">現金のまま保有</p>
              <div className="bg-white p-4 rounded-lg text-xs text-text-body">
                相続税評価額＝1億円（そのまま課税対象）
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-secondary">
              <span className="text-3xl">→</span>
              <span className="text-xs font-semibold tracking-wider">転換</span>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl p-12 text-center border-2 border-primary">
              <span className="text-xs font-bold tracking-wider uppercase mb-6 inline-block py-2 px-4 bg-primary/10 text-primary rounded-full">
                AFTER
              </span>
              <div className="text-5xl font-serif font-bold text-primary mb-2">2,000万円</div>
              <p className="text-sm text-text-light mb-6">トレーラーハウス4台に転換</p>
              <div className="bg-white p-4 rounded-lg text-xs text-text-body">
                4年後の相続評価額＝1台500万円×4台＝2,000万円
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-12 text-center text-white">
            <h3 className="text-white text-2xl mb-4">基礎控除内に収まれば...</h3>
            <span className="font-serif text-6xl font-bold text-secondary block mb-4">相続税 0円</span>
            <p className="opacity-90 text-base">
              基礎控除3,600万円（配偶者＋子1人の場合4,200万円）を活用すれば、<br />
              評価額2,000万円の資産は非課税で相続可能です。
            </p>
          </div>
        </div>
      </section>

      {/* Depreciation Section */}
      <section className="py-24 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-2xl p-10 shadow-soft">
              <h3 className="text-center mb-8 text-lg">4年間の減価償却イメージ</h3>
              <div className="flex items-end justify-between h-[250px] px-4 pb-4 border-b-2 border-bg-cream mb-4">
                {[1, 2, 3, 4].map((year) => (
                  <div key={year} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-full bg-gradient-to-t from-primary to-primary-light rounded-t-lg"></div>
                    <span className="font-serif text-base font-bold text-primary">625万</span>
                    <span className="text-xs text-text-light">{year}年目</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-text-light mt-4">
                ※ 2,500万円を4年で均等償却した場合
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-6">
                <div className="w-8 h-px bg-primary-light"></div>
                Depreciation
                <div className="w-8 h-px bg-primary-light"></div>
              </div>
              <h3 className="text-3xl mb-6">4年償却で"実質利回り"はさらに高く</h3>
              <p className="text-text-body mb-6 leading-relaxed">
                トレーラーハウスは車両扱いのため、法定耐用年数はわずか4年。
                毎年の減価償却費を経費計上することで、
                表面利回り10%を超える"実質利回り"を実現できます。
              </p>

              <div className="bg-white rounded-xl p-8 border-l-4 border-secondary">
                <h4 className="text-base mb-4 text-primary">2,500万円投資時の年間収支（概算）</h4>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'リース収益', value: '+200万円' },
                    { label: '減価償却費（経費）', value: '−625万円' },
                    { label: '課税所得の圧縮効果', value: '約200万円相当' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm font-bold text-primary pt-3 mt-2 border-t border-bg-cream">
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
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Simulation
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              10年間の収益シミュレーション
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              初期投資から10年後までの収益を試算
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
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
              <div key={i} className="bg-bg-cream rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong">
                <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 text-center">
                  <div className="text-sm opacity-80 mb-2">{sim.units}</div>
                  <div className="font-serif text-4xl font-bold">
                    {sim.price}
                    <span className="text-base font-normal">万円</span>
                  </div>
                </div>
                <div className="p-8">
                  {sim.items.map((item, j) => (
                    <div key={j} className="flex justify-between py-4 border-b border-white last:border-0">
                      <span className="text-sm text-text-light">{item.label}</span>
                      <span className="font-semibold text-text-dark">{item.value}</span>
                    </div>
                  ))}
                  <div className="bg-white -mx-8 -mb-8 mt-4 p-6 px-8 flex justify-between items-center">
                    <span className="font-semibold text-text-dark">10年後の手取り</span>
                    <span className="font-serif text-3xl font-bold text-primary">{sim.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-bg-cream rounded-xl border-2 border-dashed border-secondary">
            <p className="text-sm text-text-light">
              ※ 上記は概算シミュレーションです。<strong className="text-text-dark">減価償却による節税効果</strong>
              を含めると、<br />
              実質的な利回りはさらに高くなります。詳細シミュレーションは個別相談にてご案内いたします。
            </p>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="max-w-[1200px] mx-auto px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-secondary text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-secondary"></div>
              Social Impact
              <div className="w-8 h-px bg-secondary"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] text-white leading-snug mb-4">
              社会貢献にもなる投資
            </h2>
            <p className="text-white/70 text-base max-w-[600px] mx-auto">
              収益を得ながら、地域と環境に貢献できます
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
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
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                <div className="w-18 h-18 mx-auto mb-6 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center text-4xl">
                  {sdg.icon}
                </div>
                <h3 className="text-white text-lg mb-3">{sdg.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{sdg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-24 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
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

            <div className="bg-white rounded-2xl p-12 relative overflow-hidden shadow-soft">
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
                        {typeof row.value === 'string' ? row.value : row.value}
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
      <section id="contact" className="py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute top-[-25%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,169,98,0.15)_0%,transparent_70%)] rounded-full"></div>
        <div className="max-w-[1200px] mx-auto px-12 relative z-10">
          <div className="text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] text-white mb-4">
              あなたに最適な<br />
              シミュレーションをご案内します
            </h2>
            <p className="text-white/70 text-lg mb-12">
              トランスフォーム型トレーラーハウス運用に関するお問い合わせはこちら
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
    </>
  )
}

export default TrailerHousePage

