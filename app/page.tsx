"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          8mirrors Design Sandbox
        </h1>
        <p className="text-neutral-600">
          Pencil → Code → Preview 파이프라인 테스트
        </p>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-600/30"
      >
        모달 열기 ✨
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 animate-[fadeIn_200ms_ease-out]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl p-6 animate-[slideUp_300ms_ease-out]"
          >
            <div className="w-12 h-1 bg-neutral-300 rounded-full mx-auto mb-4 sm:hidden" />
            <h2 className="text-xl font-bold text-indigo-600 mb-2">
              반가워요 👋
            </h2>
            <p className="text-neutral-600 mb-6">
              이 모달은 300ms ease-out 애니메이션으로 아래에서 올라왔어요. 실제
              PR Preview 환경에서 이 인터랙션을 눈으로 확인할 수 있습니다.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 bg-neutral-900 text-white rounded-full font-medium"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
