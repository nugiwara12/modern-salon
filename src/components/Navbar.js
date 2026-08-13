"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { name: "Welcome", href: "#hero", id: "hero" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Hair Trends", href: "#styles", id: "styles" },
  { name: "Stylists", href: "#team", id: "team" },
  { name: "Book", href: "#reservation", id: "reservation" },
  { name: "Visit Us", href: "#location", id: "location" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigation = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);
    setMobileMenuOpen(false);

    setTimeout(() => {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] bg-stone-950 border-b border-stone-800/70"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* LOGO */}
            <button
              type="button"
              onClick={(e) => handleNavigation(e, "hero")}
              className="text-xl sm:text-2xl font-semibold tracking-[0.18em] uppercase text-rose-200">
              Aura <span className="text-stone-100">Studio</span>
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => handleNavigation(e, item.id)}
                    className={`relative py-2 text-xs font-medium tracking-wider transition-colors ${
                      isActive
                        ? "text-rose-200"
                        : "text-stone-400 hover:text-stone-100"
                    }`}>
                    {item.name}

                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 rounded-full bg-rose-200"
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                      }}
                    />
                  </button>
                );
              })}

              <button
                type="button"
                onClick={(e) => handleNavigation(e, "reservation")}
                className="ml-3 rounded-full bg-rose-200 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-stone-950 hover:bg-rose-300 transition">
                Book Appointment
              </button>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-stone-200 rounded-lg hover:bg-stone-900 transition"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-x-0 top-20 z-[9999] bg-stone-950 border-t border-stone-800 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}>
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-5 py-5">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={(e) => handleNavigation(e, item.id)}
                      className={`w-full flex items-center justify-between rounded-xl px-4 py-4 text-left text-sm font-medium transition ${
                        isActive
                          ? "bg-stone-900 text-rose-200"
                          : "text-stone-400 hover:bg-stone-900 hover:text-stone-100"
                      }`}>
                      <span>{item.name}</span>

                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-rose-200" />
                      )}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={(e) => handleNavigation(e, "reservation")}
                  className="w-full mt-4 rounded-full bg-rose-200 px-4 py-4 text-center text-xs font-semibold tracking-wider uppercase text-stone-950 hover:bg-rose-300 transition">
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
