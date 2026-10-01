import { gilroy } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`h-full antialiased ${gilroy.variable}`}>
      <body className={`relative min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
