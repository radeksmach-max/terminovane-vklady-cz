"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-[#1e3a5f]">
          <span className="text-[#f59e0b] text-2xl">₿</span>
          terminované‑vklady.cz
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#kalkulator" className="hover:text-[#2a5298] transition-colors">Kalkulačka</Link>
          <Link href="/#jak-funguje" className="hover:text-[#2a5298] transition-colors">Jak to funguje</Link>
          <Link href="/infocentrum" className="hover:text-[#2a5298] transition-colors">Infocentrum</Link>
          <Link href="/blog" className="hover:text-[#2a5298] transition-colors">Blog</Link>
          <Link
            href="/#kalkulator"
            className="bg-[#1e3a5f] text-white px-4 py-2 rounded-lg hover:bg-[#2a5298] transition-colors"
          >
            Spočítat výnosy
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-2 text-sm font-medium">
          <Link href="/#kalkulator" className="block py-2 text-slate-700" onClick={() => setMenuOpen(false)}>Kalkulačka</Link>
          <Link href="/#jak-funguje" className="block py-2 text-slate-700" onClick={() => setMenuOpen(false)}>Jak to funguje</Link>
          <Link href="/infocentrum" className="block py-2 text-slate-700" onClick={() => setMenuOpen(false)}>Infocentrum</Link>
          <Link href="/blog" className="block py-2 text-slate-700" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link
            href="/#kalkulator"
            className="block mt-2 bg-[#1e3a5f] text-white text-center px-4 py-2 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Spočítat výnosy
          </Link>
        </div>
      )}
    </header>
  );
}
