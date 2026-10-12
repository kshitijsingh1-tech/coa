"use client";

import React, { useState, useId, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeftRight,
  Copy,
  Check,
  RotateCcw,
  AlertCircle,
  Sparkles,
  Info,
  Binary,
  Hash,
} from "lucide-react";
import {
  NumberBase,
  BASE_OPTIONS,
  convertNumber,
  CONVERSION_PRESETS,
  ConversionPreset,
} from "@/lib/number-converter";
import { NumberSystemSelect } from "./NumberSystemSelect";

export function NumberConverter() {
  const [fromBase, setFromBase] = useState<NumberBase>(10);
  const [toBase, setToBase] = useState<NumberBase>(2);
  const [inputValue, setInputValue] = useState<string>("255");
  const [copied, setCopied] = useState<boolean>(false);
  const [isSwapping, setIsSwapping] = useState<boolean>(false);

  const inputId = useId();
  const outputId = useId();

  // Run real-time conversion
  const result = useMemo(() => {
    return convertNumber(inputValue, fromBase, toBase);
  }, [inputValue, fromBase, toBase]);

  // Handle panel swap
  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => setIsSwapping(false), 400);

    const oldFrom = fromBase;
    const oldTo = toBase;
    setFromBase(oldTo);
    setToBase(oldFrom);

    // If there is valid output, move it to input so the user can continue converting
    if (result.success && result.outputValue) {
      setInputValue(result.outputValue);
    }
  };

  const handleCopy = async () => {
    if (!result.outputValue) return;
    try {
      await navigator.clipboard.writeText(result.outputValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleApplyPreset = (preset: ConversionPreset) => {
    setFromBase(preset.base);
    // If target is same base, switch target to an intuitive alternative
    if (toBase === preset.base) {
      setToBase(preset.base === 2 ? 10 : 2);
    }
    setInputValue(preset.value);
  };

  const fromOption = BASE_OPTIONS.find((b) => b.value === fromBase);
  const toOption = BASE_OPTIONS.find((b) => b.value === toBase);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Converter Card */}
      <div className="bento-card p-6 sm:p-8 bg-white border border-slate-200 relative overflow-hidden shadow-xl">
        {/* Subtle decorative glow header */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#E56515]/60 to-transparent" />

        {/* Preset Pills */}
        <div className="mb-6 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#E56515]" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
              Quick Architecture Presets:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CONVERSION_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-[#E56515]/50 hover:bg-orange-50/50 transition-all duration-150 flex items-center gap-1.5 shadow-xs"
                title={preset.description}
              >
                <span className="font-medium">{preset.label}</span>
                <span className="text-[10px] text-slate-500">[{preset.value}]</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dual Converter Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
          {/* Input Panel (Col span 5) */}
          <div className="lg:col-span-5 bento-card-subtle p-5 space-y-4 bg-slate-50/80 border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#E56515]/10 text-[#E56515] border border-[#E56515]/25">
                SOURCE RADIX
              </span>
              {inputValue && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
                  title="Clear input"
                >
                  <RotateCcw size={12} />
                  <span>Clear</span>
                </button>
              )}
            </div>

            <NumberSystemSelect
              id={`select-from-${inputId}`}
              label="Input Number System"
              value={fromBase}
              onChange={setFromBase}
            />

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
                <label htmlFor={`input-${inputId}`}>Input Value</label>
                <span className="text-slate-500">
                  Allowed: {fromOption?.allowedCharsDescription}
                </span>
              </div>
              <input
                id={`input-${inputId}`}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`e.g. ${fromBase === 16 ? "CAFE" : fromBase === 2 ? "10101010" : "255"}`}
                spellCheck={false}
                autoComplete="off"
                className={`w-full font-mono text-lg sm:text-xl font-bold bg-white border rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all duration-200 shadow-xs ${
                  !result.success
                    ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    : "border-slate-300 focus:border-[#E56515] focus:ring-1 focus:ring-[#E56515]"
                }`}
              />
            </div>
          </div>

          {/* Swap Button (Col span 1) */}
          <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
            <motion.button
              type="button"
              onClick={handleSwap}
              animate={{ rotate: isSwapping ? 180 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              aria-label="Swap input and output number systems"
              className="btn-orange p-3.5 rounded-full"
            >
              <ArrowLeftRight size={18} className="rotate-90 lg:rotate-0" />
            </motion.button>
          </div>

          {/* Output Panel (Col span 5) */}
          <div className="lg:col-span-5 bento-card-subtle p-5 space-y-4 bg-slate-50/80 border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#E56515]/10 text-[#E56515] border border-[#E56515]/25">
                TARGET RADIX
              </span>
              {result.outputValue && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-xs text-[#E56515] hover:text-[#f06e1d] font-semibold flex items-center gap-1 transition-colors font-mono"
                  title="Copy result to clipboard"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? "Copied!" : "Copy Result"}</span>
                </button>
              )}
            </div>

            <NumberSystemSelect
              id={`select-to-${outputId}`}
              label="Target Output System"
              value={toBase}
              onChange={setToBase}
            />

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
                <label htmlFor={`output-${outputId}`}>Converted Output</label>
                <span className="text-slate-500">{toOption?.name}</span>
              </div>
              <div className="relative">
                <input
                  id={`output-${outputId}`}
                  type="text"
                  readOnly
                  value={result.success ? result.formattedOutput || "0" : "—"}
                  placeholder="Awaiting valid input..."
                  className="w-full font-mono text-lg sm:text-xl font-bold bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-[#E56515] selection:bg-[#E56515]/20 cursor-text select-all shadow-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Error Notification Banner */}
        <AnimatePresence>
          {!result.success && result.errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5"
            >
              <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Validation Error</p>
                <p className="text-rose-700 text-xs mt-0.5">{result.errorMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Architectural Insights Card */}
        {result.success && result.outputValue && (
          <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-slate-500 flex items-center gap-1.5">
                <Binary size={13} className="text-[#E56515]" />
                <span>Bit Width</span>
              </div>
              <div className="text-slate-900 font-bold text-sm">
                {result.bitLength} bits
                <span className="text-[10px] text-slate-500 ml-1.5">
                  ({Math.ceil((result.bitLength || 1) / 8)} bytes)
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-slate-500 flex items-center gap-1.5">
                <Hash size={13} className="text-[#E56515]" />
                <span>Decimal Value</span>
              </div>
              <div className="text-slate-900 font-bold text-sm truncate">
                {result.decimalEquivalent}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-slate-500 flex items-center gap-1.5">
                <Info size={13} className="text-slate-600" />
                <span>Nibble Grouping</span>
              </div>
              <div className="text-[#E56515] font-bold text-xs truncate">
                {result.byteGroups || "—"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
