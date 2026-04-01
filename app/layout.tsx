import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MediCare Hospital | Compassionate Healthcare in Cameroon",
  description: "MediCare Hospital provides world-class medical services with a personal touch. 24/7 emergency care, expert doctors, and modern facilities in Yaoundé, Cameroon.",
  keywords: ["hospital in Cameroon", "healthcare services", "medical clinic", "maternity care", "emergency care", "Yaoundé hospital"],
  authors: [{ name: "MediCare Hospital" }],
  creator: "MediCare Hospital",
  publisher: "MediCare Hospital",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medicare-hospital.cm",
    siteName: "MediCare Hospital",
    title: "MediCare Hospital | Compassionate Healthcare in Cameroon",
    description: "Providing world-class medical services with a personal touch. Book your appointment today.",
    images: [
      {
        url: "/images/hero-hospital.jpg",
        width: 1200,
        height: 630,
        alt: "MediCare Hospital Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediCare Hospital | Compassionate Healthcare in Cameroon",
    description: "Providing world-class medical services with a personal touch. Book your appointment today.",
    images: ["/images/hero-hospital.jpg"],
  },
  alternates: {
    canonical: "https://medicare-hospital.cm",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthcareOrganization",
              name: "MediCare Hospital",
              description: "Leading healthcare provider in Cameroon",
              url: "https://medicare-hospital.cm",
              telephone: "+237123456789",
              email: "info@medicare-hospital.cm",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Healthcare Avenue",
                addressLocality: "Yaoundé",
                addressCountry: "CM",
              },
              medicalSpecialty: ["General Medicine", "Cardiology", "Obstetrics", "Orthopedics"],
              availableService: {
                "@type": "MedicalService",
                name: "24/7 Emergency Care",
                availableChannel: {
                  "@type": "ServiceChannel",
                  serviceType: "Emergency Medical Services",
                  availableLanguage: ["English", "French"],
                },
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
              priceRange: "$$",
              image: "https://medicare-hospital.cm/images/hero-hospital.jpg",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] font-sans antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
