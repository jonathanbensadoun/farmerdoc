export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1 }
};

export const rotate = {
  hidden: { rotate: 0 },
  show: { 
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity
    }
  }
};