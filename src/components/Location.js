"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center bg-stone-900/40 p-8 sm:p-12 rounded-3xl border border-stone-800/80">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] text-rose-300 uppercase">
            Sanctuary
          </span>
          <h2 className="text-3xl font-serif text-stone-100 mt-2 mb-6">
            Aura Studio Location
          </h2>

          <div className="space-y-4 text-sm text-stone-400">
            <p>
              <strong className="text-stone-200 block">Address:</strong> 450
              Madison Avenue, 3rd Floor, New York, NY
            </p>
            <p>
              <strong className="text-stone-200 block">Hours:</strong> Tue –
              Sat: 10:00 AM – 7:00 PM | Sun - Mon: Closed
            </p>
            <p>
              <strong className="text-stone-200 block">Contact:</strong>{" "}
              concierge@aurastudio.com | (212) 555-0198
            </p>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="h-64 w-full rounded-2xl overflow-hidden border border-stone-800">
          <iframe
            title="Aura Studio Location Map"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(1) contrast(1.2) opacity(0.8)",
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=450%20Madison%20Avenue%20New%20York&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
      </motion.div>
    </section>
  );
}
