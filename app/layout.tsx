import type { Metadata } from "next";
import "./globals.css";
import "nes.css/css/nes.min.css";

export const metadata: Metadata = {
  title: "Monk Funnel — Conversion-First Websites for Startups",
  description:
    "We build conversion-focused websites for startups and ship in 21 days — then help you grow with SEO and paid ads when you're ready.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/bb5de19d87c09a95216dc6ccd96e37c6?family=Nimbus+Sans+TW01"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,500&display=swap"
        />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
