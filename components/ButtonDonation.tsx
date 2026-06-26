"use client";

import { Heart } from "lucide-react";
import Link from "next/link";

export default function ButtonDonation() {
  return (
    <Link
      id="support-button"
      href="/soutenir"
      className="fixed top-8 right-40 z-[1] p-3 rounded-xl md:rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 border border-white/10 dark:border-slate-700 shadow-lg text-white hover:scale-110 active:scale-95 transition-all group focus:outline-none focus:ring-4 focus:ring-rose-500/50"
      aria-label="Redirection vers la page de dons sur Tipeee"
    >
      <Heart className="w-5 h-5 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform" aria-hidden="true" />
    </Link>
  );
}


