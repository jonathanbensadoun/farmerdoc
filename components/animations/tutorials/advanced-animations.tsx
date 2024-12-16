"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animation-variants";

export function AdvancedAnimations() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="grid gap-8"
    >
      <motion.div variants={fadeInUp}>
        <p className="text-lg text-muted-foreground">
          Contenu en cours de développement. Revenez bientôt !
        </p>
      </motion.div>
    </motion.div>
  );
}