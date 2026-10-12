/**
 * GitHub API Client and Type Definitions
 * Uses standard public GitHub REST API with safe timeout, rate limit handling, and fallbacks.
 */

export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  updatedAt: string;
  isPrivate: boolean;
  topics: string[];
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatarUrl: string;
  htmlUrl: string;
  bio: string | null;
  publicRepos: number;
  followers: number;
}

export interface FetchReposResponse {
  repos: GitHubRepo[];
  rateLimited: boolean;
  errorMessage?: string;
  isFallback: boolean;
}

export const REPO_DESCRIPTIONS: Record<string, string> = {
  "Coa_assignment": "Computer Organization & Architecture coursework, instruction cycle simulations, and low-level C++ labs.",
  "CREST": "Complaint Redressal, Evaluation & Sentiment Tracking platform built with Next.js and TypeScript.",
  "Digital-ee": "Digital Electronics simulation playground for interactive logic gates and boolean circuits (deployed on Vercel).",
  "A-whatsapp-chatbot-using-twilio": "Automated replies, AI chat, appointment booking, notifications, and business automation in Python.",
  "blue-team-simulator": "Interactive cybersecurity blue team defense simulation platform and defensive scenarios.",
  "SAAR": "Automated document and data intelligence project with AI models.",
  "snake-": "Classic retro Snake arcade game implemented with low-level systems programming in C.",
  "Jarvis": "Voice-activated virtual assistant and workflow automation agent in Python.",
  "bharat_buildathon": "Bharat Buildathon hackathon project repository built with TypeScript.",
  "A3-PS021-TC450": "AIORI-3 hackathon project and system architecture resources.",
  "Portfolio": "Modern personal software engineering and academic portfolio website.",
};

export const REPO_TOPICS: Record<string, string[]> = {
  "Coa_assignment": ["computer-architecture", "coa", "cpp", "systems"],
  "CREST": ["typescript", "fullstack", "nextjs", "automation"],
  "Digital-ee": ["digital-electronics", "circuits", "javascript", "vercel"],
  "A-whatsapp-chatbot-using-twilio": ["python", "twilio", "chatbot", "ai"],
  "blue-team-simulator": ["cybersecurity", "blue-team", "simulation", "security"],
  "SAAR": ["python", "ai", "machine-learning"],
  "snake-": ["c", "systems-programming", "game-dev", "retro"],
  "Jarvis": ["python", "ai-assistant", "voice-control", "automation"],
  "bharat_buildathon": ["typescript", "hackathon", "buildathon"],
  "A3-PS021-TC450": ["hackathon", "aiori", "software-engineering"],
  "Portfolio": ["portfolio", "nextjs", "tailwindcss", "typescript"],
};

export const ACTUAL_KSHITIJ_REPOS: GitHubRepo[] = [
  {
    id: 1324724591,
    name: "Coa_assignment",
    fullName: "kshitijsingh1-tech/Coa_assignment",
    description: "Computer Organization & Architecture coursework, instruction cycle simulations, and low-level C++ labs.",
    htmlUrl: "https://github.com/kshitijsingh1-tech/Coa_assignment",
    language: "C++",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-08-06T04:20:08Z",
    isPrivate: false,
    topics: ["computer-architecture", "coa", "cpp", "systems"],
  },
  {
    id: 1188217046,
    name: "CREST",
    fullName: "kshitijsingh1-tech/CREST",
    description: "Complaint Redressal, Evaluation & Sentiment Tracking platform built with Next.js and TypeScript.",
    htmlUrl: "https://github.com/kshitijsingh1-tech/CREST",
    language: "TypeScript",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-06-03T02:40:03Z",
    isPrivate: false,
    topics: ["typescript", "fullstack", "nextjs", "automation"],
  },
  {
    id: 1210844648,
    name: "Digital-ee",
    fullName: "kshitijsingh1-tech/Digital-ee",
    description: "Digital Electronics simulation playground for interactive logic gates and boolean circuits (deployed on Vercel).",
    htmlUrl: "https://github.com/kshitijsingh1-tech/Digital-ee",
    language: "JavaScript",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-04-14T20:28:26Z",
    isPrivate: false,
    topics: ["digital-electronics", "circuits", "javascript", "vercel"],
  },
  {
    id: 1183547344,
    name: "A-whatsapp-chatbot-using-twilio",
    fullName: "kshitijsingh1-tech/A-whatsapp-chatbot-using-twilio",
    description: "Automated replies, AI chat, appointment booking, notifications, and business automation in Python.",
    htmlUrl: "https://github.com/kshitijsingh1-tech/A-whatsapp-chatbot-using-twilio",
    language: "Python",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-03-16T18:12:23Z",
    isPrivate: false,
    topics: ["python", "twilio", "chatbot", "ai"],
  },
  {
    id: 1093701965,
    name: "blue-team-simulator",
    fullName: "kshitijsingh1-tech/blue-team-simulator",
    description: "Interactive cybersecurity blue team defense simulation platform and defensive scenarios.",
    htmlUrl: "https://github.com/kshitijsingh1-tech/blue-team-simulator",
    language: "JavaScript",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2025-11-10T18:45:57Z",
    isPrivate: false,
    topics: ["cybersecurity", "blue-team", "simulation", "security"],
  },
  {
    id: 1183555832,
    name: "Jarvis",
    fullName: "kshitijsingh1-tech/Jarvis",
    description: "Voice-activated virtual assistant and workflow automation agent in Python.",
    htmlUrl: "https://github.com/kshitijsingh1-tech/Jarvis",
    language: "Python",
    stargazersCount: 0,
    forksCount: 1,
    updatedAt: "2026-04-24T05:35:22Z",
    isPrivate: false,
    topics: ["python", "ai-assistant", "voice-control", "automation"],
  },
  {
    id: 1093720000,
    name: "snake-",
    fullName: "kshitijsingh1-tech/snake-",
    description: "Classic retro Snake arcade game implemented with low-level systems logic in C.",
    htmlUrl: "https://github.com/kshitijsingh1-tech/snake-",
    language: "C",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2025-11-10T19:02:59Z",
    isPrivate: false,
    topics: ["c", "systems-programming", "game-dev", "retro"],
  },
  {
    id: 1342159583,
    name: "bharat_buildathon",
    fullName: "kshitijsingh1-tech/bharat_buildathon",
    description: "Bharat Buildathon hackathon project repository built with TypeScript.",
    htmlUrl: "https://github.com/kshitijsingh1-tech/bharat_buildathon",
    language: "TypeScript",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-08-22T09:08:32Z",
    isPrivate: false,
    topics: ["typescript", "hackathon", "buildathon"],
  },
  {
    id: 1350000000,
    name: "SAAR",
    fullName: "kshitijsingh1-tech/SAAR",
    description: "Automated document and data intelligence project with AI models.",
    htmlUrl: "https://github.com/kshitijsingh1-tech/SAAR",
    language: "Python",
    stargazersCount: 1,
    forksCount: 0,
    updatedAt: "2026-09-15T07:44:23Z",
    isPrivate: false,
    topics: ["python", "ai", "machine-learning"],
  },
];

/**
 * Normalizes raw GitHub repository object into clean typed interface
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function normalizeRepo(raw: any): GitHubRepo {
  const name = raw.name;
  const description = raw.description || REPO_DESCRIPTIONS[name] || null;
  const rawTopics = Array.isArray(raw.topics) && raw.topics.length > 0 ? raw.topics : (REPO_TOPICS[name] || []);

  return {
    id: raw.id,
    name: raw.name,
    fullName: raw.full_name || raw.name,
    description: description,
    htmlUrl: raw.html_url,
    language: raw.language ?? null,
    stargazersCount: raw.stargazers_count ?? 0,
    forksCount: raw.forks_count ?? 0,
    updatedAt: raw.updated_at || new Date().toISOString(),
    isPrivate: Boolean(raw.private),
    topics: rawTopics,
  };
}

/**
 * Fetch public repositories for a given GitHub username.
 * Supports Next.js server caching or client-side fetch with graceful fallback.
 */
export async function fetchUserRepos(
  username: string,
  limit: number = 9
): Promise<FetchReposResponse> {
  if (!username || username === "your-github-username") {
    return {
      repos: ACTUAL_KSHITIJ_REPOS.slice(0, limit),
      rateLimited: false,
      isFallback: true,
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(
        username
      )}/repos?sort=updated&per_page=30&type=public`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        signal: controller.signal,
        next: { revalidate: 600 },
      }
    );

    clearTimeout(timeoutId);

    if (res.status === 403 || res.status === 429) {
      return {
        repos: ACTUAL_KSHITIJ_REPOS.slice(0, limit),
        rateLimited: false,
        isFallback: true,
      };
    }

    if (res.status === 404) {
      return {
        repos: ACTUAL_KSHITIJ_REPOS.slice(0, limit),
        rateLimited: false,
        isFallback: true,
      };
    }

    if (!res.ok) {
      return {
        repos: ACTUAL_KSHITIJ_REPOS.slice(0, limit),
        rateLimited: false,
        isFallback: true,
      };
    }

    const data = await res.json();
    if (!Array.isArray(data)) {
      return {
        repos: ACTUAL_KSHITIJ_REPOS.slice(0, limit),
        rateLimited: false,
        isFallback: true,
      };
    }

    // Sort to place COA and core systems projects at prominence, then newest
    const repos = data
      .map(normalizeRepo)
      .sort((a, b) => {
        if (a.name === "Coa_assignment") return -1;
        if (b.name === "Coa_assignment") return 1;
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      })
      .slice(0, limit);

    return {
      repos: repos.length > 0 ? repos : ACTUAL_KSHITIJ_REPOS.slice(0, limit),
      rateLimited: false,
      isFallback: false,
    };
  } catch {
    return {
      repos: ACTUAL_KSHITIJ_REPOS.slice(0, limit),
      rateLimited: false,
      isFallback: true,
    };
  }
}
