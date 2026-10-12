"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Send, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const { profile, socials } = PORTFOLIO_DATA;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email && !formState.message) return;

    // Direct mailto generation with configured email
    const subject = encodeURIComponent(
      `Inquiry from ${formState.name || "Portfolio Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Direct Channels"
        title="Get in Touch"
        subtitle="Open to technical inquiries regarding Computer Architecture, systems programming collaborations, academic research, and engineering opportunities."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Side: Editorial & Direct Channels Info (Col span 5) */}
        <div className="lg:col-span-5 bento-card p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Let&apos;s Connect
            </h3>
            <div className="w-7 h-[2.5px] bg-[#E56515] rounded-full mt-1.5 mb-4 shadow-[0_0_10px_rgba(229,101,21,0.5)]" />
            <p className="text-sm text-slate-600 leading-relaxed">
              Have questions about the CUA Number-System Converter, microarchitecture pipeline analysis, or engineering opportunities? Reach out directly.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[11px] font-mono text-[#E56515] uppercase font-semibold block">
              Direct Student Email
            </span>
            <a
              href={`mailto:${socials.email}`}
              className="text-sm font-semibold text-slate-900 hover:text-[#E56515] transition-colors break-all flex items-center gap-2"
            >
              <span>{socials.email}</span>
              <ArrowUpRight size={14} className="text-slate-400 shrink-0" />
            </a>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs font-mono text-slate-600">
            <div className="text-slate-900 font-semibold">{profile.institution}</div>
            <div>Roll Number: {profile.rollNumber} • {profile.branch}</div>
            <div className="text-[#E56515] font-medium pt-1">● Available for Systems Research &amp; Internships</div>
          </div>
        </div>

        {/* Right Side: The "Get in Touch" Bento Card (Col span 7) */}
        <div className="lg:col-span-7 bento-card p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Get in Touch
            </h3>
            <div className="w-7 h-[2.5px] bg-[#E56515] rounded-full mt-1.5 mb-4 shadow-[0_0_10px_rgba(229,101,21,0.5)]" />
          </div>

          {/* Social Buttons Row */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#E56515]/60 hover:bg-orange-50/50 text-slate-700 hover:text-slate-900 text-xs font-medium flex items-center justify-center gap-2 transition-all duration-150"
            >
              <GithubIcon size={16} />
              <span className="truncate">GitHub</span>
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#E56515]/60 hover:bg-orange-50/50 text-slate-700 hover:text-slate-900 text-xs font-medium flex items-center justify-center gap-2 transition-all duration-150"
            >
              <LinkedinIcon size={16} />
              <span className="truncate">LinkedIn</span>
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#E56515]/60 hover:bg-orange-50/50 text-slate-700 hover:text-slate-900 text-xs font-medium flex items-center justify-center gap-2 transition-all duration-150"
            >
              <XTwitterIcon size={15} />
              <span className="truncate">X (Twitter)</span>
            </a>
          </div>

          {/* Contact Input Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Name"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#E56515] focus:ring-1 focus:ring-[#E56515] transition-colors"
              />

              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Email"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#E56515] focus:ring-1 focus:ring-[#E56515] transition-colors"
              />
            </div>

            <textarea
              rows={4}
              required
              value={formState.message}
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Message"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#E56515] focus:ring-1 focus:ring-[#E56515] transition-colors resize-none"
            />

            <button
              type="submit"
              className="btn-orange w-full sm:w-auto px-7 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-[#E56515]/20"
            >
              {submitted ? (
                <>
                  <Check size={16} />
                  <span>Opening Mail Client...</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom "Feel Free to Reach Out" Callout */}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-orange-50/60 via-white to-orange-50/30 grid-mesh p-10 sm:p-14 text-center max-w-3xl mx-auto shadow-xl relative overflow-hidden">
        {/* Ambient Clockwork warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E56515]/10 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Circular Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-[#E56515]/60 p-0.5 bg-white shadow-lg shadow-[#E56515]/20 relative">
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            fill
            className="object-cover rounded-full"
          />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Feel Free to Reach Out
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 mb-6">
          Let&apos;s start a productive conversation
        </p>

        <a
          href={`mailto:${socials.email}`}
          className="btn-orange inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold shadow-lg shadow-[#E56515]/25"
        >
          <Mail size={14} />
          <span>Send Email</span>
        </a>
      </div>
    </section>
  );
}
