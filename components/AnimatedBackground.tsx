"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

export default function AnimatedBackground() {
  const { showBackground } = useUser();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isLab = pathname === "/laboratoire";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Désactiver le fond animé sur la page Labo ou si l'utilisateur l'a désactivé
  if (!mounted || isLab || !showBackground) return null;

  // Astéroïdes lointains
  const backgroundAsteroids = Array.from({ length: 8 }).map((_, i) => ({
    id: `bg-${i}`,
    size: Math.random() * 40 + 10,
    duration: `${Math.random() * 60 + 60}s`,
    delay: `${Math.random() * -120}s`,
    startY: Math.random() * 100,
    fillClass: "fill-slate-100 dark:fill-[#0f172a]",
    craterClass: "fill-slate-300 dark:fill-[#020617]",
    blur: "blur-0",
    zIndex: 10,
  }));

  // Astéroïdes proches
  const foregroundAsteroids = Array.from({ length: 4 }).map((_, i) => ({
    id: `fg-${i}`,
    size: Math.random() * 120 + 80,
    duration: `${Math.random() * 20 + 25}s`,
    delay: `${Math.random() * -40}s`,
    startY: Math.random() * 100,
    fillClass: "fill-slate-200 dark:fill-[#1e293b]",
    craterClass: "fill-slate-400 dark:fill-[#0f172a]",
    blur: "blur-[1px]",
    zIndex: 20,
  }));

  const allAsteroids = [...backgroundAsteroids, ...foregroundAsteroids];

  // Génération optimisée d'étoiles
  const stars = Array.from({ length: 150 }).map((_, i) => {
    const isLarge = Math.random() > 0.9;
    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: isLarge ? Math.random() * 2 + 2 : Math.random() * 1 + 1,
      duration: `${Math.random() * 3 + 3}s`,
      delay: `${Math.random() * 5}s`,
      opacity: isLarge ? 0.3 : 0.15,
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Étoiles fixes scintillantes */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute bg-white rounded-full star-optimized"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            zIndex: 1,
            // @ts-ignore
            "--star-opacity": star.opacity,
            "--star-duration": star.duration,
            "--star-delay": star.delay,
          }}
        />
      ))}

      {/* Uranus */}
      <div
        className="absolute w-[450px] h-[450px] z-[2] planet-optimized"
        style={{
          top: "10%",
          right: "150px",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-300/5 blur-[40px]" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[15px] border-y border-cyan-200/5 rounded-[100%] rotate-[75deg]"
          style={{
            background: "radial-gradient(ellipse at center, transparent 45%, rgba(165, 243, 252, 0.05) 50%, transparent 55%)",
          }}
        />
        <div 
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: "radial-gradient(circle at 35% 35%, #cffafe 0%, #22d3ee 45%, #0891b2 100%)",
            boxShadow: "inset -40px -40px 80px rgba(0,0,0,0.8), inset 15px 15px 50px rgba(255,255,255,0.2)",
          }}
        />
      </div>

      {/* Astéroïdes */}
      {allAsteroids.map((asteroid) => (
        <div
          key={asteroid.id}
          className={`absolute ${asteroid.blur} asteroid-optimized`}
          style={{ 
            zIndex: asteroid.zIndex,
            top: `${asteroid.startY}%`,
            left: "-25%",
            // @ts-ignore
            "--asteroid-duration": asteroid.duration,
            "--asteroid-delay": asteroid.delay
          }}
        >
          <svg
            width={asteroid.size}
            height={asteroid.size}
            viewBox="0 0 100 100"
          >
            <path d="M50 10 L80 30 L90 60 L70 90 L30 90 L10 60 L20 30 Z" className={asteroid.fillClass} />
            <circle cx="30" cy="40" r="5" className={asteroid.craterClass} />
            <circle cx="60" cy="70" r="8" className={asteroid.craterClass} />
            <circle cx="70" cy="35" r="4" className={asteroid.craterClass} />
          </svg>
        </div>
      ))}

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/5 via-transparent to-blue-950/5 dark:from-cyan-950/20 dark:to-blue-950/20 z-30" />
    </div>
  );
}
