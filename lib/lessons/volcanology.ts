import { Course } from "./water-cycle";

export const volcanologyCourse: Course = {
  id: "volcanologie",
  title: "Les Secrets des Volcans",
  description: "Explore les entrailles de la Terre, du magma brûlant aux explosions spectaculaires !",
  thumbnailUrl: "/images/volcanology/cover.jpg",
  steps: [
    {
      id: "earth",
      title: "1. Le puzzle géant de la Terre",
      content: "Avant de parler de feu, parlons de sol. La Terre n'est pas un bloc solide, mais un puzzle de plaques tectoniques qui flottent sur du roche brûlante et déformable. La croûte continentale est épaisse et légère, et continent essentiellement du granite. La croûte océanique est fine et dense et continent énormément de basalte.",
      imageUrl: "/images/volcanology/step1.jpg"
    },
    {
      id: "magma-origin",
      title: "2. La formation du magma",
      content: "Comment la roche appelé Péridotite devient-elle liquide pour se transformer en magma ? Ce n'est pas juste parce qu'il fait chaud. Sous la croûte, la pression est immense. Le magma se forme par fusion partielle des roches suite à une baisse de pression ou à l'ajout d'eau (dans les zones de subduction). Le magma est sous la terre (avec ses gaz), la lave est à l'extérieur.",
      imageUrl: "/images/volcanology/step2.jpg"
    },
    {
      id: "magma-rise",
      title: "3. La Montée du Magma",
      content: "Le magma est plus léger que les roches solides qui l'entourent. Il remonte donc vers la surface, comme une bulle d'air dans l'eau, et s'accumule dans un immense réservoir : la chambre magmatique. Lorsque des micros-seismes se déclenchent, des fissures apparaissent. La préssion contenue dans les chambre magmatique remontent alors vers la surface.",
      imageUrl: "/images/volcanology/step3.jpg"
    },
    {
      id: "effusive-volcano",
      title: "4. Le Volcan Effusif (Volcan Rouge)",
      content: "Dans un volcan effusif, le magma est très fluide (liquide). Il s'écoule facilement le long des pentes pour former de longues rivières de lave. On les appelle 'volcans rouges' à cause de la couleur de la lave incandescente. Quand la lave d'un volcan effusif refroidit, elle durcit et devient une roche noire et dense : le Basalte. C'est la roche la plus courante sur les fonds océaniques et dans des endroits comme Hawaï.",
      imageUrl: "/images/volcanology/step4.jpg"
    },
    {
      id: "explosive-volcano",
      title: "5. Le Volcan Explosif (Volcan Gris)",
      content: "Dans un volcan explosif, le magma est très visqueux (épais). Les gaz ont du mal à s'échapper et la pression monte, monte... jusqu'à ce la pression du magma qui n'arrive pas à remonter assez vite dans crevasse créers par les séismes explose ! Ces volcans rejettent d'immenses nuages de cendres et de fumée, d'où leur nom de 'volcans gris'. Le magma épais des volcans explosifs se transforme en une roche appelée l'Andésite. Elle est souvent de couleur grise ou brune et contient de petits cristaux visibles.",
      imageUrl: "/images/volcanology/step5.jpg"
    },
    {
      id: "hybrid-volcano",
      title: "6. Le Volcan Hybride",
      content: "Certains volcans sont capricieux, ce sont les volcans hybrides ! Ils peuvent changer de comportement au cours de leur vie, étant tantôt calmes et effusifs, tantôt violents et explosifs. On les appelle des volcans hybrides. Pourquoi ce changement ? C'est souvent une question de mélange de magmas dans la chambre magmatique. Dans ces volcans, on trouve souvent des roches appelées Brèches, des morceaux de roches anciennes cassées par l'explosion, soudés entre eux par de la lave qui a refroidi autour.",
      imageUrl: "/images/volcanology/step6.jpg"
    },
    {
      id: "sub-volcano",
      title: "7. Le Volcan sous-marin",
      content: "La majorité des volcans sur Terre sont cachés sous l'océan, les volcans sous-marins, il représentent 80% de l'activité volcanique de la Terre se passe sous nos pieds, au fond des océans ! Dans les abysses, l'eau est proche de 2°C. La lave, elle, sort à environ 1 200°C. Au contact de l'eau, la surface de la lave se fige en une fraction de seconde, créant une fine croûte de verre volcanique. L'intérieur reste liquide et brûlant. Sous la pression du magma qui continue d'arriver, cette peau de pierre s'étire et gonfle comme un ballon avant de craquer pour laisser sortir une nouvelle bulle.",
      imageUrl: "/images/volcanology/step7.jpg"
    },
    {
      id: "volcano-wake-up",
      title: "8. Le Réveil du Géant",
      content: "Qu'est-ce qui réveille un volcan ? C'est l'arrivée de 'nouveau' magma frais venant des profondeurs dans la chambre magmatique. Cela fait monter la pression, comme dans une cocotte-minute, jusqu'à ce que la croûte terrestre fissure et fasse remonter le magma.",
      imageUrl: "/images/volcanology/step8.jpg"
    },
    {
      id: "tectonic-plates",
      title: "9. La Terre en Mouvement",
      content: "La plupart des volcans se trouvent à la limite des plaques tectoniques (les morceaux qui forment la surface de la Terre. Ces plaques bougent tout le temps, même si tu ne le vois pas. Quand deux plaques s'écartent ou se rentrent dedans, cela crée des passages pour le magma et le volcan se réveille.",
      imageUrl: "/images/volcanology/step9.jpg"
    },
    {
      id: "life-after-eruption",
      title: "10. Le Cycle de la Terre",
      content: "Même s'ils sont dangereux, les volcans sont essentiels. Les cendres volcaniques rendent le sol extrêmement fertile pour les plantes, et les volcans ont aidé à créer les continents, les ïles, l'atmosphère et même l'eau sur Terre il y a des milliards d'années !",
      imageUrl: "/images/volcanology/step10.jpg"
    }
  ],
  quiz: [
    {
      id: "q1",
      question: "Quelle roche épaisse et légère compose principalement la croûte continentale ?",
      options: ["Le Basalte", "Le Granite", "La Péridotite", "L'Andésite"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Quelle est la principale différence entre le magma et la lave ?",
      options: ["Leur couleur", "Leur température", "Le magma est sous terre, la lave est à l'extérieur", "Il n'y a aucune différence"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Comment s'appelle la réserve de magma se trouvant profondément sous terre ?",
      options: ["La chambre magmatique", "La chambre de lave", "Le réservoir", "La croûte océanique"],
      correctAnswer: 0
    },
    {
      id: "q4",
      question: "Quelle roche noire et dense se forme après le refroidissement d'une lave fluide (volcan effusif) ?",
      options: ["Le Basalte", "Le Granite", "Le Quartz", "Le Calcaire"],
      correctAnswer: 0
    },
    {
      id: "q5",
      question: "Pourquoi les volcans explosifs rejettent-ils d'immenses nuages de cendres ?",
      options: ["Leur magma est trop liquide", "Il n'y a pas de gaz", "Leur magma est très visqueux et explose sous la préssion", "À cause de la pluie"],
      correctAnswer: 2
    },
    {
      id: "q6",
      question: "Comment appelle-t-on les roches anciennes formées de morceaux cassés dans les volcans hybrides ?",
      options: ["Les Galets", "Les Brèches", "Les Cristaux", "Les Ardoises"],
      correctAnswer: 1
    },
    {
      id: "q7",
      question: "Quel pourcentage de l'activité volcanique terrestre se passe sous les océans ?",
      options: ["10%", "50%", "80%", "95%"],
      correctAnswer: 2
    },
    {
      id: "q8",
      question: "Que se passe-t-il quand la lave à 1200°C touche l'eau glacée des abysses ?",
      options: ["Elle s'évapore", "Elle devient du sable", "Elle se fige en verre volcanique", "Elle reste liquide"],
      correctAnswer: 2
    },
    {
      id: "q9",
      question: "Qu'est-ce qui provoque la montée du magma juste avant une éruption ?",
      options: ["L'augmentation de la pression dans la chambre magmatique", "Le refroidissement de la terre", "Le mouvement de la Lune", "Le bruit des voitures"],
      correctAnswer: 0
    },
    {
      id: "q10",
      question: "Quel est l'un des rôles essentiels des volcans pour la vie sur Terre ?",
      options: ["Ils refroidissent la planète", "Ils créent des sols fertiles et l'atmosphère", "Ils empêchent les séismes", "Ils nettoient les océans"],
      correctAnswer: 1
    }
  ]
};
