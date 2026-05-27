"use client";

import React from 'react';
import LabScene from '@/components/laboratory/LabScene';
import LabStore from '@/components/laboratory/LabStore';
import { ChevronLeft, FlaskConical, Beaker, Atom, Microscope } from 'lucide-react';
import Link from 'next/link';

export default function LaboratoryPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-center bg-slate-900/40 p-6 rounded-3xl border border-slate-800 shadow-xl backdrop-blur-sm gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-3 bg-slate-800 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-white flex items-center gap-3">
              <FlaskConical className="w-8 h-8 text-purple-500" />
              Mon Laboratoire
            </h1>
            <p className="text-slate-400 font-medium">Collectionne des objets et personnalise ton espace de recherche !</p>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 gap-12">
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-2">
               <span className="w-2 h-8 bg-purple-500 rounded-full" />
               Vue 3D du Laboratoire
            </h2>
            <span className="text-slate-400 text-sm font-medium italic">Fais glisser pour faire pivoter la vue</span>
          </div>
          <LabScene />
        </section>

        <section className="bg-slate-900/20 p-8 rounded-[2rem] border border-slate-800/50 shadow-inner">
          <LabStore />
        </section>
      </main>

      <footer className="text-center py-8 text-slate-400 text-sm font-medium italic">
        Plus tu apprends, plus ton laboratoire grandira ! 🚀
      </footer>
    </div>
  );
}
