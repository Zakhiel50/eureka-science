import { Course } from "./water-cycle";

export const humanBody: Course = {
  id: "humanBody",
  title: "Au coeur du corps humain",
  description: "Découvre comment fonctionne le corps humain.",
  thumbnailUrl: "/images/biology/cover.jpg",
  steps: [
  {
    id: "humanBody",
    title: "1. Le corps humain, c’est une machine incroyable",
    content: "Le corps humain est comme une machine très complexe composée de plusieurs équipes (les organes). Un organe, c’est une partie du corps qui a un rôle précis et vital, par exemple, le cœur, les poumons, le cerveau, etc. Tous ces organes travaillent ensemble pour te maintenir en vie.",
    imageUrl: "/images/biology/step1.jpg"
  },
  {
    id: "bodyTeam",
    title: "2. Le cerveau (le chef)",
    content: "Le cerveau contrôle tout le corps par des messages nerveux. Il envoie des messages partout pour tenir au courant toutes les équipes : la douleur, le froid, le chaud, etc. Il permet de penser, bouger et ressentir. C'est lui qui te dit de retirer ta main quand tu touches un objet brûlant.",
    imageUrl: "/images/biology/step2.jpg"
  },
  {
    id: "heart",
    title: "3. Le Cœur (le transporteur)",
    content: "Son travail est de transporter le sang en battant, il est un peu comme une pompe. Par le sang, il apporte de l'oxygène et des nutriments dont toutes les autres équipes ont besoin. Le cœur bat environ 100 000 fois par jour !",
    imageUrl: "/images/biology/step3.jpg"
  },
  {
    id: "pulmon",
    title: "4. Les poumons (l'approvisionneur)",
    content: "Les poumons récupèrent l’oxygène de l’air en se gonflant. Le sang récupère cet oxygène (O2) en inspirant et rejette le dioxyde de carbone (CO2) que ton corps a produit comme déchet en expirant. Personne ne peut survivre sans respirer.",
    imageUrl: "/images/biology/step4.jpg"
  },
  {
    id: "disget",
    title: "5. Le système digestif (le collecteur)",
    content: "Il regroupe l'estomac et les intestins. Le but de cette équipe est de transformer les aliments que tu manges pour récupérer l'énergie (minéraux, vitamines) dont tu as besoin pour vivre. Les déchets sont ensuite évacués quand tu vas aux toilettes.",
    imageUrl: "/images/biology/step5.jpg"
  },
  {
    id: "muscle",
    title: "6. Le système musculaire (le mouvement)",
    content: "Nous avons plus de 600 muscles ! Ils permettent de bouger, porter des choses lourdes, marcher et courir. Ils travaillent avec les os en s'y attachant par des tendons. Même quand tu ne bouges pas, certains muscles (comme le diaphragme) travaillent.",
    imageUrl: "/images/biology/step6.jpg"
  },
  {
    id: "skull",
    title: "7. Le squelette (le support)",
    content: "Le squelette est la charpente de ton corps. Il te permet de tenir debout et protège tes organes fragiles (comme le crâne pour le cerveau). Sans lui, tu serais tout mou ! Un adulte possède 206 os solides.",
    imageUrl: "/images/biology/step7.jpg"
  },
  {
    id: "kidneys",
    title: "8. Les reins (le centre de nettoyage)",
    content: "Les reins sont tes filtres personnels. Ils nettoient ton sang en permanence pour enlever les déchets et le surplus d'eau. Tout ce qui est inutile est transformé en urine (le pipi) pour être évacué du corps.",
    imageUrl: "/images/biology/step8.jpg"
  },
  {
    id: "skin",
    title: "9. La peau (le bouclier protecteur)",
    content: "C'est ton organe le plus grand ! La peau est une barrière qui empêche les microbes d'entrer et te protège du soleil. Elle régule aussi ta température grâce à la transpiration et te permet de ressentir le toucher.",
    imageUrl: "/images/biology/step9.jpg"
  },
  {
    id: "immuneSystem",
    title: "10. Le système immunitaire (la patrouille)",
    content: "C'est l'armée invisible de ton corps. Elle est composée de globules blancs qui circulent dans le sang. Dès qu'un virus ou une bactérie tente de te rendre malade, ils l'attaquent pour le détruire et te guérir.",
    imageUrl: "/images/biology/step10.jpg"
  }
],
quiz: [
  {
    id: "q_humanBody",
    question: "Qu'est-ce qu'un organe dans le corps humain ?",
    options: [
      "Un muscle",
      "Une partie du corps qui a un rôle précis",
      "Un os",
      "Un message envoyé par le cerveau"
    ],
    correctAnswer: 1
  },
  {
    id: "q_bodyTeam",
    question: "Quel est le rôle principal du cerveau ?",
    options: [
      "Nettoyer le sang",
      "Contrôler tout le corps",
      "Faire circuler l'air",
      "Fabriquer des os"
    ],
    correctAnswer: 1
  },
  {
    id: "q_heart",
    question: "À quoi sert le cœur ?",
    options: [
      "À digérer le repas",
      "À transporter le sang en pompant",
      "À fabriquer de l'urine",
      "À nous faire respirer"
    ],
    correctAnswer: 1
  },
  {
    id: "q_pulmon",
    question: "Que récupèrent les poumons quand tu respires ?",
    options: [
      "De l'eau",
      "De l'oxygène",
      "De la nourriture",
      "De la chaleur"
    ],
    correctAnswer: 1
  },
  {
    id: "q_disget",
    question: "Que devient la nourriture dans le système digestif ?",
    options: [
      "Elle devient de l'air",
      "Elle devient de l'énergie",
      "Elle disparaît totalement",
      "Elle devient des os"
    ],
    correctAnswer: 1
  },
  {
    id: "q_muscle",
    question: "Comment les muscles font-ils bouger ton corps ?",
    options: [
      "En criant très fort",
      "En travaillant avec les os",
      "En restant immobiles",
      "En fabriquant du sang"
    ],
    correctAnswer: 1
  },
  {
    id: "q_skull",
    question: "À quoi sert ton squelette ?",
    options: [
      "À nous rendre tout mou",
      "À tenir debout et protéger les organes",
      "À transporter l'oxygène",
      "À réfléchir"
    ],
    correctAnswer: 1
  },
  {
    id: "q_kidneys",
    question: "Quel est le travail des reins ?",
    options: [
      "Nettoyer le sang",
      "Faire battre le cœur",
      "Digérer les bonbons",
      "Porter le squelette"
    ],
    correctAnswer: 0
  },
  {
    id: "q_skin",
    question: "Quelle est l'une des fonctions de la peau ?",
    options: [
      "Nous permettre de voir",
      "Empêcher les microbes d'entrer",
      "Fabriquer de l'énergie",
      "Pomper le sang"
    ],
    correctAnswer: 1
  },
  {
    id: "q_immuneSystem",
    question: "Qui sont les défenseurs de ton système immunitaire ?",
    options: [
      "Les globules rouges",
      "Les globules blancs",
      "Les poils du nez",
      "Les battements du cœur"
    ],
    correctAnswer: 1
  }
]
};
