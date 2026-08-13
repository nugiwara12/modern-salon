"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const slides = [
  {
    title: "Elevate Your Natural",
    highlight: "Radiance.",
    description:
      "Bespoke hair design, luxury balayage, organic scalp therapies, and personalized transformations.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=2000&q=90",
  },
  {
    title: "Discover Your",
    highlight: "Signature Style.",
    description:
      "Modern cuts, dimensional color, and effortless styling designed around your unique personality.",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=90",
  },
  {
    title: "Luxury Hair",
    highlight: "Reimagined.",
    description:
      "Experience a modern beauty sanctuary where expert artistry meets personalized luxury.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2000&q=90",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[720px]
        sm:min-h-[760px]
        md:min-h-[780px]
        lg:min-h-screen
        flex
        items-center
        overflow-hidden
        pt-28
        pb-28
        sm:pt-32
        sm:pb-32
        md:pt-32
        md:pb-36
        px-4
        sm:px-6
        lg:px-8
      ">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}>
          <source
            src="https://cdn.coverr.co/videos/coverr-a-woman-getting-her-hair-done-1574/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* FALLBACK IMAGE */}
        <AnimatePresence mode="wait">
          {!videoLoaded && (
            <motion.img
              key={slides[current].image}
              src={slides[current].image}
              alt=""
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          )}
        </AnimatePresence>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-stone-950 to-transparent" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="w-full max-w-4xl">
          {/* LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7">
            <span className="w-6 sm:w-10 h-px bg-rose-200 shrink-0" />

            <span className="text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-rose-200">
              High-End Hair Studio & Spa
            </span>
          </motion.div>

          {/* TITLE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.5,
              }}>
              <h1
                className="
                  text-[2.7rem]
                  leading-[0.98]
                  sm:text-5xl
                  sm:leading-[0.98]
                  md:text-6xl
                  md:leading-[0.95]
                  lg:text-8xl
                  font-serif
                  text-white
                  tracking-tight
                  mb-6
                  sm:mb-8
                  max-w-4xl
                ">
                {slides[current].title}{" "}
                <span className="italic font-light text-rose-200">
                  {slides[current].highlight}
                </span>
              </h1>

              <p
                className="
                  text-stone-300
                  text-xs
                  sm:text-sm
                  md:text-base
                  leading-6
                  sm:leading-relaxed
                  max-w-[95%]
                  sm:max-w-xl
                  mb-7
                  sm:mb-10
                ">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* ================= BUTTONS ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              flex
              flex-col
              xs:flex-row
              sm:flex-row
              gap-3
              sm:gap-4
              w-full
              sm:w-auto
            ">
            <button
              type="button"
              onClick={() =>
                document.getElementById("reservation")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
                w-full
                sm:w-auto
                bg-rose-200
                text-stone-950
                px-6
                sm:px-8
                py-3.5
                sm:py-4
                rounded-full
                text-[10px]
                sm:text-xs
                font-bold
                tracking-[0.15em]
                sm:tracking-widest
                uppercase
                hover:bg-rose-300
                transition
              ">
              Reserve Session
            </button>

            <button
              type="button"
              onClick={() =>
                document.getElementById("styles")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
                text-white
                px-6
                sm:px-8
                py-3.5
                sm:py-4
                rounded-full
                text-[10px]
                sm:text-xs
                font-bold
                tracking-[0.15em]
                sm:tracking-widest
                uppercase
                hover:bg-white/10
                transition
              ">
              <Play size={13} />
              Explore Styles
            </button>
          </motion.div>
        </div>
      </div>

      {/* ================= SLIDER CONTROLS ================= */}
      <div
        className="
          absolute
          bottom-7
          sm:bottom-8
          left-4
          right-4
          sm:left-6
          sm:right-6
          lg:left-auto
          lg:right-8
          flex
          items-center
          justify-between
          sm:justify-end
          gap-2
          sm:gap-4
          z-20
        ">
        {/* NUMBER + PROGRESS */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-[10px] sm:text-xs text-stone-400 font-mono whitespace-nowrap">
            <span className="text-rose-200">
              {String(current + 1).padStart(2, "0")}
            </span>

            <span className="mx-1 sm:mx-2 text-stone-700">/</span>

            {String(slides.length).padStart(2, "0")}
          </div>

          <div className="w-14 sm:w-24 md:w-32 h-px bg-white/20 overflow-hidden">
            <motion.div
              key={current}
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 6,
                ease: "linear",
              }}
              className="h-full bg-rose-200"
            />
          </div>
        </div>

        {/* ARROWS */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              border
              border-white/20
              bg-black/30
              backdrop-blur-md
              text-white
              flex
              items-center
              justify-center
              hover:bg-white/10
              active:scale-95
              transition
            ">
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              border
              border-white/20
              bg-black/30
              backdrop-blur-md
              text-white
              flex
              items-center
              justify-center
              hover:bg-white/10
              active:scale-95
              transition
            ">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ================= DOTS ================= */}
      <div
        className="
          absolute
          bottom-20
          sm:bottom-20
          left-1/2
          -translate-x-1/2
          flex
          items-center
          gap-2
          z-20
        ">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group p-1">
            <span
              className={`block h-1 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-8 sm:w-10 bg-rose-200"
                  : "w-2.5 sm:w-3 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ================= SCROLL ================= */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          hidden
          xl:flex
          flex-col
          items-center
          gap-2
          text-white/40
        ">
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="w-px h-8 bg-white/30"
        />
      </motion.div>
    </section>
  );
}
