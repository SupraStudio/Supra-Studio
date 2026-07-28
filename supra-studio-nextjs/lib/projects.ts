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
    img: "/assets/images/projet-02-chambre.jpg",
    images: [
      "/assets/images/projet-02-chambre.jpg",
      "/assets/images/projet-02-salon.jpg",
    ],
    cat: "Architecture & architecture d'intérieur",
    name: "Maison Kléber",
    location: "Bordeaux, Gironde, France",
    type: "Construction neuve",
    programme: "Maison familiale — loft inversé et rooftop",
    surface: "120 m²",
    annee: "2026",
    description: [
      "Cette rénovation complète d'un appartement bordelais a permis de redistribuer les espaces autour d'une circulation plus fluide, entre chambre, salon et bureau. Nous avons privilégié le bois clair, les rangements sur-mesure et une lumière naturelle abondante pour créer un lieu à la fois fonctionnel et apaisant.",
      "Chaque détail — de la bibliothèque intégrée au choix des luminaires — a été pensé pour accompagner le quotidien de ses habitants sur le long terme.",
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
  },
  {
    slug: "brasserie",
    img: "/assets/images/projet-03-cuisine.jpg",
    images: [
      "/assets/images/projet-03-cuisine.jpg",
      "/assets/images/projet-03-salon.jpg",
    ],
    cat: "Architecture d'intérieur",
    name: "Brasserie",
    location: "Paris, France",
    type: "Rénovation professionnelle complète",
    programme: "Salle de restauration, bar, cuisine principale et secondaire, sanitaires",
    surface: "205 m²",
    annee: "2026",
    description: [
      "Pour cette brasserie parisienne, nous avons dessiné un espace où marbre vert, laiton et bois habillent le comptoir et la salle, dans une ambiance à la fois chaleureuse et intemporelle. La circulation entre bar, cuisine ouverte et salle a été repensée pour fluidifier le service.",
      "Chaque matériau a été choisi pour vieillir avec élégance, dans un lieu pensé pour accueillir aussi bien un déjeuner rapide qu'un dîner prolongé.",
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
