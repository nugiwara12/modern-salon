"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, X, Award, Clock3 } from "lucide-react";

const stylists = [
  {
    name: "Elena Rostova",
    role: "Creative Director",
    exp: "12+ Years",
    rating: "4.9",
    specialty: "Color & Balayage",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&auto=format&fit=crop&q=85",
    description:
      "Elena is a highly experienced creative director and master colorist known for creating natural dimensional color and personalized transformations.",
    about:
      "With over 12 years in the beauty industry, Elena specializes in balayage, dimensional color, and luxury hair transformations. Her approach combines technical precision with a personalized understanding of each client's style.",
  },
  {
    name: "Chloe Laurent",
    role: "Editorial Hair Stylist",
    exp: "9 Years",
    rating: "4.8",
    specialty: "Styling & Cuts",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=700&auto=format&fit=crop&q=85",
    description:
      "Chloe creates sophisticated editorial looks, modern cuts, and effortless styles inspired by fashion and contemporary beauty.",
    about:
      "Chloe has spent 9 years working with modern styling techniques and editorial-inspired looks. She is passionate about creating hairstyles that are both fashionable and easy to maintain.",
  },
  {
    name: "Sienna Miller",
    role: "Balayage Specialist",
    exp: "7 Years",
    rating: "4.9",
    specialty: "Extensions & Color",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&auto=format&fit=crop&q=85",
    description:
      "Sienna specializes in soft balayage, premium extensions, and customized color designed to complement each client's features.",
    about:
      "With 7 years of professional experience, Sienna focuses on creating seamless color transitions and natural-looking extensions. She is especially known for soft, low-maintenance balayage.",
  },
  {
    name: "Amelia Rose",
    role: "Senior Hair Designer",
    exp: "10+ Years",
    rating: "4.9",
    specialty: "Cuts & Treatments",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&auto=format&fit=crop&q=85",
    description:
      "Amelia creates refined cuts and restorative treatments designed to improve both the appearance and health of the hair.",
    about:
      "Amelia brings more than a decade of experience in precision cutting and professional hair treatments. Her goal is to create beautiful styles while maintaining healthy, manageable hair.",
  },
  {
    name: "Sofia Bennett",
    role: "Hair Color Specialist",
    exp: "8 Years",
    rating: "4.8",
    specialty: "Color & Highlights",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=85",
    description:
      "Sofia is known for personalized highlights, rich tones, and modern color techniques that enhance natural beauty.",
    about:
      "Sofia has 8 years of experience specializing in highlights, color correction, and modern hair coloring. She believes every color service should be customized to the client's lifestyle.",
  },
];

export default function Team() {
  const [paused, setPaused] = useState(false);
  const [selectedStylist, setSelectedStylist] = useState(null);

  const carouselItems = [...stylists, ...stylists];

  const bookAppointment = () => {
    setSelectedStylist(null);

    setTimeout(() => {
      document.getElementById("reservation")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <>
      <section id="team" className="py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-rose-300 uppercase">
                Our Artists
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-stone-100 mt-2">
                Meet Our Stylists
              </h2>

              <p className="text-sm text-stone-500 mt-3 max-w-lg">
                Discover our professional artists and find the perfect stylist
                for your next look.
              </p>
            </div>

            <button
              type="button"
              onClick={bookAppointment}
              className="self-start md:self-auto px-5 py-3 rounded-full bg-rose-200 text-stone-950 text-xs font-bold tracking-widest uppercase hover:bg-rose-300 transition">
              Book Appointment
            </button>
          </div>

          {/* CAROUSEL */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}>
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-stone-950 to-transparent pointer-events-none" />

            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-stone-950 to-transparent pointer-events-none" />

            <motion.div
              className="flex gap-5 w-max"
              animate={{
                x: paused ? undefined : ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}>
              {carouselItems.map((person, index) => (
                <motion.button
                  key={`${person.name}-${index}`}
                  type="button"
                  onClick={() => setSelectedStylist(person)}
                  whileHover={{
                    y: -8,
                  }}
                  className="group w-[270px] sm:w-[310px] lg:w-[340px] shrink-0 text-left bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-rose-300/50 transition-colors">
                  {/* IMAGE */}
                  <div className="relative aspect-[4/4.5] overflow-hidden bg-stone-950">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&auto=format&fit=crop&q=85";
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* RATING */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-stone-950/80 backdrop-blur border border-stone-700/60">
                      <Star size={12} className="fill-rose-200 text-rose-200" />

                      <span className="text-xs font-semibold text-white">
                        {person.rating}
                      </span>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-rose-200 text-stone-950 text-[10px] font-bold uppercase tracking-wider">
                        {person.exp}
                      </span>
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="p-5">
                    <h3 className="text-xl font-serif text-stone-100">
                      {person.name}
                    </h3>

                    <p className="text-rose-200 text-xs mt-2">{person.role}</p>

                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-stone-800">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-stone-600">
                          Specialty
                        </span>

                        <p className="text-xs text-stone-400 mt-1">
                          {person.specialty}
                        </p>
                      </div>

                      <span className="w-9 h-9 rounded-full bg-rose-200 text-stone-950 flex items-center justify-center group-hover:bg-rose-300 transition">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* LIVE INDICATOR */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-300" />
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
              Live Style Collection
            </span>
          </div>
        </div>
      </section>

      {/* STYLIST MODAL */}
      <AnimatePresence>
        {selectedStylist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStylist(null)}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-stone-950 border border-stone-800 rounded-3xl shadow-2xl">
              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setSelectedStylist(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-stone-950/80 backdrop-blur border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 flex items-center justify-center transition">
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* IMAGE */}
                <div className="relative min-h-[350px] md:min-h-[500px]">
                  <img
                    src={selectedStylist.image}
                    alt={selectedStylist.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="px-3 py-1.5 rounded-full bg-rose-200 text-stone-950 text-[10px] font-bold uppercase tracking-wider">
                      {selectedStylist.exp}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-rose-300 font-semibold">
                    {selectedStylist.specialty}
                  </span>

                  <h2 className="text-3xl font-serif text-stone-100 mt-2">
                    {selectedStylist.name}
                  </h2>

                  <p className="text-rose-200 text-sm mt-2">
                    {selectedStylist.role}
                  </p>

                  {/* RATING */}
                  <div className="flex items-center gap-2 mt-5">
                    <div className="flex items-center gap-1">
                      <Star size={15} className="fill-rose-200 text-rose-200" />

                      <span className="text-sm font-semibold text-stone-200">
                        {selectedStylist.rating}
                      </span>
                    </div>

                    <span className="text-stone-700">•</span>

                    <span className="text-xs text-stone-500">
                      Professional Stylist
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mt-7">
                    <h3 className="text-sm font-semibold text-stone-100">
                      About {selectedStylist.name.split(" ")[0]}
                    </h3>

                    <p className="text-sm leading-7 text-stone-400 mt-3">
                      {selectedStylist.description}
                    </p>
                  </div>

                  {/* ABOUT */}
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-stone-100">
                      Experience
                    </h3>

                    <p className="text-sm leading-7 text-stone-400 mt-3">
                      {selectedStylist.about}
                    </p>
                  </div>

                  {/* INFO */}
                  <div className="grid grid-cols-2 gap-3 mt-7">
                    <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <Award size={16} className="text-rose-200" />

                      <p className="text-[9px] uppercase tracking-widest text-stone-600 mt-2">
                        Experience
                      </p>

                      <p className="text-xs text-stone-300 mt-1">
                        {selectedStylist.exp}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <Clock3 size={16} className="text-rose-200" />

                      <p className="text-[9px] uppercase tracking-widest text-stone-600 mt-2">
                        Specialty
                      </p>

                      <p className="text-xs text-stone-300 mt-1">
                        {selectedStylist.specialty}
                      </p>
                    </div>
                  </div>

                  {/* BOOK */}
                  <button
                    type="button"
                    onClick={bookAppointment}
                    className="w-full mt-6 py-4 rounded-xl bg-rose-200 text-stone-950 text-xs font-bold tracking-widest uppercase hover:bg-rose-300 transition">
                    Book With {selectedStylist.name.split(" ")[0]}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
