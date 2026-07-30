import type { JournalArticle } from "./journal";
import type { Lang } from "./i18n";

type ArticleTranslation = {
  title?: string;
  metaTitle?: string;
  excerpt?: string;
  category?: string;
  readingTime?: string;
  intro?: string;
  content?: string[];
  sections?: {
    heading: string;
    paragraphs: string[];
    image?: { src: string; caption?: string; afterParagraph?: number };
  }[];
  keywords?: string[];
};

export const JOURNAL_I18N: Record<string, Partial<Record<"en" | "it", ArticleTranslation>>> = {
  "comment-vegetaliser-terrasse-rooftop-urbain-paris": {
    en: {
      title: "How to plant and green a rooftop or urban terrace in Paris?",
      metaTitle: "Designing a Terrace or Rooftop in Paris: Design & Landscape Guide",
      excerpt:
        "How do you plant and design a rooftop or urban terrace in Paris? Technical constraints, plant selection and bespoke furniture.",
      category: "Landscape Design & Urban Spaces",
      readingTime: "5 min",
      intro:
        "In an urban setting, having a terrace or a rooftop is a rare privilege. Turning these square metres of open sky into true suspended green gems, however, calls for rigorous mastery of technical, climatic and aesthetic constraints.",
      sections: [
        {
          heading: "The challenges of landscaping at height",
          paragraphs: [
            "Designing a rooftop in Paris — or in any major city — isn't something to improvise. Unlike a garden at ground level, elevated outdoor spaces are subject to strict structural constraints (load per square metre, wind exposure, intense sun exposure) and require bespoke solutions.",
          ],
          image: {
            src: "/assets/images/journal-rooftop-paris.png",
            caption: "Planted rooftop with a view of the Eiffel Tower",
          },
        },
        {
          heading: "1. Confirming the technical and load constraints",
          paragraphs: [
            "Before any landscape sketch, a technical feasibility study is essential:",
            "**Slab load-bearing capacity:** determining the maximum weight allowed per square metre (water-saturated soil, planters, furniture and occupants). This analysis dictates the choice of planters and substrate density.",
            "**Waterproofing and drainage:** protecting the original structure by integrating effective drainage systems and adjustable pedestals beneath the decking.",
            "**Wind resistance:** at height, winds are amplified. Structures (pergolas, screens, potted trees) must be safely anchored and guyed.",
          ],
        },
        {
          heading: "2. Creating a sense of privacy without blocking the view",
          paragraphs: [
            "The main challenge of a Parisian terrace lies in managing overlooking sightlines while preserving open views over the city.",
            "To achieve this, favour a dynamic planted screen over a rigid, view-blocking wall. Combining non-invasive clumping bamboo (Fargesia), tall ornamental grasses (Miscanthus, Stipa) and evergreen shrubs creates a light green filter that moves in the breeze and preserves your privacy with elegance.",
          ],
          image: {
            src: "/assets/images/journal-rooftop-bordeaux.png",
            caption: "Bespoke planters and rooftop view over Bordeaux",
          },
        },
        {
          heading: "3. Selecting a resilient, elegant plant palette",
          paragraphs: [
            "On a rooftop, plants are exposed to a demanding microclimate: intense summer sun, drying wind and a limited volume of soil. Plant selection must therefore combine hardiness with timeless beauty.",
            "**Structuring evergreen foliage:** star jasmine (Trachelospermum jasminoides) for its fragrant flowers and dark green foliage, dwarf stone pines, or myrtles.",
            "**Light perennials and grasses:** gaura, lavender, shrubby sage and pennisetum, which bring movement and lightness.",
            "**Automatic drip irrigation:** essential equipment to ensure the plantings thrive without wasting water.",
          ],
        },
        {
          heading: "4. Bespoke joinery and outdoor fittings",
          paragraphs: [
            "To make the most of every square metre, bespoke design is key. Designing thermolacquered aluminium or corten steel planters integrated into the railings maximises floor space.",
            "Adding built-in storage benches in rot-resistant timber (Ipe or Kebony), a discreet summer kitchen and retractable shade turns the terrace into a genuine extra living room, usable from spring through autumn.",
          ],
          image: {
            src: "/assets/images/journal-rooftop-rome.png",
            caption: "Summer kitchen and bespoke pergola, rooftop in Rome",
          },
        },
        {
          heading: "Entrust your rooftop to the Studio's experts",
          paragraphs: [
            "From checking co-ownership and planning permissions through to planting the final species, our team designs exceptional, bespoke terraces.",
            "**Dreaming of a bespoke, planted rooftop or terrace?** [Book an appointment](https://calendly.com/paul-cohen-suprastudio/30min) to assess the feasibility of your project, or [get in touch](/en/contact) to tell us more.",
          ],
        },
      ],
      keywords: ["Rooftop Paris", "Planted terrace", "Urban landscape design"],
    },
    it: {
      title: "Come rinverdire un rooftop o una terrazza urbana a Parigi?",
      metaTitle: "Progettare una Terrazza o un Rooftop a Parigi: Guida Design e Paesaggio",
      excerpt:
        "Come rinverdire e sistemare un rooftop o una terrazza urbana a Parigi? Vincoli tecnici, scelta delle piante e arredi su misura.",
      category: "Design del Paesaggio e Spazi Urbani",
      readingTime: "5 min",
      intro:
        "In ambiente urbano, disporre di una terrazza o di un rooftop è un privilegio raro. Trasformare questi metri quadri a cielo aperto in vere gemme vegetali sospese richiede tuttavia un rigoroso controllo dei vincoli tecnici, climatici ed estetici.",
      sections: [
        {
          heading: "Le sfide di una sistemazione paesaggistica in quota",
          paragraphs: [
            "Sistemare un rooftop a Parigi, o in qualsiasi metropoli, non si improvvisa. A differenza di un giardino a terra, gli spazi esterni in quota sono soggetti a rigidi vincoli strutturali (carico al m², esposizione al vento, forte irraggiamento solare) e richiedono soluzioni su misura.",
          ],
          image: {
            src: "/assets/images/journal-rooftop-paris.png",
            caption: "Rooftop con vista sulla Torre Eiffel",
          },
        },
        {
          heading: "1. Verificare i vincoli tecnici e di carico",
          paragraphs: [
            "Prima di qualsiasi schizzo paesaggistico, lo studio di fattibilità tecnica è indispensabile:",
            "**La capacità portante della soletta:** determinare il peso massimo consentito al m² (terra satura d'acqua, fioriere, arredi e persone). Questa analisi condiziona la scelta delle vasche e la densità dei substrati.",
            "**L'impermeabilizzazione e il drenaggio delle acque:** preservare il supporto originale integrando sistemi di drenaggio efficaci e supporti regolabili sotto il decking.",
            "**La resistenza al vento:** in quota, i venti sono amplificati. Le strutture (pergole, frangivista, alberi in vaso) devono essere ancorate e tirantate in sicurezza.",
          ],
        },
        {
          heading: "2. Creare un'intimità senza oscurare la vista",
          paragraphs: [
            "La principale sfida di una terrazza parigina risiede nella gestione della vista reciproca preservando al contempo le prospettive aperte sulla città.",
            "Per riuscirci, privilegiate uno schermo vegetale dinamico piuttosto che un muro rigido che oscura la vista. L'abbinamento di bambù non invasivi (Fargesia), graminacee alte (Miscanthus, Stipa) e arbusti sempreverdi crea un filtro vegetale leggero che si muove con la brezza e preserva la vostra intimità con eleganza.",
          ],
          image: {
            src: "/assets/images/journal-rooftop-bordeaux.png",
            caption: "Fioriere su misura e vista sui tetti di Bordeaux",
          },
        },
        {
          heading: "3. Selezionare una palette vegetale resiliente ed elegante",
          paragraphs: [
            "Su un rooftop, le piante sono esposte a un microclima esigente: forte irraggiamento estivo, vento essiccante e volume di terra limitato. La scelta delle essenze deve quindi coniugare robustezza e bellezza senza tempo.",
            "**Il fogliame sempreverde e strutturante:** falso gelsomino (Trachelospermum jasminoides) per i suoi fiori profumati e il fogliame verde scuro, pini domestici nani, o mirti.",
            "**Le perenni e le graminacee leggere:** gaura, lavanda, salvia arbustiva e pennisetum, che apportano movimento e leggerezza.",
            "**L'irrigazione automatica a goccia:** attrezzatura indispensabile per garantire la durata delle piantumazioni senza sprecare acqua.",
          ],
        },
        {
          heading: "4. Falegnameria su misura e sistemazione esterna",
          paragraphs: [
            "Per ottimizzare ogni metro quadro, il ricorso al su misura è la chiave. Disegnare fioriere in alluminio termolaccato o in acciaio corten integrate nei parapetti permette di massimizzare lo spazio a terra.",
            "L'integrazione di panche contenitore in legno imputrescibile (Ipé o Kebony), di una cucina estiva discreta e di un ombreggiamento retrattile trasforma la terrazza in un vero e proprio ambiente di vita supplementare, utilizzabile dalla primavera all'autunno.",
          ],
          image: {
            src: "/assets/images/journal-rooftop-rome.png",
            caption: "Cucina estiva e pergola su misura, rooftop a Roma",
          },
        },
        {
          heading: "Affidate il vostro rooftop agli esperti dello Studio",
          paragraphs: [
            "Dalla verifica delle autorizzazioni condominiali/urbanistiche fino alla piantumazione delle ultime essenze, il nostro team progetta terrazze d'eccezione su misura.",
            "**Sognate un rooftop o una terrazza verde su misura?** [Prenotate un appuntamento](https://calendly.com/paul-cohen-suprastudio/30min) per valutare la fattibilità del vostro progetto, oppure [contattateci](/it/contact) per raccontarci di più.",
          ],
        },
      ],
      keywords: ["Rooftop Parigi", "Terrazza verde", "Design paesaggistico urbano"],
    },
  },
  "continuite-visuelle-interieur-jardin-architecture-in-out": {
    en: {
      title: "How to create visual continuity between the interior and the garden?",
      metaTitle: "In & Out Architecture: Creating Continuity Between Interior and Garden",
      excerpt:
        "Discover how interior architecture and landscape design come together to blur the boundaries between house and garden. Expert In & Out advice.",
      category: "Interior Architecture & Landscape",
      readingTime: "5 min",
      intro:
        "Erasing the boundary between the indoor cocoon and the outdoor landscape is one of the pillars of contemporary architecture. When the living room seems to extend onto the terrace and the garden makes its way into the lounge, the space gains in volume, serenity and clarity. A closer look at an In & Out design approach.",
      sections: [
        {
          heading: "In & Out Architecture: Redefining the Boundaries of Living",
          paragraphs: [
            "For a long time, architecture treated the house and the garden as two separate entities: the interior for comfort and shelter, the exterior for nature and relaxation. Today, the global In & Out approach overturns this rigid boundary to create a fluid, unified living space.",
            "Creating true visual continuity isn't just about installing a picture window. It's a careful orchestration in which materials, light, planting and room geometry work together to create a constant sense of openness.",
          ],
        },
        {
          heading: "1. Aligning the floors: the illusion of infinite space",
          paragraphs: [
            "The first vector of continuity is the floor. When the eye glides uninterrupted from the living room to the terrace, the brain immediately perceives the outdoors as a natural extension of the lounge.",
            "**Material continuity:** using the same material — or its weather-adapted equivalent — indoors and out. Polished concrete indoors paired with a coordinated exposed-aggregate concrete, or natural stone laid in a pattern indoors and continued as non-slip slabs on the terrace.",
            "**The recessed threshold:** eliminating visual and physical steps with pocket sliding doors set on rails recessed into the floor. The transition becomes perfectly invisible.",
            "**The laying pattern:** keeping the same laying direction for indoor flooring and outdoor timber or porcelain stoneware decking.",
          ],
          image: {
            src: "/assets/images/journal-in-out-jour.png",
            caption: "Continuity of the floor between the living room and the terrace",
          },
        },
        {
          heading: "2. A chromatic and mineral palette as a common thread",
          paragraphs: [
            "For the garden to resonate with your interior decor, the choice of tones and textures needs to be considered as a whole from the design stage onward.",
            "By choosing noble, understated materials — such as oak wood, brushed lime render, honed granite or black thermolacquered steel — you create a timeless backdrop. Echoing the colours of interior walls on garden walls or shaded patio façades subtly ties the built structure to the surrounding nature.",
          ],
        },
        {
          heading: "3. Staging the landscape from indoors",
          paragraphs: [
            "Thinking of the garden from the lounge means creating \"living paintings.\" Every opening becomes a frame that showcases the landscape composition.",
            "By placing a sculptural plant specimen (a centuries-old olive tree, a Japanese maple with flaming foliage, or a cloud-pruned pine) in line with a picture window or a circulation corridor, the outdoors becomes a dynamic decorative element that evolves with the seasons.",
            "*\"A well-designed garden isn't only appreciated when you walk through it; it inhabits the house every day of the year.\"*",
          ],
        },
        {
          heading: "4. Scenographic lighting: merging the spaces at night",
          paragraphs: [
            "At nightfall, if the garden goes dark, the picture window turns into a black mirror, visually closing the lounge in on itself. Well-designed landscape lighting keeps that sense of space alive even at the heart of the night.",
            "By subtly lighting target features in the garden (a bed of ornamental grasses, a tree trunk, a dry-stone wall), you extend the depth of field as seen from your sofa. Favour warm, grazing light (2700K to 3000K) to preserve the magic of the place without glare.",
          ],
          image: {
            src: "/assets/images/journal-in-out-nuit.jpg",
            caption: "The garden staged by light, at nightfall",
          },
        },
        {
          heading: "Designing your In & Out project with the Studio",
          paragraphs: [
            "Whether it's restructuring an apartment with a terrace in Paris or designing a family home, bringing together interior architecture and landscape design is the key to an exceptional home.",
            "**Dreaming of a place where the interior and the garden become one?** [Book an appointment](https://calendly.com/paul-cohen-suprastudio/30min) to discuss it, or [get in touch](/en/contact) to tell us about your project.",
          ],
        },
      ],
      keywords: ["In & Out architecture", "Indoor-outdoor continuity", "Landscape design"],
    },
    it: {
      title: "Come creare una continuità visiva tra l'interno e il giardino?",
      metaTitle: "Architettura In & Out: Creare una Continuità tra Interno e Giardino",
      excerpt:
        "Scoprite come l'architettura d'interni e il design del paesaggio si uniscono per cancellare i confini tra casa e giardino. Consigli d'esperto In & Out.",
      category: "Architettura d'Interni e Paesaggio",
      readingTime: "5 min",
      intro:
        "Cancellare il confine tra il bozzolo interno e il paesaggio esterno è uno dei pilastri dell'architettura contemporanea. Quando il soggiorno sembra prolungarsi sulla terrazza e il giardino si affaccia nel salotto, lo spazio guadagna in volume, serenità e chiarezza. Analisi di un approccio progettuale In & Out.",
      sections: [
        {
          heading: "L'Architettura In & Out: Ridefinire i limiti dell'abitare",
          paragraphs: [
            "Per molto tempo, l'architettura ha pensato la casa e il giardino come due entità distinte: l'interno per il comfort e il riparo, l'esterno per la natura e il relax. Oggi, l'approccio globale In & Out ribalta questo confine rigido per creare uno spazio di vita fluido e unificato.",
            "Creare una vera continuità visiva non si riduce a installare una vetrata. Si tratta di un'orchestrazione meticolosa in cui materiali, luce, palette vegetale e geometria degli ambienti dialogano per offrire una sensazione di respiro permanente.",
          ],
        },
        {
          heading: "1. L'allineamento dei pavimenti: l'illusione di uno spazio infinito",
          paragraphs: [
            "Il primo vettore di continuità è il pavimento. Quando lo sguardo scivola senza interruzioni dal soggiorno alla terrazza, il cervello percepisce immediatamente l'esterno come un'estensione naturale del salotto.",
            "**La continuità materica:** utilizzare lo stesso materiale — o la sua declinazione adatta alle intemperie — all'interno e all'esterno. Un cemento lucidato d'interno abbinato a un cemento industriale coordinato, oppure una pietra naturale posata in opus all'interno e declinata in lastre antiscivolo sulla terrazza.",
            "**La soglia incassata:** eliminare i dislivelli visivi e fisici grazie a vetrate scorrevoli a scomparsa con binari incassati nel pavimento. La transizione diventa perfettamente invisibile.",
            "**La trama di posa:** mantenere lo stesso senso di posa per le doghe del parquet interno e le doghe della terrazza in legno o gres porcellanato esterno.",
          ],
          image: {
            src: "/assets/images/journal-in-out-jour.png",
            caption: "Continuità del pavimento tra il soggiorno e la terrazza",
          },
        },
        {
          heading: "2. La palette cromatica e minerale come filo conduttore",
          paragraphs: [
            "Perché il giardino risuoni con la vostra decorazione d'interni, la scelta delle tonalità e delle texture deve essere oggetto di un lavoro d'insieme fin dalla fase di progettazione.",
            "Scegliendo materiali nobili e sobri — come il legno di rovere, la calce spazzolata, il granito levigato o l'acciaio termolaccato nero — create uno sfondo senza tempo. Riprendere le tonalità delle pareti interne sui muretti del giardino o sulle facciate ombreggiate del patio permette di legare sottilmente il costruito alla natura circostante.",
          ],
        },
        {
          heading: "3. Scenografare il paesaggio dall'interno",
          paragraphs: [
            "Pensare il giardino dal salotto significa creare dei \"quadri viventi\". Ogni apertura diventa una cornice che valorizza la composizione paesaggistica.",
            "Posizionando un soggetto vegetale scultoreo (un ulivo millenario, un acero giapponese dal fogliame fiammeggiante o un pino potato a nuvola) nell'asse di una vetrata o di un corridoio di passaggio, l'esterno diventa un elemento decorativo dinamico che evolve con le stagioni.",
            "*\"Un giardino ben pensato non si contempla solo quando lo si attraversa; abita la casa ogni giorno dell'anno.\"*",
          ],
        },
        {
          heading: "4. L'illuminazione scenografica: fondere gli spazi di notte",
          paragraphs: [
            "Al calar della notte, se il giardino si spegne, la vetrata si trasforma in uno specchio nero, richiudendo visivamente il salotto su se stesso. Un'illuminazione paesaggistica ben studiata permette di conservare questa sensazione di spazio anche nel cuore della notte.",
            "Illuminando con sobrietà elementi mirati del giardino (una macchia di graminacee, un tronco d'albero, un muro in pietra a secco), estendete la profondità di campo dal vostro divano. Privilegiate luci radenti e calde (2700K-3000K) per preservare la magia del luogo senza abbagliare.",
          ],
          image: {
            src: "/assets/images/journal-in-out-nuit.jpg",
            caption: "Il giardino messo in scena dalla luce, al calar della notte",
          },
        },
        {
          heading: "Progettare il vostro progetto In & Out con lo Studio",
          paragraphs: [
            "Che si tratti della ristrutturazione di un appartamento con terrazza a Parigi o della progettazione di un'abitazione principale, l'alleanza tra architettura d'interni e design del paesaggio è la chiave di un'abitazione d'eccezione.",
            "**Sognate un luogo in cui l'interno e il giardino diventino un tutt'uno?** [Prenotate un appuntamento](https://calendly.com/paul-cohen-suprastudio/30min) per parlarne, oppure [contattateci](/it/contact) per presentarci il vostro progetto.",
          ],
        },
      ],
      keywords: ["Architettura In & Out", "Continuità interno-esterno", "Design del paesaggio"],
    },
  },
  "pourquoi-faire-appel-architecte-interieur-paris": {
    en: {
      title: "Why hire an interior architect in Paris?",
      excerpt:
        "Renovation, time savings, a network of skilled craftspeople, added property value: discover why hiring an interior architect in Paris changes everything about your project.",
      category: "Advice & expertise",
      readingTime: "6 min",
      sections: [
        {
          heading: "A profession that goes far beyond choosing colours and furniture",
          paragraphs: [
            "It's probably the most persistent misconception: people imagine the interior architect as someone who comes to choose a paint colour or match up cushions. In reality, their work begins much earlier — with understanding what already exists. Structural constraints of the building, the flow of natural light, the location of utilities (water, electricity, ventilation), co-ownership rules: all technical elements that an untrained eye doesn't always know how to read, yet which determine what is actually possible to do in a space.",
            "An interior architect designs a project as a whole — layout, volumes, materials, light, uses — before turning to decoration. It's this overall vision that sets a thoughtfully designed interior apart from one that has simply been decorated.",
          ],
        },
        {
          heading: "Saving time and avoiding costly mistakes",
          paragraphs: [
            "In Paris, a poorly anticipated renovation project quickly turns into surprises: a load-bearing wall that can't be knocked down, a kitchen that has to be moved because of an existing drain, work that takes twice as long as planned for lack of proper sequencing.",
            "An interior architect identifies these constraints upfront, from the feasibility study stage, before the site work even begins. This preparatory work, often seen as an extra expense, is in fact what avoids the largest unplanned costs: rework, mid-project plan changes, materials ordered and then found unsuitable.",
          ],
        },
        {
          heading: "Access to a network of qualified craftspeople and firms",
          paragraphs: [
            "Finding a trustworthy tradesperson in Paris — available, skilled, able to meet a deadline — remains one of the most time-consuming parts of a renovation project handled alone. An interior architect works with a network of firms and craftspeople already tried and tested, chosen as much for the quality of their work as for their reliability.",
            "This support doesn't stop at making the introduction: site supervision makes sure that what is being built matches faithfully what was designed, without the client needing to be on site at all times to arbitrate every detail.",
          ],
        },
        {
          heading: "Sustainably increasing the value of your property",
          paragraphs: [
            "A well-designed interior — one that optimises light, streamlines circulation and makes intelligent use of every square metre — has a direct impact on a property's value, especially in a Parisian market where every square metre counts. Conversely, a poorly designed renovation, even with quality materials, can at best add nothing, and at worst hurt a future resale.",
            "Hiring an interior architect is therefore also a long-term choice: a space designed to stand the test of time, rather than follow a trend that will eventually date.",
          ],
        },
        {
          heading: "An interior designed for your way of life, not a catalogue",
          paragraphs: [
            "Every household, every family, every way of entertaining or working from home is different. A good interior architect doesn't offer a fixed style to apply everywhere: they build a bespoke response, based on your actual habits — how you move through your home, how you entertain, how you work, how you live day to day.",
            "It's this bespoke dimension that sets an interior architecture project apart from a simple makeover: the space adapts to you, not the other way around.",
          ],
        },
        {
          heading: "Why choose Supra Studio?",
          paragraphs: [
            "At Supra Studio, we approach every project with a simple conviction: light and the rightness of materials are, most of the time, enough to transform a space — without artifice or excess. Our studio, founded by a French-Italian duo, brings together dual expertise in interior architecture and landscape design, a rare combination that lets us think of your indoor and outdoor spaces as one coherent whole, rather than two separate projects.",
            "In practice, our support unfolds in four clear steps: a **consultation visit** to understand your space and needs before any commitment, a technical and budgetary **feasibility study**, a **design** phase where layout, volumes and materials take shape, then rigorous **site supervision** through to handover — with our network of local craftspeople and firms, chosen with the same rigour for every project.",
            "Based between Paris, Bordeaux and Rome, we favour natural materials, clean lines and an eco-responsible approach, for sensitive, lasting interiors rather than a passing trend. Whether your project is an apartment renovation, the design of a new-build house or the layout of a garden, our studio supports you from the first sketch through to handover.",
            "**Have a renovation or interior design project in Paris?** [Book an appointment](https://calendly.com/paul-cohen-suprastudio/30min) for a first consultation visit, or [get in touch](/en/contact) to discuss it.",
          ],
          image: {
            src: "/assets/images/fondateurs.jpg",
            caption: "Paul and Beatrice, founders of Supra Studio",
            afterParagraph: 0,
          },
        },
      ],
      keywords: ["Interior architect Paris", "Apartment renovation Paris", "Renovation advice"],
    },
    it: {
      title: "Perché rivolgersi a un architetto d'interni a Parigi?",
      excerpt:
        "Ristrutturazione, risparmio di tempo, rete di artigiani, valorizzazione dell'immobile: scoprite perché rivolgersi a un architetto d'interni a Parigi cambia tutto nel vostro progetto.",
      category: "Consigli & competenza",
      readingTime: "6 min",
      sections: [
        {
          heading: "Un mestiere che va ben oltre la scelta dei colori e dell'arredamento",
          paragraphs: [
            "È probabilmente il luogo comune più radicato: si immagina l'architetto d'interni come qualcuno che viene a scegliere una tinta o ad abbinare dei cuscini. In realtà, il suo lavoro inizia molto prima — nella comprensione dell'esistente. Vincoli strutturali dell'edificio, distribuzione della luce naturale, posizione degli impianti (acqua, elettricità, ventilazione), regole condominiali: tutti elementi tecnici che un occhio inesperto non sa sempre leggere, ma che determinano ciò che è realmente possibile fare in un luogo.",
            "Un architetto d'interni concepisce un progetto globale — piante, volumi, materiali, luce, usi — prima di occuparsi della decorazione. È questa visione d'insieme a distinguere un interno pensato da un interno semplicemente decorato.",
          ],
        },
        {
          heading: "Risparmiare tempo ed evitare errori costosi",
          paragraphs: [
            "A Parigi, un progetto di ristrutturazione mal anticipato si traduce rapidamente in imprevisti: un muro portante che non si può abbattere, una cucina da spostare a causa di uno scarico esistente, lavori che richiedono il doppio del tempo previsto per mancanza di una corretta sequenza.",
            "Un architetto d'interni individua questi vincoli a monte, fin dalla fase di studio di fattibilità, prima che il cantiere inizi. Questo lavoro preparatorio, spesso percepito come una spesa aggiuntiva, è in realtà ciò che evita le spese impreviste più importanti: riprese dei lavori, cambi di progetto in corso d'opera, materiali ordinati e poi rivelatisi inadatti.",
          ],
        },
        {
          heading: "Un accesso a una rete di artigiani e imprese qualificate",
          paragraphs: [
            "Trovare un artigiano di fiducia a Parigi — disponibile, competente, capace di rispettare una scadenza — resta uno degli aspetti più dispendiosi in termini di tempo di un progetto di ristrutturazione condotto da soli. Un architetto d'interni lavora con una rete di imprese e artigiani già collaudati, scelti tanto per la qualità del loro lavoro quanto per la loro affidabilità.",
            "Questo accompagnamento non si ferma alla messa in relazione: la direzione lavori permette di verificare che quanto realizzato corrisponda fedelmente a quanto progettato, senza che il cliente debba essere presente in cantiere in permanenza per arbitrare ogni dettaglio.",
          ],
        },
        {
          heading: "Valorizzare durevolmente il vostro immobile",
          paragraphs: [
            "Un interno ben concepito — che ottimizza la luce, fluidifica gli spazi di passaggio e sfrutta in modo intelligente ogni metro quadro — ha un impatto diretto sul valore di un immobile, in particolare in un mercato parigino dove ogni metro quadro conta. Al contrario, una ristrutturazione mal concepita, anche con materiali di qualità, può nella migliore delle ipotesi non apportare nulla, nella peggiore penalizzare una futura rivendita.",
            "Rivolgersi a un architetto d'interni è quindi anche una scelta patrimoniale: quella di un luogo pensato per attraversare il tempo, piuttosto che seguire una tendenza destinata a passare di moda.",
          ],
        },
        {
          heading: "Un interno pensato per il vostro stile di vita, non per un catalogo",
          paragraphs: [
            "Ogni famiglia, ogni modo di ricevere o di lavorare in casa è diverso. Un buon architetto d'interni non propone uno stile fisso da applicare ovunque: costruisce una risposta su misura, a partire dai vostri usi reali — il modo in cui vi muovete nella vostra abitazione, in cui ricevete, in cui lavorate, in cui vivete quotidianamente.",
            "È questa dimensione su misura a distinguere un progetto di architettura d'interni da un semplice restyling: è il luogo ad adattarsi a voi, non il contrario.",
          ],
        },
        {
          heading: "Perché scegliere Supra Studio?",
          paragraphs: [
            "Da Supra Studio, affrontiamo ogni progetto con una convinzione semplice: la luce e la coerenza dei materiali bastano, il più delle volte, a trasformare un luogo — senza artifici né superfluo. Il nostro studio, fondato da un duo franco-italiano, riunisce una doppia competenza in architettura d'interni e architettura del paesaggio, una combinazione rara che ci permette di pensare i vostri spazi interni ed esterni come un insieme coerente, piuttosto che come due progetti separati.",
            "Concretamente, il nostro accompagnamento si svolge in quattro fasi chiare: una **visita conoscitiva** per comprendere il vostro spazio e le vostre esigenze prima di qualsiasi impegno, uno studio di **fattibilità** tecnica e di budget, una fase di **progettazione** in cui piante, volumi e materiali prendono forma, poi una **direzione lavori** rigorosa fino alla consegna — con la nostra rete di artigiani e imprese locali, scelti con la stessa esigenza per ogni progetto.",
            "Con sede tra Parigi, Bordeaux e Roma, privilegiamo i materiali naturali, le linee essenziali e un approccio ecoresponsabile, per interni sensibili e duraturi piuttosto che seguendo una moda passeggera. Che il vostro progetto sia la ristrutturazione di un appartamento, la progettazione di una casa nuova o la sistemazione di un giardino, il nostro studio vi accompagna dal primo schizzo fino alla consegna del cantiere.",
            "**Avete un progetto di ristrutturazione o di sistemazione d'interni a Parigi?** [Prenotate un appuntamento](https://calendly.com/paul-cohen-suprastudio/30min) per una prima visita conoscitiva, oppure [contattateci](/it/contact) per parlarne.",
          ],
          image: {
            src: "/assets/images/fondateurs.jpg",
            caption: "Paul e Beatrice, fondatori di Supra Studio",
            afterParagraph: 0,
          },
        },
      ],
      keywords: [
        "Architetto d'interni Parigi",
        "Ristrutturazione appartamento Parigi",
        "Consigli ristrutturazione",
      ],
    },
  },
};

export function localizeArticle(article: JournalArticle, lang: Lang): JournalArticle {
  if (lang === "fr") return article;
  const overrides = JOURNAL_I18N[article.slug]?.[lang];
  if (!overrides) return article;
  return { ...article, ...overrides };
}
