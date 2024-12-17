"use client";

import { motion } from "framer-motion";
import { AnimationCard } from "./animation-card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
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
    description:
      "Une animation simple qui fait apparaître progressivement le contenu.",
    code: `<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Fondu d&apos;entrée
      </motion.div>`,
    component: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Fondu d&apos;entrée
      </motion.div>
    ),
  },
  {
    title: "Glissement latéral",
    description:
      "Une animation de glissement qui fait entrer le contenu par le côté.",
    code: `<motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Glissement
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
    ),
  },
  {
    title: "Rotation",
    description: "Une animation de rotation continue avec transition fluide.",
    code: `<motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Rotation
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
    ),
  },
  {
    title: "Zoom",
    description:
      "Une animation de zoom qui agrandit le contenu progressivement.",
    code: `<motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Zoom
      </motion.div>`,
    component: (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Zoom
      </motion.div>
    ),
  },
  {
    title: "Décalage",
    description:
      "Une animation de décalage qui fait bouger le contenu de haut en bas.",
    code: `<motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Décalage
      </motion.div>`,
    component: (
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Décalage
      </motion.div>
    ),
  },
  {
    title: "Apparition",
    description:
      "Une animation d'apparition qui fait apparaître le contenu par le bas.",
    code: `<motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Apparition
      </motion.div>`,
    component: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Apparition
      </motion.div>
    ),
  },
  {
    title: "Défilement",
    description:
      "Une animation de défilement qui fait bouger le contenu de gauche à droite.",
    code: `<motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Défilement
      </motion.div>`,
    component: (
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Défilement
      </motion.div>
    ),
  },
  {
    title: "Pulsation",
    description:
      "Une animation de pulsation qui fait varier l'opacité du contenu.",
    code: `<motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Pulsation
      </motion.div>`,
    component: (
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Pulsation
      </motion.div>
    ),
  },
  {
    title: "Déformation",
    description:
      "Une animation de déformation qui fait varier la taille du contenu.",
    code: `<motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Déformation
      </motion.div>`,
    component: (
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Déformation
      </motion.div>
    ),
  },
  {
    title: "Disparition",
    description:
      "Une animation de disparition qui fait disparaître progressivement le contenu.",
    code: `<motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Disparition
      </motion.div>`,
    component: (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Disparition
      </motion.div>
    ),
  },
  {
    title: "Glissement vertical",
    description:
      "Une animation de glissement qui fait entrer le contenu par le bas.",
    code: `<motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Glissement vertical
      </motion.div>`,
    component: (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="p-6 bg-primary text-primary-foreground rounded-lg"
      >
        Glissement vertical
      </motion.div>
    ),
  },
  {
    title: "trois éléments apparaissent en décalage",
    description:
      "Une animation de décalage qui fait apparaître les éléments un par un. en boucle.",
    code: `<div className="grid gap-6 grid-cols-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="p-6 bg-primary text-primary-foreground rounded-lg"
        >
          Élément 1
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          className="p-6 bg-primary text-primary-foreground rounded-lg"
        >
          Élément 2
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          className="p-6 bg-primary text-primary-foreground rounded-lg"
        >
          Élément 3
        </motion.div>
      </div>`,
    component: (
      <div className="grid gap-6 grid-cols-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="p-6 bg-primary text-primary-foreground rounded-lg"
        >
          Élément 1
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          className="p-6 bg-primary text-primary-foreground rounded-lg"
        >
          Élément 2
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          className="p-6 bg-primary text-primary-foreground rounded-lg"
        >
          Élément 3
        </motion.div>
      </div>
    ),
  },
];
