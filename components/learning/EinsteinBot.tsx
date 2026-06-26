"use client";

import { getImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import infoFacts from "@/lib/info-bot.json";
import { useEinstein } from "@/app/context/EinsteinContext";
import { X, Volume2, VolumeX } from "lucide-react";
import { useUser } from "@/app/context/UserContext";

export default function EinsteinBot() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { message, clear, setIsCoolingDown } = useEinstein();
  const { isMuted, setIsMuted, hasCompletedTutorial, hasPreferencesSet } = useUser();
  const [currentFact, setCurrentFact] = useState("");
  const [isFactVisible, setIsFactVisible] = useState(false);
  const [canClose, setCanClose] = useState(true);

  // Gestion des faits aléatoires (uniquement sur l'accueil et si non muté)
  useEffect(() => {
    if (isHomePage && !message && !isMuted && hasCompletedTutorial && hasPreferencesSet) {
      const initialTimer = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * infoFacts.length);
        setCurrentFact(infoFacts[randomIndex]);
        setIsFactVisible(true);
      }, 3000);

      const interval = setInterval(() => {
        setIsFactVisible(false);
        setTimeout(() => {
          if (!isMuted) {
            const randomIndex = Math.floor(Math.random() * infoFacts.length);
            setCurrentFact(infoFacts[randomIndex]);
            setIsFactVisible(true);
          }
        }, 500);
      }, 15000);

      return () => {
        clearTimeout(initialTimer);
        clearInterval(interval);
      };
    } else {
      setIsFactVisible(false);
    }
  }, [isHomePage, message, isMuted, hasCompletedTutorial, hasPreferencesSet]);

  // Gestion du cooldown et de la fermeture automatique pour les explications (réponses fausses)
  useEffect(() => {
    if (message?.type === 'explanation') {
      setCanClose(false);
      setIsCoolingDown(true);

      // Cooldown de 3 secondes avant de pouvoir fermer manuellement
      const cooldownTimer = setTimeout(() => {
        setCanClose(true);
        setIsCoolingDown(false);
      }, 3000);

      // Fermeture automatique après 10 secondes
      const autoCloseTimer = setTimeout(() => {
        clear();
      }, 10000);

      return () => {
        clearTimeout(cooldownTimer);
        clearTimeout(autoCloseTimer);
      };
    } else {
      setCanClose(true);
      setIsCoolingDown(false);
    }
  }, [message, clear, setIsCoolingDown]);

  // Fermeture au clic n'importe où (uniquement hors page d'accueil ou quand il y a un message)
  const handleGlobalClick = useCallback(() => {
    if (message && canClose) {
      clear();
    }
  }, [message, clear, canClose]);

  useEffect(() => {
    if (message) {
      // On ajoute un petit délai pour ne pas capturer le clic qui a déclenché le message
      const timer = setTimeout(() => {
        window.addEventListener("click", handleGlobalClick);
      }, 100);
      return () => {
        window.removeEventListener("click", handleGlobalClick);
        clearTimeout(timer);
      };
    }
  }, [message, handleGlobalClick]);

  // Le message affiché
  const activeMessageText = message ? message.text : (isFactVisible ? currentFact : null);
  const isExplanation = message?.type === 'explanation';

  // Einstein est visible sur l'accueil OU s'il a un message à dire
  const shouldBeVisible = (isHomePage || !!message) && hasPreferencesSet;

  return (
    <AnimatePresence>
      {shouldBeVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className={`fixed bottom-2 left-2 md:bottom-4 md:left-4 select-none flex flex-col items-start gap-2 transition-all duration-300 ${!hasCompletedTutorial ? "z-[201] pointer-events-auto" : "z-50 pointer-events-none"
            }`}
        >
          <AnimatePresence>
            {activeMessageText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                role={isExplanation ? "alert" : "status"}
                aria-live="polite"
                className={`p-4 rounded-2xl rounded-bl-none shadow-2xl border-2 max-w-[240px] md:max-w-[280px] pointer-events-auto relative mb-2 overflow-visible ${isExplanation
                  ? 'bg-slate-900 text-white border-cyan-500 shadow-cyan-500/20'
                  : 'bg-white text-slate-900 border-cyan-400'
                  }`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!canClose) return;
                    message ? clear() : setIsFactVisible(false);
                  }}
                  className={`absolute -top-3 -right-3 bg-slate-800 text-white rounded-full p-2 hover:bg-slate-700 transition-all border border-slate-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isExplanation && !canClose ? 'hidden' : 'flex'
                    }`}
                  aria-label="Fermer le message"
                  disabled={!canClose}
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
                <p className="text-sm font-medium leading-relaxed">
                  {activeMessageText}
                </p>

                {isExplanation && !canClose && (
                  <div
                    role="progressbar"
                    aria-label="Attente avant de pouvoir fermer"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <motion.div
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{ duration: 3, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-1 bg-cyan-500 rounded-br-2xl"
                    />
                  </div>
                )}

                <div className={`absolute -bottom-2 left-[0.8px] w-4 h-4 border-b-2 transform rotate-45 ${isExplanation ? 'bg-slate-900 border-cyan-500' : 'bg-white border-cyan-400'
                  }`} aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="relative group pointer-events-auto cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              // Si un message est visible, on le ferme au lieu de juste muter
              if (activeMessageText && canClose) {
                message ? clear() : setIsFactVisible(false);
              }
              setIsMuted(!isMuted);
            }}
            title={isMuted ? "Réactiver Einstein" : "Mettre Einstein en sourdine"}
          >
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-all duration-500 animate-pulse" />

            <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
              {(() => {
                const common = {
                  id: "einstein-bot",
                  alt: "Einstein Bot Mascot",
                  fill: true,
                  quality: 40,
                  priority: true
                };

                const { props: { srcSet: desktop } } = getImageProps({
                  ...common,
                  src: "/images/einstein-bot.avif",
                  sizes: "(max-width: 768px) 120px, 120px",
                });

                const { props: { srcSet: mobile, ...rest } } = getImageProps({
                  ...common,
                  src: "/images/m-einstein-bot.avif",
                  sizes: "80px",
                });

                return (
                  <picture>
                    <source media="(min-width: 768px)" srcSet={desktop} />
                    <source media="(max-width: 767px)" srcSet={mobile} />
                    <img
                      {...rest}
                      className={`object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isMuted ? "grayscale opacity-80" : ""
                        }`}
                    />
                  </picture>
                );
              })()}

              <div className="absolute -bottom-2 -right-2 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-lg">
                {isMuted ? (
                  <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                ) : (
                  <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                )}
              </div>
            </div>

            {message && !isMuted && (
              <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full border-2 border-[#020617] shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-bounce" aria-hidden="true" />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
