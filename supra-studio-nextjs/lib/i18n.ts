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
    nav: { studio: "Studio", projects: "Projets", services: "Services", contact: "Contact" },
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
      text: "Nous utilisons Google Analytics pour mesurer la fréquentation de ce site. Vos données ne sont utilisées qu'à cette fin.",
      link: "En savoir plus",
      accept: "Accepter",
      decline: "Refuser",
    },
    home: {
      heroTitle: "Architecte d'intérieur Paris Paysagiste Paris",
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
      title: "Un duo, deux parcours",
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
      title: "Un accompagnement complet, de l'idée à la réalisation",
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
      methodLabel: "Notre méthode de travail",
      methodTitle: "De la rencontre à la livraison",
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
      title: "Nos projets",
      desc: "Appartements rénovés, maisons neuves, jardins et commerces — chaque projet traduit une même recherche de justesse entre matière, lumière et usage, entre Paris, Bordeaux et Rome.",
      presented: "Projets présentés",
      countries: "Pays représentés",
      territories: "Nos terrains d'intervention",
      typeLabel: "Type de projet",
      programmeLabel: "Programme",
      surfaceLabel: "Surface",
      yearLabel: "Année",
    },
    contactPage: {
      label: "Contact",
      title: "Parlons de votre projet",
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
          "Architecte d'intérieur et paysagiste à Paris. Rénovation, maison neuve, aménagement extérieur haut de gamme. Duo franco-italien, entre Paris, Bordeaux et Rome.",
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
    nav: { studio: "Studio", projects: "Projects", services: "Services", contact: "Contact" },
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
      text: "We use Google Analytics to measure traffic on this website. Your data is used only for that purpose.",
      link: "Learn more",
      accept: "Accept",
      decline: "Decline",
    },
    home: {
      heroTitle: "Interior Architect Paris Landscape Designer Paris",
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
      title: "A duo, two paths",
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
      title: "Complete support, from idea to completion",
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
      methodLabel: "Our working method",
      methodTitle: "From first meeting to handover",
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
      title: "Our projects",
      desc: "Renovated apartments, new houses, gardens and shops — every project reflects the same pursuit of rightness between material, light and use, between Paris, Bordeaux and Rome.",
      presented: "Projects featured",
      countries: "Countries represented",
      territories: "Where we work",
      typeLabel: "Project type",
      programmeLabel: "Programme",
      surfaceLabel: "Area",
      yearLabel: "Year",
    },
    contactPage: {
      label: "Contact",
      title: "Let's talk about your project",
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
          "Interior architect and landscape designer in Paris. Renovation, new-build houses, high-end outdoor design. French-Italian duo, between Paris, Bordeaux and Rome.",
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
    nav: { studio: "Studio", projects: "Progetti", services: "Servizi", contact: "Contatti" },
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
      text: "Utilizziamo Google Analytics per misurare l'affluenza a questo sito. I vostri dati sono utilizzati solo per questo scopo.",
      link: "Scopri di più",
      accept: "Accetta",
      decline: "Rifiuta",
    },
    home: {
      heroTitle: "Architetto d'interni Parigi Paesaggista Parigi",
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
      title: "Un duo, due percorsi",
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
      title: "Un accompagnamento completo, dall'idea alla realizzazione",
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
      methodLabel: "Il nostro metodo di lavoro",
      methodTitle: "Dall'incontro alla consegna",
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
      title: "I nostri progetti",
      desc: "Appartamenti ristrutturati, case nuove, giardini e negozi — ogni progetto racconta la stessa ricerca di coerenza tra materia, luce e uso, tra Parigi, Bordeaux e Roma.",
      presented: "Progetti presentati",
      countries: "Paesi rappresentati",
      territories: "Le nostre aree di intervento",
      typeLabel: "Tipo di progetto",
      programmeLabel: "Programma",
      surfaceLabel: "Superficie",
      yearLabel: "Anno",
    },
    contactPage: {
      label: "Contatti",
      title: "Parliamo del vostro progetto",
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
          "Architetto d'interni e paesaggista a Parigi. Ristrutturazione, case nuove, allestimento esterno di alta gamma. Duo franco-italiano, tra Parigi, Bordeaux e Roma.",
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
// base path (e.g. "/", "/studio", "/projets/casa-duy").
export function hreflangAlternates(basePath: string) {
  const path = basePath === "/" ? "" : basePath;
  return {
    canonical: `${SITE_URL}${path}`,
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
