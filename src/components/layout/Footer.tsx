"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-end">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 hover:border-[#E56515]/60 hover:bg-orange-50/50 transition-all shadow-sm"
        >
          <span>Back to top</span>
          <ArrowUp size={13} className="text-[#E56515]" />
        </button>
      </div>
    </footer>
  );
}
