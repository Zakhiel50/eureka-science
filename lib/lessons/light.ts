import { Course } from "@/app/types/types";

export const lightCourse: Course = {
  id: "light",
  title: "À la découverte de la Lumière",
  thumbnailUrl: "/images/light/cover.avif",
  description:
    "Découvre le phénomène qui permet de voir le monde ! Comprends ce qu'est la lumière, comment elle voyage, comment nos yeux la perçoivent et pourquoi un simple rayon peut révéler les couleurs de l'Univers.",
  steps: [
    {
      id: "light-definition",
      title: "1. Qu'est-ce que la lumière ?",
      content:
        "La lumière est une forme d'énergie qui se déplace sous forme d'ondes électromagnétiques. Elle peut voyager dans le vide, ce qui permet à la lumière du Soleil et des étoiles d'arriver jusqu'à nous. Sans lumière, nous ne pourrions pas voir le monde qui nous entoure.",
      imageUrl: "/images/light/step1.avif"
    },
    {
      id: "light-speed",
      title: "2. La Vitesse de la Lumière",
      content:
        "La lumière est l'une des choses les plus rapides connues dans l'Univers. Elle voyage à environ 300 000 kilomètres par seconde. Cela signifie qu'elle peut faire presque 8 fois le tour de la Terre en seulement une seconde !",
      imageUrl: "/images/light/step2.avif"
    },
    {
      id: "light-sources",
      title: "3. Les Sources de Lumière",
      content:
        "Certaines sources produisent leur propre lumière : le Soleil, les étoiles, une ampoule ou une flamme. D'autres objets ne produisent pas de lumière mais la renvoient, comme la Lune ou les objets éclairés autour de nous.",
      imageUrl: "/images/light/step3.avif"
    },
    {
      id: "eye-vision",
      title: "4. Comment nos Yeux Voient la Lumière",
      content:
        "La lumière entre dans nos yeux puis arrive jusqu'à la rétine, une fine couche située au fond de l'œil. La rétine contient des cellules spéciales appelées photorécepteurs qui captent la lumière : certaines détectent surtout les couleurs et d'autres aident à voir dans l'obscurité. Ces informations sont ensuite envoyées au cerveau qui les transforme en images. Ce n'est donc pas seulement l'œil qui voit : c'est le travail entre l'œil et le cerveau.",
      imageUrl: "/images/light/step4.avif"
    },
    {
      id: "light-spectrum",
      title: "5. Le Spectre de la Lumière",
      content:
        "La lumière visible n'est qu'une petite partie de toutes les lumières qui existent. L'ensemble forme le spectre électromagnétique. Il contient aussi des rayons invisibles comme les infrarouges, les ultraviolets, les rayons X ou les ondes radio.",
      imageUrl: "/images/light/step5.avif"
    },
    {
      id: "colors",
      title: "6. Pourquoi Existe-t-il des Couleurs ?",
      content:
        "La lumière blanche du Soleil semble simple, mais elle contient toutes les couleurs visibles. Chaque couleur correspond à une longueur d'onde différente. Quand la lumière est séparée, comme avec un arc-en-ciel ou un prisme, on peut observer toutes ces couleurs.",
      imageUrl: "/images/light/step6.avif"
    },
    {
      id: "reflection",
      title: "7. La Réflexion de la Lumière",
      content:
        "Quand la lumière touche une surface, elle peut rebondir : c'est la réflexion. C'est grâce à ce phénomène que nous pouvons voir notre reflet dans un miroir ou observer les objets autour de nous.",
      imageUrl: "/images/light/step7.avif"
    },
    {
      id: "refraction",
      title: "8. Quand la Lumière Change de Direction",
      content:
        "Lorsque la lumière traverse certains matériaux comme l'eau ou le verre, elle peut changer légèrement de direction : c'est la réfraction. C'est ce phénomène qui peut donner l'impression qu'un objet dans l'eau est déplacé.",
      imageUrl: "/images/light/step8.avif"
    },
    {
      id: "light-and-universe",
      title: "9. La Lumière pour Explorer l'Univers",
      content:
        "Les scientifiques utilisent la lumière pour étudier l'espace. En analysant la lumière des étoiles et des galaxies, ils peuvent connaître leur température, leur composition et même savoir si elles s'éloignent ou se rapprochent de nous.",
      imageUrl: "/images/light/step9.avif"
    },
    {
      id: "light-future",
      title: "10. Les Technologies Grâce à la Lumière",
      content:
        "La lumière est utilisée dans de nombreuses technologies : fibres optiques pour Internet, lasers en médecine, panneaux solaires pour produire de l'électricité ou encore télescopes pour observer les galaxies lointaines. Comprendre la lumière permet de créer des inventions incroyables.",
      imageUrl: "/images/light/step10.avif"
    }
  ],
  quiz: [
    {
      id: "q1",
      question: "Qu'est-ce que la lumière principalement ?",
      options: [
        "Une matière invisible qui remplit l'espace",
        "Une forme d'énergie qui se déplace sous forme d'ondes",
        "Un gaz produit uniquement par le Soleil",
        "Une couleur que fabriquent nos yeux"
      ],
      correctAnswer: 1,
      explanation:
        "La lumière est une forme d'énergie qui voyage sous forme d'ondes électromagnétiques."
    },
    {
      id: "q2",
      question: "Pourquoi pouvons-nous voir un objet qui ne produit pas de lumière ?",
      options: [
        "Parce qu'il renvoie une partie de la lumière reçue",
        "Parce qu'il fabrique une lumière invisible",
        "Parce que nos yeux créent les couleurs",
        "Parce que tous les objets brillent naturellement"
      ],
      correctAnswer: 0,
      explanation:
        "La plupart des objets sont visibles car ils réfléchissent la lumière vers nos yeux."
    },
    {
      id: "q3",
      question: "À quelle vitesse environ voyage la lumière ?",
      options: [
        "300 kilomètres par heure",
        "3000 kilomètres par seconde",
        "300 000 kilomètres par seconde",
        "La vitesse du son"
      ],
      correctAnswer: 2,
      explanation:
        "La lumière voyage environ à 300 000 km/s dans le vide."
    },
    {
      id: "q4",
      question: "Quelle partie de l'œil reçoit la lumière ?",
      options: [
        "La rétine",
        "Le cœur",
        "Le tympan",
        "Les muscles"
      ],
      correctAnswer: 0,
      explanation:
        "La rétine contient des cellules qui captent la lumière et envoient des informations au cerveau."
    },
    {
      id: "q5",
      question: "La lumière visible représente...",
      options: [
        "Toute la lumière existante",
        "Une petite partie du spectre électromagnétique",
        "Uniquement la lumière du Soleil",
        "Une énergie créée par les plantes"
      ],
      correctAnswer: 1,
      explanation:
        "La lumière visible n'est qu'une petite partie du spectre électromagnétique."
    },
    {
      id: "q6",
      question:
        "Quand un rayon de lumière blanche traverse un prisme ou des gouttes d'eau, pourquoi peut-il créer un arc-en-ciel ?",
      options: [
        "Parce que la lumière blanche est composée de plusieurs couleurs qui se séparent",
        "Parce que le prisme fabrique de nouvelles couleurs",
        "Parce que l'eau transforme la lumière en énergie colorée",
        "Parce que le Soleil change de couleur pendant la journée"
      ],
      correctAnswer: 0,
      explanation:
        "La lumière blanche du Soleil contient plusieurs couleurs mélangées. Un prisme ou des gouttes d'eau peuvent les séparer, ce qui révèle les couleurs visibles de l'arc-en-ciel."
    },
    {
      id: "q7",
      question: "Que se passe-t-il lors d'une réflexion de la lumière ?",
      options: [
        "La lumière disparaît",
        "La lumière rebondit sur une surface",
        "La lumière devient du son",
        "La lumière ralentit définitivement"
      ],
      correctAnswer: 1,
      explanation:
        "La réflexion correspond au rebond de la lumière sur une surface."
    },
    {
      id: "q8",
      question: "Pourquoi la lumière change-t-elle de direction dans l'eau ?",
      options: [
        "À cause de la réfraction",
        "Parce qu'elle devient plus lourde",
        "Parce qu'elle disparaît",
        "Parce que l'eau fabrique de la lumière"
      ],
      correctAnswer: 0,
      explanation:
        "La réfraction apparaît quand la lumière traverse un matériau différent."
    },
    {
      id: "q9",
      question: "Comment les astronomes étudient-ils les étoiles ?",
      options: [
        "Grâce à la lumière qu'elles émettent",
        "En envoyant uniquement des sons dans l'espace",
        "En touchant directement les étoiles",
        "En regardant seulement leur taille"
      ],
      correctAnswer: 0,
      explanation:
        "La lumière transporte des informations sur les objets très éloignés."
    },
    {
      id: "q10",
      question: "Quelle technologie utilise la lumière ?",
      options: [
        "La fibre optique",
        "Un moteur à essence uniquement",
        "Une boussole classique",
        "Un aimant permanent uniquement"
      ],
      correctAnswer: 0,
      explanation:
        "La fibre optique utilise la lumière pour transporter des informations très rapidement."
    }
  ]
};