"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "State-of-the-art medical facilities",
  "Highly skilled medical professionals",
  "Patient-centered care approach",
  "24/7 emergency services",
];

export function AboutPreview() {
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
    <section ref={sectionRef} className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/about-interior.jpg"
                alt="MediCare Hospital Interior"
                className="w-full h-auto object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F6CBD]/10 to-transparent" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0F6CBD] text-white rounded-xl p-6 shadow-xl">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#14B8A6]/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div 
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F0FA] text-[#0F6CBD] text-sm font-medium">
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
              Leading Healthcare Provider in{" "}
              <span className="text-[#0F6CBD]">Cameroon</span>
            </h2>

            <div className="space-y-4 text-[#475569] leading-relaxed">
              <p>
                MediCare Hospital has been serving the community for over 25 years, 
                providing comprehensive healthcare services with compassion and excellence. 
                Our commitment to patient care has made us one of the most trusted 
                medical institutions in the region.
              </p>
              <p>
                Our state-of-the-art facilities, combined with our team of highly skilled 
                medical professionals, ensure that you receive the best possible care. 
                We continuously invest in the latest medical technology and training to 
                stay at the forefront of healthcare.
              </p>
            </div>

            {/* Features list */}
            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2 text-[#0F172A]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#14B8A6] flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link href="/about">
              <Button 
                variant="outline" 
                className="mt-4 border-[#0F6CBD] text-[#0F6CBD] hover:bg-[#0F6CBD] hover:text-white px-6 py-3 rounded-xl font-medium transition-all group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
