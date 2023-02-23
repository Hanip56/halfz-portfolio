import React from "react";
import { motion } from "framer-motion";

const TitleReveal = ({ text, delay }) => {
  return (
    <div className="p-0 overflow-hidden h-12 md:h-16 w-96 flex justify-center items-center">
      <motion.h1
        initial={{ marginBottom: "-10rem" }}
        animate={{ marginBottom: 0 }}
        transition={{
          duration: 0.4,
          delay,
          ease: "easeOut",
          type: "spring",
          stiffness: 110,
        }}
        className="titleHero"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default TitleReveal;
