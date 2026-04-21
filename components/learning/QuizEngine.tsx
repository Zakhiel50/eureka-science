"use client";

import { useState, useEffect } from "react";
import { QuizQuestion } from "@/app/types/types";
import { CheckCircle2, XCircle, Trophy, ArrowRight, RefreshCcw, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEinstein } from "@/app/context/EinsteinContext";
import { useRouter } from "next/router";

interface QuizEngineProps {
  questions: QuizQuestion[];
  onSuccess: (score: number) => void;
  onScoreUpdate?: (score: number) => void;
  onNextCourse: (score: number) => void
}

export default function QuizEngine({ questions, onSuccess, onNextCourse, onScoreUpdate }: QuizEngineProps) {
  const router = useRouter
  const { say, clear } = useEinstein();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isValidated, setIsValidated] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Nettoyer les messages d'Einstein quand on quitte le quiz
  useEffect(() => {
    return () => clear();
  }, [clear]);

  const handleOptionClick = (index: number) => {
    if (isValidated) return;
    setSelectedOption(index);
  };

  const handleValidate = () => {
    if (selectedOption === null || isValidated) return;
    
    setIsValidated(true);
    const q = questions[currentQuestion];
    if (selectedOption === q.correctAnswer) {
      setScore(score + 1);
      say("Excellent ! C'est la bonne réponse.", "congrats");
    } else {
      say(q.explanation, "explanation");
    }
  };

  const nextQuestion = () => {
    clear(); // Enlever l'explication d'Einstein
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsValidated(false);
    } else {
      const finalScore = Math.round((score / questions.length) * 100);
      onScoreUpdate?.(finalScore);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    clear();
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsValidated(false);
    setScore(0);
    setShowResult(false);
  };

  const successRate = (score / questions.length) * 100;
  const isPassed = successRate >= 80;

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-12 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700 text-center space-y-8"
      >
        <div className="flex justify-center">
          {isPassed ? (
            <div className="relative">
              <Trophy className="w-24 h-24 text-yellow-400" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2"
              >
                <CheckCircle2 className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          ) : (
            <XCircle className="w-24 h-24 text-red-500" />
          )}
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white">
            {isPassed ? "Félicitations !" : "Pas mal du tout !"}
          </h2>
          <p className="text-slate-400 text-lg">
            Tu as obtenu un score de
          </p>
          <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {Math.round(successRate)}%
          </div>
        </div>

        <p className="text-slate-300">
          {isPassed
            ? "Tu as brillamment réussi ce quiz. Tu es prêt pour l'aventure suivante !"
            : "Il te faut au moins 80% pour débloquer la suite. Relis bien le cours et réessaie !"}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => { clear(); onSuccess(Math.round(successRate)); }}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all"
          >
            Quitter
          </button>
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 text-white rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-600"
          >
            <RefreshCcw className="w-5 h-5" />
            Réessayer
          </button>
          {isPassed && (
            <button
              onClick={() => { clear(); onNextCourse(Math.round(successRate)); }}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-green-500/25 transition-all transform hover:-translate-y-1"
            >
              Cours Suivant
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto p-8 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700 shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <span className="px-4 py-1 bg-slate-800 rounded-full text-cyan-400 font-mono text-sm border border-cyan-500/30">
          Question {currentQuestion + 1} / {questions.length}
        </span>
        <div className="text-slate-400 font-bold">Score: {score}</div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-8 leading-tight">
        {q.question}
      </h2>

      <div className="grid gap-4">
        {q.options.map((option, idx) => {
          let styles = "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-cyan-500/50";
          
          if (isValidated) {
            if (idx === q.correctAnswer) {
              styles = "bg-green-500/20 border-green-500 text-green-400";
            } else if (idx === selectedOption) {
              styles = "bg-red-500/20 border-red-500 text-red-400";
            } else {
              styles = "bg-slate-800/50 border-slate-700 opacity-50";
            }
          } else if (selectedOption === idx) {
            styles = "border-cyan-500 bg-cyan-500/10 text-cyan-400";
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              disabled={isValidated}
              className={`w-full p-5 text-left rounded-2xl border-2 font-medium transition-all flex justify-between items-center ${styles}`}
            >
              {option}
              {isValidated && idx === q.correctAnswer && <CheckCircle2 className="w-6 h-6" />}
              {isValidated && idx === selectedOption && idx !== q.correctAnswer && <XCircle className="w-6 h-6" />}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-end">
        {!isValidated ? (
          <button
            onClick={handleValidate}
            disabled={selectedOption === null}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${
              selectedOption !== null
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
                : "bg-slate-800 text-slate-500 cursor-not-allowed"
            }`}
          >
            Valider
            <Check className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-all"
          >
            {currentQuestion === questions.length - 1 ? "Terminer" : "Suivant"}
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
