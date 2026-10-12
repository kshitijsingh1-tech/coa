"use client";

import React from "react";
import { BASE_OPTIONS, NumberBase } from "@/lib/number-converter";
import { ChevronDown } from "lucide-react";

interface NumberSystemSelectProps {
  id: string;
  label: string;
  value: NumberBase;
  onChange: (newBase: NumberBase) => void;
  disabled?: boolean;
}

export function NumberSystemSelect({
  id,
  label,
  value,
  onChange,
  disabled = false,
}: NumberSystemSelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-mono font-medium text-slate-600">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value) as NumberBase)}
          className="w-full appearance-none bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 pr-10 focus:outline-none focus:border-[#E56515] focus:ring-1 focus:ring-[#E56515] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
        >
          {BASE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value} className="bg-white text-slate-900">
              {option.name} [{option.label}]
            </option>
          ))}
        </select>
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
