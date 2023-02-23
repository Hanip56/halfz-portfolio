import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideAlerter from "../utils/clickOutside";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const barRef = useRef(null);
  const router = useRouter();
  //   const navigate = useNavigate();

  const handleNavigate = (route, offset) => {
    setShowMenu(false);

    if (router.pathname === "/") {
      const section = document.getElementById(route).offsetTop - offset;
      window.scroll({ top: section, behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const section = document.getElementById(route).offsetTop - 58;
        window.scroll({ top: section, behavior: "smooth" });
      }, 100);
    }
  };

  const handleClose = (route, offset) => {
    handleNavigate(route, offset);
  };

  useOutsideAlerter(barRef, setShowMenu);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="z-30 fixed w-screen h-16 top-0 bg-[#0d1828] py-6 px-6 md:px-14 flex justify-between text-gray-400 trackingWider"
      >
        <div
          className="w-7 h-7 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/self-logo.png"
            width={100}
            height={100}
            alt="halfz logo"
            className="w-full h-full object-contain"
          />
        </div>
        <ul className="hidden md:flex text-sm gap-x-12 font-semibold">
          <li className="navList" onClick={() => handleNavigate("About", 28)}>
            About
          </li>
          <li
            className="navList"
            onClick={() => handleNavigate("Expertise", 70)}
          >
            Expertise
          </li>
          <li
            className="navList"
            onClick={() => handleNavigate("Projects", 120)}
          >
            Projects
          </li>
          <li
            className="navList"
            onClick={() => handleNavigate("Contacts", 100)}
          >
            Contacts
          </li>
        </ul>
        <div></div>
        <div className="relative w-6 h-6 block md:hidden cursor-pointer">
          <svg
            x="0px"
            y="0px"
            width="63.1px"
            height="39.4px"
            viewBox="0 0 63.1 39.4"
            enableBackground="new 0 0 63.1 39.4"
            onClick={() => setShowMenu((state) => !state)}
            className="w-full h-full"
          >
            <line
              fill="none"
              stroke="#9ba2ae"
              strokeWidth="5"
              strokeMiterlimit="10"
              x1="0"
              y1="2.5"
              x2="63.1"
              y2="2.5"
            />
            <line
              fill="none"
              stroke="#9ba2ae"
              strokeWidth="5"
              strokeMiterlimit="10"
              x1="0"
              y1="19.7"
              x2="63.1"
              y2="19.7"
            />
            <line
              fill="none"
              stroke="#9ba2ae"
              strokeWidth="5"
              strokeMiterlimit="10"
              x1="0"
              y1="36.9"
              x2="63.1"
              y2="36.9"
            />
          </svg>
          <AnimatePresence>
            {showMenu && (
              <motion.div
                ref={barRef}
                initial={{ opacity: 0, scale: 0, originX: 1, originY: -0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute w-40 h-40 z-[60] -bottom-[10.2rem] -left-[8.5rem] bg-[#0e334f] rounded-md"
              >
                <ul className="py-2">
                  <li
                    className="navListMenu"
                    onClick={() => handleClose("About", 28)}
                  >
                    About
                  </li>
                  <li
                    className="navListMenu"
                    onClick={() => handleClose("Expertise", 70)}
                  >
                    Skills
                  </li>
                  <li
                    className="navListMenu"
                    onClick={() => handleClose("Projects", 120)}
                  >
                    Projects
                  </li>
                  <li
                    className="navListMenu"
                    onClick={() => handleClose("Contacts", 100)}
                  >
                    Contacts
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
