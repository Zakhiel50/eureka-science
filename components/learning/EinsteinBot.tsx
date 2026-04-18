"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import infoFacts from "@/lib/info-bot.json";
import { useEinstein } from "@/app/context/EinsteinContext";
import { X } from "lucide-react";

export default function EinsteinBot() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { message, clear } = useEinstein();
  const [currentFact, setCurrentFact] = useState("");
  const [isFactVisible, setIsFactVisible] = useState(false);

  useEffect(() => {
    // Si on a un message du contexte (ex: explication de quiz), on n'affiche pas les facts
    if (isHomePage && !message) {
      const initialTimer = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * infoFacts.length);
        setCurrentFact(infoFacts[randomIndex]);
        setIsFactVisible(true);
      }, 3000);

      const interval = setInterval(() => {
        setIsFactVisible(false);
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * infoFacts.length);
          setCurrentFact(infoFacts[randomIndex]);
          setIsFactVisible(true);
        }, 500);
      }, 15000);

      return () => {
        clearTimeout(initialTimer);
        clearInterval(interval);
      };
    } else {
      setIsFactVisible(false);
    }
  }, [isHomePage, message]);

  // Le message affiché est soit celui du contexte, soit un fact aléatoire
  const activeMessageText = message ? message.text : (isFactVisible ? currentFact : null);
  const isExplanation = message?.type === 'explanation';

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: "spring" }}
      className="fixed bottom-4 right-4 z-50 pointer-events-none select-none flex flex-col items-end gap-2"
    >
      <AnimatePresence>
        {activeMessageText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`p-4 rounded-2xl rounded-br-none shadow-2xl border-2 max-w-[280px] pointer-events-auto relative mb-2 ${
              isExplanation 
                ? 'bg-slate-900 text-white border-cyan-500 shadow-cyan-500/20' 
                : 'bg-white text-slate-900 border-cyan-400'
            }`}
          >
            <button 
              onClick={() => message ? clear() : setIsFactVisible(false)}
              className="absolute -top-2 -left-2 bg-slate-800 text-white rounded-full p-1 hover:bg-slate-700 transition-colors border border-slate-700 shadow-lg"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm font-medium leading-relaxed">
              {activeMessageText}
            </p>
            {/* Petit triangle de la bulle */}
            <div className={`absolute -bottom-2 right-0 w-4 h-4 border-r-2 border-b-2 transform rotate-45 ${
              isExplanation ? 'bg-slate-900 border-cyan-500' : 'bg-white border-cyan-400'
            }`} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group pointer-events-auto cursor-pointer" onClick={() => {
        if (message) {
          clear();
        } else if (isHomePage) {
          setIsFactVisible(false);
          setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * infoFacts.length);
            setCurrentFact(infoFacts[randomIndex]);
            setIsFactVisible(true);
          }, 300);
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
        
        {/* Indicateur d'activité quand Einstein "veut dire quelque chose" */}
        {message && (
          <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full border-2 border-[#020617] shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-bounce" />
        )}
      </div>
    </motion.div>
  );
}
