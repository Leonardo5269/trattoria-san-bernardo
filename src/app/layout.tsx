import type { Metadata } from "next";
import { Montserrat, Playfair } from "next/font/google";
import "@/sass/_global.scss";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://trattoria-san-bernardo.vercel.app"),   // Cambio
  title: "Trattoria San Bernardo",
  description: "Mangia Bene e Rilassati",
  icons: '/logo-assets/favicon.png',
  openGraph: {
    title: "Trattoria San Bernardo",
    description: "Mangia Bene e Rilassati",
    url: "https://trattoria-san-bernardo.vercel.app/",    // Cambio
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}