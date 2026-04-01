import { notFound } from "next/navigation";

const allowedLangs = ["fr", "en"];

export function generateStaticParams() {
  return allowedLangs.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!allowedLangs.includes(lang)) {
    notFound();
  }

  return <>{children}</>;
}
