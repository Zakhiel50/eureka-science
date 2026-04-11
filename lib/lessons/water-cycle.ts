export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type LessonStep = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  steps: LessonStep[];
  quiz: QuizQuestion[];
};

export const waterCycleCourse: Course = {
  id: "cycle-de-leau",
  title: "Le Voyage Magique de l'Eau",
  description: "Découvre comment l'eau voyage de la mer jusqu'aux nuages, puis retombe en pluie !",
  steps: [
    {
      id: "evaporation",
      title: "1. L'Évaporation",
      content: "Grâce à la chaleur du Soleil, l'eau des océans, des rivières et des lacs chauffe et se transforme en vapeur d'eau (un gaz invisible). Elle s'élève alors dans le ciel. C'est comme la vapeur qui sort d'une casserole d'eau chaude !",
      imageUrl: "/images/water-cycle/evaporation.webp"
    },
    {
      id: "condensation",
      title: "2. La Condensation",
      content: "En montant très haut, la vapeur d'eau se refroidit. Elle redevient de toutes petites gouttes d'eau qui se regroupent pour former... des nuages ! C'est la condensation.",
      imageUrl: "/images/water-cycle/condensation.webp"
    },
    {
      id: "precipitation",
      title: "3. Les Précipitations",
      content: "Quand les nuages deviennent trop lourds et trop chargés en eau, ils ne peuvent plus la retenir. L'eau retombe alors sur Terre sous forme de pluie, de neige ou de grêle.",
      imageUrl: "/images/water-cycle/precipitation.webp"
    },
    {
      id: "collection",
      title: "4. La Collecte",
      content: "L'eau qui tombe finit par s'écouler dans les rivières et retourne dans les océans. Elle peut aussi s'infiltrer dans le sol pour alimenter les nappes phréatiques. Et le cycle recommence !",
      imageUrl: "/images/water-cycle/collection.webp"
    }
  ],
  quiz: [
    {
      id: "q1",
      question: "Comment appelle-t-on le passage de l'eau de l'état liquide à l'état de vapeur ?",
      options: ["La Condensation", "L'Évaporation", "La Précipitation", "La Congélation"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Que se passe-t-il lors de la condensation ?",
      options: ["L'eau gèle", "La vapeur devient des nuages", "L'eau tombe du ciel", "L'eau s'écoule dans la mer"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Quel élément fournit l'énergie nécessaire pour faire évaporer l'eau ?",
      options: ["Le Vent", "La Lune", "Le Soleil", "Les Poissons"],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "Sous quelles formes l'eau peut-elle retomber sur Terre ?",
      options: ["Pluie, neige ou grêle", "Uniquement de la pluie", "Vapeur d'eau", "Sable"],
      correctAnswer: 0
    },
    {
      id: "q5",
      question: "Où l'eau finit-elle son voyage avant de recommencer son cycle ?",
      options: ["Dans l'espace", "Dans les océans et rivières", "Dans les usines", "Elle disparaît"],
      correctAnswer: 1
    }
  ]
};
