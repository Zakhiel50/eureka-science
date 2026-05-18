import { Course } from "@/app/types/types";

export const physics: Course = {
  id: "physics",
  title: "À la découverte de la Physique",
  thumbnailUrl: "/images/physics/cover.webp",
  description:
    "Découvre la science qui explique comment le monde fonctionne ! Pourquoi les objets tombent ? Comment la lumière voyage-t-elle ? Pourquoi entend-on des sons ? La physique est partout autour de nous.",
  steps: [
    {
      id: "physics-definition",
      title: "1. Qu'est-ce que la physique ?",
      content:
        "La physique est la science qui cherche à comprendre comment fonctionne notre univers. Elle explique pourquoi les objets tombent, bougent, roulent, brillent ou produisent du son. Quand tu lances un ballon, allumes une lampe ou écoutes de la musique, la physique est déjà là !",
      imageUrl: "/images/physics/step1.webp"
    },
    {
      id: "movement",
      title: "2. Le Mouvement",
      content:
        "Un objet est en mouvement lorsqu'il change de position. Une voiture qui roule, un ballon qui vole ou une personne qui court sont des exemples de mouvement. Certains objets vont vite, d'autres lentement, mais tous suivent des lois physiques.",
      imageUrl: "/images/physics/step2.webp"
    },
    {
      id: "forces",
      title: "3. Les Forces",
      content:
        "Une force est une action qui pousse ou tire un objet. Quand tu pousses une balançoire ou tires une porte, tu utilises une force. Les frottements sont aussi une force : ils ralentissent les objets lorsqu'ils glissent sur une surface. Il faut savoir que même l'air exerce des frottements sur les objets. C'est pour celà qu'un ballon ne roule pas indéfiniment.",
      imageUrl: "/images/physics/step3.webp"
    },
    {
      id: "gravity",
      title: "4. La Gravité",
      content:
        "Pourquoi ne flotte-t-on pas dans le ciel ? Grâce à la gravité, nous l'avons vu dans un cours précédent! La gravité est une force invisible qui attire les objets vers le centre de la Terre. C'est elle qui fait tomber les pommes, la pluie ou un ballon quand tu le lâches.",
      imageUrl: "/images/physics/step4.webp"
    },
    {
      id: "energy",
      title: "5. L'Énergie",
      content:
        "L'énergie permet aux choses de fonctionner ou de bouger. Ton corps utilise l'énergie que ton corps extrait des aliments pour courir, les piles donnent de l'énergie aux jouets et le Soleil fournit de la chaleur et de la lumière à notre planète.",
      imageUrl: "/images/physics/step5.webp"
    },
    {
      id: "speed",
      title: "6. La Vitesse",
      content:
        "La vitesse indique si quelque chose va rapidement ou lentement. Une tortue se déplace lentement, alors qu'une fusée voyage très vite. Les scientifiques mesurent souvent la vitesse en kilomètres par heure (km/h).",
      imageUrl: "/images/physics/step6.webp"
    },
    {
      id: "light",
      title: "7. La Lumière",
      content:
        "La lumière nous permet de voir le monde. Le Soleil est une immense source de lumière naturelle. Quand la lumière touche un miroir, elle rebondit : on appelle cela la réflexion. Les arc-en-ciel apparaissent quand la lumière traverse des gouttes d'eau. Sans lumière, nous ne pourrions pas voir les couleurs",
      imageUrl: "/images/physics/step7.webp"
    },
    {
      id: "sound",
      title: "8. Le Son",
      content:
        "Le son est produit par des vibrations. Quand une guitare joue une note ou quand quelqu'un parle, l'air vibre et transporte le son jusqu'à nos oreilles. Sans vibrations et sans air, il n'y aurait aucun bruit. Par exemple, dans l'espace tu ne peux rien entendre rien.",
      imageUrl: "/images/physics/step8.webp"
    },
    {
      id: "electricity",
      title: "9. L'Électricité",
      content:
        "L'électricité alimente de nombreux objets : lampes, consoles, téléphones ou télévision. Elle peut venir de piles, batteries, des centrales électriques ou des éclairs. Attention : l'électricité est très utile mais peut aussi être dangereuse si on ne respecte pas les règles de sécurité.",
      imageUrl: "/images/physics/step9.webp"
    },
    {
      id: "physics-everyday-life",
      title: "10. La Physique dans la Vie Quotidienne",
      content:
        "La physique est partout ! Les voitures utilisent les forces et l'énergie, les médecins utilisent des machines basées sur la physique, les fusées voyagent dans l'espace grâce à elle et même les jeux vidéo utilisent des lois physiques pour rendre les mouvements réalistes.",
      imageUrl: "/images/physics/step10.webp"
    }
  ],

  quiz: [
  {
    id: "q1",
    question: "Que cherche à comprendre la physique ?",
    options: [
      "Comment fonctionne le monde",
      "Seulement les plantes",
      "Uniquement les animaux",
      "Comment cuisiner"
    ],
    correctAnswer: 0,
    explanation:
      "La physique cherche à comprendre comment fonctionne le monde et les phénomènes qui nous entourent."
  },
  {
    id: "q2",
    question: "Qu'est-ce qu'un mouvement ?",
    options: [
      "Quand un objet change de couleur",
      "Quand un objet change de position",
      "Quand un objet devient liquide",
      "Quand un objet disparaît"
    ],
    correctAnswer: 1,
    explanation:
      "Un objet est en mouvement lorsqu'il change de position."
  },
  {
    id: "q3",
    question: "Pourquoi un ballon qui roule finit-il par s'arrêter ?",
    options: [
      "Parce qu'il devient plus lourd",
      "À cause des frottements et de l'air",
      "Parce que la gravité disparaît",
      "Parce qu'il manque de lumière"
    ],
    correctAnswer: 1,
    explanation:
      "Les frottements du sol et même l'air ralentissent les objets jusqu'à les arrêter."
  },
  {
    id: "q4",
    question: "Pourquoi les objets tombent-ils vers le sol ?",
    options: [
      "À cause du vent",
      "À cause de la gravité",
      "À cause du Soleil",
      "À cause des nuages"
    ],
    correctAnswer: 1,
    explanation:
      "La gravité attire les objets vers la Terre."
  },
  {
    id: "q5",
    question: "À quoi sert l'énergie ?",
    options: [
      "À faire fonctionner ou bouger les choses",
      "À arrêter le temps",
      "À rendre invisible",
      "À refroidir le Soleil"
    ],
    correctAnswer: 0,
    explanation:
      "L'énergie permet aux objets et aux êtres vivants de fonctionner et de bouger."
  },
  {
    id: "q6",
    question: "Comment mesure-t-on souvent la vitesse au quotidien ?",
    options: [
      "En kilomètres par heure (km/h)",
      "En litres",
      "En grammes",
      "En décibels"
    ],
    correctAnswer: 0,
    explanation:
      "Dans la vie quotidienne, la vitesse est souvent mesurée en kilomètres par heure (km/h), comme pour les voitures."
  },
  {
    id: "q7",
    question: "Que se passe-t-il quand la lumière touche un miroir ?",
    options: [
      "Elle disparaît",
      "Elle explose",
      "Elle rebondit",
      "Elle devient liquide"
    ],
    correctAnswer: 2,
    explanation:
      "Quand la lumière touche un miroir, elle se réfléchit, c'est-à-dire qu'elle rebondit."
  },
  {
    id: "q8",
    question: "Pourquoi n'entend-on pas de son dans l'espace ?",
    options: [
      "Parce qu'il y fait trop froid",
      "Parce qu'il n'y a pas d'air pour transporter les vibrations",
      "Parce que les astronautes sont trop loin",
      "Parce que le Soleil empêche le son"
    ],
    correctAnswer: 1,
    explanation:
      "Le son a besoin d'un milieu comme l'air pour se propager. Dans l'espace, il n'y a presque pas d'air."
  },
  {
    id: "q9",
    question: "D'où peut venir l'électricité ?",
    options: [
      "Des piles et batteries seulement",
      "Des éclairs seulement",
      "Des piles, batteries, centrales électriques et éclairs",
      "Des arbres"
    ],
    correctAnswer: 2,
    explanation:
      "L'électricité peut avoir plusieurs sources : piles, batteries, centrales électriques ou même les éclairs."
  },
  {
    id: "q10",
    question: "Où peut-on retrouver la physique ?",
    options: [
      "Seulement dans les écoles",
      "Seulement dans les laboratoires",
      "Partout dans la vie quotidienne",
      "Uniquement dans l'espace"
    ],
    correctAnswer: 2,
    explanation:
      "La physique est partout : voitures, sport, médecine, jeux vidéo, lumière, son et bien plus encore."
  }
]
};