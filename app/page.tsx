"use client";

import { useState, useEffect } from "react";
import { waterCycleCourse } from "@/lib/lessons/water-cycle";
import { volcanologyCourse } from "@/lib/lessons/volcanology";
import { humanBody } from "@/lib/lessons/human-body";
import { GraduationCap, Lock, Star, Play, CheckCircle, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Définition d'un type local pour les cartes de cours du menu
type CourseCard = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  isLocked: boolean;
  color: string;
  unlocks?: string;
};

export default function Home() {
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);
  const [xp, setXp] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = localStorage.getItem("eureka_progress");
    if (saved) {
      const progress = JSON.parse(saved);
      setCompletedCourses(progress.completed || []);
      setXp(progress.xp || 0);
      setScores(progress.scores || {});
    }
  }, []);

  const courses: CourseCard[] = [
    { 
      id: waterCycleCourse.id,
      title: waterCycleCourse.title,
      description: waterCycleCourse.description,
      thumbnailUrl: waterCycleCourse.thumbnailUrl,
      isLocked: false, 
      color: "from-cyan-500 to-blue-600",
      unlocks: volcanologyCourse.id
    },
    { 
      id: volcanologyCourse.id,
      title: volcanologyCourse.title,
      description: volcanologyCourse.description,
      thumbnailUrl: volcanologyCourse.thumbnailUrl,
      isLocked: !completedCourses.includes(waterCycleCourse.id), 
      color: "from-orange-500 to-red-600",
      unlocks: humanBody.id
    },
    { 
      id: humanBody.id, 
      title: humanBody.title, 
      description: humanBody.description, 
      thumbnailUrl: humanBody.thumbnailUrl,
      isLocked: !completedCourses.includes(volcanologyCourse.id), 
      color: "from-red-100 to-red-500",
      unlocks: "gravite"
    },
    { 
      id: "gravite", 
      title: "Pourquoi on ne s'envole pas ?", 
      description: "Exploration de la gravité et des forces de l'univers.", 
      isLocked: !completedCourses.includes("electricite"), 
      color: "from-purple-500 to-pink-600" 
    },
  ];

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto space-y-12">
      <header className="flex justify-between flex-col items-center bg-slate-900/40 p-8 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-sm md:flex-row">
        <div>
          <h1 className="text-4xl font-black text-white flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-cyan-400" />
            EUREKA
          </h1>
          <p className="text-slate-400 mt-2 font-medium">L'aventure du savoir commence ici !</p>
        </div>
        <div className="flex gap-4">
          <div className="mt-12 md:mt-0 bg-slate-800 px-6 py-3 rounded-2xl border border-slate-700 flex items-center gap-3 shadow-inner">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="font-bold text-2xl text-white">{xp} XP</span>
          </div>
        </div>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => {
          const isCompleted = completedCourses.includes(course.id);
          const rawScore = scores[course.id];
          const score = rawScore !== undefined ? rawScore : (isCompleted ? 100 : undefined);
          
          return (
            <div
              key={course.id}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                course.isLocked
                  ? "bg-slate-900/20 border-slate-800 opacity-60 grayscale"
                  : "bg-slate-900/60 border-slate-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              }`}
            >
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${course.color}`}>
                {course.thumbnailUrl && !course.isLocked && (
                  <Image 
                    src={course.thumbnailUrl} 
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
                    unoptimized
                  />
                )}
                {course.isLocked ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
                    <Lock className="w-12 h-12 text-slate-400" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all flex items-center justify-center">
                    {isCompleted && (
                      <div className="bg-green-500/90 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg">
                        <CheckCircle className="w-5 h-5" /> Terminé
                      </div>
                    )}
                  </div>
                )}
                
                {score !== undefined && !course.isLocked && (
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2 shadow-xl">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span className="text-white font-black text-sm">{score}%</span>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {course.description}
                </p>

                {score !== undefined && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                      <span>Maîtrise</span>
                      <span className={score === 100 ? "text-green-400" : "text-cyan-400"}>
                        {score}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                      <div 
                        className={`h-full transition-all duration-1000 ${
                          score === 100 ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        }`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                )}

                {!course.isLocked ? (
                  <Link
                    href={`/cours/${course.id}`}
                    className={`mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black transition-all shadow-lg ${
                      isCompleted 
                        ? "bg-slate-800 text-cyan-400 border border-cyan-500/30 hover:bg-slate-700" 
                        : "bg-white text-slate-900 hover:bg-cyan-400 hover:text-white"
                    }`}
                  >
                    {isCompleted ? "Revoir le cours" : "Démarrer l'aventure"}
                    <Play className="w-4 h-4 fill-current" />
                  </Link>
                ) : (
                  <div className="mt-4 py-4 text-center text-slate-500 font-bold bg-slate-800/30 rounded-2xl border border-slate-800/50 italic">
                     Cours Verrouillé
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
