"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlaskConical, Shield, FileText, Heart, Scale } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Ne pas afficher le footer sur les pages de cours
  if (pathname?.startsWith("/cours")) {
    return null;
  }

  return (
    <footer className="relative z-1 w-full mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel p-8 md:p-12 space-y-8 bg-slate-950/40 border border-slate-800/80 shadow-[0_0_30px_rgba(6,182,212,0.05)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800/60">
            <div className="space-y-3">
              <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-xl px-2 py-1 -ml-2">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform duration-300">
                  <FlaskConical className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="text-xl font-black tracking-wider text-slate-800 dark:text-white group-hover:text-cyan-400 transition-colors">
                  EUREKA <span className="text-cyan-500">Science</span>
                </span>
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
                Une odyssée scientifique interactive pour les jeunes chercheurs et esprits curieux. Apprends, expérimente et débloque de nouvelles connaissances !
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold" aria-label="Informations légales et projet">
              <Link
                href="/mentions-legales"
                className="flex items-center gap-2 text-slate-650 hover:text-cyan-500 dark:text-slate-350 dark:hover:text-cyan-400 transition-colors py-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg px-2"
              >
                <Scale className="w-4 h-4" />
                Mentions Légales
              </Link>
              <Link
                href="/cgu"
                className="flex items-center gap-2 text-slate-650 hover:text-cyan-500 dark:text-slate-350 dark:hover:text-cyan-400 transition-colors py-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg px-2"
              >
                <FileText className="w-4 h-4" />
                CGU
              </Link>
              <Link
                href="/politique-de-confidentialite"
                className="flex items-center gap-2 text-slate-650 hover:text-cyan-500 dark:text-slate-350 dark:hover:text-cyan-400 transition-colors py-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg px-2"
              >
                <Shield className="w-4 h-4" />
                Confidentialité & RGPD
              </Link>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} EUREKA Science. Tous droits réservés.
            </p>
            <p className="flex items-center gap-1">
              Développé par{" "}
              <span className="font-bold text-slate-800 dark:text-slate-300">Rigaud Luc</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
