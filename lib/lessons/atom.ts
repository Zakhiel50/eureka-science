import { Course } from "@/app/types/types";

export const atom: Course = {
  id: "atom",
  title: "A la recherche du monde atomique",
  description: "Découvre les choses que tu ne vois pas mais qui sont bien là",
  thumbnailUrl: "/images/atomic/cover.jpg",
  steps: [
  {
    id: "atom-discovery",
    title: "1. Qu'est-ce qu'un atome ?",
    content: "Tout ce qui existe autour de toi est composé d’atomes. Un atome est une des plus petites unités de matière. Imagine que tu coupes un objet encore et encore : à un moment, tu atteins une limite où tu ne peux plus le diviser sans changer ce qu’il est. C’est l’atome. Même s’il est minuscule et invisible à l’œil nu, il est la base de tout ce qui existe.",
    imageUrl: "/images/atomic/step1.jpg"
  },
  {
    id: "atom-everywhere",
    title: "2. Les atomes sont partout",
    content: "Les atomes sont présents dans tout l’univers. Ils composent ton corps, l’air que tu respires, l’eau que tu bois, mais aussi les étoiles et les planètes. Ton corps contient des milliards de milliards d’atomes ! Cela veut dire que toi aussi, tu fais partie de ce grand univers.",
    imageUrl: "/images/atomic/step2.jpg"
  },
  {
    id: "atom-structure",
    title: "3. La structure de l’atome",
    content: "Un atome est composé de trois types de particules : les protons (charge positive), les neutrons (neutres) et les électrons (charge négative). Les protons et neutrons forment le noyau au centre, tandis que les électrons se déplacent autour. Cette organisation permet à l’atome d’exister et d’interagir avec les autres.",
    imageUrl: "/images/atomic/step3.jpg"
  },
  {
    id: "nucleus",
    title: "4. Le noyau : le centre de l’atome",
    content: "Le noyau est la partie centrale de l’atome. Il est très petit mais contient presque toute sa masse. Il est composé de protons et de neutrons, fortement liés entre eux. Malgré sa taille minuscule, le noyau joue un rôle essentiel dans la stabilité de l’atome.",
    imageUrl: "/images/atomic/step4.jpg"
  },
  {
    id: "electrons",
    title: "5. Les électrons",
    content: "Les électrons sont de très petites particules qui se déplacent autour du noyau. Ils sont très légers et bougent extrêmement vite. Ce sont eux qui permettent aux atomes de se lier entre eux et de former de nouvelles substances. Sans électrons, aucune réaction chimique ne serait possible.",
    imageUrl: "/images/atomic/step5.jpg"
  },
  {
    id: "elements",
    title: "6. Les éléments chimiques",
    content: "Chaque type d’atome correspond à un élément chimique. Par exemple, l’hydrogène, l’oxygène ou le carbone. Ce qui différencie les éléments, c’est le nombre de protons dans leur noyau. Il existe plus de 100 éléments différents, et chacun a ses propres propriétés.",
    imageUrl: "/images/atomic/step6.jpg"
  },
  {
    id: "periodic-table",
    title: "7. Le tableau périodique",
    content: "Les scientifiques ont organisé tous les éléments dans un tableau appelé le tableau périodique. Il permet de classer les atomes selon leurs propriétés et de mieux comprendre leurs comportements. C’est un outil essentiel en chimie pour comprendre la matière.",
    imageUrl: "/images/atomic/step7.jpg"
  },
  {
    id: "molecules",
    title: "8. Les molécules",
    content: "Les atomes ne restent pas toujours seuls. Ils peuvent s’assembler pour former des molécules. Par exemple, une molécule d’eau est composée de deux atomes d’hydrogène et d’un atome d’oxygène (H2O). Ces assemblages permettent de créer toutes les substances que nous connaissons.",
    imageUrl: "/images/atomic/step8.jpg"
  },
  {
    id: "chemical-reactions",
    title: "9. Les réactions chimiques",
    content: "Les atomes peuvent se transformer en se réorganisant. Lors d’une réaction chimique, ils se séparent puis se recombinent pour former de nouvelles molécules. Par exemple, quand quelque chose brûle, les atomes changent d’organisation pour créer de nouvelles substances.",
    imageUrl: "/images/atomic/step9.jpg"
  },
  {
    id: "atomic-world",
    title: "10. Le monde invisible",
    content: "Les atomes sont invisibles mais essentiels. Ils composent tout ce qui existe autour de nous. Comprendre les atomes permet de mieux comprendre la matière, la chimie et même la vie elle-même. C’est un voyage dans un monde minuscule mais fondamental.",
    imageUrl: "/images/atomic/step10.jpg"
  }
],
  quiz: [
  {
    "id": "q1",
    "question": "Qu’est-ce qu’un atome ?",
    "options": [
      "Un objet visible à l’œil nu",
      "Une des plus petites unités de matière",
      "Un type de cellule",
      "Un morceau d’énergie pure"
    ],
    "correctAnswer": 1,
    "explanation": "Un atome est une des plus petites unités de matière. Tout ce qui existe est composé d’atomes."
  },
  {
    "id": "q2",
    "question": "Où trouve-t-on des atomes ?",
    "options": [
      "Seulement dans les laboratoires",
      "Uniquement dans l’air",
      "Dans tout ce qui existe",
      "Seulement dans le corps humain"
    ],
    "correctAnswer": 2,
    "explanation": "Les atomes sont partout : dans l’air, l’eau, les objets, les plantes, les animaux et même les étoiles."
  },
  {
    "id": "q3",
    "question": "De quoi est composé un atome ?",
    "options": [
      "De cellules",
      "De protons, neutrons et électrons",
      "De molécules",
      "De gaz uniquement"
    ],
    "correctAnswer": 1,
    "explanation": "Un atome est composé de protons (positifs), neutrons (neutres) et électrons (négatifs)."
  },
  {
    "id": "q4",
    "question": "Où se trouvent les protons et les neutrons ?",
    "options": [
      "Dans les électrons",
      "Dans le noyau",
      "Autour de l’atome",
      "Dans l’air"
    ],
    "correctAnswer": 1,
    "explanation": "Les protons et neutrons se trouvent dans le noyau, au centre de l’atome."
  },
  {
    "id": "q5",
    "question": "Que font les électrons ?",
    "options": [
      "Ils restent immobiles",
      "Ils tournent autour du noyau",
      "Ils forment le noyau",
      "Ils disparaissent"
    ],
    "correctAnswer": 1,
    "explanation": "Les électrons se déplacent très vite autour du noyau et permettent les interactions entre atomes."
  },
  {
    "id": "q6",
    "question": "Qu’est-ce qui différencie les éléments chimiques ?",
    "options": [
      "Leur couleur",
      "Le nombre de protons",
      "Leur taille",
      "Leur poids uniquement"
    ],
    "correctAnswer": 1,
    "explanation": "Chaque élément est défini par son nombre de protons. Par exemple, 1 proton = hydrogène, 8 protons = oxygène."
  },
  {
    "id": "q7",
    "question": "À quoi sert le tableau périodique ?",
    "options": [
      "À décorer les salles de classe",
      "À classer les éléments chimiques",
      "À mesurer la température",
      "À calculer le temps"
    ],
    "correctAnswer": 1,
    "explanation": "Le tableau périodique permet de classer les éléments et de comprendre leurs propriétés."
  },
  {
    "id": "q8",
    "question": "Qu’est-ce qu’une molécule ?",
    "options": [
      "Un atome cassé",
      "Un groupe d’atomes assemblés",
      "Un type d’énergie",
      "Un liquide"
    ],
    "correctAnswer": 1,
    "explanation": "Une molécule est un assemblage d’atomes, comme l’eau (H2O)."
  },
  {
    "id": "q9",
    "question": "Qu’est-ce qu’une réaction chimique ?",
    "options": [
      "Un mouvement des électrons uniquement",
      "Un changement de température",
      "Une réorganisation des atomes",
      "Une explosion obligatoire"
    ],
    "correctAnswer": 2,
    "explanation": "Lors d’une réaction chimique, les atomes se séparent et se recombinent pour former de nouvelles substances."
  },
  {
    "id": "q10",
    "question": "Pourquoi les atomes sont-ils importants ?",
    "options": [
      "Parce qu’ils sont visibles",
      "Parce qu’ils composent tout ce qui existe",
      "Parce qu’ils sont dangereux",
      "Parce qu’ils remplacent les cellules"
    ],
    "correctAnswer": 1,
    "explanation": "Les atomes composent toute la matière. Comprendre les atomes permet de comprendre le monde qui nous entoure."
  }
]
};
