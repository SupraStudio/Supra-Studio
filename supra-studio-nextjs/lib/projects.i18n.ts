import type { Project } from "./projects";
import type { Lang } from "./i18n";

type ProjectTranslation = {
  cat?: string;
  type?: string;
  programme?: string;
  longSections?: { heading: string; paragraphs: string[] }[];
  identityTable?: { label: string; value: string }[];
  keywords?: string[];
};

export const PROJECT_I18N: Record<string, Partial<Record<"en" | "it", ProjectTranslation>>> = {
  "giardino-de-ninno": {
    en: {
      cat: "Landscape",
      type: "Outdoor design",
      programme: "Garden, pool and terrace of a family villa",
      longSections: [
        {
          heading: "A garden designed as an extension of the house",
          paragraphs: [
            "In Sabaudia, on the Italian coast, this landscape design project transforms a private garden of 300 m² into a true open-air living space. Around an existing swimming pool, our intervention redefines the uses and sightlines to create a contemporary garden, where nature, architecture and light compose an atmosphere that is both understated and warm, in the Mediterranean spirit.",
            "Each space is conceived as a sequence within the landscape. Circulation flows naturally between the terrace, the pool, the relaxation areas and the planted zones, offering a fluid reading and continuity between the house and its outdoor surroundings.",
          ],
        },
        {
          heading: "A landscape composition between openness and intimacy",
          paragraphs: [
            "The design rests on a subtle balance between open spaces and structuring vegetation. Wide planted beds accompany the boundaries of the plot to preserve privacy while letting the garden breathe. Sightlines are deliberately controlled: they guide the eye, reveal the depth of the plot and reinforce the sense of space.",
            "This composition creates a living garden, whose moods shift with movement through it and with the seasons.",
          ],
        },
        {
          heading: "Planting as a material of architecture",
          paragraphs: [
            "The project draws on a planting palette inspired by Mediterranean landscapes. Trees, evergreen shrubs, succulents and perennials with white, mauve and blue-toned blooms compose a resilient landscape, suited to the climate of Sabaudia.",
            "Beyond its aesthetic role, the planting contributes to the garden's comfort. Trees create natural shaded areas, cool the living spaces in summer and accompany the different outdoor uses throughout the day.",
            "Around the pool, a timber deck brings warmth and softness. Natural materials engage in dialogue with the planting to create a timeless atmosphere, in which every element finds its rightful place.",
          ],
        },
        {
          heading: "A garden experienced by day and by night",
          paragraphs: [
            "As dusk falls, the landscape shifts in perception. Discreet lighting reveals the volumes of the planting, accompanies the pathways and extends outdoor uses into the evening without disturbing the tranquillity of the place.",
            "More than a simple garden design project, this realisation expresses our vision of landscape: designing outdoor spaces that are sustainable, sensitive and timeless, where planting, material and light fully contribute to quality of life.",
          ],
        },
      ],
      identityTable: [
        { label: "Project", value: "Design of a private garden with swimming pool" },
        { label: "Location", value: "Sabaudia, Italy" },
        { label: "Area", value: "300 m²" },
        { label: "Scope", value: "Landscape design" },
        {
          label: "Programme",
          value:
            "Redesign of an existing garden, creation of a timber terrace, landscaping around the pool, relaxation areas",
        },
        { label: "Status", value: "Design study" },
      ],
      keywords: [
        "Landscape architect",
        "Landscape design",
        "Garden design",
        "Contemporary garden",
        "Mediterranean garden",
        "Garden with pool",
        "Timber terrace",
        "Residential landscape",
        "Landscape architecture",
      ],
    },
    it: {
      cat: "Paesaggio",
      type: "Sistemazione esterna",
      programme: "Giardino, piscina e terrazza di una villa familiare",
      longSections: [
        {
          heading: "Un giardino concepito come estensione della casa",
          paragraphs: [
            "A Sabaudia, sul litorale italiano, questo progetto di sistemazione paesaggistica trasforma un giardino privato di 300 m² in un vero e proprio spazio di vita all'aperto. Attorno a una piscina esistente, il nostro intervento ridefinisce usi e prospettive per creare un giardino contemporaneo, dove natura, architettura e luce compongono un'atmosfera mediterranea, allo stesso tempo sobria e accogliente.",
            "Ogni spazio è pensato come una sequenza del paesaggio. I percorsi si articolano naturalmente tra la terrazza, la piscina, le zone relax e le aree piantumate, offrendo una lettura fluida e una continuità tra la casa e il suo intorno esterno.",
          ],
        },
        {
          heading: "Una composizione paesaggistica tra apertura e intimità",
          paragraphs: [
            "La sistemazione si basa su un equilibrio sottile tra spazi aperti e vegetazione strutturante. Ampie aiuole piantumate accompagnano i confini del lotto per preservare l'intimità lasciando comunque respirare il giardino. Le prospettive sono volutamente controllate: guidano lo sguardo, rivelano la profondità del terreno e rafforzano la sensazione di spazio.",
            "Questa composizione permette di creare un giardino vivo, le cui atmosfere evolvono con gli spostamenti e con le stagioni.",
          ],
        },
        {
          heading: "Il vegetale come materia d'architettura",
          paragraphs: [
            "Il progetto si basa su una tavolozza vegetale ispirata ai paesaggi mediterranei. Alberi, arbusti sempreverdi, piante grasse, succulente e perenni dalle fioriture bianche, malva e blu compongono un paesaggio resiliente, adatto al clima di Sabaudia.",
            "Oltre alla sua estetica, il vegetale contribuisce al comfort del giardino. Gli alberi creano zone d'ombra naturali, rinfrescano gli spazi di vita in estate e accompagnano i diversi usi esterni durante tutta la giornata.",
            "Attorno alla piscina, un impiantito in legno dona calore e morbidezza. I materiali naturali dialogano con le piantumazioni per creare un'atmosfera senza tempo, in cui ogni elemento trova il proprio giusto posto.",
          ],
        },
        {
          heading: "Un'esperienza del giardino, di giorno come di notte",
          paragraphs: [
            "Al calare della sera, il paesaggio cambia percezione. Un'illuminazione discreta rivela i volumi vegetali, accompagna i percorsi e prolunga gli usi esterni senza disturbare la quiete del luogo.",
            "Più di un semplice progetto di sistemazione del giardino, questa realizzazione traduce la nostra visione del paesaggio: concepire spazi esterni durevoli, sensibili e senza tempo, in cui il vegetale, la materia e la luce contribuiscono pienamente alla qualità della vita.",
          ],
        },
      ],
      identityTable: [
        { label: "Progetto", value: "Sistemazione di un giardino privato con piscina" },
        { label: "Localizzazione", value: "Sabaudia, Italia" },
        { label: "Superficie", value: "300 m²" },
        { label: "Incarico", value: "Progettazione paesaggistica" },
        {
          label: "Programma",
          value:
            "Riqualificazione di un giardino esistente, creazione di una terrazza in legno, sistemazione degli spazi attorno alla piscina, aree relax",
        },
        { label: "Stato", value: "Studio di progetto" },
      ],
      keywords: [
        "Architetto paesaggista",
        "Sistemazione paesaggistica",
        "Progettazione di giardini",
        "Giardino contemporaneo",
        "Giardino mediterraneo",
        "Giardino con piscina",
        "Terrazza in legno",
        "Paesaggio residenziale",
        "Architettura del paesaggio",
      ],
    },
  },
  "maison-kleber": {
    en: {
      cat: "Architecture & interior architecture",
      type: "New-build construction",
      programme: "Transformation of a former garage into a townhouse — reversed loft and rooftop",
      longSections: [
        {
          heading: "From a parking space to a family home",
          paragraphs: [
            "In the heart of a residential neighbourhood of Bordeaux, this project transforms a former garage into a contemporary 120 m² townhouse. Set on a narrow plot, the existing structure offered neither quality of use nor any real relationship with the street. The project proposes a complete rebuild, envisioning a bright, functional home suited to contemporary ways of living.",
            "This transformation rests on a simple idea: turning constraint into a resource. The narrowness of the plot becomes the starting point for a vertical architecture in which each level reveals a new way of inhabiting the house.",
          ],
        },
        {
          heading: "A house conceived around verticality",
          paragraphs: [
            "The interior layout draws on the principle of the \"reversed loft\". Technical functions are placed on the ground floor, freeing the upper levels for the living spaces. This distribution offers the best qualities of light and views to the rooms used daily.",
            "The living room, dining room and open kitchen therefore occupy the second floor, where the volumes extend into a vast through-space bathed in natural light. Beneath the roof, an additional bedroom opens onto a terrace shielded from view, a true outdoor room at the heart of the urban fabric.",
            "The whole house is connected by a longitudinal staircase that structures the circulation and accompanies the progressive discovery of the spaces. More than a simple functional element, it becomes the backbone of the project and fully contributes to its architectural identity.",
          ],
        },
        {
          heading: "Light as a material of the project",
          paragraphs: [
            "On such a constrained plot, light becomes a genuine material of architecture.",
            "Large vertical openings animate the street facade, while skylights, light wells and glass block bring natural light into the very heart of the house. The through-views reinforce the sense of space and offer atmospheres that shift throughout the day.",
            "Every opening is designed not only to bring in light, but also to reveal the volumes, support daily uses and create a permanent relationship between indoors and outdoors.",
          ],
        },
        {
          heading: "Restrained, durable materials",
          paragraphs: [
            "The project draws on a palette of natural materials in which limestone, timber, polished concrete, metalwork and ceramic tile engage in a contemporary, timeless dialogue.",
            "Bespoke furniture accompanies the architecture at every level. Integrated from the design stage, it optimises the spaces, structures the volumes and responds to the specific constraints of this townhouse built on a narrow plot.",
            "This project illustrates our approach to architecture: designing spaces where every square metre is valued, where light reveals the volumes, and where constraints become the very foundations of the project.",
          ],
        },
      ],
      identityTable: [
        { label: "Project", value: "Transformation of a former garage into a townhouse" },
        { label: "Location", value: "Bordeaux, France" },
        { label: "Area", value: "120 m²" },
        { label: "Type", value: "Family home" },
        { label: "Scope", value: "New-build construction and interior architecture" },
        { label: "Status", value: "Design study" },
      ],
      keywords: [
        "Garage-to-house conversion",
        "Contemporary townhouse",
        "New-build construction",
        "Architect in Bordeaux",
        "House on a narrow plot",
        "Contemporary architecture",
        "Family home",
        "Interior architecture",
        "Bespoke furniture",
        "Natural light",
      ],
    },
    it: {
      cat: "Architettura e architettura d'interni",
      type: "Nuova costruzione",
      programme: "Trasformazione di un ex garage in casa di città — loft invertito e rooftop",
      longSections: [
        {
          heading: "Da posto auto a casa familiare",
          paragraphs: [
            "Nel cuore di un quartiere residenziale di Bordeaux, questo progetto trasforma un ex garage in una casa di città contemporanea di 120 m². Situata su un lotto stretto, la costruzione esistente non offriva né qualità d'uso né una vera relazione con la strada. Il progetto propone una ricostruzione completa per immaginare un'abitazione luminosa, funzionale e adatta agli stili di vita contemporanei.",
            "Questa trasformazione si basa su un'idea semplice: fare della costrizione una risorsa. La ridotta larghezza del lotto diventa il punto di partenza di un'architettura verticale in cui ogni livello rivela un nuovo modo di abitare.",
          ],
        },
        {
          heading: "Una casa pensata attorno alla verticalità",
          paragraphs: [
            "L'organizzazione interna si ispira al principio del \"loft invertito\". Le funzioni tecniche trovano posto al piano terra, liberando i livelli superiori per gli spazi di vita. Questa ripartizione permette di offrire le migliori qualità di luce e di vista alle stanze utilizzate quotidianamente.",
            "Il soggiorno, la sala da pranzo e la cucina aperta occupano così il secondo piano, dove i volumi si prolungano in un ampio spazio passante bagnato di luce naturale. Sotto il tetto, una camera supplementare si apre su una terrazza protetta dagli sguardi, vera stanza esterna nel cuore del tessuto urbano.",
            "L'intera casa è collegata da una scala longitudinale che struttura i percorsi e accompagna la scoperta progressiva degli spazi. Più di un semplice elemento funzionale, diventa la spina dorsale del progetto e partecipa pienamente alla sua identità architettonica.",
          ],
        },
        {
          heading: "La luce come materiale di progetto",
          paragraphs: [
            "Su un lotto così vincolato, la luce diventa un vero materiale d'architettura.",
            "Grandi aperture verticali animano la facciata sulla strada, mentre lucernari, pozzi di luce e vetromattone diffondono la luce naturale fino al cuore della casa. Le prospettive passanti rafforzano la sensazione di spazio e offrono atmosfere che si evolvono nel corso della giornata.",
            "Ogni apertura è pensata non solo per illuminare, ma anche per rivelare i volumi, accompagnare gli usi e creare una relazione permanente tra interno ed esterno.",
          ],
        },
        {
          heading: "Materiali sobri e duraturi",
          paragraphs: [
            "Il progetto si basa su una tavolozza di materiali naturali in cui pietra calcarea, legno, cemento lucidato, serramenti metallici e ceramica dialogano in una scrittura contemporanea e senza tempo.",
            "L'arredo su misura accompagna l'architettura a ogni livello. Integrato fin dalla progettazione, ottimizza gli spazi, struttura i volumi e risponde ai vincoli propri di questa casa di città costruita su un lotto stretto.",
            "Questa realizzazione illustra il nostro approccio all'architettura: concepire spazi in cui ogni metro quadro è valorizzato, dove la luce rivela i volumi e dove i vincoli diventano le fondamenta stesse del progetto.",
          ],
        },
      ],
      identityTable: [
        { label: "Progetto", value: "Trasformazione di un ex garage in casa di città" },
        { label: "Localizzazione", value: "Bordeaux, Francia" },
        { label: "Superficie", value: "120 m²" },
        { label: "Tipo", value: "Casa familiare" },
        { label: "Incarico", value: "Nuova costruzione e architettura d'interni" },
        { label: "Stato", value: "Studio di progetto" },
      ],
      keywords: [
        "Trasformazione di garage in casa",
        "Casa di città contemporanea",
        "Nuova costruzione",
        "Architetto a Bordeaux",
        "Casa su lotto stretto",
        "Architettura contemporanea",
        "Casa familiare",
        "Architettura d'interni",
        "Arredo su misura",
        "Luce naturale",
      ],
    },
  },
  "casa-duy": {
    en: {
      cat: "Interior architecture",
      type: "Interior renovation",
      programme: "Opening up the living spaces and reorganising the rooms",
      longSections: [
        {
          heading: "Revealing the potential of a 1970s apartment",
          paragraphs: [
            "In Rome, this complete renovation of an 80 m² apartment transforms a 1970s home into a contemporary, bright and functional living space. Our intervention entirely rethinks the interior layout to adapt the apartment to today's ways of living, while making the most of the qualities of the existing structure.",
            "Rather than erasing the history of the place, the project builds on its structure and technical constraints to construct a new way of inhabiting it. Every intervention stems from a careful reading of the existing fabric, in order to reveal its architectural potential.",
          ],
        },
        {
          heading: "A more fluid organisation of the spaces",
          paragraphs: [
            "At the heart of the project lies the reorganisation of the volumes. The living spaces are opened up to form a single open living area where the kitchen, dining room and lounge extend naturally into one another. Circulation becomes more intuitive, sightlines lengthen and natural light now travels through the whole apartment.",
            "By contrast, the night-time spaces are deliberately preserved to offer greater privacy. This separation between the reception spaces and the private spaces brings a functional balance while improving everyday comfort.",
          ],
        },
        {
          heading: "Natural materials in the service of architecture",
          paragraphs: [
            "The choice of materials plays a full part in the composition of the project. Timber, ceramic tile, terracotta and polished concrete outline a restrained, timeless palette that showcases the volumes without overloading them.",
            "Timber accompanies the circulation, underlines the transitions between spaces and creates a connecting thread throughout the apartment. Mineral materials bring texture and depth, while natural tones reinforce the sense of calm and light.",
          ],
        },
        {
          heading: "A renovation conceived around light",
          paragraphs: [
            "Opening up the volumes reveals the full lighting potential of the apartment. Sightlines are cleared, unnecessary partitions disappear and every room benefits from a better spread of natural light.",
            "This apartment renovation in Rome illustrates our approach to interior architecture: transforming the existing structure with restraint, making the most of the constraints of the place, and designing sustainable spaces where the quality of use arises from a balance between light, material and proportion.",
          ],
        },
      ],
      identityTable: [
        { label: "Project", value: "Complete renovation of an apartment" },
        { label: "Location", value: "Rome, Italy" },
        { label: "Area", value: "80 m²" },
        { label: "Type", value: "Apartment in a 1970s building" },
        { label: "Scope", value: "Interior architecture and renovation" },
        { label: "Status", value: "Design study" },
      ],
      keywords: [
        "Apartment renovation",
        "Interior architect",
        "Interior architecture",
        "Contemporary apartment",
        "Apartment in Rome",
        "Refurbishment",
        "Complete renovation",
        "Open-plan kitchen",
        "Space optimisation",
        "Natural materials",
      ],
    },
    it: {
      cat: "Architettura d'interni",
      type: "Ristrutturazione d'interni",
      programme: "Apertura degli spazi di vita e ridistribuzione degli ambienti",
      longSections: [
        {
          heading: "Rivelare il potenziale di un appartamento anni '70",
          paragraphs: [
            "A Roma, questa ristrutturazione completa di un appartamento di 80 m² trasforma un'abitazione degli anni '70 in uno spazio di vita contemporaneo, luminoso e funzionale. Il nostro intervento ripensa interamente l'organizzazione interna per adattare l'appartamento agli stili di vita attuali, valorizzando al contempo le qualità dell'esistente.",
            "Anziché cancellare la storia del luogo, il progetto si appoggia sulla sua struttura e sui suoi vincoli tecnici per costruire un nuovo modo di abitare. Ogni intervento nasce da una lettura attenta dell'esistente, per rivelarne il potenziale architettonico.",
          ],
        },
        {
          heading: "Un'organizzazione più fluida degli spazi",
          paragraphs: [
            "Il cuore del progetto risiede nella riorganizzazione dei volumi. Gli spazi di vita vengono liberati dai tramezzi per formare un unico ambiente principale aperto, in cui cucina, sala da pranzo e soggiorno si prolungano naturalmente l'uno nell'altro. I percorsi diventano più intuitivi, le prospettive si allungano e la luce naturale attraversa ora l'intero appartamento.",
            "Al contrario, gli spazi notte sono volutamente preservati per offrire maggiore intimità. Questa separazione tra gli spazi di ricevimento e gli spazi privati porta un equilibrio funzionale migliorando al tempo stesso il comfort quotidiano.",
          ],
        },
        {
          heading: "Materiali naturali al servizio dell'architettura",
          paragraphs: [
            "La scelta dei materiali partecipa pienamente alla composizione del progetto. Legno, ceramica, cotto e cemento lucidato disegnano una tavolozza sobria e senza tempo che valorizza i volumi senza appesantirli.",
            "Il legno accompagna i percorsi, sottolinea le transizioni tra gli spazi e crea un filo conduttore in tutto l'appartamento. I materiali minerali apportano texture e profondità, mentre le tonalità naturali rafforzano la sensazione di calma e luce.",
          ],
        },
        {
          heading: "Una ristrutturazione pensata attorno alla luce",
          paragraphs: [
            "L'apertura dei volumi permette di rivelare tutto il potenziale luminoso dell'appartamento. Le prospettive si liberano, le partizioni superflue scompaiono e ogni stanza beneficia di una migliore diffusione della luce naturale.",
            "Questa ristrutturazione di un appartamento a Roma illustra il nostro approccio all'architettura d'interni: trasformare l'esistente con sobrietà, trarre vantaggio dai vincoli del luogo e concepire spazi durevoli, in cui la qualità d'uso nasce da un equilibrio tra luce, materia e proporzioni.",
          ],
        },
      ],
      identityTable: [
        { label: "Progetto", value: "Ristrutturazione completa di un appartamento" },
        { label: "Localizzazione", value: "Roma, Italia" },
        { label: "Superficie", value: "80 m²" },
        { label: "Tipo", value: "Appartamento in un edificio anni '70" },
        { label: "Incarico", value: "Architettura d'interni e ristrutturazione" },
        { label: "Stato", value: "Studio di progetto" },
      ],
      keywords: [
        "Ristrutturazione di appartamenti",
        "Architetto d'interni",
        "Architettura d'interni",
        "Appartamento contemporaneo",
        "Appartamento a Roma",
        "Riqualificazione",
        "Ristrutturazione completa",
        "Cucina a vista",
        "Ottimizzazione degli spazi",
        "Materiali naturali",
      ],
    },
  },
  brasserie: {
    en: {
      cat: "Interior architecture",
      type: "Restaurant — commercial premises",
      programme: "Dining room, counter, professional kitchen, technical areas",
      longSections: [
        {
          heading: "Revealing the memory of a place to give it new life",
          paragraphs: [
            "In the heart of the Paris Left Bank, this refurbishment project transforms a 1970s brasserie into a contemporary venue while preserving the identity built up over the decades.",
            "Behind a discreet facade lies an interior marked by its era, where certain architectural elements still bear witness to the history of the place. The ambition of the project is not to erase this memory, but on the contrary to build on it as the starting point of the design. The existing elements thus become an architectural material capable of engaging in dialogue with new uses and a contemporary language.",
          ],
        },
        {
          heading: "An interior architecture between heritage and modernity",
          paragraphs: [
            "The project is built on a process of revealing and reinterpreting the elements already in place. The sculptural ceilings, smoked mirrors, metal ironwork, original wooden doors and graphic basement tiles are preserved and enhanced in order to safeguard the brasserie's singular soul.",
            "These historic elements are paired with a palette of restrained, timeless materials — wood, metal, textured glass, stone and ceramic — that extend the identity of the place without seeking to replicate its past aesthetic. The aim is to create a subtle balance between the richness of the existing structure and the contemporary expectations of a Parisian establishment.",
          ],
        },
        {
          heading: "A dialogue between the restaurant and its urban surroundings",
          paragraphs: [
            "The interior design is part of a broader reflection on the relationship between the brasserie and its neighbourhood. The mineral tones of the Left Bank, the materials present in Parisian public space and the nuances of the urban landscape feed the atmosphere of the project.",
            "This continuity between indoors and outdoors naturally anchors the place in its context while affirming its own identity. The brasserie thus becomes a warm, lively space, at once rooted in its history and open to the city.",
          ],
        },
        {
          heading: "A transformation conceived around use",
          paragraphs: [
            "Beyond the architectural atmosphere, the project rethinks the entire organisation of the venue to improve the customer experience and the conditions of operation.",
            "Circulation, service areas and technical zones are restructured to offer greater fluidity, comfort and efficiency on a daily basis. This renovation of a Parisian brasserie thus combines two complementary ambitions: preserving the memory of an existing place and adapting it to contemporary use.",
            "A transformation in which history becomes a material for design.",
          ],
        },
      ],
      identityTable: [
        { label: "Project", value: "Refurbishment of a Parisian brasserie" },
        { label: "Location", value: "Paris, France" },
        { label: "Area", value: "205 m²" },
        { label: "Type", value: "Restaurant — commercial premises" },
        { label: "Scope", value: "Interior architecture and renovation" },
        { label: "Programme", value: "Dining room, counter, professional kitchen, technical areas" },
        { label: "Status", value: "Design study" },
      ],
      keywords: [
        "Brasserie renovation in Paris",
        "Commercial interior architecture",
        "Restaurant refurbishment",
        "Interior architect in Paris",
        "Commercial premises transformation",
        "Contemporary restaurant",
        "Architectural heritage",
      ],
    },
    it: {
      cat: "Architettura d'interni",
      type: "Ristorante — locale commerciale",
      programme: "Sala ristorante, bancone, cucina professionale, spazi tecnici",
      longSections: [
        {
          heading: "Rivelare la memoria di un luogo per dargli nuova vita",
          paragraphs: [
            "Nel cuore della rive gauche parigina, questo progetto di riqualificazione trasforma una brasserie degli anni '70 in un luogo contemporaneo, preservandone l'identità costruita nel corso dei decenni.",
            "Dietro una facciata discreta si cela un interno segnato dalla propria epoca, dove alcuni elementi architettonici testimoniano ancora la storia del luogo. L'ambizione del progetto non è cancellare questa memoria, ma al contrario farne il punto di partenza della progettazione. Gli elementi esistenti diventano così una materia architettonica capace di dialogare con nuovi usi e una scrittura contemporanea.",
          ],
        },
        {
          heading: "Un'architettura d'interni tra eredità e modernità",
          paragraphs: [
            "Il progetto si basa su un lavoro di rivelazione e reinterpretazione degli elementi presenti. I soffitti scultorei, gli specchi fumé, i serramenti metallici, le porte in legno originali e le piastrelle grafiche del seminterrato vengono conservati e valorizzati per preservare l'anima singolare della brasserie.",
            "Questi elementi storici sono associati a una tavolozza di materiali sobri e senza tempo — legno, metallo, vetro strutturato, pietra e ceramica — che prolungano l'identità del luogo senza cercare di riprodurne l'estetica passata. L'obiettivo è creare un equilibrio sottile tra la ricchezza dell'esistente e le attese contemporanee di un locale parigino.",
          ],
        },
        {
          heading: "Un dialogo tra il ristorante e il suo contesto urbano",
          paragraphs: [
            "La progettazione d'interni si inserisce in una riflessione più ampia sulla relazione tra la brasserie e il suo quartiere. Le tonalità minerali della rive gauche, le materie presenti nello spazio pubblico parigino e le sfumature del paesaggio urbano alimentano l'atmosfera del progetto.",
            "Questa continuità tra interno ed esterno permette di ancorare naturalmente il luogo al suo contesto, affermando al contempo un'identità propria. La brasserie diventa così uno spazio caldo e vivo, radicato nella propria storia e aperto sulla città.",
          ],
        },
        {
          heading: "Una trasformazione pensata attorno agli usi",
          paragraphs: [
            "Al di là dell'atmosfera architettonica, il progetto ripensa l'intera organizzazione del locale per migliorare l'esperienza dei clienti e le condizioni di gestione.",
            "I percorsi, gli spazi di servizio e le zone tecniche sono ristrutturati per offrire maggiore fluidità, comfort ed efficienza quotidiana. Questa ristrutturazione di una brasserie parigina unisce così due ambizioni complementari: preservare la memoria di un luogo esistente e adattarlo agli usi contemporanei.",
            "Una trasformazione in cui la storia diventa materia di progetto.",
          ],
        },
      ],
      identityTable: [
        { label: "Progetto", value: "Riqualificazione di una brasserie parigina" },
        { label: "Localizzazione", value: "Parigi, Francia" },
        { label: "Superficie", value: "205 m²" },
        { label: "Tipo", value: "Ristorante — locale commerciale" },
        { label: "Incarico", value: "Architettura d'interni e ristrutturazione" },
        { label: "Programma", value: "Sala ristorante, bancone, cucina professionale, spazi tecnici" },
        { label: "Stato", value: "Studio di progetto" },
      ],
      keywords: [
        "Ristrutturazione di brasserie a Parigi",
        "Architettura d'interni commerciale",
        "Riqualificazione di ristorante",
        "Architetto d'interni a Parigi",
        "Trasformazione di locale commerciale",
        "Ristorante contemporaneo",
        "Patrimonio architettonico",
      ],
    },
  },
  "une-maison-dans-le-paysage": {
    en: {
      cat: "Architecture, interior architecture & landscape",
      type: "Architectural and landscape design",
      programme: "Garden, pool, terrace, extension and new-build construction",
    },
    it: {
      cat: "Architettura, architettura d'interni e paesaggio",
      type: "Progettazione architettonica e paesaggistica",
      programme: "Giardino, piscina, terrazza, ampliamento e nuova costruzione",
    },
  },
};

export function localizeProject(project: Project, lang: Lang): Project {
  if (lang === "fr") return project;
  const t = PROJECT_I18N[project.slug]?.[lang];
  if (!t) return project;
  return { ...project, ...t };
}
