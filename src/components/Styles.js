"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const styles = [
  {
    title: "Soft Dimensional Balayage",
    category: "Women",
    type: "Color Art",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Modern Textured Fade",
    category: "Men",
    type: "Modern Cut",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Glossy Long Layers",
    category: "Women",
    type: "Gloss & Shine",
    image:
      "https://images.unsplash.com/photo-1560869713-da86a9ec032a?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Classic Gentleman Cut",
    category: "Men",
    type: "Classic Cut",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Elegant Salon Styling",
    category: "Women",
    type: "Signature Style",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Contemporary Men's Style",
    category: "Men",
    type: "Modern Cut",
    image:
      "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Kids Salon Style",
    category: "Kids",
    type: "Kids Style",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Family Signature Look",
    category: "All",
    type: "Signature Style",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = ["All", "Women", "Men", "Kids"];

export default function Styles() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStyles =
    activeCategory === "All"
      ? styles
      : styles.filter((style) => style.category === activeCategory);

  return (
    <section id="styles" className="py-24 px-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
        <div>
          <span className="text-xs font-bold tracking-[0.25em] text-rose-300 uppercase">
            Lookbook
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif text-stone-100 mt-3">
            Signature Styles
          </h2>

          <p className="text-sm text-stone-500 mt-3 max-w-md">
            Explore our latest salon looks, curated cuts, colors, and treatments
            for every style and age.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition ${
                  active
                    ? "bg-rose-200 text-stone-950"
                    : "bg-stone-900 text-stone-400 border border-stone-800 hover:text-stone-100 hover:border-stone-700"
                }`}>
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* STYLE GRID */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredStyles.map((item) => (
            <motion.article
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group">
              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-900 border border-stone-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85";
                  }}
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

                {/* CATEGORY */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex px-3 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-sm text-[10px] font-semibold tracking-widest uppercase text-rose-200 border border-stone-700/70">
                    {item.category}
                  </span>
                </div>

                {/* VIEW BUTTON */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("reservation")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    className="w-full py-3 rounded-xl bg-rose-200 text-stone-950 text-xs font-bold tracking-widest uppercase hover:bg-rose-300 cursor-pointer transition">
                    Book This Style
                  </button>
                </div>
              </div>

              {/* DETAILS */}
              <div className="pt-4 px-1">
                <span className="text-[10px] uppercase font-semibold tracking-[0.15em] text-rose-300">
                  {item.type}
                </span>

                <h3 className="text-lg font-serif text-stone-100 mt-1 group-hover:text-rose-200 transition">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-stone-500">
                    {item.category} Collection
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("reservation")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    className="text-xs text-stone-400 hover:text-rose-200 transition">
                    View →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
