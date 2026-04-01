export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      doctors: "Médecins",
      contact: "Contact",
    },
    cta: {
      book: "Prendre rendez-vous",
      call: "Appelez-nous",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    brand: {
      name: "MediCare",
      subtitle: "Hôpital",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      doctors: "Doctors",
      contact: "Contact",
    },
    cta: {
      book: "Book Appointment",
      call: "Call Us",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    brand: {
      name: "MediCare",
      subtitle: "Hospital",
    },
  },
} as const;

export type SupportedLang = keyof typeof translations;
