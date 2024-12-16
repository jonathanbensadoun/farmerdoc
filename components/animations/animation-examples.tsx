"use client";

import { motion } from "framer-motion";
import { AnimationCard } from "./animation-card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function AnimationExamples() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {examples.map((example, index) => (
        <motion.div key={index} variants={item}>
          <AnimationCard {...example} />
        </motion.div>
      ))}
    </motion.div>
  );
}

const examples = [
  {
    title: "Fondu d'entrée",
    description: "Une animation simple qui fait apparaître progressivement le contenu.",
    code: `const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

<motion.div
  initial="initial"
  animate="animate"
  variants={fadeIn}
>
  Contenu
</motion.div>`,
    component: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Fondu d'entrée
      </motion.div>
    )
  },
  {
    title: "Glissement latéral",
    description: "Une animation de glissement qui fait entrer le contenu par le côté.",
    code: `const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

<motion.div
  initial="initial"
  animate="animate"
  variants={slideIn}
>
  Contenu
</motion.div>`,
    component: (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Glissement
      </motion.div>
    )
  },
  {
    title: "Rotation",
    description: "Une animation de rotation continue avec transition fluide.",
    code: `const rotate = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
  transition: { 
    duration: 2,
    repeat: Infinity,
    ease: "linear"
  }
}

<motion.div
  initial="initial"
  animate="animate"
  variants={rotate}
>
  Contenu
</motion.div>`,
    component: (
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Rotation
      </motion.div>
    )
  }
];