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
  title: "Trattoria San Bernardo",
  description: "Mangia Bene e Rilassati",
  icons: '/favicon.png',
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