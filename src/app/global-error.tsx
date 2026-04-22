"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="ja">
      <body className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-md">
          <p className="text-[#C9A84C] text-sm font-medium tracking-[0.3em] uppercase mb-4">Error</p>
          <h1 className="text-3xl font-bold text-[#1a2e5a] mb-4">
            予期しないエラーが発生しました
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            大変申し訳ありません。<br />
            しばらくしてから再度お試しください。
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-medium tracking-wide transition-all"
            style={{ background: "#1a2e5a" }}
          >
            もう一度試す
          </button>
        </div>
      </body>
    </html>
  );
}
