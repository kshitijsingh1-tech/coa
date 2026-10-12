"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  GitFork,
  ExternalLink,
  AlertCircle,
  RefreshCw,
  FolderGit2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GitHubRepo, fetchUserRepos, REPO_DESCRIPTIONS, REPO_TOPICS } from "@/lib/github";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GithubSection() {
  const { socials } = PORTFOLIO_DATA;
  const username = socials.githubUsername;

  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rateLimited, setRateLimited] = useState<boolean>(false);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;

    async function loadRepos() {
      try {
        const response = await fetchUserRepos(username, 9);
        if (!isMounted) return;

        if (response.repos && response.repos.length > 0) {
          setRepos(response.repos);
          setError(null);
        } else if (response.rateLimited) {
          setRateLimited(true);
          setError(response.errorMessage || "GitHub rate limit exceeded.");
        } else if (response.errorMessage) {
          setError(response.errorMessage);
        } else {
          setRepos([]);
          setError(null);
        }
      } catch {
        if (!isMounted) return;
        setError("Unable to retrieve repositories from GitHub API.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRepos();

    return () => {
      isMounted = false;
    };
  }, [username, refreshTrigger]);

  const handleRefresh = () => {
    setLoading(true);
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <SectionHeading
          badge="Public Source Code"
          title="GitHub Repositories"
          subtitle={`Live repositories retrieved from GitHub for @${username}. Open source projects, architecture simulations, and course assignments.`}
        />

        <div className="flex items-center gap-3 shrink-0 mb-6 md:mb-12">
          <button
            type="button"
            onClick={handleRefresh}
            disabled={loading}
            aria-label="Refresh repositories"
            className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-50 transition-colors shadow-xs"
          >
            <RefreshCw size={16} className={loading ? "animate-spin text-[#E56515]" : ""} />
          </button>

          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#E56515]/50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-medium text-xs font-mono transition-colors shadow-xs"
          >
            <GithubIcon size={16} />
            <span>View @{username} on GitHub</span>
            <ExternalLink size={14} className="text-slate-400" />
          </a>
        </div>
      </div>

      {/* Loading Skeleton State */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 animate-pulse shadow-xs"
            >
              <div className="h-5 bg-slate-200 rounded w-2/3" />
              <div className="h-4 bg-slate-100 rounded w-full" />
              <div className="h-4 bg-slate-100 rounded w-4/5" />
              <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                <div className="h-3 bg-slate-200 rounded w-16" />
                <div className="h-3 bg-slate-200 rounded w-20" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error or Rate Limit State */}
      {!loading && error && (
        <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 max-w-xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600">
            <AlertCircle size={24} />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">
              {rateLimited ? "GitHub API Rate Limit" : "Notice"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              {error}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E56515] hover:bg-[#f06e1d] text-white font-semibold text-xs transition-colors"
            >
              <GithubIcon size={15} />
              <span>Browse Repositories Directly on GitHub</span>
            </a>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && repos.length === 0 && (
        <div className="p-10 rounded-2xl bg-white border border-slate-200 text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <FolderGit2 size={36} className="text-slate-400 mx-auto" />
          <div>
            <h4 className="text-base font-bold text-slate-900">
              No Public Repositories Found
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              No public repositories are currently listed for GitHub user &quot;{username}&quot;. You can view the profile directly or configure another username in <code className="text-[#E56515] font-mono">src/data/portfolio.ts</code>.
            </p>
          </div>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium hover:bg-slate-200 transition-colors"
          >
            <span>Visit Profile</span>
            <ExternalLink size={13} />
          </a>
        </div>
      )}

      {/* Active Repositories Grid */}
      {!loading && !error && repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group flex flex-col justify-between p-6 bento-card bg-white border border-slate-200"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 group-hover:text-[#E56515] transition-colors flex items-center gap-1.5 line-clamp-1"
                  >
                    <span>{repo.name}</span>
                    <ExternalLink size={14} className="text-slate-400 shrink-0 group-hover:text-[#E56515]" />
                  </a>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                    Public
                  </span>
                </div>

                {(() => {
                  const desc =
                    repo.description ||
                    REPO_DESCRIPTIONS[repo.name] ||
                    "Engineering repository and student source code.";
                  const topics =
                    repo.topics && repo.topics.length > 0
                      ? repo.topics
                      : REPO_TOPICS[repo.name] || [];

                  return (
                    <>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {desc}
                      </p>

                      {topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-50 border border-orange-200 text-[#E56515] font-medium"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  {repo.language && (
                    <>
                      <span className="w-2 h-2 rounded-full bg-[#E56515]" />
                      <span className="text-slate-700">{repo.language}</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-3 text-slate-500">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="text-[#E56515]" />
                    <span>{repo.stargazersCount}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    <span>{repo.forksCount}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
