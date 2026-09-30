import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import { gilroy } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`h-full antialiased ${gilroy.variable}`}>
      <body className={`relative min-h-full flex flex-col`}>
        <Header />
        <main className="flex-1 container-eclipse">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
