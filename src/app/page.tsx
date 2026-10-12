import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CuaLearningSection } from "@/components/sections/CuaLearningSection";
import { GithubSection } from "@/components/sections/GithubSection";
import { AssignmentSection } from "@/components/sections/AssignmentSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#E56515]/20 selection:text-[#E56515] flex flex-col justify-between">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <CuaLearningSection />
        <GithubSection />
        <AssignmentSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
