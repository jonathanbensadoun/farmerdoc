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
      <div className="p-4 flex h-16 items-center justify-center  ">
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="Accueil"
        >
          <Sparkles className="h-6 w-6" aria-hidden="true" />
          <span className="font-bold">Guide d&apos;Animations</span>
        </Link>
        <nav className="ml-auto flex gap-4" aria-label="Navigation principale">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Accueil
          </Link>
          {/* <Link href="/tutoriels" className="text-sm font-medium hover:text-primary">
            Tutoriels
          </Link> */}
          <Link
            href="/ressources"
            className="text-sm font-medium hover:text-primary"
          >
            Ressources
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
