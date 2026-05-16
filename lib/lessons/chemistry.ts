import { Course } from "@/app/types/types";

export const chemistry: Course = {
  id: "chemistry",
  title: "A la découverte de la Chimie",
  thumbnailUrl: "/images/chemistry/cover.jpg",
  description:
    "Découvre la science des transformations ! Apprends comment la chimie agit partout autour de nous.",
  steps: [
    {
      id: "chemistry-definition",
      title: "1. Qu'est-ce que la chimie ?",
      content:
        "La chimie est la science qui étudie la matière et ses transformations. Quand un gâteau cuit, quand le métal rouille ou quand un feu brûle, ce sont des réactions chimiques ! La chimie permet de comprendre comment les substances se mélangent, changent ou réagissent ensemble.",
      imageUrl: "/images/chemistry/step1.jpg"
    },
    {
      id: "matiere",
      title: "2. La Matière est Partout",
      content:
        "Comme nous avons pu voir dans le cours précédent, tout ce qui t'entoure est composé de matière : l'air, l'eau, les vêtements, les arbres et même ton corps. La matière peut exister sous trois états principaux : solide, liquide ou gaz. Les chimistes étudient comment cette matière se comporte et se transforme.",
      imageUrl: "/images/chemistry/step2.jpg"
    },
    {
      id: "transformations",
      title: "3. Les Transformations Chimiques",
      content:
        "Une transformation chimique se produit lorsqu'une substance devient une nouvelle substance différente, comme nous avons vu, c'est une histore d'atome qui se rassemble ou se sépare pour creer une nouvelle molécule. Par exemple, le bois qui brûle produit de la fumée, des gaz et des cendres. Après la réaction, il est impossible de retrouver exactement le bois de départ.",
      imageUrl: "/images/chemistry/step3.jpg"
    },
    {
      id: "reactions",
      title: "4. Les Réactions Spectaculaires",
      content:
        "Certaines réactions chimiques sont faciles à observer ! Elles peuvent produire des bulles, de la chaleur, de la lumière, une explosion de mousse ou un changement de couleur. Le célèbre mélange vinaigre + bicarbonate produit du dioxyde de carbone, un gaz invisible qui crée beaucoup de mousse.",
      imageUrl: "/images/chemistry/step4.jpg"
    },
    {
      id: "chemistry-quotidien",
      title: "5. La Chimie du Quotidien",
      content:
        "La chimie est partout dans la vie quotidienne : le savon nettoie grâce à des réactions chimiques, le dentifrice protège les dents, et la cuisson transforme les aliments. Même les boissons gazeuses utilisent des réactions chimiques pour créer leurs bulles.",
      imageUrl: "/images/chemistry/step5.jpg"
    },
    {
      id: "industrial-chemistry",
      title: "6. La Chimie Industrielle",
      content:
        "Les usines utilisent la chimie pour fabriquer des médicaments, des vêtements, des batteries, des peintures et des plastiques. Grâce à la chimie industrielle, on peut produire rapidement des objets utiles pour des millions de personnes.",
      imageUrl: "/images/chemistry/step6.jpg"
    },
    {
      id: "body-chemistry",
      title: "7. La Chimie dans le Corps Humain",
      content:
        "Ton corps est une incroyable usine chimique ! Quand tu manges, ton organisme transforme les aliments en énergie. Ton cerveau, tes muscles et ton cœur fonctionnent grâce à des milliers de réactions chimiques invisibles qui se produisent chaque seconde. Ces réactions sont trés utile, comme par exemple lorsque tu as peur, ton cerveau demande à ton corps de creer de la dopamine pour pouvoir donner plus de puissance à tes muscles pour pouvoir fuir.",
      imageUrl: "/images/chemistry/step7.jpg"
    },
    {
      id: "warning-security",
      title: "8. Les Dangers de la Chimie",
      content:
        "Certaines substances chimiques peuvent être dangereuses. Elles peuvent être toxiques, inflammables ou corrosives. C'est pour cela que les scientifiques portent des lunettes, des gants et des blouses dans les laboratoires. Il ne faut jamais mélanger des produits ménagers car tu ne sais pas quelle réaction chimique celà va produit, cela peux creer un gaz comme le dichlore ou la chloramine qui sont des gaz mortels.",
      imageUrl: "/images/chemistry/step8.jpg"
    },
    {
      id: "green-chemistry",
      title: "9. La Chimie Verte",
      content:
        "Aujourd'hui, les scientifiques cherchent à créer une chimie plus propre et moins polluante. On parle de chimie verte. Le but est de fabriquer des produits qui respectent davantage la planète et produisent moins de déchets dangereux.",
      imageUrl: "/images/chemistry/step9.jpg"
    },
    {
      id: "medical-chemistry",
      title: "10. La Chimie du Futur",
      content:
        "Les chercheurs en chimie aussi appellés laborantins recherchent des medicaments et vaccins en réalisant des mélanges chimique pour trouver des molécules qui combattent les virus et bactéries tout en faisant un minimum de dégats sur le corps humain.",
      imageUrl: "/images/chemistry/step10.jpg"
    }
  ],
  quiz: [
    {
      id: "q1",
      question: "Que fait principalement la chimie ?",
      options: [
        "Elle étudie les étoiles",
        "Elle étudie la matière et ses transformations",
        "Elle étudie uniquement les plantes",
        "Elle fabrique seulement des médicaments"
      ],
      correctAnswer: 1,
      explanation:
        "La chimie étudie la matière et les transformations qu'elle peut subir, comme les réactions chimiques."
    },
    {
      id: "q2",
      question: "Quel exemple montre une réaction chimique ?",
      options: [
        "Une pierre posée sur le sol",
        "Un verre vide",
        "Le bois qui brûle",
        "Un ballon immobile"
      ],
      correctAnswer: 2,
      explanation:
        "Quand le bois brûle, il se transforme en nouvelles substances : fumée, gaz et cendres."
    },
    {
      id: "q3",
      question: "Quels sont les trois états principaux de la matière ?",
      options: [
        "Chaud, froid et tiède",
        "Liquide, gazeux et énergétique",
        "Solide, liquide et gazeuse",
        "Dur, mou et cassant"
      ],
      correctAnswer: 2,
      explanation:
        "La matière existe principalement sous forme solide, liquide ou gazeuse."
    },
    {
      id: "q4",
      question: "Que produit le mélange vinaigre + bicarbonate ?",
      options: [
        "Du métal",
        "Du sable",
        "Du gaz et de la mousse",
        "De la glace"
      ],
      correctAnswer: 2,
      explanation:
        "Ce mélange produit du dioxyde de carbone, un gaz qui crée les bulles et la mousse."
    },
    {
      id: "q5",
      question: "Pourquoi utilise-t-on la chimie dans les usines ?",
      options: [
        "Pour fabriquer des objets utiles",
        "Pour arrêter les machines",
        "Pour empêcher les réactions",
        "Seulement pour fabriquer des jouets"
      ],
      correctAnswer: 0,
      explanation:
        "La chimie industrielle permet de fabriquer des médicaments, batteries, vêtements, peintures et beaucoup d'autres objets utiles."
    },
    {
      id: "q6",
      question: "Que peut produire ton cerveau quand tu as peur ?",
      options: [
        "Du dichlore",
        "De la dopamine",
        "De la chloramine",
        "De la fumée"
      ],
      correctAnswer: 1,
      explanation:
        "Ton cerveau peut produire des substances chimiques comme la dopamine pour aider ton corps à réagir rapidement."
    },
    {
      id: "q7",
      question: "Pourquoi ne faut-il jamais mélanger des produits ménagers ?",
      options: [
        "Car cela change leur couleur",
        "Car cela peut créer des gaz dangereux",
        "Car cela produit du chocolat",
        "Car cela refroidit la maison"
      ],
      correctAnswer: 1,
      explanation:
        "Certains mélanges chimiques peuvent produire des gaz très dangereux comme la chloramine ou le dichlore."
    },
    {
      id: "q8",
      question: "Que cherche à faire la chimie verte ?",
      options: [
        "Fabriquer uniquement des objets verts",
        "Créer plus de pollution",
        "Respecter davantage la planète",
        "Supprimer toute la chimie"
      ],
      correctAnswer: 2,
      explanation:
        "La chimie verte cherche à réduire la pollution et les déchets dangereux."
    },
    {
      id: "q9",
      question: "Lors d'une transformation chimique, que font les atomes ?",
      options: [
        "Ils disparaissent",
        "Ils explosent toujours",
        "Ils se rassemblent ou se séparent différemment",
        "Ils deviennent invisibles"
      ],
      correctAnswer: 2,
      explanation:
        "Les réactions chimiques modifient la façon dont les atomes sont assemblés pour former de nouvelles molécules."
    },
    {
      id: "q10",
      question: "Quel est le rôle des laborantins en chimie médicale ?",
      options: [
        "Créer des tempêtes",
        "Fabriquer des montagnes",
        "Chercher des molécules pour créer des médicaments",
        "Construire des voitures"
      ],
      correctAnswer: 2,
      explanation:
        "Les laborantins et chercheurs testent des mélanges chimiques pour trouver des molécules capables de combattre les maladies."
    }
  ]
}