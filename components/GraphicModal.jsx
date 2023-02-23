import { motion } from "framer-motion";
import { useEffect } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";

const GraphicModal = ({ setShowModal, currentGrahpicInfo }) => {
  const [indexImg, setIndexImg] = useState(0);

  useEffect(() => {
    document.querySelector("body").classList.add("stop-scrolling");
    document.querySelector("body").style.overflow = "hidden";

    return () => {
      document.querySelector("body").classList.remove("stop-scrolling");
      document.querySelector("body").style.overflow = "unset";
    };
  }, []);

  const handleNavigate = (direction) => {
    if (direction === "back") {
      if (indexImg !== 0) {
        setIndexImg((prev) => prev - 1);
      }
    }
    if (direction === "next") {
      if (indexImg !== currentGrahpicInfo?.images?.length - 1) {
        setIndexImg((prev) => prev + 1);
      }
    }
  };

  return (
    <div id="graphic_modal" className="fixed w-screen h-screen z-30">
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        onClick={() => setShowModal(false)}
        className="z-40 fixed top-0 left-0 h-screen w-screen bg-black/90 flex justify-center items-center"
      ></motion.div>

      {/* header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="z-[60] fixed h-[10%] w-full flex top-0 left-0 p-4 px-6 lg:px-8 justify-between items-center"
      >
        <h2 className="text-base lg:text-xl font-bold text-gray-200">
          {currentGrahpicInfo?.name}
        </h2>
        <HiX
          className="text-gray-400 cursor-pointer"
          onClick={() => setShowModal(false)}
          size={28}
        />
      </motion.div>

      {/* navigation back */}
      <motion.button
        initial={{ opacity: 0, translateY: "-50%" }}
        animate={{ opacity: 1 }}
        className={`z-[60] fixed left-3 top-[50%] flex p-1 md:p-2 justify-between items-center border border-white rounded-full ${
          indexImg === 0
            ? "cursor-not-allowed bg-gray-800"
            : "cursor-pointer hover:bg-gray-800"
        }`}
        onClick={() => handleNavigate("back")}
        disabled={indexImg === 0}
      >
        <HiChevronLeft size={34} className="text-gray-300" />
      </motion.button>

      {/* navigation next */}
      <motion.button
        initial={{ opacity: 0, translateY: "-50%" }}
        animate={{ opacity: 1 }}
        className={`z-[60] fixed right-3 top-[50%] flex p-1 md:p-2 justify-between items-center border border-white rounded-full ${
          indexImg === currentGrahpicInfo?.images?.length - 1
            ? "cursor-not-allowed bg-gray-800"
            : "cursor-pointer hover:bg-gray-800"
        }`}
        onClick={() => handleNavigate("next")}
        disabled={indexImg === currentGrahpicInfo?.images?.length - 1}
      >
        <HiChevronRight size={34} className="text-gray-300" />
      </motion.button>

      {/* footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="z-[60] fixed h-[15%] w-full flex bottom-0 left-0 p-4 px-8 justify-center items-center gap-4 overflow-x-auto"
      >
        {currentGrahpicInfo?.images?.map((el, idx) => (
          <button
            key={idx}
            className={`w-16 h-16 rounded-md overflow-hidden ${
              idx === indexImg ? "p-1 border border-white" : ""
            }`}
            onClick={() => setIndexImg(idx)}
          >
            <Image
              key={idx}
              src={el}
              alt={`images-${idx}`}
              className={`w-full h-full object-cover`}
              width={1000}
              height={1000}
            />
          </button>
        ))}
      </motion.div>

      {/* image */}
      <motion.div
        initial={{ opacity: 0, y: "-50%", x: "-50%" }}
        animate={{ opacity: 1 }}
        className="z-50 fixed h-[70%] w-[60%] md:w-fit  flex top-[50%] left-[50%]"
      >
        <img
          src={currentGrahpicInfo?.images[indexImg]}
          alt={currentGrahpicInfo?.name}
          className={`object-contain w-full h-full`}
        />
      </motion.div>
    </div>
  );
};

export default GraphicModal;
