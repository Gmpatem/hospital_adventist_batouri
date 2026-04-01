import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { MobileCTA } from "@/components/site/MobileCTA";
import { HeroSection } from "@/app/sections/HeroSection";
import { TrustHighlights } from "@/app/sections/TrustHighlights";
import { AboutPreview } from "@/app/sections/AboutPreview";
import { ServicesSection } from "@/app/sections/ServicesSection";
import { DoctorsSection } from "@/app/sections/DoctorsSection";
import { WhyChooseUs } from "@/app/sections/WhyChooseUs";
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
      <main>
        <HeroSection lang={lang} />
        <TrustHighlights lang={lang} />
        <AboutPreview lang={lang} />
        <ServicesSection lang={lang} />
        <DoctorsSection lang={lang} />
        <WhyChooseUs lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
