"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-3">
            Velvet & Blade Salon
          </h3>
          <p className="text-sm leading-relaxed">
            Premium grooming and hair styling crafted for modern professionals.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/location" className="hover:text-white">
                Location & Hours
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Working Hours</h4>
          <p className="text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
          <p className="text-sm">Sunday: 10:00 AM - 5:00 PM</p>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-neutral-600 border-t border-neutral-900 pt-6">
        © {new Date().getFullYear()} Velvet & Blade Salon. All rights reserved.
      </div>
    </footer>
  );
}
