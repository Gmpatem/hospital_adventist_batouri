"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Building2, Heart, CheckCircle2 } from "lucide-react";

const features = [
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
      "Comfortable and hygienic environment",
      "Advanced diagnostic capabilities",
    ],
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    points: [
      "Personalized treatment plans",
      "Compassionate and attentive staff",
      "Focus on patient comfort and satisfaction",
    ],
  },
];

function FeatureBlock({ 
  feature, 
  index, 
  isVisible 
}: { 
  feature: typeof features[0]; 
  index: number; 
  isVisible: boolean;
}) {
  const Icon = feature.icon;

  return (
    <div
      className={`flex gap-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E6F0FA] flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#0F6CBD]" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
          {feature.title}
        </h3>
        <ul className="space-y-2">
          {feature.points.map((point, pointIndex) => (
            <li 
              key={pointIndex}
              className="flex items-start gap-2 text-[#475569]"
            >
              <CheckCircle2 className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div 
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F0FA] text-[#0F6CBD] text-sm font-medium mb-4">
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                Your Health is Our{" "}
                <span className="text-[#0F6CBD]">Priority</span>
              </h2>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureBlock
                  key={feature.title}
                  feature={feature}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/why-choose-room.jpg"
                alt="Modern Hospital Room"
                className="w-full h-auto object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-[#14B8A6]/10 to-transparent" />
            </div>

            {/* Stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#14B8A6]" />
                </div>
                <div>
                  <p className="font-bold text-[#0F172A]">98%</p>
                  <p className="text-sm text-[#475569]">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#0F6CBD] text-white rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm opacity-90">Care Available</p>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#0F6CBD]/5 rounded-full -z-10" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#14B8A6]/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
