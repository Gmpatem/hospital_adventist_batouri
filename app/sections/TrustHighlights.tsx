"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Calendar, UserCheck, Award } from "lucide-react";

const highlights = [
  {
    icon: Users,
    number: 50000,
    suffix: "+",
    label: "Patients Treated",
  },
  {
    icon: Calendar,
    number: 25,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: UserCheck,
    number: 50,
    suffix: "+",
    label: "Expert Doctors",
  },
  {
    icon: Award,
    number: 15,
    suffix: "+",
    label: "Awards Won",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

function HighlightCard({ 
  icon: Icon, 
  number, 
  suffix, 
  label, 
  delay 
}: { 
  icon: typeof Users; 
  number: number; 
  suffix: string; 
  label: string; 
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(number, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#0F6CBD]/30 hover:shadow-lg transition-all duration-300 text-center ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#E6F0FA] group-hover:bg-[#0F6CBD] flex items-center justify-center transition-colors duration-300">
        <Icon className="w-7 h-7 text-[#0F6CBD] group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[#475569] font-medium">{label}</div>
    </div>
  );
}

export function TrustHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.label}
              {...highlight}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
