import React from "react";
import {
  GraduationCap,
  Download,
  Cpu,
  Terminal,
  Code,
  Layers,
  GitBranch,
  ExternalLink,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const { profile, academic, resume } = PORTFOLIO_DATA;

  const coreTools = [
    { name: "Python", icon: <Code size={20} className="text-[#FBA45C]" /> },
    { name: "FastAPI / Flask", icon: <Terminal size={20} className="text-[#E56515]" /> },
    { name: "C / C++", icon: <Cpu size={20} className="text-[#FBA45C]" /> },
    { name: "LLMs / Mistral", icon: <Layers size={20} className="text-[#E56515]" /> },
    { name: "COA / Hardware", icon: <Cpu size={20} className="text-[#CDCDCB]" /> },
    { name: "Git & Linux", icon: <GitBranch size={20} className="text-[#E56515]" /> },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Academic & Engineering Profile"
        title="About Me"
        subtitle="AI & Systems undergraduate focused on intelligent backends, computer architecture, and autonomous AI agents."
      />

      {/* Top Status & Language Pills (Matching reference top pill) */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-sm">
          <span className="text-base">🇮🇳</span>
          <span className="font-semibold text-slate-800">English, Hindi &amp; Punjabi</span>
          <span className="text-slate-400">•</span>
          <span className="text-[#E56515] font-semibold">Fluent</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#E56515] animate-pulse" />
          <span className="font-semibold text-slate-800">{profile.branch}</span>
          <span className="text-slate-400">•</span>
          <span className="text-[#E56515] font-semibold">{profile.semester}</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-sm">
          <GraduationCap size={14} className="text-[#E56515]" />
          <span className="text-slate-500">Roll No:</span>
          <span className="font-semibold text-slate-900">{profile.rollNumber}</span>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Bio Card (Col span 7) */}
        <div className="md:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Engineering Narrative
            </h3>
            <div className="w-7 h-[2.5px] bg-[#E56515] rounded-full mt-1.5 mb-4 shadow-[0_0_10px_rgba(229,101,21,0.5)]" />

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {profile.fullBio.map((paragraph, index) => (
                <p key={index} className="text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Education Timeline snippet */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-2">
              <GraduationCap size={15} className="text-[#E56515]" />
              <span>Current Degree &amp; Standing</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-sm font-bold text-slate-900">
                  {academic.education[0]?.degree}
                </span>
                <span className="text-xs font-mono text-[#E56515] font-semibold">
                  {academic.education[0]?.period}
                </span>
              </div>
              <p className="text-xs text-slate-600">
                {academic.education[0]?.institution}
              </p>
              <div className="pt-1 flex items-center gap-3 text-xs font-mono text-slate-500">
                <span className="font-semibold text-emerald-600">
                  {academic.education[0]?.grade}
                </span>
                <span>• Focus: AI Systems &amp; Microarchitecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Bento Column: Verified Real Achievements (Col span 5) */}
        <div className="md:col-span-5 space-y-6">
          <div className="bento-card p-6 sm:p-7 space-y-5 bg-white border border-slate-200">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Key Achievements
                </h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-orange-50 border border-orange-200 text-[#E56515] font-semibold">
                  Verified
                </span>
              </div>
              <div className="w-7 h-[2.5px] bg-[#E56515] rounded-full mt-1.5 mb-4 shadow-[0_0_10px_rgba(229,101,21,0.5)]" />
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.achievements.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-[#E56515] font-medium block">
                        {item.category}
                      </span>
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-[#E56515]/50 transition-colors shrink-0"
                        title={item.linkLabel || "View"}
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {idx < PORTFOLIO_DATA.achievements.length - 1 && (
                    <div className="h-[1px] bg-slate-200 pt-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools / Skills Bento Row (Exact bottom-left cards with Clockwork orange underline pill dash!) */}
        <div className="md:col-span-12 space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              Core Engineering Stack &amp; Tools
            </h3>
            <span className="text-xs font-mono text-slate-500">
              AI • Backend • Systems
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreTools.map((tool) => (
              <div
                key={tool.name}
                className="bento-card p-4 flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  {tool.icon}
                </div>
                <span className="text-xs font-bold text-slate-800 tracking-tight">
                  {tool.name}
                </span>
                {/* Active Clockwork orange accent dash */}
                <div className="w-9 h-[3px] bg-[#E56515] rounded-full mx-auto mt-2.5 shadow-[0_0_10px_rgba(229,101,21,0.65)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download Bento Banner */}
        <div className="md:col-span-12 bento-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-[#E56515]/25 bg-gradient-to-r from-orange-50/70 via-white to-orange-50/70">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E56515]" />
              <span className="text-xs font-mono text-[#E56515] uppercase tracking-wider font-semibold">
                Curriculum Vitae • Verified
              </span>
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              Official Student Resume ({resume.fileSize})
            </h4>
            <p className="text-xs text-slate-600">
              Autonomous AI agent architecture (Jarvis), production WhatsApp Twilio chatbot, backend microservices, and LeetCode problem solving.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={resume.filePath}
              download={resume.filename}
              className="btn-orange px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md shadow-[#E56515]/20"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
            <a
              href={resume.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-medium transition-colors"
            >
              <span>View Online</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
