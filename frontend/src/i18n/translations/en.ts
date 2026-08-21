import type { Dictionary } from "../types";

export const en: Dictionary = {
  common: {
    bankHolderLabel: "Account Holder",
    bankNameLabel: "Bank",
    ibanLabel: "IBAN",
    bicLabel: "BIC",
    referenceLabel: "Reference",
  },
  nav: {
    home: "About Us",
    studieren: "Study",
    masterprogramm: "Master's Program",
    zertifikatsprogramm: "Certificate Program",
    anmelden: "Admission & Finances",
    unterstuetzen: "Support Us",
    kontakt: "Contact",
    lmsLogin: "Student Portal",
    faq: "FAQ",
    menuToggle: "Open menu",
  },
  footer: {
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
  },
  home: {
    heroTitle: "Messianic Jewish Theological Academy",
    heroSubtitle:
      "Academic theological education in a Messianic Jewish context.",
    heroCta: "Explore our programs",
    quote: "“For out of Zion shall go forth instruction, and the word of the Lord from Jerusalem.”",
    quoteRef: "Isaiah 2:3",
    stats: {
      foundedLabel: "Founded",
      programsLabel: "Study programs",
      focusLabel: "Practice-oriented",
    },
    beliefs: [
      {
        title: "Short Portrait",
        text: "MJTA offers academic theological education in a Messianic Jewish context, combining scholarly depth with lived faith.",
      },
      {
        title: "Mission",
        text: "We equip students to understand Scripture within its Jewish context and to serve with theological clarity and spiritual maturity.",
      },
      {
        title: "Vision",
        text: "We are training the next generation of Messianic Jewish leaders for congregation, teaching, and mission.",
      },
      {
        title: "Statement of Faith",
        text: "Our education is grounded in the historic, biblical faith and the abiding election of Israel.",
      },
    ],
    programsHeading: "Study Programs",
    programs: [
      {
        title: "Master's Program",
        href: "/studieren/masterprogramm",
        text: "A Master of Arts in Jewish Studies with Dallas Theological Seminary — part-time, online, over 8–9 semesters.",
        cta: "Learn more",
      },
      {
        title: "Certificate Program",
        href: "/studieren/zertifikatsprogramm",
        text: "A foundational, high-quality theological education — 60 ECTS, part-time over roughly three years.",
        cta: "Learn more",
      },
    ],
    teamHeading: "Our Team",
    teamIntro:
      "Placeholder — photos and short profiles of faculty and leadership will go here.",
    teamPhotoLabel: "Photo",
    teamNamePlaceholder: "Name coming soon",
    teamRolePlaceholder: "Role coming soon",
    supportHeading: "Support MJTA",
    supportText:
      "Your support enables theological education for the next generation of Messianic Jewish leaders.",
    supportCta: "Support us now",
  },
  studieren: {
    title: "Study",
    intro:
      "Two paths to a theologically grounded education in a Messianic Jewish context.",
    programs: [
      {
        title: "Master's Program",
        href: "/studieren/masterprogramm",
        text: "An in-depth academic course of study for future leaders, educators, and researchers.",
        cta: "Learn more",
      },
      {
        title: "Certificate Program",
        href: "/studieren/zertifikatsprogramm",
        text: "A compact introduction to Messianic Jewish theology for congregational ministry and personal growth.",
        cta: "Learn more",
      },
    ],
  },
  masterprogramm: {
    title: "Master's Program",
    intro:
      "MJTA offers a Master of Arts in Jewish Studies together with Dallas Theological Seminary (DTS), USA — 53 US credits from DTS and 21 US credits from MJTA, roughly 120 ECTS credits in total.",
    keyFeaturesHeading: "Format",
    keyFeatures:
      "Part-time, entirely online via video conference. Completed in 8–9 semesters at 15–20 ECTS credits per semester, alongside employment.",
    curriculumHeading: "Curriculum",
    curriculum: [
      {
        title: "Biblical Languages",
        credits: "20 ECTS",
        detail: "Biblical Hebrew and Hebrew exegesis",
      },
      {
        title: "Biblical Studies",
        credits: "35 ECTS",
        detail: "Hermeneutics and comprehensive Bible coverage",
      },
      {
        title: "Theological Studies",
        credits: "30 ECTS",
        detail: "Systematic theology: Christology, soteriology, eschatology",
      },
      {
        title: "Jewish Studies",
        credits: "35 ECTS",
        detail: "Jewish history and Messianic Jewish movements",
      },
      {
        title: "Practical Ministry",
        credits: "10–15 ECTS",
        detail: "Practice-oriented ministry courses",
      },
    ],
    deadlinesHeading: "Application Deadlines",
    deadlines: [
      "Spring semester (January–May): November 1",
      "Fall semester (August–December): July 1",
    ],
    certificateNote:
      "For applicants without a bachelor's degree, MJTA also offers a certificate program.",
    contactNote: "Questions about applying? Write to office@mjta.de",
  },
  zertifikatsprogramm: {
    title: "Certificate Program",
    intro:
      "A foundational, high-quality theological education in Messianic Jewish studies — 60 ECTS credits across 12+ courses, designed for working professionals.",
    formatHeading: "Format",
    format:
      "Live online sessions (Zoom) or in-person block seminars with Zoom transmission in Berlin.",
    durationHeading: "Duration & Workload",
    duration:
      "Roughly three years at 1–3 courses per semester. Each ECTS credit represents 30 hours of work per semester, averaging about 1.3 hours per week.",
    curriculumHeading: "Curriculum",
    requiredHeading: "Required Courses (45 ECTS)",
    required: [
      "Introduction — academic writing, ministry basics, spiritual foundations",
      "Bible — Old Testament, New Testament, hermeneutics",
      "History — church history, the Messianic Jewish movement, Jewish history",
      "Language — Biblical Hebrew",
      "Theology — Messianic Jewish theology",
    ],
    electiveHeading: "Elective Courses (15 ECTS)",
    elective:
      "Jewish customs, rabbinic literature, messianic prophecy, and apologetics.",
    mentorshipNote:
      "Each student is mentored by an instructor throughout their studies.",
    deadlinesHeading: "Application Deadlines",
    deadlines: ["Fall semester: July 1", "Spring semester: November 1"],
    contactNote:
      "Questions about applying? Write to office@mjta.de or bewerbung@mjta.de",
  },
  anmelden: {
    title: "Admission & Finances",
    requirementsHeading: "Admission Requirements",
    requirements: [
      "An inner calling to Messianic Jewish ministry or service to Israel",
      "A recognized bachelor's degree (exceptions possible)",
      "Active membership in a Messianic Jewish or Christian community",
      "English proficiency at C1 level or higher (Common European Framework)",
    ],
    deadlinesHeading: "Application Deadlines",
    deadlines: ["Fall semester: July 1", "Spring semester: November 1"],
    financeHeading: "Finances",
    enrollmentFee: "Enrollment fee: €50.00 (one-time, due with application)",
    courseFee: "Course fee: €100.00 per ECTS credit",
    bankHeading: "Bank Details",
    bank: {
      holder: "Beit Sar Shalom Evangeliumsdienst e.V.",
      bank: "Postbank Berlin",
      iban: "DE25 1001 0010 0625 7051 01",
      bic: "PBNKDEFF",
      reference: "MJTA",
    },
    paymentOptionsHeading: "Payment Options",
    paymentOptions: [
      "Full payment by August 15 (fall) or January 15 (spring)",
      "Installment payments spread across the semester",
    ],
    contactNote: "Applications to office@mjta.de",
  },
  unterstuetzen: {
    title: "Support Us",
    intro: "MJTA is funded primarily through donations.",
    bankHeading: "Bank Details",
    bank: {
      holder: "Beit Sar Shalom Evangeliumsdienst e.V.",
      bank: "Postbank Berlin",
      iban: "DE25 1001 0010 0625 7051 01",
      bic: "PBNKDEFF",
      reference: "MJTA or Akademie",
    },
    freundeskreisHeading: "Circle of Friends",
    freundeskreisText:
      "Dedicated friends are essential to the academy — through prayer, volunteering at events, and financial support.",
    ways: [
      "Prayer for the academy's concerns",
      "Volunteer assistance at events",
      "Financial contributions",
    ],
    contactNote: "Interested in joining? Write to office@mjta.de",
  },
  kontakt: {
    title: "Contact",
    intro: "Have questions about our study programs? Get in touch.",
    addressLabel: "Address",
    address: "MJTA – Messianic Jewish Theological Academy, Postfach 450431, 12174 Berlin, Germany",
    phoneLabel: "Phone",
    phone: "+49 (0)30 30 83 81 58",
    faxLabel: "Fax",
    fax: "+49 (0)30 30 83 81 31",
    emailLabel: "Email",
    email: "office@mjta.de",
    formHeading: "Send a Message",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send Message",
    formSubmitting: "Sending…",
    formSuccess: "Thank you, your message has been sent.",
  },
  impressum: {
    title: "Legal Notice",
    org: "Beit Sar Shalom Evangeliumsdienst e. V.",
    addressLabel: "Address",
    address: "Gardeschützenweg 96A, 12203 Berlin, Germany",
    representedByLabel: "Represented by",
    representedBy: "Andrei Ignatenko",
    phoneLabel: "Phone",
    phone: "+49-(0)30 / 30 83 81-30",
    faxLabel: "Fax",
    fax: "+49-(0)30 / 30 83 81-31",
    emailLabel: "Email",
    email: "office@beitsarshalom.org",
    registerLabel: "Register Court",
    register: "Berlin-Charlottenburg, VR 16856",
    responsibleLabel: "Responsible for Content (§ 55 Abs. 2 RStV)",
    responsible: "Andrei Ignatenko",
    taxNote:
      "The association has been exempt from corporate and trade tax since August 15, 2019 for the advancement of religion, tax number 27/656/53752.",
  },
  datenschutz: {
    title: "Privacy Policy",
    placeholderNote:
      "Placeholder — the privacy policy needs to be adapted to this new website's actual data processing (hosting, forms, analytics tools) and should receive legal review before publishing.",
  },
  faq: {
    title: "Frequently Asked Questions",
    intro: "Answers to the most common questions about studying, applying, and funding.",
    items: [
      {
        question: "What study programs does MJTA offer?",
        answer:
          "Two programs: a Master of Arts in Jewish Studies (together with Dallas Theological Seminary) and a Certificate Program in Messianic Jewish Studies as a more compact entry point.",
      },
      {
        question: "What's the difference between the Master's and Certificate programs?",
        answer:
          "The Master's is an academic degree with roughly 120 ECTS credits over 8–9 semesters, aimed at future leaders, educators, and researchers. The Certificate Program is more compact (60 ECTS, about three years) and suits a foundational introduction to Messianic Jewish theology alongside a job.",
      },
      {
        question: "Is the program online or in person?",
        answer:
          "Both are part-time. The Master's runs entirely online via video conference. The Certificate Program offers live online sessions via Zoom as well as in-person block seminars with Zoom transmission in Berlin.",
      },
      {
        question: "What are the admission requirements?",
        answer:
          "An inner calling to Messianic Jewish ministry, a recognized bachelor's degree (exceptions possible), active membership in a Messianic Jewish or Christian community, and English proficiency at C1 level or higher.",
      },
      {
        question: "When are the application deadlines?",
        answer:
          "July 1 for the fall semester (August–December), and November 1 for the spring semester (January–May).",
      },
      {
        question: "What does the program cost?",
        answer:
          "A one-time enrollment fee of €50.00, plus €100.00 per ECTS credit. You can pay in full or in installments spread across the semester.",
      },
      {
        question: "How can I support MJTA if I'm not a student?",
        answer:
          "MJTA is funded primarily through donations. You can support us by bank transfer, through prayer, or by volunteering at events — see the \"Support Us\" page for details.",
      },
      {
        question: "Where do I go for my courses if I'm already enrolled?",
        answer:
          "The Student Portal link in the top right — it leads to Beit Sar Shalom's e-learning system (Canvas).",
      },
    ],
  },
};
