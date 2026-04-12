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
  thumbnailUrl: string
};

export const waterCycleCourse: Course = {
  id: "cycle-de-leau",
  title: "L'Odyssée de l'Eau : Le Cycle de l'eau",
  thumbnailUrl: "/images/cycle-water/cycle_eau_10.jpg",
  description: "Un voyage complexe et fascinant à travers les états de la matière et les profondeurs de la Terre.",
  steps: [
    {
      id: "evaporation",
      title: "1. L'Évaporation",
      content: "Sous l'action de l'énergie solaire, l'eau liquide des océans et des lacs gagne de l'énergie et se transforme en vapeur d'eau (gaz). Ce processus permet à l'eau de s'élever dans l'atmosphère.",
      imageUrl: "/images/cycle-water/cycle_eau_1.jpg"
    },
    {
      id: "evapotranspiration",
      title: "2. L'Évapotranspiration",
      content: "Les plantes aussi participent ! Elles puisent l'eau du sol et la rejettent sous forme de vapeur par leurs feuilles (transpiration). C'est un moteur essentiel du cycle en milieu terrestre.",
      imageUrl: "/images/cycle-water/cycle_eau_2.jpg"
    },
    {
      id: "condensation",
      title: "3. La Condensation",
      content: "En montant, la vapeur d'eau se refroidit et se condense autour de minuscules poussières pour former des gouttelettes liquides ou des cristaux de glace : ce sont les nuages.",
      imageUrl: "/images/cycle-water/cycle_eau_3.jpg"
    },
    {
      id: "precipitation",
      title: "4. Les Précipitations",
      content: "Lorsque les gouttelettes fusionnent et deviennent trop lourdes pour rester en suspension, la gravité les fait tomber. Selon la température, cela donne de la pluie, de la neige ou de la grêle.",
      imageUrl: "/images/cycle-water/cycle_eau_4.jpg"
    },
    {
      id: "sublimation",
      title: "5. La Sublimation : Le Saut Invisible",
      content: "C'est le phénomène le plus surprenant ! Parfois, la neige ou la glace se transforme directement en vapeur d'eau sans jamais fondre (sans devenir liquide). C'est comme si la glace se 'téléportait' dans l'air ! Cela arrive sur les hauts sommets des montagnes où l'air est très sec et le soleil très fort : les molécules d'eau n'ont pas le temps de revenir liquide et sautent l'étape de la flaque d'eau pour s'envoler directement vers le ciel.",
      imageUrl: "/images/cycle-water/cycle_eau_5.jpg"
    },
    {
      id: "ruissellement",
      title: "6. Le Ruissellement de Surface",
      content: "Une partie de l'eau s'écoule à la surface du sol, suivant la pente du terrain. Elle forme des rigoles, puis des ruisseaux qui alimentent les rivières.",
      imageUrl: "/images/cycle-water/cycle_eau_6.jpg"
    },
    {
      id: "infiltration",
      title: "7. L'Infiltration",
      content: "Une autre partie de l'eau pénètre dans le sol à travers les pores de la terre et des roches. C'est ainsi que la terre reste humide et que les plantes peuvent boire.",
      imageUrl: "/images/cycle-water/cycle_eau_7.jpg"
    },
    {
      id: "ecoulement-souterrain",
      title: "8. L'Écoulement Souterrain",
      content: "Une fois sous terre, l'eau continue de bouger ! Elle circule lentement à travers les roches poreuses pour former des nappes phréatiques (réserves d'eau douce).",
      imageUrl: "/images/cycle-water/cycle_eau_8.jpg"
    },
    {
      id: "retour",
      title: "9. Le Retour au Cycle",
      content: "Finalement, que ce soit par les fleuves ou par des sources sous-marines, l'eau retrouve les océans. Le voyage est terminé... mais il est prêt à recommencer !",
      imageUrl: "/images/cycle-water/cycle_eau_1.jpg"
    },
    {
      id: "boucle",
      title: "10. La Boucle Éternelle",
      content: "Sais-tu que l'eau que tu bois aujourd'hui est la même que celle que buvaient les dinosaures il y a 150 millions d'années ? L'eau sur Terre ne disparaît jamais : elle voyage, change d'état (glace, liquide ou gaz) et se recycle à l'infini depuis des milliards d'années. C'est une boucle fermée parfaite qui permet à la vie de continuer sur notre planète ! Sache qu'en physique et chimie, rien ne se perd, tout se transforme. Par exemple, si tu à 100 grammes de sable et que tu le chauffe, tu aura 90 grammes de verre et 10 grammes d'eau qui se seront évaporé, ce qui donne une transformation de 100 grammes",
      imageUrl: "/images/cycle-water/cycle_eau_10.jpg"
    }
  ],
  quiz: [
    {
      id: "q1",
      question: "Quel terme désigne la vapeur rejetée par les plantes ?",
      options: ["La Respiration", "L'Évapotranspiration", "La Photosynthèse", "L'Infiltration"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "La sublimation est le passage direct de...",
      options: ["Liquide à Gaz", "Gaz à Liquide", "Solide à Gaz", "Solide à Liquide"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Comment appelle-t-on l'eau qui pénètre dans le sol ?",
      options: ["Le Ruissellement", "La Condensation", "L'Infiltration", "La Collection"],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "Où se trouve l'eau lors de l'écoulement souterrain ?",
      options: ["Dans les nuages", "Dans les nappes phréatiques", "Dans les fleuves", "Dans les feuilles des arbres"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Quelle est l'énergie qui fait monter l'eau dans l'atmosphère ?",
      options: ["La puissance du Vent", "La lumière de la Lune", "L'Énergie Solaire", "La Gravité"],
      correctAnswer: 2
    },
    {
      id: "q6",
      question: "Quelle force fait tomber les précipitations vers le sol ?",
      options: ["Le Magnétisme", "La Gravité", "La Pression", "La Force Centrifuge"],
      correctAnswer: 1
    },
    {
      id: "q7",
      question: "Le ruissellement de surface se produit quand...",
      options: ["L'eau s'évapore", "L'eau coule sur le sol", "L'eau gèle", "L'eau est bue par les plantes"],
      correctAnswer: 1
    },
    {
      id: "q8",
      question: "De quoi sont composés les nuages lors de la condensation ?",
      options: ["De gaz pur", "De gouttelettes d'eau ou cristaux de glace", "De fumée de volcan", "D'oxygène liquide"],
      correctAnswer: 1
    },
    {
      id: "q9",
      question: "L'évapotranspiration combine quels phénomènes ?",
      options: ["Évaporation du sol + Transpiration des plantes", "Pluie + Infiltration", "Neige + Sublimation", "Ruissellement + Retour"],
      correctAnswer: 0
    },
    {
      id: "q10",
      question: "Que peut-on dire de la quantité totale d'eau sur Terre au fil du temps ?",
      options: ["Elle diminue car l'eau s'évapore dans l'espace", "Elle augmente grâce aux comètes", "Elle reste quasiment identique car l'eau se recycle à l'infini", "Elle change selon les saisons"],
      correctAnswer: 2
    }
  ]
};
