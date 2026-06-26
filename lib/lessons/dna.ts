import { Course } from "@/app/types/types";

export const dnaCourse: Course = {
  id: "dna-code-of-life",
  title: "L’ADN et le code de la vie",
  thumbnailUrl: "/images/dna/cover.avif",
  description:
    "Découvre comment toutes les formes de vie sont construites à partir d’un code invisible appelé ADN. Comprends comment il fonctionne, pourquoi tu ressembles à tes parents, et comment les scientifiques le lisent.",

  steps: [
    {
      id: "1",
      title: "Qu’est-ce que la vie ?",
      content:
        "Un être vivant se distingue par plusieurs caractéristiques : il naît, grandit, respire, et peut se reproduire. Les pierres ou les objets ne possèdent pas ces capacités. Tous les êtres vivants sont organisés en cellules.",
      imageUrl: "/images/dna/step1.avif",
    },
    {
      id: "2",
      title: "Les cellules, briques du vivant",
      content:
        "Tous les êtres vivants sont composés de cellules. Elles sont microscopiques mais essentielles : elles construisent les tissus, les organes et permettent le fonctionnement du corps.",
      imageUrl: "/images/dna/step2.avif",
    },
    {
      id: "3",
      title: "Le noyau de la cellule",
      content:
        "Chaque cellule possède un noyau. C’est une sorte de centre de contrôle qui contient les instructions nécessaires au fonctionnement de la cellule.",
      imageUrl: "/images/dna/step3.avif",
    },
    {
      id: "4",
      title: "Qu’est-ce que l’ADN ?",
      content:
        "L’ADN est une longue molécule en forme de spirale. Elle contient toutes les informations nécessaires pour construire un être vivant, comme un manuel d’instructions biologique.",
      imageUrl: "/images/dna/step4.avif",
    },
    {
      id: "5",
      title: "Le langage de l’ADN",
      content:
        "L’ADN est écrit avec seulement quatre lettres : A, T, C et G. Leur ordre forme un code unique qui détermine comment le corps fonctionne et se développe.",
      imageUrl: "/images/dna/step5.avif",
    },
    {
      id: "6",
      title: "Les gènes",
      content:
        "Un gène est un morceau d’ADN qui contient une instruction précise. Certains gènes déterminent la couleur des yeux, d’autres la taille ou la forme du corps.",
      imageUrl: "/images/dna/step6.avif",
    },
    {
      id: "7",
      title: "Héritage des parents",
      content:
        "Tu reçois ton ADN de tes parents. C’est un mélange des deux, ce qui explique pourquoi tu peux leur ressembler tout en étant unique.",
      imageUrl: "/images/dna/step7.avif",
    },
    {
      id: "8",
      title: "Les mutations",
      content:
        "Parfois, l’ADN change légèrement. Ces changements sont appelés mutations. Ils peuvent créer des différences entre individus d’une même espèce.",
      imageUrl: "/images/dna/step8.avif",
    },
    {
      id: "9",
      title: "Lire l’ADN",
      content:
        "Les scientifiques savent aujourd’hui analyser l’ADN pour comprendre les maladies, retracer des origines ou étudier le fonctionnement du corps humain.",
      imageUrl: "/images/dna/step9.avif",
    },
    {
      id: "10",
      title: "Le futur de la génétique",
      content:
        "La science permet désormais de modifier certains gènes. Cela ouvre des possibilités médicales importantes, mais soulève aussi des questions éthiques.",
      imageUrl: "/images/dna/step10.avif",
    },
  ],

  quiz: [
    {
      id: "1",
      question: "Quel est le rôle principal de l’ADN ?",
      options: [
        "Stocker les instructions de construction du vivant",
        "Produire de l’énergie dans le corps",
        "Transporter l’oxygène dans le sang",
        "Protéger les cellules contre les virus",
      ],
      correctAnswer: 0,
      explanation:
        "L’ADN contient les informations nécessaires pour construire et faire fonctionner un être vivant.",
    },
    {
      id: "2",
      question: "Où se trouve principalement l’ADN dans une cellule ?",
      options: [
        "Dans le noyau",
        "Dans la membrane cellulaire",
        "Dans le cytoplasme uniquement",
        "Dans les mitochondries uniquement",
      ],
      correctAnswer: 0,
      explanation:
        "L’ADN est majoritairement situé dans le noyau des cellules.",
    },
    {
      id: "3",
      question: "De quoi est composé le code de l’ADN ?",
      options: [
        "Quatre bases : A, T, C et G",
        "Vingt acides aminés",
        "Trois types de cellules",
        "Des protéines et enzymes",
      ],
      correctAnswer: 0,
      explanation:
        "L’ADN est écrit avec quatre bases chimiques : A, T, C et G.",
    },
    {
      id: "4",
      question: "Qu’est-ce qu’un gène ?",
      options: [
        "Une portion d’ADN avec une fonction spécifique",
        "Une cellule spécialisée du cerveau",
        "Un organe microscopique",
        "Une protéine qui transporte l’ADN",
      ],
      correctAnswer: 0,
      explanation:
        "Un gène est une section d’ADN qui code une instruction précise.",
    },
    {
      id: "5",
      question: "Pourquoi ressemble-t-on à ses parents ?",
      options: [
        "Parce qu’on hérite de leur ADN",
        "Parce qu’on choisit inconsciemment leur apparence",
        "Parce que les cellules changent avec l’âge",
        "Parce que l’environnement modifie les gènes à volonté",
      ],
      correctAnswer: 0,
      explanation:
        "L’ADN est transmis des parents aux enfants, ce qui crée des ressemblances.",
    },
    {
      id: "6",
      question: "Que peut provoquer une mutation ?",
      options: [
        "Un changement dans l’ADN",
        "Une disparition complète des cellules",
        "Une augmentation immédiate de la taille",
        "Une transformation en autre espèce",
      ],
      correctAnswer: 0,
      explanation:
        "Une mutation est une modification dans la séquence de l’ADN.",
    },
    {
      id: "7",
      question: "Quelle est la forme typique de l’ADN ?",
      options: [
        "Une double hélice",
        "Un cercle parfait",
        "Une ligne droite",
        "Une structure en cube",
      ],
      correctAnswer: 0,
      explanation:
        "L’ADN a une structure en forme de spirale appelée double hélice.",
    },
    {
      id: "8",
      question: "Quel est le rôle principal du noyau ?",
      options: [
        "Contenir l’information génétique",
        "Produire l’énergie de la cellule",
        "Transporter les nutriments",
        "Créer les protéines directement",
      ],
      correctAnswer: 0,
      explanation:
        "Le noyau contient l’ADN et dirige les activités de la cellule.",
    },
    {
      id: "9",
      question: "Que font les scientifiques avec l’ADN aujourd’hui ?",
      options: [
        "Ils l’analysent pour comprendre la vie et les maladies",
        "Ils le transforment en énergie",
        "Ils le remplacent par des cellules artificielles",
        "Ils le suppriment pour éviter les maladies",
      ],
      correctAnswer: 0,
      explanation:
        "L’ADN est étudié pour la médecine, la recherche et la génétique.",
    },
    {
      id: "10",
      question: "Quelle affirmation est correcte sur l’ADN ?",
      options: [
        "Il peut être modifié dans certains contextes scientifiques",
        "Il est identique chez tous les êtres vivants",
        "Il ne change jamais sous aucune condition",
        "Il est uniquement présent chez les humains",
      ],
      correctAnswer: 0,
      explanation:
        "La science permet aujourd’hui certaines modifications génétiques contrôlées.",
    },
  ],
} as const;