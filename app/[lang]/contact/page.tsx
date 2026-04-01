import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactSection } from "@/app/sections/ContactSection";

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
            {lang === "fr" ? "Contact" : "Contact"}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-[#0F172A]">
            {lang === "fr" ? "Contactez-nous" : "Contact Us"}
          </h1>
          <p className="mt-6 text-lg text-[#475569]">
            {lang === "fr"
              ? "Nous sommes là pour répondre à vos questions et vous aider à obtenir les soins dont vous avez besoin."
              : "We are here to answer your questions and help you access the care you need."}
          </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
