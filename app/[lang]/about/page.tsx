import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0F6CBD]">
            {lang === "fr" ? "À propos" : "About"}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-[#0F172A]">
            {lang === "fr" ? "À propos de notre hôpital" : "About Our Hospital"}
          </h1>
          <p className="mt-6 text-lg text-[#475569]">
            {lang === "fr"
              ? "Nous fournissons des soins de qualité avec compassion, professionnalisme et engagement envers la communauté."
              : "We provide quality care with compassion, professionalism, and commitment to the community."}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
