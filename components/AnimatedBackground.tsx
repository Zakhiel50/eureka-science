"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Astéroïdes lointains
  const backgroundAsteroids = Array.from({ length: 10 }).map((_, i) => ({
    id: `bg-${i}`,
    size: Math.random() * 40 + 10,
    duration: Math.random() * 60 + 60,
    delay: Math.random() * -120,
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
    duration: Math.random() * 20 + 25,
    delay: Math.random() * -40,
    startY: Math.random() * 100,
    fillClass: "fill-slate-200 dark:fill-[#1e293b]",
    craterClass: "fill-slate-400 dark:fill-[#0f172a]",
    blur: "blur-[1px]",
    zIndex: 20,
  }));

  const allAsteroids = [...backgroundAsteroids, ...foregroundAsteroids];

  // Génération d'étoiles avec des tailles variées
  const stars = Array.from({ length: 400 }).map((_, i) => {
    const isLarge = Math.random() > 0.9;
    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: isLarge ? Math.random() * 2 + 3 : Math.random() * 1.5 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      opacity: isLarge ? 0.4 : 0.2,
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Étoiles fixes scintillantes */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            zIndex: 1,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 2.5, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Planète */}
      <motion.div
        className="absolute w-[250px] h-[250px] z-[2]"
        style={{
          top: "10%",
          right: "150px",
        }}
        animate={{
          y: [0, 0, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Halo */}
        <div className="absolute -inset-20 rounded-full bg-cyan-300/15 blur-[80px]" />


        {/* Corps de la planètes */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: "radial-gradient(circle at 35% 35%, #cffafe 0%, #22d3ee 45%, #0891b2 100%)",
            boxShadow: "inset -40px -40px 80px rgba(0,0,0,0.8), inset 15px 15px 50px rgba(255,255,255,0.2)",
            filter: "drop-shadow(30px 30px 50px rgba(0,0,0,0.5))",
          }}
        >
          {/* Surface lisse */}
          <div className="absolute inset-0 opacity-10" style={{
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.1) 50%, transparent)",
            filter: "blur(40px)",
          }} />
        </div>
      </motion.div>

      {/* Tous les Astéroïdes */}
      {allAsteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className={`absolute ${asteroid.blur}`}
          style={{ zIndex: asteroid.zIndex }}
          initial={{ 
            left: "-25%", 
            top: `${asteroid.startY}%`,
            rotate: 0 
          }}
          animate={{ 
            left: "125%",
            rotate: 360
          }}
          transition={{
            duration: asteroid.duration,
            repeat: Infinity,
            delay: asteroid.delay,
            ease: "linear",
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
        </motion.div>
      ))}

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/5 via-transparent to-blue-950/5 dark:from-cyan-950/20 dark:to-blue-950/20 z-30" />
    </div>
  );
}
