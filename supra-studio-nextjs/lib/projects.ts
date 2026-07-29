export type Project = {
  slug: string;
  img: string;
  images: string[];
  cat: string;
  name: string;
  location: string;
  type?: string;
  programme?: string;
  surface?: string;
  annee?: string;
  description?: string[];
  wip?: boolean;
  // Rich detail-page content (optional — used when a project has full material)
  longSections?: { heading: string; paragraphs: string[] }[];
  gallery?: string[];
  plans?: { src: string; caption: string }[];
  locationImage?: string;
  identityTable?: { label: string; value: string }[];
  keywords?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "giardino-de-ninno",
    img: "/assets/images/projet-01-exterieur.jpg",
    images: ["/assets/images/projet-01-exterieur.jpg"],
    cat: "Paysage",
    name: "Giardino De Ninno",
    location: "Sabaudia, Latina, Italia",
    type: "Aménagement extérieur",
    programme: "Jardin, piscine et terrasse d'une villa familiale",
    surface: "300 m²",
    annee: "2026",
    description: [
      "Niché entre pins parasols et essences méditerranéennes, ce jardin prolonge une villa familiale près de Sabaudia. Nous avons pensé chaque séquence — pergola, piscine, terrasse ombragée — comme une pièce à part entière de la maison, où la limite entre intérieur et extérieur s'efface.",
      "La palette végétale, choisie pour résister au climat local et évoluer avec les saisons, s'accorde aux matériaux en terre cuite et à la pierre existante, pour un jardin qui semble avoir toujours été là.",
    ],
    gallery: [
      "/assets/images/giardino-2.jpg",
      "/assets/images/giardino-nuit.jpg",
      "/assets/images/giardino-3.jpg",
    ],
    plans: [
      { src: "/assets/images/giardino-plan-rdc.jpg", caption: "Plan RDC" },
      { src: "/assets/images/giardino-coupe-aa.jpg", caption: "Coupe AA" },
    ],
    locationImage: "/assets/images/giardino-map.jpg",
    longSections: [
      {
        heading: "Un jardin conçu comme une extension de la maison",
        paragraphs: [
          "À Sabaudia, sur le littoral italien, ce projet d'aménagement paysager transforme un jardin privé de 300 m² en un véritable espace de vie à ciel ouvert. Autour d'une piscine existante, notre intervention redéfinit les usages et les perspectives afin de créer un jardin contemporain, où nature, architecture et lumière composent une atmosphère méditerranéenne à la fois sobre et chaleureuse.",
          "Chaque espace est pensé comme une séquence du paysage. Les circulations s'articulent naturellement entre la terrasse, la piscine, les espaces de détente et les zones plantées, offrant une lecture fluide et une continuité entre la maison et son environnement extérieur.",
        ],
      },
      {
        heading: "Une composition paysagère entre ouverture et intimité",
        paragraphs: [
          "L'aménagement repose sur un équilibre subtil entre espaces ouverts et végétation structurante. De larges massifs plantés accompagnent les limites de la parcelle afin de préserver l'intimité tout en laissant respirer le jardin. Les perspectives sont volontairement maîtrisées : elles guident le regard, révèlent la profondeur du terrain et renforcent la sensation d'espace.",
          "Cette composition permet de créer un jardin vivant, dont les ambiances évoluent au fil des déplacements et des saisons.",
        ],
      },
      {
        heading: "Le végétal comme matière d'architecture",
        paragraphs: [
          "Le projet s'appuie sur une palette végétale inspirée des paysages méditerranéens. Arbres, arbustes persistants, plantes grasses, succulentes et vivaces aux floraisons blanches, mauves et bleutées composent un paysage résilient, adapté au climat de Sabaudia.",
          "Au-delà de son esthétique, le végétal participe au confort du jardin. Les arbres créent des zones d'ombre naturelles, rafraîchissent les espaces de vie en été et accompagnent les différents usages extérieurs tout au long de la journée.",
          "Autour de la piscine, un platelage en bois apporte chaleur et douceur. Les matériaux naturels dialoguent avec les plantations pour créer une ambiance intemporelle, où chaque élément trouve sa juste place.",
        ],
      },
      {
        heading: "Une expérience du jardin, de jour comme de nuit",
        paragraphs: [
          "À la tombée du jour, le paysage change de perception. Un éclairage discret révèle les volumes végétaux, accompagne les cheminements et prolonge les usages extérieurs sans perturber la quiétude du lieu.",
          "Plus qu'un simple projet d'aménagement de jardin, cette réalisation traduit notre vision du paysage : concevoir des espaces extérieurs durables, sensibles et intemporels, où le végétal, la matière et la lumière participent pleinement à la qualité de vie.",
        ],
      },
    ],
    identityTable: [
      { label: "Projet", value: "Aménagement d'un jardin privé avec piscine" },
      { label: "Localisation", value: "Sabaudia, Italie" },
      { label: "Surface", value: "300 m²" },
      { label: "Mission", value: "Conception paysagère" },
      {
        label: "Programme",
        value:
          "Requalification d'un jardin existant, création d'une terrasse en bois, aménagement des abords de la piscine, espaces de détente",
      },
      { label: "Statut", value: "Étude" },
    ],
    keywords: [
      "Architecte paysagiste",
      "Aménagement paysager",
      "Conception de jardin",
      "Jardin contemporain",
      "Jardin méditerranéen",
      "Jardin avec piscine",
      "Terrasse en bois",
      "Paysage résidentiel",
      "Architecture du paysage",
    ],
  },
  {
    slug: "maison-kleber",
    img: "/assets/images/kleber-salon-escalier.jpg",
    images: [
      "/assets/images/kleber-salon-escalier.jpg",
      "/assets/images/kleber-facade-jour.jpg",
    ],
    cat: "Architecture & architecture d'intérieur",
    name: "Maison Kléber",
    location: "Bordeaux, Gironde, France",
    type: "Construction neuve",
    programme: "Transformation d'un ancien garage en maison de ville — loft inversé et rooftop",
    surface: "120 m²",
    annee: "2026",
    gallery: [
      "/assets/images/kleber-facade-jour.jpg",
      "/assets/images/kleber-facade-nuit.jpg",
      "/assets/images/kleber-garage.jpg",
      "/assets/images/kleber-salon-cuisine.jpg",
      "/assets/images/kleber-cuisine.jpg",
      "/assets/images/kleber-chambre-toit.jpg",
      "/assets/images/kleber-chambre-claustra.jpg",
      "/assets/images/kleber-chambre-bureau.jpg",
      "/assets/images/kleber-sdb-double-vasque.jpg",
      "/assets/images/kleber-sdb-douche.jpg",
    ],
    plans: [
      { src: "/assets/images/kleber-plan-existant-rdc.jpg", caption: "Existant / RDC projet" },
      { src: "/assets/images/kleber-plan-r1-r2.jpg", caption: "R+1 / R+2" },
      { src: "/assets/images/kleber-plan-r3-toiture.jpg", caption: "R+3 / Toiture" },
    ],
    locationImage: "/assets/images/kleber-map.jpg",
    longSections: [
      {
        heading: "D'un espace de stationnement à une maison familiale",
        paragraphs: [
          "Au cœur d'un quartier résidentiel de Bordeaux, ce projet transforme un ancien garage en une maison de ville contemporaine de 120 m². Implantée sur une parcelle étroite, la construction existante n'offrait ni qualité d'usage, ni véritable relation avec la rue. Le projet propose une reconstruction complète afin d'imaginer une habitation lumineuse, fonctionnelle et adaptée aux modes de vie contemporains.",
          "Cette transformation repose sur une idée simple : faire de la contrainte une ressource. La faible largeur de la parcelle devient le point de départ d'une architecture verticale où chaque niveau révèle une nouvelle manière d'habiter.",
        ],
      },
      {
        heading: "Une maison pensée autour de la verticalité",
        paragraphs: [
          "L'organisation intérieure s'inspire du principe du « loft inversé ». Les fonctions techniques prennent place au rez-de-chaussée, libérant les niveaux supérieurs pour les espaces de vie. Cette répartition permet d'offrir les meilleures qualités de lumière et de vues aux pièces utilisées quotidiennement.",
          "Le séjour, la salle à manger et la cuisine ouverte occupent ainsi le deuxième étage, où les volumes se prolongent dans un vaste espace traversant baigné de lumière naturelle. Sous la toiture, une chambre supplémentaire s'ouvre sur une terrasse protégée des regards, véritable pièce extérieure au cœur du tissu urbain.",
          "L'ensemble de la maison est relié par un escalier longitudinal qui structure les circulations et accompagne la découverte progressive des espaces. Plus qu'un simple élément fonctionnel, il devient l'épine dorsale du projet et participe pleinement à son identité architecturale.",
        ],
      },
      {
        heading: "La lumière comme matériau de projet",
        paragraphs: [
          "Sur une parcelle aussi contrainte, la lumière devient un véritable matériau d'architecture.",
          "De grandes ouvertures verticales animent la façade sur rue tandis que des ouvertures zénithales, des puits de lumière et des pavés de verre diffusent la lumière naturelle jusqu'au cœur de la maison. Les perspectives traversantes renforcent la sensation d'espace et offrent des ambiances qui évoluent au fil de la journée.",
          "Chaque ouverture est pensée non seulement pour éclairer, mais aussi pour révéler les volumes, accompagner les usages et créer une relation permanente entre intérieur et extérieur.",
        ],
      },
      {
        heading: "Des matériaux sobres et durables",
        paragraphs: [
          "Le projet s'appuie sur une palette de matériaux naturels où pierre calcaire, bois, béton ciré, serrurerie métallique et faïence dialoguent dans une écriture contemporaine et intemporelle.",
          "Le mobilier sur mesure accompagne l'architecture à chaque niveau. Intégré dès la conception, il optimise les espaces, structure les volumes et répond aux contraintes propres à cette maison de ville construite sur une parcelle étroite.",
          "Cette réalisation illustre notre approche de l'architecture : concevoir des espaces où chaque mètre carré est valorisé, où la lumière révèle les volumes et où les contraintes deviennent les fondations mêmes du projet.",
        ],
      },
    ],
    identityTable: [
      { label: "Projet", value: "Transformation d'un ancien garage en maison de ville" },
      { label: "Localisation", value: "Bordeaux, France" },
      { label: "Surface", value: "120 m²" },
      { label: "Type", value: "Maison familiale" },
      { label: "Mission", value: "Construction neuve et architecture intérieure" },
      { label: "Statut", value: "Étude" },
    ],
    keywords: [
      "Transformation de garage en maison",
      "Maison de ville contemporaine",
      "Construction neuve",
      "Architecte Bordeaux",
      "Maison sur parcelle étroite",
      "Architecture contemporaine",
      "Maison familiale",
      "Architecture intérieure",
      "Mobilier sur mesure",
      "Lumière naturelle",
    ],
  },
  {
    slug: "casa-duy",
    img: "/assets/images/projet-04-casaduy.jpg",
    images: ["/assets/images/projet-04-casaduy.jpg"],
    cat: "Architecture d'intérieur",
    name: "Casa Duy",
    location: "Rome, Lazio, Italia",
    type: "Rénovation intérieure",
    programme: "Ouverture des espaces de vie et redisposition des pièces",
    surface: "81 m²",
    annee: "2025",
    description: [
      "Casa Duy réinvente un appartement romain autour d'une palette chaleureuse de bois et de tons crème, où chaque pièce dialogue avec la lumière naturelle. Le salon et la salle à manger s'organisent autour d'une bibliothèque sur-mesure, point d'ancrage du lieu.",
      "Le mobilier, choisi avec soin, mêle pièces contemporaines et objets plus intemporels, pour un intérieur sensible, sans être figé dans un style unique.",
    ],
    gallery: ["/assets/images/casaduy-2.jpg", "/assets/images/casaduy-plan.jpg"],
    locationImage: "/assets/images/casaduy-map.jpg",
    longSections: [
      {
        heading: "Révéler le potentiel d'un appartement des années 1970",
        paragraphs: [
          "À Rome, cette rénovation complète d'un appartement de 80 m² transforme un logement des années 1970 en un espace de vie contemporain, lumineux et fonctionnel. Notre intervention repense entièrement l'organisation intérieure afin d'adapter l'appartement aux modes de vie actuels, tout en valorisant les qualités de l'existant.",
          "Plutôt que d'effacer l'histoire du lieu, le projet s'appuie sur sa structure et ses contraintes techniques pour construire une nouvelle manière d'habiter. Chaque intervention découle d'une lecture attentive de l'existant afin de révéler son potentiel architectural.",
        ],
      },
      {
        heading: "Une organisation plus fluide des espaces",
        paragraphs: [
          "Le cœur du projet réside dans la réorganisation des volumes. Les espaces de vie sont décloisonnés pour former une pièce principale ouverte où cuisine, salle à manger et séjour se prolongent naturellement les uns dans les autres. Les circulations deviennent plus intuitives, les perspectives s'allongent et la lumière naturelle traverse désormais l'ensemble de l'appartement.",
          "À l'inverse, les espaces de nuit sont volontairement préservés afin d'offrir davantage d'intimité. Cette séparation entre les espaces de réception et les espaces privés apporte un équilibre fonctionnel tout en améliorant le confort quotidien.",
        ],
      },
      {
        heading: "Des matériaux naturels au service de l'architecture",
        paragraphs: [
          "Le choix des matériaux participe pleinement à la composition du projet. Le bois, la faïence, la terre cuite et le béton ciré dessinent une palette sobre et intemporelle qui met en valeur les volumes sans les surcharger.",
          "Le bois accompagne les circulations, souligne les transitions entre les espaces et crée un fil conducteur à travers tout l'appartement. Les matières minérales apportent texture et profondeur tandis que les teintes naturelles renforcent la sensation de calme et de lumière.",
        ],
      },
      {
        heading: "Une rénovation pensée autour de la lumière",
        paragraphs: [
          "L'ouverture des volumes permet de révéler tout le potentiel lumineux de l'appartement. Les perspectives sont dégagées, les cloisons inutiles disparaissent et chaque pièce bénéficie d'une meilleure diffusion de la lumière naturelle.",
          "Cette rénovation d'appartement à Rome illustre notre approche de l'architecture intérieure : transformer l'existant avec sobriété, tirer parti des contraintes du lieu et concevoir des espaces durables, où la qualité des usages naît d'un équilibre entre lumière, matière et proportions.",
        ],
      },
    ],
    identityTable: [
      { label: "Projet", value: "Rénovation complète d'un appartement" },
      { label: "Localisation", value: "Rome, Italie" },
      { label: "Surface", value: "80 m²" },
      { label: "Type", value: "Appartement dans un immeuble des années 1970" },
      { label: "Mission", value: "Architecture intérieure et rénovation" },
      { label: "Statut", value: "Étude" },
    ],
    keywords: [
      "Rénovation d'appartement",
      "Architecte d'intérieur",
      "Architecture intérieure",
      "Appartement contemporain",
      "Appartement à Rome",
      "Réhabilitation",
      "Rénovation complète",
      "Cuisine ouverte",
      "Optimisation des espaces",
      "Matériaux naturels",
    ],
  },
  {
    slug: "brasserie",
    img: "/assets/images/brasserie-salle.jpg",
    images: [
      "/assets/images/brasserie-salle.jpg",
      "/assets/images/brasserie-facade-angle.jpg",
    ],
    cat: "Architecture d'intérieur",
    name: "Brasserie",
    location: "Paris, France",
    type: "Restaurant — établissement commercial",
    programme: "Salle de restauration, comptoir, cuisine professionnelle, espaces techniques",
    surface: "205 m²",
    annee: "2026",
    gallery: [
      "/assets/images/brasserie-facade.jpg",
      "/assets/images/brasserie-facade-angle.jpg",
      "/assets/images/brasserie-bar.jpg",
      "/assets/images/brasserie-comptoir.jpg",
    ],
    plans: [
      { src: "/assets/images/brasserie-plan-rdc.jpg", caption: "RDC existant / RDC projet" },
      { src: "/assets/images/brasserie-plan-r1.jpg", caption: "R-1 existant / R-1 projet" },
    ],
    longSections: [
      {
        heading: "Révéler la mémoire d'un lieu pour lui offrir une nouvelle vie",
        paragraphs: [
          "Au cœur de la rive gauche parisienne, ce projet de réhabilitation transforme une brasserie des années 1970 en un lieu contemporain tout en préservant l'identité construite au fil des décennies.",
          "Derrière une façade discrète se cache un intérieur marqué par son époque, où certains éléments architecturaux témoignent encore de l'histoire du lieu. L'ambition du projet n'est pas d'effacer cette mémoire, mais au contraire de s'appuyer sur elle comme point de départ de la conception. Les éléments existants deviennent ainsi une matière architecturale capable de dialoguer avec de nouveaux usages et une écriture contemporaine.",
        ],
      },
      {
        heading: "Une architecture intérieure entre héritage et modernité",
        paragraphs: [
          "Le projet repose sur un travail de révélation et de réinterprétation des éléments présents. Les plafonds sculpturaux, les miroirs fumés, la serrurerie métallique, les portes en bois d'origine et les carreaux graphiques du sous-sol sont conservés et valorisés afin de préserver l'âme singulière de la brasserie.",
          "Ces éléments historiques sont associés à une palette de matériaux sobres et intemporels — bois, métal, verre texturé, pierre et céramique — qui prolongent l'identité du lieu sans chercher à reproduire son esthétique passée. L'objectif est de créer un équilibre subtil entre la richesse de l'existant et les attentes contemporaines d'un établissement parisien.",
        ],
      },
      {
        heading: "Un dialogue entre le restaurant et son environnement urbain",
        paragraphs: [
          "La conception intérieure s'inscrit dans une réflexion plus large sur la relation entre la brasserie et son quartier. Les tonalités minérales de la rive gauche, les matières présentes dans l'espace public parisien et les nuances du paysage urbain nourrissent l'atmosphère du projet.",
          "Cette continuité entre intérieur et extérieur permet d'ancrer naturellement le lieu dans son contexte tout en affirmant une identité propre. La brasserie devient ainsi un espace chaleureux et vivant, à la fois inscrit dans son histoire et ouvert sur la ville.",
        ],
      },
      {
        heading: "Une transformation pensée autour des usages",
        paragraphs: [
          "Au-delà de l'ambiance architecturale, le projet repense l'organisation complète du lieu afin d'améliorer l'expérience des clients et les conditions d'exploitation.",
          "Les circulations, les espaces de service et les zones techniques sont restructurés pour offrir davantage de fluidité, de confort et d'efficacité au quotidien. Cette rénovation de brasserie parisienne associe ainsi deux ambitions complémentaires : préserver la mémoire d'un lieu existant et l'adapter aux usages contemporains.",
          "Une transformation où l'histoire devient une matière de conception.",
        ],
      },
    ],
    identityTable: [
      { label: "Projet", value: "Réhabilitation d'une brasserie parisienne" },
      { label: "Localisation", value: "Paris, France" },
      { label: "Surface", value: "205 m²" },
      { label: "Type", value: "Restaurant — établissement commercial" },
      { label: "Mission", value: "Architecture intérieure et rénovation" },
      { label: "Programme", value: "Salle de restauration, comptoir, cuisine professionnelle, espaces techniques" },
      { label: "Statut", value: "Étude" },
    ],
    keywords: [
      "Rénovation de brasserie à Paris",
      "Architecture intérieure commerciale",
      "Réhabilitation de restaurant",
      "Architecte d'intérieur Paris",
      "Transformation de commerce",
      "Restaurant contemporain",
      "Patrimoine architectural",
    ],
  },
  {
    slug: "une-maison-dans-le-paysage",
    img: "/assets/images/projet-05-foretlandes.jpg",
    images: ["/assets/images/projet-05-foretlandes.jpg"],
    cat: "Architecture, architecture d'intérieur & paysage",
    name: "Une Maison dans le Paysage",
    location: "Le Porge, Gironde, France",
    type: "Conception architecturale et paysagère",
    programme: "Jardin, piscine, terrasse, extension et construction neuve",
    surface: "148 m²",
    annee: "2026",
    wip: true,
  },
];
