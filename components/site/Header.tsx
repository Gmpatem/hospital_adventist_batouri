"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, Cross } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { translations, type SupportedLang } from "@/lib/i18n/translations";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { currentLang, remainderPath, t } = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const first = segments[0];
    const lang: SupportedLang = first === "en" ? "en" : "fr";
    const rest = "/" + segments.slice(1).join("/");
    const normalizedRest = rest === "/" ? "/" : rest;
    return {
      currentLang: lang,
      remainderPath: normalizedRest,
      t: translations[lang],
    };
  }, [pathname]);

  const makeHref = (lang: SupportedLang, path: string) => {
    if (path === "/") return "/" + lang;
    return "/" + lang + path;
  };

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/doctors", label: t.nav.doctors },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    const localized = makeHref(currentLang, href);
    if (href === "/") return pathname === localized;
    return pathname.startsWith(localized);
  };

  const switchToFr = makeHref("fr", remainderPath);
  const switchToEn = makeHref("en", remainderPath);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href={makeHref(currentLang, "/")} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#0F6CBD] flex items-center justify-center group-hover:bg-[#0C5A9C] transition-colors">
              <Cross className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#0F172A] leading-tight">
                {t.brand.name}
              </span>
              <span className="text-xs text-[#475569] leading-tight">
                {t.brand.subtitle}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={makeHref(currentLang, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive(link.href)
                    ? "text-[#0F6CBD] bg-[#E6F0FA]"
                    : "text-[#475569] hover:text-[#0F6CBD] hover:bg-[#F1F5F9]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0F6CBD]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center rounded-lg border border-[#E2E8F0] p-1">
              <Link
                href={switchToFr}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  currentLang === "fr"
                    ? "bg-[#0F6CBD] text-white"
                    : "text-[#475569] hover:bg-[#F1F5F9]"
                }`}
              >
                FR
              </Link>
              <Link
                href={switchToEn}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  currentLang === "en"
                    ? "bg-[#0F6CBD] text-white"
                    : "text-[#475569] hover:bg-[#F1F5F9]"
                }`}
              >
                EN
              </Link>
            </div>

            <a
              href="tel:+237123456789"
              className="flex items-center gap-2 text-sm font-medium text-[#475569] hover:text-[#0F6CBD] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+237 123 456 789</span>
            </a>

            <Link
              href={makeHref(currentLang, "/appointment")}
              className={cn(
                buttonVariants(),
                "bg-[#0F6CBD] hover:bg-[#0C5A9C] text-white px-5 py-2 rounded-lg font-medium transition-all hover:scale-[1.02]"
              )}
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t.cta.book}
            </Link>
          </div>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="h-10 w-10 lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t.cta.openMenu}</span>
                </Button>
              }
            />

            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-[#E2E8F0]">
                  <Link href={makeHref(currentLang, "/")} className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-[#0F6CBD] flex items-center justify-center">
                      <Cross className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-[#0F172A]">
                      {t.brand.name}
                    </span>
                  </Link>

                  <SheetClose
                    render={
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <X className="h-5 w-5" />
                        <span className="sr-only">{t.cta.closeMenu}</span>
                      </Button>
                    }
                  />
                </div>

                <div className="p-4 border-b border-[#E2E8F0]">
                  <div className="flex items-center rounded-lg border border-[#E2E8F0] p-1">
                    <Link
                      href={switchToFr}
                      className={`flex-1 px-3 py-2 text-sm text-center rounded-md transition-colors ${
                        currentLang === "fr"
                          ? "bg-[#0F6CBD] text-white"
                          : "text-[#475569] hover:bg-[#F1F5F9]"
                      }`}
                    >
                      FR
                    </Link>
                    <Link
                      href={switchToEn}
                      className={`flex-1 px-3 py-2 text-sm text-center rounded-md transition-colors ${
                        currentLang === "en"
                          ? "bg-[#0F6CBD] text-white"
                          : "text-[#475569] hover:bg-[#F1F5F9]"
                      }`}
                    >
                      EN
                    </Link>
                  </div>
                </div>

                <nav className="flex-1 p-4">
                  <ul className="space-y-1">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <SheetClose
                          render={
                            <Link
                              href={makeHref(currentLang, link.href)}
                              className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                                isActive(link.href)
                                  ? "bg-[#E6F0FA] text-[#0F6CBD]"
                                  : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                              }`}
                            >
                              {link.label}
                            </Link>
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="p-4 border-t border-[#E2E8F0] space-y-3">
                  <a
                    href="tel:+237123456789"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-[#475569] font-medium hover:bg-[#F1F5F9] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {t.cta.call}
                  </a>

                  <SheetClose
                    render={
                      <Link
                        href={makeHref(currentLang, "/appointment")}
                        className={cn(
                          buttonVariants(),
                          "w-full bg-[#0F6CBD] hover:bg-[#0C5A9C] text-white py-3 rounded-lg font-medium justify-center"
                        )}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {t.cta.book}
                      </Link>
                    }
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
