"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Layers,
  Eye,
  FileCode,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AssignmentSection() {
  const { assignment1, profile } = PORTFOLIO_DATA;
  const [showEmbedPreview, setShowEmbedPreview] = useState<boolean>(false);

  return (
    <section id="assignment" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Coursework Submission"
        title="Assignment 1"
        subtitle={`Official submission for ${assignment1.courseName} (${assignment1.courseCode}). Rigorous analysis of microarchitecture, embedded systems, compute pipelines, and memory hierarchy.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Document Details Card (Col span 7) */}
        <div className="lg:col-span-7 bento-card p-6 sm:p-8 space-y-6 bg-white border border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E56515]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E56515]">
                Verified Academic Submission
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {assignment1.semester}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {assignment1.title}
            </h3>
            <p className="text-xs font-mono text-[#E56515] mt-1 font-semibold">
              Course: {assignment1.courseName} [{assignment1.courseCode}]
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {assignment1.description}
          </p>

          {/* Topics Covered Checklist */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-2">
              <Layers size={14} className="text-[#E56515]" />
              <span>Core Modules Analyzed</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {assignment1.topicsCovered.map((topic, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
                >
                  <CheckCircle2 size={14} className="text-[#E56515] shrink-0 mt-0.5" />
                  <span className="leading-snug">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Student Metadata Bar */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Candidate</span>
              <span className="text-slate-900 font-semibold">{profile.name}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Section</span>
              <span className="text-slate-900 font-semibold">{assignment1.section || profile.rollNumber}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Submitted To</span>
              <span className="text-slate-900 font-semibold">{assignment1.submittedTo || "Faculty"}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Submission Date</span>
              <span className="text-[#E56515] font-semibold">{assignment1.submissionDate}</span>
            </div>
          </div>

          {/* Document Actions */}
          {assignment1.available ? (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={assignment1.filePath}
                download="COA_assignment_Kshitij_Singh.pdf"
                className="btn-orange inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-md shadow-[#E56515]/20"
              >
                <Download size={16} />
                <span>Download Assignment PDF</span>
              </a>

              <a
                href={assignment1.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 font-medium text-xs sm:text-sm transition-colors"
              >
                <span>Open in Tab</span>
                <ExternalLink size={14} />
              </a>

              <button
                type="button"
                onClick={() => setShowEmbedPreview(!showEmbedPreview)}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-mono text-[#E56515] hover:text-[#f06e1d] font-semibold transition-colors"
              >
                <Eye size={14} />
                <span>{showEmbedPreview ? "Hide Preview" : "Toggle Inline Preview"}</span>
              </button>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs">
              Assignment PDF document is currently archived or awaiting publication.
            </div>
          )}
        </div>

        {/* Document Showcase / PDF Viewer Frame (Col span 5) */}
        <div className="lg:col-span-5 bento-card p-6 space-y-4 bg-white border border-slate-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
              <FileText size={16} className="text-[#E56515]" />
              <span className="truncate max-w-[200px]">COA_assignment_Kshitij_Singh.pdf</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
              {assignment1.pageCount || "5 Pages"} • {assignment1.fileSize || "290 KB"}
            </span>
          </div>

          {showEmbedPreview ? (
            <div className="w-full h-[460px] rounded-xl overflow-hidden border border-slate-200 bg-white">
              <iframe
                src={`${assignment1.filePath}#toolbar=0`}
                title="Assignment 1 PDF Preview"
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="h-[380px] rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#E56515]/10 border border-[#E56515]/20 flex items-center justify-center text-[#E56515]">
                <FileCode size={30} />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Document Preview Available
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-xs leading-relaxed">
                  Click preview or download to inspect the complete solutions, radix proofs, and ALU arithmetic derivations.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEmbedPreview(true)}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-[#E56515] font-semibold hover:border-[#E56515]/40 hover:bg-orange-50/50 transition-colors shadow-xs"
                >
                  Load Inline Preview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
