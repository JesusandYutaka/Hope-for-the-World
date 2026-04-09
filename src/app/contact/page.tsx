import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministry Request"
        title="ミニストリー依頼"
        subtitle={"メッセージ、賛美奉仕、その他のご依頼、\nご質問はこちらからお気軽にどうぞ。"}
      />
      <section className="py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Request types */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: "🎤", label: "メッセージ依頼" },
              { icon: "🎵", label: "賛美奉仕依頼" },
              { icon: "✉️", label: "その他" },
            ].map((t) => (
              <div key={t.label} className="p-4 rounded-xl border border-[#e8f0fe] text-center hover:border-[#C9A84C]/40 transition-all cursor-pointer">
                <span className="text-2xl">{t.icon}</span>
                <p className="text-xs text-[#1a2e5a] font-medium mt-2">{t.label}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a2e5a] mb-2">お名前 *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm transition-colors"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a2e5a] mb-2">メールアドレス *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm transition-colors"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a2e5a] mb-2">依頼の種類</label>
              <select className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm text-gray-600 transition-colors bg-white">
                <option value="">選択してください</option>
                <option>メッセージ依頼</option>
                <option>賛美奉仕依頼</option>
                <option>その他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a2e5a] mb-2">日程・詳細</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm transition-colors resize-none"
                placeholder="ご依頼の詳細、ご希望の日程などをお書きください。"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#1a2e5a] hover:bg-[#0d1b3e] text-white font-medium rounded-full transition-all hover:scale-[1.02] text-sm tracking-wide"
            >
              送信する
            </button>
            <p className="text-xs text-gray-400 text-center">※ このフォームは現在準備中です</p>
          </form>
        </div>
      </section>
    </>
  );
}
