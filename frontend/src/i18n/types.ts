export type Locale = "de" | "en";

interface CurriculumArea {
  title: string;
  credits: string;
  detail: string;
}

interface ProgramSummary {
  title: string;
  href: string;
  text: string;
  cta: string;
}

interface Belief {
  title: string;
  text: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface BankDetails {
  holder: string;
  bank?: string;
  iban: string;
  bic: string;
  reference?: string;
}

export interface Dictionary {
  common: {
    bankHolderLabel: string;
    bankNameLabel: string;
    ibanLabel: string;
    bicLabel: string;
    referenceLabel: string;
  };
  nav: {
    home: string;
    studieren: string;
    masterprogramm: string;
    zertifikatsprogramm: string;
    anmelden: string;
    unterstuetzen: string;
    kontakt: string;
    lmsLogin: string;
    faq: string;
    menuToggle: string;
  };
  footer: {
    impressum: string;
    datenschutz: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    quote: string;
    quoteRef: string;
    stats: { foundedLabel: string; programsLabel: string; focusLabel: string };
    beliefs: Belief[];
    programsHeading: string;
    programs: ProgramSummary[];
    teamHeading: string;
    teamIntro: string;
    teamPhotoLabel: string;
    teamNamePlaceholder: string;
    teamRolePlaceholder: string;
    supportHeading: string;
    supportText: string;
    supportCta: string;
  };
  studieren: {
    title: string;
    intro: string;
    programs: ProgramSummary[];
  };
  masterprogramm: {
    title: string;
    intro: string;
    keyFeaturesHeading: string;
    keyFeatures: string;
    curriculumHeading: string;
    curriculum: CurriculumArea[];
    deadlinesHeading: string;
    deadlines: string[];
    certificateNote: string;
    contactNote: string;
  };
  zertifikatsprogramm: {
    title: string;
    intro: string;
    formatHeading: string;
    format: string;
    durationHeading: string;
    duration: string;
    curriculumHeading: string;
    requiredHeading: string;
    required: string[];
    electiveHeading: string;
    elective: string;
    mentorshipNote: string;
    deadlinesHeading: string;
    deadlines: string[];
    contactNote: string;
  };
  anmelden: {
    title: string;
    requirementsHeading: string;
    requirements: string[];
    deadlinesHeading: string;
    deadlines: string[];
    financeHeading: string;
    enrollmentFee: string;
    courseFee: string;
    bankHeading: string;
    bank: BankDetails;
    paymentOptionsHeading: string;
    paymentOptions: string[];
    contactNote: string;
  };
  unterstuetzen: {
    title: string;
    intro: string;
    bankHeading: string;
    bank: BankDetails;
    freundeskreisHeading: string;
    freundeskreisText: string;
    ways: string[];
    contactNote: string;
  };
  kontakt: {
    title: string;
    intro: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    faxLabel: string;
    fax: string;
    emailLabel: string;
    email: string;
    formHeading: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
  };
  impressum: {
    title: string;
    org: string;
    addressLabel: string;
    address: string;
    representedByLabel: string;
    representedBy: string;
    phoneLabel: string;
    phone: string;
    faxLabel: string;
    fax: string;
    emailLabel: string;
    email: string;
    registerLabel: string;
    register: string;
    responsibleLabel: string;
    responsible: string;
    taxNote: string;
  };
  datenschutz: {
    title: string;
    placeholderNote: string;
  };
  faq: {
    title: string;
    intro: string;
    items: FaqItem[];
  };
}
