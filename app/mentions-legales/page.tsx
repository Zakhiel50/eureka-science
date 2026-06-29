"use client";

import Link from "next/link";
import { ChevronLeft, Scale, ShieldAlert, Globe, Mail } from "lucide-react";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 mt-20 max-w-4xl mx-auto space-y-8">
      {/* Retour bouton */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors font-bold text-sm"
      >
        <ChevronLeft className="w-5 h-5" />
        Retour à l&apos;accueil
      </Link>

      {/* Titre */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black dark:text-white">
          Mentions <span className="text-cyan-500 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Légales</span>
        </h1>
        <p className="text-black dark:text-white/90 font-medium">
          Informations réglementaires concernant l&apos;application EUREKA Science.
        </p>
      </div>

      {/* Contenu */}
      <div className="glass-panel rounded-[2rem] p-6 md:p-10 space-y-8 dark:bg-slate-900/40 bg-white/80 border border-slate-200 dark:border-slate-800">

        {/* Section 1 : Édition du site */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-cyan-500" />
            1. Éditeur de l&apos;application
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2 pl-7">
            <p>
              L&apos;application <strong>EUREKA Science</strong> est éditée et développée de manière indépendante par :
            </p>
            <p className="font-semibold text-black dark:text-white">
              Rigaud Luc
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-500 dark:text-cyan-400" />
              <span>Contact : eureka.science.contact@gmail.com</span>
            </p>
            <p>
              <strong>Directeur de la publication :</strong> Rigaud Luc
            </p>
          </div>
        </section>

        {/* Section 2 : Hébergement */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-500" />
            2. Hébergeur
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2 pl-7">
            <p>
              L&apos;application est hébergée par la société <strong>Vercel Inc.</strong> :
            </p>
            <p className="font-semibold text-black dark:text-white">
              Vercel Inc.
            </p>
            <p>
              Adresse : 650 California St, San Francisco, CA 94108, USA
            </p>
            <p>
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">https://vercel.com</a>
            </p>
          </div>
        </section>

        {/* Section 3 : Propriété intellectuelle */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-cyan-500" />
            3. Propriété intellectuelle
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2 pl-7">
            <p>
              L&apos;ensemble de la structure de l&apos;application, ainsi que les textes, graphiques, animations (y compris le laboratoire 3D hors certains modèles 3D qui appartiennent respéctivement aux créateurs les ayant mis à disposition et libre de droits) et codes sources sont la propriété exclusive de leur créateur <strong>Rigaud Luc</strong>, sous réserve des droits appartenant à des tiers.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments de l&apos;application, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable de l&apos;éditeur.
            </p>
            <p>
              Les ressources tierces (comme les icônes de la bibliothèque Lucide React ou les bibliothèques logicielles open source utilisées) restent la propriété de leurs auteurs respectifs et sont soumises à leurs licences applicables.
            </p>
          </div>
        </section>

        {/* Section 4 : Responsabilité */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-cyan-500" />
            4. Limites de responsabilité
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2 pl-7">
            <p>
              Les informations scientifiques fournies dans l&apos;application <strong>EUREKA Science </strong>  ont un but uniquement éducatif, ludique et informatif. Bien que je m'efforce de garantir l&apos;exactitude des concepts scientifiques présentés (le cycle de l&apos;eau, les volcans, etc.), des erreurs ou omissions involontaires peuvent subsister.
            </p>
            <p>
              L&apos;éditeur ne pourra être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation de l&apos;application ou de l&apos;impossibilité d&apos;y accéder.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
