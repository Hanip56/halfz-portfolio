import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { revealVariants } from "../utils/variants";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Image from "next/image";

const ExpertiseCard = ({
  name,
  badgeColor,
  description,
  tech,
  showState,
  setShowState,
}) => {
  return (
    <motion.div
      variants={revealVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="flex md:gap-6 flex-col md:flex-row"
    >
      <div className="flex justify-center items-center md:basis-40 md:h-40 bg-[#102435] p-4 shadow-xl">
        <div>
          <p className="text-white font-bold">{name}</p>
        </div>
      </div>

      {/* description */}
      <div
        className={`${
          showState ? "h-80" : "h-40"
        } transition-all duration-300 border-t-4 border-t-red-500 md:border-t-transparent md:border-l-8 border-l-red-500 flex-1 border-b border-b-gray-500 gap-2`}
      >
        {/* top */}
        <div className="flex flex-col md:flex-row min-h-40 py-4 justify-between">
          <p className="text-md md:text-lg text-center md:text-start px-6 py-4 text-gray-400">
            {description}
          </p>
          <button
            aria-label="Show Tech"
            className="flex self-center w-12 h-12 rounded-full border border-white justify-center items-center flex-shrink-0 hover:bg-white/20"
            onClick={setShowState}
          >
            <p className="text-white self-center">
              {showState ? (
                <MdOutlineKeyboardArrowUp size={24} />
              ) : (
                <MdOutlineKeyboardArrowDown size={24} />
              )}
            </p>
          </button>
        </div>
        {/* bottom */}
        {showState && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-center text-sm md:text-start md:ml-6 text-gray-400">
              Some Technology that i use :
            </p>
            <div className="grid grid-cols-autoLogoMobile gap-4 items-center my-8 justify-around md:my-12">
              {tech?.map((el, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center gap-3 flex-1 h-20 w-20"
                >
                  <Image
                    src={el.icon}
                    alt={el.name}
                    width={100}
                    height={100}
                    className="w-10 h-10 object-contain"
                  />
                  <p className="text-gray-400">{el.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;
