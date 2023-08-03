import React from "react";
import { motion } from "framer-motion";
import { BsQuestionLg } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="About"
      className="mx-auto flex flex-col md:flex-row justify-center items-center gap-x-12"
    >
      <motion.div
        initial={{ marginRight: 150, opacity: 0 }}
        whileInView={{ marginRight: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:flex-1 justify-self-end text-end mb-12 md:mb-0"
      >
        <div className="relative w-40 md:w-56 h-40 md:h-[21rem] bg-[#c25051] ml-auto">
          <BsQuestionLg className="absolute w-full h-full text-red-100/10" />
          <h1 className="absolute text-4xl md:text-5xl text-txtWhite font-bold -ml-16 mt-4 md:mt-14">
            WHO
            <br />
            AM
            <br />I
          </h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="basis-[50%] text-justify md:text-start"
      >
        <h2 className="titleBlue inline-block">About Me</h2>
        <p className="text-gray-400 max-w-xs text-sm md:text-base   sm:max-w-md md:max-w-xs  leading-6">
          Hi there! My name is Hanip Al Hapidz, I&apos;m a Front End Developer
          from bandung, Indonesia. <br />
          <br />{" "}
          <span>
            My expertise lies in developing responsive and scalable web
            solutions with modern frontend frameworks such as React, And NextJS.
            I&apos;m experienced in integrating RESTful APIs, third-party
            libraries, and plugins into web applications to enhance
            functionality and performance.
          </span>
          {/* <br /> <br />{" "}
          <span>
            Besides coding, I enjoy learn many technologies and make a lot of
            different thing, from graphic design, motion graphic, Web Design,
            And more.
          </span> */}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
