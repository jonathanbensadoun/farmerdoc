"use client";
import "./globals.css";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { useState } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Animations avec Next.js, Tailwind CSS et Framer Motion",
//   description:
//     "Apprenez à créer des animations modernes avec Next.js, Tailwind CSS et Framer Motion grâce à des exemples interactifs et faciles à copier.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLightMode, setIsLightMode] = useState(false);
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={`${inter.className} ${isLightMode ? "light" : "dark"}`}>
        <Navbar isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
