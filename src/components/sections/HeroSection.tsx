"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Sparkles, Terminal, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function HeroSection() {
  const { profile, socials } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-[#E56515]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#FBA45C]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial intro & credentials (Col span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Student ID & Branch Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#E56515]/10 border border-[#E56515]/25 text-[#E56515] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#E56515] animate-pulse" />
              <span>{profile.rollNumber}</span>
              <span className="text-slate-400">•</span>
              <span>{profile.branch}</span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-sans leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#E56515] to-[#f06e1d] bg-clip-text text-transparent">
                  {profile.name}
                </span>
                .
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight">
                {profile.tagline}
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {profile.shortBio}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#cua-learning"
                className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-[#E56515]/25"
              >
                <span>Explore CUA Converter</span>
                <Terminal size={16} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-medium text-sm transition-all duration-200"
              >
                <span>About Background</span>
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-slate-600 hover:text-slate-900 text-sm font-mono transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <SocialLinks iconSize={18} />
            </div>
          </motion.div>

          {/* Right Column: Visual Persona / Profile Badge (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#E56515] to-[#FBA45C] opacity-20 blur-xl group-hover:opacity-30 transition duration-1000" />

              <div className="relative bento-card p-5 bg-white border border-slate-200 shadow-xl">
                {/* Visual Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
                  <Image
                    src={profile.avatarUrl}
                    alt={`${profile.name} - Computer Science Student`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Micro Terminal Badge */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50/90 border border-slate-200 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="text-[#E56515] font-semibold flex items-center gap-1.5">
                      <Sparkles size={12} />
                      Academic Status
                    </span>
                    <span className="text-slate-500">{profile.semester}</span>
                  </div>
                  <div className="text-slate-900 font-semibold truncate">
                    {profile.institution}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    Roll: {profile.rollNumber} • Core: COA &amp; Systems
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-xs font-mono uppercase tracking-widest"
          >
            <span>Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={14} className="text-[#E56515]" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
