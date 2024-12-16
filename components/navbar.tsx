"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6" />
          <span className="font-bold">Animation Guide</span>
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary"
          >
            Framer Motion Docs
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}