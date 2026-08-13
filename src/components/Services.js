"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Clock3,
  Sparkles,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    name: "Couture Haircut & Blowout",
    category: "Cut & Style",
    duration: "60 min",
    price: "$95",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=90",
    desc: "A completely personalized haircut designed around your face shape, lifestyle, texture, and desired finish. Includes a relaxing cleanse, conditioning treatment, precision cut, and signature salon blowout.",
    features: [
      "Personalized consultation",
      "Precision haircut",
      "Premium conditioning",
      "Signature blowout",
    ],
  },
  {
    name: "Custom Balayage & Gloss",
    category: "Color Art",
    duration: "180 min",
    price: "$260+",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=90",
    desc: "Our signature dimensional color service combines hand-painted balayage with a customized gloss. Every tone is carefully selected to complement your complexion and create a natural, luminous finish.",
    features: [
      "Color consultation",
      "Hand-painted balayage",
      "Custom gloss",
      "Bond protection treatment",
    ],
  },
  {
    name: "Scalp Detox & Hair Spa",
    category: "Hair Wellness",
    duration: "45 min",
    price: "$75",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=90",
    desc: "A restorative scalp and hair ritual designed to refresh buildup, improve scalp comfort, and restore softness and shine. Perfect for clients looking for a relaxing wellness-focused experience.",
    features: [
      "Scalp analysis",
      "Botanical exfoliation",
      "Scalp massage",
      "Deep conditioning mask",
    ],
  },
  {
    name: "Silk Press & Keratin Care",
    category: "Smoothing",
    duration: "120 min",
    price: "$180",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8b2d4b8c5?auto=format&fit=crop&w=900&q=90",
    desc: "Transform your hair with a smoothing and strengthening treatment designed to reduce frizz, enhance shine, and create a silky, polished finish while maintaining natural movement.",
    features: [
      "Hair assessment",
      "Keratin treatment",
      "Heat protection",
      "Silk press finish",
    ],
  },
  {
    name: "Luxury Hair Extensions",
    category: "Extensions",
    duration: "150 min",
    price: "$320+",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=90",
    desc: "Premium hair extensions customized for length, volume, and color. Our specialists carefully match your natural hair to create a seamless and comfortable result.",
    features: [
      "Extension consultation",
      "Custom color matching",
      "Premium hair selection",
      "Professional installation",
    ],
  },
  {
    name: "Signature Hair Treatment",
    category: "Treatment",
    duration: "75 min",
    price: "$120",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=90",
    desc: "A luxurious restorative treatment created for dry, damaged, or stressed hair. Combines professional products with customized techniques to bring back softness, strength, and shine.",
    features: [
      "Hair consultation",
      "Customized treatment",
      "Deep hydration",
      "Luxury finishing",
    ],
  },
];

export default function Services() {
  const [openService, setOpenService] = useState(null);

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  const bookService = (service) => {
    document.getElementById("reservation")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-rose-300" />

            <span className="text-xs font-bold tracking-[0.25em] text-rose-300 uppercase">
              Signature Menu
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif text-stone-100">
            Bespoke Treatments
          </h2>

          <p className="text-stone-400 text-sm max-w-xl mt-4 leading-relaxed">
            Explore our collection of professional hair services, carefully
            designed to deliver personalized results and a luxury salon
            experience.
          </p>
        </div>

        {/* SERVICE COUNT */}
        <div className="flex items-center gap-3 text-stone-500">
          <Sparkles size={16} className="text-rose-200" />

          <span className="text-xs uppercase tracking-widest">
            {services.length} Signature Services
          </span>
        </div>
      </div>

      {/* SERVICES */}
      <div className="grid lg:grid-cols-2 gap-5">
        {services.map((item, index) => {
          const isOpen = openService === index;

          return (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                isOpen
                  ? "border-rose-200/30 bg-stone-900"
                  : "border-stone-800 bg-stone-900/50 hover:border-stone-700"
              }`}>
              {/* MAIN SERVICE ROW */}
              <button
                type="button"
                onClick={() => toggleService(index)}
                className="w-full text-left">
                <div className="flex gap-4 p-4 sm:p-5">
                  {/* IMAGE */}
                  <div className="relative w-24 sm:w-32 h-28 sm:h-36 shrink-0 overflow-hidden rounded-xl bg-stone-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=90";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <span className="absolute bottom-2 left-2 text-[8px] uppercase tracking-wider font-bold text-white">
                      {item.category}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[9px] text-stone-600 font-mono">
                          0{index + 1}
                        </span>

                        <h3
                          className={`text-lg sm:text-xl font-serif mt-1 transition-colors ${
                            isOpen
                              ? "text-rose-200"
                              : "text-stone-100 group-hover:text-rose-200"
                          }`}>
                          {item.name}
                        </h3>
                      </div>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        className="text-stone-500 shrink-0">
                        <ChevronDown size={19} />
                      </motion.span>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-1 mt-3">
                      <Star size={12} className="fill-rose-200 text-rose-200" />

                      <span className="text-[11px] text-stone-400">
                        {item.rating}
                      </span>

                      <span className="text-stone-700 mx-1">•</span>

                      <Clock3 size={12} className="text-stone-600" />

                      <span className="text-[11px] text-stone-500">
                        {item.duration}
                      </span>
                    </div>

                    {/* PRICE */}
                    <div className="flex items-end justify-between mt-4">
                      <span className="text-xl font-serif font-light text-rose-200">
                        {item.price}
                      </span>

                      <span className="text-[9px] uppercase tracking-widest text-stone-600">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* DETAILS */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5">
                      <div className="border-t border-stone-800 pt-5">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-rose-300">
                          About This Treatment
                        </span>

                        <p className="text-sm text-stone-400 leading-7 mt-3">
                          {item.desc}
                        </p>

                        {/* FEATURES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
                          {item.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-xs text-stone-400">
                              <span className="w-5 h-5 rounded-full bg-rose-200/10 flex items-center justify-center">
                                <Check size={11} className="text-rose-200" />
                              </span>

                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-5 border-t border-stone-800">
                          <div>
                            <p className="text-[9px] uppercase tracking-widest text-stone-600">
                              Starting From
                            </p>

                            <p className="text-2xl font-serif text-rose-200 mt-1">
                              {item.price}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => bookService(item)}
                            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-rose-200 text-stone-950 text-xs font-bold tracking-widest uppercase hover:bg-rose-300 transition">
                            Book This Service
                            <ArrowRight size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {/* BOTTOM NOTE */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 text-center">
        <Sparkles size={14} className="text-rose-300" />

        <p className="text-[10px] uppercase tracking-[0.15em] text-stone-600">
          Every appointment begins with a personalized consultation
        </p>
      </div>
    </section>
  );
}
