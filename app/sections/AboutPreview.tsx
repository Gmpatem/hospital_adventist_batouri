"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function getContent(lang: string) {
  return lang === "fr"
    ? {
        eyebrow: "À propos de nous",
        title: "Des soins modernes avec une approche humaine",
        text: "MediCare Hospital s'engage à offrir des soins de santé de qualité grâce à des professionnels qualifiés, des services centrés sur le patient et un environnement sûr et accueillant.",
        features: [
          "Équipements médicaux modernes",
          "Professionnels de santé qualifiés",
          "Approche centrée sur le patient",
          "Urgences 24h/24 et 7j/7",
        ],
        cta: "En savoir plus",
      }
    : {
        eyebrow: "About Us",
        title: "Modern care with a human touch",
        text: "MediCare Hospital is committed to delivering quality healthcare through skilled professionals, patient-centered service, and a safe, welcoming care environment.",
        features: [
          "State-of-the-art medical facilities",
          "Highly skilled medical professionals",
          "Patient-centered care approach",
          "24/7 emergency services",
        ],
        cta: "Learn More",
      };
}

export function AboutPreview({ lang = "fr" }: { lang?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const t = getContent(lang);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <img
            src="/images/about-interior.jpg"
            alt="Hospital interior"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F0FA] text-[#0F6CBD] text-sm font-medium mb-4">
            <span>{t.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-5">
            {t.title}
          </h2>

          <p className="text-[#475569] leading-relaxed mb-6">
            {t.text}
          </p>

          <div className="space-y-3 mb-8">
            {t.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#14B8A6] mt-0.5" />
                <span className="text-[#0F172A]">{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href={`/${lang}/about`}
            className="inline-flex items-center gap-2 text-[#0F6CBD] font-medium hover:gap-3 transition-all"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
