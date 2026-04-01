"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Heart,
  Baby,
  Bone,
  Microscope,
  Ambulance,
  ArrowRight
} from "lucide-react";

function getServices(lang: string) {
  return lang === "fr"
    ? [
        {
          icon: Stethoscope,
          title: "Médecine générale",
          description: "Bilans de santé complets et soins primaires pour tous les âges, avec un accent sur la prévention et le bien-être.",
          color: "bg-[#E6F0FA]",
          iconColor: "text-[#0F6CBD]",
        },
        {
          icon: Heart,
          title: "Cardiologie",
          description: "Prise en charge cardiaque avancée avec des équipements modernes de diagnostic et de traitement.",
          color: "bg-[#FEE2E2]",
          iconColor: "text-[#EF4444]",
        },
        {
          icon: Baby,
          title: "Maternité",
          description: "Suivi prénatal, accouchement et soins postnataux dans un environnement sûr pour la mère et le bébé.",
          color: "bg-[#CCFBF1]",
          iconColor: "text-[#14B8A6]",
        },
        {
          icon: Bone,
          title: "Orthopédie",
          description: "Traitement expert des os, articulations et muscles avec des techniques modernes.",
          color: "bg-[#FEF3C7]",
          iconColor: "text-[#F59E0B]",
        },
        {
          icon: Microscope,
          title: "Laboratoire",
          description: "Laboratoire diagnostique moderne offrant des résultats rapides et précis.",
          color: "bg-[#E0E7FF]",
          iconColor: "text-[#6366F1]",
        },
        {
          icon: Ambulance,
          title: "Urgences",
          description: "Service d'urgence 24h/24 avec prise en charge rapide des situations critiques.",
          color: "bg-[#FCE7F3]",
          iconColor: "text-[#EC4899]",
        },
      ]
    : [
        {
          icon: Stethoscope,
          title: "General Medicine",
          description: "Comprehensive health checkups and primary care services for all ages, focusing on prevention and wellness.",
          color: "bg-[#E6F0FA]",
          iconColor: "text-[#0F6CBD]",
        },
        {
          icon: Heart,
          title: "Cardiology",
          description: "Advanced cardiac care with modern diagnostic and treatment facilities for heart-related conditions.",
          color: "bg-[#FEE2E2]",
          iconColor: "text-[#EF4444]",
        },
        {
          icon: Baby,
          title: "Maternity Care",
          description: "Complete prenatal, delivery, and postnatal care for mothers and babies in a safe environment.",
          color: "bg-[#CCFBF1]",
          iconColor: "text-[#14B8A6]",
        },
        {
          icon: Bone,
          title: "Orthopedics",
          description: "Expert treatment for bone, joint, and muscle conditions using the latest surgical techniques.",
          color: "bg-[#FEF3C7]",
          iconColor: "text-[#F59E0B]",
        },
        {
          icon: Microscope,
          title: "Laboratory",
          description: "State-of-the-art diagnostic laboratory with quick and accurate results for all medical tests.",
          color: "bg-[#E0E7FF]",
          iconColor: "text-[#6366F1]",
        },
        {
          icon: Ambulance,
          title: "Emergency Care",
          description: "24/7 emergency services with rapid response and expert care for critical medical situations.",
          color: "bg-[#FCE7F3]",
          iconColor: "text-[#EC4899]",
        },
      ];
}

function ServiceCard({
  service,
  index,
  isVisible,
  lang,
}: {
  service: ReturnType<typeof getServices>[0];
  index: number;
  isVisible: boolean;
  lang: string;
}) {
  const Icon = service.icon;

  return (
    <div
      className={`group bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#0F6CBD]/30 hover:shadow-xl transition-all duration-300 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-7 h-7 ${service.iconColor}`} />
      </div>

      <h3 className="text-xl font-semibold text-[#0F172A] mb-3 group-hover:text-[#0F6CBD] transition-colors">
        {service.title}
      </h3>
      <p className="text-[#475569] text-sm leading-relaxed mb-4">
        {service.description}
      </p>

      <Link
        href={`/${lang}/services`}
        className="inline-flex items-center gap-2 text-[#0F6CBD] font-medium text-sm group/link"
      >
        {lang === "fr" ? "En savoir plus" : "Learn More"}
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export function ServicesSection({ lang = "fr" }: { lang?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const services = getServices(lang);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
            <span>{lang === "fr" ? "Nos services" : "Our Services"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            {lang === "fr" ? "Des services de santé " : "Comprehensive "}
            <span className="text-[#0F6CBD]">
              {lang === "fr" ? "complets" : "Healthcare"}
            </span>
            {lang === "fr" ? "" : " Services"}
          </h2>
          <p className="text-[#475569] leading-relaxed">
            {lang === "fr"
              ? "Nous proposons une large gamme de services médicaux pour répondre à tous vos besoins de santé."
              : "We offer a wide range of medical services to meet all your healthcare needs, from routine checkups to specialized treatments."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
              lang={lang}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center gap-2 text-[#0F6CBD] font-medium hover:gap-3 transition-all"
          >
            {lang === "fr" ? "Voir tous les services" : "View All Services"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
