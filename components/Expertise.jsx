import React, { useState } from "react";
import { motion } from "framer-motion";
import { revealVariants } from "../utils/variants";
import ExpertiseCard from "./ExpertiseCard";
import { expertiseList } from "../constants/info";

const Expertise = () => {
  const [showState, setShowState] = useState([false, false, false]);

  return (
    <section
      id="Expertise"
      className="min-h-screen flex flex-col justify-center items-center text-center my-8"
    >
      <motion.div
        variants={revealVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="mb-10 md:mb-20 mt-8 md:mt-0"
      >
        <h2 className="titleWhite">My Expertise</h2>
      </motion.div>

      <div className="w-[90vw] lg:w-[60rem] flex flex-col gap-10">
        {expertiseList?.map((expertise, idx) => (
          <ExpertiseCard
            key={idx}
            name={expertise.name}
            description={expertise.description}
            tech={expertise.tech}
            showState={showState[idx]}
            setShowState={() =>
              setShowState((prev) =>
                prev.map((p, pindex) => (pindex === idx ? !p : p))
              )
            }
            badgeColor={expertise.badgeColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
