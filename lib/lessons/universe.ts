import { Course } from "@/app/types/types";

export const universe: Course = {
  id: "infinitely-large",
  title: "À la découverte de l'Infiniment Grand",
  thumbnailUrl: "/images/universe/cover.webp",
  description:
    "Pars pour un incroyable voyage dans l'Univers ! Découvre le Soleil, les planètes, les lunes, les comètes, les galaxies, les mystérieux trous noirs et comment les humains explorent l'espace.",

  steps: [
    {
      id: "universe-definition",
      title: "1. Qu'est-ce que l'Univers ?",
      content:
        "L'Univers est tout ce qui existe : les étoiles, les planètes, les galaxies, les nuages de gaz, les trous noirs… et même nous ! Il est gigantesque, tellement immense qu'il est difficile d'imaginer sa taille. L'espace paraît vide, mais il contient des milliards de mondes et d'objets fascinants.",
      imageUrl: "/images/universe/step1.webp"
    },
    {
      id: "sun",
      title: "2. Le Soleil : Notre Étoile",
      content:
        "Le Soleil n'est pas une planète : c'est une étoile, une immense boule de gaz extrêmement chaude ! Il produit lumière et chaleur grâce à des réactions très puissantes dans son cœur appelées fusion nucléaire. Sans lui, la Terre serait une planète glacée et sans vie. Sa gravité maintient aussi les planètes du système solaire autour de lui.",
      imageUrl: "/images/universe/step2.webp"
    },
    {
      id: "planets",
      title: "3. Les Planètes du Système Solaire",
      content:
        "Notre système solaire possède huit planètes qui tournent autour du Soleil : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Autrefois considérée comme la neuvième planète, Pluton est aujourd'hui classée comme une planète naine. Certaines planètes sont rocheuses comme la Terre ou Mars, tandis que d'autres sont géantes et gazeuses comme Jupiter ou Saturne.",
      imageUrl: "/images/universe/step3.webp"
    },
    {
      id: "moons-comets-asteroids",
      title: "4. Lunes, Astéroïdes et Comètes",
      content:
        "Les lunes tournent autour des planètes, comme notre Lune autour de la Terre. Les astéroïdes sont souvent de gros morceaux de roche ou de métal qui voyagent dans l'espace. Les comètes, elles, contiennent beaucoup de glace et de poussière. Lorsqu'elles passent près du Soleil, leur glace chauffe et libère des gaz et de la poussière qui peuvent former une magnifique queue lumineuse.",
      imageUrl: "/images/universe/step4.webp"
    },
    {
      id: "stars",
      title: "5. Les Étoiles",
      content:
        "Le Soleil est une étoile parmi des milliards d'autres ! Certaines étoiles sont petites, d'autres immenses. Elles naissent dans de grands nuages de gaz, brillent parfois pendant des milliards d'années puis changent ou disparaissent lors d'événements spectaculaires. Comparé à d'autres étoiles, le Soleil est de taille moyenne, mais bien plus petit que certaines étoiles géantes.",
      imageUrl: "/images/universe/step5.webp"
    },
    {
      id: "galaxies",
      title: "6. Les Galaxies",
      content:
        "Une galaxie est un immense groupe d'étoiles, de gaz, de poussières et parfois de trous noirs. Notre planète se trouve dans une galaxie appelée la Voie lactée. Et sais-tu quoi ? Il existe probablement des milliards de galaxies dans l'Univers !",
      imageUrl: "/images/universe/step6.webp"
    },
    {
      id: "black-holes",
      title: "7. Les Trous Noirs",
      content:
        "Les trous noirs sont parmi les objets les plus mystérieux de l'Univers. Leur gravité est tellement forte que même la lumière ne peut pas s'en échapper. Si un objet s'approche trop près, il peut être attiré avec une force tellement intense qu'il pourrait être étiré comme un spaghetti : les scientifiques appellent cela la 'spaghettification'. Heureusement, aucun trou noir dangereux ne se trouve près de notre système solaire.",
      imageUrl: "/images/universe/step7.webp"
    },
    {
      id: "wormholes",
      title: "8. Les Trous de Ver (Ponts d'Einstein-Rosen)",
      content:
        "Les trous de ver sont une idée scientifique fascinante imaginée grâce à certaines théories physiques. Les scientifiques pensent qu'ils pourraient fonctionner comme des raccourcis à travers l'espace et le temps, un peu comme un tunnel reliant deux endroits très éloignés. Mais attention : aucun trou de ver n'a encore été découvert et nous ne savons pas s'ils existent réellement.",
      imageUrl: "/images/universe/step8.webp"
    },
    {
      id: "space-tools",
      title: "9. Les Outils pour Explorer l'Univers",
      content:
        "Pour observer l'espace, les scientifiques utilisent des télescopes géants, des satellites, des sondes spatiales et même des robots envoyés sur d'autres mondes. Par exemple, le rover Curiosity explore actuellement Mars pour mieux comprendre cette planète. Ces outils permettent de prendre des photos, mesurer des distances, analyser des signaux venus de l'espace et découvrir de nouveaux objets célestes.",
      imageUrl: "/images/universe/step9.webp"
    },
    {
      id: "space-exploration",
      title: "10. Pourquoi Explorer l'Univers ?",
      content:
        "Pourquoi les humains explorent-ils l'espace ? Pour mieux comprendre comment fonctionne l'Univers, chercher si la vie existe ailleurs, protéger la Terre des astéroïdes dangereux, inventer de nouvelles technologies et préparer peut-être un jour des voyages vers d'autres planètes. Explorer l'espace aide aussi les scientifiques à mieux comprendre notre planète et les lois de la physique.",
      imageUrl: "/images/universe/step10.webp"
    }
  ],

  quiz: [
    {
      id: "q1",
      question: "Qu'est-ce que l'Univers ?",
      options: [
        "Seulement les étoiles",
        "Tout ce qui existe",
        "Uniquement les planètes",
        "Seulement la Terre"
      ],
      correctAnswer: 1,
      explanation:
        "L'Univers contient tout ce qui existe : étoiles, planètes, galaxies, gaz, poussières et même nous."
    },
    {
      id: "q2",
      question: "Le Soleil est...",
      options: [
        "Une planète",
        "Une lune",
        "Une étoile",
        "Un trou noir"
      ],
      correctAnswer: 2,
      explanation:
        "Le Soleil est une étoile qui produit lumière et chaleur."
    },
    {
      id: "q3",
      question: "Combien y a-t-il de planètes dans notre système solaire ?",
      options: [
        "7",
        "8",
        "9",
        "12"
      ],
      correctAnswer: 1,
      explanation:
        "Le système solaire possède 8 planètes. Pluton est aujourd'hui considérée comme une planète naine."
    },
    {
      id: "q4",
      question: "Pourquoi les comètes ont-elles parfois une queue lumineuse ?",
      options: [
        "Parce qu'elles sont en feu",
        "Parce que la glace chauffe près du Soleil",
        "Parce qu'elles produisent de l'électricité",
        "Parce qu'elles brillent comme des lampes"
      ],
      correctAnswer: 1,
      explanation:
        "Quand une comète se rapproche du Soleil, sa glace chauffe et libère des gaz et poussières qui forment une queue lumineuse."
    },
    {
      id: "q5",
      question: "Quelle est la taille du Soleil comparée à d'autres étoiles ?",
      options: [
        "Le Soleil est une étoile moyenne",
        "Le Soleil est la plus grande étoile de l'Univers",
        "Le Soleil est minuscule comme une planète",
        "Le Soleil est une lune"
      ],
      correctAnswer: 0,
      explanation:
        "Le Soleil est considéré comme une étoile de taille moyenne comparée aux étoiles géantes."
    },
    {
      id: "q6",
      question: "Pourquoi un trou noir est-il spécial ?",
      options: [
        "Parce qu'il produit du chocolat",
        "Parce que même la lumière ne peut pas s'en échapper",
        "Parce qu'il éclaire l'espace",
        "Parce qu'il transforme les planètes en étoiles"
      ],
      correctAnswer: 1,
      explanation:
        "La gravité d'un trou noir est si forte que même la lumière ne peut s'en échapper."
    },
    {
      id: "q7",
      question: "Que sait-on aujourd'hui des trous de ver ?",
      options: [
        "Ils sont utilisés pour voyager",
        "Ils existent près de la Terre",
        "Ce sont des idées scientifiques encore non observées",
        "Ils remplacent les fusées"
      ],
      correctAnswer: 2,
      explanation:
        "Les trous de ver sont des idées théoriques : aucun n'a encore été découvert."
    },
    {
      id: "q8",
      question: "Quel robot explore actuellement Mars ?",
      options: [
        "Curiosity",
        "Wall-E",
        "R2-D2",
        "Optimus"
      ],
      correctAnswer: 0,
      explanation:
        "Curiosity est un rover envoyé sur Mars pour explorer sa surface et étudier son environnement."
    },
    {
      id: "q9",
      question: "Pourquoi les humains explorent-ils l'espace ?",
      options: [
        "Pour comprendre l'Univers et découvrir de nouvelles choses",
        "Pour éteindre le Soleil",
        "Pour déplacer la Terre",
        "Pour rendre l'espace plus chaud"
      ],
      correctAnswer: 0,
      explanation:
        "Explorer l'espace permet de mieux comprendre l'Univers, protéger la Terre et développer de nouvelles technologies."
    },
    {
      id: "q10",
      question: "Dans quelle galaxie se trouve la Terre ?",
      options: [
        "Andromède",
        "La Voie lactée",
        "La galaxie rouge",
        "La galaxie du Soleil"
      ],
      correctAnswer: 1,
      explanation:
        "Notre système solaire se trouve dans la galaxie appelée la Voie lactée."
    }
  ]
};