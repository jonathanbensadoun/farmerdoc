import { type AnimationExample } from "@/types/animations";

export const basicExamples: AnimationExample[] = [
  {
    title: "Fondu d'entrée",
    description: "Une animation simple qui fait apparaître progressivement le contenu.",
    code: `import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
}

export function FadeInExample() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      Contenu
    </motion.div>
  )
}`,
    animation: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 }
    }
  },
  {
    title: "Glissement",
    description: "Une animation de glissement qui fait entrer le contenu par le côté.",
    code: `import { motion } from "framer-motion"

const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

export function SlideInExample() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={slideIn}
    >
      Contenu
    </motion.div>
  )
}`,
    animation: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 }
    }
  }
];