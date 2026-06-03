"use client";

import { useState, useEffect, useRef } from "react";
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

/**
 * Mélange aléatoirement les options d'un ensemble de questions tout en 
 * conservant la validité de l'index de la réponse correcte.
 */
const shuffleQuestionsOptions = (originalQuestions: QuizQuestion[]) => {
  return originalQuestions.map(questionData => {
    // On crée une structure temporaire qui lie chaque option à son statut "correcte ou non"
    const optionsWithCorrectness = questionData.options.map((optionText, index) => ({
      text: optionText,
      isCorrect: index === questionData.correctAnswer
    }));
    
    const shuffledOptions = [...optionsWithCorrectness];
    for (let currentIndex = shuffledOptions.length - 1; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      [shuffledOptions[currentIndex], shuffledOptions[randomIndex]] = [shuffledOptions[randomIndex], shuffledOptions[currentIndex]];
    }
    
    // Reconstruit l'objet de la question avec le nouvel index correct
    return {
      ...questionData,
      options: shuffledOptions.map(option => option.text),
      correctAnswer: shuffledOptions.findIndex(option => option.isCorrect)
    };
  });
};

export default function QuizEngine({ questions, onSuccess, onNextCourse, onScoreUpdate }: QuizEngineProps) {
  const { say, clear, isCoolingDown } = useEinstein();
  
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isValidated, setIsValidated] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const firstOptionRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setShuffledQuestions(shuffleQuestionsOptions(questions));
  }, [questions]);

  // Gérer le focus sur la première option lors d'une nouvelle question
  useEffect(() => {
    if (!showResult && shuffledQuestions.length > 0 && !isValidated) {
      // Un petit délai peut être nécessaire si des animations sont en cours
      const timer = setTimeout(() => {
        firstOptionRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentQuestionIndex, showResult, shuffledQuestions.length, isValidated]);

  // Nettoyage des messages d'Einstein lors de la fermeture du composant
  useEffect(() => {
    return () => clear();
  }, [clear]);

  const handleOptionClick = (index: number) => {
    if (isValidated) return;
    setSelectedOptionIndex(index);
  };

  const handleValidate = () => {
    if (selectedOptionIndex === null || isValidated) return;
    
    setIsValidated(true);
    const currentQuestionData = shuffledQuestions[currentQuestionIndex];
    
    if (selectedOptionIndex === currentQuestionData.correctAnswer) {
      setScore(score + 1);
      say("Excellent ! C'est la bonne réponse.", "congrats");
    } else {
      say(currentQuestionData.explanation, "explanation");
    }
  };

  const nextQuestion = () => {
    clear(); 
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
      setIsValidated(false);
    } else {
      const finalScorePercentage = Math.round((score / shuffledQuestions.length) * 100);
      onScoreUpdate?.(finalScorePercentage);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    clear();
    setShuffledQuestions(shuffleQuestionsOptions(questions));
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsValidated(false);
    setScore(0);
    setShowResult(false);
  };

  const successRate = shuffledQuestions.length > 0 ? (score / shuffledQuestions.length) * 100 : 0;
  const isPassed = successRate >= 80;

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-12 glass-panel rounded-3xl text-center space-y-8"
        role="alert"
        aria-live="polite"
      >
        <div className="flex justify-center">
          {isPassed ? (
            <div className="relative">
              <Trophy className="w-24 h-24 text-yellow-400" aria-label="Trophée de la réussite" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2"
              >
                <CheckCircle2 className="w-6 h-6 text-white" aria-hidden="true" />
              </motion.div>
            </div>
          ) : (
            <XCircle className="w-24 h-24 text-red-500" aria-label="Icône d'échec" />
          )}
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            {isPassed ? "Félicitations !" : "Pas mal du tout !"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Tu as obtenu un score de
          </p>
          <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            <span className="sr-only">Score final : </span>
            {Math.round(successRate)}%
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300">
          {isPassed
            ? "Tu as brillamment réussi ce quiz. Tu es prêt pour l'aventure suivante !"
            : "Il te faut au moins 80% pour débloquer la suite. Relis bien le cours et réessaie !"}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => { clear(); onSuccess(Math.round(successRate)); }}
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-4 focus:ring-slate-400/50"
            aria-label="Quitter le quiz et retourner à la liste des cours"
          >
            Quitter
          </button>
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-white dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-400/50"
            aria-label="Recommencer le quiz"
          >
            <RefreshCcw className="w-5 h-5" aria-hidden="true" />
            Réessayer
          </button>
          {isPassed && (
            <button
              onClick={() => { clear(); onNextCourse(Math.round(successRate)); }}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-green-500/25 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-500/50"
              aria-label="Passer au cours suivant"
            >
              Cours Suivant
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  const currentQuestionData = shuffledQuestions[currentQuestionIndex];
  if (!currentQuestionData) return null;

  return (
    <div className="max-w-3xl mx-auto p-8 glass-panel rounded-3xl" role="form" aria-labelledby="question-text">
      <div className="flex justify-between items-center mb-8">
        <span className="px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-cyan-600 dark:text-cyan-400 font-mono text-sm border border-cyan-500/30" aria-label={`Question ${currentQuestionIndex + 1} sur ${shuffledQuestions.length}`}>
          Question {currentQuestionIndex + 1} / {shuffledQuestions.length}
        </span>
        <div className="text-slate-600 dark:text-slate-400 font-bold">
          <span className="sr-only">Score actuel : </span>
          Score: {score}
          <span className="sr-only"> points</span>
        </div>
      </div>

      <h2 id="question-text" className="text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
        {currentQuestionData.question}
      </h2>

      <div className="grid gap-4" role="radiogroup" aria-labelledby="question-text">
        {currentQuestionData.options.map((optionText, optionIndex) => {
          let buttonStyles = "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50";
          let ariaLabel = optionText;
          
          if (isValidated) {
            if (optionIndex === currentQuestionData.correctAnswer) {
              buttonStyles = "bg-green-500/10 dark:bg-green-500/20 border-green-500 text-green-700 dark:text-green-400";
              ariaLabel = `${optionText} (Bonne réponse)`;
            } else if (optionIndex === selectedOptionIndex) {
              buttonStyles = "bg-red-500/10 dark:bg-red-500/20 border-red-500 text-red-700 dark:text-red-400";
              ariaLabel = `${optionText} (Mauvaise réponse choisie)`;
            } else {
              buttonStyles = "bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-50";
            }
          } else if (selectedOptionIndex === optionIndex) {
            buttonStyles = "border-cyan-500 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400";
          }

          return (
            <button
              key={optionIndex}
              ref={optionIndex === 0 ? firstOptionRef : null}
              onClick={() => handleOptionClick(optionIndex)}
              disabled={isValidated}
              className={`w-full p-5 text-left rounded-2xl border-2 font-medium transition-all flex justify-between items-center focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${buttonStyles}`}
              role="radio"
              aria-checked={selectedOptionIndex === optionIndex}
              aria-label={ariaLabel}
            >
              {optionText}
              {isValidated && optionIndex === currentQuestionData.correctAnswer && <CheckCircle2 className="w-6 h-6" aria-hidden="true" />}
              {isValidated && optionIndex === selectedOptionIndex && optionIndex !== currentQuestionData.correctAnswer && <XCircle className="w-6 h-6" aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-end">
        {!isValidated ? (
          <button
            onClick={handleValidate}
            disabled={selectedOptionIndex === null}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
              selectedOptionIndex !== null
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
                : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
            }`}
            aria-label="Valider ma réponse"
          >
            Valider
            <Check className="w-5 h-5" aria-hidden="true" />
          </button>
        ) : (
          !isCoolingDown && (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-2 px-8 py-3 bg-cyan-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label={currentQuestionIndex === shuffledQuestions.length - 1 ? "Terminer le quiz et voir les résultats" : "Passer à la question suivante"}
            >
              {currentQuestionIndex === shuffledQuestions.length - 1 ? "Terminer" : "Suivant"}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          )
        )}
      </div>
    </div>
  );
}
