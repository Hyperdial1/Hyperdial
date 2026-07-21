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
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-2Y53FL6Y08";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default:
      "HyperDial — the AI-powered business phone system that learns from your best reps",
    template: "%s · HyperDial",
  },
  description:
    "HyperDial is the AI-powered business phone system for SMBs and enterprises — it answers, routes and makes calls, learns from your best reps, and gets smarter with every call.",
  keywords: [
    "business phone system",
    "AI call center",
    "cloud telephony",
    "AI voice agent",
    "call center software",
    "AI customer service",
    "conversational AI",
    "IVR software",
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
    title: "HyperDial — the business phone system that gets smarter with every call",
    description:
      "Your best rep's best call, every call. AI-powered calling for SMBs and enterprises — with chat, email and social on the same brain.",
    url: SITE,
    images: [{ url: "/logo.png", width: 1200, height: 1200, alt: "HyperDial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperDial — the AI phone system that learns from your best reps",
    description:
      "Your best rep's best call, every call — with chat, email and social on the same brain.",
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
    "The AI-powered business phone system that answers, routes and makes calls, learns from your best reps, and gets smarter with every call.",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
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
