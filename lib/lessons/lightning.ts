import { Course } from "@/app/types/types";

export const lightning: Course = {
  id: "lightning",
  title: "La foudre, entre lumière et son",
  description: "Découvre la puissance de la foudre",
  thumbnailUrl: "/images/lightning/cover.jpg",
  steps: [
    {
      id: "cumulonimbus",
      title: "1. Le Cumulonimbus, l'usine à orages",
      content: "Tout commence avec ce nuage géant, le Cumulonimbus. Il monte jusqu'à 12 km d'altitude, là où l'air chaud rencontre le froid glacial.",
      imageUrl: "/images/lightning/step1.jpg"
    },
    {
      id: "lightMachine",
      title: "2. La machine à étincelles",
      content: "À l'intérieur, les cristaux de glace et les gouttes d'eau s'entrechoquent violemment, créant de l'électricité statique : le haut du nuage devient positif (+) et le bas négatif (-).",
      imageUrl: "/images/lightning/step2.jpg"
    },
    {
      id: "attraction",
      title: "3. L'attraction du sol",
      content: "Le bas du nuage attire les charges positives du sol qui remontent dans les arbres, les bâtiments et même les personnes. C'est pour celà que lorsqu'il y a de l'orage, il faut se mettre à l'abri et si ce n'est pas possible, il ne faut pas se trouver dans une zone dégagé, sinon tu attire la foudre.",
      imageUrl: "/images/lightning/step3.jpg"
    },
    {
      id: "hiddenTrace",
      title: "4. Le traceur invisible",
      content: "Le nuage envoie une décharge invisible vers le bas par petits bonds, cherchant le chemin le plus facile vers un élément ayant une charge positive au sol. La foudre étant chargé par le pôle négatif est attiré par les pôles positif.",
      imageUrl: "/images/lightning/step4.jpg"
    },
    {
      id: "XploseContact",
      title: "5. Le contact explosif.",
      content: "Quand le traceur du nuage rencontre celui qui monte du sol, le circuit se ferme et l'éclair jaillit à une vitesse folle en suivant cette ligne invisible qu'a crée le traceur.",
      imageUrl: "/images/lightning/step5.jpg"
    },
    {
      id: "plasma",
      title: "6. Le Plasma, 5 fois plus chaud que le Soleil",
      content: "L'électricité transforme l'air en un gaz brûlant (30 000°C) qui brille intensément : c'est le plasma. Pour te donner une idée de la chaleur sâche qu'un élair est 5 fois plus chaud que le soleil.",
      imageUrl: "/images/lightning/step6.jpg"
    },
    {
      id: "lightningOnde",
      title: "7. Le Tonnerre, l'onde de choc",
      content: "La chaleur intense fait exploser l'air autour de l'éclair, créant une onde de choc sonore que nous entendons sous forme de grondement. Cette onde de choc fait parcourir le son à 340 mètres par seconde, soit la vitesse nécessaire pour casser le mur du son, ce qui crée des tremblements.",
      imageUrl: "/images/lightning/step7.jpg"
    },
    {
      id: "distanceCalc",
      title: "8. Calculer la distance.",
      content: "La lumière voyage plus vite que le son. compte les secondes entre l'éclair et le bruit et divise ensuite par 3 pour savoir à combien de kilomètres est l'orage. C'est trés utile pour savoir si l'orage se rapproche ou s'éloigne de toi.",
      imageUrl: "/images/lightning/step8.jpg"
    },
    {
      id: "lightForms",
      title: "9. Les formes étranges d'un éclair.",
      content: "L'éclair peux avoir différentes forme. il y a l'intra-nuage, il est caché dans les nuages, la longue racine de foudre qui touche le sol et une forme plus rare appelé le feu de Saint-Elme. c'est une lueur bleue sur les pointes de l'éclair.",
      imageUrl: "/images/lightning/step9.jpg"
    },
    {
      id: "faradayCage",
      title: "10. La Cage de Faraday.",
      content: "Pourquoi il ne se passe rien si un éclair tombe sur un avion ? Et bien c'est ce que l'on appel un cage de Faraday. Pour comprendre la cage de Faraday, il faut se rappeler que le métal adore l'électricité. Les métaux sont remplis d'électrons libres qui ne demandent qu'à bouger. Quand la foudre (ou n'importe quelle décharge électrique) touche un objet en métal creux, les électrons se précipitent à la surface. l'électricité est paresseuse, elle cherche toujours le chemin le plus facile pour sortir d'un objet. Vois la cage de Faraday comme un bouclien anti éléctricité.",
      imageUrl: "/images/lightning/step10.jpg"
    }
  ],
  quiz: [
      {
        "id": "q1",
        "question": "Quel nuage est une 'usine à électricité' ?",
        "options": ["Cumulus", "Stratus", "Cumulonimbus", "Cirrus"],
        "correctAnswer": 2,
        "explanation": "Le Cumulonimbus est le seul nuage assez haut pour provoquer des frottements de glace et créer d'énormes charges électriques."
      },
      {
        "id": "q2",
        "question": "Qu'est-ce qui crée l'électricité dans le nuage ?",
        "options": ["Le vent", "Les chocs entre glace et eau", "Le soleil", "Les avions"],
        "correctAnswer": 1,
        "explanation": "C'est la friction (frottement) entre les cristaux de glace et les gouttes d'eau qui arrache les électrons et crée l'électricité statique."
      },
      {
        "id": "q3",
        "question": "Où sont les charges négatives dans le nuage ?",
        "options": ["En haut", "Au milieu", "À la base (en bas)", "Partout"],
        "correctAnswer": 2,
        "explanation": "Les particules les plus lourdes chargées négativement tombent vers le bas du nuage, créant une zone négative face au sol."
      },
      {
        "id": "q4",
        "question": "Comment appelle-t-on le chemin invisible qui descend ?",
        "options": ["Le traceur", "Le sprinter", "Le laser", "Le guide"],
        "correctAnswer": 0,
        "explanation": "Le traceur descend par petits bonds invisibles pour trouver le chemin le plus conducteur vers la terre."
      },
      {
        "id": "q5",
        "question": "Quel est l'état de l'air chauffé à 30 000°C ?",
        "options": ["Liquide", "Gaz", "Plasma", "Solide"],
        "correctAnswer": 2,
        "explanation": "À cette température extrême, les atomes perdent leurs électrons et le gaz devient du plasma, un état qui émet une lumière intense."
      },
      {
        "id": "q6",
        "question": "Pourquoi le tonnerre fait-il du bruit ?",
        "options": ["Nuages qui cognent", "Air qui explose", "Pluie forte", "Électrons qui crient"],
        "correctAnswer": 1,
        "explanation": "La chaleur brutale dilate l'air si vite qu'il se produit une explosion sonore appelée onde de choc."
      },
      {
        "id": "q7",
        "question": "Si on compte 9 secondes, l'orage est à...",
        "options": ["1 km", "3 km", "9 km", "27 km"],
        "correctAnswer": 1,
        "explanation": "Le son voyageant à 340 m/s, il parcourt 1 km en 3 secondes. 9 secondes correspondent donc à 3 kilomètres."
      },
      {
        "id": "q8",
        "question": "Comment appelle-t-on l'éclair caché dans le nuage ?",
        "options": ["Coup de foudre", "Intra-nuage", "Boule de feu", "Lueur"],
        "correctAnswer": 1,
        "explanation": "L'éclair 'intra-nuage' se produit à l'intérieur d'un seul nuage, entre ses zones positives et négatives."
      },
      {
        "id": "q9",
        "question": "Pourquoi la voiture nous protège-t-elle ?",
        "options": ["Pneus caoutchouc", "Carrosserie métallique", "Vitesse", "Autoradio"],
        "correctAnswer": 1,
        "explanation": "La carrosserie en métal agit comme une Cage de Faraday : elle guide l'électricité sur sa surface extérieure vers le sol sans toucher l'intérieur."
      },
      {
        "id": "q10",
        "question": "Pourquoi voit-on l'éclair avant d'entendre le tonnerre ?",
        "options": ["Le tonnerre est timide", "La lumière va beaucoup plus vite que le son", "L'éclair prévient le tonnerre", "Le son ne voyage pas dans l'air"],
        "correctAnswer": 1,
        "explanation": "La lumière voyage à 300 000 km/s alors que le son ne fait que 340 mètres par seconde. C'est pour cela qu'il y a un décalage."
      }
    ]
};
