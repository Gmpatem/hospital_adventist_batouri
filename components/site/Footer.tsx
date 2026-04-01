"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross, MapPin, Phone, Mail } from "lucide-react";
import { translations, type SupportedLang } from "@/lib/i18n/translations";

export function Footer() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLang: SupportedLang = segments[0] === "en" ? "en" : "fr";
  const t = translations[currentLang];

  const makeHref = (path: string) => {
    if (path === "/") return "/" + currentLang;
    return "/" + currentLang + path;
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F6CBD] flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg">{t.brand.name}</p>
                <p className="text-sm text-white/70">{t.brand.subtitle}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/70">
              {currentLang === "fr"
                ? "Des soins de qualité, humains et accessibles pour les familles et les communautés."
                : "Quality, compassionate, and accessible healthcare for families and communities."}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {currentLang === "fr" ? "Navigation" : "Navigation"}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href={makeHref("/")} className="text-white/70 hover:text-white">{t.nav.home}</Link></li>
              <li><Link href={makeHref("/about")} className="text-white/70 hover:text-white">{t.nav.about}</Link></li>
              <li><Link href={makeHref("/services")} className="text-white/70 hover:text-white">{t.nav.services}</Link></li>
              <li><Link href={makeHref("/doctors")} className="text-white/70 hover:text-white">{t.nav.doctors}</Link></li>
              <li><Link href={makeHref("/contact")} className="text-white/70 hover:text-white">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {currentLang === "fr" ? "Services" : "Services"}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>{currentLang === "fr" ? "Médecine générale" : "General Medicine"}</li>
              <li>{currentLang === "fr" ? "Maternité" : "Maternity Care"}</li>
              <li>{currentLang === "fr" ? "Laboratoire" : "Laboratory"}</li>
              <li>{currentLang === "fr" ? "Urgences" : "Emergency Care"}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {currentLang === "fr" ? "Contact" : "Contact"}
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-[#14B8A6]" />
                <span>123 Healthcare Avenue, Yaoundé, Cameroon</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-[#14B8A6]" />
                <span>+237 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-[#14B8A6]" />
                <span>info@medicare-hospital.cm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} {t.brand.name}.{" "}
            {currentLang === "fr"
              ? "Tous droits réservés."
              : "All rights reserved."}
          </p>
          <p>
            {currentLang === "fr"
              ? "Conçu pour des soins modernes"
              : "Built for modern care"}
          </p>
        </div>
      </div>
    </footer>
  );
}
