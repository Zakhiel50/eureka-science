"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import infoFacts from "@/lib/info-bot.json";

export default function EinsteinBot() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [currentFact, setCurrentFact] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isHomePage) {
        const randomIndex = Math.floor(Math.random() * infoFacts.length);
        setCurrentFact(infoFacts[randomIndex]);
        setIsVisible(true);

      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * infoFacts.length);
          setCurrentFact(infoFacts[randomIndex]);
          setIsVisible(true);
        }, 500);
      }, 15000);

      return () => {
        clearInterval(interval);
      };
    } else {
      setIsVisible(false);
    }
  }, [isHomePage]);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: "spring" }}
      className="fixed bottom-4 right-4 z-50 pointer-events-none select-none flex flex-col items-end gap-4"
    >
      <AnimatePresence>
        {isHomePage && isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white text-slate-900 p-4 rounded-2xl rounded-br-none shadow-2xl border-2 border-cyan-400 max-w-[250px] pointer-events-auto relative mb-2"
          >
            <p className="text-sm font-medium leading-relaxed">
              {currentFact}
            </p>
            {/* Petit triangle de la bulle */}
            <div className="absolute -bottom-2 right-0 w-4 h-4 bg-white border-r-2 border-b-2 border-cyan-400 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group pointer-events-auto cursor-pointer" onClick={() => {
        if (isHomePage) {
          setIsVisible(false);
          setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * infoFacts.length);
            setCurrentFact(infoFacts[randomIndex]);
            setIsVisible(true);
          }, 3000);
        }
      }}>
        {/* Effet de halo derrière le bot */}
        <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-all duration-500 animate-pulse" />
        
        <Image
          src="/images/einstein-bot.png"
          alt="Einstein Bot Mascot"
          width={120}
          height={120}
          className="relative drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
          priority
        />
        
        {/* Petite bulle de notification ou indicateur d'aide si besoin plus tard */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full border-2 border-[#020617] shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      </div>
    </motion.div>
  );
}
