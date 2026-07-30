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
  // `image` optionnelle : illustration insérée dans la section.
  // `afterParagraph` (index 0-based) place l'image juste après ce paragraphe précis ;
  // sans cet index, l'image est insérée à la fin de la section (comportement par défaut).
  sections?: {
    heading: string;
    paragraphs: string[];
    image?: { src: string; caption?: string; afterParagraph?: number };
  }[];
  keywords?: string[];
  // Slugs des projets (lib/projects.ts) en lien thématique avec l'article, affichés en
  // bas de la page détail.
  relatedProjects?: string[];
  // Si true, l'article reste toujours en tête de la liste du Journal, quelle que soit sa date.
  pinned?: boolean;
};

// Source de vérité en français. Les traductions EN/IT vivent dans journal.i18n.ts
// (même logique que lib/projects.ts / lib/projects.i18n.ts).
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "pourquoi-faire-appel-architecte-interieur-paris",
    title: "Pourquoi faire appel à un architecte d'intérieur à Paris ?",
    excerpt:
      "Rénovation, gain de temps, réseau d'artisans, valorisation du bien : découvrez pourquoi faire appel à un architecte d'intérieur à Paris change tout dans votre projet.",
    date: "2026-07-28",
    category: "Conseils & expertise",
    cover: "/assets/images/architectes-echange-materiaux-projet-paris.png",
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
        image: {
          src: "/assets/images/paul-beatrice-fondateurs-supra-studio.jpg",
          caption: "Paul et Beatrice, fondateurs de Supra Studio",
          afterParagraph: 0,
        },
      },
    ],
    keywords: [
      "Architecte d'intérieur Paris",
      "Rénovation appartement Paris",
      "Conseils rénovation",
    ],
    relatedProjects: ["casa-duy", "maison-kleber"],
    pinned: true,
  },
  {
    slug: "continuite-visuelle-interieur-jardin-architecture-in-out",
    title: "Comment créer une continuité visuelle entre l'intérieur et le jardin ?",
    metaTitle: "Architecture In & Out : Créer une Continuité entre Intérieur et Jardin",
    excerpt:
      "Découvrez comment l'architecture d'intérieur et le design paysager s'unissent pour effacer les frontières entre maison et jardin. Conseils d'expert In & Out.",
    date: "2026-07-14",
    category: "Architecture d'Intérieur & Paysage",
    cover: "/assets/images/continuite-interieur-jardin-terrasse-jour.png",
    // Bandeau de la page détail : la version nocturne, plus spectaculaire, en écho au
    // dernier chapitre de l'article consacré à l'éclairage scénographique.
    heroImage: "/assets/images/continuite-interieur-jardin-eclairage-nuit.jpg",
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
          src: "/assets/images/continuite-interieur-jardin-terrasse-jour.png",
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
        image: {
          src: "/assets/images/continuite-interieur-jardin-eclairage-nuit.jpg",
          caption: "Le jardin mis en scène par la lumière, à la tombée de la nuit",
        },
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
    relatedProjects: ["giardino-de-ninno"],
  },
  {
    slug: "comment-vegetaliser-terrasse-rooftop-urbain-paris",
    title: "Comment végétaliser un rooftop ou une terrasse urbaine à Paris ?",
    metaTitle: "Aménager une Terrasse ou un Rooftop à Paris : Guide Design & Paysage",
    excerpt:
      "Comment végétaliser et aménager une terrasse ou un rooftop urbain à Paris ? Contraintes techniques, choix des plantes et mobilier sur-mesure.",
    date: "2026-06-30",
    category: "Design Paysager & Espaces Urbains",
    cover: "/assets/images/rooftop-vegetalise-paris-tour-eiffel.png",
    heroImage: "/assets/images/rooftop-vegetalise-paris-tour-eiffel.png",
    readingTime: "5 min",
    intro:
      "En milieu urbain, disposer d'une terrasse ou d'un rooftop est un privilège rare. Transformer ces mètres carrés en ciel ouvert en de véritables pépites végétales suspendues exige toutefois une maîtrise rigoureuse des contraintes techniques, climatiques et esthétiques.",
    sections: [
      {
        heading: "Les enjeux d'un aménagement paysager en hauteur",
        paragraphs: [
          "Aménager un rooftop à Paris ou dans une métropole ne s'improvise pas. Contrairement à un jardin en pleine terre, les espaces extérieurs en étage sont soumis à des contraintes structurelles strictes (charge au m², prise au vent, exposition solaire intense) et nécessitent des solutions sur-mesure.",
        ],
        image: {
          src: "/assets/images/rooftop-vegetalise-paris-tour-eiffel.png",
          caption: "Rooftop végétalisé avec vue sur la tour Eiffel",
        },
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
          src: "/assets/images/rooftop-bordeaux-vue-cathedrale.png",
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
          src: "/assets/images/rooftop-rome-cuisine-ete-colisee.png",
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
    relatedProjects: ["giardino-de-ninno"],
  },
  {
    slug: "renovation-appartement-ancien-patrimoine-contemporain",
    title: "Rénovation d'un appartement ancien : Réussir l'alliance du patrimoine et du contemporain",
    metaTitle: "Rénovation d'Appartement Ancien : Allier Patrimoine et Modernité",
    excerpt:
      "Comment rénover un appartement haussmannien ou ancien à Paris ? Conservation des moulures, agencement contemporain et matériaux nobles.",
    date: "2026-08-04",
    category: "Rénovation & Architecture d'Intérieur",
    cover: "/assets/images/renovation-appartement-ancien-salon-cheminee-marbre-paris.jpg",
    readingTime: "5 min",
    intro:
      "Parquets Point de Hongrie, moulures sculptées, cheminées en marbre et belles hauteurs sous plafond : le charme de l'ancien demeure une valeur sûre. Comment sublimer cet héritage architectural tout en l'adaptant aux modes de vie contemporains ?",
    sections: [
      {
        heading: "Sublimer l'histoire sans la figer",
        paragraphs: [
          "Rénover un appartement haussmannien ou ancien nécessite un équilibre délicat. Il ne s'agit ni de transformer le lieu en musée nostalgique, ni de gommer son histoire par un minimalisme froid. L'enjeu est de faire dialoguer le vocabulaire classique avec des lignes architecturales sur-mesure, épurées et fonctionnelles.",
        ],
      },
      {
        heading: "1. Restaurer et mettre en valeur les éléments d'origine",
        paragraphs: [
          "Avant d'insérer des éléments contemporains, la première étape d'un projet de rénovation réussi réside dans la sauvegarde de l'existant :",
          "**Les parquets anciens :** conservation, ponçage à blanc et protection par des huiles mat ou des vernis invisibles pour restaurer la patine d'origine.",
          "**Les moulures et stucs :** réparation artisanale des ornements en plâtre endommagés par le temps ou les anciennes cloisons.",
          "**Les cheminées et miroirs dorés :** restauration du marbre et intégration comme pièces maîtresses dans la nouvelle scénographie.",
        ],
        image: {
          src: "/assets/images/renovation-appartement-haussmannien-chantier-moulures-paris.jpg",
          caption: "Chantier de restauration d'un appartement ancien, moulures et parquet Point de Hongrie",
        },
      },
      {
        heading: "2. Redéfinir les volumes pour la vie d'aujourd'hui",
        paragraphs: [
          "Les appartements du XIXe siècle étaient conçus selon une distribution très cloisonnée (enfilade de salons, pièces de service isolées). La rénovation contemporaine vise à réintroduire de la fluidité et de la clarté.",
          "L'ouverture de grands espaces de vie (séjour/cuisine) se fait grâce à la dépose de cloisons non porteuses ou à la création d'ouvertures sous IPN. Pour conserver la mémoire des pièces d'origine, on conserve au plafond les retombées de moulures qui marquent subtilement les anciennes limites.",
        ],
      },
      {
        heading: "3. La menuiserie sur-mesure comme trait d'union",
        paragraphs: [
          "L'insertion d'agencements sur-mesure au design très épuré (bibliothèques intégrées, dressing toute hauteur, îlots de cuisine minéraux) offre un contraste saisissant et élégant avec l'enveloppe classique.",
          "En dessinant des meubles qui s'alignent parfaitement avec les soubassements ou qui s'arrêtent à quelques centimètres des moulures sans jamais les étouffer, on crée un dialogue harmonieux entre le savoir-faire ébéniste d'aujourd'hui et l'artisanat d'autrefois.",
        ],
        image: {
          src: "/assets/images/renovation-appartement-ancien-cuisine-ilot-marbre-paris.jpg",
          caption: "Îlot de cuisine minéral intégré dans une rénovation d'appartement ancien",
        },
      },
      {
        heading: "4. Moderniser le confort technique en toute discrétion",
        paragraphs: [
          "L'un des plus grands défis de l'architecture d'intérieur dans l'ancien concerne l'intégration des équipements modernes sans altérer l'esthétique :",
          "**Passage encastré des réseaux électriques et de plomberie.**",
          "**Intégration de climatisations invisibles ou de réseaux de ventilation gainés dans des faux-plafonds partiels.**",
          "**Scénographie lumineuse combinant éclairage d'ambiance indirect (gorges lumineuses) et spots orientables discrets pour mettre en valeur les hauteurs.**",
        ],
      },
      {
        heading: "Votre projet de rénovation avec notre Studio",
        paragraphs: [
          "Notre studio d'architecture d'intérieur accompagne les propriétaires exigeants dans la restructuration globale et la valorisation d'appartements d'exception.",
          "**Vous souhaitez rénover un appartement ancien ou haussmannien ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour une première visite conseil, ou [contactez-nous](/contact) pour en discuter.",
        ],
      },
    ],
    keywords: ["Rénovation appartement ancien", "Appartement haussmannien", "Patrimoine architectural"],
    relatedProjects: ["brasserie", "casa-duy"],
  },
  {
    slug: "cuisine-ouverte-haut-de-gamme-agencement-sur-mesure",
    title: "Cuisine ouverte sur-mesure : L'art de l'intégrer dans une pièce de vie haut de gamme",
    metaTitle: "Cuisine Ouverte Haut de Gamme : Agencement & Luxe Sur-Mesure",
    excerpt:
      "Comment intégrer une cuisine ouverte sur-mesure dans une pièce de vie haut de gamme ? Matériaux nobles, îlot central minéral et électroménager invisible.",
    date: "2026-08-11",
    category: "Architecture d'Intérieur & Agencement",
    cover: "/assets/images/cuisine-ouverte-sur-mesure-salon-vue-paris.jpg",
    readingTime: "5 min",
    intro:
      "Longtemps reléguée aux fonctions purement techniques, la cuisine s'impose désormais comme le cœur battant de l'habitat contemporain. Lorsqu'elle s'ouvre sur le séjour, l'enjeu architectural consiste à effacer son caractère utilitaire pour en faire un objet de design d'exception, parfaitement intégré au vocabulaire de la pièce de vie.",
    sections: [
      {
        heading: "Redéfinir la cuisine : Du fonctionnel à la pièce maîtresse",
        paragraphs: [
          "Dans une rénovation résidentielle haut de gamme, ouvrir la cuisine ne signifie pas simplement abattre un mur. C'est repenser l'équilibre visuel, la gestion des odeurs et du bruit, ainsi que la circulation globale. La cuisine doit savoir se faire discrète lors des réceptions tout en offrant un confort d'usage absolu au quotidien.",
        ],
      },
      {
        heading: "1. L'îlot central monolithique : Sculpture minérale et point de rassemblement",
        paragraphs: [
          "L'îlot central est la pièce maîtresse de la cuisine ouverte. Pour préserver l'élégance du séjour, le parti pris architectural s'oriente vers des formes affirmées et des matières d'exception.",
          "**Les blocs de pierre naturelle :** marbre de Calacatta, quartzite ou travertin adouci façonnés en monobloc. La continuité du veinage sur les retombées en cascade apporte une dimension sculpturale.",
          "**Le dialogue avec le mobilier d'art :** l'îlot ne doit plus ressembler à un meuble technique, mais répondre aux lignes de la table à manger ou du buffet du salon.",
          "**Les fonctions dissimulées :** plaques d'induction à aspiration intégrée à la table de cuisson pour supprimer la hotte suspendue traditionnelle et libérer totalement les perspectives visuelles.",
        ],
        image: {
          src: "/assets/images/cuisine-ouverte-piece-de-vie-salon-rome.jpg",
          caption: "L'îlot de cuisine en dialogue avec le mobilier de la pièce de vie",
        },
      },
      {
        heading: "2. Le concept de « Cuisine Invisible » : Agencements toute hauteur",
        paragraphs: [
          "Pour fondre la cuisine dans le décor de l'appartement ou de la maison, la menuiserie sur-mesure joue un rôle prépondérant.",
          "Le principe des **façades à portes escamotables (système à galandage)** permet de dissimuler l'électroménager, la zone de lavage et le petit électroménager derrière de grands panneaux toute hauteur en bois noble (chêne fumé, noyer d'Amérique, laque satinée). Une fois les portes fermées, la cuisine s'efface complètement au profit d'un mur d'agencement épuré.",
        ],
      },
      {
        heading: "3. Matériaux nobles et transition de sol",
        paragraphs: [
          "Pour réussir la jonction entre le séjour et la cuisine :",
          "**L'harmonie des sols :** soit en prolongeant le parquet en point de Hongrie dans la zone cuisine grâce à des traitements de surface haute résistance, soit en créant un calepinage sur-mesure en incrustant une pierre naturelle ou un terrazzo dans le bois.",
          "**La crédence comme œuvre d'art :** utilisation de laiton brossé, de miroir vieilli à la feuille ou de céramique artisanale pour refléter la lumière du séjour.",
        ],
        image: {
          src: "/assets/images/cuisine-ouverte-bois-sur-mesure-famille.jpg",
          caption: "Matériaux nobles et bois sur-mesure dans une cuisine ouverte familiale",
        },
      },
      {
        heading: "4. Éclairage : Passer du mode préparation au mode réception",
        paragraphs: [
          "L'éclairage d'une cuisine ouverte doit être modulable :",
          "**Un éclairage fonctionnel ciblé :** rubans LED invisibles intégrés sous les meubles hauts pour éclairer le plan de travail de manière homogène.",
          "**Un éclairage d'ambiance théâtral :** suspensions design au-dessus de l'îlot et spots encastrés basse luminance pour créer une atmosphère chaleureuse et intimiste dès que le repas est servi.",
        ],
      },
      {
        heading: "Votre projet d'agencement sur-mesure avec le Studio",
        paragraphs: [
          "Chaque cuisine dessinée par notre studio est une création unique, conçue sur-mesure en collaboration avec nos artisans ébénistes et marbriers.",
          "**Vous imaginez une cuisine ouverte sur-mesure pour votre pièce de vie ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour en discuter, ou [contactez-nous](/contact) pour nous présenter votre projet.",
        ],
      },
    ],
    keywords: ["Cuisine ouverte sur-mesure", "Agencement haut de gamme", "Îlot central marbre"],
    relatedProjects: ["maison-kleber", "casa-duy"],
  },
  {
    slug: "suite-parentale-haut-de-gamme-dressing-salle-de-bains",
    title: "Concevoir une suite parentale d'exception : L'alliance du confort et du sur-mesure",
    metaTitle: "Concevoir une Suite Parentale d'Exception : Luxe, Dressing & Bains",
    excerpt:
      "Comment aménager une suite parentale haut de gamme ? Organisation de l'espace, dressing sur-mesure et salle de bains d'hôtel particulier.",
    date: "2026-08-18",
    category: "Architecture d'Intérieur & Espaces Privés",
    cover: "/assets/images/suite-parentale-chambre-parisienne-salle-de-bain-marbre.jpg",
    readingTime: "5 min",
    intro:
      "Véritable sanctuaire privé au cœur de l'habitat, la suite parentale a profondément évolué. Loin de la simple chambre avec salle d'eau attenante, elle est aujourd'hui pensée comme une suite d'hôtel particulier : un espace fluide et intime regroupant nuit, dressing sur-mesure et salle de bains bien-être.",
    sections: [
      {
        heading: "Repenser la suite parentale comme un espace fluide",
        paragraphs: [
          "L'agencement d'une suite parentale réussie repose sur la circulation. Les frontières s'allègent : les portes battantes traditionnelles s'effacent au profit de claustras en bois, de verrières en métal patiné ou de cloisons japonaises coulissantes, permettant à la lumière de traverser toute la profondeur du volume.",
        ],
      },
      {
        heading: "1. La tête de lit architecturale : Élément fondateur de la chambre",
        paragraphs: [
          "Dans la zone nuit, la tête de lit dessinée par l'architecte d'intérieur structure la pièce :",
          "**Intégration multi-fonctions :** elle intègre dans une même composition en menuiserie les chevets suspendus, les liseuses encastrées, les prises invisibles et les niches d'exposition.",
          "**Matières enveloppantes :** utilisation de panneaux en bois cannelé, de velours tendus acoustiques ou de peintures à la chaux pour apporter du relief et une sensation de cocon apaisant.",
        ],
      },
      {
        heading: "2. Le dressing sur-mesure : L'élégance de la haute couture",
        paragraphs: [
          "Un dressing haut de gamme ne se contente pas de ranger : il met en scène la garde-robe.",
          "**Menuiseries intérieures :** utilisation d'essences de bois chaleureuses (noyer, frêne teinté) associées à des inserts en cuir ou en suédine dans les tiroirs d'accessoires.",
          "**Jeux de transparence :** façades en verre teinté vitré avec structures aluminium ultra-fines pour laisser deviner les pièces sans charger visuellement l'espace.",
          "**Mise en lumière intégrée :** éclairage LED indirect à détection de présence sous chaque étagère pour un confort visuel digne des plus grandes maisons de luxe.",
        ],
        image: {
          src: "/assets/images/suite-parentale-dressing-sur-mesure-baignoire-ilot.jpg",
          caption: "Dressing sur-mesure et salle de bains ouverte, suite parentale",
        },
      },
      {
        heading: "3. La salle de bains : Une expérience spa à domicile",
        paragraphs: [
          "La salle de bains de la suite parentale devient un lieu de ressourcement.",
          "**Baignoire îlot sculpturale ou douche à l'italienne XXL :** intégration de receveurs affleurants en pierre naturelle avec banc maçonné et ciel de pluie encastré au plafond.",
          "**Matériaux minéraux et durables :** terrazzo grand format, travertin adouci, robinetterie encastrée en finition bronze ou laiton brossé.",
          "**Gestion de la ventilation et de la lumière :** intégration discrète des équipements techniques et valorisation de la lumière naturelle par des verrières dépolies ou du verre strié.",
        ],
        image: {
          src: "/assets/images/suite-parentale-salle-de-bain-terre-cuite-douche-italienne.jpg",
          caption: "Douche à l'italienne et matériaux naturels, salle de bains suite parentale",
        },
      },
      {
        heading: "Créer votre cocon privé avec notre Studio",
        paragraphs: [
          "De la redistribution des volumes jusqu'au choix du moindre textile, notre équipe d'architectes d'intérieur conçoit des suites parentales d'exception adaptées à votre rythme de vie.",
          "**Vous rêvez d'une suite parentale sur-mesure ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour en discuter, ou [contactez-nous](/contact) pour nous présenter votre projet.",
        ],
      },
    ],
    keywords: ["Suite parentale", "Dressing sur-mesure", "Salle de bains luxe"],
    relatedProjects: ["maison-kleber", "casa-duy"],
  },
  {
    slug: "renovation-globale-appartement-maison-architecture-interieur",
    title: "Rénovation globale d'exception : Redessiner l'art de vivre et valoriser le patrimoine",
    metaTitle: "Rénovation Globale d'Appartement & Maison : Guide d'Architecture d'Intérieur",
    excerpt:
      "Comment aborder la rénovation globale et la restructuration complète d'un bien d'exception ? Processus, redistribution des volumes et valeur patrimoniale.",
    date: "2026-08-25",
    category: "Rénovation & Architecture d'Intérieur",
    cover: "/assets/images/renovation-globale-maitrise-oeuvre-architecte-client.jpg",
    heroImage: "/assets/images/renovation-globale-chantier-restructuration-appartement.jpg",
    readingTime: "6 min",
    intro:
      "S'engager dans la rénovation globale d'un appartement ou d'une maison d'exception dépasse la simple remise au goût du jour. C'est l'opportunité de repenser intégralement l'expérience de l'habitat, d'adapter un lieu à un mode de vie contemporain et d'en pérenniser la valeur patrimoniale par des choix d'agencement et de matériaux exigeants.",
    sections: [
      {
        heading: "La rénovation globale : Une vision d'ensemble indispensable",
        paragraphs: [
          "Entreprendre des travaux pièce par pièce mène souvent à une fragmentation visuelle et technique. À l'inverse, la restructuration complète orchestrée par un architecte d'intérieur permet de poser un diagnostic global sur le bien : flux de circulation, apport de lumière naturelle, logique structurelle et cohérence esthétique d'un bout à l'autre de l'espace.",
        ],
      },
      {
        heading: "1. La redistribution des volumes : Libérer le potentiel spatial",
        paragraphs: [
          "Chaque lieu possède sa propre écriture architecturale. Le premier rôle de l'architecte d'intérieur consiste à lire cette structure d'origine pour en révéler tout le potentiel.",
          "**La rationalisation des espaces :** éliminer les mètres carrés perdus (couloirs sombres, dégagements superflus) pour agrandir les pièces de réception et créer des perspectives traversantes.",
          "**Le travail sur la lumière naturelle :** repenser l'orientation des fonctions selon la course du soleil, créer des verrières sur-mesure ou insérer des cloisons légères qui laissent filer le jour.",
          "**La hiérarchisation des zones :** marquer une séparation fluide mais claire entre les espaces de réception (salon, salle à manger, cuisine) et la sphère intime (chambres, dressing, suites).",
        ],
      },
      {
        heading: "2. L'intégration invisible de la technique et du confort",
        paragraphs: [
          "La marque d'une rénovation haut de gamme réside dans ce qui ne se voit pas. Les performances techniques s'intègrent de manière totalement imperceptible pour laisser toute la place à l'esthétique.",
          "**L'isolation et l'efficience énergétique :** amélioration des performances thermiques et acoustiques (doublages isolants hautes performances, menuiseries extérieures sur-mesure respectant les contraintes d'urbanisme).",
          "**La domotique et la scénographie lumineuse :** gestion centralisée des ambiances, dissimulation des réseaux électriques et intégration discrète d'éclairages indirects (gorges lumineuses, fentes encastrées).",
          "**Le confort climatique :** intégration invisible des systèmes de chauffage et de rafraîchissement d'air au sein des faux-plafonds ou des menuiseries d'agencement.",
        ],
      },
      {
        heading: "3. La continuité des matières : Créer une signature visuelle unifiée",
        paragraphs: [
          "Pour offrir une sensation d'apaisement et d'harmonie globale, le choix des matériaux répond à un fil conducteur rigoureux.",
          "Plutôt que d'accumuler des effets de style différents dans chaque pièce, la rénovation globale privilégie une palette restreinte de matières nobles et intemporelles — parquets en bois massif, enduits à la chaux, pierres naturelles, laiton brossé — déclinée avec subtilité à travers l'ensemble du projet.",
        ],
      },
      {
        heading: "4. De l'esquisse au suivi de chantier : La maîtrise d'œuvre rigoureuse",
        paragraphs: [
          "Mener à bien une rénovation complète exige une méthode d'accompagnement éprouvée :",
          "**Phase de conception (APS/APD) :** plans 2D, modélisations 3D, choix des matériaux et chiffrage détaillé.",
          "**Consultation et sélection des artisans :** mobilisation d'un réseau de compagnons et d'entreprises qualifiées pour chaque corps d'état.",
          "**Maîtrise d'œuvre et suivi de chantier :** coordination rigoureuse des plannings, contrôle de la qualité d'exécution et respect des engagements budgétaires jusqu'à la livraison clé en main.",
        ],
        image: {
          src: "/assets/images/renovation-globale-suivi-chantier-artisans-cuisine.jpg",
          caption: "Suivi de chantier et coordination des artisans, rénovation globale",
        },
      },
      {
        heading: "Confier votre projet de rénovation globale au Studio",
        paragraphs: [
          "Que vous veniez d'acquérir un bien à restructurer ou que vous souhaitiez métamorphoser votre résidence actuelle, notre agence d'architecture d'intérieur conçoit des projets sur-mesure façonnés pour durer.",
          "**Vous avez un projet de rénovation globale ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour une première visite conseil, ou [contactez-nous](/contact) pour en discuter.",
        ],
      },
    ],
    keywords: ["Rénovation globale", "Restructuration appartement", "Maîtrise d'œuvre"],
    relatedProjects: ["casa-duy", "maison-kleber"],
  },
  {
    slug: "vision-architecturale-volumes-lumiere-matiere",
    title: "Sculpter l'espace : Quand la vision architecturale transcende l'intérieur",
    metaTitle: "L'Architecture d'Intérieur : Sculpture des Volumes, Lumière & Matière",
    excerpt:
      "Comment la vision architecturale transforme un espace ? Découvrez l'art de sculpter les volumes, d'apprivoiser la lumière et d'orchestrer les matières nobles.",
    date: "2026-09-01",
    category: "Vision & Architecture d'Intérieur",
    cover: "/assets/images/architecture-interieur-volumes-lumiere-escalier-suspendu.jpg",
    readingTime: "6 min",
    intro:
      "Au-delà de l'agencement et de l'ameublement, l'architecture d'intérieur s'attache à la substance même du lieu. Elle n'habille pas des pièces existantes : elle orchestre les vides, façonne les volumes et capture la lumière pour créer des lieux de vie qui suscitent une émotion durable.",
    sections: [
      {
        heading: "1. La volumétrie : Jouer avec les pleins et les vides",
        paragraphs: [
          "Chaque projet d'architecture commence par une lecture tridimensionnelle de l'espace. Avant même d'envisager la moindre couleur, l'enjeu est de définir des proportions justes.",
          "**La verticalité et la hauteur sous plafond :** valoriser les volumes par des éléments verticaux toute hauteur (portes toute hauteur sans imposte, menuiseries intégrées, claustras géométriques) qui étirent le regard.",
          "**Le travail du vide :** savoir préserver des espaces d'air et de respiration. Dans une architecture contemporaine haut de gamme, le vide n'est pas un manque, mais un élément de composition à part entière qui met en valeur les pièces maîtresses.",
          "**Les perspectives et alignements :** créer des enfilades visuelles et des axes de fuite clairs qui traversent l'appartement ou la maison de part en part.",
        ],
      },
      {
        heading: "2. La lumière comme matériau de construction",
        paragraphs: [
          "La lumière n'est pas un simple apport fonctionnel ; c'est le matériau le plus vivant de l'architecte. Elle révèle les textures, transforme les teintes au fil des heures et rythme la journée.",
          "**La captation du jour :** repenser les ouvertures, utiliser des verrières architecturales sur-mesure ou du verre texturé pour diffuser une lumière douce dans les zones aveugles.",
          "**L'éclairage architectural nocturne :** bannir le point lumineux central unique au profit d'une scénographie lumineuse invisible. L'intégration de gorges lumineuses, de fentes encastrées et de spots basse luminance permet de sculpter les formes dès le crépuscule.",
        ],
        image: {
          src: "/assets/images/architecture-interieur-matiere-cuisine-travertin-oliviers.jpg",
          caption: "La lumière naturelle sublime la matière, cuisine ouverte sur une oliveraie",
        },
      },
      {
        heading: "3. La vérité de la matière : L'éloge du brut et du noble",
        paragraphs: [
          "L'architecture contemporaine s'éloigne des artifices pour célébrer la noblesse des matières texturées et pérennes.",
          "L'association de surfaces minérales (pierre naturelle adoucie, béton architectonique, enduits à la chaux ou à l'argile) et de touches chaleureuses (bois massif, laiton patiné, textiles en lin brut) crée une tension visuelle élégante. Ce contraste apporte à l'intérieur une présence tactile et une patine qui s'embellit avec le temps.",
        ],
        image: {
          src: "/assets/images/architecture-interieur-matiere-travertin-salle-de-bain.jpg",
          caption: "Pierre naturelle et matières nobles, salle de bains contemporaine",
        },
      },
      {
        heading: "4. L'intégration invisible du détail technique",
        paragraphs: [
          "Ce qui distingue une approche architecturale rigoureuse d'un simple aménagement, c'est le soin porté au détail d'exécution :",
          "**Les plinthes à effleurage :** intégrées au nu du mur pour une pureté de ligne absolue.",
          "**Les portes à galandage et châssis invisibles :** sans encadrement apparent (système Filomuro), permettant aux cloisons de se présenter comme de purs plans de masse.",
          "**Le calepinage millimétré :** l'alignement parfait des joints de carrelage, des dalles de pierre et des calepinages de bois pour une harmonie géométrique parfaite.",
        ],
      },
      {
        heading: "Faire dialoguer votre lieu avec l'architecture avec le Studio",
        paragraphs: [
          "Notre studio aborde chaque projet avec la rigueur de l'architecte et la sensibilité du designer, pour bâtir des espaces sur-mesure où chaque détail trouve sa justification.",
          "**Vous avez une vision pour votre espace ?** [Prenez rendez-vous](https://calendly.com/paul-cohen-suprastudio/30min) pour en discuter, ou [contactez-nous](/contact) pour nous présenter votre projet.",
        ],
      },
    ],
    keywords: ["Architecture d'intérieur", "Volumes et lumière", "Matériaux nobles"],
    relatedProjects: ["maison-kleber", "giardino-de-ninno"],
  },
];

export function getArticleBySlug(slug: string) {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}

// Articles triés du plus récent au plus ancien.
export function getSortedArticles() {
  return [...JOURNAL_ARTICLES].sort((a, b) => {
    if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    return a.date < b.date ? 1 : -1;
  });
}
