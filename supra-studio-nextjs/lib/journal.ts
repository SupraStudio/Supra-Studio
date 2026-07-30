export type JournalArticle = {
  slug: string;
  title: string;
  // Titre optimisé pour la balise <title> (SEO), s'il diffère du H1 affiché. Sinon `title` est réutilisé.
  metaTitle?: string;
  excerpt: string;
  // Format ISO (YYYY-MM-DD) — utilisé pour le tri, l'affichage et les données structurées.
  date: string;
  category: string;
  cover: string;
  // Image utilisée pour le bandeau (hero) de la page détail. Si absente, on retombe sur `cover`.
  heroImage?: string;
  readingTime?: string;
  // Chapô affiché juste sous le H1, avant les sections.
  intro?: string;
  // Articles courts : paragraphes simples, sans sous-titres.
  content?: string[];
  // Articles longs : sections avec sous-titre H2 + paragraphes (comme les pages projet).
  // `image` optionnelle : illustration insérée à la fin de la section.
  sections?: {
    heading: string;
    paragraphs: string[];
    image?: { src: string; caption?: string };
  }[];
  keywords?: string[];
};

// Source de vérité en français. Les traductions EN/IT vivent dans journal.i18n.ts
// (même logique que lib/projects.ts / lib/projects.i18n.ts).
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "pourquoi-faire-appel-architecte-interieur-paris",
    title: "Pourquoi faire appel à un architecte d'intérieur à Paris ?",
    excerpt:
      "Rénovation, gain de temps, réseau d'artisans, valorisation du bien : découvrez pourquoi faire appel à un architecte d'intérieur à Paris change tout dans votre projet.",
    date: "2026-08-04",
    category: "Conseils & expertise",
    cover: "/assets/images/journal-architecte-interieur-paris.png",
    // Bandeau de la page détail : on reprend l'image du hero de la page Studio, pour la
    // cohérence visuelle entre le Journal et le reste du site.
    heroImage: "/assets/images/studio-hero-paris.jpg",
    readingTime: "6 min",
    sections: [
      {
        heading:
          "Un métier qui va bien au-delà du choix des couleurs et du mobilier",
        paragraphs: [
          "C'est sans doute l'idée reçue la plus tenace : on imagine l'architecte d'intérieur comme quelqu'un qui vient choisir une peinture ou assortir des coussins. En réalité, son travail commence bien avant — dans la compréhension de l'existant. Contraintes structurelles du bâti, circulation de la lumière naturelle, emplacement des réseaux (eau, électricité, ventilation), règles de copropriété : autant d'éléments techniques qu'un œil non averti ne sait pas toujours lire, et qui déterminent pourtant ce qu'il est réellement possible de faire dans un lieu.",
          "Un architecte d'intérieur conçoit un projet global — plans, volumes, matières, lumière, usages — avant de s'intéresser à la décoration. C'est cette vision d'ensemble qui distingue un intérieur pensé d'un intérieur simplement décoré.",
        ],
      },
      {
        heading: "Gagner du temps et éviter les erreurs coûteuses",
        paragraphs: [
          "À Paris, un projet de rénovation mal anticipé se traduit vite par des surprises : un mur porteur qu'on ne peut pas abattre, une cuisine qu'il faut déplacer à cause d'une évacuation existante, des travaux qui prennent deux fois plus de temps que prévu faute d'avoir été correctement séquencés.",
          "Un architecte d'intérieur identifie ces contraintes en amont, dès la phase d'étude de faisabilité, avant que le chantier ne commence. Ce travail préparatoire, souvent perçu comme une dépense supplémentaire, est en réalité ce qui évite les dépenses imprévues les plus importantes : reprises de travaux, changements de plan en cours de chantier, matériaux commandés puis finalement inadaptés.",
        ],
      },
      {
        heading: "Un accès à un réseau d'artisans et d'entreprises qualifiées",
        paragraphs: [
          "Trouver un artisan de confiance à Paris — disponible, compétent, capable de respecter un délai — reste l'un des points les plus chronophages d'un projet de rénovation mené seul. Un architecte d'intérieur travaille avec un réseau d'entreprises et d'artisans déjà éprouvés, choisis pour la qualité de leur travail autant que pour leur fiabilité.",
          "Cet accompagnement ne s'arrête d'ailleurs pas à la mise en relation : le suivi de chantier permet de vérifier que ce qui est réalisé correspond fidèlement à ce qui a été conçu, sans que le client ait à être présent sur site en permanence pour arbitrer chaque détail.",
        ],
      },
      {
        heading: "Valoriser durablement votre bien immobilier",
        paragraphs: [
          "Un intérieur bien pensé — qui optimise la lumière, fluidifie les circulations et exploite intelligemment chaque mètre carré — a un impact direct sur la valeur d'un bien, particulièrement dans un marché parisien où chaque mètre carré compte. À l'inverse, une rénovation mal conçue, même avec des matériaux de qualité, peut au mieux ne rien apporter, au pire desservir la revente future.",
          "Faire appel à un architecte d'intérieur, c'est donc aussi un choix patrimonial : celui d'un lieu conçu pour traverser le temps, plutôt que de suivre une tendance qui se démodera.",
        ],
      },
      {
        heading: "Un intérieur pensé pour votre mode de vie, pas pour un catalogue",
        paragraphs: [
          "Chaque foyer, chaque famille, chaque manière de recevoir ou de travailler chez soi est différente. Un bon architecte d'intérieur ne propose pas un style figé à appliquer partout : il construit une réponse sur-mesure, à partir de vos usages réels — la façon dont vous circulez dans votre logement, dont vous recevez, dont vous travaillez, dont vous vivez au quotidien.",
          "C'est cette dimension sur-mesure qui distingue un projet d'architecture intérieure d'un simple relooking : le lieu s'adapte à vous, pas l'inverse.",
        ],
      },
      {
        heading: "Pourquoi faire appel à Supra Studio ?",
        paragraphs: [
          "Chez Supra Studio, nous abordons chaque projet avec une conviction simple : la lumière et la justesse des matériaux suffisent, la plupart du temps, à transformer un lieu — sans artifice ni superflu. Notre studio, fondé par un duo franco-italien, réunit une double compétence en architecture d'intérieur et en architecture paysagère, une combinaison rare qui nous permet de penser vos espaces intérieurs et extérieurs comme un tout cohérent, plutôt que comme deux projets séparés.",
          "Concrètement, notre accompagnement se déroule en quatre étapes claires : une **visite conseil** pour comprendre votre espace et vos besoins avant tout engagement, une étude de **faisabilité** technique et budgétaire, une phase de **conception** où plans, volumes et matières prennent forme, puis un **suivi de travaux** rigoureux jusqu'à la livraison — avec notre réseau d'artisans et d'entreprises locales, choisis avec la même exigence à chaque projet.",
          "Basés entre Paris, Bordeaux et Rome, nous privilégions les matériaux naturels, les lignes épurées et une approche écoresponsable, pour des intérieurs sensibles et durables plutôt que suivant une mode passagère. Que votre projet soit une rénovation d'appartement, la conception d'une maison neuve ou l'aménagement d'un jardin, notre studio vous accompagne de la première esquisse à la réception du chantier.",
          "**Vous avez un projet de rénovation ou d'aménagement intérieur à Paris ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour une première visite conseil, ou [contactez-nous](/contact) pour en discuter.",
        ],
      },
    ],
    keywords: [
      "Architecte d'intérieur Paris",
      "Rénovation appartement Paris",
      "Conseils rénovation",
    ],
  },
  {
    slug: "continuite-visuelle-interieur-jardin-architecture-in-out",
    title: "Comment créer une continuité visuelle entre l'intérieur et le jardin ?",
    metaTitle: "Architecture In & Out : Créer une Continuité entre Intérieur et Jardin",
    excerpt:
      "Découvrez comment l'architecture d'intérieur et le design paysager s'unissent pour effacer les frontières entre maison et jardin. Conseils d'expert In & Out.",
    date: "2026-08-11",
    category: "Architecture d'Intérieur & Paysage",
    cover: "/assets/images/journal-in-out-jour.png",
    // Bandeau de la page détail : la version nocturne, plus spectaculaire, en écho au
    // dernier chapitre de l'article consacré à l'éclairage scénographique.
    heroImage: "/assets/images/journal-in-out-nuit.jpg",
    readingTime: "5 min",
    intro:
      "Effacer la frontière entre le cocon intérieur et le paysage extérieur est l'un des piliers de l'architecture contemporaine. Quand le séjour semble se prolonger sur la terrasse et que le jardin s'invite dans le salon, l'espace gagne en volume, en sérénité et en clarté. Décryptage d'une démarche de conception In & Out.",
    sections: [
      {
        heading: "L'Architecture In & Out : Redéfinir les limites de l'habiter",
        paragraphs: [
          "Pendant longtemps, l'architecture a pensé la maison et le jardin comme deux entités distinctes : l'intérieur pour le confort et l'abri, l'extérieur pour la nature et la détente. Aujourd'hui, l'approche globale In & Out renverse cette frontière rigide pour créer un espace de vie fluide et unifié.",
          "Créer une véritable continuité visuelle ne se résume pas à poser une baie vitrée. Il s'agit d'une orchestration minutieuse où les matériaux, la lumière, la palette végétale et la géométrie des pièces dialoguent pour offrir une sensation de respiration permanente.",
        ],
      },
      {
        heading: "1. L'alignement des sols : L'illusion d'un espace infini",
        paragraphs: [
          "Le premier vecteur de continuité est le sol. Lorsque le regard glisse sans interruption de la pièce de vie vers la terrasse, le cerveau perçoit immédiatement l'extérieur comme une extension naturelle du salon.",
          "**La continuité matérielle :** utiliser le même matériau — ou sa déclinaison adaptée aux intempéries — à l'intérieur et à l'extérieur. Un béton ciré d'intérieur associé à un béton désactivé coordonné, ou une pierre naturelle posée en opus à l'intérieur et déclinée en dalles antidérapantes sur la terrasse.",
          "**Le seuil encastré :** éliminer les ressauts visuels et physiques grâce à des baies coulissantes à galandage avec rails encastrés dans le sol. La transition devient parfaitement invisible.",
          "**La trame de pose :** conserver le même sens de pose pour les lames de parquet d'intérieur et les lames de terrasse en bois ou grès cérame extérieur.",
        ],
        image: {
          src: "/assets/images/journal-in-out-jour.png",
          caption: "Continuité du sol entre le séjour et la terrasse",
        },
      },
      {
        heading: "2. La palette chromatique et minérale comme fil conducteur",
        paragraphs: [
          "Pour que le jardin résonne avec votre décoration d'intérieur, la sélection des teintes et des textures doit faire l'objet d'un travail d'ensemble dès la phase de conception.",
          "En choisissant des matériaux nobles et sobres — comme le bois de chêne, la chaux brossée, le granit égrisé ou l'acier thermolaqué noir —, vous créez une toile de fond intemporelle. Reprendre les teintes des murs intérieurs sur les murets du jardin ou sur les façades ombragées du patio permet de lier subtilement le bâti à la nature environnante.",
        ],
      },
      {
        heading: "3. Scénographier le paysage depuis l'intérieur",
        paragraphs: [
          "Penser le jardin depuis le salon consiste à créer des « tableaux vivants ». Chaque ouverture devient un cadre qui met en valeur la composition paysagère.",
          "En plaçant un sujet végétal sculptural (un olivier millénaire, un érable du Japon au feuillage flamboyant ou un pin taillé en nuage) dans l'axe d'une baie vitrée ou d'un couloir de circulation, l'extérieur devient un élément décoratif dynamique évoluant au fil des saisons.",
          "*« Un jardin bien pensé ne se contemple pas seulement quand on y marche ; il habite la maison chaque jour de l'année. »*",
        ],
      },
      {
        heading: "4. L'éclairage scénographique : Fusionner les espaces de nuit",
        paragraphs: [
          "À la tombée du jour, si le jardin s'éteint, la baie vitrée se transforme en un miroir noir, refermant visuellement le salon sur lui-même. Un éclairage paysager bien étudié permet de conserver cette sensation d'espace même au cœur de la nuit.",
          "En éclairant avec sobriété des éléments cibles du jardin (un massif de graminées, un tronc d'arbre, un mur en pierre sèche), vous étirez la profondeur de champ depuis votre canapé. Privilégiez des lumières rasantes et chaudes (2700K à 3000K) pour préserver la magie du lieu sans éblouir.",
        ],
      },
      {
        heading: "Concevoir votre projet In & Out avec le Studio",
        paragraphs: [
          "Que ce soit pour la restructuration d'un appartement avec terrasse à Paris ou la conception d'une résidence principale, l'alliance de l'architecture d'intérieur et du design paysager est la clé d'un habitat d'exception.",
          "**Vous rêvez d'un lieu où l'intérieur et le jardin ne font qu'un ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour en discuter, ou [contactez-nous](/contact) pour nous présenter votre projet.",
        ],
      },
    ],
    keywords: ["Architecture In & Out", "Continuité intérieur extérieur", "Design paysager"],
  },
  {
    slug: "comment-vegetaliser-terrasse-rooftop-urbain-paris",
    title: "Comment végétaliser un rooftop ou une terrasse urbaine à Paris ?",
    metaTitle: "Aménager une Terrasse ou un Rooftop à Paris : Guide Design & Paysage",
    excerpt:
      "Comment végétaliser et aménager une terrasse ou un rooftop urbain à Paris ? Contraintes techniques, choix des plantes et mobilier sur-mesure.",
    date: "2026-08-18",
    category: "Design Paysager & Espaces Urbains",
    cover: "/assets/images/journal-rooftop-paris.png",
    heroImage: "/assets/images/journal-rooftop-paris.png",
    readingTime: "5 min",
    intro:
      "En milieu urbain, disposer d'une terrasse ou d'un rooftop est un privilège rare. Transformer ces mètres carrés en ciel ouvert en de véritables pépites végétales suspendues exige toutefois une maîtrise rigoureuse des contraintes techniques, climatiques et esthétiques.",
    sections: [
      {
        heading: "Les enjeux d'un aménagement paysager en hauteur",
        paragraphs: [
          "Aménager un rooftop à Paris ou dans une métropole ne s'improvise pas. Contrairement à un jardin en pleine terre, les espaces extérieurs en étage sont soumis à des contraintes structurelles strictes (charge au m², prise au vent, exposition solaire intense) et nécessitent des solutions sur-mesure.",
        ],
      },
      {
        heading: "1. Valider les contraintes techniques et de charge",
        paragraphs: [
          "Avant toute esquisse paysagère, l'étude de faisabilité technique est indispensable :",
          "**La capacité portante de la dalle :** déterminer le poids maximal autorisé au m² (terre saturée d'eau, jardinières, mobilier et usagers). Cette analyse conditionne le choix des bacs et de la densité des substrats.",
          "**L'étanchéité et l'évacuation des eaux :** préserver le support d'origine en intégrant des systèmes de drainage performants et des plots réglables sous le platelage.",
          "**La résistance au vent :** en hauteur, les vents sont amplifiés. Les structures (pergolas, claustras, arbres en bacs) doivent être ancrées et haubanées en toute sécurité.",
        ],
      },
      {
        heading: "2. Créer une bulle d'intimité sans occulter la vue",
        paragraphs: [
          "Le principal défi d'une terrasse parisienne réside dans la gestion des vis-à-vis tout en préservant les perspectives ouvertes sur la ville.",
          "Pour y parvenir, privilégiez un écran végétal dynamique plutôt qu'un mur occultant rigide. L'association de bambous non traçants (Fargesia), de graminées hautes (Miscanthus, Stipa) et d'arbustes à feuillage persistant crée un filtre végétal léger qui bouge sous la brise et préserve votre intimité avec élégance.",
        ],
        image: {
          src: "/assets/images/journal-rooftop-bordeaux.png",
          caption: "Bacs sur-mesure et vue sur les toits de Bordeaux",
        },
      },
      {
        heading: "3. Sélectionner une palette végétale résiliente et esthétique",
        paragraphs: [
          "Sur un rooftop, les plantes sont exposées à un microclimat exigeant : fort ensoleillement l'été, vent asséchant et volume de terre limité. Le choix des essences doit donc allier robustesse et beauté intemporelle.",
          "**Les feuillages persistants et structurants :** faux jasmin (Trachelospermum jasminoides) pour ses fleurs odorantes et son feuillage vert sombre, pins pignons nains, ou myrtes.",
          "**Les vivaces et graminées légères :** gauras, lavandes, sauges arbustives et pennisetums qui apportent du mouvement et de la légèreté.",
          "**L'arrosage automatique goutte-à-goutte :** équipement indispensable pour garantir la pérennité des plantations sans gaspillage d'eau.",
        ],
      },
      {
        heading: "4. Menuiseries sur-mesure et aménagement extérieur",
        paragraphs: [
          "Pour optimiser chaque mètre carré, le recours au sur-mesure est la clé. Dessiner des bacs en aluminium thermolaqué ou en acier corten intégrés aux garde-corps permet de maximiser l'espace au sol.",
          "L'intégration de bancs coffres en bois imputrescible (Ipé ou Kebony), d'une cuisine d'été discrète et d'un ombrage rétractable transforme la terrasse en une véritable pièce de vie supplémentaire, utilisable du printemps à l'automne.",
        ],
        image: {
          src: "/assets/images/journal-rooftop-rome.png",
          caption: "Cuisine d'été et pergola sur-mesure, rooftop à Rome",
        },
      },
      {
        heading: "Confiez votre rooftop aux experts du Studio",
        paragraphs: [
          "De la vérification des autorisations copropriété/urbanisme jusqu'à la plantation des dernières essences, notre équipe conçoit des terrasses d'exception sur-mesure.",
          "**Vous rêvez d'un rooftop ou d'une terrasse végétalisée sur-mesure ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour étudier la faisabilité de votre projet, ou [contactez-nous](/contact) pour nous en dire plus.",
        ],
      },
    ],
    keywords: ["Rooftop Paris", "Terrasse végétalisée", "Design paysager urbain"],
  },
];

export function getArticleBySlug(slug: string) {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}

// Articles triés du plus récent au plus ancien.
export function getSortedArticles() {
  return [...JOURNAL_ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
}
