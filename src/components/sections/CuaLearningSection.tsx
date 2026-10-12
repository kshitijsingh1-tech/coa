"use client";

import React from "react";
import { NumberConverter } from "@/components/converter/NumberConverter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cpu, Binary, Layers } from "lucide-react";

export function CuaLearningSection() {
  return (
    <section
      id="cua-learning"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E56515]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <SectionHeading
        badge="Computer Organization & Architecture"
        title="CUA Learning — Number-System Converter"
        subtitle="Interactive radix and positional number-system conversion tool designed for students of Computer Architecture. Converts between Binary (Base 2), Octal (Base 8), Decimal (Base 10), and Hexadecimal (Base 16) with arbitrary precision BigInt."
        align="center"
      />

      {/* Main Interactive Number-System Converter */}
      <div className="mb-16">
        <NumberConverter />
      </div>

      {/* Educational Architecture Reference Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Positional Radix Notation */}
        <div className="bento-card p-6 space-y-3 bg-white border border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-[#E56515]/10 border border-[#E56515]/20 flex items-center justify-center text-[#E56515]">
            <Binary size={20} />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Positional Weight Notation
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            In positional number systems of radix <code className="text-[#E56515] bg-orange-50 px-1 rounded font-mono">r</code>, every digit <code className="text-[#E56515] bg-orange-50 px-1 rounded font-mono">d_i</code> contributes <code className="text-[#E56515] bg-orange-50 px-1 rounded font-mono">d_i &times; r^i</code> to the total value. Binary uses powers of 2, Octal powers of 8, and Hexadecimal powers of 16.
          </p>
          <div className="pt-2 font-mono text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            V = &sum; (d_i &times; r^i) for integer &amp; fractional positions
          </div>
        </div>

        {/* Card 2: Microarchitecture Bit Alignment */}
        <div className="bento-card p-6 space-y-3 bg-white border border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-[#E56515]/10 border border-[#E56515]/20 flex items-center justify-center text-[#E56515]">
            <Cpu size={20} />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Word Alignment &amp; Nibbles
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Hexadecimal is universally favored in computer systems because 1 hexadecimal digit maps directly to 4 binary bits (one nibble). An 8-bit byte maps to exactly 2 hex characters, perfectly mirroring memory addresses.
          </p>
          <div className="pt-2 font-mono text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            1 Byte = 8 Bits = 2 Hex Digits [0x00 to 0xFF]
          </div>
        </div>

        {/* Card 3: BigInt & Floating Precision Safety */}
        <div className="bento-card p-6 space-y-3 bg-white border border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
            <Layers size={20} />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Arbitrary-Precision BigInt
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Standard JavaScript <code className="text-[#E56515] bg-orange-50 px-1 rounded font-mono">Number</code> loses integer precision beyond <code className="text-[#E56515] bg-orange-50 px-1 rounded font-mono">2^53 - 1</code>. This engine is built with native <code className="text-[#E56515] bg-orange-50 px-1 rounded font-mono">BigInt</code> to handle 64-bit and 128-bit architectural numbers with exact bit precision.
          </p>
          <div className="pt-2 font-mono text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
            Number.MAX_SAFE_INTEGER = 9,007,199,254,740,991
          </div>
        </div>
      </div>
    </section>
  );
}
