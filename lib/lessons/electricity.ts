import { Course } from "@/app/types/types";

export const electricity: Course = {
  id: "electricity",
  title: "À la découverte de l'Électricité",
  thumbnailUrl: "/images/electricity/cover.avif",
  mobileThumbnailUrl: "/images/electricity/m-cover.avif",
  description:
    "Découvre l'incroyable énergie qui alimente notre monde ! Comprends comment fonctionne l'électricité, comment elle voyage, comment on la produit et pourquoi il faut toujours la manipuler avec prudence.",

  steps: [
    {
      id: "electricity-definition",
      title: "1. Qu'est-ce que l'électricité ?",
      content:
        "L'électricité est une forme d'énergie liée au déplacement de minuscules particules appelées électrons. Elle permet de faire fonctionner des lampes, des téléphones, des consoles, des ordinateurs et même certains véhicules. Même si on ne la voit pas directement, on peut observer ses effets partout autour de nous.",
      imageUrl: "/images/electricity/step1.avif",
      mobileImageUrl: "/images/electricity/m-step1.avif"
    },
    {
      id: "electricity-nature",
      title: "2. L'Électricité dans la Nature",
      content:
        "Tu as déjà découvert les éclairs dans un autre cours ! Les éclairs sont une forme très puissante d'électricité naturelle. Il existe aussi l'électricité statique : par exemple quand un ballon frotté sur les cheveux les fait se dresser ou quand une poignée métallique te donne un petit choc.",
      imageUrl: "/images/electricity/step2.avif",
      mobileImageUrl: "/images/electricity/m-step2.avif"
    },
    {
      id: "electric-current",
      title: "3. Le Courant Électrique",
      content:
        "L'électricité circule grâce au courant électrique. Imagine un peu comme une rivière invisible qui voyage dans des fils électriques. Lorsque les électrons se déplacent dans un circuit, ils transportent de l'énergie qui peut allumer une ampoule ou faire fonctionner un appareil électrique.",
      imageUrl: "/images/electricity/step3.avif",
      mobileImageUrl: "/images/electricity/m-step3.avif"
    },
    {
      id: "electric-circuit",
      title: "4. Les Circuits Électriques",
      content:
        "Un circuit électrique est un chemin fermé qui permet à l'électricité de circuler. Une pile, des fils et une ampoule peuvent former un circuit simple. Si le chemin est coupé, par exemple avec un interrupteur éteint, l'électricité ne peut plus circuler : on appelle cela un circuit ouvert. Pour mieux comprendre place des deux index côte à côte sans se toucher en imaginant que c'est un interrupteur et circuit électrique, c'est un circuit ouvert (le chemin pour l'électricité est coupé). Maintenant fait les toucher du bout de tes doigts, c'est un circuit fermé, l'électricité peux passer.",
      imageUrl: "/images/electricity/step4.avif",
      mobileImageUrl: "/images/electricity/m-step4.avif"
    },
    {
      id: "electric-production",
      title: "5. Comment Produit-on l'Électricité ?",
      content:
        "L'électricité peut être produite de différentes façons : grâce au vent avec les éoliennes, au Soleil avec les panneaux solaires, à l'eau avec les barrages ou encore dans des centrales électriques. Certains pays utilisent aussi l'énergie nucléaire pour produire beaucoup d'électricité.",
      imageUrl: "/images/electricity/step5.avif",
      mobileImageUrl: "/images/electricity/m-step5.avif"
    },
    {
      id: "batteries",
      title: "6. Les Batteries et les Piles",
      content:
        "Les piles et batteries stockent de l'énergie électrique pour pouvoir l'utiliser plus tard. Elles permettent d'alimenter des objets comme les télécommandes, les jouets, les téléphones, les voitures électriques ou les lampes torches.",
      imageUrl: "/images/electricity/step6.avif",
      mobileImageUrl: "/images/electricity/m-step6.avif"
    },
    {
      id: "home-electricity",
      title: "7. L'Électricité dans la Maison",
      content:
        "Dans une maison, l'électricité alimente les lampes, la télévision, le réfrigérateur, Internet, les consoles ou encore le micro-ondes. Sans électricité, une grande partie des objets modernes ne fonctionneraient plus.",
      imageUrl: "/images/electricity/step7.avif",
      mobileImageUrl: "/images/electricity/m-step7.avif"
    },
    {
      id: "electricity-danger",
      title: "8. Les Dangers de l'Électricité",
      content:
        "L'électricité est très utile, mais elle peut aussi être dangereuse. Il ne faut jamais mettre les doigts dans une prise, toucher un appareil électrique avec les mains mouillées ou mélanger l'eau et l'électricité. Une forte décharge électrique peut blesser gravement une personne.",
      imageUrl: "/images/electricity/step8.avif",
      mobileImageUrl: "/images/electricity/m-step8.avif"
    },
    {
      id: "electricity-technology",
      title: "9. L'Électricité et la Technologie",
      content:
        "L'électricité aide les médecins avec certaines machines médicales, permet aux robots de fonctionner, recharge les téléphones et alimente des voitures électriques. Elle est indispensable à de nombreuses technologies modernes. Des technologies existe également pour brouiller, désactiver. ou détruire les objets éléctrique, on appelle ceci l'IEM (Impulsion Électro-Magnétique).",
      imageUrl: "/images/electricity/step9.avif",
      mobileImageUrl: "/images/electricity/m-step9.avif"
    },
    {
      id: "electricity-future",
      title: "10. Le Futur de l'Électricité",
      content:
        "Les scientifiques cherchent à produire une électricité plus propre et à créer de meilleures batteries pour moins polluer. Peut-être qu'un jour, les villes, voitures et maisons fonctionneront presque entièrement avec des énergies renouvelables. Les scientifique cherche à maîtriser la fusion nucléaire pour créer plus d'énergie tout en réduisant les déchets nucléaires",
      imageUrl: "/images/electricity/step10.avif",
      mobileImageUrl: "/images/electricity/m-step10.avif"
    }
  ],

  quiz: [
    {
      id: "q1",
      question: "Qu'est-ce que l'électricité ?",
      options: [
        "Une matière solide",
        "Une forme d'énergie",
        "Du fil en caoutchouc",
        "Un gaz invisible"
      ],
      correctAnswer: 1,
      explanation:
        "L'électricité est une forme d'énergie liée au déplacement de minuscules particules appelées électrons."
    },
    {
      id: "q2",
      question: "Quel phénomène naturel est une forme d'électricité ?",
      options: [
        "Le vent",
        "Les éclairs",
        "La pluie",
        "Les nuages"
      ],
      correctAnswer: 1,
      explanation:
        "Les éclairs sont une forme naturelle très puissante d'électricité."
    },
    {
      id: "q3",
      question: "Qu'est-ce qu'un courant électrique ?",
      options: [
        "Le déplacement de l'électricité dans un circuit",
        "Une lumière très forte",
        "Un bruit électrique",
        "Du fil en caoutchouc"
      ],
      correctAnswer: 0,
      explanation:
        "Le courant électrique correspond au déplacement des électrons qui transportent de l'énergie."
    },
    {
      id: "q4",
      question: "Quand un circuit électrique est-il fermé ?",
      options: [
        "Quand le chemin est coupé",
        "Quand l'électricité peut circuler",
        "Quand il n'y a plus de pile",
        "Quand une ampoule s'éteint"
      ],
      correctAnswer: 1,
      explanation:
        "Un circuit fermé permet à l'électricité de circuler, comme un interrupteur allumé."
    },
    {
      id: "q5",
      question: "Quelle source peut produire de l'électricité ?",
      options: [
        "Le vent avec une éolienne",
        "Le Soleil avec des panneaux solaires",
        "L'eau avec un barrage",
        "Toutes les réponses ci-dessus"
      ],
      correctAnswer: 3,
      explanation:
        "L'électricité peut être produite grâce au vent, au Soleil, à l'eau ou à d'autres centrales électriques."
    },
    {
      id: "q6",
      question: "À quoi servent les piles et batteries ?",
      options: [
        "À stocker de l'énergie électrique",
        "À fabriquer de l'énergie électrique",
        "À produire de l'IEM",
        "À rien"
      ],
      correctAnswer: 0,
      explanation:
        "Les piles et batteries stockent l'électricité pour l'utiliser plus tard."
    },
    {
      id: "q7",
      question: "Quel comportement est dangereux avec l'électricité ?",
      options: [
        "Éteindre une lampe",
        "Toucher un appareil avec les mains mouillées",
        "Regarder la télévision",
        "Utiliser une télécommande"
      ],
      correctAnswer: 1,
      explanation:
        "L'eau peut conduire l'électricité et rendre certaines situations dangereuses."
    },
    {
      id: "q8",
      question: "Que peut faire une impulsion électromagnétique (IEM) ?",
      options: [
        "Faire pousser des plantes",
        "Brouiller ou perturber des appareils électroniques",
        "Créer du gaz",
        "Allumer une lampe"
      ],
      correctAnswer: 1,
      explanation:
        "Une IEM peut perturber, brouiller ou parfois endommager des appareils électroniques."
    },
    {
      id: "q9",
      question: "Que cherchent à améliorer les scientifiques pour le futur ?",
      options: [
        "De meilleures batteries et une électricité plus propre",
        "Des prises électriques géantes",
        "Des éclairs artificiels partout",
        "Se passer de l'électricité"
      ],
      correctAnswer: 0,
      explanation:
        "Les scientifiques cherchent des batteries plus performantes et des moyens plus propres de produire de l'électricité."
    },
    {
      id: "q10",
      question: "Pourquoi les scientifiques étudient-ils la fusion nucléaire ?",
      options: [
        "Pour produire beaucoup d'énergie avec moins de déchets",
        "Pour utiliser l'énergie solaire",
        "Pour fabriquer de la fumée",
        "Pour supprimer les batteries"
      ],
      correctAnswer: 0,
      explanation:
        "La fusion nucléaire pourrait permettre de produire beaucoup d'énergie avec moins de déchets."
    }
  ]
};