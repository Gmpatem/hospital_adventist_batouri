"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

function getContactInfo(lang: string) {
  return [
    {
      icon: MapPin,
      label: lang === "fr" ? "Adresse" : "Address",
      value: "123 Healthcare Avenue, Yaoundé, Cameroon",
      href: "#",
    },
    {
      icon: Phone,
      label: lang === "fr" ? "Téléphone" : "Phone",
      value: "+237 123 456 789",
      href: "tel:+237123456789",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@medicare-hospital.cm",
      href: "mailto:info@medicare-hospital.cm",
    },
    {
      icon: Clock,
      label: lang === "fr" ? "Heures d'ouverture" : "Working Hours",
      value: lang === "fr" ? "Urgences 24/7 | Lun-Sam 8h-18h" : "24/7 Emergency | Mon-Sat 8AM-6PM",
      href: "#",
    },
  ];
}

export function ContactSection({ lang = "fr" }: { lang?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contactInfo = getContactInfo(lang);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(lang === "fr" ? "Message envoyé !" : "Message Sent!", {
      description:
        lang === "fr"
          ? "Nous vous répondrons dès que possible."
          : "We'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F0FA] text-[#0F6CBD] text-sm font-medium mb-4">
            <span>{lang === "fr" ? "Contactez-nous" : "Contact Us"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            {lang === "fr" ? "Entrons en " : "Get in "}
            <span className="text-[#0F6CBD]">
              {lang === "fr" ? "contact" : "Touch"}
            </span>
          </h2>
          <p className="text-[#475569] leading-relaxed">
            {lang === "fr"
              ? "Vous avez des questions ? Nous sommes là pour vous aider. Contactez-nous à tout moment."
              : "Have questions? We're here to help. Reach out to us anytime and our team will respond as soon as possible."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0F6CBD]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E6F0FA] group-hover:bg-[#0F6CBD] flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-5 h-5 text-[#0F6CBD] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-[#475569] mb-1">{item.label}</p>
                      <p className="text-[#0F172A] font-medium text-sm">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891806523!2d11.40441939453125!3d3.8480324999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MediCare Hospital Location"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#0F172A] mb-6">
                {lang === "fr" ? "Envoyez-nous un message" : "Send us a Message"}
              </h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0F172A]">
                      {lang === "fr" ? "Nom complet" : "Full Name"}
                    </Label>
                    <Input id="name" placeholder={lang === "fr" ? "Votre nom" : "Your name"} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0F172A]">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[#0F172A]">
                    {lang === "fr" ? "Sujet" : "Subject"}
                  </Label>
                  <Input id="subject" placeholder={lang === "fr" ? "Sujet de votre message" : "Message subject"} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#0F172A]">
                    {lang === "fr" ? "Message" : "Message"}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={lang === "fr" ? "Écrivez votre message ici..." : "Write your message here..."}
                    className="min-h-[140px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0F6CBD] hover:bg-[#0C5A9C] text-white py-6 rounded-xl font-semibold text-base transition-all hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting
                    ? (lang === "fr" ? "Envoi..." : "Sending...")
                    : (lang === "fr" ? "Envoyer le message" : "Send Message")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
