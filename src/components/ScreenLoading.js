"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors } from "lucide-react";

export default function ScreenLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex min-h-screen w-full items-center justify-center overflow-hidden bg-stone-950">
          {/* Background Glow */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/5 blur-[120px]" />

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/10 blur-[100px]"
            />
          </div>

          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
          </div>

          {/* Main */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-rose-200/20 bg-white/[0.03] backdrop-blur-xl">
              <div className="absolute inset-2 rounded-full border border-rose-200/10" />

              <motion.div
                animate={{
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <Scissors
                  size={30}
                  strokeWidth={1.2}
                  className="text-rose-200"
                />
              </motion.div>
            </motion.div>

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}>
              <h1 className="font-serif text-4xl tracking-tight text-white sm:text-5xl">
                Kusina
                <span className="italic font-light text-rose-200">Manila</span>
              </h1>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 sm:text-[10px]">
                Luxury Hair Studio & Spa
              </p>
            </motion.div>

            {/* Loading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 w-48 sm:w-56">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500">
                  Preparing
                </span>

                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                  className="text-[9px] uppercase tracking-[0.2em] text-rose-200">
                  Please wait
                </motion.span>
              </div>

              {/* Progress */}
              <div className="h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2.7,
                    ease: "easeInOut",
                  }}
                  className="h-full bg-rose-200"
                />
              </div>
            </motion.div>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-[9px] tracking-[0.2em] text-stone-600">
              YOUR SIGNATURE STYLE AWAITS
            </motion.p>
          </div>

          {/* Corner Decorations */}
          <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-white/10" />
          <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-white/10" />
          <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-white/10" />
          <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
