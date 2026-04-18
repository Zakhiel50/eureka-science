"use client";

import { useState } from "react";
import { LessonStep } from "@/app/types/types";
import { ChevronRight, ChevronLeft, GraduationCap, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LessonContentProps {
  steps: LessonStep[];
  onComplete: () => void;
}

export default function LessonContent({ steps, onComplete }: LessonContentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

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
      <div className="md:mb-8 flex-col justify-between items-center">
        <div className="flex gap-2">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`mb-4 h-2 w-4 md:h-2 md:w-4 rounded-full transition-all duration-300 ${
                idx <= currentStep ? "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "bg-slate-700"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-mono text-sm">
            Étape {currentStep + 1} / {steps.length}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div 
            onClick={() => setIsExpanded(true)}
            className="relative aspect-video rounded-2xl overflow-hidden border-4 border-slate-800 shadow-inner bg-slate-800 mt-6 cursor-zoom-in group"
          >
            <Image
              src={step.imageUrl}
              alt={step.title}
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-slate-900/10 pointer-events-none" />
            
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-5 h-5 text-cyan-400" />
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700">
              Cliquer pour agrandir
            </div>
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

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full max-w-7xl flex flex-col items-center justify-center gap-4"
            >
              <div className="relative w-full h-full flex-1">
                <Image
                  src={step.imageUrl}
                  alt={step.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-0 right-0 md:-top-2 md:-right-2 p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all shadow-xl z-[101] transform hover:scale-110 active:scale-90"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full text-center pb-4">
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
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
