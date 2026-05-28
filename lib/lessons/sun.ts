import { Course } from "@/app/types/types";

export const sunCourse: Course = {
  id: "sun",
  title: "À la découverte du Soleil",
  thumbnailUrl: "/images/sun/cover.webp",
  description:
    "Découvre notre étoile géante ! Apprends pourquoi le Soleil brille, chauffe notre planète, provoque des phénomènes incroyables dans l'espace et rend la vie possible sur Terre.",

  steps: [
    {
      id: "sun-definition",
      title: "1. Qu'est-ce que le Soleil ?",
      content: "Le Soleil n'est pas une planète : c'est une étoile ! Comparé à certaines étoiles géantes de l'Univers, le Soleil est considéré comme une étoile de taille moyenne. Pourtant, il reste immense à notre échelle : on pourrait placer environ 1,3 million de Terres à l'intérieur ! Il est composé principalement d'hydrogène et d'hélium et se trouve au centre du système solaire. Sa gravité maintient les planètes autour de lui.",
      imageUrl: "/images/sun/step1.webp"
    },
    {
      id: "sun-energy",
      title: "2. Pourquoi le Soleil Brille-t-il ?",
      content:
        "Le Soleil produit sa lumière et sa chaleur grâce à un phénomène appelé fusion nucléaire. Dans son cœur, de minuscules particules d'hydrogène se mélangent pour créer de l'hélium et libérer une énorme quantité d'énergie. C'est cette énergie qui voyage dans l'espace sous forme de lumière et de chaleur jusqu'à la Terre.",
      imageUrl: "/images/sun/step2.webp"
    },
    {
      id: "sun-layers",
      title: "3. Les Couches du Soleil",
      content:
        "Le Soleil possède plusieurs couches. En son centre se trouve le noyau, l'endroit le plus chaud où se produit la fusion nucléaire. Plus loin se trouve la surface visible appelée photosphère, puis une immense atmosphère très chaude autour du Soleil. Chaque couche possède une température différente.",
      imageUrl: "/images/sun/step3.webp"
    },
    {
      id: "sun-temperature",
      title: "4. Quelle Température Fait-il sur le Soleil ?",
      content:
        "Le Soleil est incroyablement chaud ! À sa surface, il fait environ 5 500°C. Dans son cœur, la température atteint environ 15 millions de degrés Celsius. À cette chaleur extrême, aucun humain ni objet ne pourrait survivre.",
      imageUrl: "/images/sun/step4.webp"
    },
    {
      id: "solar-eruptions",
      title: "5. Les Taches Solaires et les Éruptions",
      content:
        "Le Soleil n'est pas calme ! Il possède parfois des taches solaires et peut produire d'immenses explosions appelées éruptions solaires. Ces explosions projettent de l'énergie et des particules dans l'espace. Elles peuvent parfois perturber des satellites, Internet, le GPS ou certaines communications sur Terre.",
      imageUrl: "/images/sun/step5.webp"
    },
    {
      id: "solar-wind",
      title: "6. Le Vent Solaire",
      content:
        "Le Soleil envoie aussi un étrange 'vent' dans l'espace appelé vent solaire. Ce n'est pas du vent comme sur Terre : ce sont des particules minuscules projetées à très grande vitesse dans toutes les directions. Ce vent peut voyager à des millions de kilomètres dans l'espace.",
      imageUrl: "/images/sun/step6.webp"
    },
    {
      id: "auroras",
      title: "7. Les Aurores Polaires",
      content:
        "Quand certaines particules du vent solaire rencontrent le champ magnétique de la Terre, elles peuvent créer de magnifiques lumières colorées dans le ciel : les aurores polaires. On peut surtout les observer près des pôles, comme en Islande, au Canada ou en Norvège.",
      imageUrl: "/images/sun/step7.webp"
    },
    {
      id: "sun-essential",
      title: "8. Pourquoi le Soleil est-il si Important ?",
      content:
        "Sans le Soleil, la Terre serait glacée, sombre et inhabitable. Le Soleil réchauffe notre planète, éclaire nos journées et aide les plantes à pousser grâce à la photosynthèse. Même les vents et la météo sont influencés par la chaleur du Soleil.",
      imageUrl: "/images/sun/step8.webp"
    },
    {
      id: "sun-future",
      title: "9. Le Futur du Soleil",
      content:
        "Le Soleil ne brillera pas toujours de la même façon. Dans plusieurs milliards d'années, il deviendra beaucoup plus grand et plus chaud : on appelle cela une géante rouge. Plus tard encore, il se refroidira lentement après avoir perdu une partie de sa matière.",
      imageUrl: "/images/sun/step9.webp"
    },
    {
      id: "sun-records",
      title: "10. Les Records du Soleil",
      content: "Le Soleil est âgé d'environ 4,6 milliards d'années ! Sa lumière met environ 8 minutes à atteindre la Terre. Même s'il est considéré comme une étoile de taille moyenne parmi les étoiles de l'Univers, il reste immense comparé aux planètes et représente plus de 99 % de la masse du système solaire.",
      imageUrl: "/images/sun/step10.webp"
    }
  ],

  quiz: [
    {
      id: "q1",
      question: "Le Soleil est...",
      options: [
        "Une planète",
        "Une étoile",
        "Une lune",
        "Une comète"
      ],
      correctAnswer: 1,
      explanation:
        "Le Soleil est une étoile située au centre de notre système solaire."
    },
    {
      id: "q2",
      question: "Comment le Soleil produit-il sa lumière et sa chaleur ?",
      options: [
        "Grâce au feu",
        "Grâce à la fusion nucléaire",
        "Grâce au vent",
        "Grâce aux océans"
      ],
      correctAnswer: 1,
      explanation:
        "Le Soleil produit son énergie grâce à la fusion nucléaire dans son cœur."
    },
    {
      id: "q3",
      question: "Quelle est environ la température à la surface du Soleil ?",
      options: [
        "100°C",
        "550°C",
        "5 500°C",
        "50 000°C"
      ],
      correctAnswer: 2,
      explanation:
        "La surface du Soleil atteint environ 5 500°C."
    },
    {
      id: "q4",
      question: "Que peut produire le Soleil ?",
      options: [
        "Des éruptions solaires",
        "Des vagues géantes",
        "Des volcans",
        "Des tremblements de Terre"
      ],
      correctAnswer: 0,
      explanation:
        "Le Soleil peut produire de puissantes éruptions solaires."
    },
    {
      id: "q5",
      question: "Qu'est-ce que le vent solaire ?",
      options: [
        "Le vent sur Terre",
        "Des particules envoyées dans l'espace",
        "Un nuage géant",
        "Une tempête sur Mars"
      ],
      correctAnswer: 1,
      explanation:
        "Le vent solaire est composé de minuscules particules envoyées dans l'espace."
    },
    {
      id: "q6",
      question: "Que peut créer le vent solaire près de la Terre ?",
      options: [
        "Des volcans",
        "Des aurores polaires",
        "Des tornades",
        "Des tsunamis"
      ],
      correctAnswer: 1,
      explanation:
        "Le vent solaire peut provoquer les magnifiques aurores polaires."
    },
    {
      id: "q7",
      question: "Pourquoi le Soleil est-il indispensable ?",
      options: [
        "Il éclaire et chauffe la Terre",
        "Il fabrique des montagnes",
        "Il remplace les océans",
        "Il crée les animaux"
      ],
      correctAnswer: 0,
      explanation:
        "Sans le Soleil, la Terre serait froide, sombre et sans vie."
    },
    {
      id: "q8",
      question: "Combien de temps la lumière du Soleil met-elle pour arriver sur Terre ?",
      options: [
        "8 secondes",
        "8 minutes",
        "8 heures",
        "8 jours"
      ],
      correctAnswer: 1,
      explanation:
        "La lumière du Soleil met environ 8 minutes pour atteindre la Terre."
    },
    {
      id: "q9",
      question: "Que deviendra le Soleil dans plusieurs milliards d'années ?",
      options: [
        "Une géante rouge",
        "Une planète",
        "Une lune",
        "Un océan"
      ],
      correctAnswer: 0,
      explanation:
        "Le Soleil deviendra une géante rouge lorsqu'il vieillira."
    },
    {
      id: "q10",
      question: "Quel est l'âge approximatif du Soleil ?",
      options: [
        "4,6 millions d'années",
        "460 millions d'années",
        "4,6 milliards d'années",
        "46 milliards d'années"
      ],
      correctAnswer: 2,
      explanation:
        "Le Soleil a environ 4,6 milliards d'années."
    }
  ]
};