import type { JournalArticle } from "./journal";
import type { Lang } from "./i18n";

type ArticleTranslation = {
  title?: string;
  excerpt?: string;
  category?: string;
  readingTime?: string;
  content?: string[];
  sections?: { heading: string; paragraphs: string[] }[];
  keywords?: string[];
};

export const JOURNAL_I18N: Record<string, Partial<Record<"en" | "it", ArticleTranslation>>> = {
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
