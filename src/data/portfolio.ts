/**
 * Central Portfolio Configuration
 * Update your personal information, links, credentials, and academic details here.
 * All sections read from this single source of truth.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "external";
  username?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description: string;
  coursework: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string;
  linkLabel?: string;
}

export interface PortfolioConfig {
  profile: {
    name: string;
    rollNumber: string;
    branch: string;
    institution: string;
    semester: string;
    tagline: string;
    shortBio: string;
    fullBio: string[];
    avatarUrl: string;
    location: string;
  };
  socials: {
    github: string;
    githubUsername: string;
    linkedin: string;
    leetcode?: string;
    email: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  academic: {
    education: EducationItem[];
    interests: {
      title: string;
      description: string;
      icon: string;
    }[];
    futureGoals: {
      title: string;
      description: string;
      timeline: string;
    }[];
    skills: SkillCategory[];
  };
  resume: {
    filename: string;
    filePath: string;
    fileSize: string;
    lastUpdated: string;
    available: boolean;
  };
  assignment1: {
    title: string;
    courseName: string;
    courseCode: string;
    semester: string;
    submittedTo?: string;
    section?: string;
    pageCount?: string;
    fileSize?: string;
    description: string;
    topicsCovered: string[];
    filePath: string;
    submissionDate: string;
    available: boolean;
  };
  achievements: AchievementItem[];
}

export const PORTFOLIO_DATA: PortfolioConfig = {
  profile: {
    name: "Kshitij Singh",
    rollNumber: "25BAI10037",
    branch: "B.Tech – Artificial Intelligence",
    institution: "Department of Computer Science & Engineering",
    semester: "B.Tech — 2nd Year",
    tagline: "Building intelligent backends and deploying real-world AI applications.",
    shortBio:
      "Second-year AI undergraduate passionate about building intelligent backends and deploying real-world AI applications. Focused on the intersection of clean software architecture and powerful language models — from autonomous agents to conversational AI.",
    fullBio: [
      "I am an ambitious AI & Computer Science student passionate about building intelligent backends and deploying real-world AI applications.",
      "My focus centers on the intersection of clean software architecture and powerful language models — from autonomous agents with tool-calling capabilities to production conversational AI with 24/7 uptime.",
      "Comfortable working across the backend stack with Python, C++, FastAPI, and local/cloud LLM integrations, while actively sharpening algorithmic problem-solving with 100+ problems solved on LeetCode.",
    ],
    avatarUrl: "/images/kshitij.png",
    location: "India",
  },

  socials: {
    github: "https://github.com/kshitijsingh1-tech",
    githubUsername: "kshitijsingh1-tech",
    linkedin: "https://www.linkedin.com/in/kshitij-singh-5575a6385",
    leetcode: "https://leetcode.com/u/Not_so_public",
    email: "kshitijsingh17032006@gmail.com",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "CUA Learning", href: "#cua-learning" },
    { label: "GitHub", href: "#github" },
    { label: "Assignment", href: "#assignment" },
    { label: "Contact", href: "#contact" },
  ],

  academic: {
    education: [
      {
        degree: "Bachelor of Technology in Artificial Intelligence",
        institution: "Department of Computer Science & Engineering",
        period: "2024 — Present",
        grade: "B.Tech — 2nd Year",
        description:
          "Specialized program focused on Artificial Intelligence, backend engineering, applied ML, computer architecture, and algorithmic problem solving in C++.",
        coursework: [
          "Computer Organization & Architecture (COA)",
          "Data Structures & Algorithms in C++",
          "Python & Backend Engineering",
          "Applied Machine Learning & NLP",
          "Relational Databases & SQL",
          "Discrete Mathematics",
        ],
      },
    ],

    interests: [
      {
        title: "Autonomous Agents & LLMs",
        description:
          "Designing tool-calling autonomous agents, structured JSON planning, and low-latency API orchestrations with models like Mistral AI.",
        icon: "Cpu",
      },
      {
        title: "Backend Architecture & High Availability",
        description:
          "Building robust asynchronous microservices and webhook receivers with FastAPI, Flask, and scalable cloud deployments.",
        icon: "Terminal",
      },
      {
        title: "Computer Architecture & Hardware Co-Design",
        description:
          "Demystifying instruction pipelines, cache architectures, memory bandwidth, and low-level C/C++ execution down to hardware.",
        icon: "Layers",
      },
      {
        title: "Competitive Programming & DSA",
        description:
          "Active problem solving on LeetCode with 100+ problems solved in C++, mastering arrays, trees, dynamic programming, and graphs.",
        icon: "Binary",
      },
    ],

    futureGoals: [
      {
        title: "Autonomous Agent Toolchains & Systems",
        description:
          "Advance multi-agent orchestration architectures and self-hosted low-latency inference pipelines.",
        timeline: "Near-Term (1-2 Years)",
      },
      {
        title: "Open Source AI & Systems Contributions",
        description:
          "Actively contribute to developer toolchains, AI frameworks, and systems engineering projects.",
        timeline: "Ongoing",
      },
      {
        title: "Production Infrastructure & Applied ML Research",
        description:
          "Build high-throughput, enterprise-scale backend and AI infrastructure with strict reliability guarantees.",
        timeline: "Long-Term (3-5 Years)",
      },
    ],

    skills: [
      {
        title: "Programming Languages",
        icon: "Code",
        skills: ["Python", "C++", "JavaScript", "SQL", "TypeScript"],
      },
      {
        title: "Backend & APIs",
        icon: "Terminal",
        skills: ["FastAPI", "Flask", "REST APIs", "Webhooks", "JSON"],
      },
      {
        title: "AI & Machine Learning",
        icon: "Cpu",
        skills: ["LLMs / NLP", "Mistral AI", "Scikit-learn", "NumPy", "Pandas"],
      },
      {
        title: "Developer Tools & Platforms",
        icon: "GitBranch",
        skills: ["Git & GitHub", "Linux / CLI", "Netlify", "Vercel", "VS Code"],
      },
    ],
  },

  resume: {
    filename: "kshitij_resume.pdf",
    filePath: "/documents/kshitij_resume.pdf",
    fileSize: "4.1 MB",
    lastUpdated: "2026 Edition",
    available: true,
  },

  assignment1: {
    title: "Computer Organization and Architecture — Assignment 1",
    courseName: "Computer Organization and Architecture",
    courseCode: "COA / CUA",
    semester: "Academic Session 2025-26",
    submittedTo: "Dr. Ruchika Gupta",
    section: "263BAI-601",
    pageCount: "5 Pages",
    fileSize: "290 KB",
    description:
      "Official 5-page submission covering microarchitecture fundamentals: Raspberry Pi embedded hardware, comparative analysis of CPU vs. GPU vs. TPU architectures, RAM Word Size and bus operating speed, YOTTA hyperscale infrastructure, Stampeding Herd concurrency hazards, and Turing Award computational history.",
    topicsCovered: [
      "Raspberry Pi embedded hardware architecture & applications",
      "CPU, GPU & TPU hardware comparison & parallel SIMD pipelines",
      "RAM Word Size, operating frequency, and memory bandwidth",
      "YOTTA infrastructure & datacenter compute architectures",
      "Stampeding Herd concurrency problem in distributed caching",
      "Turing Award computational history & semiconductor origin (Intel/AMD)",
    ],
    filePath: "/documents/COA_assignment_Kshitij_Singh.pdf",
    submissionDate: "05 Aug, 2026",
    available: true,
  },

  achievements: [
    {
      title: "Jarvis — Autonomous AI System Agent",
      category: "Autonomous AI & Intelligent Agents",
      description:
        "Designed an LLM-powered agent capable of interpreting natural language user commands, planning multi-step actions, and executing them via OS commands, web APIs, and automation scripts using Mistral AI.",
      techStack: ["Python", "Mistral AI", "FastAPI", "Automation", "AI Agent"],
      link: "https://github.com/kshitijsingh1-tech/Jarvis",
      linkLabel: "View Repository",
    },
    {
      title: "Production WhatsApp AI Chatbot",
      category: "Conversational AI & Cloud Backend",
      description:
        "Engineered and deployed a production-grade conversational chatbot with 24/7 uptime using Twilio webhooks and a FastAPI backend with real-time response generation pipelines.",
      techStack: ["Python", "Twilio API", "Webhooks", "FastAPI", "REST APIs"],
      link: "https://github.com/kshitijsingh1-tech/A-whatsapp-chatbot-using-twilio",
      linkLabel: "View Repository",
    },
    {
      title: "100+ LeetCode Problems Solved",
      category: "Data Structures & Algorithms",
      description:
        "Demonstrated strong algorithmic problem solving, time/space complexity optimization, and data structure proficiency in C++ on LeetCode.",
      techStack: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      link: "https://leetcode.com/u/Not_so_public",
      linkLabel: "LeetCode Profile",
    },
  ],
};
