"use client";

import { useUser } from "@/app/context/UserContext";
import { Image as ImageIcon, ImageOff } from "lucide-react";

export default function BackgroundToggle() {
  const { showBackground, setShowBackground } = useUser();

  const toggleBackground = () => {
    setShowBackground(!showBackground);
  };

  return (
    <button
      onClick={toggleBackground}
      className="fixed top-8 right-24 z-[100] p-3 rounded-xl md:rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg backdrop-blur-md text-slate-600 dark:text-slate-300 hover:scale-110 transition-all active:scale-95 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
      title={showBackground ? "Désactiver le fond animé" : "Activer le fond animé"}
      aria-label={showBackground ? "Désactiver les animations d'arrière-plan" : "Activer les animations d'arrière-plan"}
    >
      {showBackground ? (
        <ImageOff className="w-5 h-5 group-hover:text-red-500 transition-colors" aria-hidden="true" />
      ) : (
        <ImageIcon className="w-5 h-5 group-hover:text-green-500 transition-colors" aria-hidden="true" />
      )}
    </button>
  );
}

