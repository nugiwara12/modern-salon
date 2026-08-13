"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import {
  CalendarDays,
  Clock3,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const styles = [
  {
    title: "Soft Dimensional Balayage",
    category: "Women",
    type: "Color Art",
    price: 260,
    duration: "180 min",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Modern Textured Fade",
    category: "Men",
    type: "Modern Cut",
    price: 45,
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Glossy Long Layers",
    category: "Women",
    type: "Gloss & Shine",
    price: 120,
    duration: "90 min",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Classic Gentleman Cut",
    category: "Men",
    type: "Classic Cut",
    price: 40,
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Elegant Salon Styling",
    category: "Women",
    type: "Signature Style",
    price: 85,
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Contemporary Men's Style",
    category: "Men",
    type: "Modern Cut",
    price: 55,
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Kids Salon Style",
    category: "Kids",
    type: "Kids Style",
    price: 30,
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Family Signature Look",
    category: "All",
    type: "Signature Style",
    price: 100,
    duration: "90 min",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
  },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Reservation() {
  const today = new Date();

  const [selectedStyle, setSelectedStyle] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);

  const [calendarMonth, setCalendarMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const daysInMonth = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= totalDays; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [calendarMonth]);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatMonth = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const isToday = (date) => {
    if (!date) return false;

    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPast = (date) => {
    if (!date) return true;

    const current = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    return date < current;
  };

  const isSelected = (date) => {
    if (!date || !formData.date) return false;

    const selected = new Date(formData.date);

    return (
      date.getDate() === selected.getDate() &&
      date.getMonth() === selected.getMonth() &&
      date.getFullYear() === selected.getFullYear()
    );
  };

  const selectDate = (date) => {
    if (!date || isPast(date)) return;

    const formatted = `${date.getFullYear()}-${String(
      date.getMonth() + 1,
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    setFormData((prev) => ({
      ...prev,
      date: formatted,
    }));

    setCalendarOpen(false);
  };

  const selectTime = (time) => {
    setFormData((prev) => ({
      ...prev,
      time,
    }));

    setTimeOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedStyle) {
      toast.error("Please select a hairstyle first.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!formData.date) {
      toast.error("Please select your appointment date.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!formData.time) {
      toast.error("Please select your appointment time.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    toast.success(
      `${selectedStyle.title} appointment request submitted successfully!`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      },
    );

    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      notes: "",
    });

    setSelectedStyle(null);
  };

  return (
    <section
      id="reservation"
      className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-rose-300 sm:text-xs">
            Online Booking
          </span>

          <h2 className="mt-3 font-serif text-3xl text-stone-100 sm:text-4xl lg:text-5xl">
            Choose Your Style
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-500">
            Browse our signature styles and select the look you want before
            completing your appointment.
          </p>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-8">
          {/* ================= STYLE PRODUCTS ================= */}
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {styles.map((style, index) => {
                const selected = selectedStyle?.title === style.title;

                return (
                  <motion.button
                    key={style.title}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`group overflow-hidden rounded-2xl border text-left transition-all ${
                      selected
                        ? "border-rose-200 ring-2 ring-rose-200/20"
                        : "border-stone-800 hover:border-stone-700"
                    }`}>
                    {/* IMAGE */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-900">
                      <img
                        src={style.image}
                        alt={style.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85";
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* CATEGORY */}
                      <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
                        <span className="rounded-full bg-stone-950/80 px-2 py-1 text-[8px] font-semibold uppercase tracking-widest text-rose-200 backdrop-blur sm:px-2.5 sm:py-1.5 sm:text-[9px]">
                          {style.category}
                        </span>
                      </div>

                      {/* SELECTED */}
                      {selected && (
                        <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-rose-200 text-stone-950 sm:right-3 sm:top-3">
                          <Check size={15} strokeWidth={3} />
                        </div>
                      )}

                      {/* PRICE */}
                      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                        <span className="text-sm font-bold text-white sm:text-base">
                          ${style.price}
                        </span>
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="bg-stone-900 p-3">
                      <span className="text-[8px] font-semibold uppercase tracking-widest text-rose-300 sm:text-[9px]">
                        {style.type}
                      </span>

                      <h3 className="mt-1 line-clamp-1 font-serif text-xs text-stone-100 sm:text-sm">
                        {style.title}
                      </h3>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="text-[9px] text-stone-500 sm:text-[10px]">
                          {style.duration}
                        </span>

                        <span className="text-[9px] text-stone-400 sm:text-[10px]">
                          Select →
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ================= CHECKOUT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-fit lg:sticky lg:top-6">
            <div className="overflow-visible rounded-3xl border border-stone-800 bg-stone-900">
              {/* SELECTED PRODUCT */}
              <div className="border-b border-stone-800 p-5 sm:p-6">
                <span className="text-[10px] uppercase tracking-widest text-stone-500">
                  Your Selection
                </span>

                {selectedStyle ? (
                  <div className="mt-4 flex gap-4">
                    <img
                      src={selectedStyle.image}
                      alt={selectedStyle.title}
                      className="h-24 w-20 flex-shrink-0 rounded-xl object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85";
                      }}
                    />

                    <div className="min-w-0 flex-1">
                      <span className="text-[9px] uppercase tracking-widest text-rose-300">
                        {selectedStyle.type}
                      </span>

                      <h3 className="mt-1 font-serif text-base text-stone-100">
                        {selectedStyle.title}
                      </h3>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <span className="text-xs text-stone-500">
                          {selectedStyle.duration}
                        </span>

                        <span className="text-lg font-bold text-rose-200">
                          ${selectedStyle.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-sm text-stone-500">
                      Select a style to continue
                    </p>
                  </div>
                )}
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-6">
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-xs text-stone-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 text-sm text-stone-200 placeholder:text-stone-600 outline-none transition focus:border-rose-300"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-xs text-stone-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 text-sm text-stone-200 placeholder:text-stone-600 outline-none transition focus:border-rose-300"
                  />
                </div>

                {/* DATE & TIME */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* DATE */}
                  <div className="relative">
                    <label className="mb-2 block text-xs text-stone-400">
                      Date
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        setCalendarOpen((prev) => !prev);
                        setTimeOpen(false);
                      }}
                      className={`flex h-12 w-full items-center gap-3 rounded-xl border bg-stone-950 px-3 text-left transition ${
                        calendarOpen
                          ? "border-rose-300"
                          : "border-stone-800 hover:border-stone-700"
                      }`}>
                      <CalendarDays
                        size={16}
                        className="flex-shrink-0 text-stone-500"
                      />

                      <span
                        className={`flex-1 truncate text-xs ${
                          formData.date ? "text-stone-200" : "text-stone-600"
                        }`}>
                        {formData.date
                          ? formatDate(new Date(`${formData.date}T00:00:00`))
                          : "Select date"}
                      </span>

                      <ChevronDown
                        size={15}
                        className={`flex-shrink-0 text-stone-600 transition-transform ${
                          calendarOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* CALENDAR */}
                    <AnimatePresence>
                      {calendarOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute left-0 right-0 z-50 mt-2 w-full min-w-[300px] overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 p-4 shadow-2xl sm:min-w-[240px] lg:left-1/2 lg:right-auto lg:w-[280px] lg:-translate-x-1/2 lg:p-5 xl:w-[220px]">
                          {/* CALENDAR HEADER */}
                          <div className="mb-4 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() =>
                                setCalendarMonth(
                                  new Date(
                                    calendarMonth.getFullYear(),
                                    calendarMonth.getMonth() - 1,
                                    1,
                                  ),
                                )
                              }
                              disabled={
                                calendarMonth.getFullYear() ===
                                  today.getFullYear() &&
                                calendarMonth.getMonth() === today.getMonth()
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-400 transition hover:bg-stone-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">
                              <ChevronLeft size={16} />
                            </button>

                            <span className="text-sm font-semibold text-stone-200">
                              {formatMonth(calendarMonth)}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                setCalendarMonth(
                                  new Date(
                                    calendarMonth.getFullYear(),
                                    calendarMonth.getMonth() + 1,
                                    1,
                                  ),
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-400 transition hover:bg-stone-900 hover:text-white">
                              <ChevronRight size={16} />
                            </button>
                          </div>

                          {/* WEEK DAYS */}
                          <div className="mb-2 grid grid-cols-7">
                            {weekDays.map((day) => (
                              <span
                                key={day}
                                className="py-2 text-center text-[9px] font-semibold uppercase tracking-wider text-stone-600">
                                {day}
                              </span>
                            ))}
                          </div>

                          {/* DAYS */}
                          <div className="grid grid-cols-7 gap-1">
                            {daysInMonth.map((date, index) => {
                              const selected = isSelected(date);
                              const todayDate = isToday(date);
                              const disabled = isPast(date);

                              return (
                                <button
                                  key={index}
                                  type="button"
                                  disabled={!date || disabled}
                                  onClick={() => selectDate(date)}
                                  className={`relative flex aspect-square items-center justify-center rounded-lg text-xs transition ${
                                    !date
                                      ? "cursor-default"
                                      : disabled
                                        ? "cursor-not-allowed text-stone-800"
                                        : selected
                                          ? "bg-rose-200 font-bold text-stone-950"
                                          : todayDate
                                            ? "border border-rose-300 text-rose-200 hover:bg-rose-200/10"
                                            : "text-stone-300 hover:bg-stone-800 hover:text-white"
                                  }`}>
                                  {date?.getDate()}

                                  {todayDate && !selected && (
                                    <span className="absolute bottom-1 h-1 w-1 rounded-full bg-rose-300" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* TODAY */}
                          <button
                            type="button"
                            onClick={() => {
                              selectDate(today);

                              setCalendarMonth(
                                new Date(
                                  today.getFullYear(),
                                  today.getMonth(),
                                  1,
                                ),
                              );
                            }}
                            className="mt-4 w-full border-t border-stone-800 pt-3 text-xs font-semibold text-rose-200 transition hover:text-rose-300">
                            Select Today
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* TIME */}
                  <div className="relative">
                    <label className="mb-2 block text-xs text-stone-400">
                      Time
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        setTimeOpen((prev) => !prev);
                        setCalendarOpen(false);
                      }}
                      className={`flex h-12 w-full items-center gap-3 rounded-xl border bg-stone-950 px-3 text-left transition ${
                        timeOpen
                          ? "border-rose-300"
                          : "border-stone-800 hover:border-stone-700"
                      }`}>
                      <Clock3
                        size={16}
                        className="flex-shrink-0 text-stone-500"
                      />

                      <span
                        className={`flex-1 truncate text-xs ${
                          formData.time ? "text-stone-200" : "text-stone-600"
                        }`}>
                        {formData.time || "Select time"}
                      </span>

                      <ChevronDown
                        size={15}
                        className={`flex-shrink-0 text-stone-600 transition-transform ${
                          timeOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* TIME OPTIONS */}
                    <AnimatePresence>
                      {timeOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute left-0 right-0 z-50 mt-2 w-full min-w-[300px] overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 p-4 shadow-2xl sm:min-w-[240px] lg:left-1/2 lg:right-auto lg:w-[280px] lg:-translate-x-1/2 lg:p-5 xl:w-[220px]">
                          <div className="grid grid-cols-2 gap-1">
                            {timeSlots.map((time) => {
                              const selected = formData.time === time;

                              return (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => selectTime(time)}
                                  className={`rounded-lg px-3 py-2.5 text-xs transition ${
                                    selected
                                      ? "bg-rose-200 font-semibold text-stone-950"
                                      : "text-stone-300 hover:bg-stone-800 hover:text-white"
                                  }`}>
                                  {time}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* NOTES */}
                <div>
                  <label className="mb-2 block text-xs text-stone-400">
                    Special Requests
                    <span className="ml-1 text-stone-600">(Optional)</span>
                  </label>

                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Special requests..."
                    className="w-full resize-none rounded-xl border border-stone-800 bg-stone-950 p-3.5 text-sm text-stone-200 placeholder:text-stone-600 outline-none transition focus:border-rose-300"
                  />
                </div>

                {/* APPOINTMENT SUMMARY */}
                <div className="border-t border-stone-800 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-400">
                      Appointment Total
                    </span>

                    <span className="text-xl font-bold text-rose-200">
                      {selectedStyle ? `$${selectedStyle.price}` : "$0"}
                    </span>
                  </div>

                  {selectedStyle && (
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] text-stone-600">
                        {selectedStyle.title}
                      </span>

                      <span className="text-[10px] text-stone-600">
                        {selectedStyle.duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={!selectedStyle}
                  className={`w-full rounded-xl py-4 text-xs font-bold uppercase tracking-widest transition ${
                    selectedStyle
                      ? "bg-rose-200 text-stone-950 hover:bg-rose-300 active:scale-[0.99]"
                      : "cursor-not-allowed bg-stone-800 text-stone-600"
                  }`}>
                  {selectedStyle ? "Book This Style" : "Select a Style"}
                </button>

                <p className="text-center text-[9px] leading-relaxed text-stone-600">
                  Your appointment request will be reviewed by our salon team
                  before confirmation.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
