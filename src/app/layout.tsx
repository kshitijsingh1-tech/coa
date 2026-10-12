import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.profile.name} — Computer Science & Artificial Intelligence Portfolio`,
  description: `${PORTFOLIO_DATA.profile.shortBio}`,
  keywords: [
    "Computer Science",
    "Computer Organization and Architecture",
    "COA",
    "CUA",
    "Number System Converter",
    "Radix Conversion",
    "BigInt",
    "Student Portfolio",
    "Next.js Portfolio",
    "Kshitij",
  ],
  authors: [{ name: PORTFOLIO_DATA.profile.name }],
  openGraph: {
    title: `${PORTFOLIO_DATA.profile.name} — Computer Science & AI Portfolio`,
    description: `${PORTFOLIO_DATA.profile.shortBio}`,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900 flex flex-col font-sans"
      >
        {children}
      </body>
    </html>
  );
}
