import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyperdial.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default:
      "HyperDial — the AI customer-service platform that learns from your best agents",
    template: "%s · HyperDial",
  },
  description:
    "HyperDial is the AI customer-service platform that learns from your best agents and gets smarter with every conversation — across voice, chat, email, and social.",
  keywords: [
    "AI customer service",
    "AI support agent",
    "AI contact center",
    "conversational AI",
    "omnichannel support",
    "customer service automation",
    "AI customer experience",
    "AI call center",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "HyperDial",
    title: "HyperDial — AI customer service that gets smarter with every conversation",
    description:
      "Your best agent, in every conversation. AI support across voice, chat, email, and social.",
    url: SITE,
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperDial — AI customer service that learns from your best agents",
    description:
      "Your best agent, in every conversation — across voice, chat, email, and social.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HyperDial",
  applicationCategory: "BusinessApplication",
  description:
    "The AI customer-service platform that learns from your best agents and gets smarter with every conversation, across voice, chat, email, and social.",
  operatingSystem: "Web",
  offers: { "@type": "Offer", category: "SaaS" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
