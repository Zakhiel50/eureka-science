"use client";

import Link from "next/link";
import { ChevronLeft, BookOpen, UserCheck, Shield, HelpCircle } from "lucide-react";

export default function CGUPage() {
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
          Conditions Générales <span className="text-cyan-500 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">d&apos;Utilisation</span>
        </h1>
        <p className="text-black dark:text-white/90 font-medium">
          Règles d&apos;utilisation et fonctionnement de la plateforme EUREKA Science.
        </p>
      </div>

      {/* Contenu */}
      <div className="glass-panel rounded-[2rem] p-6 md:p-10 space-y-8 dark:bg-slate-900/40 bg-white/80 border border-slate-200 dark:border-slate-800">

        {/* Section 1 : Objet */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-500" />
            1. Objet des CGU
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed pl-7">
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (dites « CGU ») ont pour objet d&apos;encadrer l&apos;accès et les modalités d&apos;utilisation de l&apos;application <strong>EUREKA Science</strong>. L&apos;accès et l&apos;utilisation de cette plateforme par tout utilisateur (ci-après désigné « l&apos;Utilisateur ») emportent acceptation sans réserve des présentes CGU.
            </p>
          </div>
        </section>

        {/* Section 2 : Description du service */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-500" />
            2. Description des services fournis
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2 pl-7">
            <p>
              <strong>EUREKA Science</strong> est une application Web éducative et interactive destinée aux enfants et adolescents âgés de 10 à 16 ans. Elle propose :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Des cours illustrés sur divers thèmes scientifiques (ex: le cycle de l&apos;eau, la volcanologie).</li>
              <li>Des quiz de validation des connaissances (avec EinsteinBot pour expliquer les bonnes réponses).</li>
              <li>Un laboratoire virtuel en 3D interactif permettant d&apos;exposer et de collectionner des objets scientifiques acquis grâce aux points d&apos;expérience (XP) gagnés.</li>
              <li>Un système vocal de lecture des cours (via synthèse vocale côté serveur).</li>
            </ul>
            <p className="mt-2 text-black dark:text-white font-semibold">
              L&apos;application est entièrement gratuite, sans publicité, et ne propose aucun achat intégré (in-app).
            </p>
          </div>
        </section>

        {/* Section 3 : Accès et fonctionnement (LocalStorage et Contrôle Parental) */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-cyan-500" />
            3. Fonctionnement technique et contrôle parental
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed space-y-2.5 pl-7">
            <p>
              <strong>Sauvegarde de la progression :</strong> L&apos;application n&apos;utilise pas de système de compte en ligne. La sauvegarde des scores, de la progression dans les cours, de l&apos;XP et de la configuration du laboratoire 3D s&apos;effectue uniquement dans la mémoire locale du navigateur (<code>LocalStorage</code>) de l&apos;Utilisateur. La suppression de ces données locales par l&apos;Utilisateur entraînera la perte définitive de sa progression.
            </p>
            <p>
              <strong>Contrôle Parental :</strong> Un espace de configuration parentale sécurisé par un code PIN à 4 chiffres permet de définir des préférences restrictives pour l&apos;expérience d&apos;apprentissage de l&apos;enfant (telles que le score minimum requis pour valider une leçon). Les parents s&apos;engagent à conserver ce code PIN secret pour en assurer l&apos;efficacité.
            </p>
          </div>
        </section>

        {/* Section 4 : Propriété intellectuelle */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-500" />
            4. Propriété intellectuelle
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed pl-7">
            <p>
              Tous les droits de propriété intellectuelle sur les éléments de l&apos;application (conception, charte graphique, textes des leçons, quiz) appartiennent exclusivement à <strong>Rigaud Luc</strong>. Toute reproduction ou distribution non autorisée du contenu constitue une contrefaçon passible de poursuites.
            </p>
          </div>
        </section>

        {/* Section 5 : Modifications */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-500" />
            5. Évolution des conditions
          </h2>
          <div className="text-black dark:text-white text-sm leading-relaxed pl-7">
            <p>
              L&apos;éditeur se réserve le droit de modifier, à tout moment et sans préavis, les présentes CGU ainsi que les fonctionnalités du site, afin de s&apos;adapter aux évolutions techniques ou réglementaires du service.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
