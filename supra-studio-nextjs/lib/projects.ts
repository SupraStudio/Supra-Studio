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
    surface: "450 m²",
    annee: "2024",
    description: [
      "Niché entre pins parasols et essences méditerranéennes, ce jardin prolonge une villa familiale près de Sabaudia. Nous avons pensé chaque séquence — pergola, piscine, terrasse ombragée — comme une pièce à part entière de la maison, où la limite entre intérieur et extérieur s'efface.",
      "La palette végétale, choisie pour résister au climat local et évoluer avec les saisons, s'accorde aux matériaux en terre cuite et à la pierre existante, pour un jardin qui semble avoir toujours été là.",
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
    type: "Rénovation complète",
    programme: "Appartement — chambre, salon et bureau",
    surface: "85 m²",
    annee: "2024",
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
    type: "Aménagement intérieur",
    programme: "Salon et salle à manger d'un appartement particulier",
    surface: "70 m²",
    annee: "2023",
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
    type: "Aménagement commercial",
    programme: "Salle, bar et cuisine ouverte d'une brasserie",
    surface: "180 m²",
    annee: "2023",
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
    type: "Construction neuve",
    programme: "Maison individuelle et aménagement paysager",
    surface: "160 m²",
    annee: "En cours",
    wip: true,
  },
];
