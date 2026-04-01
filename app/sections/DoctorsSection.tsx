"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";

function getDoctors(lang: string) {
  return [
    {
      name: "Dr. Sarah Nkono",
      specialty: lang === "fr" ? "Médecine générale" : "General Medicine",
      image: "/images/doctor-sarah.jpg",
      bio:
        lang === "fr"
          ? "Plus de 15 ans d'expérience en médecine familiale et en prévention."
          : "Over 15 years of experience in family medicine and preventive care.",
    },
    {
      name: "Dr. Michael Taku",
      specialty: lang === "fr" ? "Cardiologie" : "Cardiology",
      image: "/images/doctor-michael.jpg",
      bio:
        lang === "fr"
          ? "Spécialisé en cardiologie interventionnelle et en prévention des maladies cardiaques."
          : "Specialized in interventional cardiology and heart disease prevention.",
    },
    {
      name: "Dr. Grace Mba",
      specialty: lang === "fr" ? "Obstétrique et gynécologie" : "Obstetrics & Gynecology",
      image: "/images/doctor-grace.jpg",
      bio:
        lang === "fr"
          ? "Dédiée à la santé complète des femmes avec des soins attentifs et modernes."
          : "Dedicated to providing comprehensive women's health services.",
    },
    {
      name: "Dr. James Foncha",
      specialty: lang === "fr" ? "Orthopédie" : "Orthopedics",
      image: "/images/doctor-james.jpg",
      bio:
        lang === "fr"
          ? "Expert en remplacement articulaire et en médecine du sport."
          : "Expert in joint replacement and sports medicine.",
    },
  ];
}

function DoctorCard({
  doctor,
  index,
  isVisible,
}: {
  doctor: ReturnType<typeof getDoctors>[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:border-[#0F6CBD]/30 hover:shadow-xl transition-all duration-300 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#0F6CBD] transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#0F6CBD] transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#0F6CBD] transition-colors">
          {doctor.name}
        </h3>
        <p className="text-[#14B8A6] text-sm font-medium mb-2">
          {doctor.specialty}
        </p>
        <p className="text-[#475569] text-sm leading-relaxed">
          {doctor.bio}
        </p>
      </div>
    </div>
  );
}

export function DoctorsSection({ lang = "fr" }: { lang?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const doctors = getDoctors(lang);

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
    <section ref={sectionRef} className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F0FA] text-[#0F6CBD] text-sm font-medium mb-4">
              <span>{lang === "fr" ? "Nos médecins" : "Our Doctors"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {lang === "fr" ? "Découvrez notre équipe " : "Meet Our "}
              <span className="text-[#0F6CBD]">
                {lang === "fr" ? "médicale experte" : "Expert"}
              </span>
              {lang === "fr" ? "" : " Medical Team"}
            </h2>
          </div>
          <Link
            href={`/${lang}/doctors`}
            className="inline-flex items-center gap-2 text-[#0F6CBD] font-medium hover:gap-3 transition-all self-start sm:self-auto"
          >
            {lang === "fr" ? "Voir tous les médecins" : "View All Doctors"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={doctor.name}
              doctor={doctor}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
