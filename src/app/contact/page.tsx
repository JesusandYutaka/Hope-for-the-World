import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="コンタクトフォーム"
        subtitle={"イエス様について知りたい方、\n祈ってほしいことがある方、\nお気軽にご連絡ください。\n\n返信に少しお時間をいただく場合もありますが、\n一つひとつ丁寧にお返事させていただきます。"}
      />
      <section className="py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
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
              <label className="block text-sm font-medium text-[#1a2e5a] mb-2">お問合せ内容</label>
              <select className="w-full px-4 py-3 rounded-xl border border-[#e8f0fe] focus:outline-none focus:border-[#C9A84C] text-sm text-gray-600 transition-colors bg-white">
                <option value="">選択してください</option>
                <option>イエス様を信じてみたい</option>
                <option>祈りのリクエスト</option>
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
