"use client";

import { useState } from "react";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center p-6 gap-10 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">
          8mirrors Design Sandbox
        </h1>
        <p className="text-neutral-600">
          Pencil → Code → Preview 파이프라인 테스트
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-xs uppercase tracking-wider text-neutral-400">
          From design/product-card.pen
        </p>
        <ProductCard
          title="메디큐브 PDRN 핑크 크림"
          subtitle="탄력·주름 개선 라인"
          price="₩32,000"
          rating="4.8"
        />
      </div>

      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-700 active:scale-95 transition-all shadow-lg"
      >
        모달 열기
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
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              안녕하세요
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
