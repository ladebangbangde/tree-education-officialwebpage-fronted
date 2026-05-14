import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.edugo.com"),
  title: "EduGo | 高端留学申请规划",
  description:
    "EduGo 专注英国、美国、澳洲、加拿大、日本等全球留学申请规划，提供选校定位、文书指导、申请递交、签证辅导与 AI 智能评估服务。",
  keywords: ["EduGo", "高端留学", "留学申请", "选校定位", "文书指导", "签证辅导", "AI 智能评估"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "EduGo | 高端留学申请规划",
    description:
      "EduGo 专注全球留学申请规划，提供选校定位、文书指导、申请递交、签证辅导与 AI 智能评估服务。",
    url: "https://www.edugo.com/",
    siteName: "EduGo",
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
