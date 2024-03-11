// src>app>layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 과제",
  description: "by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav-group">
          <Link href="/">home</Link>
          <Link href="/csr">csr</Link>
          <Link href="/isr">isr</Link>
          <Link href="/ssg">ssg</Link>
          <Link href="/ssr">ssr</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
