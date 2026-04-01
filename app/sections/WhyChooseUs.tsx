"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Building2, Heart, CheckCircle2 } from "lucide-react";

function getFeatures(lang: string) {
  return lang === "fr"
    ? [
        {
          icon: Users,
          title: "Équipe médicale experte",
          points: [
            "Médecins hautement qualifiés et expérimentés",
            "Formation médicale continue",
            "Approche multidisciplinaire des soins",
          ],
        },
        {
          icon: Building2,
          title: "Installations modernes",
          points: [
            "Équipements médicaux de pointe",
            "Services diagnostiques avancés",
            "Environnement propre, sûr et confortable",
          ],
        },
        {
          icon: Heart,
          title: "Soins centrés sur le patient",
          points: [
            "Traitement personnalisé pour chaque patient",
            "Approche humaine et bienveillante",
            "Accent sur la qualité et la sécurité",
          ],
        },
      ]
    : [
        {
          icon: Users,
          title: "Expert Medical Team",
          points: [
            "Highly qualified and experienced doctors",
            "Continuous medical education and training",
            "Multidisciplinary approach to healthcare",
          ],
        },
        {
          icon: Building2,
          title: "Modern Facilities",
          points: [
            "State-of-the-art medical equipment",
            "Advanced diagnostic services",
            "Clean, safe, and comfortable environment",
          ],
        },
        {
          icon: Heart,
          title: "Patient-Centered Care",
          points: [
            "Personalized treatment for every patient",
            "Compassionate and respectful approach",
            "Strong focus on quality and safety",
          ],
        },
      ];
}

export function WhyChooseUs({ lang = "fr" }: { lang?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const features = getFeatures(lang);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F0FA] text-[#0F6CBD] text-sm font-medium mb-4">
            <span>{lang === "fr" ? "Pourquoi nous choisir" : "Why Choose Us"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            {lang === "fr" ? "Une prise en charge " : "Healthcare "}
            <span className="text-[#0F6CBD]">
              {lang === "fr" ? "de confiance" : "You Can Trust"}
            </span>
          </h2>
          <p className="text-[#475569] leading-relaxed">
            {lang === "fr"
              ? "Nous associons expertise médicale, installations modernes et approche humaine pour offrir une expérience de soins exceptionnelle."
              : "We combine medical expertise, modern facilities, and compassionate care to deliver an exceptional healthcare experience."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#E6F0FA] flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#0F6CBD]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-4">
                  {feature.title}
                </h3>
                <div className="space-y-3">
                  {feature.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#14B8A6] mt-0.5" />
                      <span className="text-[#475569] text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
