"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Heart, Sparkles, Users, Award, Coffee, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEinstein } from "@/app/context/EinsteinContext";

interface Tier {
  id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  tipeurs: number;
  perk: string;
  color: string;
}

const SUPPORT_TIERS: Tier[] = [
  {
    id: "tier-1",
    title: "Un immense merci !",
    price: "1 €",
    description: "Votre soutien aide directement à garder Eureka-science gratuit et à le maintenir en vie. Chaque euro compte énormément pour faire grandir Eureka Science !",
    imageUrl: "/images/dons/d1.avif",
    tipeurs: 0,
    perk: "Accès à notre éternelle gratitude !",
    color: "from-cyan-500 to-blue-500 shadow-cyan-500/10 dark:shadow-cyan-400/5",
  },
  {
    id: "tier-2",
    title: "Votre nom sur le site !",
    price: "5 €",
    description: "Votre nom sera ajouté à la liste des contributeurs officiels directement sur le site Eureka Science pour laisser une trace de votre aide. Je mets la liste à jour en bloc une fois par mois.",
    imageUrl: "/images/dons/d2.avif",
    tipeurs: 0,
    perk: "Votre nom inscrit au panthéon d'Eureka",
    color: "from-purple-500 to-pink-500 shadow-purple-500/10 dark:shadow-purple-400/5",
  },
  {
    id: "tier-3",
    title: "Mention d'honneur",
    price: "15 €",
    description: "Votre nom apparaîtra en haut de la liste des contributeurs avec un badge spécial \"Pilier scientifique\". Vous devenez un pilier essentiel du projet, sans aucune limite de temps.",
    imageUrl: "/images/dons/d3.avif",
    tipeurs: 0,
    perk: "Badge de contributeur pillier de la science",
    color: "from-amber-500 to-rose-500 shadow-amber-500/10 dark:shadow-amber-400/5",
  },
];

export default function SoutenirPage() {
  const { say, clear } = useEinstein();
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  useEffect(() => {
    // EinsteinBot salue l'utilisateur lorsqu'il arrive sur cette page
    say(
      "Merci de t'intéresser au soutien d'Eureka-sciences ! C'est grâce à des passionnés comme toi que le savoir reste libre !",
      "congrats"
    );

    // Modifier le titre du document
    document.title = "Soutenir EUREKA - L'Odyssée des Sciences";

    return () => {
      clear();
    };
  }, [say, clear]);

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto space-y-12 relative mt-20">
      {/* Bouton de retour */}
      <Link
        href="/"
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-white dark:hover:text-white transition-colors font-bold self-start group w-fit"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Retour à l'accueil
      </Link>

      {/* En-tête de la page */}
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block p-4 rounded-full bg-rose-500/10 dark:bg-rose-500/20 text-rose-500 mb-2"
        >
          <Heart className="w-12 h-12 fill-current animate-pulse" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
          Soutenir EUREKA Science
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
          Eureka Science est un projet éducatif indépendant, 100% gratuit et sans publicité. Chaque don m'aide directement pour payer les frais de développement et de maintenance du site et de l'application, et pour concevoir de nouvelles aventures scientifiques et maintenir la plateforme vivante !
        </p>
      </header>

      {/* Grille des Contreparties (Tiers) */}
      <section className="grid md:grid-cols-3 gap-8 pt-4">
        {SUPPORT_TIERS.map((tier, index) => {
          const isHovered = hoveredTier === tier.id;

          return (
            <motion.article
              key={tier.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group flex flex-col bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/5`}
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              {/* Image Section */}
              <div className="h-56 relative overflow-hidden bg-slate-900">
                <Image
                  src={tier.imageUrl}
                  alt={tier.title}
                  fill
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Badge de prix */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-200 dark:border-rose-500/30 shadow-2xl flex items-center justify-center">
                  <span className="text-slate-900 dark:text-white font-black text-xl">
                    {tier.price}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors flex items-center gap-2">
                    {tier.id === "tier-1" && <Coffee className="w-5 h-5 text-cyan-500" />}
                    {tier.id === "tier-2" && <Sparkles className="w-5 h-5 text-purple-500" />}
                    {tier.id === "tier-3" && <Award className="w-5 h-5 text-amber-500" />}
                    {tier.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Badge d'avantage */}
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-yellow-500 shrink-0" />
                    <span>{tier.perk}</span>
                  </div>

                  {/* Nombre de tipeurs et CTA */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-bold border-t border-slate-100 dark:border-slate-800 pt-4">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-slate-400" />
                      {tier.tipeurs} tipeur{tier.tipeurs > 1 ? 's' : ''}
                    </span>
                  </div>

                  <a
                    href="https://fr.tipeee.com/eureka-science"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white rounded-2xl font-black text-center transition-all shadow-lg hover:shadow-rose-500/20 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-rose-500/30"
                  >
                    <span>Soutenir avec {tier.price}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Remarque accessibilité / Tipeee */}
      <footer className="glass-panel p-6 rounded-3xl text-center max-w-xl mx-auto">
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
          Vous allez être redirigé vers ma page officielle Tipeee pour effectuer le paiement de manière totalement sécurisée. Merci infiniment de faire vivre les sciences pour les enfants ! 🚀
        </p>
      </footer>
    </div>
  );
}
