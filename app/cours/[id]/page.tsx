"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { waterCycleCourse } from "@/lib/lessons/water-cycle";
import { volcanologyCourse } from "@/lib/lessons/volcanology";
import LessonContent from "@/components/learning/LessonContent";
import QuizEngine from "@/components/learning/QuizEngine";
import { ChevronLeft, Home } from "lucide-react";
import Link from "next/link";

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const [mode, setMode] = useState<"lesson" | "quiz">("lesson");

  // Sélection du cours en fonction de l'ID dans l'URL
  const allCourses = [waterCycleCourse, volcanologyCourse];
  const course = allCourses.find(c => c.id === params.id);

  const handleSuccess = () => {
    if (!course) return;

    // Récupérer la progression actuelle
    const saved = localStorage.getItem("eureka_progress");
    const progress = saved ? JSON.parse(saved) : { completed: [], xp: 0 };
    
    // Ajouter le cours actuel s'il n'y est pas déjà
    if (!progress.completed.includes(course.id)) {
      progress.completed.push(course.id);
      progress.xp += 100; // Bonus de 100 XP par cours réussi
      localStorage.setItem("eureka_progress", JSON.stringify(progress));
    }
    
    // Rediriger vers l'accueil
    router.push("/");
  };

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white space-y-4">
        <h1 className="text-2xl font-bold">Oups ! Ce cours n'existe pas encore.</h1>
        <Link href="/" className="text-cyan-400 flex items-center gap-2">
           <Home className="w-5 h-5" /> Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="md:flex-row flex flex-col justify-between items-between">
          <Link
            href="/"
            className="mb-6 md:mb-0 flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour au menu
          </Link>
          <div className="bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-800">
            <span className="text-slate-500 text-sm font-mono mr-2">Cours:</span>
            <span className="text-white font-bold">{course.title}</span>
          </div>
        </div>

        {mode === "lesson" ? (
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h1 className="text-5xl font-black text-white tracking-tight">
                {course.title}
              </h1>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto italic">
                "{course.description}"
              </p>
            </div>
            <LessonContent
              steps={course.steps}
              onComplete={() => setMode("quiz")}
            />
          </div>
        ) : (
          <div className="space-y-12">
             <div className="text-center space-y-2">
              <h1 className="text-4xl font-black text-white tracking-tight">
                Mission : Validation des acquis !
              </h1>
              <p className="text-slate-400 text-lg">
                Réponds correctement aux questions pour débloquer le prochain cours.
              </p>
            </div>
            <QuizEngine
              questions={course.quiz}
              onSuccess={handleSuccess}
            />
          </div>
        )}
      </div>
    </div>
  );
}
