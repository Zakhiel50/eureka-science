"use client";

import Link from "next/link";
import { ChevronLeft, Lock, Database, EyeOff, ShieldCheck } from "lucide-react";

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen p-4 md:p-8 mt-20 max-w-4xl mx-auto space-y-8">
      {/* Retour bouton */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-650 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors font-bold text-sm"
      >
        <ChevronLeft className="w-5 h-5" />
        Retour à l&apos;accueil
      </Link>
      {/* Titre */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black dark:text-white">
          Politique de <span className="text-cyan-500 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Confidentialité</span>
        </h1>
        <p className="text-black dark:text-white/90 font-medium">
          Protection de ta vie privée et de tes données sur EUREKA Science.
        </p>
      </div>

      {/* Contenu */}
      <div className="glass-panel rounded-[2rem] p-6 md:p-10 space-y-8 dark:bg-slate-900/40 bg-white/80 border border-slate-200 dark:border-slate-800">

        {/* Résumé de confiance */}
        <div className="p-5 rounded-2xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-black dark:text-white text-sm leading-relaxed flex items-start gap-4">
          <ShieldCheck className="w-8 h-8 text-cyan-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold">EUREKA Science respecte ta vie privée :</h3>
            <p>
              Aucun compte à créer, aucun formulaire à remplir, aucune donnée collectée ni envoyée sur un serveur externe. Tout ce que tu fais dans l&apos;application reste exclusivement sur ton propre appareil.
            </p>
          </div>
        </div>

        {/* Section 1 : Collecte des données */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-cyan-500" />
            1. Collecte de données nominatives
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed pl-7">
            <p>
              Nous ne collectons <strong>aucune donnée personnelle ou nominative</strong> (telle que ton nom, prénom, adresse e-mail, numéro de téléphone ou géolocalisation). L&apos;application est librement accessible et ne requiert aucune inscription ou création de compte utilisateur.
            </p>
          </div>
        </section>

        {/* Section 2 : Stockage local */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-500" />
            2. Stockage local des données (LocalStorage)
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2.5 pl-7">
            <p>
              Pour te permettre de suivre ton apprentissage et de personnaliser ton expérience, l&apos;application utilise uniquement le stockage local de ton navigateur internet (<code>LocalStorage</code>).
            </p>
            <p>
              Les informations suivantes sont enregistrées localement sur ton appareil :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ta progression globale (identifiants des cours terminés).</li>
              <li>Tes scores obtenus lors des quiz.</li>
              <li>Tes points d&apos;expérience (XP) accumulés.</li>
              <li>Les objets scientifiques débloqués et achetés dans ton laboratoire 3D.</li>
              <li>Tes préférences d&apos;utilisation (choix de la voix d&apos;EinsteinBot, activation/désactivation de la musique de fond et du fond d&apos;écran animé).</li>
              <li>Le code PIN parental si tu as configuré les paramètres parentaux.</li>
            </ul>
            <p className="italic text-xs text-slate-550 dark:text-slate-300 mt-2">
              Ces données sont purement techniques et locales. Elles ne nous sont jamais envoyées et ne sont transmises à aucun tiers.
            </p>
          </div>
        </section>

        {/* Section 3 : Cookies et traceurs */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-cyan-500" />
            3. Cookies et traceurs
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2 pl-7">
            <p>
              L&apos;application <strong>EUREKA Science n&apos;utilise aucun cookie </strong> de suivi, de profilage publicitaire ou d&apos;analyse d&apos;audience.
            </p>
            <p>
              Aucune publicité n&apos;est affichée dans l&apos;application, garantissant un environnement d&apos;apprentissage serein et sécurisé pour les enfants.
            </p>
          </div>
        </section>

        {/* Section 4 : Tes droits */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-500" />
            4. Gestion et effacement de tes données
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2 pl-7">
            <p>
              Puisque tes données sont exclusivement stockées dans ton navigateur, tu en as le contrôle total à tout moment.
            </p>
            <p>
              Si tu souhaites effacer toute ta progression, tes préférences et ton code parental, tu peux le faire très simplement en vidant le cache et les données de navigation du site internet depuis les paramètres de ton navigateur.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
