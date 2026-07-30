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
