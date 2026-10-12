# Kshitij Singh — Computer Science & AI Portfolio & COA Hub

A high-performance personal portfolio website engineered for **Kshitij Singh** (Roll No: `25BAI10037`, B.Tech Artificial Intelligence, 1st Year). Features an interactive **Computer Organization & Architecture (COA) Number-System Converter**, verified course assignments, real achievements, live GitHub repository synchronization, and full responsiveness. Ready for zero-config production deployment on [Vercel](https://vercel.com).

![Tech Stack](https://img.shields.io/badge/Next.js-16_App_Router-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![Motion](https://img.shields.io/badge/Motion-v14-indigo?logo=framer)
![Vercel](https://img.shields.io/badge/Deploy-Vercel_Ready-success?logo=vercel)

---

## 🌟 Key Features

- **Aesthetic Identity:** Crisp pure white canvas (`#FFFFFF`), high-contrast dark slate typography (`text-slate-900`, `text-slate-600`), and warm Clockwork orange accents (`#E56515`).
- **Interactive COA Number-System Converter:**
  - Real-time conversion across **Decimal (Base 10)**, **Binary (Base 2)**, **Octal (Base 8)**, and **Hexadecimal (Base 16)**.
  - Native **`BigInt` arbitrary-precision arithmetic** preventing floating-point rounding errors.
  - Interactive panel swap with 180° motion feedback.
  - Architectural bit-width calculator, nibble groupings (`1101 0010`), and quick COA presets.
  - Real-time input validation with contextual error reporting and one-click copy.
- **Academic Assignment Showcase:**
  - Full inline PDF preview and download for **COA Assignment 1** (`COA_assignment_Kshitij_Singh.pdf`).
  - Course metadata: Candidate `25BAI10037`, Section `263BAI-601`, Evaluator `Dr. Ruchika Gupta`, Submission Date `05 Aug, 2026`.
- **Verified Achievements & Projects:**
  - **Jarvis:** Autonomous AI system agent built with Mistral AI & FastAPI.
  - **WhatsApp AI Chatbot:** Production conversational bot with Twilio API & FastAPI (24/7 uptime).
  - **LeetCode Problem Solver:** 100+ algorithmic problems solved in C++ & Data Structures ([@Not_so_public](https://leetcode.com/u/Not_so_public)).
- **Live GitHub Integration:**
  - Dynamically fetches repositories from [@kshitijsingh1-tech](https://github.com/kshitijsingh1-tech) using GitHub REST API with cached fallback.
- **Strict Accessibility & SEO:** Comprehensive Open Graph tags, semantic HTML5, fast performance, and mobile-friendly responsive layout.

---

## 📂 Project Structure

```text
coa_kshitij/
├── public/
│   └── documents/
│       ├── COA_assignment_Kshitij_Singh.pdf   # Verified 5-page Coursework Submission
│       └── kshitij_resume.pdf                 # Authentic Student Resume
├── src/
│   ├── app/
│   │   ├── globals.css                       # Design system tokens & Tailwind v4
│   │   ├── layout.tsx                        # Metadata, fonts, and root shell
│   │   └── page.tsx                          # Single-page assembly
│   ├── components/
│   │   ├── converter/
│   │   │   ├── NumberConverter.tsx           # Dual-panel radix conversion interface
│   │   │   └── NumberSystemSelect.tsx        # Radix selection dropdown
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                    # Sticky header with active-section indicator
│   │   │   └── Footer.tsx                    # Back to top button & credentials
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx               # Student hero with branch & roll number
│   │   │   ├── AboutSection.tsx              # Bio, verified achievements & resume action
│   │   │   ├── CuaLearningSection.tsx        # COA study notes & interactive converter
│   │   │   ├── AssignmentSection.tsx         # Assignment details & inline PDF viewer
│   │   │   ├── GithubSection.tsx             # Live repository cards (@kshitijsingh1-tech)
│   │   │   └── ContactSection.tsx            # Direct email & social touchpoints
│   │   └── ui/
│   │       ├── BrandIcons.tsx                # GitHub, LinkedIn, and LeetCode SVG icons
│   │       └── SectionHeading.tsx            # Reusable section heading with badges
│   ├── data/
│   │   └── portfolio.ts                      # Central portfolio profile & links
│   └── lib/
│       ├── github.ts                         # GitHub REST API client & fallback data
│       ├── number-converter.ts               # Reusable BigInt radix conversion module
│       └── utils.ts                          # Utility functions
└── README.md
```

---

## 💻 Local Development

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `v10+`

### Installation & Run

1. Clone or navigate to the directory:
   ```bash
   cd coa_kshitij
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Run lint and type checking:
   ```bash
   npm run lint
   ```

5. Validate production build:
   ```bash
   npm run build
   ```

---

## 🚀 Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete personal portfolio for Kshitij Singh"
   git remote add origin https://github.com/kshitijsingh1-tech/<repo-name>.git
   git push -u origin main
   ```
2. Go to **[vercel.com/new](https://vercel.com/new)** and import the repository.
3. Vercel automatically detects Next.js. Click **Deploy**.
