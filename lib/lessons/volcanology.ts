import { Course } from "./water-cycle";

export const volcanologyCourse: Course = {
  id: "volcanologie",
  title: "Les Secrets des Volcans",
  description: "Explore les entrailles de la Terre, du magma brûlant aux explosions spectaculaires !",
  thumbnailUrl: "/images/volcanology/cover.jpg",
  steps: [
    {
      id: "magma-origin",
      title: "1. L'Origine : La Péridotite",
      content: "Tout commence sous nos pieds, dans le manteau terrestre. Là se trouve une roche sombre appelée la Péridotite. Sous l'effet d'une chaleur intense et de la pression, cette roche commence à fondre partiellement pour se transformer en magma liquide.",
      imageUrl: "/images/volcanology/step1.jpg"
    },
    {
      id: "magma-rise",
      title: "2. La Montée du Magma",
      content: "Le magma est plus léger que les roches solides qui l'entourent. Il remonte donc vers la surface, comme une bulle d'air dans l'eau, et s'accumule dans un immense réservoir : la chambre magmatique.",
      imageUrl: "/images/volcanology/step2.jpg"
    },
    {
      id: "effusive-volcano",
      title: "3. Le Volcan Effusif (Volcan Rouge)",
      content: "Dans un volcan effusif, le magma est très fluide (liquide). Il s'écoule facilement le long des pentes pour former de longues rivières de lave. On les appelle 'volcans rouges' à cause de la couleur de la lave incandescente.",
      imageUrl: "/images/volcanology/step3.jpg"
    },
    {
      id: "basalt-rock",
      title: "4. La Pierre Effusive : Le Basalte",
      content: "Quand la lave d'un volcan effusif refroidit, elle durcit et devient une roche noire et dense : le Basalte. C'est la roche la plus courante sur les fonds océaniques et dans des endroits comme Hawaï.",
      imageUrl: "/images/volcanology/step4.jpg"
    },
    {
      id: "explosive-volcano",
      title: "5. Le Volcan Explosif (Volcan Gris)",
      content: "Ici, le magma est très visqueux (épais). Les gaz ont du mal à s'échapper et la pression monte, monte... jusqu'à ce que tout explose ! Ces volcans rejettent d'immenses nuages de cendres et de fumée, d'où leur nom de 'volcans gris'.",
      imageUrl: "/images/volcanology/step5.jpg"
    },
    {
      id: "andesite-rock",
      title: "6. La Pierre Explosive : L'Andésite",
      content: "Le magma épais des volcans explosifs se transforme en une roche appelée l'Andésite. Elle est souvent de couleur grise ou brune et contient de petits cristaux visibles.",
      imageUrl: "/images/volcanology/step6.jpg"
    },
    {
      id: "hybrid-volcano",
      title: "7. Le Volcan Hybride",
      content: "Certains volcans sont capricieux ! Ils peuvent changer de comportement au cours de leur vie, étant tantôt calmes et effusifs, tantôt violents et explosifs. On les appelle des volcans hybrides.",
      imageUrl: "/images/volcanology/step7.jpg"
    },
    {
      id: "volcano-wake-up",
      title: "8. Le Réveil du Géant",
      content: "Qu'est-ce qui réveille un volcan ? C'est l'arrivée de 'nouveau' magma frais venant des profondeurs dans la chambre magmatique. Cela fait monter la pression, comme dans une cocotte-minute, jusqu'à ce que la croûte terrestre cède.",
      imageUrl: "/images/volcanology/step8.jpg"
    },
    {
      id: "tectonic-plates",
      title: "9. La Terre en Mouvement",
      content: "La plupart des volcans se trouvent à la limite des plaques tectoniques (les morceaux qui forment la surface de la Terre). Quand deux plaques s'écartent ou se rentrent dedans, cela crée des passages pour le magma.",
      imageUrl: "/images/volcanology/step9.jpg"
    },
    {
      id: "life-after-eruption",
      title: "10. Le Cycle de la Terre",
      content: "Même s'ils sont dangereux, les volcans sont essentiels. Les cendres volcaniques rendent le sol extrêmement fertile pour les plantes, et les volcans ont aidé à créer l'atmosphère et l'eau sur Terre il y a des milliards d'années !",
      imageUrl: "/images/volcanology/step10.jpg"
    }
  ],
  quiz: [
    {
      id: "q1",
      question: "Quelle roche du manteau fond pour créer le magma ?",
      options: ["Le Granit", "La Péridotite", "Le Calcaire", "Le Sable"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Comment appelle-t-on un volcan dont la lave s'écoule facilement ?",
      options: ["Explosif", "Effusif", "Éteint", "Dormant"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Quelle est la roche noire typique des volcans effusifs ?",
      options: ["L'Andésite", "Le Basalte", "Le Marbre", "L'Ardoise"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "Pourquoi appelle-t-on les volcans explosifs des 'volcans gris' ?",
      options: ["À cause de la lave rouge", "À cause des nuages de cendres", "Parce qu'ils sont vieux", "Parce qu'ils dorment"],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Quelle roche se forme après l'éruption d'un volcan explosif ?",
      options: ["Le Basalte", "L'Andésite", "Le Diamant", "L'Or"],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Où le magma attend-il avant de sortir ?",
      options: ["Dans un frigo", "Dans la chambre magmatique", "Dans les nuages", "Dans l'océan"],
      correctAnswer: 1
    },
    {
      id: "q7",
      question: "Quel est le nom d'un volcan qui change de type d'éruption ?",
      options: ["Un volcan mixte", "Un volcan hybride", "Un volcan transformeur", "Un volcan bizarre"],
      correctAnswer: 1
    },
    {
      id: "q8",
      question: "Qu'est-ce qui provoque principalement le réveil d'un volcan ?",
      options: ["Le vent", "L'arrivée de nouveau magma frais", "La pluie", "Le bruit"],
      correctAnswer: 1
    },
    {
      id: "q9",
      question: "Où trouve-t-on la majorité des volcans ?",
      options: ["Au milieu des pays", "À la limite des plaques tectoniques", "Sur la Lune uniquement", "Dans les déserts"],
      correctAnswer: 1
    },
    {
      id: "q10",
      question: "Quel est l'avantage des volcans pour la nature ?",
      options: ["Ils font du bruit", "Ils rendent le sol fertile", "Ils chauffent les maisons", "Ils attirent les touristes"],
      correctAnswer: 1
    }
  ]
};
