"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/app/context/UserContext";

export default function ButtonDonation() {
  const { hasPreferencesSet, hasCompletedTutorial } = useUser();

  if (!hasPreferencesSet) return null;

  const isTutorialActive = !hasCompletedTutorial;

  if (isTutorialActive) {
    return (
      <div
        id="support-button"
        className="fixed top-8 right-40 z-[100] p-3 rounded-xl md:rounded-2xl bg-slate-400 dark:bg-slate-700 border border-white/10 dark:border-slate-800 shadow-lg text-white/50 cursor-not-allowed opacity-40 pointer-events-none select-none"
        aria-label="Le bouton de soutien est désactivé pendant le tutoriel"
        aria-disabled="true"
      >
        <Heart className="w-5 h-5 text-white/40" aria-hidden="true" />
      </div>
    );
  }

  return (
    <Link
      id="support-button"
      href="/soutenir"
      className="fixed top-8 right-40 z-[100] p-3 rounded-xl md:rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 border border-white/10 dark:border-slate-700 shadow-lg text-white hover:scale-110 active:scale-95 transition-all group focus:outline-none focus:ring-4 focus:ring-rose-500/50"
      aria-label="Redirection vers la page de dons sur Tipeee"
    >
      <Heart className="w-5 h-5 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform" aria-hidden="true" />
    </Link>
  );
}


