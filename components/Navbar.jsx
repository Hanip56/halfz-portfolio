import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideAlerter from "../utils/clickOutside";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
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

  const handleClickLogo = () => {
    if (router.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    router.push("/");
  };

  useOutsideAlerter(menuRef, setShowMenu);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="z-30 fixed w-screen h-16 top-0 bg-[#0d1828] py-6 px-6 md:px-14 flex items-center justify-between text-gray-400 trackingWider"
      >
        <div className="w-7 h-7 cursor-pointer" onClick={handleClickLogo}>
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
          <li className="navList" onClick={() => handleNavigate("Skills", 120)}>
            Skills
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
        <div className="hidden md:block">
          <a
            href="/Hanip Al Hapidz - Resume.pdf"
            aria-label="Open Hanip Al Hapidz's resume"
            target="_blank"
            rel="noreferrer"
          >
            <button className="py-[.1rem] px-2 border-2 border-white/90 text-sm text-white/90 hover:bg-white/30 transition-[background]">
              Resume
            </button>
          </a>
        </div>
        <div className="relative w-6 h-6 block md:hidden">
          {showMenu === false ? (
            <div
              onClick={() => setShowMenu(true)}
              className="absolute top-0 right-0 w-6 h-6 cursor-pointer z-20"
            >
              <HiBars3 className="w-full h-full" />
            </div>
          ) : (
            <div className="absolute top-0 right-0 w-6 h-6 cursor-pointer z-20">
              <HiX className="w-full h-full" />
            </div>
          )}

          <AnimatePresence>
            {showMenu && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, scale: 0, originX: 1, originY: -0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute w-40 h-fit z-[60] -bottom-[13.5rem] -left-[8.5rem] bg-[#0e334f] rounded-md"
              >
                <button
                  className="navListMenu"
                  onClick={() => handleClose("About", 28)}
                >
                  About
                </button>
                <button
                  className="navListMenu"
                  onClick={() => handleClose("Skills", 70)}
                >
                  Skills
                </button>
                <button
                  className="navListMenu"
                  onClick={() => handleClose("Projects", 120)}
                >
                  Projects
                </button>
                <button
                  className="navListMenu"
                  onClick={() => handleClose("Contacts", 100)}
                >
                  Contacts
                </button>
                <div className="">
                  <a
                    href="/Hanip Al Hapidz - Resume.pdf"
                    aria-label="Open Hanip Al Hapidz's resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="navListMenu border-t border-t-white/40 text-start mt-4 w-full flex items-center gap-2">
                      <span>Resume</span>
                      <span>
                        <CgFileDocument />
                      </span>
                    </button>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
