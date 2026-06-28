"use client";

import { useEffect, useState, useRef } from "react";
import { Music } from "lucide-react";
import { useUser } from "@/app/context/UserContext";

const TARGET_VOLUME = 0.15; // Volume d'ambiance doux
const FADE_DURATION = 500; // Durée du fondu en ms

export default function MusicToggle() {
  const { hasPreferencesSet } = useUser();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedByTTSRef = useRef(false);

  // Initialisation de l'audio
  useEffect(() => {
    // Création de l'élément audio (côté client uniquement)
    const audio = new Audio("/eureka-audio.mp3");
    audio.loop = true;
    audio.volume = 0; // On commence à 0 pour faire un fondu doux
    audioRef.current = audio;

    // Charger l'état sauvegardé dans le localStorage
    const savedState = localStorage.getItem("eureka_music_enabled") === "true";
    if (savedState) {
      setIsPlaying(true);
      // Tentative d'autoplay au chargement de la page
      // Les navigateurs peuvent bloquer cela si l'utilisateur n'a pas interagi
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay réussi, on fait un fondu vers le volume cible
            fadeVolume(audio, TARGET_VOLUME, FADE_DURATION);
          })
          .catch(() => {
            // Autoplay bloqué par le navigateur
            console.log("Autoplay de la musique de fond bloqué par le navigateur. En attente d'interaction.");
            setIsPlaying(false);
            localStorage.setItem("eureka_music_enabled", "false");
          });
      }
    }

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Fonction de fondu du volume
  const fadeVolume = (audio: HTMLAudioElement, targetVolume: number, duration: number) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    const stepTime = 30; // intervalle en ms
    const stepsCount = duration / stepTime;
    const volumeStep = (targetVolume - audio.volume) / stepsCount;

    let currentStep = 0;

    fadeIntervalRef.current = setInterval(() => {
      currentStep++;
      const nextVolume = audio.volume + volumeStep;

      // On sature à 0 et à la cible
      if (volumeStep > 0) {
        audio.volume = Math.min(nextVolume, targetVolume);
      } else {
        audio.volume = Math.max(nextVolume, targetVolume);
      }

      if (currentStep >= stepsCount || audio.volume === targetVolume) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }
        audio.volume = targetVolume;
        if (targetVolume === 0) {
          audio.pause();
        }
      }
    }, stepTime);
  };

  // Écoute de l'état de lecture TTS d'Einstein
  useEffect(() => {
    const handleTTSStateChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ isPlaying: boolean }>;
      const isTTSPlaying = customEvent.detail.isPlaying;
      const audio = audioRef.current;

      if (!audio) return;

      if (isTTSPlaying) {
        // Le TTS commence à lire le texte
        if (isPlaying && !audio.paused) {
          // Si la musique joue, on l'estompe (fade out) et on la met en pause temporairement
          isPausedByTTSRef.current = true;
          fadeVolume(audio, 0, FADE_DURATION);
        }
      } else {
        // Le TTS s'arrête ou se termine
        if (isPlaying && isPausedByTTSRef.current) {
          // Si la musique était active avant le TTS, on la relance doucement (fade in)
          isPausedByTTSRef.current = false;
          audio.play()
            .then(() => {
              fadeVolume(audio, TARGET_VOLUME, FADE_DURATION);
            })
            .catch((err) => {
              console.error("Échec de la reprise de la musique après le TTS:", err);
            });
        }
      }
    };

    window.addEventListener("eureka_tts_state", handleTTSStateChange);
    return () => {
      window.removeEventListener("eureka_tts_state", handleTTSStateChange);
    };
  }, [isPlaying]);

  if (!hasPreferencesSet) return null;

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Pause manuelle : fade out puis pause
      setIsPlaying(false);
      localStorage.setItem("eureka_music_enabled", "false");
      isPausedByTTSRef.current = false; // Reset de la pause automatique par TTS
      fadeVolume(audio, 0, FADE_DURATION);
    } else {
      // Lecture manuelle : play puis fade in
      setIsPlaying(true);
      localStorage.setItem("eureka_music_enabled", "true");
      audio.play()
        .then(() => {
          fadeVolume(audio, TARGET_VOLUME, FADE_DURATION);
        })
        .catch((err) => {
          console.error("Erreur lors de la lecture de la musique:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-8 right-56 z-[100] p-3 rounded-xl md:rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg backdrop-blur-md text-slate-600 dark:text-slate-300 hover:scale-110 transition-all active:scale-95 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
      title={isPlaying ? "Désactiver la musique de fond" : "Activer la musique de fond"}
      aria-label={isPlaying ? "Désactiver la musique de fond" : "Activer la musique de fond"}
    >
      <div className="relative flex items-center justify-center w-5 h-5">
        <Music
          className={`w-5 h-5 transition-colors ${
            isPlaying
              ? "text-cyan-500 dark:text-cyan-400 animate-pulse"
              : "text-slate-400 dark:text-slate-500"
          }`}
          aria-hidden="true"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ligne rouge diagonale pour indiquer la coupure */}
            <div className="w-7 h-[2.5px] bg-red-500/80 dark:bg-red-400/80 rotate-45 rounded-full shadow-sm" />
          </div>
        )}
      </div>
    </button>
  );
}
