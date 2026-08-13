"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const BackTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showScrollButton && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-amber-500/30 bg-rose-200 text-black shadow-lg shadow-amber-600/20 backdrop-blur-sm"
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.7,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#ddacd2",
            boxShadow: "0 12px 25px rgba(217, 119, 6, 0.25)",
          }}
          whileTap={{
            scale: 0.9,
          }}>
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <FiArrowUp className="text-xl" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackTop;
