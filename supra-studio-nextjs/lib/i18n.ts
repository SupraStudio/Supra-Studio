export type Lang = "fr" | "en" | "it";

export const LOCALES: Lang[] = ["fr", "en", "it"];

export const CALENDLY_URL = "https://calendly.com/paul-cohen-suprastudio/30min";

// Prefix used in the URL for each locale. French stays unprefixed (default).
export const LOCALE_PREFIX: Record<Lang, string> = {
  fr: "",
  en: "/en",
  it: "/it",
};

export const dict = {
  fr: {
    nav: { studio: "Studio", projects: "Projets", journal: "Journal", services: "Services", contact: "Contact" },
    scroll: "Défiler",
    discoverStudio: "Découvrir le studio",
    learnMoreStudio: "En savoir plus sur le studio",
    seeAllProjects: "Voir tous les projets ↗",
    bookAppointment: "Prendre rendez-vous",
    bookShort: "RDV",
    bookSlot: "Réserver un créneau via Calendly ↗",
    ctaLine: "De la conception à la livraison, un projet clé en main.",
    workInProgress: "Work in progress",
    backToProjects: "← Tous les projets",
    discoverAlso: "À découvrir aussi",
    identityCard: "Fiche d'identité",
    plansLabel: "Plans",
    footer: { rights: "Tous droits réservés", legal: "Mentions légales", privacy: "Confidentialité" },
    cookieBanner: {
      title: "Cookies",
      text: "Nous utilisons Google Analytics pour mesurer l'audience du site.",
      link: "En savoir plus",
      accept: "Accepter",
      decline: "Refuser",
    },
    home: {
      heroTitleLines: ["Architecte d'intérieur &", "Paysagiste à Paris"],
      heroSub:
        "Rénovation d'appartements, maisons neuves, commerces, hôtels, restaurants, bureaux et jardins, conçus dans une même vision architecturale.",
      introQuote:
        "« Nous sommes un studio d'architectes d'intérieurs et de paysage à Paris, Rome et Bordeaux. »",
      introText:
        "Fondé par un duo franco-italien, Supra Studio est un atelier d'architecture d'intérieur et de paysage basé à Paris, spécialisé dans la rénovation d'appartements, la conception de maisons individuelles et l'aménagement d'espaces extérieurs haut de gamme, entre Paris, Bordeaux et Rome.",
      stats: [
        { figure: "3 villes, 2 pays, 1 vision", label: "Paris · Bordeaux · Rome" },
        { figure: "+ 15 ans", label: "D'expérience cumulée" },
        {
          figure: "3 spécialités diplômées",
          label: "Architecte HMONP · Architecte d'intérieur · Paysagiste D.E.",
        },
      ],
      expertiseQuote:
        "À la croisée de l'architecture, de l'architecture d'intérieur et du paysage, nous nous engageons à offrir à chaque client un projet sur-mesure, où matériaux naturels, lumière et sobriété contemporaine s'allient pour créer des espaces de vie sensibles, durables et intemporels.",
    },
    studioPage: {
      heroTitle: "Notre vision : révéler la lumière, élever l'ordinaire",
      definition: {
        word: "su·pra",
        ipa: "/sy.pʁa/",
        pos: "préposition, latin",
        defs: [
          "Au-dessus, au-delà.",
          "(figuré) D'un lieu qui se contente de fonctionner à un lieu qui élève ceux qui l'habitent.",
        ],
        epigraph: "Ce qui dépasse le fonctionnel pour atteindre l'essentiel.",
      },
      visionLabel: "Architecte d'intérieur Paris, paysagiste D.E. Paris",
      visionText:
        "Ici se dévoilent nos projets d'architecture d'intérieur et de paysage, entre Paris, Bordeaux et Rome — appartements rénovés, maisons neuves, jardins et terrasses pensés comme des prolongements de l'espace habité. Chaque réalisation traduit une même recherche : celle d'une justesse entre matière, lumière et usage. Nous privilégions les matériaux naturels, les lignes épurées et une conception écoresponsable, pour des lieux qui traversent le temps sans jamais se démoder. Au fil de ces pages, vous découvrirez notre manière d'habiter les seuils — entre intérieur et extérieur, entre sobriété et caractère — et notre conviction que la simplicité, lorsqu'elle est juste, devient une forme de sophistication.",
      sectionLabel: "Le studio",
      title: "Deux parcours, une vision de l'Architecture d'Intérieur et du Paysage",
      titleHome: "Un duo, deux parcours :\nL'Alliance de l'Architecture d'intérieur et du Paysage",
      p1: "Supra Studio, c'est la rencontre de deux parcours complémentaires et internationaux. Beatrice, diplômée de La Sapienza à Rome et habilitée HMONP à Paris, a travaillé au sein d'agences d'architecture à Paris. Paul, formé à Bordeaux en architecture d'intérieur et en paysage, a lui aussi travaillé à Paris, au sein d'agences d'architecture et de paysage.",
      p2: "Ensemble, ils mettent en commun leurs expertises en architecture d'intérieur et en architecture paysagère, guidés par une même exigence de justesse, de créativité et de qualité, de la conception au suivi de chantier.",
      partnersLabel: "Nos partenaires",
      partnersTitle: "Artisans & entreprises locales",
      partnersText:
        "Nous nous entourons d'entreprises locales et d'artisans qualifiés, choisis avec la même exigence que celle apportée à chaque projet. Cette collaboration étroite, dès la phase de conception, nous permet d'assurer un suivi de chantier rigoureux et une réalisation fidèle à chaque détail imaginé.",
      partnersTagline:
        "Des entreprises locales et des artisans qualifiés, choisis avec la même exigence à chaque projet.",
      valuesLabel: "Notre engagement",
      valuesTitle: "Nos valeurs et engagements",
      valuesText:
        "Rénovation d'appartement, conception de maison neuve, aménagement intérieur sur-mesure ou architecture paysagère : à chaque projet, Supra Studio dépasse le simple plan pour révéler la lumière et la justesse propres à chaque lieu. Notre priorité : des projets sensibles, durables et pleinement personnalisés — pensés pour être vécus, du premier trait à la livraison.",
      valuesTagline:
        "Des projets sensibles, durables et pleinement personnalisés, pensés pour être vécus.",
      learnMore: "En savoir plus →",
    },
    servicesPage: {
      label: "Nos services",
      title: "Un Accompagnement Sur-Mesure :\nDe la Conception à la Maîtrise d'Œuvre",
      h1Title: "Architecture d'Intérieur & Paysage :\nNos Prestations Sur-Mesure",
      intro:
        "Supra Studio réunit des compétences en architecture d'intérieur et en architecture paysagère, enrichies par une formation et une expérience en conception architecturale. Quatre missions complémentaires, mobilisables ensemble ou séparément selon les besoins de votre projet.",
      steps: [
        {
          num: "01",
          title: "Visite conseil",
          tag: "Un premier regard sur votre projet",
          body: "La visite conseil est la première étape de notre collaboration. Sur place, nous analysons votre espace — intérieur, extérieur ou les deux — pour comprendre vos usages, vos contraintes et vos envies. Cette rencontre nous permet de vous conseiller au mieux avant tout engagement.",
        },
        {
          num: "02",
          title: "Faisabilité",
          tag: "Évaluer le potentiel réel du projet",
          body: "Nous étudions la faisabilité technique, réglementaire et budgétaire de votre projet : contraintes du bâti, règles d'urbanisme, possibilités d'aménagement intérieur ou d'intervention paysagère, avant d'entrer dans la conception détaillée.",
        },
        {
          num: "03",
          title: "Conception",
          tag: "Donner forme au projet",
          body: "Nous développons les plans, les volumes, les matériaux et les ambiances de votre projet. Grâce à nos compétences en architecture d'intérieur et en architecture paysagère, nous concevons des espaces cohérents où intérieur et extérieur dialoguent.",
        },
        {
          num: "04",
          title: "Suivi de travaux",
          tag: "Un accompagnement jusqu'à la réalisation",
          body: "Nous assurons le suivi de chantier auprès des entreprises et artisans, pour garantir la fidélité du projet réalisé à la conception imaginée — jusqu'à la livraison d'un lieu réellement vécu.",
        },
      ],
      areasLabel: "Nos domaines d'intervention",
      areasTitle: "Rénovation, extension, paysage : nos champs d'expertise",
      areasIntro: "Chaque projet mobilise un ou plusieurs de ces domaines, selon les besoins du lieu et de ses usages.",
      areas: [
      {
        id: "renovation",
        title: "Rénovation",
        tag: "Transformer un appartement, une maison ou un espace existant.",
        paragraphs: [
          "La rénovation constitue l'une des interventions les plus fréquentes de Supra Studio, qu'il s'agisse d'un appartement parisien, d'une maison à Bordeaux ou d'un bien à Rome. Transformer un espace existant demande une approche différente d'une construction neuve : il faut composer avec l'histoire du bâti, ses contraintes structurelles, son règlement de copropriété et, souvent, un potentiel caché derrière des cloisons ou des revêtements datés. Notre rôle est précisément de révéler ce potentiel, en conciliant respect du bâti ancien et exigences de confort contemporain.",
          "Chaque projet de rénovation commence par une visite conseil sur place. Nous observons la lumière naturelle selon les heures et les saisons, la circulation entre les pièces, les éléments patrimoniaux à conserver — moulures, parquet ancien, cheminées, hauteurs sous plafond — et les contraintes techniques : réseaux d'eau et d'électricité vétustes, murs porteurs, isolation thermique et phonique. Cette lecture fine du bâti est indispensable avant d'envisager la moindre transformation, car elle conditionne à la fois le budget et la faisabilité réglementaire du projet.",
          "La rénovation d'appartement dans l'ancien, particulièrement en immeuble haussmannien à Paris, implique souvent une réflexion sur le décloisonnement : ouvrir une cuisine sur le séjour, repenser la circulation, ou créer une suite parentale avec dressing et salle de bains intégrés. Ces transformations touchent fréquemment à des murs porteurs, ce qui nécessite l'intervention d'un bureau d'études structure et, selon les cas, une déclaration préalable ou une autorisation en copropriété. Nous accompagnons nos clients dans ces démarches administratives, en assurant l'interface avec le syndic, l'architecte des bâtiments de France si le bien est situé en secteur protégé, et les entreprises du bâtiment.",
          "Rénover une maison individuelle pose d'autres enjeux : performance énergétique, réorganisation des volumes sur plusieurs niveaux, création d'ouvertures vers le jardin, mise aux normes électriques et sanitaires. Nous intégrons systématiquement une réflexion sur les matériaux biosourcés et les solutions d'isolation naturelle lorsque le projet s'y prête, dans une logique de confort durable plutôt que de performance énergétique seule. Le choix des matériaux — bois, pierre naturelle, terre cuite, enduits à la chaux — participe autant à l'esthétique du lieu qu'à son bien-être thermique et acoustique.",
          "Notre approche de la rénovation ne se limite pas à l'esthétique : nous considérons chaque espace dans sa globalité, en pensant les usages présents et futurs des occupants. Une cuisine ouverte doit fonctionner aussi bien pour un repas quotidien que pour recevoir ; un dressing doit s'adapter à l'évolution du mode de vie ; une salle de bains doit conjuguer fonctionnalité et sérénité. Cette approche sur mesure distingue une rénovation pensée par un architecte d'intérieur d'une simple remise à neuf : chaque décision de plan, de matière et de lumière répond à un usage réel et à une intention architecturale cohérente.",
          "Le suivi de chantier est une étape déterminante de toute rénovation réussie. Nous coordonnons les différents corps de métier — maçonnerie, plomberie, électricité, menuiserie, peinture — pour garantir que l'exécution reste fidèle aux plans et aux ambiances imaginées en conception. Les imprévus sont fréquents dans l'ancien : découverte d'un réseau non conforme, d'une structure fragilisée, ou d'un vice caché derrière un revêtement. Notre présence régulière sur site permet d'anticiper ces aléas et de proposer rapidement des solutions adaptées, sans compromettre la vision d'ensemble du projet ni le budget initial.",
          "Que la rénovation concerne un studio, un grand appartement familial ou une maison entière, l'objectif reste le même : redonner de la justesse à un lieu, révéler sa lumière naturelle, et créer un espace de vie sensible et durable, parfaitement adapté aux usages de ses occupants. Entre Paris, Bordeaux et Rome, Supra Studio met son expertise d'architecte d'intérieur et de paysagiste au service de cette transformation, de la première visite conseil jusqu'à la livraison du chantier, avec la même exigence de précision à chaque étape du projet.",
        ],
      },
      {
        id: "extension",
        title: "Extension & surélévation",
        tag: "Créer de nouveaux volumes et faire évoluer l'architecture.",
        paragraphs: [
          "L'extension et la surélévation répondent à un même besoin : créer de nouveaux volumes lorsque l'existant ne suffit plus, sans changer de lieu de vie. Une famille qui s'agrandit, un télétravail qui nécessite un bureau indépendant, une envie de lumière ou de hauteur sous plafond supplémentaire — ces situations conduisent souvent à repenser l'architecture d'une maison plutôt que d'en chercher une autre. Supra Studio accompagne ces projets de A à Z, depuis l'étude de faisabilité jusqu'à la livraison, en Île-de-France comme en Gironde.",
          "L'extension consiste à étendre une construction au sol, en rez-de-jardin ou en prolongement d'une façade existante : agrandissement d'un séjour, création d'une véranda, d'un atelier ou d'une suite indépendante. La surélévation, elle, consiste à ajouter un niveau supplémentaire au bâti existant — un étage, des combles aménagés, ou une extension en toiture. Ces deux approches partagent les mêmes enjeux techniques : elles doivent composer avec la structure porteuse existante, respecter les règles d'urbanisme locales — plan local d'urbanisme, règles de prospect, gabarit autorisé — et s'intégrer avec justesse dans l'architecture d'origine, sans la dénaturer.",
          "La première étape de tout projet d'extension ou de surélévation est une étude de faisabilité rigoureuse. Nous analysons la structure du bâtiment existant — fondations, murs porteurs, charpente — pour déterminer ce qui peut être modifié ou renforcé, ainsi que les règles d'urbanisme applicables à la parcelle : emprise au sol autorisée, hauteur maximale, distances aux limites de propriété, aspect extérieur imposé dans certaines zones protégées. Cette phase technique et réglementaire conditionne directement la nature du projet et doit être menée avant toute conception détaillée, pour éviter des désillusions coûteuses.",
          "Au-delà des contraintes techniques, une extension ou une surélévation réussie se pense comme une évolution cohérente de l'architecture existante, et non comme un ajout disparate. Le choix des matériaux, des proportions et du langage architectural doit dialoguer avec le bâti d'origine : parfois en continuité, avec les mêmes matériaux et la même toiture ; parfois en contraste assumé, avec une architecture contemporaine qui souligne la différence entre l'ancien et le nouveau. Ce choix dépend du contexte, du règlement d'urbanisme local, et de la sensibilité du client — nous accompagnons cette réflexion au cas par cas, sans formule toute faite.",
          "Un projet de surélévation implique généralement une intervention structurelle importante : renforcement des fondations, création d'une nouvelle charpente, reprise en sous-œuvre dans certains cas. Ces travaux nécessitent une coordination étroite avec un bureau d'études structure et des entreprises spécialisées, que nous pilotons en lien avec le maître d'ouvrage. Une extension en rez-de-jardin, plus légère structurellement, pose davantage de questions d'implantation, d'orientation solaire et de continuité avec le jardin ou la terrasse existante — des sujets qui relèvent autant de l'architecture que du paysage.",
          "Ces projets demandent également d'anticiper les démarches administratives : déclaration préalable de travaux pour les extensions de faible surface, permis de construire au-delà de certains seuils, consultation des services d'urbanisme en amont pour sécuriser la faisabilité. Nous préparons l'ensemble des pièces graphiques et administratives nécessaires au dépôt du dossier, et assurons le lien avec les instances compétentes jusqu'à l'obtention des autorisations.",
          "Enfin, comme pour tout projet de construction, le suivi de chantier reste déterminant : la structure, l'étanchéité et les raccords entre l'existant et le neuf sont des points de vigilance constants sur ce type d'intervention. Notre présence régulière sur site garantit la cohérence entre la conception et l'exécution, jusqu'à la livraison d'un volume nouveau parfaitement intégré à l'architecture existante et aux usages de ses occupants. Que le projet se situe à Paris, à Bordeaux ou dans leurs environs, notre méthode reste la même : une lecture précise de l'existant, une réponse architecturale juste, et un accompagnement continu jusqu'à la fin du chantier, dans le respect du budget et du calendrier fixés dès la phase de conception.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        tag: "Concevoir, transformer et faire évoluer les espaces bâtis.",
        paragraphs: [
          "Concevoir, transformer et faire évoluer les espaces bâtis : c'est la définition même de l'architecture, au sens large, telle que nous la pratiquons chez Supra Studio. Au-delà de la rénovation ou de l'aménagement intérieur, cette dimension englobe la conception de constructions neuves et la réflexion architecturale globale sur un bâtiment — ses volumes, sa structure, son implantation, sa relation au site et à la lumière. C'est le socle sur lequel s'appuient toutes nos interventions, qu'elles touchent à l'intérieur, à l'extension ou au paysage, et c'est ce regard d'ensemble qui donne sa cohérence à chaque projet, du premier tracé jusqu'à la livraison.",
          "Concevoir une maison neuve, par exemple, suppose de penser simultanément l'implantation sur le terrain, l'orientation par rapport au soleil et aux vents dominants, les volumes intérieurs et extérieurs, la circulation entre les espaces, et l'intégration dans le paysage environnant. Ce travail commence toujours par une analyse fine du site : topographie, végétation existante, vues, contraintes d'urbanisme, nature du sol. C'est cette lecture du contexte qui permet de proposer une architecture juste, adaptée à son lieu, plutôt qu'un projet standardisé reproductible n'importe où.",
          "Notre approche architecturale se distingue par la formation croisée de nos deux fondateurs, l'un habilité HMONP et l'autre formé en architecture d'intérieur et en paysage : elle nous permet de penser un bâtiment dans sa totalité, sans cloisonner les métiers. Un projet architectural cohérent ne sépare pas la structure, l'intérieur et les abords extérieurs ; il les pense ensemble, dès les premières esquisses. Cette vision globale évite les décisions cloisonnées qui, prises isolément, produisent souvent des espaces disparates une fois construits.",
          "La conception architecturale suit une méthode rigoureuse : études préalables et faisabilité, esquisses et plans d'avant-projet, choix des matériaux et des systèmes constructifs, dossier de permis de construire, puis phase d'exécution et de suivi de chantier. Chaque étape s'appuie sur un dialogue constant avec le client, pour ajuster le projet à ses usages réels, son budget et ses contraintes de calendrier. Nous travaillons également en lien étroit avec les bureaux d'études techniques — structure, thermique, fluides — nécessaires à la fiabilité et à la conformité réglementaire d'un projet de construction.",
          "L'architecture, dans notre pratique, s'attache aussi à la question des matériaux et de leur mise en œuvre. Le choix du bois, de la pierre, de la terre crue ou d'enduits naturels ne relève pas uniquement de l'esthétique : il conditionne le confort thermique et acoustique du bâtiment, sa durabilité, et sa capacité à bien vieillir dans le temps. Nous privilégions autant que possible les matériaux biosourcés et les ressources locales, dans une démarche de sobriété qui rejoint nos convictions en matière de paysage et d'aménagement intérieur.",
          "La dimension réglementaire occupe une place importante dans tout projet architectural : respect du plan local d'urbanisme, des règles de prospect et de hauteur, des normes d'accessibilité et de sécurité, parfois avis de l'architecte des bâtiments de France en secteur protégé. Nous anticipons ces contraintes dès la phase de faisabilité, pour proposer des partis architecturaux réalistes et éviter les blocages administratifs en cours de projet — un accompagnement qui rassure particulièrement les maîtres d'ouvrage peu familiers de ces démarches.",
          "Enfin, un projet architectural ne s'arrête pas à la remise du permis de construire : le suivi de chantier garantit que la réalisation reste fidèle à la conception, dans le respect des délais et du budget. Nous assurons cette maîtrise d'œuvre jusqu'à la livraison, en coordination avec les entreprises et artisans mobilisés sur le chantier. Entre Paris, Bordeaux et Rome, cette approche architecturale globale — concevoir, transformer, faire évoluer — reste le fil conducteur de chaque projet que nous menons, qu'il s'agisse d'une construction neuve, d'une extension ou d'une transformation profonde d'un bâtiment existant, toujours guidée par la même exigence de justesse et de cohérence d'ensemble.",
        ],
      },
      {
        id: "landscape",
        title: "Paysage & espaces extérieurs",
        tag: "Jardins, terrasses, patios et continuités entre intérieur et extérieur.",
        paragraphs: [
          "Jardins, terrasses, patios et continuités entre intérieur et extérieur : le paysage occupe une place centrale dans la pratique de Supra Studio, au même titre que l'architecture d'intérieur. Cette double compétence — architecte d'intérieur et paysagiste diplômé d'État — nous permet de penser un lieu de vie dans sa totalité, sans rupture entre ce qui se passe à l'intérieur d'un bâtiment et ce qui se déploie à l'extérieur. Un jardin, une terrasse ou un patio ne sont jamais traités comme un simple aménagement décoratif : ils font partie intégrante du projet architectural.",
          "Concevoir un jardin commence par une lecture attentive du site : nature du sol, exposition, végétation existante, vues à préserver ou à créer, contraintes de vis-à-vis en milieu urbain. À Paris, l'exercice se pose souvent à petite échelle — un patio, une cour, un balcon ou une toiture à végétaliser — tandis qu'en dehors de la capitale, à Bordeaux ou dans le Sud, les projets de jardin peuvent s'étendre sur de plus grandes superficies, avec une réflexion sur la gestion de l'eau, l'ombre naturelle et la palette végétale méditerranéenne ou landaise selon le climat local.",
          "La création d'une terrasse ou d'un rooftop urbain répond à des enjeux spécifiques : charge admissible de la structure, étanchéité, exposition au vent et au soleil, choix de revêtements adaptés à l'extérieur — bois, pierre naturelle, terre cuite — et sélection de végétaux capables de résister aux conditions parfois rudes d'une toiture en ville. Végétaliser une terrasse parisienne demande une expertise technique autant que paysagère, pour garantir la pérennité des plantations et le confort d'usage de l'espace, de jour comme de soir.",
          "Le patio, quant à lui, offre une opportunité particulière : celle de faire entrer la nature au cœur même d'un bâtiment, dans un espace protégé et intime. Qu'il s'agisse d'un patio à ciel ouvert dans une maison méditerranéenne ou d'une cour végétalisée dans un immeuble parisien, ce type d'espace crée une respiration entre les pièces, une source de lumière naturelle supplémentaire, et souvent un lien fort entre les usages du quotidien et la présence du végétal.",
          "La continuité entre intérieur et extérieur constitue l'un des fils conducteurs de notre pratique paysagère. Elle se traduit concrètement par des choix de conception : ouvertures généreuses vers le jardin, matériaux de sol identiques ou en harmonie entre une pièce de vie et sa terrasse, mobilier extérieur pensé comme un prolongement du mobilier intérieur, végétation visible depuis l'intérieur qui accompagne la lumière naturelle au fil des saisons. Cette continuité transforme la perception d'un lieu : les limites entre dedans et dehors s'effacent, au profit d'un espace de vie unifié.",
          "Nous privilégions dans nos aménagements extérieurs des matériaux naturels et durables — pierre locale, bois non traité, terre cuite, enduits à la chaux — ainsi qu'une palette végétale adaptée au climat et au sol du site, pour limiter les besoins d'arrosage et d'entretien tout en assurant une bonne intégration paysagère. Cette approche rejoint notre réflexion plus large sur les matériaux biosourcés et une architecture attentive à ses ressources, aussi bien à l'intérieur qu'à l'extérieur d'un bâtiment.",
          "Chaque projet paysager suit une méthode comparable à nos projets d'architecture intérieure : visite conseil pour comprendre le site et les usages souhaités, étude de faisabilité technique, conception des plans et choix des matériaux et végétaux, puis suivi de chantier auprès des entreprises de paysage et des artisans mobilisés. Cette rigueur garantit que le jardin, la terrasse ou le patio imaginé en conception corresponde fidèlement à l'espace livré, dans le respect du budget et du calendrier fixés en amont. Entre Paris, Bordeaux et Rome, nous accompagnons ainsi des projets de paysage de toutes échelles, du petit patio urbain au jardin méditerranéen le plus vaste, avec la même attention portée à la lumière, aux matières et aux usages qui caractérise l'ensemble de nos projets d'architecture intérieure.",
        ],
      },
      {
        id: "joinery",
        title: "Agencement & mobilier sur mesure",
        tag: "Créer des éléments pensés spécifiquement pour le lieu.",
        paragraphs: [
          "Créer des éléments pensés spécifiquement pour le lieu : c'est tout l'enjeu de l'agencement et du mobilier sur mesure, une dimension essentielle de notre pratique d'architecte d'intérieur. Là où le mobilier standard impose ses propres dimensions et contraintes à un espace, l'agencement sur mesure part de l'espace lui-même — de ses volumes, de ses contraintes et de ses usages réels — pour concevoir des éléments qui s'y intègrent avec justesse, jusqu'au millimètre.",
          "Cette approche prend tout son sens dans les appartements parisiens anciens, souvent marqués par des volumes atypiques : angles non droits, sous-pentes, niches, hauteurs sous plafond variables. Le mobilier standard s'y adapte mal, laissant des espaces perdus ou des rangements insuffisants. Un agencement sur mesure, à l'inverse, valorise chaque recoin : une bibliothèque intégrée dans une niche, un dressing conçu pour occuper l'intégralité d'un mur en pente, une banquette avec rangement intégré sous une fenêtre. Chaque pièce de mobilier devient une réponse architecturale à la configuration réelle du lieu.",
          "La cuisine sur mesure illustre bien cette logique : plutôt que d'assembler des modules standardisés, nous concevons un agencement qui répond précisément aux habitudes de vie du foyer — hauteur de plan de travail adaptée, circulation optimisée entre les zones de préparation, cuisson et rangement, matériaux choisis pour leur résistance et leur cohérence avec le reste de l'appartement. Une cuisine ouverte sur le séjour demande une attention particulière au choix des finitions, pour que le mobilier dialogue avec le reste de la pièce plutôt que de s'en distinguer comme un bloc technique isolé.",
          "Le dressing et les rangements intégrés répondent à une problématique similaire : optimiser un volume souvent contraint pour offrir un maximum de capacité de rangement sans nuire à la circulation ni à l'esthétique de la pièce. Nous concevons ces éléments en tenant compte des besoins précis de nos clients — vêtements, chaussures, linge de maison — pour un rangement à la fois fonctionnel et discret, intégré harmonieusement à l'architecture de la pièce, qu'il s'agisse d'une suite parentale ou d'une entrée d'appartement.",
          "La salle de bains, elle aussi, bénéficie souvent d'un agencement sur mesure : meubles vasques adaptés aux dimensions exactes de la pièce, rangements intégrés, niches de douche dimensionnées avec précision. Dans les salles de bains de petite surface, particulièrement fréquentes dans l'habitat parisien ancien, chaque centimètre compte — le sur-mesure permet d'exploiter pleinement l'espace disponible sans sacrifier le confort d'usage ni l'esthétique recherchée.",
          "Au-delà de la fonction, le choix des matériaux et des finitions du mobilier sur mesure participe pleinement à l'identité du projet. Bois massif, placage naturel, laiton, pierre, céramique : chaque matière est sélectionnée en cohérence avec l'ambiance générale du lieu, dans la continuité des choix faits pour les sols, les murs et les menuiseries. Cette cohérence globale entre l'architecture, l'agencement et le mobilier distingue un projet pensé dans sa totalité d'un simple assemblage de meubles achetés séparément.",
          "La réalisation d'un agencement sur mesure implique une collaboration étroite avec des artisans qualifiés — ébénistes, menuisiers, métalliers — choisis pour leur savoir-faire et leur capacité à traduire fidèlement les plans en éléments construits. Nous suivons chaque étape de la fabrication, de la prise de mesure sur site jusqu'à la pose finale, pour garantir un résultat fidèle à la conception initiale.",
          "Le mobilier sur mesure présente enfin un avantage souvent sous-estimé : sa pérennité. Conçu pour un espace précis, avec des matériaux choisis pour leur qualité et leur capacité à bien vieillir, il traverse les années sans perdre en cohérence ni en fonctionnalité, contrairement à un mobilier standard plus rapidement obsolète face à l'évolution des usages. C'est un investissement dans la durée, au même titre qu'une rénovation ou une extension bien pensée. Entre Paris, Bordeaux et Rome, cette exigence artisanale reste au cœur de notre approche de l'agencement, pour des espaces à la fois fonctionnels, durables et profondément personnalisés.",
        ],
      },
      {
        id: "acquisition",
        title: "Accompagnement à l'acquisition",
        tag: "Évaluer le potentiel architectural d'un bien avant son achat.",
        paragraphs: [
          "Évaluer le potentiel architectural d'un bien avant son achat est une démarche encore peu connue, mais particulièrement précieuse pour tout acheteur souhaitant s'engager sereinement dans un projet immobilier. Acheter un appartement ou une maison représente un investissement important, souvent définitif : au-delà du prix affiché, la véritable question est de savoir ce que ce bien permettra réellement de faire — et à quel coût — une fois acquis. C'est précisément le rôle de l'accompagnement à l'acquisition que propose Supra Studio.",
          "Visiter un bien avec un œil d'architecte change radicalement la lecture d'un espace. Là où un futur acquéreur voit une cloison, nous identifions si elle est porteuse ou non, et donc si elle peut être supprimée pour ouvrir l'espace. Là où il perçoit une pièce sombre, nous évaluons s'il est possible de créer une ouverture supplémentaire, de repenser la circulation de la lumière, ou d'agrandir une fenêtre existante. Cette lecture technique et architecturale révèle un potentiel — ou des limites — invisibles à l'œil non averti, et permet de prendre une décision d'achat en pleine connaissance de cause.",
          "Notre accompagnement s'appuie sur une visite conseil réalisée en amont ou en parallèle des visites classiques avec l'agence immobilière. Nous analysons la structure du bâtiment, la faisabilité de travaux envisagés — extension, surélévation, décloisonnement, création d'une suite parentale, ouverture d'une cuisine — ainsi que les contraintes de copropriété, d'urbanisme ou de patrimoine qui pourraient limiter certains projets. Cette analyse permet d'anticiper ce qui sera réalisable une fois le bien acquis, et d'éviter la découverte tardive d'une contrainte technique ou réglementaire qui remettrait en cause le projet initialement imaginé, qu'il s'agisse d'une simple rénovation ou d'une transformation architecturale plus ambitieuse.",
          "L'un des apports majeurs de cet accompagnement réside dans l'estimation du budget global du projet, bien avant la signature. Un bien affiché à un prix attractif peut cacher des travaux de structure coûteux, une mise aux normes électrique complète, ou une isolation thermique à revoir intégralement — autant d'éléments qui, ajoutés au prix d'achat, changent significativement le coût réel de l'opération. À l'inverse, un bien qui semble nécessiter beaucoup de travaux peut parfois se transformer avec des interventions plus ciblées et moins coûteuses qu'anticipé. Cette évaluation en amont donne à l'acheteur des arguments concrets, y compris pour négocier le prix d'achat en fonction des travaux réellement nécessaires et du calendrier de réalisation envisagé.",
          "Cet accompagnement s'avère particulièrement utile dans l'ancien parisien, où la diversité des configurations — immeubles haussmanniens, ateliers d'artiste, dernier étage sous combles, rez-de-jardin — rend chaque bien singulier face à un projet de rénovation ou d'extension. Il l'est tout autant pour un projet de maison individuelle à Bordeaux ou ailleurs, où la question du terrain, de son orientation et de son potentiel d'extension ou d'aménagement paysager entre également en jeu dans la décision d'achat.",
          "Au-delà de l'aspect financier, cette visite avec un architecte apporte une forme de sérénité dans une décision souvent chargée d'émotion. Elle permet de se projeter concrètement dans l'espace : visualiser ce que deviendrait telle pièce une fois réagencée, comprendre les limites réelles d'un bien avant de s'y attacher, ou au contraire découvrir un potentiel insoupçonné qui justifie pleinement l'acquisition. C'est une aide à la décision, complémentaire du travail de l'agent immobilier, du notaire ou du diagnostiqueur, centrée spécifiquement sur la dimension architecturale et le potentiel de transformation du bien.",
          "Entre Paris, Bordeaux et Rome, nous proposons cet accompagnement à toute personne engagée dans une recherche immobilière, avant même la signature d'un compromis de vente, pour transformer une simple visite en une véritable analyse de potentiel — et sécuriser ainsi l'une des décisions les plus importantes d'un parcours de vie, avec le même regard architectural que celui que nous portons sur nos projets de rénovation, d'extension ou de construction neuve.",
        ],
      },
      ],
      methodLabel: "Notre méthode de travail",
      methodTitle: "De la rencontre à la livraison : Notre processus de conception et maîtrise d'œuvre",
      methodSteps: [
        {
          num: "01",
          title: "La rencontre",
          body: "Ce premier échange se fait sur site, en visioconférence ou par téléphone. Vous nous partagez votre projet, vos usages et vos envies. En retour, nous posons un premier regard sur sa faisabilité — contraintes du bâti, d'urbanisme, budgétaires et environnementales — pour poser des bases claires avant de commencer.",
        },
        {
          num: "02",
          title: "La conception",
          body: "C'est le moment où le projet prend forme : nous traduisons vos attentes en premières intentions spatiales, entre architecture d'intérieur et architecture paysagère selon les besoins. Volumes, circulations, lumière et matières sont pensés ensemble, pour donner une direction juste et cohérente au projet avant d'aller plus loin.",
        },
        {
          num: "03",
          title: "Les démarches administratives",
          body: "Déclaration préalable, dossier d'autorisation de travaux, formalités liées à l'urbanisme : nous préparons et déposons avec vous les documents nécessaires à votre projet. Cette étape demande rigueur et patience, mais elle est indispensable pour sécuriser la suite du chantier. Nous vous accompagnons jusqu'à l'obtention des autorisations.",
        },
        {
          num: "04",
          title: "Le dessin détaillé",
          body: "Pendant l'instruction du dossier, nous approfondissons les plans techniques : électricité, plomberie, chauffage, menuiseries, revêtements. Chaque espace est détaillé avec précision, et des descriptifs sont rédigés pour chaque lot, afin de préparer la consultation des entreprises. Cette phase, minutieuse, conditionne la qualité de tout le chantier à venir.",
        },
        {
          num: "05",
          title: "La sélection des artisans",
          body: "Nous nous appuyons sur un réseau d'artisans et d'entreprises locales, choisis avec la même exigence que celle apportée à chaque projet. Une fois les devis reçus, nous les analysons et vous conseillons sur les entreprises à retenir. Des échanges seront nécessaires pour ajuster les offres au niveau de détail attendu pour votre projet.",
        },
        {
          num: "06",
          title: "Le suivi de chantier",
          body: "Les travaux commencent : notre rôle évolue, de la conception vers le suivi de réalisation. Notre présence régulière sur site s'accompagne de comptes rendus détaillés, pour assurer la coordination des équipes et la fidélité du chantier au projet dessiné. La livraison marque l'aboutissement d'une collaboration attentive — et le début d'un lieu pleinement habité.",
        },
      ],
    },
    projectsPage: {
      label: "Réalisations",
      title: "Nos réalisations en Architecture d'intérieur et Paysage",
      h1Title: "Nos Projets d'Architecture d'Intérieur et Paysage : Paris, Bordeaux & Rome",
      desc: "Appartements rénovés, maisons neuves, jardins et commerces — chaque projet traduit une même recherche de justesse entre matière, lumière et usage, entre Paris, Bordeaux et Rome.",
      presented: "Projets présentés",
      countries: "Pays représentés",
      territories: "Nos terrains d'intervention",
      typeLabel: "Type de projet",
      programmeLabel: "Programme",
      surfaceLabel: "Surface",
      yearLabel: "Année",
    },
    journalPage: {
      label: "Journal",
      title: "Le Journal de Supra Studio",
      h1Title: "Journal :\nArchitecture d'Intérieur, Paysage & Actualités du Studio",
      desc: "Coulisses de chantier, réflexions sur la matière et la lumière, actualités du studio : le journal de Supra Studio, entre Paris, Bordeaux et Rome.",
      backToJournal: "← Tous les articles",
      readMore: "Lire l'article →",
      publishedOn: "Publié le",
      minRead: "min de lecture",
      discoverAlso: "À lire aussi",
      relatedProjects: "Projets liés",
      empty: "Les premiers articles arrivent très bientôt.",
    },
    reviews: {
      label: "Avis clients",
      title: "Ils nous font confiance",
      studioTitle: "Une relation de confiance, du premier échange à la livraison",
      servicesTitle: "Une conception et une maîtrise d'œuvre saluées par nos clients",
      ratingBadgeLabel: "Note Google",
      reviewsCountSuffix: "avis",
      linkText: "Voir tous nos avis sur Google →",
    },
    faqPage: {
      label: "FAQ",
      h1Title: "Questions Fréquentes : Architecture d'Intérieur, Paysage & Projet",
      desc: "Honoraires, étapes du projet, suivi de chantier, zones d'intervention : les réponses aux questions que l'on nous pose le plus souvent.",
    },
    contactPage: {
      label: "Contact",
      title: "Parlons de votre projet",
      h1Title: "Architecte d'Intérieur & Paysagiste à Paris : Parlons de Votre Projet",
      formName: "Nom",
      formEmail: "Email",
      formPhone: "Téléphone",
      formMessage: "Votre projet en quelques mots",
      submit: "Envoyer",
      sending: "Envoi...",
      sent: "Merci, votre message a bien été envoyé.",
      error: "Une erreur est survenue, merci de réessayer.",
      infoLabel: "Coordonnées",
      meetTitle: "Nous rencontrer",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      appointmentLabel: "Prendre rendez-vous",
      followLabel: "Suivez-nous",
    },
    meta: {
      home: {
        title: "Supra Studio — Architecte d'intérieur & Paysagiste à Paris",
        description:
          "Architecte d'intérieur et paysagiste à Paris : rénovation, maisons neuves et jardins sur-mesure. Duo franco-italien, entre Paris, Bordeaux et Rome.",
      },
      studio: {
        title: "Le Studio — Supra Studio | Architecte d'intérieur & Paysagiste Paris",
        description:
          "Supra Studio, atelier d'architecture d'intérieur et de paysage fondé par un duo franco-italien, entre Paris, Bordeaux et Rome. Découvrez notre vision, notre équipe et nos valeurs.",
      },
      services: {
        title: "Nos Services — Supra Studio | Architecture d'intérieur & Paysage",
        description:
          "Visite conseil, faisabilité, conception, suivi de travaux : découvrez notre méthode d'accompagnement complète, de la première rencontre à la livraison de votre projet.",
      },
      projects: {
        title: "Nos Projets — Supra Studio | Architecture d'intérieur & Paysage",
        description:
          "Appartements rénovés, maisons neuves, jardins et restaurants : découvrez les réalisations de Supra Studio à Paris, Bordeaux et Rome.",
      },
      journal: {
        title: "Journal — Supra Studio | Architecture d'intérieur & Paysage",
        description:
          "Le journal de Supra Studio : coulisses de chantier, réflexions sur la matière et la lumière, actualités du studio, entre Paris, Bordeaux et Rome.",
      },
      faq: {
        title: "FAQ — Supra Studio | Architecture d'intérieur & Paysage",
        description:
          "Honoraires, étapes du projet, suivi de chantier, zones d'intervention : toutes les réponses à vos questions sur l'accompagnement de Supra Studio.",
      },
      contact: {
        title: "Contact — Supra Studio | Architecte d'intérieur & Paysagiste Paris",
        description:
          "Contactez Supra Studio pour votre projet d'architecture d'intérieur ou de paysage à Paris. 14 rue des Fonds Verts, 75012 Paris — contact@suprastudio.fr.",
      },
      projectSuffix: "Un projet Supra Studio, atelier d'architecture d'intérieur et de paysage.",
      legalNotice: {
        title: "Mentions légales — Supra Studio",
        description: "Mentions légales du site Supra Studio : éditeur, hébergement, propriété intellectuelle et droit applicable.",
      },
      privacy: {
        title: "Politique de confidentialité — Supra Studio",
        description: "Politique de confidentialité du site Supra Studio : données collectées, finalités, durée de conservation et vos droits RGPD.",
      },
    },
  },
  en: {
    nav: { studio: "Studio", projects: "Projects", journal: "Journal", services: "Services", contact: "Contact" },
    scroll: "Scroll",
    discoverStudio: "Discover the studio",
    learnMoreStudio: "Learn more about the studio",
    seeAllProjects: "See all projects ↗",
    bookAppointment: "Book an appointment",
    bookShort: "Book",
    bookSlot: "Book a slot via Calendly ↗",
    ctaLine: "From concept to completion, a turnkey project.",
    workInProgress: "Work in progress",
    backToProjects: "← All projects",
    discoverAlso: "Also worth discovering",
    identityCard: "Project profile",
    plansLabel: "Plans",
    footer: { rights: "All rights reserved", legal: "Legal notice", privacy: "Privacy" },
    cookieBanner: {
      title: "Cookies",
      text: "We use Google Analytics to measure our website's audience.",
      link: "Learn more",
      accept: "Accept",
      decline: "Decline",
    },
    home: {
      heroTitleLines: ["Interior Architect &", "Landscape Designer in Paris"],
      heroSub:
        "Apartment renovations, new houses, shops, hotels, restaurants, offices and gardens, designed within a single architectural vision.",
      introQuote:
        "“We are a studio of interior architects and landscape designers in Paris, Rome and Bordeaux.”",
      introText:
        "Founded by a French-Italian duo, Supra Studio is an interior architecture and landscape design practice based in Paris, specialising in apartment renovation, the design of private homes and the creation of high-end outdoor spaces, between Paris, Bordeaux and Rome.",
      stats: [
        { figure: "3 cities, 2 countries, 1 vision", label: "Paris · Bordeaux · Rome" },
        { figure: "15+ years", label: "Of combined experience" },
        {
          figure: "3 qualified specialities",
          label: "HMONP Architect · Interior Architect · Landscape Designer D.E.",
        },
      ],
      expertiseQuote:
        "At the crossroads of architecture, interior architecture and landscape design, we are committed to offering every client a bespoke project, where natural materials, light and contemporary restraint combine to create sensitive, sustainable and timeless living spaces.",
    },
    studioPage: {
      heroTitle: "Our vision: reveal the light, elevate the everyday",
      definition: {
        word: "su·pra",
        ipa: "/sy.pʁa/",
        pos: "preposition, Latin",
        defs: [
          "Above, beyond.",
          "(figuratively) From a place that settles for functioning, to a place that elevates those who inhabit it.",
        ],
        epigraph: "What goes beyond the functional to reach the essential.",
      },
      visionLabel: "Interior architect in Paris, landscape designer D.E. Paris",
      visionText:
        "Here you'll discover our interior architecture and landscape projects, between Paris, Bordeaux and Rome — renovated apartments, new houses, gardens and terraces conceived as extensions of the living space. Each project reflects the same pursuit: a rightness between material, light and use. We favour natural materials, clean lines and an eco-responsible approach, for places that stand the test of time without ever going out of style. Throughout these pages, you'll discover our way of inhabiting thresholds — between indoors and outdoors, between restraint and character — and our conviction that simplicity, when it is right, becomes a form of sophistication.",
      sectionLabel: "The studio",
      title: "Two paths, one vision of Interior Architecture and Landscape Design",
      titleHome: "A duo, two paths:\nThe Alliance of Interior Architecture and Landscape Design",
      p1: "Supra Studio is the meeting of two complementary, international paths. Beatrice, a graduate of La Sapienza in Rome and HMONP-qualified in Paris, worked within architecture firms in Paris. Paul, trained in Bordeaux in interior architecture and landscape design, also worked in Paris, within architecture and landscape agencies.",
      p2: "Together, they combine their expertise in interior architecture and landscape architecture, guided by the same demand for precision, creativity and quality, from design through to site supervision.",
      partnersLabel: "Our partners",
      partnersTitle: "Craftspeople & local businesses",
      partnersText:
        "We work with local businesses and skilled craftspeople, chosen with the same rigour we bring to every project. This close collaboration, from the design phase onward, allows us to ensure rigorous site supervision and a build that stays true to every detail we imagined.",
      partnersTagline:
        "Local businesses and skilled craftspeople, chosen with the same rigour on every project.",
      valuesLabel: "Our commitment",
      valuesTitle: "Our values and commitments",
      valuesText:
        "Apartment renovation, new house design, bespoke interior fit-out or landscape architecture: on every project, Supra Studio goes beyond the plan to reveal the light and rightness specific to each place. Our priority: sensitive, sustainable and fully personalised projects — designed to be lived in, from the first sketch to handover.",
      valuesTagline:
        "Sensitive, sustainable and fully personalised projects, designed to be lived in.",
      learnMore: "Learn more →",
    },
    servicesPage: {
      label: "Our services",
      title: "Bespoke Support:\nFrom Design to Site Supervision",
      h1Title: "Interior Architecture & Landscape Design:\nOur Bespoke Services",
      intro:
        "Supra Studio brings together expertise in interior architecture and landscape architecture, enriched by training and experience in architectural design. Four complementary services, which can be mobilised together or separately depending on your project's needs.",
      steps: [
        {
          num: "01",
          title: "Consultation visit",
          tag: "A first look at your project",
          body: "The consultation visit is the first step of our collaboration. On site, we analyse your space — interior, exterior or both — to understand your needs, constraints and wishes. This meeting allows us to advise you as best we can before any commitment.",
        },
        {
          num: "02",
          title: "Feasibility",
          tag: "Assessing the project's true potential",
          body: "We study the technical, regulatory and budgetary feasibility of your project: structural constraints, planning regulations, possibilities for interior fit-out or landscape intervention, before moving into detailed design.",
        },
        {
          num: "03",
          title: "Design",
          tag: "Giving shape to the project",
          body: "We develop the plans, volumes, materials and atmospheres of your project. Thanks to our expertise in interior architecture and landscape architecture, we design coherent spaces where indoors and outdoors are in dialogue.",
        },
        {
          num: "04",
          title: "Site supervision",
          tag: "Support through to completion",
          body: "We oversee site supervision with contractors and craftspeople, to guarantee that the finished project remains true to the original design — through to the handover of a place that is truly lived in.",
        },
      ],
      areasLabel: "Our Areas of Expertise",
      areasTitle: "Renovation, Extension, Landscape: Our Fields of Expertise",
      areasIntro: "Every project draws on one or several of these areas, depending on the needs of the place and its uses.",
      areas: [
      {
        id: "renovation",
        title: "Renovation",
        tag: "Transforming an existing apartment, house or space.",
        paragraphs: [
          "Renovation is one of Supra Studio's most frequent interventions, whether for a Parisian apartment, a house in Bordeaux or a property in Rome. Transforming an existing space calls for a different approach than new-build construction: it means working with the history of the building, its structural constraints, its co-ownership regulations and, often, a potential hidden behind dated partitions or finishes. Our role is precisely to reveal that potential, reconciling respect for the existing structure with the demands of contemporary comfort.",
          "Every renovation project begins with an on-site consultation visit. We observe the natural light throughout the day and across seasons, the circulation between rooms, the heritage features worth preserving — mouldings, period flooring, fireplaces, ceiling heights — and the technical constraints: ageing water and electrical networks, load-bearing walls, thermal and acoustic insulation. This careful reading of the existing building is essential before considering any transformation, as it directly shapes both the budget and the regulatory feasibility of the project.",
          "Renovating an apartment in an older building, particularly a Haussmann-era block in Paris, often calls for rethinking the layout: opening a kitchen onto the living room, redesigning circulation, or creating a master suite with an integrated dressing room and bathroom. These changes frequently involve load-bearing walls, requiring the involvement of a structural engineer and, depending on the case, a prior planning declaration or co-ownership approval. We support our clients through these administrative steps, liaising with the building manager, the heritage authorities where the property sits in a protected area, and the building contractors.",
          "Renovating a house raises different issues: energy performance, reorganising volumes across several levels, creating openings towards the garden, bringing electrical and plumbing systems up to standard. We systematically consider bio-based materials and natural insulation solutions where the project allows, aiming for lasting comfort rather than energy performance alone. The choice of materials — wood, natural stone, terracotta, lime renders — contributes as much to the aesthetics of the place as to its thermal and acoustic comfort.",
          "Our approach to renovation goes beyond aesthetics: we consider each space as a whole, thinking through the current and future uses of its occupants. An open kitchen must work as well for a daily meal as for entertaining; a dressing room must adapt to changing lifestyles; a bathroom must combine functionality with calm. This bespoke approach is what sets a renovation designed by an interior architect apart from a simple refresh: every decision about layout, material and light responds to a real use and a coherent architectural intention.",
          "Site supervision is a decisive stage in any successful renovation. We coordinate the various trades — masonry, plumbing, electrical work, joinery, painting — to ensure that execution stays true to the plans and atmospheres imagined at the design stage. Surprises are frequent in older buildings: a non-compliant network, a weakened structure, or a hidden defect behind a finish. Our regular presence on site allows us to anticipate these issues and quickly propose suitable solutions, without compromising the overall vision or the initial budget.",
          "Whether the renovation concerns a studio, a large family apartment or an entire house, the goal remains the same: to restore a sense of rightness to a place, reveal its natural light, and create a sensitive, sustainable living space perfectly suited to its occupants' way of life. Between Paris, Bordeaux and Rome, Supra Studio brings its expertise as interior architects and landscape designers to this transformation, from the first consultation visit through to the completion of the site, with the same rigour at every stage of the project.",
        ],
      },
      {
        id: "extension",
        title: "Extension & Additional Storeys",
        tag: "Creating new volumes and evolving the architecture.",
        paragraphs: [
          "Extending a building or adding a storey answers the same need: creating new volumes when the existing space is no longer enough, without having to move. A growing family, remote work requiring an independent office, a wish for more light or ceiling height — these situations often lead to rethinking a house's architecture rather than looking for another one. Supra Studio supports these projects from end to end, from the feasibility study through to completion, in the Paris region as well as in the Gironde.",
          "An extension involves extending a building at ground level, in a garden-level annex or as a continuation of an existing façade: enlarging a living room, creating a conservatory, a studio or an independent suite. Adding a storey, by contrast, means adding an extra level to the existing structure — a floor, converted attic space, or a rooftop extension. Both approaches share the same technical challenges: they must work with the existing load-bearing structure, comply with local planning rules — local urban plan, setback rules, permitted building envelope — and integrate coherently into the original architecture without distorting it.",
          "The first step in any extension or additional-storey project is a thorough feasibility study. We analyse the structure of the existing building — foundations, load-bearing walls, roof frame — to determine what can be modified or reinforced, as well as the planning rules applicable to the plot: permitted footprint, maximum height, boundary distances, exterior appearance requirements in certain protected zones. This technical and regulatory phase directly shapes the nature of the project and must be carried out before any detailed design, to avoid costly disappointments later.",
          "Beyond the technical constraints, a successful extension or additional storey is conceived as a coherent evolution of the existing architecture, not a disparate add-on. The choice of materials, proportions and architectural language must engage in dialogue with the original building: sometimes in continuity, using the same materials and roofline; sometimes in deliberate contrast, with contemporary architecture that highlights the difference between old and new. This choice depends on the context, local planning regulations, and the client's sensibility — we guide this reflection case by case, without a one-size-fits-all formula.",
          "An additional-storey project generally involves major structural work: reinforcing foundations, building a new roof frame, sometimes underpinning existing foundations. This work requires close coordination with a structural engineer and specialist contractors, which we manage on behalf of the client. A ground-level extension, structurally lighter, raises more questions of siting, solar orientation and continuity with the existing garden or terrace — questions that concern landscape as much as architecture.",
          "These projects also require anticipating the administrative process: a prior planning declaration for smaller extensions, a full planning permission above certain thresholds, early consultation with planning authorities to secure feasibility. We prepare all the drawings and administrative documents needed for the application, and liaise with the relevant authorities through to approval.",
          "Finally, as with any construction project, site supervision remains decisive: the structure, waterproofing and junctions between existing and new work are constant points of attention on this type of intervention. Our regular presence on site ensures consistency between design and execution, through to the delivery of a new volume perfectly integrated into the existing architecture and its occupants' way of life. Whether the project is in Paris, Bordeaux or their surroundings, our method stays the same: a precise reading of the existing building, a fitting architectural response, and continuous support through to the end of the site works, within the budget and schedule set during the design phase.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        tag: "Designing, transforming and evolving built spaces.",
        paragraphs: [
          "Designing, transforming and evolving built spaces: this is the very definition of architecture, in the broad sense, as we practise it at Supra Studio. Beyond renovation or interior design, this dimension encompasses the design of new-build constructions and a global architectural reflection on a building — its volumes, structure, siting, and relationship to the site and to light. It is the foundation on which all our interventions rest, whether they concern interiors, extensions or landscape.",
          "Designing a new house, for instance, requires thinking simultaneously about its siting on the plot, its orientation relative to the sun and prevailing winds, its interior and exterior volumes, the circulation between spaces, and its integration into the surrounding landscape. This work always begins with a careful analysis of the site: topography, existing vegetation, views, planning constraints, soil conditions. It is this reading of context that allows us to propose an architecture that is right for its place, rather than a standardised project that could be built anywhere.",
          "Our architectural approach is distinguished by the cross-disciplinary training of our two founders, one HMONP-qualified and the other trained in interior architecture and landscape design: it allows us to think of a building in its entirety, without compartmentalising the professions. A coherent architectural project does not separate structure, interior and outdoor surroundings; it thinks them together, from the earliest sketches. This holistic vision avoids the compartmentalised decisions that, taken in isolation, often produce disjointed spaces once built.",
          "Architectural design follows a rigorous method: preliminary studies and feasibility, sketches and preliminary plans, choice of materials and construction systems, planning permission application, then execution and site supervision. Each stage relies on constant dialogue with the client, to adjust the project to their real needs, budget and schedule constraints. We also work closely with technical consultants — structural, thermal, services — necessary for the reliability and regulatory compliance of a construction project.",
          "In our practice, architecture also addresses the question of materials and their implementation. The choice of wood, stone, raw earth or natural renders is not purely aesthetic: it determines the building's thermal and acoustic comfort, its durability, and its ability to age well over time. Wherever possible, we favour bio-based materials and local resources, in a spirit of restraint that echoes our convictions in landscape design and interior architecture alike.",
          "Regulatory considerations play an important role in any architectural project: compliance with the local urban plan, setback and height rules, accessibility and safety standards, sometimes the approval of heritage authorities in protected areas. We anticipate these constraints from the feasibility stage, to propose realistic architectural approaches and avoid administrative deadlock during the project — support that particularly reassures clients less familiar with these processes.",
          "Finally, an architectural project does not end with the granting of planning permission: site supervision ensures that the finished building stays true to the design, within schedule and budget. We provide this oversight through to completion, in coordination with the contractors and craftspeople involved on site. Between Paris, Bordeaux and Rome, this holistic architectural approach — design, transform, evolve — remains the guiding thread of every project we undertake, whether a new construction, an extension, or a deep transformation of an existing building, always driven by the same demand for rightness and overall coherence.",
        ],
      },
      {
        id: "landscape",
        title: "Landscape & Outdoor Spaces",
        tag: "Gardens, terraces, patios and continuity between indoors and outdoors.",
        paragraphs: [
          "Gardens, terraces, patios and continuity between indoors and outdoors: landscape holds a central place in Supra Studio's practice, on a par with interior architecture. This dual expertise — interior architect and landscape designer D.E. — allows us to think of a place to live as a whole, without a break between what happens inside a building and what unfolds outside it. A garden, a terrace or a patio is never treated as mere decoration: it is an integral part of the architectural project.",
          "Designing a garden begins with a careful reading of the site: soil type, exposure, existing vegetation, views to preserve or create, overlooking constraints in an urban setting. In Paris, this exercise is often on a small scale — a patio, a courtyard, a balcony or a roof to be planted — while outside the capital, in Bordeaux or further south, garden projects can extend over much larger areas, with thought given to water management, natural shade and a Mediterranean or Landes-style planting palette depending on the local climate.",
          "Creating a terrace or an urban rooftop involves specific challenges: the load-bearing capacity of the structure, waterproofing, exposure to wind and sun, the choice of surfaces suited to outdoor use — wood, natural stone, terracotta — and a selection of plants able to withstand the sometimes harsh conditions of a city rooftop. Greening a Parisian terrace requires as much technical expertise as landscape sensibility, to ensure the plantings last and the space remains comfortable to use, day and night.",
          "The patio, for its part, offers a particular opportunity: bringing nature into the very heart of a building, within a protected, intimate space. Whether an open-air patio in a Mediterranean house or a planted courtyard in a Parisian building, this type of space creates a breathing room between the interior spaces, an additional source of natural light, and often a strong connection between everyday life and the presence of plants.",
          "Continuity between indoors and outdoors is one of the guiding threads of our landscape practice. It translates concretely into design choices: generous openings towards the garden, flooring materials that match or harmonise between a living space and its terrace, outdoor furniture conceived as an extension of the indoor furniture, plants visible from inside that follow the natural light through the seasons. This continuity transforms how a place is perceived: the boundaries between inside and outside fade, in favour of a unified living space.",
          "In our outdoor designs, we favour natural, durable materials — local stone, untreated wood, terracotta, lime renders — as well as a plant palette suited to the climate and soil of the site, to limit watering and maintenance needs while ensuring good integration into the landscape. This approach echoes our broader reflection on bio-based materials and an architecture attentive to its resources, both inside and outside a building.",
          "Every landscape project follows a method comparable to our interior architecture projects: a consultation visit to understand the site and desired uses, a technical feasibility study, design of plans and choice of materials and plants, then site supervision with landscape contractors and craftspeople. This rigour ensures that the garden, terrace or patio imagined at the design stage matches the delivered space, within the budget and schedule set beforehand. Between Paris, Bordeaux and Rome, we support landscape projects of every scale, from the smallest urban patio to the largest Mediterranean garden, with the same attention to light, materials and use that characterises all our interior architecture projects.",
        ],
      },
      {
        id: "joinery",
        title: "Bespoke Fittings & Furniture",
        tag: "Creating elements designed specifically for the place.",
        paragraphs: [
          "Creating elements designed specifically for the place: that is the whole point of bespoke fittings and furniture, an essential dimension of our practice as interior architects. Where standard furniture imposes its own dimensions and constraints on a space, bespoke fittings start from the space itself — its volumes, constraints and real uses — to design elements that fit into it with precision, down to the millimetre.",
          "This approach comes into its own in older Parisian apartments, often marked by unusual volumes: non-right angles, sloped ceilings, alcoves, varying ceiling heights. Standard furniture adapts poorly to these, leaving wasted space or insufficient storage. Bespoke fittings, by contrast, make the most of every nook: a bookshelf built into an alcove, a dressing room designed to fill an entire sloped wall, a window seat with integrated storage. Each piece of furniture becomes an architectural response to the real configuration of the place.",
          "The bespoke kitchen illustrates this logic well: rather than assembling standardised modules, we design a layout that responds precisely to the household's habits — a worktop height suited to its users, optimised circulation between preparation, cooking and storage zones, materials chosen for their durability and their coherence with the rest of the apartment. An open kitchen onto the living room requires particular care in the choice of finishes, so that the furniture engages in dialogue with the rest of the room rather than standing apart as an isolated technical block.",
          "Dressing rooms and integrated storage answer a similar problem: making the most of an often limited volume to offer maximum storage capacity without compromising circulation or the room's aesthetics. We design these elements with our clients' precise needs in mind — clothing, shoes, household linen — for storage that is both functional and discreet, harmoniously integrated into the room's architecture, whether in a master suite or an entrance hall.",
          "The bathroom, too, often benefits from bespoke fittings: vanity units sized to the exact dimensions of the room, integrated storage, precisely dimensioned shower niches. In small bathrooms, particularly common in older Parisian housing, every centimetre counts — bespoke design makes it possible to make full use of the available space without sacrificing comfort or the intended aesthetic.",
          "Beyond function, the choice of materials and finishes for bespoke furniture plays a full part in a project's identity. Solid wood, natural veneer, brass, stone, ceramic: each material is selected in harmony with the overall atmosphere of the place, continuing the choices made for floors, walls and joinery. This overall coherence between architecture, fittings and furniture sets a project conceived as a whole apart from a simple assembly of separately purchased furniture.",
          "Building a bespoke fitting involves close collaboration with skilled craftspeople — cabinetmakers, joiners, metalworkers — chosen for their expertise and their ability to faithfully translate plans into built elements. We follow every stage of manufacturing, from on-site measurement through to final installation, to guarantee a result true to the initial design.",
          "Bespoke furniture also offers a benefit that is often underestimated: its longevity. Designed for a specific space, with materials chosen for their quality and their ability to age well, it lasts through the years without losing coherence or functionality, unlike standard furniture that becomes obsolete more quickly as needs evolve. It is an investment in the long term, on a par with a well-considered renovation or extension. Between Paris, Bordeaux and Rome, this craftsmanship-driven rigour remains at the heart of our approach to fittings, for spaces that are functional, durable and deeply personal.",
        ],
      },
      {
        id: "acquisition",
        title: "Pre-Purchase Advice",
        tag: "Assessing a property's architectural potential before buying it.",
        paragraphs: [
          "Assessing a property's architectural potential before buying it is a still little-known service, yet a particularly valuable one for any buyer wanting to commit to a property project with confidence. Buying an apartment or a house is a major, often irreversible investment: beyond the advertised price, the real question is what this property will actually allow you to do — and at what cost — once acquired. That is precisely the role of the pre-purchase advisory service offered by Supra Studio.",
          "Viewing a property with an architect's eye radically changes how a space is read. Where a prospective buyer sees a partition wall, we identify whether it is load-bearing or not, and therefore whether it can be removed to open up the space. Where they perceive a dark room, we assess whether it is possible to create an additional opening, rethink the flow of natural light, or enlarge an existing window. This technical and architectural reading reveals a potential — or limitations — invisible to the untrained eye, and allows a buying decision to be made with full knowledge of the facts.",
          "Our support is based on a consultation visit carried out ahead of, or alongside, the standard viewings with the estate agent. We analyse the building's structure, the feasibility of envisaged works — extension, additional storey, opening up rooms, creating a master suite, opening up a kitchen — as well as co-ownership, planning or heritage constraints that could limit certain projects. This analysis makes it possible to anticipate what will be achievable once the property is acquired, and to avoid the late discovery of a technical or regulatory constraint that would undermine the project originally envisioned, whether a simple renovation or a more ambitious architectural transformation.",
          "One of the major benefits of this service lies in estimating the overall project budget, well before signing. A property advertised at an attractive price can hide costly structural work, a complete electrical upgrade, or thermal insulation that needs redoing entirely — all factors that, added to the purchase price, significantly change the real cost of the operation. Conversely, a property that seems to need a great deal of work can sometimes be transformed with more targeted, less costly interventions than expected. This upfront assessment gives the buyer concrete arguments, including for negotiating the purchase price based on the work actually required and the anticipated schedule.",
          "This service proves particularly useful in older Parisian buildings, where the diversity of layouts — Haussmann-era blocks, artists' studios, top-floor attic conversions, garden-level flats — makes every property unique when facing a renovation or extension project. It is equally valuable for a house project in Bordeaux or elsewhere, where the question of the plot, its orientation and its potential for extension or landscaping also comes into play in the buying decision.",
          "Beyond the financial aspect, this visit with an architect brings a form of peace of mind to a decision often charged with emotion. It allows buyers to picture themselves concretely in the space: visualise what a room could become once reorganised, understand the real limitations of a property before becoming attached to it, or conversely discover unsuspected potential that fully justifies the purchase. It is a decision-support service, complementary to the work of the estate agent, the notary or the surveyor, focused specifically on the architectural dimension and the property's transformation potential.",
          "Between Paris, Bordeaux and Rome, we offer this service to anyone engaged in a property search, even before signing a purchase agreement, to turn a simple viewing into a genuine potential assessment — and so help secure one of the most important decisions of a lifetime, with the same architectural eye we bring to our renovation, extension and new-build projects.",
        ],
      },
      ],
      methodLabel: "Our working method",
      methodTitle: "From First Meeting to Handover: Our Design and Site Supervision Process",
      methodSteps: [
        {
          num: "01",
          title: "The first meeting",
          body: "This first exchange takes place on site, by video call or by phone. You share your project, your needs and your wishes with us. In return, we give a first assessment of its feasibility — structural, planning, budgetary and environmental constraints — to set clear foundations before we begin.",
        },
        {
          num: "02",
          title: "Design",
          body: "This is when the project takes shape: we translate your expectations into initial spatial intentions, between interior architecture and landscape architecture as needed. Volumes, circulation, light and materials are considered together, to give the project a clear and coherent direction before going further.",
        },
        {
          num: "03",
          title: "Administrative procedures",
          body: "Prior declaration, building permit application, planning-related formalities: we prepare and file the documents your project requires with you. This step demands rigour and patience, but it is essential to secure the rest of the site works. We support you through to obtaining the necessary approvals.",
        },
        {
          num: "04",
          title: "Detailed drawings",
          body: "While the application is under review, we develop the technical plans in depth: electrics, plumbing, heating, joinery, finishes. Each space is detailed with precision, and specifications are drafted for each trade, to prepare the tender process with contractors. This meticulous phase determines the quality of the entire build to come.",
        },
        {
          num: "05",
          title: "Selecting craftspeople",
          body: "We draw on a network of local craftspeople and businesses, chosen with the same rigour we bring to every project. Once quotes are received, we analyse them and advise you on which contractors to retain. Further discussion is usually needed to align the offers with the level of detail expected for your project.",
        },
        {
          num: "06",
          title: "Site supervision",
          body: "Work begins: our role shifts from design to build supervision. Our regular presence on site is accompanied by detailed reports, to ensure coordination between teams and fidelity between the site and the drawn project. Handover marks the culmination of an attentive collaboration — and the beginning of a place fully lived in.",
        },
      ],
    },
    projectsPage: {
      label: "Our work",
      title: "Our Interior Architecture and Landscape Projects",
      h1Title: "Our Interior Architecture and Landscape Design Projects: Paris, Bordeaux & Rome",
      desc: "Renovated apartments, new houses, gardens and shops — every project reflects the same pursuit of rightness between material, light and use, between Paris, Bordeaux and Rome.",
      presented: "Projects featured",
      countries: "Countries represented",
      territories: "Where we work",
      typeLabel: "Project type",
      programmeLabel: "Programme",
      surfaceLabel: "Area",
      yearLabel: "Year",
    },
    journalPage: {
      label: "Journal",
      title: "The Supra Studio Journal",
      h1Title: "Journal:\nInterior Architecture, Landscape Design & Studio News",
      desc: "Behind the scenes on site, thoughts on material and light, studio news: the Supra Studio journal, between Paris, Bordeaux and Rome.",
      backToJournal: "← All articles",
      readMore: "Read the article →",
      publishedOn: "Published on",
      minRead: "min read",
      discoverAlso: "Also worth reading",
      relatedProjects: "Related projects",
      empty: "The first articles are coming very soon.",
    },
    reviews: {
      label: "Client reviews",
      title: "Trusted by our clients",
      studioTitle: "A trusted relationship, from the first conversation to handover",
      servicesTitle: "Design and site supervision praised by our clients",
      ratingBadgeLabel: "Google rating",
      reviewsCountSuffix: "reviews",
      linkText: "See all our reviews on Google →",
    },
    faqPage: {
      label: "FAQ",
      h1Title: "Frequently Asked Questions: Interior Architecture, Landscape & Project",
      desc: "Fees, project stages, site supervision, service areas: answers to the questions we're asked most often.",
    },
    contactPage: {
      label: "Contact",
      title: "Let's talk about your project",
      h1Title: "Interior Architect & Landscape Designer in Paris: Let's Talk About Your Project",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone",
      formMessage: "Tell us about your project in a few words",
      submit: "Send",
      sending: "Sending...",
      sent: "Thank you, your message has been sent.",
      error: "An error occurred, please try again.",
      infoLabel: "Contact details",
      meetTitle: "Come meet us",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      appointmentLabel: "Book an appointment",
      followLabel: "Follow us",
    },
    meta: {
      home: {
        title: "Supra Studio — Interior Architect & Landscape Designer in Paris",
        description:
          "Interior architect and landscape designer in Paris: renovations, new-build homes and bespoke gardens. French-Italian duo, between Paris, Bordeaux and Rome.",
      },
      studio: {
        title: "The Studio — Supra Studio | Interior Architect & Landscape Designer Paris",
        description:
          "Supra Studio, an interior architecture and landscape design practice founded by a French-Italian duo, between Paris, Bordeaux and Rome. Discover our vision, our team and our values.",
      },
      services: {
        title: "Our Services — Supra Studio | Interior Architecture & Landscape",
        description:
          "Consultation visit, feasibility, design, site supervision: discover our complete support method, from the first meeting to the handover of your project.",
      },
      projects: {
        title: "Our Projects — Supra Studio | Interior Architecture & Landscape",
        description:
          "Renovated apartments, new houses, gardens and restaurants: discover Supra Studio's projects in Paris, Bordeaux and Rome.",
      },
      journal: {
        title: "Journal — Supra Studio | Interior Architecture & Landscape",
        description:
          "The Supra Studio journal: behind the scenes on site, thoughts on material and light, studio news, between Paris, Bordeaux and Rome.",
      },
      faq: {
        title: "FAQ — Supra Studio | Interior Architecture & Landscape",
        description:
          "Fees, project stages, site supervision, service areas: all the answers to your questions about working with Supra Studio.",
      },
      contact: {
        title: "Contact — Supra Studio | Interior Architect & Landscape Designer Paris",
        description:
          "Contact Supra Studio for your interior architecture or landscape design project in Paris. 14 rue des Fonds Verts, 75012 Paris — contact@suprastudio.fr.",
      },
      projectSuffix: "A Supra Studio project, interior architecture and landscape design practice.",
      legalNotice: {
        title: "Legal Notice — Supra Studio",
        description: "Legal notice for the Supra Studio website: publisher, hosting, intellectual property and governing law.",
      },
      privacy: {
        title: "Privacy Policy — Supra Studio",
        description: "Privacy policy for the Supra Studio website: data collected, purposes, retention period and your GDPR rights.",
      },
    },
  },
  it: {
    nav: { studio: "Studio", projects: "Progetti", journal: "Journal", services: "Servizi", contact: "Contatti" },
    scroll: "Scorri",
    discoverStudio: "Scopri lo studio",
    learnMoreStudio: "Scopri di più sullo studio",
    seeAllProjects: "Vedi tutti i progetti ↗",
    bookAppointment: "Prenota un appuntamento",
    bookShort: "Prenota",
    bookSlot: "Prenota un appuntamento via Calendly ↗",
    ctaLine: "Dalla progettazione alla consegna, un progetto chiavi in mano.",
    workInProgress: "In corso",
    backToProjects: "← Tutti i progetti",
    discoverAlso: "Da scoprire anche",
    identityCard: "Scheda del progetto",
    plansLabel: "Piante",
    footer: { rights: "Tutti i diritti riservati", legal: "Note legali", privacy: "Privacy" },
    cookieBanner: {
      title: "Cookie",
      text: "Utilizziamo Google Analytics per misurare l'affluenza al sito.",
      link: "Scopri di più",
      accept: "Accetta",
      decline: "Rifiuta",
    },
    home: {
      heroTitleLines: ["Architetto d'Interni &", "Paesaggista a Parigi"],
      heroSub:
        "Ristrutturazione di appartamenti, case nuove, negozi, hotel, ristoranti, uffici e giardini, concepiti secondo un'unica visione architettonica.",
      introQuote:
        "«Siamo uno studio di architetti d'interni e paesaggisti a Parigi, Roma e Bordeaux.»",
      introText:
        "Fondato da un duo franco-italiano, Supra Studio è uno studio di architettura d'interni e paesaggio con sede a Parigi, specializzato nella ristrutturazione di appartamenti, nella progettazione di case unifamiliari e nella realizzazione di spazi esterni di alta gamma, tra Parigi, Bordeaux e Roma.",
      stats: [
        { figure: "3 città, 2 paesi, 1 visione", label: "Parigi · Bordeaux · Roma" },
        { figure: "+ 15 anni", label: "Di esperienza complessiva" },
        {
          figure: "3 specializzazioni",
          label: "Architetto HMONP · Architetto d'interni · Paesaggista D.E.",
        },
      ],
      expertiseQuote:
        "All'incrocio tra architettura, architettura d'interni e paesaggio, ci impegniamo a offrire a ogni cliente un progetto su misura, in cui materiali naturali, luce e sobrietà contemporanea si uniscono per creare spazi di vita sensibili, durevoli e senza tempo.",
    },
    studioPage: {
      heroTitle: "La nostra visione: rivelare la luce, elevare l'ordinario",
      definition: {
        word: "su·pra",
        ipa: "/sy.pʁa/",
        pos: "preposizione, latino",
        defs: [
          "Al di sopra, al di là.",
          "(in senso figurato) Da un luogo che si accontenta di funzionare, a un luogo che eleva chi lo abita.",
        ],
        epigraph: "Ciò che va oltre il funzionale per raggiungere l'essenziale.",
      },
      visionLabel: "Architetto d'interni Parigi, paesaggista D.E. Parigi",
      visionText:
        "Qui si svelano i nostri progetti di architettura d'interni e di paesaggio, tra Parigi, Bordeaux e Roma — appartamenti ristrutturati, case nuove, giardini e terrazze concepiti come prolungamenti dello spazio abitato. Ogni realizzazione racconta la stessa ricerca: quella di un giusto equilibrio tra materia, luce e uso. Prediligiamo materiali naturali, linee essenziali e una progettazione eco-responsabile, per luoghi capaci di attraversare il tempo senza mai passare di moda. Sfogliando queste pagine scoprirete il nostro modo di abitare le soglie — tra interno ed esterno, tra sobrietà e carattere — e la nostra convinzione che la semplicità, quando è giusta, diventa una forma di raffinatezza.",
      sectionLabel: "Lo studio",
      title: "Due percorsi, una visione dell'Architettura d'Interni e del Paesaggio",
      titleHome: "Un duo, due percorsi:\nL'Alleanza tra Architettura d'Interni e Paesaggio",
      p1: "Supra Studio nasce dall'incontro di due percorsi complementari e internazionali. Beatrice, laureata alla Sapienza di Roma e abilitata HMONP a Parigi, ha lavorato presso studi di architettura a Parigi. Paul, formatosi a Bordeaux in architettura d'interni e paesaggio, ha lavorato anch'egli a Parigi, presso studi di architettura e paesaggio.",
      p2: "Insieme mettono in comune le loro competenze in architettura d'interni e architettura del paesaggio, guidati dalla stessa esigenza di precisione, creatività e qualità, dalla progettazione fino alla direzione lavori.",
      partnersLabel: "I nostri partner",
      partnersTitle: "Artigiani e imprese locali",
      partnersText:
        "Ci circondiamo di imprese locali e artigiani qualificati, scelti con la stessa esigenza dedicata a ogni progetto. Questa stretta collaborazione, fin dalla fase di progettazione, ci permette di garantire una direzione lavori rigorosa e una realizzazione fedele a ogni dettaglio immaginato.",
      partnersTagline:
        "Imprese locali e artigiani qualificati, scelti con la stessa esigenza per ogni progetto.",
      valuesLabel: "Il nostro impegno",
      valuesTitle: "I nostri valori e impegni",
      valuesText:
        "Ristrutturazione di appartamenti, progettazione di case nuove, allestimento d'interni su misura o architettura del paesaggio: in ogni progetto, Supra Studio va oltre la semplice pianta per rivelare la luce e la coerenza proprie di ogni luogo. La nostra priorità: progetti sensibili, durevoli e pienamente personalizzati — pensati per essere vissuti, dal primo tratto alla consegna.",
      valuesTagline:
        "Progetti sensibili, durevoli e pienamente personalizzati, pensati per essere vissuti.",
      learnMore: "Scopri di più →",
    },
    servicesPage: {
      label: "I nostri servizi",
      title: "Un Accompagnamento Su Misura:\nDalla Progettazione alla Direzione Lavori",
      h1Title: "Architettura d'Interni & Paesaggio:\nI Nostri Servizi Su Misura",
      intro:
        "Supra Studio riunisce competenze in architettura d'interni e architettura del paesaggio, arricchite da una formazione e un'esperienza nella progettazione architettonica. Quattro missioni complementari, attivabili insieme o separatamente a seconda delle esigenze del vostro progetto.",
      steps: [
        {
          num: "01",
          title: "Visita conoscitiva",
          tag: "Un primo sguardo sul vostro progetto",
          body: "La visita conoscitiva è la prima tappa della nostra collaborazione. Sul posto, analizziamo il vostro spazio — interno, esterno o entrambi — per comprendere usi, vincoli e desideri. Questo incontro ci permette di consigliarvi al meglio prima di ogni impegno.",
        },
        {
          num: "02",
          title: "Fattibilità",
          tag: "Valutare il reale potenziale del progetto",
          body: "Studiamo la fattibilità tecnica, normativa e di budget del vostro progetto: vincoli dell'edificio, regole urbanistiche, possibilità di allestimento interno o intervento paesaggistico, prima di passare alla progettazione dettagliata.",
        },
        {
          num: "03",
          title: "Progettazione",
          tag: "Dare forma al progetto",
          body: "Sviluppiamo piante, volumi, materiali e atmosfere del vostro progetto. Grazie alle nostre competenze in architettura d'interni e architettura del paesaggio, concepiamo spazi coerenti in cui interno ed esterno dialogano.",
        },
        {
          num: "04",
          title: "Direzione lavori",
          tag: "Un accompagnamento fino alla realizzazione",
          body: "Garantiamo la direzione lavori con imprese e artigiani, per assicurare la fedeltà del progetto realizzato rispetto all'idea originaria — fino alla consegna di un luogo realmente vissuto.",
        },
      ],
      areasLabel: "I Nostri Ambiti di Intervento",
      areasTitle: "Ristrutturazione, ampliamento, paesaggio: i nostri ambiti di competenza",
      areasIntro: "Ogni progetto coinvolge uno o più di questi ambiti, secondo le esigenze del luogo e dei suoi usi.",
      areas: [
      {
        id: "renovation",
        title: "Ristrutturazione",
        tag: "Trasformare un appartamento, una casa o uno spazio esistente.",
        paragraphs: [
          "La ristrutturazione è uno degli interventi più frequenti di Supra Studio, che si tratti di un appartamento parigino, di una casa a Bordeaux o di un immobile a Roma. Trasformare uno spazio esistente richiede un approccio diverso da una costruzione nuova: bisogna confrontarsi con la storia dell'edificio, i suoi vincoli strutturali, il regolamento condominiale e, spesso, un potenziale nascosto dietro tramezzi o rivestimenti datati. Il nostro compito è proprio quello di rivelare questo potenziale, conciliando il rispetto dell'edificio esistente con le esigenze del confort contemporaneo.",
          "Ogni progetto di ristrutturazione inizia con una visita conoscitiva sul posto. Osserviamo la luce naturale nelle diverse ore e stagioni, la circolazione tra gli ambienti, gli elementi storici da conservare — cornici, parquet antico, camini, altezze dei soffitti — e i vincoli tecnici: impianti idraulici ed elettrici datati, muri portanti, isolamento termico e acustico. Questa lettura approfondita dell'edificio è indispensabile prima di considerare qualsiasi trasformazione, poiché condiziona sia il budget che la fattibilità normativa del progetto.",
          "Ristrutturare un appartamento antico, in particolare in un palazzo haussmanniano a Parigi, comporta spesso una riflessione sull'apertura degli spazi: aprire una cucina sul soggiorno, ripensare la circolazione, o creare una suite con cabina armadio e bagno integrati. Questi interventi riguardano frequentemente muri portanti, il che richiede l'intervento di uno studio tecnico strutturale e, secondo i casi, una dichiarazione preliminare o un'autorizzazione condominiale. Accompagniamo i nostri clienti in questi passaggi amministrativi, occupandoci dei rapporti con l'amministratore, la soprintendenza nelle zone protette e le imprese edili.",
          "Ristrutturare una casa individuale pone altre sfide: prestazione energetica, riorganizzazione dei volumi su più livelli, creazione di aperture verso il giardino, adeguamento degli impianti elettrici e sanitari. Integriamo sistematicamente una riflessione sui materiali biobased e sulle soluzioni di isolamento naturale quando il progetto lo consente, in una logica di confort duraturo piuttosto che di sola performance energetica. La scelta dei materiali — legno, pietra naturale, cotto, intonaci a base di calce — contribuisce sia all'estetica del luogo che al suo benessere termico e acustico.",
          "Il nostro approccio alla ristrutturazione non si limita all'estetica: consideriamo ogni spazio nella sua globalità, pensando agli usi presenti e futuri degli abitanti. Una cucina aperta deve funzionare sia per un pasto quotidiano che per ricevere ospiti; una cabina armadio deve adattarsi all'evoluzione dello stile di vita; un bagno deve coniugare funzionalità e serenità. Questo approccio su misura distingue una ristrutturazione pensata da un architetto d'interni da un semplice rinnovamento: ogni scelta di piano, materia e luce risponde a un uso reale e a un'intenzione architettonica coerente.",
          "Il coordinamento del cantiere è una fase determinante di ogni ristrutturazione riuscita. Coordiniamo i diversi mestieri — muratura, idraulica, elettricità, falegnameria, pittura — per garantire che l'esecuzione resti fedele ai piani e alle atmosfere immaginate in fase di progettazione. Gli imprevisti sono frequenti negli edifici antichi: scoperta di un impianto non conforme, di una struttura fragile, o di un vizio nascosto dietro un rivestimento. La nostra presenza regolare in cantiere permette di anticipare questi imprevisti e proporre rapidamente soluzioni adeguate, senza compromettere la visione d'insieme del progetto né il budget iniziale.",
          "Che la ristrutturazione riguardi un monolocale, un grande appartamento familiare o un'intera casa, l'obiettivo resta lo stesso: restituire coerenza a un luogo, rivelarne la luce naturale, e creare uno spazio di vita sensibile e duraturo, perfettamente adatto agli usi dei suoi abitanti. Tra Parigi, Bordeaux e Roma, Supra Studio mette la sua competenza di architetti d'interni e paesaggisti al servizio di questa trasformazione, dalla prima visita conoscitiva fino alla consegna del cantiere, con la stessa esigenza di precisione in ogni fase del progetto.",
        ],
      },
      {
        id: "extension",
        title: "Ampliamento & Sopraelevazione",
        tag: "Creare nuovi volumi e far evolvere l'architettura.",
        paragraphs: [
          "L'ampliamento e la sopraelevazione rispondono a uno stesso bisogno: creare nuovi volumi quando lo spazio esistente non basta più, senza dover cambiare casa. Una famiglia che cresce, un telelavoro che richiede uno studio indipendente, un desiderio di luce o di altezza aggiuntiva — queste situazioni portano spesso a ripensare l'architettura di una casa piuttosto che cercarne un'altra. Supra Studio accompagna questi progetti dall'inizio alla fine, dallo studio di fattibilità fino alla consegna, sia nella regione parigina che nella Gironda.",
          "L'ampliamento consiste nell'estendere una costruzione a livello del suolo, in un corpo aggiunto sul giardino o in prosecuzione di una facciata esistente: ampliamento di un soggiorno, creazione di una veranda, di un atelier o di una suite indipendente. La sopraelevazione, invece, consiste nell'aggiungere un livello supplementare all'edificio esistente — un piano, un sottotetto abitabile, o un'estensione in copertura. Entrambi gli approcci condividono le stesse sfide tecniche: devono confrontarsi con la struttura portante esistente, rispettare le norme urbanistiche locali — piano urbanistico, distanze regolamentari, sagoma ammessa — e integrarsi con coerenza nell'architettura originale, senza snaturarla.",
          "La prima fase di ogni progetto di ampliamento o sopraelevazione è uno studio di fattibilità rigoroso. Analizziamo la struttura dell'edificio esistente — fondamenta, muri portanti, copertura — per determinare cosa può essere modificato o rinforzato, così come le norme urbanistiche applicabili al terreno: superficie coperta ammessa, altezza massima, distanze dai confini, aspetto esteriore imposto in alcune zone protette. Questa fase tecnica e normativa condiziona direttamente la natura del progetto e va condotta prima di qualsiasi progettazione dettagliata, per evitare costose delusioni.",
          "Al di là dei vincoli tecnici, un ampliamento o una sopraelevazione riusciti si pensano come un'evoluzione coerente dell'architettura esistente, e non come un'aggiunta estranea. La scelta dei materiali, delle proporzioni e del linguaggio architettonico deve dialogare con l'edificio originale: talvolta in continuità, con gli stessi materiali e la stessa copertura; talvolta in contrasto deciso, con un'architettura contemporanea che sottolinea la differenza tra antico e nuovo. Questa scelta dipende dal contesto, dal regolamento urbanistico locale e dalla sensibilità del cliente — accompagniamo questa riflessione caso per caso, senza formule prestabilite.",
          "Un progetto di sopraelevazione comporta generalmente un intervento strutturale importante: rinforzo delle fondamenta, realizzazione di una nuova copertura, talvolta un consolidamento delle fondazioni esistenti. Questi lavori richiedono un coordinamento stretto con uno studio tecnico strutturale e imprese specializzate, che gestiamo per conto del cliente. Un ampliamento a livello del giardino, strutturalmente più leggero, pone maggiori interrogativi sull'orientamento, l'esposizione solare e la continuità con il giardino o la terrazza esistente — temi che riguardano tanto l'architettura quanto il paesaggio.",
          "Questi progetti richiedono anche di anticipare le pratiche amministrative: comunicazione preliminare per gli ampliamenti di piccola superficie, permesso di costruire oltre certe soglie, consultazione degli uffici urbanistici a monte per garantire la fattibilità. Prepariamo tutti i documenti grafici e amministrativi necessari alla presentazione della pratica, e curiamo i rapporti con gli enti competenti fino all'ottenimento delle autorizzazioni.",
          "Infine, come per ogni progetto di costruzione, il coordinamento del cantiere resta determinante: la struttura, l'impermeabilizzazione e i raccordi tra esistente e nuovo sono punti di attenzione costante in questo tipo di intervento. La nostra presenza regolare in cantiere garantisce la coerenza tra progettazione ed esecuzione, fino alla consegna di un volume nuovo perfettamente integrato nell'architettura esistente e negli usi dei suoi abitanti. Che il progetto si trovi a Parigi, a Bordeaux o nei loro dintorni, il nostro metodo resta lo stesso: una lettura precisa dell'esistente, una risposta architettonica appropriata, e un accompagnamento continuo fino alla fine del cantiere, nel rispetto del budget e del calendario fissati in fase di progettazione.",
        ],
      },
      {
        id: "architecture",
        title: "Architettura",
        tag: "Concepire, trasformare e far evolvere gli spazi costruiti.",
        paragraphs: [
          "Concepire, trasformare e far evolvere gli spazi costruiti: questa è la definizione stessa dell'architettura, in senso ampio, come la pratichiamo da Supra Studio. Al di là della ristrutturazione o dell'architettura d'interni, questa dimensione comprende la progettazione di costruzioni nuove e la riflessione architettonica globale su un edificio — i suoi volumi, la sua struttura, la sua collocazione, il suo rapporto con il sito e con la luce. È la base su cui si appoggiano tutti i nostri interventi, che riguardino l'interno, l'ampliamento o il paesaggio.",
          "Progettare una casa nuova, ad esempio, richiede di pensare simultaneamente alla collocazione sul terreno, all'orientamento rispetto al sole e ai venti dominanti, ai volumi interni ed esterni, alla circolazione tra gli spazi, e all'integrazione nel paesaggio circostante. Questo lavoro inizia sempre con un'analisi approfondita del sito: topografia, vegetazione esistente, vedute, vincoli urbanistici, natura del terreno. È questa lettura del contesto che permette di proporre un'architettura appropriata al suo luogo, piuttosto che un progetto standardizzato riproducibile ovunque.",
          "Il nostro approccio architettonico si distingue per la formazione incrociata dei nostri due fondatori, uno abilitato HMONP e l'altra formata in architettura d'interni e paesaggio: questo ci permette di pensare un edificio nella sua totalità, senza compartimentare i mestieri. Un progetto architettonico coerente non separa la struttura, l'interno e gli spazi esterni; li pensa insieme, dai primi schizzi. Questa visione globale evita le decisioni compartimentate che, prese isolatamente, producono spesso spazi disomogenei una volta costruiti.",
          "La progettazione architettonica segue un metodo rigoroso: studi preliminari e fattibilità, schizzi e piani di progetto preliminare, scelta dei materiali e dei sistemi costruttivi, pratica per il permesso di costruire, poi fase esecutiva e coordinamento del cantiere. Ogni fase si basa su un dialogo costante con il cliente, per adattare il progetto ai suoi usi reali, al suo budget e ai suoi vincoli di calendario. Lavoriamo inoltre a stretto contatto con gli studi tecnici — strutturale, termico, impiantistico — necessari alla solidità e alla conformità normativa di un progetto di costruzione.",
          "L'architettura, nella nostra pratica, si occupa anche della questione dei materiali e della loro messa in opera. La scelta del legno, della pietra, della terra cruda o degli intonaci naturali non riguarda solo l'estetica: condiziona il confort termico e acustico dell'edificio, la sua durabilità, e la sua capacità di invecchiare bene nel tempo. Privilegiamo quanto possibile i materiali biobased e le risorse locali, in un approccio di sobrietà che si ricollega alle nostre convinzioni in materia di paesaggio e di architettura d'interni.",
          "La dimensione normativa occupa un posto importante in ogni progetto architettonico: rispetto del piano urbanistico locale, delle norme di distanza e altezza, degli standard di accessibilità e sicurezza, talvolta il parere della soprintendenza in zona protetta. Anticipiamo questi vincoli già dalla fase di fattibilità, per proporre soluzioni architettoniche realistiche ed evitare blocchi amministrativi in corso di progetto — un accompagnamento che rassicura particolarmente i committenti poco familiari con queste pratiche.",
          "Infine, un progetto architettonico non si conclude con il rilascio del permesso di costruire: il coordinamento del cantiere garantisce che la realizzazione resti fedele alla progettazione, nel rispetto dei tempi e del budget. Assicuriamo questa direzione lavori fino alla consegna, in coordinamento con le imprese e gli artigiani coinvolti nel cantiere. Tra Parigi, Bordeaux e Roma, questo approccio architettonico globale — concepire, trasformare, far evolvere — resta il filo conduttore di ogni progetto che conduciamo, che si tratti di una costruzione nuova, di un ampliamento o di una trasformazione profonda di un edificio esistente, sempre guidato dalla stessa esigenza di coerenza e di equilibrio complessivo.",
        ],
      },
      {
        id: "landscape",
        title: "Paesaggio & Spazi Esterni",
        tag: "Giardini, terrazze, patii e continuità tra interno ed esterno.",
        paragraphs: [
          "Giardini, terrazze, patii e continuità tra interno ed esterno: il paesaggio occupa un posto centrale nella pratica di Supra Studio, allo stesso livello dell'architettura d'interni. Questa doppia competenza — architetto d'interni e paesaggista D.E. — ci permette di pensare un luogo di vita nella sua totalità, senza rottura tra ciò che accade all'interno di un edificio e ciò che si sviluppa all'esterno. Un giardino, una terrazza o un patio non sono mai trattati come un semplice elemento decorativo: fanno parte integrante del progetto architettonico.",
          "Progettare un giardino inizia con una lettura attenta del sito: natura del terreno, esposizione, vegetazione esistente, vedute da preservare o creare, vincoli di affaccio in ambito urbano. A Parigi, l'esercizio si pone spesso su piccola scala — un patio, una corte, un balcone o una copertura da rendere verde — mentre fuori dalla capitale, a Bordeaux o più a sud, i progetti di giardino possono estendersi su superfici più ampie, con una riflessione sulla gestione dell'acqua, l'ombra naturale e la scelta di specie vegetali mediterranee o tipiche delle Landes secondo il clima locale.",
          "La creazione di una terrazza o di un rooftop urbano risponde a esigenze specifiche: portata ammissibile della struttura, impermeabilizzazione, esposizione al vento e al sole, scelta di rivestimenti adatti all'esterno — legno, pietra naturale, cotto — e selezione di piante capaci di resistere alle condizioni talvolta difficili di una copertura in città. Rendere verde una terrazza parigina richiede una competenza tecnica quanto paesaggistica, per garantire la durata delle piantumazioni e il confort d'uso dello spazio, di giorno come di sera.",
          "Il patio, a sua volta, offre un'opportunità particolare: quella di far entrare la natura nel cuore stesso di un edificio, in uno spazio protetto e intimo. Che si tratti di un patio a cielo aperto in una casa mediterranea o di una corte verde in un palazzo parigino, questo tipo di spazio crea un respiro tra gli ambienti, una fonte di luce naturale supplementare, e spesso un legame forte tra gli usi quotidiani e la presenza del verde.",
          "La continuità tra interno ed esterno costituisce uno dei fili conduttori della nostra pratica paesaggistica. Si traduce concretamente in scelte progettuali: apertura generosa verso il giardino, materiali di pavimentazione identici o in armonia tra un ambiente di vita e la sua terrazza, arredi esterni pensati come prosecuzione dell'arredo interno, vegetazione visibile dall'interno che accompagna la luce naturale nel corso delle stagioni. Questa continuità trasforma la percezione di un luogo: i confini tra dentro e fuori si dissolvono, a favore di uno spazio di vita unificato.",
          "Privilegiamo nei nostri progetti esterni materiali naturali e duraturi — pietra locale, legno non trattato, cotto, intonaci a base di calce — così come una selezione vegetale adatta al clima e al terreno del sito, per limitare le necessità di irrigazione e manutenzione garantendo al tempo stesso una buona integrazione paesaggistica. Questo approccio si ricollega alla nostra riflessione più ampia sui materiali biobased e su un'architettura attenta alle proprie risorse, sia all'interno che all'esterno di un edificio.",
          "Ogni progetto paesaggistico segue un metodo simile ai nostri progetti di architettura d'interni: visita conoscitiva per comprendere il sito e gli usi desiderati, studio di fattibilità tecnica, progettazione dei piani e scelta dei materiali e delle piante, poi coordinamento del cantiere con le imprese del verde e gli artigiani coinvolti. Questo rigore garantisce che il giardino, la terrazza o il patio immaginati in fase di progettazione corrispondano fedelmente allo spazio consegnato, nel rispetto del budget e del calendario fissati in anticipo. Tra Parigi, Bordeaux e Roma, accompagniamo così progetti di paesaggio di ogni scala, dal piccolo patio urbano al più vasto giardino mediterraneo, con la stessa attenzione alla luce, alle materie e agli usi che caratterizza tutti i nostri progetti di architettura d'interni.",
        ],
      },
      {
        id: "joinery",
        title: "Arredi & Mobili su Misura",
        tag: "Creare elementi pensati specificamente per il luogo.",
        paragraphs: [
          "Creare elementi pensati specificamente per il luogo: questa è tutta la posta in gioco dell'arredo e del mobile su misura, una dimensione essenziale della nostra pratica di architetti d'interni. Laddove il mobile standard impone le proprie dimensioni e i propri vincoli a uno spazio, l'arredo su misura parte dallo spazio stesso — dai suoi volumi, dai suoi vincoli e dai suoi usi reali — per progettare elementi che vi si integrano con precisione, fino al millimetro.",
          "Questo approccio trova pieno senso negli appartamenti parigini antichi, spesso segnati da volumi atipici: angoli non retti, soffitti inclinati, nicchie, altezze variabili. Il mobile standard si adatta male a questi spazi, lasciando spazi inutilizzati o riponimenti insufficienti. Un arredo su misura, al contrario, valorizza ogni angolo: una libreria integrata in una nicchia, una cabina armadio progettata per occupare l'intera parete inclinata, una panca con contenitore integrato sotto una finestra. Ogni elemento di arredo diventa una risposta architettonica alla configurazione reale del luogo.",
          "La cucina su misura illustra bene questa logica: piuttosto che assemblare moduli standardizzati, progettiamo un arredo che risponde precisamente alle abitudini di vita della famiglia — altezza del piano di lavoro adattata, circolazione ottimizzata tra le zone di preparazione, cottura e riponimento, materiali scelti per la loro resistenza e la loro coerenza con il resto dell'appartamento. Una cucina aperta sul soggiorno richiede un'attenzione particolare nella scelta delle finiture, perché l'arredo dialoghi con il resto dell'ambiente piuttosto che distinguersi come un blocco tecnico isolato.",
          "La cabina armadio e i contenitori integrati rispondono a una problematica simile: ottimizzare un volume spesso limitato per offrire il massimo di capacità di riponimento senza compromettere la circolazione né l'estetica dell'ambiente. Progettiamo questi elementi tenendo conto delle esigenze precise dei nostri clienti — abiti, scarpe, biancheria — per un riponimento al tempo stesso funzionale e discreto, integrato armoniosamente nell'architettura dell'ambiente, che si tratti di una suite o di un ingresso.",
          "Anche il bagno beneficia spesso di un arredo su misura: mobili lavabo adattati alle dimensioni esatte dell'ambiente, contenitori integrati, nicchie doccia dimensionate con precisione. Nei bagni di piccola superficie, particolarmente frequenti nell'edilizia parigina antica, ogni centimetro conta — il su misura permette di sfruttare pienamente lo spazio disponibile senza sacrificare il confort d'uso né l'estetica desiderata.",
          "Al di là della funzione, la scelta dei materiali e delle finiture del mobile su misura partecipa pienamente all'identità del progetto. Legno massello, impiallacciatura naturale, ottone, pietra, ceramica: ogni materiale è selezionato in coerenza con l'atmosfera generale del luogo, in continuità con le scelte fatte per pavimenti, pareti e infissi. Questa coerenza globale tra architettura, arredo e mobili distingue un progetto pensato nella sua totalità da un semplice assemblaggio di mobili acquistati separatamente.",
          "La realizzazione di un arredo su misura implica una collaborazione stretta con artigiani qualificati — ebanisti, falegnami, metalmeccanici — scelti per la loro competenza e la loro capacità di tradurre fedelmente i piani in elementi costruiti. Seguiamo ogni fase della realizzazione, dalla presa di misure sul posto fino al montaggio finale, per garantire un risultato fedele alla progettazione iniziale.",
          "Il mobile su misura presenta infine un vantaggio spesso sottovalutato: la sua durata nel tempo. Progettato per uno spazio preciso, con materiali scelti per la loro qualità e la loro capacità di invecchiare bene, attraversa gli anni senza perdere coerenza né funzionalità, a differenza di un mobile standard più rapidamente obsoleto di fronte all'evoluzione degli usi. È un investimento nel tempo, allo stesso titolo di una ristrutturazione o di un ampliamento ben pensati. Tra Parigi, Bordeaux e Roma, questa esigenza artigianale resta al centro del nostro approccio all'arredo, per spazi al tempo stesso funzionali, duraturi e profondamente personali.",
        ],
      },
      {
        id: "acquisition",
        title: "Consulenza Pre-Acquisto",
        tag: "Valutare il potenziale architettonico di un immobile prima dell'acquisto.",
        paragraphs: [
          "Valutare il potenziale architettonico di un immobile prima dell'acquisto è un servizio ancora poco conosciuto, ma particolarmente prezioso per chi desidera impegnarsi con serenità in un progetto immobiliare. Acquistare un appartamento o una casa rappresenta un investimento importante, spesso definitivo: al di là del prezzo indicato, la vera domanda è cosa questo immobile permetterà realmente di fare — e a quale costo — una volta acquisito. È esattamente il ruolo della consulenza pre-acquisto proposta da Supra Studio.",
          "Visitare un immobile con l'occhio di un architetto cambia radicalmente la lettura di uno spazio. Dove un potenziale acquirente vede una parete divisoria, noi identifichiamo se è portante o meno, e quindi se può essere rimossa per aprire lo spazio. Dove percepisce un ambiente buio, valutiamo se è possibile creare un'apertura supplementare, ripensare la circolazione della luce, o ampliare una finestra esistente. Questa lettura tecnica e architettonica rivela un potenziale — o dei limiti — invisibili a un occhio non esperto, e permette di prendere una decisione d'acquisto con piena consapevolezza.",
          "Il nostro accompagnamento si basa su una visita conoscitiva realizzata prima o in parallelo alle visite classiche con l'agenzia immobiliare. Analizziamo la struttura dell'edificio, la fattibilità dei lavori previsti — ampliamento, sopraelevazione, apertura di ambienti, creazione di una suite, apertura di una cucina — così come i vincoli condominiali, urbanistici o storico-artistici che potrebbero limitare alcuni progetti. Questa analisi permette di anticipare ciò che sarà realizzabile una volta acquisito l'immobile, ed evitare la scoperta tardiva di un vincolo tecnico o normativo che rimetterebbe in discussione il progetto inizialmente immaginato, che si tratti di una semplice ristrutturazione o di una trasformazione architettonica più ambiziosa.",
          "Uno dei principali vantaggi di questo accompagnamento risiede nella stima del budget complessivo del progetto, ben prima della firma. Un immobile offerto a un prezzo interessante può nascondere lavori strutturali costosi, un adeguamento elettrico completo, o un isolamento termico da rifare interamente — tutti elementi che, sommati al prezzo d'acquisto, cambiano significativamente il costo reale dell'operazione. Al contrario, un immobile che sembra richiedere molti lavori può talvolta trasformarsi con interventi più mirati e meno costosi del previsto. Questa valutazione preventiva offre all'acquirente argomenti concreti, anche per negoziare il prezzo d'acquisto in base ai lavori realmente necessari.",
          "Questo accompagnamento si rivela particolarmente utile nell'edilizia antica parigina, dove la varietà delle configurazioni — palazzi haussmanniani, atelier d'artista, ultimo piano sottotetto, piano giardino — rende ogni immobile singolare di fronte a un progetto di ristrutturazione o ampliamento. Lo è altrettanto per un progetto di casa individuale a Bordeaux o altrove, dove la questione del terreno, del suo orientamento e del suo potenziale di ampliamento o di intervento paesaggistico entra anch'essa in gioco nella decisione d'acquisto.",
          "Al di là dell'aspetto finanziario, questa visita con un architetto porta una forma di serenità in una decisione spesso carica di emozione. Permette di immaginarsi concretamente nello spazio: visualizzare cosa diventerebbe un ambiente una volta riorganizzato, comprendere i limiti reali di un immobile prima di affezionarvisi, o al contrario scoprire un potenziale insospettato che giustifica pienamente l'acquisto. È un aiuto alla decisione, complementare al lavoro dell'agente immobiliare, del notaio o del perito, incentrato specificamente sulla dimensione architettonica e sul potenziale di trasformazione dell'immobile.",
          "Tra Parigi, Bordeaux e Roma, proponiamo questo accompagnamento a chiunque sia impegnato in una ricerca immobiliare, ancora prima della firma di un compromesso, per trasformare una semplice visita in una vera analisi di potenziale — e garantire così una delle decisioni più importanti di un percorso di vita, con lo stesso sguardo architettonico che portiamo sui nostri progetti di ristrutturazione, ampliamento e nuova costruzione.",
        ],
      },
      ],
      methodLabel: "Il nostro metodo di lavoro",
      methodTitle: "Dall'Incontro alla Consegna: Il Nostro Processo di Progettazione e Direzione Lavori",
      methodSteps: [
        {
          num: "01",
          title: "L'incontro",
          body: "Questo primo scambio avviene sul posto, in videoconferenza o per telefono. Ci raccontate il vostro progetto, i vostri usi e i vostri desideri. In cambio, diamo un primo sguardo alla sua fattibilità — vincoli dell'edificio, urbanistici, di budget e ambientali — per porre basi chiare prima di iniziare.",
        },
        {
          num: "02",
          title: "La progettazione",
          body: "È il momento in cui il progetto prende forma: traduciamo le vostre aspettative in prime intenzioni spaziali, tra architettura d'interni e architettura del paesaggio a seconda delle esigenze. Volumi, percorsi, luce e materiali sono pensati insieme, per dare al progetto una direzione giusta e coerente prima di proseguire.",
        },
        {
          num: "03",
          title: "Le pratiche amministrative",
          body: "Dichiarazione preliminare, pratica edilizia, formalità urbanistiche: prepariamo e depositiamo con voi i documenti necessari al vostro progetto. Questa fase richiede rigore e pazienza, ma è indispensabile per mettere in sicurezza il proseguimento del cantiere. Vi accompagniamo fino all'ottenimento delle autorizzazioni.",
        },
        {
          num: "04",
          title: "Il disegno esecutivo",
          body: "Durante l'istruttoria della pratica, approfondiamo le piante tecniche: elettricità, idraulica, riscaldamento, infissi, rivestimenti. Ogni spazio viene dettagliato con precisione, e vengono redatti capitolati per ogni lavorazione, per preparare la consultazione delle imprese. Questa fase, minuziosa, condiziona la qualità di tutto il cantiere a venire.",
        },
        {
          num: "05",
          title: "La selezione degli artigiani",
          body: "Ci affidiamo a una rete di artigiani e imprese locali, scelti con la stessa esigenza dedicata a ogni progetto. Una volta ricevuti i preventivi, li analizziamo e vi consigliamo sulle imprese da scegliere. Saranno necessari alcuni scambi per adeguare le offerte al livello di dettaglio atteso per il vostro progetto.",
        },
        {
          num: "06",
          title: "La direzione lavori",
          body: "Iniziano i lavori: il nostro ruolo evolve, dalla progettazione alla direzione della realizzazione. La nostra presenza regolare sul cantiere è accompagnata da resoconti dettagliati, per garantire il coordinamento delle squadre e la fedeltà del cantiere al progetto disegnato. La consegna segna il compimento di una collaborazione attenta — e l'inizio di un luogo pienamente abitato.",
        },
      ],
    },
    projectsPage: {
      label: "Realizzazioni",
      title: "Le nostre realizzazioni in Architettura d'Interni e Paesaggio",
      h1Title: "I Nostri Progetti di Architettura d'Interni e Paesaggio: Parigi, Bordeaux e Roma",
      desc: "Appartamenti ristrutturati, case nuove, giardini e negozi — ogni progetto racconta la stessa ricerca di coerenza tra materia, luce e uso, tra Parigi, Bordeaux e Roma.",
      presented: "Progetti presentati",
      countries: "Paesi rappresentati",
      territories: "Le nostre aree di intervento",
      typeLabel: "Tipo di progetto",
      programmeLabel: "Programma",
      surfaceLabel: "Superficie",
      yearLabel: "Anno",
    },
    journalPage: {
      label: "Journal",
      title: "Il Journal di Supra Studio",
      h1Title: "Journal:\nArchitettura d'Interni, Paesaggio e Novità dello Studio",
      desc: "Dietro le quinte del cantiere, riflessioni sulla materia e sulla luce, novità dello studio: il journal di Supra Studio, tra Parigi, Bordeaux e Roma.",
      backToJournal: "← Tutti gli articoli",
      readMore: "Leggi l'articolo →",
      publishedOn: "Pubblicato il",
      minRead: "min di lettura",
      discoverAlso: "Da leggere anche",
      relatedProjects: "Progetti correlati",
      empty: "I primi articoli arrivano molto presto.",
    },
    reviews: {
      label: "Recensioni clienti",
      title: "La fiducia dei nostri clienti",
      studioTitle: "Un rapporto di fiducia, dal primo scambio alla consegna",
      servicesTitle: "Progettazione e direzione lavori apprezzate dai nostri clienti",
      ratingBadgeLabel: "Valutazione Google",
      reviewsCountSuffix: "recensioni",
      linkText: "Vedi tutte le recensioni su Google →",
    },
    faqPage: {
      label: "FAQ",
      h1Title: "Domande Frequenti: Architettura d'Interni, Paesaggio e Progetto",
      desc: "Onorari, fasi del progetto, direzione lavori, aree di intervento: le risposte alle domande che ci vengono poste più spesso.",
    },
    contactPage: {
      label: "Contatti",
      title: "Parliamo del vostro progetto",
      h1Title: "Architetto d'Interni & Paesaggista a Parigi: Parliamo del Vostro Progetto",
      formName: "Nome",
      formEmail: "Email",
      formPhone: "Telefono",
      formMessage: "Il vostro progetto in poche parole",
      submit: "Invia",
      sending: "Invio...",
      sent: "Grazie, il vostro messaggio è stato inviato.",
      error: "Si è verificato un errore, vi preghiamo di riprovare.",
      infoLabel: "Contatti",
      meetTitle: "Vieni a trovarci",
      addressLabel: "Indirizzo",
      phoneLabel: "Telefono",
      emailLabel: "Email",
      appointmentLabel: "Prenota un appuntamento",
      followLabel: "Seguici",
    },
    meta: {
      home: {
        title: "Supra Studio — Architetto d'interni e Paesaggista a Parigi",
        description:
          "Architetto d'interni e paesaggista a Parigi: ristrutturazioni, case nuove e giardini su misura. Duo franco-italiano, tra Parigi, Bordeaux e Roma.",
      },
      studio: {
        title: "Lo Studio — Supra Studio | Architetto d'interni e Paesaggista Parigi",
        description:
          "Supra Studio, studio di architettura d'interni e paesaggio fondato da un duo franco-italiano, tra Parigi, Bordeaux e Roma. Scoprite la nostra visione, il nostro team e i nostri valori.",
      },
      services: {
        title: "I Nostri Servizi — Supra Studio | Architettura d'interni e Paesaggio",
        description:
          "Visita conoscitiva, fattibilità, progettazione, direzione lavori: scoprite il nostro metodo di accompagnamento completo, dal primo incontro alla consegna del vostro progetto.",
      },
      projects: {
        title: "I Nostri Progetti — Supra Studio | Architettura d'interni e Paesaggio",
        description:
          "Appartamenti ristrutturati, case nuove, giardini e ristoranti: scoprite le realizzazioni di Supra Studio a Parigi, Bordeaux e Roma.",
      },
      journal: {
        title: "Journal — Supra Studio | Architettura d'interni e Paesaggio",
        description:
          "Il journal di Supra Studio: dietro le quinte del cantiere, riflessioni sulla materia e sulla luce, novità dello studio, tra Parigi, Bordeaux e Roma.",
      },
      faq: {
        title: "FAQ — Supra Studio | Architettura d'interni e Paesaggio",
        description:
          "Onorari, fasi del progetto, direzione lavori, aree di intervento: tutte le risposte alle vostre domande su come lavoriamo da Supra Studio.",
      },
      contact: {
        title: "Contatti — Supra Studio | Architetto d'interni e Paesaggista Parigi",
        description:
          "Contattate Supra Studio per il vostro progetto di architettura d'interni o paesaggio a Parigi. 14 rue des Fonds Verts, 75012 Parigi — contact@suprastudio.fr.",
      },
      projectSuffix: "Un progetto Supra Studio, studio di architettura d'interni e paesaggio.",
      legalNotice: {
        title: "Note legali — Supra Studio",
        description: "Note legali del sito Supra Studio: editore, hosting, proprietà intellettuale e legge applicabile.",
      },
      privacy: {
        title: "Informativa sulla privacy — Supra Studio",
        description: "Informativa sulla privacy del sito Supra Studio: dati raccolti, finalità, periodo di conservazione e i vostri diritti GDPR.",
      },
    },
  },
} as const;

export const SITE_URL = "https://www.suprastudio.fr";

// Builds correct canonical + hreflang alternates for a given French-style
// base path (e.g. "/", "/studio", "/projets/casa-duy") and the language of
// the page calling it. The canonical MUST always point to the page itself
// (self-referencing) — never to the French URL from an EN/IT page — otherwise
// Google receives contradictory signals (hreflang says "these are language
// alternates", canonical says "the real page is elsewhere") and may drop
// pages from the index entirely.
export function hreflangAlternates(basePath: string, lang: Lang = "fr") {
  const path = basePath === "/" ? "" : basePath;
  const selfPrefix = LOCALE_PREFIX[lang];
  return {
    canonical: `${SITE_URL}${selfPrefix}${path}`,
    languages: {
      fr: `${SITE_URL}${path}`,
      en: `${SITE_URL}/en${path}`,
      it: `${SITE_URL}/it${path}`,
      "x-default": `${SITE_URL}${path}`,
    },
  };
}

export function getDict(lang: Lang) {
  return dict[lang];
}

// Builds a locale-aware href from a French-style base path (e.g. "/studio", "/projets/casa-duy", "/").
export function localizedHref(basePath: string, lang: Lang) {
  const prefix = LOCALE_PREFIX[lang];
  if (basePath === "/") return prefix || "/";
  return `${prefix}${basePath}`;
}

// Returns the current Lang based on a pathname's locale prefix (defaults to "fr").
export function getLangFromPath(pathname: string): Lang {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/it" || pathname.startsWith("/it/")) return "it";
  return "fr";
}

// Strips a known locale prefix from a pathname, returning the French-style base path.
export function stripLocaleFromPath(pathname: string) {
  if (pathname.startsWith("/en/") || pathname === "/en") {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  if (pathname.startsWith("/it/") || pathname === "/it") {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}
