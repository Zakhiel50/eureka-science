"use client";

import { useUser } from "@/app/context/UserContext";
import { coursesList } from "@/lib/courses-utils";
import { GraduationCap, Lock, Star, Play, CheckCircle, Target, FlaskConical, Settings, Volume2, ArrowUp, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { div } from "framer-motion/client";

const VOICES = [
  { id: 'fr-FR-DeniseNeural', name: 'Denise' },
  { id: 'fr-FR-HenriNeural', name: 'Henri' },
  { id: 'fr-FR-EloiseNeural', name: 'Eloïse' },
  { id: 'fr-CH-ArianeNeural', name: 'Ariane' },
  { id: 'fr-CH-FabriceNeural', name: 'Fabrice' },
  { id: 'fr-FR-RemyMultilingualNeural', name: 'Rémy' },
  { id: 'fr-FR-VivienneMultilingualNeural', name: 'Vivienne' },
];

export default function Home() {
  const { xp, completedCourses, scores, preferredVoice, setPreferredVoice } = useUser();
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const testVoice = async (voiceId: string) => {
    if (playingVoiceId) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (playingVoiceId === voiceId) {
        setPlayingVoiceId(null);
        return;
      }
    }

    setPlayingVoiceId(voiceId);
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: "Bienvenue sur Eureka-sciences. Je serais ravi de pouvoir t'apprendre les bases de la science.",
          voice: voiceId
        })
      });

      if (!response.ok) throw new Error('Erreur lors de la lecture');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        setPlayingVoiceId(null);
        URL.revokeObjectURL(url);
        audioRef.current = null;
      };
      await audio.play();
    } catch (error) {
      console.error(error);
      setPlayingVoiceId(null);
    }
  };

  const scrollToSettings = () => {
    const element = document.getElementById('settings-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto space-y-12 relative">
      <header className="mt-20 flex justify-between flex-col items-center glass-panel p-8 rounded-3xl md:flex-row" role="banner">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            EUREKA
            <span className="text-[24px] text-green-600 dark:text-green-400 font-black mt-2 gap-1">Science</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">L&apos;aventure du savoir commence ici avec Einstein-bot!</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link 
            href="/laboratoire"
            className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3 shadow-lg hover:scale-105 transition-transform group focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            aria-label="Accéder au laboratoire virtuel"
          >
            <FlaskConical className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" aria-hidden="true" />
            <span className="font-bold text-white uppercase tracking-wider">Laboratoire</span>
          </Link>
          <div className="mt-4 md:mt-0 bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 shadow-inner">
            <Star className="w-6 h-6 text-yellow-500 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400 animate-pulse" aria-hidden="true" />
            <span className="font-bold text-2xl text-slate-900 dark:text-white">
              <span className="sr-only">Votre score total est de </span>
              {xp} XP
            </span>
          </div>
        </div>
      </header>

      <section aria-labelledby="courses-title">
        <h2 id="courses-title" className="sr-only">Liste des cours disponibles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesList.map((course, index) => {
            const isCompleted = completedCourses.includes(course.id);
            const rawScore = scores[course.id];
            const score = rawScore !== undefined ? rawScore : (isCompleted ? 100 : undefined);
            
            const isLocked = index === 0 ? false : !completedCourses.includes(coursesList[index - 1].id);
            
            return (
              <article
                key={course.id}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 flex flex-col ${
                  isLocked
                    ? "bg-slate-100 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800 opacity-60 grayscale"
                    : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
                }`}
                aria-disabled={isLocked}
              >
                <div className="h-48 relative overflow-hidden bg-gradient-to-br shrink-0">
                  {course.thumbnailUrl && !isLocked && (
                    <Image 
                      src={course.thumbnailUrl} 
                      alt="" // Decorative image if the title is enough, or provide alt if informative
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      quality={50}
                      loading="eager"
                    />
                  )}
                  {isLocked ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-sm">
                      <Lock className="w-12 h-12 text-slate-400" aria-label="Cours verrouillé" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-all flex items-center justify-center">
                      {isCompleted && (
                        <div className="bg-green-500/90 text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg">
                          <CheckCircle className="w-5 h-5" aria-hidden="true" /> Terminé
                        </div>
                      )}
                    </div>
                  )}
                  
                  {score !== undefined && !isLocked && (
                    <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/20 flex items-center gap-2 shadow-xl">
                      <Target className="w-4 h-4 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
                      <span className="text-slate-900 dark:text-white font-black text-sm">
                        <span className="sr-only">Score obtenu : </span>
                        {score}%
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {course.description}
                  </p>

                  {score !== undefined && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        <span id={`mastery-label-${course.id}`}>Maîtrise</span>
                        <span className={score === 100 ? "text-green-600 dark:text-green-400" : "text-cyan-600 dark:text-cyan-400"}>
                          {score}%
                        </span>
                      </div>
                      <div 
                        className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700/50" 
                        role="progressbar" 
                        aria-valuenow={score} 
                        aria-valuemin={0} 
                        aria-valuemax={100}
                        aria-labelledby={`mastery-label-${course.id}`}
                      >
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            score === 100 ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                          }`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    {!isLocked ? (
                      <Link
                        href={`/cours/${course.id}`}
                        className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                          isCompleted 
                            ? "bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30 hover:bg-slate-200 dark:hover:bg-slate-700" 
                            : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white"
                        }`}
                        aria-label={isCompleted ? `Revoir le cours : ${course.title}` : `Démarrer le cours : ${course.title}`}
                      >
                        {isCompleted ? "Revoir le cours" : "Démarrer l'aventure"}
                        <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                      </Link>
                    ) : (
                      <div className="py-4 text-center text-slate-500 font-bold bg-slate-100 dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-800/50 italic">
                         <span className="sr-only">Ce cours est actuellement verrouillé. Terminez le cours précédent pour le débloquer.</span>
                         Cours Verrouillé
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Paramètres Section */}
      <section id="settings-section" className="glass-panel p-8 rounded-3xl space-y-8" aria-labelledby="settings-title">
        <div className="flex items-center gap-3">
          <Settings className="w-8 h-8 text-slate-500 dark:text-slate-400" aria-hidden="true" />
          <h2 id="settings-title" className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Paramètres</h2>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto w-full">
          <label id="voice-label" className="text-slate-600 dark:text-slate-400 font-bold flex items-center gap-2 text-lg">
            <Volume2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" aria-hidden="true" />
            Voix d&apos;Einstein-bot
          </label>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup" aria-labelledby="voice-label">
            {VOICES.map((voice) => (
              <div 
                key={voice.id}
                className={`group flex items-center gap-2 p-1 rounded-2xl border transition-all ${
                  preferredVoice === voice.id
                    ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                    : "bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <button
                  onClick={() => setPreferredVoice(voice.id)}
                  className={`flex-1 flex items-center justify-between p-4 rounded-xl transition-all font-bold text-left focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    preferredVoice === voice.id ? "text-cyan-600 dark:text-cyan-400" : "text-slate-500 dark:text-slate-400"
                  }`}
                  role="radio"
                  aria-checked={preferredVoice === voice.id}
                >
                  {voice.name}
                  {preferredVoice === voice.id && (
                    <div className="flex items-center gap-4">
                      <p className="opacity-50 text-xs">Voix séléctionnée</p>
                      <div className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]" aria-hidden="true" />
                    </div>
                  )}
                </button>
                
                <button
                  onClick={() => testVoice(voice.id)}
                  className={`p-4 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    playingVoiceId === voice.id
                      ? "bg-cyan-600 dark:bg-cyan-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400"
                  }`}
                  aria-label={`Écouter un aperçu de la voix de ${voice.name}`}
                >
                  {playingVoiceId === voice.id ? (
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  ) : (
                    <Play className="w-5 h-5 fill-current" aria-hidden="true" />
                  )}
                </button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-slate-500 italic text-sm">
            Clique sur une voix pour la sélectionner, ou sur le bouton de lecture pour l&apos;écouter.
          </p>
        </div>
      </section>

      {/* Floating Shortcut Buttons moved to end of DOM */}
      <nav aria-label="Raccourcis de navigation" className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button
          onClick={scrollToSettings}
          className="p-4 bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-full text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-xl group focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
          title="Aller aux paramètres"
          aria-label="Faire défiler jusqu'à la section des paramètres"
        >
          <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" aria-hidden="true" />
        </button>
        
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-4 bg-cyan-600/80 backdrop-blur-md border border-cyan-400/50 rounded-full text-white hover:bg-cyan-500 transition-all shadow-xl animate-in fade-in slide-in-from-bottom-4 focus:outline-none focus:ring-4 focus:ring-white/50"
            title="Retour en haut"
            aria-label="Retourner en haut de la page"
          >
            <ArrowUp className="w-6 h-6" aria-hidden="true" />
          </button>
        )}
      </nav>
    </div>
  );
}
