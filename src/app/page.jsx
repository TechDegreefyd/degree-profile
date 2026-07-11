"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <button
        onClick={() => router.push("/login")}
        className="px-8 py-3 bg-[#0D3B59] text-white rounded-lg font-semibold text-[16px] hover:bg-[#092c42] transition-colors"
      >
        Login
      </button>
    </div>
  );
}