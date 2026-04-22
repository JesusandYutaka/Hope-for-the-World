"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center max-w-md">
        <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Error</p>
        <h1 className="text-3xl font-serif font-bold text-navy mb-4">
          エラーが発生しました
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          申し訳ありません。問題が発生しました。<br />
          しばらくしてから再度お試しください。
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy hover:bg-navy-dark text-white text-sm font-medium tracking-wide transition-all hover:scale-[1.02]"
        >
          もう一度試す
        </button>
      </div>
    </section>
  );
}
