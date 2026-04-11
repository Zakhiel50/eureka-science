"use client";

import { useState } from "react";
import { LessonStep } from "@/lib/lessons/water-cycle";
import { ChevronRight, ChevronLeft, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LessonContentProps {
  steps: LessonStep[];
  onComplete: () => void;
}

export default function LessonContent({ steps, onComplete }: LessonContentProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700 shadow-2xl">
      <div className="mb-8 flex justify-between items-center">
        <div className="flex gap-2">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-12 rounded-full transition-all duration-300 ${
                idx <= currentStep ? "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "bg-slate-700"
              }`}
            />
          ))}
        </div>
        <span className="text-slate-400 font-mono text-sm">
          Étape {currentStep + 1} / {steps.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-slate-800 shadow-inner bg-slate-800 flex items-center justify-center">
            <img 
              src={step.imageUrl} 
              alt={step.title} 
              className="object-contain w-full h-full"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-slate-900/10 pointer-events-none" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {step.title}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              {step.content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex justify-between gap-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
            currentStep === 0
              ? "text-slate-600 cursor-not-allowed"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Précédent
        </button>

        <button
          onClick={nextStep}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {currentStep === steps.length - 1 ? (
            <>
              Lancer le Quiz !
              <GraduationCap className="w-5 h-5" />
            </>
          ) : (
            <>
              Suivant
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
