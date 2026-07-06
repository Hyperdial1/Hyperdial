import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyperdial.io";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-MV77PQFD";

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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "HyperDial",
    title: "HyperDial — AI customer service that gets smarter with every conversation",
    description:
      "Your best agent, in every conversation. AI support across voice, chat, email, and social.",
    url: SITE,
    images: [{ url: "/logo.png", width: 1200, height: 1200, alt: "HyperDial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperDial — AI customer service that learns from your best agents",
    description:
      "Your best agent, in every conversation — across voice, chat, email, and social.",
    images: ["/logo.png"],
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
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
