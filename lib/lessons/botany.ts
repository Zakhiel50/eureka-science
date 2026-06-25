import { Course } from "@/app/types/types";

export const botany: Course = {
  id: "botany",
  title: "À la découverte des Plantes",
  thumbnailUrl: "/images/botany/cover.avif",
  description:
    "Découvre le monde fascinant des plantes ! Apprends comment elles grandissent, se nourrissent, se reproduisent et pourquoi elles sont indispensables à la vie sur Terre.",

  steps: [
    {
      id: "botany-definition",
      title: "1. Qu'est-ce que la botanique ?",
      content:
        "La botanique est la science qui étudie les plantes. Les scientifiques appelés botanistes cherchent à comprendre comment les plantes vivent, grandissent, se reproduisent et s'adaptent à leur environnement. Les plantes sont partout autour de nous : arbres, fleurs, herbes, mousses et même certaines plantes aquatiques.",
      imageUrl: "/images/botany/step1.avif"
    },
    {
      id: "plant-anatomy",
      title: "2. Les Parties d'une Plante",
      content:
        "Une plante possède plusieurs parties qui ont chacune un rôle. Les racines absorbent l'eau et les minéraux du sol, la tige transporte les ressources, les feuilles captent la lumière du Soleil et les fleurs permettent souvent la reproduction. Chaque partie travaille ensemble pour permettre à la plante de vivre.",
      imageUrl: "/images/botany/step2.avif"
    },
    {
      id: "roots",
      title: "3. Les Racines : La Partie Cachée",
      content:
        "Sous la terre se trouve un réseau incroyable de racines. Elles fixent la plante dans le sol et absorbent l'eau ainsi que les minéraux nécessaires à sa croissance. Certaines plantes possèdent même des racines gigantesques capables de chercher de l'eau très profondément.",
      imageUrl: "/images/botany/step3.avif"
    },
    {
      id: "photosynthesis",
      title: "4. La Photosynthèse : La Cuisine des Plantes",
      content:
        "Les plantes fabriquent leur propre nourriture grâce à la photosynthèse. Avec la lumière du Soleil, l'eau absorbée by les racines et le dioxyde de carbone présent dans l'air, elles produisent de l'énergie pour grandir et rejettent de l'oxygène. C'est grâce aux plantes qu'une grande partie de l'air que nous respirons existe.",
      imageUrl: "/images/botany/step4.avif"
    },
    {
      id: "plant-growth",
      title: "5. Comment une Plante Grandit-elle ?",
      content:
        "Pour grandir, une plante utilise l'eau, les minéraux, la lumière et le dioxyde de carbone. Elle crée de nouvelles cellules et développe ses racines, ses tiges, ses feuilles puis parfois ses fleurs et ses fruits. Certaines plantes grandissent rapidement, d'autres peuvent vivre plusieurs milliers d'années.",
      imageUrl: "/images/botany/step5.avif"
    },
    {
      id: "flowers-reproduction",
      title: "6. Les Fleurs et la Reproduction",
      content:
        "Les fleurs permettent à beaucoup de plantes de se reproduire. Elles attirent souvent les insectes comme les abeilles grâce à leurs couleurs et leurs odeurs. Le pollen peut être transporté d'une fleur à une autre pour permettre la création de graines.",
      imageUrl: "/images/botany/step6.avif"
    },
    {
      id: "seeds",
      title: "7. Les Graines : Le Début d'une Nouvelle Vie",
      content:
        "Une graine contient une petite plante miniature prête à grandir. Avec de l'eau, une bonne température et de bonnes conditions, elle commence à germer. Certaines graines peuvent rester en attente pendant des années avant de pousser.",
      imageUrl: "/images/botany/step7.avif"
    },
    {
      id: "plant-adaptation",
      title: "8. Les Plantes S'Adaptent",
      content:
        "Les plantes ont développé des stratégies incroyables pour survivre. Les cactus stockent de l'eau dans leurs tiges, certaines plantes mangent des insectes pour récupérer des nutriments, et certains arbres peuvent résister à des conditions extrêmes.",
      imageUrl: "/images/botany/step8.avif"
    },
    {
      id: "plants-ecosystem",
      title: "9. Pourquoi les Plantes sont Essentielles ?",
      content:
        "Les plantes sont indispensables à la vie. Elles produisent de l'oxygène, nourrissent de nombreux animaux, capturent du dioxyde de carbone et participent à l'équilibre des écosystèmes. Sans plantes, la vie sur Terre serait complètement différente.",
      imageUrl: "/images/botany/step9.avif"
    },
    {
      id: "botany-future",
      title: "10. La Botanique du Futur",
      content:
        "Les scientifiques étudient les plantes pour mieux comprendre la nature, créer de nouvelles cultures alimentaires, protéger les espèces menacées et développer des solutions contre le changement climatique. Les plantes pourraient aider à construire un futur plus durable.",
      imageUrl: "/images/botany/step10.avif"
    }
  ],

  quiz: [
    {
      id: "q1",
      question: "Pourquoi la botanique est-elle une science importante ?",
      options: [
        "Parce qu'elle étudie uniquement les plantes rares",
        "Parce qu'elle permet de comprendre comment vivent et évoluent les plantes",
        "Parce qu'elle sert seulement à créer des jardins",
        "Parce qu'elle étudie la météo des forêts"
      ],
      correctAnswer: 1,
      explanation:
        "La botanique étudie les plantes, leur fonctionnement, leur évolution et leurs interactions avec leur environnement."
    },
    {
      id: "q2",
      question: "Quel est le rôle principal des racines d'une plante ?",
      options: [
        "Capturer la lumière du Soleil",
        "Produire les fleurs et les fruits",
        "Absorber l'eau et les minéraux du sol",
        "Créer l'oxygène présent dans l'air"
      ],
      correctAnswer: 2,
      explanation:
        "Les racines permettent à la plante de récupérer l'eau et les minéraux nécessaires à sa croissance."
    },
    {
      id: "q3",
      question: "À quoi sert principalement la photosynthèse ?",
      options: [
        "À permettre aux plantes de fabriquer leur énergie grâce à la lumière",
        "À transformer les racines en graines",
        "À protéger les plantes contre les animaux",
        "À produire uniquement des fleurs"
      ],
      correctAnswer: 0,
      explanation:
        "La photosynthèse utilise la lumière du Soleil, l'eau et le dioxyde de carbone pour fabriquer de l'énergie."
    },
    {
      id: "q4",
      question: "Quel rôle joue le dioxyde de carbone dans la photosynthèse ?",
      options: [
        "Il empêche les plantes de respirer",
        "Il est utilisé par la plante pour fabriquer de la matière et pousser",
        "Il remplace l'eau absorbée par les racines",
        "Il donne directement la couleur verte aux feuilles"
      ],
      correctAnswer: 1,
      explanation:
        "Les plantes utilisent le dioxyde de carbone de l'air pour fabriquer de la matière et pouvoir pousser grâce à la photosynthèse."
    },
    {
      id: "q5",
      question: "Pourquoi certaines fleurs attirent-elles les abeilles ?",
      options: [
        "Pour que les abeilles mangent les feuilles",
        "Pour utiliser les abeilles comme moyen de transport du pollen",
        "Pour se protéger du froid",
        "Pour récupérer de l'eau dans les ruches"
      ],
      correctAnswer: 1,
      explanation:
        "Les insectes transportent le pollen d'une fleur à une autre, ce qui aide la reproduction des plantes."
    },
    {
      id: "q6",
      question: "Pourquoi une graine peut-elle rester inactive pendant longtemps ?",
      options: [
        "Parce qu'elle attend des conditions favorables pour germer",
        "Parce qu'elle n'est pas encore devenue une plante",
        "Parce qu'elle n'a pas besoin d'eau pour vivre",
        "Parce qu'elle absorbe la lumière pendant son sommeil"
      ],
      correctAnswer: 0,
      explanation:
        "Une graine peut attendre plusieurs années avant de germer si les conditions ne sont pas bonnes."
    },
    {
      id: "q7",
      question: "Pourquoi les feuilles sont-elles souvent vertes ?",
      options: [
        "Parce qu'elles contiennent de la chlorophylle qui capte la lumière",
        "Parce qu'elles fabriquent naturellement de la peinture verte",
        "Parce qu'elles absorbent uniquement la couleur verte du Soleil",
        "Parce que toutes les plantes ont la même composition"
      ],
      correctAnswer: 0,
      explanation:
        "La chlorophylle donne la couleur verte aux feuilles et aide à capter l'énergie lumineuse."
    },
    {
      id: "q8",
      question: "Comment les cactus survivent-ils dans les milieux très secs ?",
      options: [
        "Ils peuvent stocker de l'eau dans leurs tissus et limiter sa perte",
        "Ils fabriquent de l'eau grâce à la lumière",
        "Ils n'ont pas besoin d'eau pour vivre",
        "Ils absorbent toute leur eau directement depuis l'air"
      ],
      correctAnswer: 0,
      explanation:
        "Les cactus stockent l'eau dans leurs tissus et possèdent des adaptations qui limitent l'évaporation."
    },
    {
      id: "q9",
      question: "Quel scientifique étudie les plantes ?",
      options: [
        "Un botaniste",
        "Un astronome",
        "Un géologue",
        "Un météorologue"
      ],
      correctAnswer: 0,
      explanation:
        "Un botaniste est spécialisé dans l'étude des plantes."
    },
    {
      id: "q10",
      question: "Pourquoi les scientifiques étudient-ils encore les plantes aujourd'hui ?",
      options: [
        "Pour comprendre leur fonctionnement et trouver des solutions pour l'avenir",
        "Pour remplacer toutes les plantes sauvages par des plantes artificielles",
        "Pour empêcher les plantes de se reproduire",
        "Pour fabriquer uniquement des objets en bois"
      ],
      correctAnswer: 0,
      explanation:
        "Les plantes peuvent aider à comprendre les écosystèmes, l'alimentation et des solutions contre le changement climatique."
    }
  ],
};