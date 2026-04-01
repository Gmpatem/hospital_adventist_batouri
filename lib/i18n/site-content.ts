import type { SupportedLang } from "./translations";

export const siteContent = {
  fr: {
    home: {
      heroTitle: "Des soins de santé de confiance pour votre famille",
      heroSubtitle:
        "Des soins médicaux professionnels, humains et accessibles, délivrés avec excellence.",
      aboutTitle: "À propos de nous",
      aboutText:
        "MediCare Hospital s'engage à fournir des soins de qualité grâce à des professionnels qualifiés, des services centrés sur le patient et un environnement sûr.",
      servicesTitle: "Nos services",
      doctorsTitle: "Nos médecins",
      contactTitle: "Nous contacter",
      whyTitle: "Pourquoi nous choisir",
    },
    about: {
      title: "À propos de notre hôpital",
      subtitle:
        "Nous fournissons des soins de qualité avec compassion, professionnalisme et engagement envers la communauté.",
    },
    services: {
      title: "Nos services médicaux",
      subtitle:
        "Découvrez nos services conçus pour répondre aux besoins des patients et des familles.",
    },
    doctors: {
      title: "Notre équipe médicale",
      subtitle:
        "Rencontrez des professionnels expérimentés engagés dans des soins sûrs et humains.",
    },
    contact: {
      title: "Contactez-nous",
      subtitle:
        "Nous sommes là pour répondre à vos questions et vous aider à obtenir les soins dont vous avez besoin.",
    },
    appointment: {
      title: "Prendre rendez-vous",
      subtitle:
        "Remplissez le formulaire pour demander un rendez-vous avec notre équipe.",
    },
  },
  en: {
    home: {
      heroTitle: "Trusted Healthcare for Your Family",
      heroSubtitle:
        "Professional, compassionate, and accessible medical care delivered with excellence.",
      aboutTitle: "About Us",
      aboutText:
        "MediCare Hospital is committed to delivering quality healthcare through skilled professionals, patient-centered service, and a safe care environment.",
      servicesTitle: "Our Services",
      doctorsTitle: "Our Doctors",
      contactTitle: "Contact Us",
      whyTitle: "Why Choose Us",
    },
    about: {
      title: "About Our Hospital",
      subtitle:
        "We provide quality care with compassion, professionalism, and commitment to the community.",
    },
    services: {
      title: "Our Medical Services",
      subtitle:
        "Explore our services designed to meet the needs of patients and families.",
    },
    doctors: {
      title: "Our Medical Team",
      subtitle:
        "Meet experienced professionals committed to safe and compassionate care.",
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "We are here to answer your questions and help you access the care you need.",
    },
    appointment: {
      title: "Book an Appointment",
      subtitle:
        "Fill in the form to request an appointment with our team.",
    },
  },
} as const;

export function getSiteContent(lang: string) {
  const safeLang: SupportedLang = lang === "en" ? "en" : "fr";
  return siteContent[safeLang];
}
