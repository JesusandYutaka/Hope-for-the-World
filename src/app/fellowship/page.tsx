import PageHero from "@/components/PageHero";

const igIcon = "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z";
const igBg = "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)";
const chevron = "M9 5l7 7-7 7";

export default function FellowshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Fellowship"
        title="交わり"
        subtitle="キリストにある兄弟姉妹と共に歩みましょう。"
      />
      {/* 交わりとは */}
      <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-[#0d1b3e]/5 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[#1a2e5a] font-serif font-bold text-xl md:text-2xl leading-relaxed">
              「ある人たちの習慣に倣って自分たちの集まりをやめたりせず、<br />むしろ励まし合いましょう。<br />その日が近づいていることが分かっているのですから、<br />ますます励もうではありませんか。」
            </p>
            <p className="text-[#C9A84C] text-sm mt-2">ヘブル 10:25</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                number: "01",
                title: "薪の譬え",
                text: "薪が1本ではすぐに火は消えてしまいますが、多くの薪があれば強く燃え続けることができます。",
              },
              {
                number: "02",
                title: "共に歩む",
                text: "それと同じように、イエス様を信じた後、イエス様を愛する人たちと共に交わることによって信仰は強められます。",
              },
              {
                number: "03",
                title: "教会とは",
                text: "イエス様を中心とした集まりはイエス様の体である「教会」と呼ばれ、神の御心は教会を通して行われていきます。",
              },
              {
                number: "04",
                title: "つながる",
                text: "教会に繋がっていない方は、ぜひ、能勢川キリスト教会へお越しください。日本国内であれば、近隣の信頼できる教会を紹介することも可能です。その際は、コンタクトフォームよりご連絡ください。",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="relative overflow-hidden p-8 rounded-2xl bg-white border border-[#e8f0fe] shadow-sm hover:shadow-lg hover:border-[#C9A84C]/40 transition-all group"
              >
                <span className="absolute top-4 right-5 text-6xl font-bold text-[#e8f0fe] select-none leading-none group-hover:text-[#C9A84C]/10 transition-colors">
                  {item.number}
                </span>
                <div className="w-8 h-0.5 bg-[#C9A84C] mb-4" />
                <h3 className="text-[#1a2e5a] font-serif font-bold text-base mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.text}</p>
              </div>
            ))}
          </div>

          {/* コンタクトボタン */}
          <div className="flex justify-center pt-20">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-[#1a2e5a] hover:bg-[#0d1b3e] text-white font-medium text-sm tracking-wide transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              コンタクトフォーム
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* 教会HP */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">教会HP</h2>
            </div>
            <div className="space-y-4">

              {/* お知らせバナー */}
              <div className="relative overflow-hidden rounded-2xl p-6 border border-[#C9A84C]/20"
                style={{ background: "linear-gradient(135deg, #fffdf5 0%, #f0f6ff 100%)" }}>
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-20"
                  style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

                <div className="relative flex flex-wrap gap-2 mb-4">
                  {["祈り会", "聖書勉強会", "賛美の集い"].map((tag) => (
                    <span key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium tracking-wider"
                      style={{ background: "rgba(201,168,76,0.12)", color: "#b8922a", border: "1px solid rgba(201,168,76,0.35)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="relative text-[#1a2e5a] font-medium leading-relaxed mb-1">
                  教会にて、定期的に集いを開催しています。
                </p>
                <p className="relative text-gray-500 text-sm">
                  どなたでも大歓迎です。詳細はHPまたはInstagramをご覧ください。
                </p>
              </div>

              <a href="https://nosegawa.japan-mb.com" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a2e5a]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1a2e5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1">兵庫県川西市 — プロテスタント教会</p>
                  <p className="font-bold text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors">能勢川キリスト教会</p>
                  <p className="text-gray-500 text-sm mt-1">緑の木々に囲まれた森の中の教会。聖書的・伝道的・平和的な開かれた教会です。</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#C9A84C] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={chevron} />
                </svg>
              </a>

              <a href="https://www.instagram.com/mb_nosegawa.church?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl border border-[#e8f0fe] hover:border-[#C9A84C]/40 hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: igBg }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d={igIcon} /></svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1">Instagram</p>
                  <p className="font-bold text-[#1a2e5a] group-hover:text-[#C9A84C] transition-colors">@mb_nosegawa.church</p>
                  <p className="text-gray-500 text-sm mt-1">能勢川キリスト教会 公式Instagram</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#C9A84C] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={chevron} />
                </svg>
              </a>
            </div>
          </div>

          {/* コネクト */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-0.5 bg-[#C9A84C]" />
              <h2 className="text-xl font-serif font-bold text-[#1a2e5a]">コネクト</h2>
            </div>

            {/* Intro banner */}
            <div className="relative overflow-hidden rounded-2xl p-6 mb-8 border border-[#dbeafe]"
              style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #fefce8 100%)" }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-25"
                style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
              <p className="relative text-[#1a2e5a] font-medium text-sm leading-relaxed mb-1">
                SNSで繋がりませんか？
              </p>
              <p className="relative text-gray-500 text-sm leading-relaxed">
                日々の恵みや賛美、励ましのメッセージをSNSでもシェアしています。
              </p>
              <p className="relative text-gray-400 text-xs mt-3">
                ※ Facebook友達リクエストの際は、「サイトを見ました」と一言添えていただけると助かります。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <a href="https://www.instagram.com/love_jesus_yutaka/" target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-6 rounded-2xl bg-white border border-[#e8f0fe] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, #fff0f5 0%, #ffffff 100%)" }} />
                <div className="relative flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm" style={{ background: igBg }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d={igIcon} /></svg>
                </div>
                <div className="relative flex-1">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-0.5">Instagram</p>
                  <p className="font-bold text-[#1a2e5a] group-hover:text-[#e6683c] transition-colors text-sm">@love_jesus_yutaka</p>
                </div>
                <div className="relative w-7 h-7 rounded-full border border-[#e8f0fe] group-hover:border-[#e6683c]/40 flex items-center justify-center transition-colors flex-shrink-0">
                  <svg className="w-3 h-3 text-gray-300 group-hover:text-[#e6683c] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={chevron} />
                  </svg>
                </div>
              </a>

              <a href="https://www.facebook.com/share/1DoCGpCgwo/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-6 rounded-2xl bg-white border border-[#e8f0fe] hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)" }} />
                <div className="relative flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm" style={{ background: "#1877F2" }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="relative flex-1">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-0.5">Facebook</p>
                  <p className="font-bold text-[#1a2e5a] group-hover:text-[#1877F2] transition-colors text-sm">中島豊 Facebook</p>
                </div>
                <div className="relative w-7 h-7 rounded-full border border-[#e8f0fe] group-hover:border-[#1877F2]/40 flex items-center justify-center transition-colors flex-shrink-0">
                  <svg className="w-3 h-3 text-gray-300 group-hover:text-[#1877F2] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={chevron} />
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
