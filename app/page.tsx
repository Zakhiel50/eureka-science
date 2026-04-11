"use client";

import { useState, useEffect } from "react";
import { waterCycleCourse } from "@/lib/lessons/water-cycle";
import { GraduationCap, Lock, Star, Play, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("eureka_progress");
    if (saved) {
      const progress = JSON.parse(saved);
      setCompletedCourses(progress.completed || []);
      setXp(progress.xp || 0);
    }
  }, []);

  const courses = [
    { 
      ...waterCycleCourse, 
      isLocked: false, 
      color: "from-cyan-500 to-blue-600",
      unlocks: "electricite"
    },
    { 
      id: "electricite", 
      title: "Le Secret des Éclairs", 
      description: "Découvre comment fonctionne l'électricité et les circuits.", 
      isLocked: !completedCourses.includes("cycle-de-leau"), 
      color: "from-yellow-400 to-orange-500",
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
      <header className="flex justify-between items-center bg-slate-900/40 p-8 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-sm">
        <div>
          <h1 className="text-4xl font-black text-white flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-cyan-400" />
            EUREKA
          </h1>
          <p className="text-slate-400 mt-2 font-medium">L'aventure du savoir commence ici !</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-slate-800 px-6 py-3 rounded-2xl border border-slate-700 flex items-center gap-3 shadow-inner">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="font-bold text-2xl text-white">{xp} XP</span>
          </div>
        </div>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => {
          const isCompleted = completedCourses.includes(course.id);
          
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
