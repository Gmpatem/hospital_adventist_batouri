"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Clock, Shield, ArrowRight } from "lucide-react";

export function HeroSection({ lang = "fr" }: { lang?: string }) {
  const t =
    lang === "fr"
      ? {
          badge: "Soins de confiance depuis 1999",
          title1: "Des soins",
          title2: "de santé",
          title3: "humains et fiables",
          subtitle:
            "Nous fournissons des services médicaux de haut niveau avec une attention humaine. Notre équipe de médecins et d'infirmiers expérimentés est dédiée à votre santé et à votre bien-être.",
          book: "Prendre rendez-vous",
          whatsapp: "Écrire sur WhatsApp",
          emergency: "Urgences",
          doctors: "Médecins experts",
          learn: "En savoir plus",
          certified: "Certifié ISO",
          quality: "Soins de qualité",
        }
      : {
          badge: "Trusted Healthcare Since 1999",
          title1: "Compassionate",
          title2: "Healthcare",
          title3: "You Can Trust",
          subtitle:
            "Providing world-class medical services with a personal touch. Our team of experienced doctors and nurses are dedicated to your health and wellbeing.",
          book: "Book Appointment",
          whatsapp: "Chat on WhatsApp",
          emergency: "Emergency",
          doctors: "Expert Doctors",
          learn: "Learn More",
          certified: "ISO Certified",
          quality: "Quality Healthcare",
        };

  return (
    <section className="relative min-h-screen pt-[72px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#E6F0FA] -z-10" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#0F6CBD]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#14B8A6]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-72px-6rem)]">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F0FA] text-[#0F6CBD] text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>{t.badge}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                {t.title1} <span className="text-[#0F6CBD]">{t.title2}</span> {t.title3}
              </h1>
              <p className="text-lg sm:text-xl text-[#475569] max-w-xl leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${lang}/appointment`}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#0F6CBD] hover:bg-[#0C5A9C] text-white px-8 py-6 rounded-xl font-semibold text-base transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t.book}
                </Button>
              </Link>
              <a
                href="https://wa.me/237123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-6 rounded-xl font-semibold text-base transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.whatsapp}
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-[#475569]">
                <div className="w-10 h-10 rounded-full bg-[#CCFBF1] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#14B8A6]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">24/7</p>
                  <p className="text-sm">{t.emergency}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#475569]">
                <div className="w-10 h-10 rounded-full bg-[#E6F0FA] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#0F6CBD]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">50+</p>
                  <p className="text-sm">{t.doctors}</p>
                </div>
              </div>
              <Link
                href={`/${lang}/about`}
                className="flex items-center gap-2 text-[#0F6CBD] font-medium hover:gap-3 transition-all"
              >
                {t.learn}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-up stagger-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-hospital.jpg"
                alt="MediCare Hospital Building"
                className="w-full h-auto object-cover animate-float"
                style={{ animationDuration: "6s" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F6CBD]/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-fade-in-up stagger-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0F6CBD] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0F172A]">{t.certified}</p>
                  <p className="text-sm text-[#475569]">{t.quality}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
