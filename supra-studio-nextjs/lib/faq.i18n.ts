import { FAQ_ITEMS, type FaqItem } from "./faq";
import type { Lang } from "./i18n";

type FaqTranslation = {
  question?: string;
  answer?: string;
};

export const FAQ_I18N: Record<string, Partial<Record<"en" | "it", FaqTranslation>>> = {
  "synergie-in-out": {
    en: {
      question:
        "How does the combined support between interior architecture and landscape design work?",
      answer:
        "We design every project as a coherent whole, where interior and exterior respond to one another from the very first sketches. This dual expertise — interior architecture and landscape design — lets us think through circulation, materials and light in a single gesture, whether it's an apartment with a terrace, a house and its garden, or a shop opening onto the street. The result: visual and sensory continuity between the spaces you live in, indoors and out.",
    },
    it: {
      question: "Come si articola l'accompagnamento combinato tra architettura d'interni e paesaggio?",
      answer:
        "Concepiamo ogni progetto come un insieme coerente, in cui l'interno e l'esterno si rispondono fin dai primi schizzi. Questa doppia competenza — architettura d'interni e architettura del paesaggio — ci permette di pensare le circolazioni, i materiali e la luce con un unico gesto, che si tratti di un appartamento con terrazza, di una casa e del suo giardino, o di un negozio aperto sulla strada. Il risultato: una continuità visiva e sensoriale tra gli spazi vissuti, dentro come fuori.",
    },
  },
  "etapes-projet": {
    en: {
      question: "What are the main stages of a project, from design to handover?",
      answer:
        "Our support unfolds in clearly identified stages: a first meeting and feasibility study to understand your needs and the constraints of the space, a design phase (sketch, then preliminary design) where the layout and volumes take shape, the choice of materials and atmospheres, then site supervision through to handover. Each stage is validated with you before moving to the next.",
    },
    it: {
      question: "Quali sono le grandi tappe di un progetto, dalla progettazione alla consegna?",
      answer:
        "Il nostro accompagnamento si svolge in fasi chiaramente definite: un primo incontro e uno studio di fattibilità per comprendere le vostre esigenze e i vincoli del luogo, una fase di progettazione (schizzo, poi progetto preliminare) in cui prendono forma piante e volumi, la scelta dei materiali e delle atmosfere, poi la direzione lavori fino alla consegna. Ogni fase viene validata con voi prima di passare alla successiva.",
    },
  },
  "honoraires-budget": {
    en: {
      question: "How are the agency's fees calculated?",
      answer:
        "Our fees are always set on a bespoke basis, depending on the nature and scale of the project. For a full site-supervision commission, they are generally calculated as a percentage of the works budget; for a design-only commission, we propose a flat fee based on the type and size of the property. This amount is always communicated clearly before any commitment, following the consultation visit.",
    },
    it: {
      question: "Come vengono calcolati gli onorari dell'agenzia?",
      answer:
        "I nostri onorari sono sempre stabiliti su misura, in funzione della natura e dell'ampiezza del progetto. Per un incarico di direzione lavori completo, sono generalmente calcolati in percentuale sull'importo dei lavori; per un incarico di sola progettazione, proponiamo un forfait determinato in base alla tipologia e alla superficie dell'immobile. Questo importo vi viene sempre comunicato chiaramente prima di qualsiasi impegno, al termine della visita conoscitiva.",
    },
  },
  "suivi-chantier": {
    en: {
      question: "Does the agency handle site supervision and coordination of the works?",
      answer:
        "Yes. Beyond design, we provide rigorous site supervision with the firms and craftspeople mobilised for your project — a network of local professionals already tried and tested, chosen with the same rigour for every commission. Our regular presence on site helps ensure that deadlines and budget are respected, and that the build stays faithful to the design.",
    },
    it: {
      question: "L'agenzia si occupa della direzione lavori e del coordinamento del cantiere?",
      answer:
        "Sì. Oltre alla progettazione, garantiamo un rigoroso monitoraggio del cantiere insieme alle imprese e agli artigiani mobilitati per il vostro progetto — una rete di professionisti locali già collaudati, scelti con la stessa esigenza per ogni incarico. La nostra presenza regolare in cantiere permette di vigilare sul rispetto dei tempi, del budget e sulla fedeltà del cantiere al progetto immaginato.",
    },
  },
  "zone-intervention": {
    en: {
      question: "Which regions or cities does the agency work in?",
      answer:
        "Our studio is based between Paris, Bordeaux and Rome, and takes on residential and commercial projects across these three areas as well as elsewhere in France and internationally, depending on the project. Feel free to contact us to discuss the feasibility of remote support for your location.",
    },
    it: {
      question: "In quali regioni o città interviene l'agenzia?",
      answer:
        "Il nostro studio ha sede tra Parigi, Bordeaux e Roma, e interviene su progetti residenziali e commerciali in questi tre territori così come altrove, in Francia e a livello internazionale, a seconda del progetto. Non esitate a contattarci per discutere della fattibilità di un accompagnamento a distanza dal vostro luogo.",
    },
  },
  "difference-architecte-architecte-interieur": {
    en: {
      question: "What's the difference between an architect and an interior architect?",
      answer:
        "An architect mainly works on a building's exterior envelope and is the only professional legally authorised to file a building permit application beyond certain size thresholds. An interior architect, like our studio, focuses on layout, interior volumes, materials and how spaces are used — with a solid understanding of technical constraints (structure, utilities, regulations). For projects requiring a building permit, we work hand in hand with partner architects, so you have a single point of contact for the whole project.",
    },
    it: {
      question: "Qual è la differenza tra un architetto e un architetto d'interni?",
      answer:
        "L'architetto interviene principalmente sull'involucro esterno dell'edificio ed è l'unico abilitato a depositare una richiesta di permesso di costruire oltre determinate soglie di superficie. L'architetto d'interni, come il nostro studio, si concentra sull'organizzazione degli spazi, sui volumi interni, sui materiali e sugli usi — con una solida conoscenza dei vincoli tecnici (struttura, impianti, normative). Per i progetti che richiedono un permesso di costruire, collaboriamo con architetti partner, in modo che abbiate un unico interlocutore per l'intero progetto.",
    },
  },
  "duree-projet": {
    en: {
      question: "How long does a renovation or design project take?",
      answer:
        "It depends on the scale of the project. For an apartment renovation, expect roughly 2 to 4 months of design, followed by 3 to 6 months on site depending on the surface area and the scope of works. For a landscaping project or a new build, timelines vary and are set out from the feasibility study onward. We always draw up a projected schedule with you before the site work begins, so you know what to expect at every stage.",
    },
    it: {
      question: "Quanto dura un progetto di ristrutturazione o di arredamento?",
      answer:
        "Dipende dall'ampiezza del progetto. Per la ristrutturazione di un appartamento, prevedete generalmente dai 2 ai 4 mesi di progettazione, poi dai 3 ai 6 mesi di cantiere a seconda della superficie e della natura dei lavori. Per un progetto paesaggistico o una nuova costruzione, i tempi variano e vengono definiti fin dallo studio di fattibilità. Stabiliamo sempre un calendario previsionale con voi prima dell'inizio del cantiere, in modo che sappiate cosa aspettarvi ad ogni fase.",
    },
  },
  "garanties-assurances": {
    en: {
      question: "Is the studio covered by professional guarantees and insurance?",
      answer:
        "Yes. As site supervisor, our studio carries professional civil liability insurance, covering the quality of our design and site-supervision work. The firms and craftspeople we bring onto your project are, for their part, covered by the ten-year structural warranty required by French law for construction and structural work — we systematically check these certificates are valid before any site work begins. You can move forward with complete peace of mind at every stage of your project.",
    },
    it: {
      question: "Lo studio è coperto da garanzie e assicurazioni professionali?",
      answer:
        "Sì. In qualità di direttore dei lavori, il nostro studio è coperto da un'assicurazione di responsabilità civile professionale, che garantisce la qualità delle nostre prestazioni di progettazione e direzione lavori. Le imprese e gli artigiani che mobilitiamo per i vostri cantieri sono, dal canto loro, coperti dalla garanzia decennale obbligatoria per i lavori di costruzione e le opere strutturali — verifichiamo sistematicamente la validità di questi attestati prima dell'avvio di qualsiasi cantiere. Potete quindi procedere con la massima serenità, in ogni fase del vostro progetto.",
    },
  },
  "petits-projets": {
    en: {
      question: "Does the studio only take on large, high-end projects?",
      answer:
        "Not necessarily. While our portfolio highlights exceptional projects, we consider every enquiry with the same care, whatever the scale of the project in mind. The initial consultation visit lets us assess together whether our support is the right fit for your needs.",
    },
    it: {
      question: "Lo studio si occupa solo di grandi progetti di alta gamma?",
      answer:
        "Non necessariamente. Se le nostre realizzazioni mettono in luce progetti d'eccezione, consideriamo ogni richiesta con la stessa attenzione, qualunque sia l'ampiezza del progetto immaginato. La visita conoscitiva iniziale ci permette di valutare insieme se il nostro accompagnamento corrisponde alle vostre esigenze.",
    },
  },
  "autorisations-urbanisme": {
    en: {
      question: "Does the studio handle permit and authorisation processes (co-ownership, planning)?",
      answer:
        "Yes. Before any site work begins, we check the necessary authorisations — co-ownership approval, a prior works declaration or a building permit depending on the project's scale — and support you in putting the files together. Often seen as tedious, this step is an integral part of our site-supervision role: you don't have to manage it alone.",
    },
    it: {
      question: "Lo studio si occupa delle pratiche autorizzative (condominio, urbanistica)?",
      answer:
        "Sì. Prima dell'avvio di qualsiasi cantiere, verifichiamo le autorizzazioni necessarie — accordo condominiale, comunicazione di inizio lavori o permesso di costruire a seconda dell'ampiezza del progetto — e vi accompagniamo nella costituzione dei dossier. Questa fase, spesso percepita come noiosa, fa parte integrante della nostra missione di direzione lavori: non dovete gestirla da soli.",
    },
  },
};

export function localizeFaqItem(item: FaqItem, lang: Lang): FaqItem {
  if (lang === "fr") return item;
  const overrides = FAQ_I18N[item.id]?.[lang];
  if (!overrides) return item;
  return { ...item, ...overrides };
}

export function getLocalizedFaqItems(lang: Lang): FaqItem[] {
  return FAQ_ITEMS.map((item) => localizeFaqItem(item, lang));
}
