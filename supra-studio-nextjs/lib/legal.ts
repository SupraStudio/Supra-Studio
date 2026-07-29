import type { Lang } from "./i18n";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  label: string;
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
};

export const LEGAL: Record<Lang, { notice: LegalDoc; privacy: LegalDoc }> = {
  fr: {
    notice: {
      label: "Informations légales",
      title: "Mentions légales",
      updated: "Dernière mise à jour : juillet 2026",
      sections: [
        {
          heading: "1. Éditeur du site",
          paragraphs: [
            "Le présent site est édité par Supra Studio, SARL au capital social de 2 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 103 245 338 (SIRET 103 245 338 00019).",
            "Siège social : 14 rue des Fonds Verts, 75012 Paris, France.",
            "Numéro de TVA intracommunautaire : FR88 103 245 338.",
            "Téléphone : 06 43 85 37 61",
            "Email : contact@suprastudio.fr",
          ],
        },
        {
          heading: "2. Directeur de la publication",
          paragraphs: [
            "Le directeur de la publication du site est Paul Cohen, gérant associé fondateur de Supra Studio.",
          ],
        },
        {
          heading: "3. Hébergement",
          paragraphs: [
            "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Le code source et les contenus du site sont déployés et distribués via l'infrastructure de Vercel.",
          ],
        },
        {
          heading: "4. Propriété intellectuelle",
          paragraphs: [
            "L'ensemble des éléments composant ce site — textes, photographies, perspectives, plans, logos, identité visuelle, mise en page — est la propriété exclusive de Supra Studio ou de ses partenaires, et est protégé par le Code de la propriété intellectuelle.",
            "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Supra Studio.",
          ],
        },
        {
          heading: "5. Crédits",
          paragraphs: [
            "Conception et développement du site : Supra Studio.",
            "Visuels, perspectives et plans des projets présentés : Supra Studio, sauf mention contraire.",
          ],
        },
        {
          heading: "6. Liens hypertextes",
          paragraphs: [
            "Le site peut contenir des liens vers des sites tiers (Calendly, réseaux sociaux, etc.). Supra Studio n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leur politique de confidentialité.",
          ],
        },
        {
          heading: "7. Données personnelles",
          paragraphs: [
            "Le traitement des données personnelles collectées via ce site est détaillé dans notre Politique de confidentialité, accessible depuis le pied de page du site.",
          ],
        },
        {
          heading: "8. Droit applicable",
          paragraphs: [
            "Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
          ],
        },
      ],
    },
    privacy: {
      label: "Vie privée",
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : juillet 2026",
      intro:
        "Supra Studio attache une grande importance à la protection des données personnelles des visiteurs et clients de ce site. Cette politique explique quelles données sont collectées, pourquoi, et comment vous pouvez exercer vos droits, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.",
      sections: [
        {
          heading: "1. Responsable du traitement",
          paragraphs: [
            "Le responsable du traitement des données collectées sur ce site est Supra Studio, dont le siège social est situé 14 rue des Fonds Verts, 75012 Paris. Pour toute question relative à vos données personnelles, vous pouvez nous contacter à contact@suprastudio.fr.",
          ],
        },
        {
          heading: "2. Données collectées",
          paragraphs: [
            "Lorsque vous utilisez le formulaire de contact du site, nous collectons les données suivantes : nom, adresse email, numéro de téléphone (facultatif) et le contenu de votre message.",
            "Nous ne collectons aucune autre donnée personnelle à votre insu. Le site utilise Google Analytics pour mesurer sa fréquentation (voir la section « Cookies » ci-dessous).",
          ],
        },
        {
          heading: "3. Finalités du traitement",
          list: [
            "Répondre à vos demandes de renseignement ou de rendez-vous ;",
            "Assurer le suivi de la relation commerciale et précontractuelle ;",
            "Vous recontacter dans le cadre de l'étude ou du suivi de votre projet.",
          ],
        },
        {
          heading: "4. Base légale",
          paragraphs: [
            "Le traitement de vos données repose sur votre consentement, exprimé au moment de l'envoi du formulaire de contact, ainsi que sur l'intérêt légitime de Supra Studio à répondre aux demandes qui lui sont adressées.",
          ],
        },
        {
          heading: "5. Destinataires des données",
          paragraphs: [
            "Les données transmises via le formulaire de contact sont acheminées par notre prestataire de gestion de formulaires (Formspree) et ne sont accessibles qu'aux membres de l'équipe Supra Studio habilités à traiter votre demande. Elles ne sont ni vendues, ni cédées, ni louées à des tiers à des fins commerciales.",
            "La prise de rendez-vous via Calendly implique la transmission de certaines données (nom, email, créneau choisi) directement à ce prestataire, dont l'utilisation est soumise à sa propre politique de confidentialité.",
          ],
        },
        {
          heading: "6. Durée de conservation",
          paragraphs: [
            "Vos données sont conservées pendant 3 ans à compter de notre dernier contact, sauf obligation légale de conservation plus longue ou demande de suppression de votre part.",
          ],
        },
        {
          heading: "7. Cookies",
          paragraphs: [
            "Ce site utilise des cookies techniques strictement nécessaires à son fonctionnement (par exemple pour mémoriser votre choix de langue).",
            "Il utilise également Google Analytics afin de mesurer la fréquentation du site (nombre de visites, pages consultées, provenance). Les adresses IP sont anonymisées avant traitement. Ces données sont traitées par Google LLC, qui peut les transférer hors de l'Union européenne dans le cadre des clauses contractuelles types de la Commission européenne. Vous pouvez vous opposer à ce suivi via le module de désactivation proposé par Google : https://tools.google.com/dlpage/gaoptout.",
            "Aucun cookie publicitaire n'est déposé sur ce site.",
            "Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser le dépôt du cookie Google Analytics. Votre choix est mémorisé sur votre appareil ; vous pouvez le modifier à tout moment en effaçant les données de navigation de ce site dans votre navigateur.",
          ],
        },
        {
          heading: "8. Vos droits",
          paragraphs: [
            "Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles : droit d'accès, de rectification, d'effacement, d'opposition, de limitation du traitement et de portabilité.",
            "Vous pouvez exercer ces droits à tout moment en nous écrivant à contact@suprastudio.fr ou par courrier à l'adresse du siège social. Nous nous engageons à répondre dans un délai d'un mois.",
            "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) — www.cnil.fr.",
          ],
        },
        {
          heading: "9. Sécurité",
          paragraphs: [
            "Supra Studio met en œuvre les mesures techniques et organisationnelles raisonnables pour protéger vos données contre toute perte, tout accès non autorisé, toute divulgation ou altération.",
          ],
        },
        {
          heading: "10. Modification de la politique",
          paragraphs: [
            "Cette politique de confidentialité peut être mise à jour à tout moment, notamment pour se conformer à toute évolution réglementaire, technique ou jurisprudentielle. Nous vous invitons à la consulter régulièrement.",
          ],
        },
      ],
    },
  },
  en: {
    notice: {
      label: "Legal information",
      title: "Legal Notice",
      updated: "Last updated: July 2026",
      sections: [
        {
          heading: "1. Website publisher",
          paragraphs: [
            "This website is published by Supra Studio, a French limited liability company (SARL) with share capital of €2,000, registered with the Paris Trade and Companies Register (RCS Paris) under number 103 245 338 (SIRET 103 245 338 00019).",
            "Registered office: 14 rue des Fonds Verts, 75012 Paris, France.",
            "Intra-Community VAT number: FR88 103245338.",
            "Phone: +33 6 43 85 37 61",
            "Email: contact@suprastudio.fr",
          ],
        },
        {
          heading: "2. Publication director",
          paragraphs: [
            "The publication director of the website is Paul Cohen, founding managing partner (gérant associé fondateur) of Supra Studio.",
          ],
        },
        {
          heading: "3. Hosting",
          paragraphs: [
            "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States. The site's source code and content are deployed and distributed through Vercel's infrastructure.",
          ],
        },
        {
          heading: "4. Intellectual property",
          paragraphs: [
            "All elements making up this website — text, photographs, renderings, plans, logos, visual identity, layout — are the exclusive property of Supra Studio or its partners, and are protected under French intellectual property law.",
            "Any reproduction, representation, modification, publication or adaptation of all or part of these elements, by any means or process whatsoever, is prohibited without the prior written authorisation of Supra Studio.",
          ],
        },
        {
          heading: "5. Credits",
          paragraphs: [
            "Website design and development: Supra Studio.",
            "Visuals, renderings and plans of the projects shown: Supra Studio, unless otherwise stated.",
          ],
        },
        {
          heading: "6. Hyperlinks",
          paragraphs: [
            "This website may contain links to third-party sites (Calendly, social media, etc.). Supra Studio has no control over these sites and accepts no responsibility for their content or privacy practices.",
          ],
        },
        {
          heading: "7. Personal data",
          paragraphs: [
            "The processing of personal data collected through this website is detailed in our Privacy Policy, accessible from the website's footer.",
          ],
        },
        {
          heading: "8. Governing law",
          paragraphs: [
            "This legal notice is governed by French law. In the event of a dispute, and failing an amicable resolution, the French courts shall have exclusive jurisdiction.",
          ],
        },
      ],
    },
    privacy: {
      label: "Privacy",
      title: "Privacy Policy",
      updated: "Last updated: July 2026",
      intro:
        "Supra Studio places great importance on protecting the personal data of this website's visitors and clients. This policy explains what data is collected, why, and how you can exercise your rights, in accordance with the General Data Protection Regulation (GDPR).",
      sections: [
        {
          heading: "1. Data controller",
          paragraphs: [
            "The controller of the data collected on this website is Supra Studio, registered office at 14 rue des Fonds Verts, 75012 Paris, France. For any question regarding your personal data, you can contact us at contact@suprastudio.fr.",
          ],
        },
        {
          heading: "2. Data collected",
          paragraphs: [
            "When you use the website's contact form, we collect the following data: name, email address, phone number (optional) and the content of your message.",
            "We do not collect any other personal data without your knowledge. The website uses Google Analytics to measure audience traffic (see the “Cookies” section below).",
          ],
        },
        {
          heading: "3. Purpose of processing",
          list: [
            "Responding to your enquiries or appointment requests;",
            "Managing our commercial and pre-contractual relationship;",
            "Contacting you as part of the study or follow-up of your project.",
          ],
        },
        {
          heading: "4. Legal basis",
          paragraphs: [
            "The processing of your data is based on your consent, given when submitting the contact form, as well as on Supra Studio's legitimate interest in responding to enquiries addressed to it.",
          ],
        },
        {
          heading: "5. Data recipients",
          paragraphs: [
            "Data submitted via the contact form is routed through our form-management provider (Formspree) and is only accessible to Supra Studio team members authorised to handle your request. It is never sold, transferred or rented to third parties for commercial purposes.",
            "Booking an appointment via Calendly involves transmitting certain data (name, email, chosen time slot) directly to that provider, whose use is governed by its own privacy policy.",
          ],
        },
        {
          heading: "6. Retention period",
          paragraphs: [
            "Your data is retained for 3 years from our last contact, unless a longer legal retention period applies or you request its deletion.",
          ],
        },
        {
          heading: "7. Cookies",
          paragraphs: [
            "This website uses technical cookies that are strictly necessary for it to function (for example, to remember your language preference).",
            "It also uses Google Analytics to measure website traffic (number of visits, pages viewed, referral source). IP addresses are anonymised before processing. This data is processed by Google LLC, which may transfer it outside the European Union under the European Commission's standard contractual clauses. You can opt out of this tracking using Google's opt-out tool: https://tools.google.com/dlpage/gaoptout.",
            "No advertising cookies are set on this website.",
            "On your first visit, a banner lets you accept or decline the Google Analytics cookie. Your choice is stored on your device; you can change it at any time by clearing this website's browsing data in your browser.",
          ],
        },
        {
          heading: "8. Your rights",
          paragraphs: [
            "In accordance with the GDPR, you have the following rights regarding your personal data: the right of access, rectification, erasure, objection, restriction of processing and data portability.",
            "You may exercise these rights at any time by writing to us at contact@suprastudio.fr or by post to our registered office. We undertake to respond within one month.",
            "If you believe your rights are not being respected, you may lodge a complaint with the French Data Protection Authority (CNIL) — www.cnil.fr — or with the data protection authority in your own country.",
          ],
        },
        {
          heading: "9. Security",
          paragraphs: [
            "Supra Studio implements reasonable technical and organisational measures to protect your data against loss, unauthorised access, disclosure or alteration.",
          ],
        },
        {
          heading: "10. Changes to this policy",
          paragraphs: [
            "This privacy policy may be updated at any time, in particular to comply with regulatory, technical or case-law developments. We encourage you to review it periodically.",
          ],
        },
      ],
    },
  },
  it: {
    notice: {
      label: "Informazioni legali",
      title: "Note legali",
      updated: "Ultimo aggiornamento: luglio 2026",
      sections: [
        {
          heading: "1. Editore del sito",
          paragraphs: [
            "Il presente sito è pubblicato da Supra Studio, società a responsabilità limitata di diritto francese (SARL) con capitale sociale di 2.000 €, iscritta al Registro delle Imprese di Parigi (RCS Paris) con il numero 103 245 338 (SIRET 103 245 338 00019).",
            "Sede legale: 14 rue des Fonds Verts, 75012 Parigi, Francia.",
            "Partita IVA intracomunitaria: FR88 103245338.",
            "Telefono: +33 6 43 85 37 61",
            "Email: contact@suprastudio.fr",
          ],
        },
        {
          heading: "2. Direttore della pubblicazione",
          paragraphs: [
            "Il direttore della pubblicazione del sito è Paul Cohen, gerente socio fondatore di Supra Studio.",
          ],
        },
        {
          heading: "3. Hosting",
          paragraphs: [
            "Il sito è ospitato da Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, Stati Uniti. Il codice sorgente e i contenuti del sito sono distribuiti tramite l'infrastruttura di Vercel.",
          ],
        },
        {
          heading: "4. Proprietà intellettuale",
          paragraphs: [
            "Tutti gli elementi che compongono questo sito — testi, fotografie, render, piante, loghi, identità visiva, impaginazione — sono di proprietà esclusiva di Supra Studio o dei suoi partner, e sono protetti dal diritto d'autore e dalla proprietà intellettuale.",
            "Qualsiasi riproduzione, rappresentazione, modifica, pubblicazione o adattamento, totale o parziale, di questi elementi, con qualsiasi mezzo o procedimento, è vietata senza la previa autorizzazione scritta di Supra Studio.",
          ],
        },
        {
          heading: "5. Crediti",
          paragraphs: [
            "Progettazione e sviluppo del sito: Supra Studio.",
            "Immagini, render e piante dei progetti presentati: Supra Studio, salvo diversa indicazione.",
          ],
        },
        {
          heading: "6. Collegamenti ipertestuali",
          paragraphs: [
            "Il sito può contenere link verso siti terzi (Calendly, social network, ecc.). Supra Studio non esercita alcun controllo su tali siti e declina ogni responsabilità in merito ai loro contenuti o alle loro pratiche sulla privacy.",
          ],
        },
        {
          heading: "7. Dati personali",
          paragraphs: [
            "Il trattamento dei dati personali raccolti tramite questo sito è descritto nella nostra Informativa sulla privacy, accessibile dal piè di pagina del sito.",
          ],
        },
        {
          heading: "8. Legge applicabile",
          paragraphs: [
            "Le presenti note legali sono soggette al diritto francese. In caso di controversia, e in mancanza di una risoluzione amichevole, saranno competenti esclusivamente i tribunali francesi.",
          ],
        },
      ],
    },
    privacy: {
      label: "Privacy",
      title: "Informativa sulla privacy",
      updated: "Ultimo aggiornamento: luglio 2026",
      intro:
        "Supra Studio attribuisce grande importanza alla protezione dei dati personali dei visitatori e dei clienti di questo sito. La presente informativa spiega quali dati vengono raccolti, per quali finalità, e come potete esercitare i vostri diritti, in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR).",
      sections: [
        {
          heading: "1. Titolare del trattamento",
          paragraphs: [
            "Il titolare del trattamento dei dati raccolti su questo sito è Supra Studio, con sede legale in 14 rue des Fonds Verts, 75012 Parigi, Francia. Per qualsiasi domanda relativa ai vostri dati personali, potete contattarci all'indirizzo contact@suprastudio.fr.",
          ],
        },
        {
          heading: "2. Dati raccolti",
          paragraphs: [
            "Quando utilizzate il modulo di contatto del sito, raccogliamo i seguenti dati: nome, indirizzo email, numero di telefono (facoltativo) e il contenuto del vostro messaggio.",
            "Non raccogliamo alcun altro dato personale a vostra insaputa. Il sito utilizza Google Analytics per misurare l'affluenza (vedere la sezione «Cookie» qui sotto).",
          ],
        },
        {
          heading: "3. Finalità del trattamento",
          list: [
            "Rispondere alle vostre richieste di informazioni o di appuntamento;",
            "Gestire il rapporto commerciale e precontrattuale;",
            "Ricontattarvi nell'ambito dello studio o del follow-up del vostro progetto.",
          ],
        },
        {
          heading: "4. Base giuridica",
          paragraphs: [
            "Il trattamento dei vostri dati si basa sul vostro consenso, espresso al momento dell'invio del modulo di contatto, nonché sul legittimo interesse di Supra Studio a rispondere alle richieste che gli vengono rivolte.",
          ],
        },
        {
          heading: "5. Destinatari dei dati",
          paragraphs: [
            "I dati trasmessi tramite il modulo di contatto sono veicolati dal nostro fornitore di gestione dei moduli (Formspree) e sono accessibili solo ai membri del team Supra Studio autorizzati a gestire la vostra richiesta. Non vengono mai venduti, ceduti o affittati a terzi per finalità commerciali.",
            "La prenotazione di un appuntamento tramite Calendly comporta la trasmissione di alcuni dati (nome, email, fascia oraria scelta) direttamente a tale fornitore, il cui utilizzo è soggetto alla sua propria informativa sulla privacy.",
          ],
        },
        {
          heading: "6. Periodo di conservazione",
          paragraphs: [
            "I vostri dati sono conservati per 3 anni a partire dall'ultimo contatto, salvo un obbligo legale di conservazione più lungo o una vostra richiesta di cancellazione.",
          ],
        },
        {
          heading: "7. Cookie",
          paragraphs: [
            "Questo sito utilizza cookie tecnici strettamente necessari al suo funzionamento (ad esempio per memorizzare la lingua scelta).",
            "Utilizza inoltre Google Analytics per misurare l'affluenza al sito (numero di visite, pagine consultate, provenienza). Gli indirizzi IP vengono anonimizzati prima del trattamento. Questi dati sono trattati da Google LLC, che può trasferirli al di fuori dell'Unione Europea nell'ambito delle clausole contrattuali tipo della Commissione Europea. Potete opporvi a questo tracciamento tramite lo strumento di disattivazione proposto da Google: https://tools.google.com/dlpage/gaoptout.",
            "Nessun cookie pubblicitario è installato su questo sito.",
            "Alla vostra prima visita, un banner vi permette di accettare o rifiutare il cookie di Google Analytics. La vostra scelta viene memorizzata sul vostro dispositivo; potete modificarla in qualsiasi momento cancellando i dati di navigazione di questo sito dal vostro browser.",
          ],
        },
        {
          heading: "8. I vostri diritti",
          paragraphs: [
            "In conformità al GDPR, avete i seguenti diritti sui vostri dati personali: diritto di accesso, rettifica, cancellazione, opposizione, limitazione del trattamento e portabilità.",
            "Potete esercitare questi diritti in qualsiasi momento scrivendoci all'indirizzo contact@suprastudio.fr o per posta alla sede legale. Ci impegniamo a rispondere entro un mese.",
            "Se ritenete che i vostri diritti non siano rispettati, potete presentare un reclamo all'autorità francese per la protezione dei dati (CNIL) — www.cnil.fr — oppure all'autorità di controllo del vostro paese.",
          ],
        },
        {
          heading: "9. Sicurezza",
          paragraphs: [
            "Supra Studio adotta misure tecniche e organizzative ragionevoli per proteggere i vostri dati da perdita, accesso non autorizzato, divulgazione o alterazione.",
          ],
        },
        {
          heading: "10. Modifiche all'informativa",
          paragraphs: [
            "La presente informativa sulla privacy può essere aggiornata in qualsiasi momento, in particolare per conformarsi a evoluzioni normative, tecniche o giurisprudenziali. Vi invitiamo a consultarla periodicamente.",
          ],
        },
      ],
    },
  },
};
