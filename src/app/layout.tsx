import { gilroy } from "./fonts";
import Providers from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`h-full antialiased ${gilroy.variable}`}>
      <Providers>
        <body className={`relative min-h-full flex flex-col body_blur`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
