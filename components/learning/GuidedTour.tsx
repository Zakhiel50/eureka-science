"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { useEinstein } from "@/app/context/EinsteinContext";
import { motion, AnimatePresence } from "framer-motion";

interface TourStep {
  target: string;
  message: string;
  route: string;
  placement: "top" | "bottom" | "left" | "right" | "center";
}

const steps: TourStep[] = [
  {
    target: "",
    message: "Salut ! Je suis Einstein-bot. Bienvenue dans EUREKA !, l'application qui rend la science super amusante ! Faisons ensemble le tour du propriétaire !",
    route: "/",
    placement: "center"
  },
  {
    target: "#xp-counter",
    message: "Voici ton compteur d'XP. Tu gagnes de l'XP en lisant les leçons et en réussissant les quiz. Cet XP te servira de monnaie dans le laboratoire !",
    route: "/",
    placement: "bottom"
  },
  {
    target: "#courses-grid",
    message: "Voici toutes les leçons scientifiques disponibles. Chacune est une aventure pour découvrir le fonctionnement du monde !",
    route: "/",
    placement: "bottom"
  },
  {
    target: "#first-course-card",
    message: "Règle importante : pour débloquer le cours suivant, tu dois obtenir au moins 80% de réussite au quiz du cours précédent ! Reste bien attentif pendant la lecture.",
    route: "/",
    placement: "bottom"
  },
  {
    target: "#settings-section",
    message: "Ici dans les paramètres, tu peux choisir ma voix de lecture préférée ou me mettre en sourdine. Essaie de la changer plus tard !",
    route: "/",
    placement: "top"
  },
  {
    target: "#lab-button",
    message: "Et maintenant, allons voir l'endroit le plus magique : le Laboratoire. Clique sur le bouton 'Laboratoire' pour y entrer !",
    route: "/",
    placement: "bottom"
  },
  {
    target: "#canvas",
    message: "Bienvenue dans ton Laboratoire personnel en 3D ! C'est ton espace de recherche pour collectionner des objets et les exposer.",
    route: "/laboratoire",
    placement: "center"
  },
  {
    target: "#lab-scene-container",
    message: "Voici l'îlot central en 3D. Tu as 10 slots disponibles. Les objets que tu achètes s'y placent et s'y orientent automatiquement vers le centre !",
    route: "/laboratoire",
    placement: "bottom"
  },
  {
    target: "#lab-store-section",
    message: "Et voici la Boutique ! C'est ici que tu dépenses ton XP accumulé pour acheter des fioles, microscopes, modèles de planètes ou fusées pour les ajouter à ton laboratoire !",
    route: "/laboratoire",
    placement: "top"
  },
  {
    target: "",
    message: "Tu es maintenant paré pour ton voyage scientifique ! Reviens à l'accueil, commence ton premier cours et éclate-toi ! Bon voyage scientifique ! 🚀",
    route: "/laboratoire",
    placement: "center"
  }
];

export default function GuidedTour() {
  const pathname = usePathname();
  const router = useRouter();
  const { hasCompletedTutorial, setHasCompletedTutorial } = useUser();
  const { say, clear } = useEinstein();

  const [currentStep, setCurrentStep] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("eureka_tour_step");
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const activeStep = steps[currentStep];

  // Save current step to localstorage
  useEffect(() => {
    localStorage.setItem("eureka_tour_step", currentStep.toString());
  }, [currentStep]);

  // Route synchronization
  useEffect(() => {
    if (hasCompletedTutorial) return;

    const currentStepData = steps[currentStep];
    if (currentStepData && currentStepData.route !== pathname) {
      if (currentStepData.route === "/laboratoire" && pathname === "/") {
        setCurrentStep(5); // Go back to lab navigation step
      } else if (currentStepData.route === "/" && pathname === "/laboratoire") {
        setCurrentStep(6); // Jump to lab welcome step
      }
    }
  }, [pathname, currentStep, hasCompletedTutorial]);

  // Auto-advance step 5 to 6 when entering laboratory
  useEffect(() => {
    if (hasCompletedTutorial) return;

    if (pathname === "/laboratoire" && currentStep === 5) {
      setCurrentStep(6);
    }
  }, [pathname, currentStep, hasCompletedTutorial]);

  // Make Einstein Bot speak on each step
  useEffect(() => {
    if (hasCompletedTutorial || !activeStep) return;

    const timer = setTimeout(() => {
      say(activeStep.message, "info");
    }, 200);

    return () => clearTimeout(timer);
  }, [currentStep, activeStep, hasCompletedTutorial, say]);

  // Scroll to targeted element smoothly
  useEffect(() => {
    if (hasCompletedTutorial || !activeStep || !activeStep.target) return;

    const timer = setTimeout(() => {
      const el = document.querySelector(activeStep.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [currentStep, activeStep, hasCompletedTutorial]);

  // Track target size and coordinates
  useEffect(() => {
    if (hasCompletedTutorial || !activeStep) return;

    const updateRect = () => {
      if (!activeStep.target) {
        setTargetRect(null);
        return;
      }
      const el = document.querySelector(activeStep.target);
      if (el) {
        setTargetRect(el.getBoundingClientRect());
      } else {
        setTargetRect(null);
      }
    };

    updateRect();
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect);
    const interval = setInterval(updateRect, 100);

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
      clearInterval(interval);
    };
  }, [currentStep, activeStep, hasCompletedTutorial]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      finishTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const skipTour = () => {
    setHasCompletedTutorial(true);
    clear();
    localStorage.removeItem("eureka_tour_step");
  };

  const finishTour = () => {
    setHasCompletedTutorial(true);
    clear();
    localStorage.removeItem("eureka_tour_step");
    router.push("/");
  };

  const clickOnLaboratory = () => {
    router.push("/laboratoire");
  };

  if (hasCompletedTutorial || !activeStep) return null;

  return (
    <>
      {/* SVG Spotlight Cutout Overlay */}
      <div className="fixed inset-0 z-[190] pointer-events-none" onClick={() => {
        if (currentStep === 5) {
          clickOnLaboratory();
        }
      }}>
        {targetRect ? (
          <svg className="w-full h-full">
            <mask id="spotlight-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <rect
                x={targetRect.left - 8}
                y={targetRect.top - 8}
                width={targetRect.width + 16}
                height={targetRect.height + 16}
                rx="16"
                fill="black"
              />
            </mask>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="rgba(2, 6, 23, 0.75)"
              mask="url(#spotlight-mask)"
              className="pointer-events-auto cursor-default"
            />
          </svg>
        ) : (
          <div className="fixed inset-0 bg-slate-950/75 pointer-events-auto cursor-default" />
        )}
      </div>

      {/* Neon border highlight around target element */}
      {targetRect && (
        <div
          style={{
            position: "fixed",
            left: targetRect.left - 8,
            top: targetRect.top - 8,
            width: targetRect.width + 16,
            height: targetRect.height + 16,
            pointerEvents: "none",
            zIndex: 191,
          }}
          className="border-4 border-cyan-400 rounded-2xl animate-pulse shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-150"
        />
      )}

      {/* Floating Tutorial Control Card positioned above EinsteinBot */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          className="fixed top-28 left-4 z-[201] glass-panel p-4 rounded-2xl flex flex-col gap-3 shadow-2xl w-[240px] md:w-[280px] border border-cyan-500/30"
        >
          <div className="flex justify-between items-center text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
            <span>💡 TUTORIEL</span>
            <span>{currentStep + 1} / {steps.length}</span>
          </div>

          <div className="flex gap-2">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="flex-grow py-2 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 hover:opacity-90 text-white rounded-xl font-bold text-xs shadow-lg transition-all transform active:scale-95 text-center"
              >
                {"Précédent"}
              </button>
            )}
            {currentStep !== 5 && (
              <button
                onClick={nextStep}
                className="flex-grow py-2 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 hover:opacity-90 text-white rounded-xl font-bold text-xs shadow-lg transition-all transform active:scale-95 text-center"
              >
                {currentStep === steps.length - 1 ? "Terminer" : "Suivant"}
              </button>
            )}
            <button
              onClick={skipTour}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs transition-all border border-slate-200 dark:border-slate-700"
            >
              Passer
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
