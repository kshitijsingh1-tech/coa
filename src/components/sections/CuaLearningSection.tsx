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

      
    </section>
  );
}
