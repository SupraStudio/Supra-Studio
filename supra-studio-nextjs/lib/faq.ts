export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

// Source de vérité en français. Les traductions EN/IT vivent dans faq.i18n.ts.
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "synergie-in-out",
    question:
      "Comment s'articule l'accompagnement combiné entre architecture d'intérieur et paysage ?",
    answer:
      "Nous concevons chaque projet comme un ensemble cohérent, où l'intérieur et l'extérieur se répondent dès les premières esquisses. Cette double compétence — architecture d'intérieur et architecture paysagère — nous permet de penser les circulations, les matières et la lumière d'un seul geste, qu'il s'agisse d'un appartement avec terrasse, d'une maison et de son jardin, ou d'un commerce ouvert sur la rue. Le résultat : une continuité visuelle et sensorielle entre les espaces habités, à l'intérieur comme au dehors.",
  },
  {
    id: "etapes-projet",
    question: "Quelles sont les grandes étapes d'un projet, de la conception à la livraison ?",
    answer:
      "Notre accompagnement se déroule en plusieurs temps clairement identifiés : une première rencontre et une étude de faisabilité pour cerner vos besoins et les contraintes du lieu, une phase de conception (esquisse puis avant-projet) où prennent forme les plans et les volumes, le choix des matériaux et des ambiances, puis la maîtrise d'œuvre et le suivi de chantier jusqu'à la livraison. Chaque étape est validée avec vous avant de passer à la suivante.",
  },
  {
    id: "honoraires-budget",
    question: "Comment sont calculés les honoraires de l'agence ?",
    answer:
      "Nos honoraires sont toujours établis sur-mesure, en fonction de la nature et de l'ampleur du projet. Pour une mission de maîtrise d'œuvre complète, ils sont généralement calculés en pourcentage du montant des travaux ; pour une mission de conception seule, nous proposons un forfait déterminé selon la typologie et la surface du bien. Ce montant vous est toujours communiqué clairement avant tout engagement, à l'issue de la visite conseil.",
  },
  {
    id: "suivi-chantier",
    question: "L'agence assure-t-elle la maîtrise d'œuvre et la coordination des travaux ?",
    answer:
      "Oui. Au-delà de la conception, nous assurons le suivi rigoureux du chantier auprès des entreprises et artisans que nous mobilisons pour votre projet — un réseau de professionnels locaux déjà éprouvés, choisis avec la même exigence à chaque mission. Notre présence régulière sur site permet de veiller au respect des délais, du budget et de la fidélité du chantier au projet imaginé.",
  },
  {
    id: "zone-intervention",
    question: "Dans quelles régions ou villes l'agence intervient-elle ?",
    answer:
      "Notre studio est basé entre Paris, Bordeaux et Rome, et intervient sur des projets résidentiels et commerciaux dans ces trois territoires comme au-delà, en France et à l'international, selon la nature du projet. N'hésitez pas à nous contacter pour évoquer la faisabilité d'un accompagnement à distance de votre lieu.",
  },
  {
    id: "difference-architecte-architecte-interieur",
    question: "Quelle est la différence entre un architecte et un architecte d'intérieur ?",
    answer:
      "L'architecte intervient principalement sur l'enveloppe extérieure du bâtiment et est seul habilité à déposer un permis de construire au-delà de certains seuils de surface. L'architecte d'intérieur, comme notre studio, se concentre sur l'aménagement, les volumes intérieurs, les matériaux et les usages — avec une connaissance fine des contraintes techniques (structure, réseaux, normes). Pour les projets nécessitant un permis de construire, nous travaillons main dans la main avec des architectes partenaires, afin que vous n'ayez qu'un seul interlocuteur pour l'ensemble du projet.",
  },
  {
    id: "duree-projet",
    question: "Combien de temps dure un projet de rénovation ou d'aménagement ?",
    answer:
      "La durée dépend de l'ampleur du projet. Pour une rénovation d'appartement, comptez généralement de 2 à 4 mois de conception, puis de 3 à 6 mois de chantier selon la surface et la nature des travaux. Pour un aménagement paysager ou une construction neuve, les délais sont variables et sont précisés dès l'étude de faisabilité. Nous établissons toujours un calendrier prévisionnel avec vous avant le début du chantier, afin que vous sachiez à quoi vous attendre à chaque étape.",
  },
  {
    id: "garanties-assurances",
    question: "Le studio est-il couvert par des garanties et assurances professionnelles ?",
    answer:
      "Oui. En tant que maître d'œuvre, notre studio est couvert par une assurance responsabilité civile professionnelle, qui garantit la qualité de nos prestations de conception et de suivi de chantier. Les entreprises et artisans que nous mobilisons sur vos chantiers sont, de leur côté, couverts par la garantie décennale obligatoire pour les travaux de construction et de gros œuvre — nous vérifions systématiquement la validité de ces attestations avant le démarrage de tout chantier. Vous avancez ainsi à chaque étape de votre projet en toute sérénité.",
  },
  {
    id: "petits-projets",
    question: "Le studio intervient-il uniquement sur de grands projets haut de gamme ?",
    answer:
      "Pas nécessairement. Si nos réalisations mettent en avant des projets d'exception, nous étudions chaque demande avec la même attention, quelle que soit l'ampleur du projet envisagé. La visite conseil initiale nous permet d'évaluer ensemble si notre accompagnement correspond à vos besoins.",
  },
  {
    id: "autorisations-urbanisme",
    question: "Le studio s'occupe-t-il des démarches d'autorisation (copropriété, urbanisme) ?",
    answer:
      "Oui. Avant tout lancement de chantier, nous vérifions les autorisations nécessaires — accord de copropriété, déclaration préalable de travaux ou permis de construire selon l'ampleur du projet — et vous accompagnons dans la constitution des dossiers. Cette étape, souvent perçue comme fastidieuse, fait partie intégrante de notre mission de maîtrise d'œuvre : vous n'avez pas à la gérer seul.",
  },
];
