"use client";

import { motion } from "framer-motion";
import { AnimationCard } from "../animation-card";
import { ExamplePreview } from "../example-preview";
import { basicExamples } from "@/lib/animation-examples";
import { staggerContainer, fadeInUp } from "@/lib/animation-variants";

export function BasicAnimations() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="grid gap-8 md:grid-cols-2"
    >
      {basicExamples.map((example, index) => (
        <motion.div key={index} variants={fadeInUp}>
          <AnimationCard
            title={example.title}
            description={example.description}
            code={example.code}
            component={<ExamplePreview example={example} />}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}