import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

const Contacts = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  useEffect(() => {
    let handleTimeout;

    if (message) {
      handleTimeout = setTimeout(() => {
        setMessage("");
      }, 3000);
    }

    return () => {
      clearTimeout(handleTimeout);
    };
  }, [message]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z7ek8pc",
        "template_tz0bfvv",
        form.current,
        "VgjmHZwFLAiGQW1Pg"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setMessage("Sended, Thanks for the message !");
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send.");
        }
      );
  };

  return (
    <section
      id="Contacts"
      className="flex flex-col items-center justify-center text-txtWhite"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative h-full w-[90vw] md:w-[45rem] flex flex-col md:flex-row gap-x-12 gap-y-4 bg-black/20 -translate-x-[50%]"
      >
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 100, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/20 px-6 py-1 border border-white/30"
            >
              <p className="text-sm md:text-base text-white">
                Sended, Thanks for the message !
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="basis-[5%] h-full space-y-6 pt-8"
        >
          <h1 className="relative md:absolute md:-ml-16 text-4xl md:text-5xl text-txtWhite text-center md:text-end font-bold leading-[1rem]">
            <span className="text-4xl md:text-6xl">LETS </span>
            <span className="inline md:hidden">TALK</span>
            <br />
            <span className="hidden md:inline">TALK</span>
          </h1>
        </motion.div>
        <motion.div className="flex-1">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-6 flex flex-col gap-y-6 w-full"
          >
            <div className="w-full py-3 px-6 bg-gray-500/5 text-sm">
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required={true}
                className="w-full bg-transparent outline-none"
              />
            </div>
            <div className="w-full py-3 px-6 bg-gray-500/5 text-sm">
              <input
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required={true}
                className="w-full bg-transparent outline-none border-none"
              />
            </div>
            <div className="w-full py-3 px-6 bg-gray-500/5 text-sm">
              <textarea
                name="message"
                placeholder="Message"
                autoComplete="off"
                required={true}
                className="w-full bg-transparent outline-none border-none"
                rows={8}
              />
            </div>
            <button className="bg-[#c25051] hover:bg-[#c25051]/80 transition-[background] px-10 py-[0.15rem] text-sm text-txtWhite mt-2 mx-auto">
              Send
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contacts;
