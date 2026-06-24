import { Course } from "@/app/types/types";

export const solarSystem: Course = {
  id: "solar-system-planets",
  title: "Les 8 Planètes du Système Solaire",
  thumbnailUrl: "/images/solar-system/cover.avif",
  description:
    "Pars à la découverte des 8 planètes du système solaire ! Découvre leurs tailles, leurs lunes, leur gravité, leurs noyaux, leurs particularités et ce que tu ressentirais si tu pouvais voyager dessus.",

  steps: [
    {
      id: "solar-system-introduction",
      title: "1. Notre Système Solaire",
      content:
        "Notre système solaire est composé du Soleil et de huit planètes qui tournent autour de lui grâce à la gravité. Chaque planète suit un chemin appelé orbite. Les planètes les plus proches du Soleil tournent plus vite autour de lui, tandis que les plus éloignées mettent beaucoup plus de temps à faire un tour complet.",
      imageUrl: "/images/solar-system/step1.avif",
    },
    {
      id: "planet-types",
      title: "2. Les Grandes Familles de Planètes",
      content:
        "Toutes les planètes ne se ressemblent pas ! Mercure, Vénus, la Terre et Mars sont des planètes rocheuses : elles possèdent une surface solide. Jupiter et Saturne sont des géantes gazeuses composées surtout de gaz. Uranus et Neptune sont appelées géantes glacées car elles contiennent davantage de glace, de gaz froids et de matériaux gelés.",
      imageUrl: "/images/solar-system/step2.avif",
    },
    {
      id: "planet-structure",
      title: "3. De Quoi Sont Faites les Planètes ?",
      content:
        "Les planètes possèdent souvent différentes couches : un noyau au centre, parfois rocheux ou métallique, puis d'autres couches autour. Sur une planète rocheuse comme la Terre, tu peux marcher sur le sol. Sur Jupiter ou Saturne, impossible : il n'existe pas de vrai sol solide où poser les pieds, car elles sont principalement faites de gaz très comprimés.",
      imageUrl: "/images/solar-system/step3.avif",
    },
    {
      id: "inner-planets",
      title: "4. Mercure et Vénus",
      content:
        "Mercure est la planète la plus proche du Soleil. Elle est petite, rocheuse, possède un énorme noyau métallique et n'a aucune lune. Une année sur Mercure dure seulement 88 jours terrestres ! Vénus est parfois appelée la jumelle de la Terre à cause de sa taille proche, mais elle est extrêmement chaude avec une atmosphère très épaisse. Une année sur Vénus dure environ 225 jours et elle n'a aucune lune.",
      imageUrl: "/images/solar-system/step4.avif",
    },
    {
      id: "earth-mars",
      title: "5. La Terre et Mars",
      content:
        "La Terre est la seule planète connue à abriter la vie. Son noyau métallique aide à produire un champ magnétique qui nous protège. Elle possède une lune et met 365 jours à faire le tour du Soleil. Mars, la planète rouge, possède des volcans géants, de la glace aux pôles et deux petites lunes. Une année martienne dure environ 687 jours.",
      imageUrl: "/images/solar-system/step5.avif",
    },
    {
      id: "gas-giants",
      title: "6. Jupiter et Saturne",
      content:
        "Jupiter est la plus grosse planète du système solaire. C'est une géante gazeuse avec un énorme noyau et des dizaines de lunes. Sa gravité est très forte : si tu pèses 40 kg sur Terre, tu pèserais plus de 90 kg sur Jupiter ! Saturne est célèbre pour ses magnifiques anneaux composés de glace et de roche. Toutes deux tournent autour du Soleil sur des orbites légèrement ovales.",
      imageUrl: "/images/solar-system/step6.avif",
    },
    {
      id: "ice-giants",
      title: "7. Uranus et Neptune",
      content:
        "Uranus et Neptune sont des géantes glacées. Uranus est étrange car elle semble tourner couchée sur le côté ! Neptune est extrêmement froide et possède certains des vents les plus rapides du système solaire. Neptune met environ 165 années terrestres pour faire un tour complet du Soleil.",
      imageUrl: "/images/solar-system/step7.avif",
    },
    {
      id: "gravity-weight",
      title: "8. Ton Poids sur les Planètes",
      content:
        "Ton poids changerait énormément selon la gravité ! Si tu pèses 40 kg sur Terre, tu pèserais environ 15 kg sur la Lune, environ 38 kg sur Mars, presque pareil sur Vénus, mais plus de 100 kg sur Jupiter. Pourtant, ta masse resterait identique : seul le poids change selon la gravité.",
      imageUrl: "/images/solar-system/step8.avif",
    },
    {
      id: "orbits",
      title: "9. Les Orbites des Planètes",
      content:
        "Les planètes ne tournent pas autour du Soleil en cercle parfait : leurs trajectoires ressemblent davantage à de légers ovales appelés ellipses. Plus une planète est proche du Soleil, plus son année est courte. Mercure tourne autour du Soleil en 88 jours alors que Neptune met environ 165 ans !",
      imageUrl: "/images/solar-system/step9.avif",
    },
    {
      id: "life-on-planets",
      title: "10. Peut-on Vivre sur une Autre Planète ?",
      content:
        "Pour l'instant, la Terre est la seule planète connue où la vie existe. Mercure est trop chaude le jour et très froide la nuit, Vénus est brûlante avec une atmosphère dangereuse, Mars est glaciale avec très peu d'air respirable, et les géantes gazeuses comme Jupiter ou Saturne n'ont même pas de sol solide ! Pourtant, les scientifiques cherchent si certaines lunes ou planètes pourraient un jour accueillir des humains grâce à la technologie.",
      imageUrl: "/images/solar-system/step10.avif",
    }
  ],

  quiz: [
    {
      id: "q1",
      question: "Combien de planètes possède notre système solaire ?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2,
      explanation:
        "Notre système solaire possède 8 planètes. Pluton est aujourd'hui classée comme planète naine."
    },
    {
      id: "q2",
      question: "Quel type de planète est la Terre ?",
      options: [
        "Une géante gazeuse",
        "Une planète rocheuse",
        "Une géante glacée",
        "Une étoile"
      ],
      correctAnswer: 1,
      explanation:
        "La Terre fait partie des planètes rocheuses avec Mercure, Vénus et Mars."
    },
    {
      id: "q3",
      question: "Sur quelle planète ne peut-on pas vraiment marcher car elle est surtout faite de gaz ?",
      options: ["Mars", "Terre", "Jupiter", "Mercure"],
      correctAnswer: 2,
      explanation:
        "Jupiter est principalement composée de gaz très comprimés, sans surface solide classique."
    },
    {
      id: "q4",
      question: "Quelle planète est appelée la planète rouge ?",
      options: ["Vénus", "Mars", "Neptune", "Mercure"],
      correctAnswer: 1,
      explanation:
        "Mars est surnommée la planète rouge à cause de la couleur de sa surface."
    },
    {
      id: "q5",
      question: "Quelle planète est célèbre pour ses anneaux ?",
      options: ["Jupiter", "Saturne", "Uranus", "Mercure"],
      correctAnswer: 1,
      explanation:
        "Saturne est connue pour ses grands anneaux de glace et de roche."
    },
    {
      id: "q6",
      question: "Pourquoi ton poids change-t-il selon les planètes ?",
      options: [
        "Parce que ta masse change",
        "Parce que la gravité change",
        "Parce que l'air pousse plus fort",
        "Parce que tu grandis"
      ],
      correctAnswer: 1,
      explanation:
        "Ton poids dépend de la gravité de la planète, mais ta masse reste identique."
    },
    {
      id: "q7",
      question: "Quelle planète semble tourner couchée sur le côté ?",
      options: ["Mars", "Uranus", "Vénus", "Saturne"],
      correctAnswer: 1,
      explanation:
        "Uranus est inclinée presque sur le côté, ce qui la rend très spéciale."
    },
    {
      id: "q8",
      question: "Comment s'appelle le chemin suivi par une planète autour du Soleil ?",
      options: ["Un tunnel", "Une orbite", "Une spirale", "Une route"],
      correctAnswer: 1,
      explanation:
        "Le chemin qu'une planète suit autour du Soleil s'appelle une orbite."
    },
    {
      id: "q9",
      question: "Quelle planète met environ 165 ans à faire le tour du Soleil ?",
      options: ["Neptune", "Mars", "Mercure", "Vénus"],
      correctAnswer: 0,
      explanation:
        "Neptune est très éloignée du Soleil, ce qui rend son année extrêmement longue."
    },
    {
      id: "q10",
      question: "Pourquoi est-il difficile de vivre sur les autres planètes du système solaire ?",
      options: [
        "Parce qu'on ne peux pas y aller",
        "Parce qu'elles ont des conditions dangereuses ou pas d'eau",
        "Parce qu'elles sont toutes sous l'eau",
        "Parce qu'il n'y a pas de lumière du Soleil"
      ],
      correctAnswer: 1,
      explanation:
        "Les autres planètes possèdent souvent des conditions extrêmes : chaleur intense, froid extrême, atmosphère dangereuse ou absence de sol solide comme sur Jupiter et Saturne. Les scientifiques cherchent malgré tout comment rendre certains endroits habitables grâce à la technologie."
    }
  ]
};
