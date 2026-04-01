"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Calendar, UserCheck, Award } from "lucide-react";

function getHighlights(lang: string) {
  return lang === "fr"
    ? [
        { icon: Users, number: 50000, suffix: "+", label: "Patients soignés" },
        { icon: Calendar, number: 25, suffix: "+", label: "Années d'expérience" },
        { icon: UserCheck, number: 50, suffix: "+", label: "Médecins experts" },
        { icon: Award, number: 15, suffix: "", label: "Prix médicaux" },
      ]
    : [
        { icon: Users, number: 50000, suffix: "+", label: "Patients Treated" },
        { icon: Calendar, number: 25, suffix: "+", label: "Years of Experience" },
        { icon: UserCheck, number: 50, suffix: "+", label: "Expert Doctors" },
        { icon: Award, number: 15, suffix: "", label: "Medical Awards" },
      ];
}

function Counter({
  end,
  suffix = "",
  start,
}: {
  end: number;
  suffix?: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const stepTime = 30;
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function TrustHighlights({ lang = "fr" }: { lang?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const highlights = getHighlights(lang);

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
    <section ref={sectionRef} className="py-10 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-[#E6F0FA] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0F6CBD]" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
                  <Counter end={item.number} suffix={item.suffix} start={isVisible} />
                </div>
                <p className="mt-2 text-sm sm:text-base text-[#475569]">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
