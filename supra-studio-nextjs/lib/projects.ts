export type Project = {
  img: string;
  cat: string;
  name: string;
  location: string;
  wip?: boolean;
};

export const PROJECTS: Project[] = [
  {
    img: "/assets/images/projet-01-exterieur.jpg",
    cat: "Paysage",
    name: "Giardino De Ninno",
    location: "Sabaudia, Latina, Italia",
  },
  {
    img: "/assets/images/projet-02-chambre.jpg",
    cat: "Architecture & architecture d'intérieur",
    name: "Maison Kléber",
    location: "Bordeaux, Gironde, France",
  },
  {
    img: "/assets/images/projet-04-casaduy.jpg",
    cat: "Architecture d'intérieur",
    name: "Casa Duy",
    location: "Rome, Lazio, Italia",
  },
  {
    img: "/assets/images/projet-03-cuisine.jpg",
    cat: "Architecture d'intérieur",
    name: "Brasserie",
    location: "Paris, France",
  },
  {
    img: "/assets/images/projet-05-foretlandes.jpg",
    cat: "Architecture, architecture d'intérieur & paysage",
    name: "Une Maison dans le Paysage",
    location: "Le Porge, Gironde, France",
    wip: true,
  },
];
