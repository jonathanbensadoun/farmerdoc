"use client";

import { motion } from "framer-motion";
import type { AnimationExample } from "@/types/animations";

interface ExamplePreviewProps {
  example: AnimationExample;
}

export function ExamplePreview({ example }: ExamplePreviewProps) {
  return (
    <motion.div
      initial={example.animation.initial}
      animate={example.animation.animate}
      transition={example.animation.transition}
      className="p-6 bg-primary text-primary-foreground rounded-lg"
    >
      {example.title}
    </motion.div>
  );
}