"use client";

import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

export function SocialLinks({
  className = "",
  iconSize = 20,
  showLabels = false,
}: SocialLinksProps) {
  const { socials } = PORTFOLIO_DATA;

  const links = [
    {
      label: "GitHub",
      href: socials.github,
      icon: <GithubIcon size={iconSize} />,
      enabled: Boolean(socials.github && socials.github !== "https://github.com/"),
    },
    {
      label: "LinkedIn",
      href: socials.linkedin,
      icon: <LinkedinIcon size={iconSize} />,
      enabled: Boolean(socials.linkedin && socials.linkedin !== "https://linkedin.com/in/"),
    },
    {
      label: "Email",
      href: `mailto:${socials.email}`,
      icon: <Mail size={iconSize} />,
      enabled: Boolean(socials.email && socials.email.includes("@")),
    },
  ].filter((item) => item.enabled);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label === "Email" ? undefined : "_blank"}
          rel={link.label === "Email" ? undefined : "noopener noreferrer"}
          aria-label={link.label}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-[#E56515]/50 hover:bg-orange-50/60 transition-all duration-200"
        >
          <span className="text-slate-500 group-hover:text-[#E56515] transition-colors">
            {link.icon}
          </span>
          {showLabels && (
            <span className="text-sm font-medium tracking-wide">
              {link.label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
