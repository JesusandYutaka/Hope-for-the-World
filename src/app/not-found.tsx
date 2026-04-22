import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center max-w-md">
        <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">404</p>
        <h1 className="text-3xl font-serif font-bold text-navy mb-4">
          ページが見つかりません
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy hover:bg-navy-dark text-white text-sm font-medium tracking-wide transition-all hover:scale-[1.02]"
        >
          トップページへ戻る
        </Link>
      </div>
    </section>
  );
}
