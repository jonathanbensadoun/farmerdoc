import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center gap-4 md:h-24 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Construit avec Next.js, Tailwind CSS et Framer Motion
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Framer Motion
          </Link>
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Tailwind CSS
          </Link>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Next.js
          </Link>
        </div>
      </div>
    </footer>
  );
}