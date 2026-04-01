import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServicesSection } from "@/app/sections/ServicesSection";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-[#F8FAFC] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0F6CBD]">
            {lang === "fr" ? "Services" : "Services"}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-[#0F172A]">
            {lang === "fr" ? "Nos services médicaux" : "Our Medical Services"}
          </h1>
          <p className="mt-6 text-lg text-[#475569]">
            {lang === "fr"
              ? "Découvrez nos services conçus pour répondre aux besoins des patients et des familles."
              : "Explore our services designed to meet the needs of patients and families."}
          </p>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
