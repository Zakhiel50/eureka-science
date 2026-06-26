"use client";

import React, { useState, useRef, useEffect } from "react";
import { Shield, Sparkles, AlertCircle, KeyRound, Check, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PreferencesOnboardingProps {
  onSave: (score: number, pin: string | null) => void;
}

export default function PreferencesOnboarding({ onSave }: PreferencesOnboardingProps) {
  const [score, setScore] = useState<number>(80);
  const [usePin, setUsePin] = useState<boolean>(false);
  const [pin, setPin] = useState<string[]>(["", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState<string[]>(["", "", "", ""]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const pinRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const confirmPinRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Reset inputs when pin toggle changes (both ON and OFF)
  useEffect(() => {
    setPin(["", "", "", ""]);
    setConfirmPin(["", "", "", ""]);
    setErrorMsg("");
  }, [usePin]);

  const handlePinChange = (
    index: number,
    value: string,
    isConfirm: boolean,
    refs: React.RefObject<HTMLInputElement | null>[]
  ) => {
    // Only accept numeric value
    const cleanValue = value.replace(/[^0-9]/g, "");
    const pinState = isConfirm ? [...confirmPin] : [...pin];
    const oldValue = pinState[index];

    if (cleanValue === "") {
      pinState[index] = "";
      if (isConfirm) setConfirmPin(pinState);
      else setPin(pinState);
      return;
    }

    // Determine the new digit by comparing with the old value
    let newDigit = cleanValue;
    if (cleanValue.length > 1 && oldValue) {
      if (cleanValue.startsWith(oldValue)) {
        newDigit = cleanValue.slice(oldValue.length);
      } else if (cleanValue.endsWith(oldValue)) {
        newDigit = cleanValue.slice(0, cleanValue.length - oldValue.length);
      } else {
        newDigit = cleanValue[cleanValue.length - 1];
      }
    }
    // Safeguard to get only a single character
    newDigit = newDigit[newDigit.length - 1] || "";

    pinState[index] = newDigit;

    if (isConfirm) setConfirmPin(pinState);
    else setPin(pinState);

    // Auto-focus next input
    if (newDigit && index < 3 && refs[index + 1].current) {
      refs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
    isConfirm: boolean,
    refs: React.RefObject<HTMLInputElement | null>[]
  ) => {
    // Handle backspace focus shift
    if (e.key === "Backspace") {
      const pinState = isConfirm ? [...confirmPin] : [...pin];
      if (pinState[index] === "") {
        if (index > 0 && refs[index - 1].current) {
          refs[index - 1].current?.focus();
          const prevPinState = isConfirm ? [...confirmPin] : [...pin];
          prevPinState[index - 1] = "";
          if (isConfirm) setConfirmPin(prevPinState);
          else setPin(prevPinState);
        }
      } else {
        pinState[index] = "";
        if (isConfirm) setConfirmPin(pinState);
        else setPin(pinState);
      }
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    isConfirm: boolean,
    refs: React.RefObject<HTMLInputElement | null>[]
  ) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 4);
    if (pastedData.length === 4) {
      const pinArray = pastedData.split("");
      if (isConfirm) {
        setConfirmPin(pinArray);
        confirmPinRefs[3].current?.focus();
      } else {
        setPin(pinArray);
        pinRefs[3].current?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (score < 10 || score > 100) {
      setErrorMsg("Le taux de réussite doit être compris entre 10% et 100%.");
      return;
    }

    if (usePin) {
      const pinStr = pin.join("");
      const confirmPinStr = confirmPin.join("");

      if (pinStr.length < 4 || confirmPinStr.length < 4) {
        setErrorMsg("Le code parental doit contenir exactement 4 chiffres.");
        return;
      }

      if (pinStr !== confirmPinStr) {
        setErrorMsg("Les codes ne correspondent pas. Veuillez réessayer.");
        // Clear confirm pin and focus back on first confirm pin box
        setConfirmPin(["", "", "", ""]);
        confirmPinRefs[0].current?.focus();
        return;
      }

      onSave(score, pinStr);
    } else {
      onSave(score, null);
    }
  };

  const handleSkip = () => {
    onSave(80, null);
  };

  const presets = [
    { value: 20, label: "20% (Facile)" },
    { value: 50, label: "50% (Modéré)" },
    { value: 80, label: "80% (Recommandé)" },
    { value: 100, label: "100% (Expert)" },
  ];

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-[#020617] flex flex-col items-center justify-start md:justify-center p-4 md:p-8 pt-28 md:pt-8 pb-10 animate-in fade-in zoom-in-95 duration-300">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(8,145,178,0.15)] space-y-8"
      >
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Shield className="w-8 h-8 animate-pulse" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
            EUREKA <span className="text-cyan-400">Science</span>
          </h1>
          <p className="text-slate-400 font-medium">Configuration de départ</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Explanation Banner */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-2xl flex gap-3 text-sm text-slate-300 leading-relaxed">
            <HelpCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white mb-1">Pourquoi définir un taux de réussite ?</p>
              <p>
                Le taux de réussite détermine le score minimal à obtenir aux quiz de validation pour prouver la bonne compréhension du cours et débloquer le sujet suivant. Choisir un taux adapté permet à l'enfant de progresser à son propre rythme !
              </p>
            </div>
          </div>

          {/* Success Rate selection */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-lg font-bold text-white flex items-center gap-2">
                🎯 Taux de réussite requis :
              </label>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                {score}%
              </span>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <input
                type="range"
                min="10"
                max="100"
                step="10"
                value={score}
                onChange={(e) => setScore(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span>10% (Minimum)</span>
                <span>100% (Parfait)</span>
              </div>
            </div>

            {/* Presets */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {presets.map((preset) => (
                <button
                  type="button"
                  key={preset.value}
                  onClick={() => setScore(preset.value)}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border ${score === preset.value
                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    : "bg-slate-800/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                    }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Parental Control PIN Option */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex justify-between">

                  <span className="text-lg font-bold text-white flex items-center gap-2">
                    <KeyRound className="w-5 h-5 text-purple-400" /> Contrôle Parental
                  </span>

                  {/* Toggle Switch */}
                  <button
                    type="button"
                    onClick={() => setUsePin(!usePin)}
                    className={`w-14 h-8 rounded-full p-1 shrink-0 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${usePin ? "bg-purple-600" : "bg-slate-800"
                      }`}
                    role="switch"
                    aria-checked={usePin}
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-white transition-transform duration-300 shadow-md ${usePin ? "translate-x-6" : "translate-x-0"
                        }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Optionnel : Protéger les paramètres par un code d'accès à 4 chiffres.
                </p>
              </div>
            </div>

            {/* PIN Inputs Subform */}
            <AnimatePresence>
              {usePin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* First Code Input */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Définir le code à 4 chiffres :
                      </span>
                      <div className="flex gap-2">
                        {pin.map((digit, i) => (
                          <input
                            key={`pin-${i}`}
                            ref={pinRefs[i]}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={digit}
                            onChange={(e) => handlePinChange(i, e.target.value, false, pinRefs)}
                            onKeyDown={(e) => handleKeyDown(i, e, false, pinRefs)}
                            onPaste={(e) => handlePaste(e, false, pinRefs)}
                            onFocus={(e) => e.target.select()}
                            className="w-12 h-14 bg-slate-800 border border-slate-700 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-mono"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Confirmation Input */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Confirmer le code parental :
                      </span>
                      <div className="flex gap-2">
                        {confirmPin.map((digit, i) => (
                          <input
                            key={`confirm-pin-${i}`}
                            ref={confirmPinRefs[i]}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={digit}
                            onChange={(e) => handlePinChange(i, e.target.value, true, confirmPinRefs)}
                            onKeyDown={(e) => handleKeyDown(i, e, true, confirmPinRefs)}
                            onPaste={(e) => handlePaste(e, true, confirmPinRefs)}
                            onFocus={(e) => e.target.select()}
                            className="w-12 h-14 bg-slate-800 border border-slate-700 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-mono"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Errors display */}
          <AnimatePresence>
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400 text-sm font-medium"
              >
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              onClick={handleSkip}
              className="w-full sm:w-auto px-6 py-4 bg-slate-800 text-slate-400 hover:text-white rounded-2xl font-bold text-sm border border-slate-700/50 hover:bg-slate-750 transition-all"
            >
              Passer (Taux standard 80%)
            </button>

            <button
              type="submit"
              className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white rounded-2xl font-black text-sm shadow-[0_0_25px_rgba(6,182,212,0.2)] tracking-wider uppercase transition-all flex items-center justify-center gap-2 group"
            >
              Valider et commencer l'aventure
              <Check className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
