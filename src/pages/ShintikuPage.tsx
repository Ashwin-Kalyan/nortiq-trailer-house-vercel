import { Link } from 'react-router-dom'

const ShintikuPage = () => {
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
                <span>🏠</span>
                <span>NEW BUILT INN</span>
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] text-white leading-tight mb-6">
                新築戸建旅館運用
              </h1>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                一棟マンションや区分所有ではなく、<br />
                戸建を建築して旅館運用を行い収益を得る投資です。<br />
                新築ならではの安心感と、年<span className="text-secondary">10%</span>の高利回りを両立。
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: '💰', text: '2,500万円〜' },
                  { icon: '📈', text: '年間250万円収益' },
                  { icon: '🔧', text: '修繕不安が少ない' },
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
                  backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')`,
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

      {/* Inquiry Prompt Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-12">
          <div className="text-center">
            <div className="w-25 h-25 mx-auto mb-8 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-6xl shadow-medium">
              📋
            </div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-6 leading-relaxed">
              新築戸建旅館運用について<br />
              詳しく知りたい方へ
            </h2>
            <p className="text-lg text-text-body mb-12 leading-relaxed">
              新築戸建旅館運用は、お客様一人ひとりのご状況に合わせた<br />
              オーダーメイドのご提案をさせていただいております。
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-primary-light/8 border-2 border-primary rounded-2xl p-12 mb-12">
              <p className="font-serif text-xl font-semibold text-primary leading-relaxed">
                新築戸建旅館運用のシミュレーションが知りたい方、<br />
                ご興味がある方は、お電話またはお問い合わせフォームより<br />
                お気軽にご連絡ください。
              </p>
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="tel:0120-929-727"
                className="inline-flex items-center gap-3 py-5 px-12 text-base font-semibold no-underline rounded-lg transition-all duration-300 bg-secondary text-text-dark shadow-medium hover:-translate-y-1 hover:shadow-strong"
              >
                <span>📞</span>
                0120-929-727
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 py-5 px-12 text-base font-semibold no-underline rounded-lg transition-all duration-300 bg-[#06c755] text-white shadow-medium hover:bg-[#05b04a] hover:-translate-y-1 hover:shadow-strong"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINE公式アカウント
              </a>
              <Link
                to="/operation#contact"
                className="inline-flex items-center gap-3 py-5 px-12 text-base font-semibold no-underline rounded-lg transition-all duration-300 bg-gradient-to-br from-primary to-primary-light text-white shadow-medium hover:-translate-y-1 hover:shadow-strong"
              >
                <span>✉️</span>
                お問い合わせフォーム
              </Link>
            </div>

            <p className="mt-8 text-sm text-text-light">※ 相談は無料です。専門スタッフが丁寧にご説明いたします。</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-bg-warm">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-primary-light text-xs font-semibold tracking-widest uppercase mb-4">
              <div className="w-8 h-px bg-primary-light"></div>
              Gallery
              <div className="w-8 h-px bg-primary-light"></div>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] leading-snug mb-4">
              実際の物件をご覧ください
            </h2>
            <p className="text-base text-text-light max-w-[600px] mx-auto">
              高品質な設備と洗練されたデザイン
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', label: '外観', large: true },
              { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', label: 'リビング', large: false },
              { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', label: 'キッチン', large: false },
              { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80', label: '浴室', large: false },
              { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', label: 'ベッドルーム', large: false },
              { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', label: 'デッキ', large: false },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group ${
                  item.large ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-4 left-4 text-white font-medium text-sm z-20 opacity-0 translate-y-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-24 bg-white">
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
              まずはお気軽に<br />
              ご相談ください
            </h2>
            <p className="text-white/70 text-lg mb-12">
              新築戸建旅館運用に関するお問い合わせはこちら
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

export default ShintikuPage

