import React from "react";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { revealVariants } from "../utils/variants";

const Footer = () => {
  return (
    <motion.div
      variants={revealVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="flex flex-col gap-y-3 w-full justify-center items-center"
    >
      <div className="flex gap-x-6">
        <a
          aria-label="Go to facebook's Hanip Al Hapidz"
          href="https://web.facebook.com/profile.php?id=100013318570073"
          target="blank"
        >
          <FaFacebookSquare className="text-gray-400 hover:text-white text-xl md:text-2xl " />
        </a>
        <a
          aria-label="Go to github's Hanip Al Hapidz"
          href="https://github.com/Hanip56"
          target="blank"
        >
          <FaGithub className="text-gray-400 hover:text-white text-xl md:text-2xl " />
        </a>
        <a
          aria-label="Go to instagram's Hanip Al Hapidz"
          href="https://www.instagram.com/hanipalhapidz/"
          target="blank"
        >
          <FaInstagram className="text-gray-400 hover:text-white text-xl md:text-2xl " />
        </a>
      </div>
      <p className="text-gray-400 text-xs md:text-sm text-center mx-auto mb-4">
        © 2022, Built and designed by Hanip Al Hapidz
      </p>
    </motion.div>
  );
};

export default Footer;
