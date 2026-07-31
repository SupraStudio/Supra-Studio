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
  "renovation-appartement-ancien-patrimoine-contemporain": {
    en: {
      title: "Renovating a period apartment: Successfully blending heritage and contemporary design",
      metaTitle: "Renovating a Period Apartment: Blending Heritage and Modernity",
      excerpt:
        "How do you renovate a Haussmannian or period apartment in Paris? Preserving mouldings, contemporary layout and noble materials.",
      category: "Renovation & Interior Architecture",
      readingTime: "5 min",
      intro:
        "Herringbone parquet, sculpted mouldings, marble fireplaces and generous ceiling heights: the charm of period buildings remains a safe bet. How do you enhance this architectural heritage while adapting it to contemporary living?",
      sections: [
        {
          heading: "Enhancing history without freezing it in place",
          paragraphs: [
            "Renovating a Haussmannian or period apartment requires a delicate balance. The goal is neither to turn the place into a nostalgic museum, nor to erase its history with cold minimalism. The challenge is to make the classical vocabulary dialogue with bespoke, clean and functional architectural lines.",
          ],
        },
        {
          heading: "1. Restoring and showcasing the original features",
          paragraphs: [
            "Before introducing contemporary elements, the first step of a successful renovation project lies in preserving what already exists:",
            "**The period parquet floors:** preservation, sanding back to bare wood and protection with matte oils or invisible varnishes to restore the original patina.",
            "**Mouldings and plasterwork:** artisanal repair of plaster ornamentation damaged by time or former partitions.",
            "**Fireplaces and gilded mirrors:** marble restoration and integration as centrepieces within the new scenography.",
          ],
          image: {
            src: "/assets/images/renovation-appartement-haussmannien-chantier-moulures-paris.jpg",
            caption: "Restoration site of a period apartment, mouldings and herringbone parquet",
          },
        },
        {
          heading: "2. Redefining the volumes for today's way of living",
          paragraphs: [
            "19th-century apartments were designed with a highly compartmentalised layout (a suite of interconnecting rooms, isolated service areas). Contemporary renovation aims to reintroduce fluidity and clarity.",
            "Opening up large living spaces (living room/kitchen) is achieved by removing non-load-bearing partitions or creating openings under steel beams. To preserve the memory of the original rooms, ceiling mouldings that subtly mark the former boundaries are kept.",
          ],
          image: {
            src: "/assets/images/renovation-appartement-ancien-salon-cheminee-marbre-paris.jpg",
            caption: "Renovated living room: restored marble fireplace and herringbone parquet",
          },
        },
        {
          heading: "3. Bespoke joinery as a bridge between eras",
          paragraphs: [
            "Inserting bespoke, cleanly designed fittings (built-in bookcases, full-height dressing rooms, mineral kitchen islands) offers a striking, elegant contrast with the classical envelope.",
            "By designing furniture that aligns perfectly with the wainscoting or stops just short of the mouldings without ever crowding them, a harmonious dialogue is created between today's cabinetmaking craft and the artisanship of the past.",
          ],
          image: {
            src: "/assets/images/renovation-appartement-ancien-cuisine-ilot-marbre-paris.jpg",
            caption: "Mineral kitchen island integrated into a period apartment renovation",
          },
        },
        {
          heading: "4. Discreetly modernising technical comfort",
          paragraphs: [
            "One of the greatest challenges of interior architecture in period buildings concerns integrating modern equipment without altering the aesthetic:",
            "**Recessed routing of electrical and plumbing networks.**",
            "**Integration of invisible air conditioning or ducted ventilation networks within partial false ceilings.**",
            "**Lighting design combining indirect ambient lighting (light coves) and discreet adjustable spotlights to showcase the ceiling heights.**",
          ],
        },
        {
          heading: "Your renovation project with our Studio",
          paragraphs: [
            "Our interior architecture studio supports discerning owners in the complete restructuring and enhancement of exceptional apartments.",
            "**Looking to renovate a period or Haussmannian apartment?** [Book an appointment](https://calendly.com/paul-cohen-suprastudio/30min) for a first consultation visit, or [get in touch](/en/contact) to discuss it.",
          ],
        },
      ],
      keywords: ["Period apartment renovation", "Haussmannian apartment", "Architectural heritage"],
    },
    it: {
      title: "Ristrutturare un appartamento d'epoca: Riuscire l'alleanza tra patrimonio e contemporaneo",
      metaTitle: "Ristrutturare un Appartamento d'Epoca: Unire Patrimonio e Modernità",
      excerpt:
        "Come ristrutturare un appartamento haussmanniano o d'epoca a Parigi? Conservazione delle cornici, layout contemporaneo e materiali nobili.",
      category: "Ristrutturazione & Architettura d'Interni",
      readingTime: "5 min",
      intro:
        "Parquet a spina di pesce ungherese, cornici scolpite, camini in marmo e generose altezze dei soffitti: il fascino dell'epoca resta un valore sicuro. Come valorizzare questa eredità architettonica adattandola ai modi di vita contemporanei?",
      sections: [
        {
          heading: "Valorizzare la storia senza fissarla nel tempo",
          paragraphs: [
            "Ristrutturare un appartamento haussmanniano o d'epoca richiede un equilibrio delicato. Non si tratta né di trasformare il luogo in un museo nostalgico, né di cancellarne la storia con un minimalismo freddo. La sfida è far dialogare il vocabolario classico con linee architettoniche su misura, essenziali e funzionali.",
          ],
        },
        {
          heading: "1. Restaurare e valorizzare gli elementi originali",
          paragraphs: [
            "Prima di inserire elementi contemporanei, il primo passo di un progetto di ristrutturazione riuscito risiede nella salvaguardia dell'esistente:",
            "**I parquet antichi:** conservazione, levigatura a vivo e protezione con oli opachi o vernici invisibili per ripristinare la patina originale.",
            "**Le cornici e gli stucchi:** riparazione artigianale degli ornamenti in gesso danneggiati dal tempo o dalle vecchie tramezzature.",
            "**I camini e gli specchi dorati:** restauro del marmo e integrazione come elementi centrali nella nuova scenografia.",
          ],
          image: {
            src: "/assets/images/renovation-appartement-haussmannien-chantier-moulures-paris.jpg",
            caption: "Cantiere di restauro di un appartamento d'epoca, cornici e parquet a spina ungherese",
          },
        },
        {
          heading: "2. Ridefinire i volumi per la vita di oggi",
          paragraphs: [
            "Gli appartamenti del XIX secolo erano concepiti secondo una distribuzione molto compartimentata (infilata di saloni, ambienti di servizio isolati). La ristrutturazione contemporanea mira a reintrodurre fluidità e chiarezza.",
            "L'apertura di grandi spazi di vita (soggiorno/cucina) avviene grazie alla rimozione di tramezzature non portanti o alla creazione di aperture su travi metalliche. Per conservare la memoria degli ambienti originali, si mantengono a soffitto le cornici che segnano sottilmente gli antichi limiti.",
          ],
          image: {
            src: "/assets/images/renovation-appartement-ancien-salon-cheminee-marbre-paris.jpg",
            caption: "Salotto ristrutturato: camino in marmo e parquet a spina ungherese restaurati",
          },
        },
        {
          heading: "3. La falegnameria su misura come trait d'union",
          paragraphs: [
            "L'inserimento di arredi su misura dal design essenziale (librerie integrate, cabina armadio a tutta altezza, isole cucina minerali) offre un contrasto sorprendente ed elegante con l'involucro classico.",
            "Disegnando mobili che si allineano perfettamente agli zoccoli o che si fermano a pochi centimetri dalle cornici senza mai soffocarle, si crea un dialogo armonioso tra il saper fare ebanista di oggi e l'artigianato di un tempo.",
          ],
          image: {
            src: "/assets/images/renovation-appartement-ancien-cuisine-ilot-marbre-paris.jpg",
            caption: "Isola cucina minerale integrata in una ristrutturazione di appartamento d'epoca",
          },
        },
        {
          heading: "4. Modernizzare il comfort tecnico con la massima discrezione",
          paragraphs: [
            "Una delle maggiori sfide dell'architettura d'interni negli edifici d'epoca riguarda l'integrazione degli impianti moderni senza alterare l'estetica:",
            "**Passaggio incassato delle reti elettriche e idrauliche.**",
            "**Integrazione di climatizzatori invisibili o reti di ventilazione canalizzate in controsoffitti parziali.**",
            "**Scenografia luminosa che combina illuminazione d'ambiente indiretta (velette luminose) e faretti orientabili discreti per valorizzare le altezze.**",
          ],
        },
        {
          heading: "Il vostro progetto di ristrutturazione con il nostro Studio",
          paragraphs: [
            "Il nostro studio di architettura d'interni accompagna proprietari esigenti nella ristrutturazione globale e nella valorizzazione di appartamenti d'eccezione.",
            "**Desiderate ristrutturare un appartamento d'epoca o haussmanniano?** [Prenotate un appuntamento](https://calendly.com/paul-cohen-suprastudio/30min) per una prima visita conoscitiva, oppure [contattateci](/it/contact) per parlarne.",
          ],
        },
      ],
      keywords: ["Ristrutturazione appartamento d'epoca", "Appartamento haussmanniano", "Patrimonio architettonico"],
    },
  },
  "cuisine-ouverte-haut-de-gamme-agencement-sur-mesure": {
    en: {
      title: "Bespoke open-plan kitchens: The art of integrating one into a high-end living space",
      metaTitle: "High-End Open-Plan Kitchen: Bespoke Layout & Luxury",
      excerpt:
        "How do you integrate a bespoke open-plan kitchen into a high-end living space? Noble materials, mineral central island and hidden appliances.",
      category: "Interior Architecture & Layout",
      readingTime: "5 min",
      intro:
        "Long relegated to purely technical functions, the kitchen now stands as the beating heart of the contemporary home. When it opens onto the living room, the architectural challenge is to erase its utilitarian character and turn it into an object of exceptional design, fully integrated into the vocabulary of the living space.",
      sections: [
        {
          heading: "Redefining the kitchen: From functional room to centrepiece",
          paragraphs: [
            "In a high-end residential renovation, opening up the kitchen isn't simply about knocking down a wall. It means rethinking the visual balance, managing odours and noise, and the overall circulation. The kitchen must know how to stay discreet when entertaining while offering absolute everyday comfort.",
          ],
        },
        {
          heading: "1. The monolithic central island: Mineral sculpture and gathering point",
          paragraphs: [
            "The central island is the centrepiece of the open-plan kitchen. To preserve the elegance of the living room, the architectural approach favours strong forms and exceptional materials.",
            "**Natural stone blocks:** Calacatta marble, quartzite or honed travertin shaped as a single block. The continuity of the veining across the waterfall edges brings a sculptural dimension.",
            "**Dialogue with fine furniture:** the island should no longer resemble a technical piece of furniture, but echo the lines of the dining table or the living room sideboard.",
            "**Hidden functions:** induction hobs with integrated extraction built into the cooktop to remove the traditional suspended hood and fully free up the visual perspectives.",
          ],
          image: {
            src: "/assets/images/cuisine-ouverte-piece-de-vie-salon-rome.jpg",
            caption: "The kitchen island in dialogue with the living space furniture",
          },
        },
        {
          heading: "2. The \"Invisible Kitchen\" concept: Full-height fittings",
          paragraphs: [
            "To blend the kitchen into the decor of the apartment or house, bespoke joinery plays a leading role.",
            "The principle of **pocket sliding door fronts** conceals the appliances, the washing area and small appliances behind large full-height panels in noble wood (smoked oak, American walnut, satin lacquer). Once the doors are closed, the kitchen disappears entirely in favour of a clean fitted wall.",
          ],
        },
        {
          heading: "3. Noble materials and floor transition",
          paragraphs: [
            "To successfully bridge the living room and the kitchen:",
            "**Floor harmony:** either by extending the herringbone parquet into the kitchen area with high-resistance surface treatments, or by creating a bespoke pattern inlaying natural stone or terrazzo into the wood.",
            "**The splashback as a work of art:** using brushed brass, aged leaf-gilded mirror or artisanal ceramic to reflect the living room's light.",
          ],
          image: {
            src: "/assets/images/cuisine-ouverte-bois-sur-mesure-famille.jpg",
            caption: "Noble materials and bespoke wood in a family open-plan kitchen",
          },
        },
        {
          heading: "4. Lighting: Shifting from prep mode to entertaining mode",
          paragraphs: [
            "Lighting in an open-plan kitchen needs to be adjustable:",
            "**Targeted functional lighting:** invisible LED strips built into the wall units to evenly light the worktop.",
            "**Theatrical ambient lighting:** designer pendants above the island and recessed low-glare spotlights to create a warm, intimate atmosphere once the meal is served.",
          ],
          image: {
            src: "/assets/images/cuisine-ouverte-sur-mesure-salon-vue-paris.jpg",
            caption: "Open-plan kitchen in entertaining mode, at dusk",
          },
        },
        {
          heading: "Your bespoke layout project with the Studio",
          paragraphs: [
            "Every kitchen designed by our studio is a unique creation, made to measure in collaboration with our cabinetmakers and stone masons.",
            "**Picture a bespoke open-plan kitchen for your living space?** [Book an appointment](https://calendly.com/paul-cohen-suprastudio/30min) to discuss it, or [get in touch](/en/contact) to tell us about your project.",
          ],
        },
      ],
      keywords: ["Bespoke open-plan kitchen", "High-end layout", "Marble central island"],
    },
    it: {
      title: "Cucine open space su misura: L'arte di integrarle in un ambiente di vita di alta gamma",
      metaTitle: "Cucina Open Space di Alta Gamma: Layout e Lusso su Misura",
      excerpt:
        "Come integrare una cucina open space su misura in un ambiente di vita di alta gamma? Materiali nobili, isola centrale minerale ed elettrodomestici invisibili.",
      category: "Architettura d'Interni e Arredo",
      readingTime: "5 min",
      intro:
        "A lungo relegata a funzioni puramente tecniche, la cucina si impone ormai come il cuore pulsante dell'abitazione contemporanea. Quando si apre sul soggiorno, la sfida architettonica consiste nel cancellarne il carattere utilitario per farne un oggetto di design d'eccezione, perfettamente integrato nel linguaggio dell'ambiente di vita.",
      sections: [
        {
          heading: "Ridefinire la cucina: Dal funzionale all'elemento centrale",
          paragraphs: [
            "In una ristrutturazione residenziale di alta gamma, aprire la cucina non significa semplicemente abbattere un muro. Significa ripensare l'equilibrio visivo, la gestione degli odori e del rumore, oltre alla circolazione globale. La cucina deve saper farsi discreta durante i ricevimenti offrendo al contempo un comfort d'uso assoluto ogni giorno.",
          ],
        },
        {
          heading: "1. L'isola centrale monolitica: Scultura minerale e punto di ritrovo",
          paragraphs: [
            "L'isola centrale è l'elemento principale della cucina open space. Per preservare l'eleganza del soggiorno, la scelta architettonica si orienta verso forme decise e materiali d'eccezione.",
            "**I blocchi di pietra naturale:** marmo di Calacatta, quarzite o travertino levigato lavorati in monoblocco. La continuità della venatura sulle cascate laterali conferisce una dimensione scultorea.",
            "**Il dialogo con l'arredo d'arte:** l'isola non deve più somigliare a un mobile tecnico, ma rispondere alle linee del tavolo da pranzo o della credenza del salotto.",
            "**Le funzioni dissimulate:** piani a induzione con aspirazione integrata nel piano cottura per eliminare la cappa sospesa tradizionale e liberare completamente le prospettive visive.",
          ],
          image: {
            src: "/assets/images/cuisine-ouverte-piece-de-vie-salon-rome.jpg",
            caption: "L'isola cucina in dialogo con l'arredo dell'ambiente di vita",
          },
        },
        {
          heading: "2. Il concetto di \"Cucina Invisibile\": Arredi a tutta altezza",
          paragraphs: [
            "Per fondere la cucina nel décor dell'appartamento o della casa, la falegnameria su misura gioca un ruolo preponderante.",
            "Il principio delle **ante scorrevoli a scomparsa** permette di dissimulare gli elettrodomestici, la zona lavaggio e i piccoli elettrodomestici dietro grandi pannelli a tutta altezza in legno nobile (rovere affumicato, noce americano, laccato satinato). Una volta chiuse le ante, la cucina si dissolve completamente a favore di una parete d'arredo essenziale.",
          ],
        },
        {
          heading: "3. Materiali nobili e transizione del pavimento",
          paragraphs: [
            "Per riuscire nel collegamento tra soggiorno e cucina:",
            "**L'armonia dei pavimenti:** o prolungando il parquet a spina ungherese nella zona cucina grazie a trattamenti superficiali ad alta resistenza, oppure creando una composizione su misura incastonando una pietra naturale o un terrazzo nel legno.",
            "**Il rivestimento come opera d'arte:** utilizzo di ottone spazzolato, specchio invecchiato a foglia o ceramica artigianale per riflettere la luce del soggiorno.",
          ],
          image: {
            src: "/assets/images/cuisine-ouverte-bois-sur-mesure-famille.jpg",
            caption: "Materiali nobili e legno su misura in una cucina open space familiare",
          },
        },
        {
          heading: "4. Illuminazione: Passare dalla modalità preparazione alla modalità ricevimento",
          paragraphs: [
            "L'illuminazione di una cucina open space deve essere modulabile:",
            "**Un'illuminazione funzionale mirata:** strisce LED invisibili integrate sotto i pensili per illuminare il piano di lavoro in modo omogeneo.",
            "**Un'illuminazione d'atmosfera teatrale:** sospensioni di design sopra l'isola e faretti incassati a bassa luminanza per creare un'atmosfera calda e intima non appena il pasto viene servito.",
          ],
          image: {
            src: "/assets/images/cuisine-ouverte-sur-mesure-salon-vue-paris.jpg",
            caption: "Cucina open space in modalità ricevimento, al calar della sera",
          },
        },
        {
          heading: "Il vostro progetto di arredo su misura con lo Studio",
          paragraphs: [
            "Ogni cucina disegnata dal nostro studio è una creazione unica, concepita su misura in collaborazione con i nostri artigiani ebanisti e marmisti.",
            "**Immaginate una cucina open space su misura per il vostro ambiente di vita?** [Prenotate un appuntamento](https://calendly.com/paul-cohen-suprastudio/30min) per parlarne, oppure [contattateci](/it/contact) per presentarci il vostro progetto.",
          ],
        },
      ],
      keywords: ["Cucina open space su misura", "Arredo di alta gamma", "Isola centrale in marmo"],
    },
  },
  "suite-parentale-haut-de-gamme-dressing-salle-de-bains": {
    en: {
      title: "Designing an exceptional primary suite: Where comfort meets bespoke craftsmanship",
      metaTitle: "Designing an Exceptional Primary Suite: Luxury, Dressing Room & Bath",
      excerpt:
        "How do you design a high-end primary suite? Space planning, bespoke dressing room and boutique-hotel-style bathroom.",
      category: "Interior Architecture & Private Spaces",
      readingTime: "5 min",
      intro:
        "A true private sanctuary at the heart of the home, the primary suite has evolved profoundly. Far from a simple bedroom with an adjoining bathroom, it is now conceived as a boutique-hotel suite: a fluid, intimate space bringing together the sleeping area, a bespoke dressing room and a wellness bathroom.",
      sections: [
        {
          heading: "Rethinking the primary suite as a fluid space",
          paragraphs: [
            "A successful primary suite layout is built around circulation. Boundaries become lighter: traditional hinged doors give way to wooden screens, patinated metal glazed partitions or sliding Japanese-style panels, allowing light to travel through the full depth of the space.",
          ],
          image: {
            src: "/assets/images/suite-parentale-chambre-parisienne-salle-de-bain-marbre.jpg",
            caption: "Parisian primary suite, bedroom and marble bathroom",
          },
        },
        {
          heading: "1. The architectural headboard: The bedroom's founding element",
          paragraphs: [
            "In the sleeping area, the headboard designed by the interior architect structures the room:",
            "**Multi-function integration:** it brings together, within a single joinery composition, suspended bedside tables, recessed reading lights, hidden sockets and display niches.",
            "**Enveloping materials:** fluted wood panelling, acoustic stretched velvet or lime-wash paint are used to bring texture and a soothing cocoon-like feel.",
          ],
        },
        {
          heading: "2. The bespoke dressing room: The elegance of haute couture",
          paragraphs: [
            "A high-end dressing room does more than store: it stages the wardrobe.",
            "**Interior joinery:** warm wood species (walnut, tinted ash) paired with leather or suede inserts in the accessory drawers.",
            "**Plays of transparency:** tinted glass fronts with ultra-fine aluminium frames to hint at what's inside without visually overloading the space.",
            "**Integrated lighting:** indirect LED lighting with presence detection under every shelf, for a visual comfort worthy of the grandest luxury houses.",
          ],
          image: {
            src: "/assets/images/suite-parentale-dressing-sur-mesure-baignoire-ilot.jpg",
            caption: "Bespoke dressing room and open bathroom, primary suite",
          },
        },
        {
          heading: "3. The bathroom: A spa experience at home",
          paragraphs: [
            "The primary suite's bathroom becomes a place of restoration.",
            "**A sculptural freestanding tub or an XXL walk-in shower:** flush natural-stone shower trays with a built-in bench and recessed rain shower ceiling head.",
            "**Mineral, durable materials:** large-format terrazzo, honed travertin, recessed taps in bronze or brushed brass finish.",
            "**Managing ventilation and light:** discreet integration of technical equipment and enhancement of natural light through frosted glazing or ribbed glass.",
          ],
          image: {
            src: "/assets/images/suite-parentale-salle-de-bain-terre-cuite-douche-italienne.jpg",
            caption: "Walk-in shower and natural materials, primary suite bathroom",
          },
        },
        {
          heading: "Create your private cocoon with our Studio",
          paragraphs: [
            "From redistributing the volumes to selecting every last textile, our team of interior architects designs exceptional primary suites tailored to your pace of life.",
            "**Dreaming of a bespoke primary suite?** [Book an appointment](https://calendly.com/paul-cohen-suprastudio/30min) to discuss it, or [get in touch](/en/contact) to tell us about your project.",
          ],
        },
      ],
      keywords: ["Primary suite", "Bespoke dressing room", "Luxury bathroom"],
    },
    it: {
      title: "Progettare una suite padronale d'eccezione: L'alleanza tra comfort e su misura",
      metaTitle: "Progettare una Suite Padronale d'Eccezione: Lusso, Cabina Armadio e Bagno",
      excerpt:
        "Come arredare una suite padronale di alta gamma? Organizzazione dello spazio, cabina armadio su misura e bagno stile hotel de charme.",
      category: "Architettura d'Interni e Spazi Privati",
      readingTime: "5 min",
      intro:
        "Vero santuario privato nel cuore dell'abitazione, la suite padronale si è evoluta profondamente. Lontana dalla semplice camera con bagno annesso, oggi è pensata come una suite di un hotel de charme: uno spazio fluido e intimo che riunisce zona notte, cabina armadio su misura e bagno benessere.",
      sections: [
        {
          heading: "Ripensare la suite padronale come uno spazio fluido",
          paragraphs: [
            "L'organizzazione di una suite padronale riuscita si basa sulla circolazione. I confini si alleggeriscono: le porte battenti tradizionali lasciano il posto a frangivista in legno, vetrate in metallo patinato o pareti scorrevoli in stile giapponese, permettendo alla luce di attraversare tutta la profondità del volume.",
          ],
          image: {
            src: "/assets/images/suite-parentale-chambre-parisienne-salle-de-bain-marbre.jpg",
            caption: "Suite padronale parigina, camera e bagno in marmo",
          },
        },
        {
          heading: "1. La testata del letto architettonica: Elemento fondante della camera",
          paragraphs: [
            "Nella zona notte, la testata del letto disegnata dall'architetto d'interni struttura l'ambiente:",
            "**Integrazione multifunzione:** riunisce in un'unica composizione di falegnameria i comodini sospesi, le luci di lettura incassate, le prese invisibili e le nicchie espositive.",
            "**Materiali avvolgenti:** utilizzo di pannelli in legno scanalato, velluto teso acustico o pitture a calce per dare rilievo e una sensazione di bozzolo rassicurante.",
          ],
        },
        {
          heading: "2. La cabina armadio su misura: L'eleganza dell'alta moda",
          paragraphs: [
            "Una cabina armadio di alta gamma non si limita a riporre: mette in scena il guardaroba.",
            "**Falegnameria interna:** essenze di legno calde (noce, frassino tinto) associate a inserti in pelle o alcantara nei cassetti degli accessori.",
            "**Giochi di trasparenza:** ante in vetro colorato con strutture in alluminio ultra-sottili per lasciare intuire i capi senza appesantire visivamente lo spazio.",
            "**Illuminazione integrata:** luce LED indiretta con rilevamento di presenza sotto ogni ripiano, per un comfort visivo degno delle più grandi maison di lusso.",
          ],
          image: {
            src: "/assets/images/suite-parentale-dressing-sur-mesure-baignoire-ilot.jpg",
            caption: "Cabina armadio su misura e bagno aperto, suite padronale",
          },
        },
        {
          heading: "3. Il bagno: Un'esperienza spa a domicilio",
          paragraphs: [
            "Il bagno della suite padronale diventa un luogo di rigenerazione.",
            "**Vasca a isola scultorea o doccia walk-in XXL:** piatti doccia a filo pavimento in pietra naturale con panca in muratura e soffione a pioggia incassato a soffitto.",
            "**Materiali minerali e durevoli:** terrazzo grande formato, travertino levigato, rubinetteria incassata in finitura bronzo o ottone spazzolato.",
            "**Gestione della ventilazione e della luce:** integrazione discreta degli impianti tecnici e valorizzazione della luce naturale attraverso vetrate satinate o vetro striato.",
          ],
          image: {
            src: "/assets/images/suite-parentale-salle-de-bain-terre-cuite-douche-italienne.jpg",
            caption: "Doccia walk-in e materiali naturali, bagno della suite padronale",
          },
        },
        {
          heading: "Create il vostro bozzolo privato con il nostro Studio",
          paragraphs: [
            "Dalla redistribuzione dei volumi fino alla scelta del più piccolo tessile, il nostro team di architetti d'interni progetta suite padronali d'eccezione su misura per il vostro ritmo di vita.",
            "**Sognate una suite padronale su misura?** [Prenotate un appuntamento](https://calendly.com/paul-cohen-suprastudio/30min) per parlarne, oppure [contattateci](/it/contact) per presentarci il vostro progetto.",
          ],
        },
      ],
      keywords: ["Suite padronale", "Cabina armadio su misura", "Bagno di lusso"],
    },
  },
  "renovation-globale-appartement-maison-architecture-interieur": {
    en: {
      title: "Exceptional whole-home renovation: Redesigning the art of living and enhancing heritage value",
      metaTitle: "Whole-Home Renovation of Apartments & Houses: An Interior Architecture Guide",
      excerpt:
        "How do you approach the whole-home renovation and complete restructuring of an exceptional property? Process, redistribution of volumes and heritage value.",
      category: "Renovation & Interior Architecture",
      readingTime: "6 min",
      intro:
        "Undertaking the whole-home renovation of an exceptional apartment or house goes far beyond a simple refresh. It's an opportunity to entirely rethink the experience of the home, adapt a place to a contemporary way of living, and secure its heritage value through demanding choices in layout and materials.",
      sections: [
        {
          heading: "Whole-home renovation: An indispensable overall vision",
          paragraphs: [
            "Undertaking work room by room often leads to visual and technical fragmentation. Conversely, a complete restructuring orchestrated by an interior architect allows for an overall diagnosis of the property: circulation flow, natural light input, structural logic and aesthetic coherence from one end of the space to the other.",
          ],
        },
        {
          heading: "1. Redistributing the volumes: Unlocking the spatial potential",
          paragraphs: [
            "Every place has its own architectural character. The interior architect's first role is to read this original structure in order to reveal its full potential.",
            "**Rationalising the spaces:** eliminating wasted square metres (dark corridors, superfluous landings) to enlarge reception rooms and create through-perspectives.",
            "**Working with natural light:** rethinking the orientation of functions according to the sun's path, creating bespoke glazed openings or inserting light partitions that let daylight travel through.",
            "**Hierarchising the zones:** marking a fluid but clear separation between reception spaces (living room, dining room, kitchen) and the private sphere (bedrooms, dressing rooms, suites).",
          ],
        },
        {
          heading: "2. The invisible integration of technology and comfort",
          paragraphs: [
            "The hallmark of a high-end renovation lies in what cannot be seen. Technical performance is integrated in a completely imperceptible way, leaving all the room for aesthetics.",
            "**Insulation and energy efficiency:** improving thermal and acoustic performance (high-performance insulating linings, bespoke exterior joinery respecting planning constraints).",
            "**Home automation and lighting design:** centralised management of ambiances, concealment of electrical networks and discreet integration of indirect lighting (light coves, recessed slots).",
            "**Climate comfort:** invisible integration of heating and cooling systems within false ceilings or fitted joinery.",
          ],
        },
        {
          heading: "3. Continuity of materials: Creating a unified visual signature",
          paragraphs: [
            "To offer a sense of calm and overall harmony, the choice of materials follows a rigorous common thread.",
            "Rather than accumulating different stylistic effects in each room, a whole-home renovation favours a restrained palette of noble, timeless materials — solid wood flooring, lime renders, natural stone, brushed brass — subtly declined throughout the entire project.",
          ],
        },
        {
          heading: "4. From sketch to site supervision: Rigorous project management",
          paragraphs: [
            "Successfully carrying out a complete renovation requires a proven support method:",
            "**Design phase (preliminary and detailed design):** 2D plans, 3D modelling, choice of materials and detailed costing.",
            "**Consultation and selection of craftspeople:** mobilising a network of skilled tradespeople and qualified firms for every trade.",
            "**Site supervision and project management:** rigorous coordination of schedules, quality control of execution and adherence to budget commitments through to turnkey handover.",
          ],
          image: {
            src: "/assets/images/renovation-globale-suivi-chantier-artisans-cuisine.jpg",
            caption: "Site supervision and coordination of craftspeople, whole-home renovation",
          },
        },
        {
          heading: "Entrust your whole-home renovation project to the Studio",
          paragraphs: [
            "Whether you have just acquired a property to restructure or wish to transform your current residence, our interior architecture practice designs bespoke projects built to last.",
            "**Have a whole-home renovation project?** [Book an appointment](https://calendly.com/paul-cohen-suprastudio/30min) for a first consultation visit, or [get in touch](/en/contact) to discuss it.",
          ],
          image: {
            src: "/assets/images/renovation-globale-maitrise-oeuvre-architecte-client.jpg",
            caption: "A trusted relationship between architect and client, from first conversation to handover",
          },
        },
      ],
      keywords: ["Whole-home renovation", "Apartment restructuring", "Site supervision"],
    },
    it: {
      title: "Ristrutturazione globale d'eccezione: Ridisegnare l'arte di vivere e valorizzare il patrimonio",
      metaTitle: "Ristrutturazione Globale di Appartamenti e Case: Guida all'Architettura d'Interni",
      excerpt:
        "Come affrontare la ristrutturazione globale e la ristrutturazione completa di un immobile d'eccezione? Processo, redistribuzione dei volumi e valore patrimoniale.",
      category: "Ristrutturazione & Architettura d'Interni",
      readingTime: "6 min",
      intro:
        "Intraprendere la ristrutturazione globale di un appartamento o di una casa d'eccezione va ben oltre un semplice rinnovamento. È l'opportunità di ripensare integralmente l'esperienza dell'abitare, adattare un luogo a uno stile di vita contemporaneo e consolidarne il valore patrimoniale attraverso scelte di arredo e materiali esigenti.",
      sections: [
        {
          heading: "La ristrutturazione globale: Una visione d'insieme indispensabile",
          paragraphs: [
            "Intraprendere lavori stanza per stanza porta spesso a una frammentazione visiva e tecnica. Al contrario, la ristrutturazione completa orchestrata da un architetto d'interni permette di porre una diagnosi globale sull'immobile: flussi di circolazione, apporto di luce naturale, logica strutturale e coerenza estetica da un capo all'altro dello spazio.",
          ],
        },
        {
          heading: "1. La redistribuzione dei volumi: Liberare il potenziale spaziale",
          paragraphs: [
            "Ogni luogo possiede la propria scrittura architettonica. Il primo ruolo dell'architetto d'interni consiste nel leggere questa struttura originale per rivelarne tutto il potenziale.",
            "**La razionalizzazione degli spazi:** eliminare i metri quadri persi (corridoi bui, disimpegni superflui) per ampliare gli ambienti di ricevimento e creare prospettive passanti.",
            "**Il lavoro sulla luce naturale:** ripensare l'orientamento delle funzioni secondo il percorso del sole, creare vetrate su misura o inserire tramezzature leggere che lasciano filtrare la luce.",
            "**La gerarchizzazione delle zone:** segnare una separazione fluida ma chiara tra gli spazi di ricevimento (salotto, sala da pranzo, cucina) e la sfera intima (camere, cabine armadio, suite).",
          ],
        },
        {
          heading: "2. L'integrazione invisibile della tecnica e del comfort",
          paragraphs: [
            "Il segno distintivo di una ristrutturazione di alta gamma risiede in ciò che non si vede. Le prestazioni tecniche si integrano in modo del tutto impercettibile per lasciare tutto lo spazio all'estetica.",
            "**L'isolamento e l'efficienza energetica:** miglioramento delle prestazioni termiche e acustiche (rivestimenti isolanti ad alte prestazioni, serramenti esterni su misura nel rispetto dei vincoli urbanistici).",
            "**La domotica e la scenografia luminosa:** gestione centralizzata delle atmosfere, dissimulazione delle reti elettriche e integrazione discreta di illuminazioni indirette (velette luminose, fessure incassate).",
            "**Il comfort climatico:** integrazione invisibile dei sistemi di riscaldamento e raffrescamento all'interno di controsoffitti o arredi su misura.",
          ],
        },
        {
          heading: "3. La continuità dei materiali: Creare una firma visiva unificata",
          paragraphs: [
            "Per offrire una sensazione di pacatezza e di armonia globale, la scelta dei materiali risponde a un filo conduttore rigoroso.",
            "Piuttosto che accumulare effetti di stile diversi in ogni stanza, la ristrutturazione globale privilegia una palette ristretta di materiali nobili e senza tempo — parquet in legno massello, intonaci a calce, pietre naturali, ottone spazzolato — declinata con sottigliezza attraverso l'intero progetto.",
          ],
        },
        {
          heading: "4. Dallo schizzo alla direzione lavori: La rigorosa direzione dei lavori",
          paragraphs: [
            "Portare a termine una ristrutturazione completa richiede un metodo di accompagnamento collaudato:",
            "**Fase di progettazione (preliminare e definitiva):** piante 2D, modellazioni 3D, scelta dei materiali e computo dettagliato.",
            "**Consultazione e selezione degli artigiani:** mobilitazione di una rete di maestranze e imprese qualificate per ogni categoria di lavoro.",
            "**Direzione lavori e monitoraggio del cantiere:** coordinamento rigoroso dei tempi, controllo della qualità di esecuzione e rispetto degli impegni di budget fino alla consegna chiavi in mano.",
          ],
          image: {
            src: "/assets/images/renovation-globale-suivi-chantier-artisans-cuisine.jpg",
            caption: "Monitoraggio del cantiere e coordinamento degli artigiani, ristrutturazione globale",
          },
        },
        {
          heading: "Affidate il vostro progetto di ristrutturazione globale allo Studio",
          paragraphs: [
            "Che abbiate appena acquisito un immobile da ristrutturare o desideriate trasformare la vostra residenza attuale, il nostro studio di architettura d'interni progetta interventi su misura pensati per durare.",
            "**Avete un progetto di ristrutturazione globale?** [Prenotate un appuntamento](https://calendly.com/paul-cohen-suprastudio/30min) per una prima visita conoscitiva, oppure [contattateci](/it/contact) per parlarne.",
          ],
          image: {
            src: "/assets/images/renovation-globale-maitrise-oeuvre-architecte-client.jpg",
            caption: "Un rapporto di fiducia tra architetto e cliente, dal primo incontro alla consegna",
          },
        },
      ],
      keywords: ["Ristrutturazione globale", "Ristrutturazione appartamento", "Direzione lavori"],
    },
  },
  "vision-architecturale-volumes-lumiere-matiere": {
    en: {
      title: "Sculpting space: When architectural vision transcends the interior",
      metaTitle: "Interior Architecture: Sculpting Volumes, Light & Material",
      excerpt:
        "How does architectural vision transform a space? Discover the art of sculpting volumes, taming light and orchestrating noble materials.",
      category: "Vision & Interior Architecture",
      readingTime: "6 min",
      intro:
        "Beyond layout and furnishing, interior architecture engages with the very substance of a place. It doesn't dress existing rooms: it orchestrates the empty space, shapes the volumes and captures the light to create living places that stir a lasting emotion.",
      sections: [
        {
          heading: "1. Volumetry: Playing with mass and void",
          paragraphs: [
            "Every architecture project begins with a three-dimensional reading of the space. Even before considering the slightest colour, the challenge is to define the right proportions.",
            "**Verticality and ceiling height:** enhancing volumes with full-height vertical elements (full-height doors without transoms, integrated joinery, geometric screens) that draw the eye upward.",
            "**Working with the void:** knowing how to preserve pockets of air and breathing room. In high-end contemporary architecture, the void isn't a lack but a compositional element in its own right that showcases the key pieces.",
            "**Perspectives and alignments:** creating visual enfilades and clear vanishing lines that run through the apartment or house from end to end.",
          ],
          image: {
            src: "/assets/images/architecture-interieur-volumes-lumiere-escalier-suspendu.jpg",
            caption: "Suspended staircase and skylight, a play of architectural volumes",
          },
        },
        {
          heading: "2. Light as a building material",
          paragraphs: [
            "Light isn't just a functional input; it's the architect's most alive material. It reveals textures, transforms hues over the course of the day and sets its rhythm.",
            "**Capturing daylight:** rethinking openings, using bespoke architectural glazing or textured glass to diffuse soft light into blind areas.",
            "**Night-time architectural lighting:** banishing the single central light fixture in favour of invisible lighting design. Integrating light coves, recessed slots and low-glare spotlights allows forms to be sculpted from dusk onward.",
          ],
          image: {
            src: "/assets/images/architecture-interieur-matiere-cuisine-travertin-oliviers.jpg",
            caption: "Natural light enhances the material, a kitchen opening onto an olive grove",
          },
        },
        {
          heading: "3. The truth of material: In praise of the raw and the noble",
          paragraphs: [
            "Contemporary architecture moves away from artifice to celebrate the nobility of textured, enduring materials.",
            "The pairing of mineral surfaces (honed natural stone, architectural concrete, lime or clay renders) with warm touches (solid wood, patinated brass, raw linen textiles) creates an elegant visual tension. This contrast brings the interior a tactile presence and a patina that grows more beautiful with time.",
          ],
          image: {
            src: "/assets/images/architecture-interieur-matiere-travertin-salle-de-bain.jpg",
            caption: "Natural stone and noble materials, contemporary bathroom",
          },
        },
        {
          heading: "4. The invisible integration of technical detail",
          paragraphs: [
            "What sets a rigorous architectural approach apart from a simple fit-out is the care given to the detail of execution:",
            "**Flush skirting boards:** integrated flush with the wall for an absolute purity of line.",
            "**Pocket doors and invisible frames:** with no visible casing (Filomuro-type system), allowing partitions to present themselves as pure planes of mass.",
            "**Millimetre-precise setting-out:** the perfect alignment of tile joints, stone slabs and wood patterns for flawless geometric harmony.",
          ],
        },
        {
          heading: "Bringing your space into dialogue with architecture, with the Studio",
          paragraphs: [
            "Our studio approaches every project with the rigour of the architect and the sensibility of the designer, to build bespoke spaces where every detail finds its justification.",
            "**Have a vision for your space?** [Book an appointment](https://calendly.com/paul-cohen-suprastudio/30min) to discuss it, or [get in touch](/en/contact) to tell us about your project.",
          ],
        },
      ],
      keywords: ["Interior architecture", "Volumes and light", "Noble materials"],
    },
    it: {
      title: "Scolpire lo spazio: Quando la visione architettonica trascende l'interno",
      metaTitle: "Architettura d'Interni: Scolpire Volumi, Luce e Materia",
      excerpt:
        "Come la visione architettonica trasforma uno spazio? Scoprite l'arte di scolpire i volumi, addomesticare la luce e orchestrare i materiali nobili.",
      category: "Visione & Architettura d'Interni",
      readingTime: "6 min",
      intro:
        "Al di là dell'arredo e dell'ammobiliamento, l'architettura d'interni si dedica alla sostanza stessa del luogo. Non veste ambienti esistenti: orchestra i vuoti, plasma i volumi e cattura la luce per creare luoghi di vita che suscitano un'emozione duratura.",
      sections: [
        {
          heading: "1. La volumetria: Giocare con i pieni e i vuoti",
          paragraphs: [
            "Ogni progetto di architettura inizia con una lettura tridimensionale dello spazio. Ancor prima di considerare il minimo colore, la sfida è definire proporzioni corrette.",
            "**La verticalità e l'altezza dei soffitti:** valorizzare i volumi con elementi verticali a tutta altezza (porte a tutta altezza senza sopraluce, falegnameria integrata, frangivista geometrici) che allungano lo sguardo.",
            "**Il lavoro sul vuoto:** saper preservare spazi d'aria e di respiro. In un'architettura contemporanea di alta gamma, il vuoto non è una mancanza, ma un elemento compositivo a pieno titolo che valorizza gli elementi principali.",
            "**Le prospettive e gli allineamenti:** creare infilate visive e assi di fuga chiari che attraversano l'appartamento o la casa da un capo all'altro.",
          ],
          image: {
            src: "/assets/images/architecture-interieur-volumes-lumiere-escalier-suspendu.jpg",
            caption: "Scala sospesa e lucernario, un gioco di volumi architettonici",
          },
        },
        {
          heading: "2. La luce come materiale da costruzione",
          paragraphs: [
            "La luce non è un semplice apporto funzionale; è il materiale più vivo dell'architetto. Rivela le texture, trasforma le tonalità nel corso delle ore e scandisce la giornata.",
            "**La cattura della luce diurna:** ripensare le aperture, utilizzare vetrate architettoniche su misura o vetro strutturato per diffondere una luce dolce nelle zone cieche.",
            "**L'illuminazione architettonica notturna:** bandire il punto luce centrale unico a favore di una scenografia luminosa invisibile. L'integrazione di velette luminose, fessure incassate e faretti a bassa luminanza permette di scolpire le forme fin dal crepuscolo.",
          ],
          image: {
            src: "/assets/images/architecture-interieur-matiere-cuisine-travertin-oliviers.jpg",
            caption: "La luce naturale esalta la materia, una cucina aperta su un uliveto",
          },
        },
        {
          heading: "3. La verità della materia: L'elogio del grezzo e del nobile",
          paragraphs: [
            "L'architettura contemporanea si allontana dagli artifici per celebrare la nobiltà delle materie testurizzate e durevoli.",
            "L'associazione di superfici minerali (pietra naturale levigata, cemento architettonico, intonaci a calce o all'argilla) e tocchi caldi (legno massello, ottone patinato, tessuti in lino grezzo) crea una tensione visiva elegante. Questo contrasto conferisce all'interno una presenza tattile e una patina che si abbellisce nel tempo.",
          ],
          image: {
            src: "/assets/images/architecture-interieur-matiere-travertin-salle-de-bain.jpg",
            caption: "Pietra naturale e materiali nobili, bagno contemporaneo",
          },
        },
        {
          heading: "4. L'integrazione invisibile del dettaglio tecnico",
          paragraphs: [
            "Ciò che distingue un approccio architettonico rigoroso da un semplice allestimento è la cura riservata al dettaglio esecutivo:",
            "**I battiscopa a filo:** integrati a filo del muro per una purezza di linea assoluta.",
            "**Le porte a scomparsa e i telai invisibili:** senza cornice apparente (sistema tipo Filomuro), che permettono alle pareti di presentarsi come puri piani di massa.",
            "**La posa millimetrica:** l'allineamento perfetto dei giunti delle piastrelle, delle lastre di pietra e delle composizioni in legno per un'armonia geometrica perfetta.",
          ],
        },
        {
          heading: "Fate dialogare il vostro luogo con l'architettura, con lo Studio",
          paragraphs: [
            "Il nostro studio affronta ogni progetto con il rigore dell'architetto e la sensibilità del designer, per costruire spazi su misura dove ogni dettaglio trova la propria giustificazione.",
            "**Avete una visione per il vostro spazio?** [Prenotate un appuntamento](https://calendly.com/paul-cohen-suprastudio/30min) per parlarne, oppure [contattateci](/it/contact) per presentarci il vostro progetto.",
          ],
        },
      ],
      keywords: ["Architettura d'interni", "Volumi e luce", "Materiali nobili"],
    },
  },
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
            src: "/assets/images/rooftop-vegetalise-paris-tour-eiffel.png",
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
            src: "/assets/images/rooftop-bordeaux-vue-cathedrale.png",
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
            src: "/assets/images/rooftop-rome-cuisine-ete-colisee.png",
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
            src: "/assets/images/rooftop-vegetalise-paris-tour-eiffel.png",
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
            src: "/assets/images/rooftop-bordeaux-vue-cathedrale.png",
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
            src: "/assets/images/rooftop-rome-cuisine-ete-colisee.png",
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
            src: "/assets/images/continuite-interieur-jardin-terrasse-jour.png",
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
            src: "/assets/images/continuite-interieur-jardin-eclairage-nuit.jpg",
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
            src: "/assets/images/continuite-interieur-jardin-terrasse-jour.png",
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
            src: "/assets/images/continuite-interieur-jardin-eclairage-nuit.jpg",
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
          image: {
            src: "/assets/images/architectes-echange-materiaux-projet-paris.png",
            caption: "Discussing materials and plans for a project, Supra Studio",
          },
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
            src: "/assets/images/paul-beatrice-fondateurs-supra-studio.jpg",
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
          image: {
            src: "/assets/images/architectes-echange-materiaux-projet-paris.png",
            caption: "Confronto sui materiali e sulle piante di un progetto, Supra Studio",
          },
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
            src: "/assets/images/paul-beatrice-fondateurs-supra-studio.jpg",
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
