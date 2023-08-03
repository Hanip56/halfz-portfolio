import React from "react";
import { arrBackEnd, arrFrontEnd } from "../utils/constants";
import { motion } from "framer-motion";
import { revealVariants, iconVariants } from "../utils/variants";
import Image from "next/image";

const arrFull = [...arrFrontEnd, ...arrBackEnd];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="flex flex-col justify-center items-center text-center "
    >
      <motion.div
        variants={revealVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="titleWhite">Skills</h2>
        <p className="text-gray-500 tracking-wider">
          Few technology that i use
        </p>
      </motion.div>
      <div className="w-[80vw] md:w-[40rem] gap-2 md:gap-8 gap-y-8 md:gap-y-14 grid grid-cols-3 md:grid-cols-6 items-center">
        {arrFull.map((tech, idx) => (
          <motion.div
            variants={iconVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            key={tech + idx}
            className="flex flex-col gap-y-3 items-center justify-center"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 relative">
              {tech.name && (
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  className="object-contain object-center w-full h-full filter grayscale-[40%] "
                  width={1000}
                  height={1000}
                />
              )}
            </div>
            <p className="text-xs md:text-sm font-montserrat text-gray-500">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
