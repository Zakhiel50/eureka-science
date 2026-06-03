"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-[100] p-3 rounded-xl md:rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-lg backdrop-blur-md text-slate-600 dark:text-slate-300 hover:scale-110 transition-all active:scale-95 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
      title={theme === "light" ? "Passer au mode sombre" : "Passer au mode clair"}
      aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
      ) : (
        <Sun className="w-5 h-5 group-hover:text-yellow-400 transition-colors" aria-hidden="true" />
      )}
    </button>
  );
}

