import { Course } from "@/app/types/types";

export const gravity: Course = {
  id: "gravity",
  title: "Pourquoi on ne s'envole pas",
  description: "Découvre la splendeur de la gravité.",
  thumbnailUrl: "/images/gravity/cover.jpg",
  steps: [
    {
      id: "invisibleForce",
      title: "1. La force invisible",
      content: "La gravité est une force invisible qui attire tous les objets les uns vers les autres. C'est elle qui fait tomber ta tartine par terre ou qui fait revenir ton ballon quand tu le lances en l'air. Sans elle, tout flotterait comme dans l'espace !",
      imageUrl: "/images/gravity/step1.jpg"
    },
    {
      id: "earthMagnet",
      title: "2. La Terre est un aimant géant",
      content: "Imagine que la Terre est un aimant énorme et très puissant. Elle attire tout vers son centre : les maisons, les océans, les arbres et même toi ! C'est pour ça qu'on a toujours les pieds bien posés sur le sol.",
      imageUrl: "/images/gravity/step2.jpg"
    },
    {
      id: "massRule",
      title: "3. Plus c'est lourd, plus ça attire",
      content: "La règle de la gravité est simple : plus un objet est massif (lourd), plus sa force d'attraction est forte. La Terre est tellement gigantesque qu'elle gagne toujours contre les petits objets comme nous !",
      imageUrl: "/images/gravity/step3.jpg"
    },
    {
      id: "newtonApple",
      title: "4. L'histoire d'Isaac Newton",
      content: "On raconte qu'un scientifique nommé Isaac Newton a compris la gravité en regardant une pomme tomber d'un arbre. Il s'est demandé : 'Pourquoi la pomme tombe-t-elle vers le bas et pas vers le haut ?'.",
      imageUrl: "/images/gravity/step4.jpg"
    },
    {
      id: "moonTides",
      title: "5. La Lune et la Gravité",
      content: "La Lune aussi a de la gravité, mais elle est plus petite que la Terre. Sa force est assez forte pour attirer l'eau des océans, ce qui crée les marées (la mer qui monte et qui descend).",
      imageUrl: "/images/gravity/step5.jpg"
    },
    {
      id: "weightVsMass",
      title: "6. Ton poids peut changer !",
      content: "Sur la Lune, comme la gravité est plus faible, tu te sentirais tout léger. Tu pourrais faire des bonds de géant ! Ta taille ne changerait pas, mais ton poids sur la balance serait divisé par 6.",
      imageUrl: "/images/gravity/step6.jpg"
    },
    {
      id: "atmosphereHold",
      title: "7. Elle retient notre air",
      content: "La gravité ne retient pas que les objets solides, elle retient aussi l'air qu'on respire (l'atmosphère). Sans elle, l'air s'envolerait dans l'espace et on ne pourrait plus respirer.",
      imageUrl: "/images/gravity/step7.jpg"
    },
    {
      id: "solarSystem",
      title: "8. Le chef du système solaire",
      content: "Le Soleil est l'objet le plus massif de notre système. Sa gravité est si forte qu'elle oblige toutes les planètes, dont la Terre, à tourner autour de lui sans s'échapper.",
      imageUrl: "/images/gravity/step8.jpg"
    },
    {
      id: "noGravitySpace",
      title: "9. L'impesanteur",
      content: "Quand les astronautes sont dans l'espace, loin de la Terre, ils ne ressentent presque plus la gravité. Ils flottent : c'est ce qu'on appelle l'impesanteur. Même boire de l'eau devient un jeu !",
      imageUrl: "/images/gravity/step9.jpg"
    },
    {
      id: "invisibleGlue",
      title: "10. La colle de l'Univers",
      content: "On peut dire que la gravité est la 'colle' de l'Univers. Elle forme les planètes, les étoiles et garde tout le monde ensemble. C'est une force indispensable à la vie !",
      imageUrl: "/images/gravity/step10.jpg"
    }
  ],
  quiz: [
    {
      id: "q_grav1",
      question: "Qu'est-ce que la gravité ?",
      options: ["Une sorte de vent", "Une force invisible qui attire les objets", "Une lumière", "Un bruit"],
      correctAnswer: 1,
      explanation: "La gravité est une force d'attraction universelle. Tout objet qui possède une masse attire les autres objets vers lui."
    },
    {
      id: "q_grav2",
      question: "Vers où la Terre attire-t-elle tout ce qui nous entoure ?",
      options: ["Vers le ciel", "Vers la droite", "Vers son centre", "Vers la Lune"],
      correctAnswer: 2,
      explanation: "La gravité terrestre tire tout vers le centre de la planète, ce qui nous permet de rester au sol partout sur le globe."
    },
    {
      id: "q_grav3",
      question: "Qui a compris la gravité grâce à une pomme ?",
      options: ["Albert Einstein", "Isaac Newton", "Spiderman", "Un astronaute"],
      correctAnswer: 1,
      explanation: "Isaac Newton a publié la loi de la gravitation universelle en 1687 après avoir médité sur la chute des corps."
    },
    {
      id: "q_grav4",
      question: "Que se passerait-il sans gravité ?",
      options: ["On serait plus lourd", "On flotterait dans les airs", "On courrait plus vite", "Rien ne changerait"],
      correctAnswer: 1,
      explanation: "Sans cette 'colle' invisible, rien ne serait retenu au sol et nous dériverions dans le vide de l'espace !"
    },
    {
      id: "q_grav5",
      question: "Pourquoi la gravité de la Terre est-elle forte ?",
      options: ["Parce qu'elle est très chaude", "Parce que la Terre est très massive (grosse et lourde)", "Parce qu'elle tourne vite", "Parce qu'il y a de l'eau"],
      correctAnswer: 1,
      explanation: "Plus un objet est massif, plus sa force de gravité est grande. La Terre est si énorme qu'elle exerce une attraction puissante."
    },
    {
      id: "q_grav6",
      question: "Sur la Lune, comment te sentirais-tu ?",
      options: ["Plus lourd", "Plus léger", "Pareil", "Incapable de bouger"],
      correctAnswer: 1,
      explanation: "La Lune est moins massive que la Terre, sa gravité est donc 6 fois plus faible. Tu y pèserais 6 fois moins lourd !"
    },
    {
      id: "q_grav7",
      question: "Grâce à quoi l'air et l'atmosphère reste-t-ils autour de la Terre ?",
      options: ["Grâce aux arbres", "Grâce à la gravité", "Grâce aux nuages", "Grâce au vent"],
      correctAnswer: 1,
      explanation: "La gravité retient les gaz de l'atmosphère près de la surface, nous permettant ainsi de respirer."
    },
    {
      id: "q_grav8",
      question: "Quelle force fait tourner la Terre autour du Soleil ?",
      options: ["Le magnétisme", "La gravité du Soleil", "L'électricité", "La force du vent"],
      correctAnswer: 1,
      explanation: "L'immense gravité du Soleil maintient toutes les planètes sur leurs orbites, les empêchant de se perdre dans l'espace."
    },
    {
      id: "q_grav9",
      question: "Comment appelle-t-on le fait de flotter dans l'espace ?",
      options: ["La légèreté", "L'impesanteur", "La natation", "Le vol libre"],
      correctAnswer: 1,
      explanation: "L'impesanteur est l'état d'un corps qui ne ressent plus l'effet de la pesanteur, comme les astronautes en orbite."
    },
    {
      id: "q_grav10",
      question: "Pourquoi la mer monte et descend (les marées) ?",
      options: ["À cause des poissons", "À cause de la gravité de la Lune", "À cause de la pluie", "À cause des bateaux"],
      correctAnswer: 1,
      explanation: "La Lune attire l'eau des océans vers elle en passant au-dessus d'eux, ce qui crée le mouvement des marées."
    }
  ]
};
