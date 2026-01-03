import type { Metadata } from "next";
import { Montserrat, Playfair } from "next/font/google";
import "@/sass/_global.scss";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});
const playFair = Playfair({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-play-fair'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trattoriasanbernardo.it/"),   
  title: "Trattoria San Bernardo",
  description: "Mangia Bene e Rilassati",
  icons: {
    icon: '/logo-assets/favicon.png',
    shortcut: '/logo-assets/favicon.png',
    apple: '/logo-assets/mobile/SB_180x180.png'
  },
  openGraph: {
    title: "Trattoria San Bernardo",
    description: "Mangia Bene e Rilassati",
    url: "https://www.trattoriasanbernardo.it/",    
    siteName: "Trattoria San Bernardo",
    images: [
      {
        url: "/logo-assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trattoria San Bernardo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${montserrat.variable} ${playFair.variable}`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GZMQ5KQJVV"
        strategy="beforeInteractive"
      />
      <Script id="ga" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-GZMQ5KQJVV');
      `}
      </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Trattoria San Bernardo",
              "image": "https://www.trattoriasanbernardo.it/logo-assets/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Roma 1",
                "addressLocality": "Morimondo",
                "addressRegion": "MI",
                "postalCode": "20081",
                "addressCountry": "IT"
              },

              "telephone": "+39 0123 456789",
              "url": "https://www.trattoriasanbernardo.it/"
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}