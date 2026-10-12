import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 border border-[#E56515]/30 bg-[#E56515]/10 text-[#E56515] ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E56515] animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
        {title}
      </h2>
      <div
        className={`w-7 h-[2.5px] bg-[#E56515] rounded-full mt-1.5 mb-4 shadow-[0_0_10px_rgba(229,101,21,0.5)] ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
