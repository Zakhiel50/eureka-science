"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import LessonContent from "@/components/learning/LessonContent";
import QuizEngine from "@/components/learning/QuizEngine";
import { ChevronLeft, Home } from "lucide-react";
import Link from "next/link";
import { coursesList } from "@/lib/courses-utils";
import { useUser } from "@/app/context/UserContext";

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const [mode, setMode] = useState<"lesson" | "quiz">("lesson");
  const { saveCourseProgress, completedCourses, isLoaded } = useUser();

  // Sélection du cours en fonction de l'ID dans l'URL
  const allCourses = coursesList;
  const course = allCourses.find(c => c.id === params.id);
  const currentIndex = allCourses.findIndex(c => c.id === params.id);

  // Sécurité : Vérifier si le cours précédent est terminé
  useEffect(() => {
    if (isLoaded && currentIndex > 0) {
      const previousCourse = allCourses[currentIndex - 1];
      if (!completedCourses.includes(previousCourse.id)) {
        router.push("/");
      }
    }
  }, [isLoaded, currentIndex, completedCourses, router, allCourses]);

  const handleSuccess = (score: number) => {
    if (course) saveCourseProgress(course.id, score);
    // Rediriger vers l'accueil
    router.push("/");
  };

  const handleNextCourse = (score: number) => {
    if (course) saveCourseProgress(course.id, score);
    if (currentIndex !== -1 && currentIndex < allCourses.length - 1) {
      const nextCourse = allCourses[currentIndex + 1];
      setMode("lesson");
      router.push(`/cours/${nextCourse.id}`);
    } else {
      router.push("/");
    }
  };

  const handleScoreUpdate = (score: number) => {
    if (course) saveCourseProgress(course.id, score);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white space-y-4">
        <h1 className="text-2xl font-bold">Oups ! Ce cours n&apos;existe pas encore.</h1>
        <Link href="/" className="text-cyan-400 flex items-center gap-2">
          <Home className="w-5 h-5" /> Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 mt-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="md:flex-row flex flex-col justify-between items-between">
          <Link
            href="/"
            className="mb-6 md:mb-0 flex items-center gap-2 text-white-500 hover:text-slate-900 dark:text-white-400 dark:hover:text-white transition-colors font-bold"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour au menu
          </Link>
          <div className="bg-white/70 dark:bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
            <span className="text-slate-500 text-sm font-mono mr-2">Cours:</span>
            <span className="text-slate-900 dark:text-white font-bold">{course.title}</span>
          </div>
        </div>

        {mode === "lesson" ? (
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-900 dark:from-cyan-400 dark:to-blue-500">
                {course.title}
              </h1>
              <p className="text-slate-white dark:text-white-400 text-xl max-w-2xl mx-auto italic">
                {course.description}
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
              <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Mission : Validation des acquis !
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Réponds correctement aux questions pour débloquer le prochain cours.
              </p>
            </div>
            <QuizEngine
              questions={course.quiz}
              onSuccess={handleSuccess}
              onNextCourse={handleNextCourse}
              onScoreUpdate={handleScoreUpdate}
            />
          </div>
        )}
      </div>
    </div>
  );
}
