import type { Metadata } from "next";
import "./globals.css";

// Loaded via <link> in <head> below rather than next/font/google, so the
// project can build in environments without access to fonts.googleapis.com
// at build time. Swap this for next/font/google once you have network access
// (or self-host the font files under /public/fonts).

export const metadata: Metadata = {
  title: "Metvanta | Specialty Coffee & Modern Indian Café in Ahmedabad",
  description:
    "Metvanta is a specialty coffee house and modern Indian café in Ahmedabad — thoughtfully sourced coffee, seasonal plates and a room designed for staying a while.",
  openGraph: {
    title: "Metvanta | Specialty Coffee & Modern Indian Café",
    description: "Coffee, food and a room designed for staying a while. Ahmedabad.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400;1,9..144,600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
