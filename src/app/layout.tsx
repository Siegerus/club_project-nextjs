import { type Metadata } from "next";

import { gilroy } from "./fonts";
import Providers from "./providers";
import WithData from "./withData/withData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Клуб «Притяжение»",
    template: "%s — Клуб «Притяжение»",
  },
  description:
    "Клуб «Притяжение» — свингер-клуб. Цены, правила, VIP-зоны, программа лояльности, расписание мероприятий и запись.",
  keywords:
    "свингер клуб, притяжение, цены, vip, правила, лояльность, мероприятия, запись, свингеры",
  authors: [
    {
      name: "ООО «Притяжение»",
      url: "/",
    },
  ],
  category: "развлечения",
  publisher: "ООО «Притяжение»",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Клуб «Притяжение»",
    title: "Клуб «Притяжение»",
    description:
      "Клуб «Притяжение» — свингер-клуб. Цены, правила, VIP-зоны, программа лояльности, расписание мероприятий и запись.",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Клуб «Притяжение»",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Клуб «Притяжение»",
    description:
      "Клуб «Притяжение» — свингер-клуб. Цены, правила, VIP-зоны, программа лояльности, расписание мероприятий и запись.",
    images: ["/images/logo.svg"],
    creator: "@club_prityazhenie",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/images/logo-mobile.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        url: "/images/logo.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
    apple: [{ url: "/images/logo-mobile.svg", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`h-full antialiased ${gilroy.variable}`}>
      <Providers>
        <WithData>
          <body className={`relative min-h-full flex flex-col`}>
            {children}
          </body>
        </WithData>
      </Providers>
    </html>
  );
}
