export const revealVariants = {
  offscreen: {
    y: 35,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      y: { duration: 0.7 },
      opacity: { duration: 0.4 },
      delay: 0.2,
    },
  },
};

export const iconVariants = {
  offscreen: {
    opacity: 0,
    y: 70,
  },
  onscreen: (idx) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    };
  },
};
