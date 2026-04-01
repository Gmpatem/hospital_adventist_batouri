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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0F6CBD]">
            {lang === "fr" ? "Rendez-vous" : "Appointment"}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-[#0F172A]">
            {lang === "fr" ? "Prendre rendez-vous" : "Book an Appointment"}
          </h1>
          <p className="mt-6 text-lg text-[#475569]">
            {lang === "fr"
              ? "Remplissez ce formulaire pour demander un rendez-vous avec notre équipe."
              : "Fill in this form to request an appointment with our team."}
          </p>

          <form className="mt-10 space-y-6 rounded-2xl bg-white p-6 shadow-sm border border-[#E2E8F0]">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                {lang === "fr" ? "Nom complet" : "Full Name"}
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-[#CBD5E1] px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F6CBD]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                {lang === "fr" ? "Téléphone" : "Phone"}
              </label>
              <input
                type="tel"
                className="w-full rounded-lg border border-[#CBD5E1] px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F6CBD]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                {lang === "fr" ? "Message" : "Message"}
              </label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-[#CBD5E1] px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F6CBD]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-[#0F6CBD] px-6 py-3 text-white font-medium hover:bg-[#0C5A9C] transition-colors"
            >
              {lang === "fr" ? "Envoyer la demande" : "Submit Request"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
