import { Course } from "@/app/types/types";

export const microscopic: Course = {
  id: "microscopic",
  title: "Voyage vers l'infiniment petit",
  description: "Découvre les choses que tu ne vois pas mais qui sont bien là",
  thumbnailUrl: "/images/microscopic/cover.webp",
  steps: [
    {
      id: "macro-limit",
      title: "1. La limite de nos yeux",
      content: "L'œil humain est un outil incroyable, mais il a ses limites. À l'échelle normale, un cheveu ou une petite miette semblent n'être qu'un fil. Pourtant, si on pouvait zoomer, on découvrirait que chaque petit objet possède son propre paysage avec ses reliefs et ses détails invisibles à l'oeil nu.",
      imageUrl: "/images/microscopic/step1.webp"
    },
    {
      id: "insect-world",
      title: "2. Le monde des insectes",
      content: "À l'aide d'une simple loupe, le monde change. L'œil d'une mouche n'est plus une tache noire, mais un assemblage de milliers de petites facettes. Les ailes d'un papillon révèlent qu'elles sont couvertes d'écailles minuscules, comme les tuiles d'un toit, qui capturent la lumière.",
      imageUrl: "/images/microscopic/step2.webp"
    },
    {
      id: "microscope-tool",
      title: "3. Le Microscope : La machine à zoomer",
      content: "Pour aller plus loin, les scientifiques utilisent le microscope. C'est un instrument qui utilise des lentilles pour plier la lumière et agrandir les images jusqu'à 1 000 fois. C'est la porte d'entrée vers un univers totalement caché à nos sens.",
      imageUrl: "/images/microscopic/step3.webp"
    },
    {
      id: "cell-brick",
      title: "4. La Cellule : La brique de la vie",
      content: "Sous l'objectif du microscope, on découvre que tout ce qui est vivant (une feuille, ta peau, un muscle) est fait de petites unités appelées 'cellules'. Imagine un mur de briques : la brique est l'élément de base, c'est la cellule. On peut donc dire que la cellule est la brique de tout être vivant.",
      imageUrl: "/images/microscopic/step4.webp"
    },
    {
      id: "blood-river",
      title: "5. L'intérieur d'une goutte de sang",
      content: "Le sang est rouge, non? Mais si on regarde une goutte de sang, on ne voit plus un liquide rouge uni. On y voit des millions de globules rouges qui ressemblent à de petites soucoupes. Ils circulent dans nos vaisseaux comme des camions sur une autoroute pour transporter l'oxygène à tout notre corps.",
      imageUrl: "/images/microscopic/step5.webp"
    },
    {
      id: "bacteria-citizens",
      title: "6. Les habitants invisibles",
      content: "Nous ne sommes jamais seuls ! Sur un seul centimètre de ta peau vivent des millions de bactéries. Elles sont si petites qu'il en faudrait plusieurs milliards pour couvrir la tête d'une épingle. La plupart sont amicales et nous aident à rester en bonne santé et d'autre peuvent nous rendre malade.",
      imageUrl: "/images/microscopic/step6.webp"
    },
    {
      id: "surface-texture",
      title: "7. Le relief de l'invisible",
      content: "Rien n'est vraiment lisse. Si tu regardes une lame de rasoir ou une feuille de papier glacé au microscope électronique (comme un microscope à lentille mais avec un petit écran dessus), tu verras des montagnes, des crevasses et des cratères. Ce qui semble plat à notre main est en réalité un terrain très accidenté à l'échelle microscopique.",
      imageUrl: "/images/microscopic/step7.webp"
    },
    {
      id: "sun-dust",
      title: "8. La poussière de soleil",
      content: "L'air semble vide, mais il est rempli de passagers clandestins. Des grains de pollen, des fibres de vêtements et des débris de roches flottent partout. On ne les voit que lorsqu'un rayon de lumière les éclaire dans le noir. Mets toi dans le noir et place une lampe torche devant toi, tu pourras voir ces petits éléments grâce à la réflexion de la lumière.",
      imageUrl: "/images/microscopic/step8.webp"
    },
    {
      id: "concept-of-void",
      title: "9. La notion de Vide",
      content: "Plus on descend dans le petit, plus on réalise une chose étrange : la matière est pleine de trous ! Entre deux cellules ou deux bactéries, il y a de l'espace. Le monde n'est pas un bloc compact, c'est un assemblage d'objets séparés par du vide, mais qui n'est pas si vide, on en parlera sur le cours qui t'apprendrons ce que sont les atomes.",
      imageUrl: "/images/microscopic/step9.webp"
    },
    {
      id: "invisible-door",
      title: "10. La porte vers l'invisible",
      content: "Au bout de ce voyage, nous arrivons à une frontière. En dessous des plus petits microbes, il existe encore autre chose : les composants de la matière elle-même. C'est ici que s'arrête le monde des objets et que commence le monde des atomes, que nous explorerons au prochain cours.",
      imageUrl: "/images/microscopic/step10.webp"
    }
  ],
  quiz: [
  {
    "id": "q1",
    "question": "Pourquoi un cheveu semble-t-il n'être qu'un simple fil à l'œil nu ?",
    "options": [
      "Parce qu'il est parfaitement lisse",
      "À cause des limites de zoom de l'œil humain",
      "Parce qu'il ne possède pas de relief",
      "Parce qu'il est transparent"
    ],
    "correctAnswer": 1,
    "explanation": "Notre œil a une limite de 'zoom'. À l'échelle normale, on ne voit pas les détails, mais chaque petit objet possède en réalité son propre paysage invisible."
  },
  {
    "id": "q2",
    "question": "Que découvre-t-on sur les ailes d'un papillon avec une loupe ?",
    "options": [
      "De la peinture colorée",
      "Des plumes minuscules",
      "Des écailles semblables à des tuiles de toit",
      "Une surface parfaitement plate"
    ],
    "correctAnswer": 2,
    "explanation": "Les couleurs des papillons viennent souvent de milliers de petites écailles qui recouvrent leurs ailes et capturent la lumière."
  },
  {
    "id": "q3",
    "question": "Jusqu'à combien de fois un microscope optique peut-il agrandir une image ?",
    "options": [
      "10 fois",
      "100 fois",
      "1 000 fois",
      "1 000 000 de fois"
    ],
    "correctAnswer": 2,
    "explanation": "Un microscope classique utilise des lentilles pour agrandir les objets environ 1 000 fois, ce qui permet de voir les cellules."
  },
  {
    "id": "q4",
    "question": "Quelle est la 'brique' de base de tous les êtres vivants ?",
    "options": [
      "Le grain de sable",
      "La cellule",
      "La bactérie",
      "La fibre"
    ],
    "correctAnswer": 1,
    "explanation": "Tout ce qui est vivant est constitué de cellules. C'est l'unité de base, comme une brique pour une maison."
  },
  {
    "id": "q5",
    "question": "À quoi ressemblent les globules rouges vus au microscope ?",
    "options": [
      "À des petits cubes",
      "À des étoiles",
      "À de petites soucoupes",
      "À des longs fils"
    ],
    "correctAnswer": 2,
    "explanation": "Le sang n'est pas juste un liquide uni ; il contient des millions de disques (soucoupes) qui transportent l'oxygène."
  },
  {
    "id": "q6",
    "question": "Où peut-on trouver des millions de bactéries amicales ?",
    "options": [
      "Seulement dans la terre",
      "Uniquement dans la nourriture",
      "Sur chaque centimètre de notre peau",
      "Nulle part, elles sont toutes dangereuses"
    ],
    "correctAnswer": 2,
    "explanation": "Nous vivons en permanence avec des millions de bactéries. La plupart sont essentielles pour nous garder en bonne santé."
  },
  {
    "id": "q7",
    "question": "Comment apparaît une lame de rasoir au microscope électronique ?",
    "options": [
      "Comme une ligne droite parfaite",
      "Comme un paysage de montagnes et de cratères",
      "Elle devient invisible",
      "Elle ressemble à du liquide"
    ],
    "correctAnswer": 1,
    "explanation": "Même ce qui nous semble parfaitement lisse à la main est en réalité très accidenté et rempli de reliefs à l'échelle microscopique."
  },
  {
    "id": "q8",
    "question": "Grâce à quoi peut-on voir la poussière dans l'air d'une pièce sombre ?",
    "options": [
      "En soufflant très fort",
      "Grâce à un rayon de lumière ou une lampe torche",
      "En fermant les yeux à moitié",
      "En utilisant un aimant"
    ],
    "correctAnswer": 1,
    "explanation": "La lumière rebondit sur les petites particules (pollen, fibres), ce qui nous permet de les voir briller dans le noir."
  },
  {
    "id": "q9",
    "question": "Quelle est la caractéristique surprenante de la matière quand on l'observe de très près ?",
    "options": [
      "Elle est totalement compacte",
      "Elle est pleine de trous et de vide",
      "Elle change de couleur tout le temps",
      "Elle disparaît quand on ne la regarde pas"
    ],
    "correctAnswer": 1,
    "explanation": "Plus on regarde petit, plus on réalise que les objets ne sont pas un bloc solide, mais des éléments séparés par beaucoup d'espace."
  },
  {
    "id": "q10",
    "question": "Qu'est-ce qui est plus petit que le monde des microbes ?",
    "options": [
      "Rien du tout",
      "Des insectes encore plus petits",
      "Le monde des atomes",
      "De la magie"
    ],
    "correctAnswer": 2,
    "explanation": "L'atome est le niveau encore plus petit qui compose tout ce que nous avons vu jusqu'à présent (cellules, poussières, métaux)."
  }
]
};
