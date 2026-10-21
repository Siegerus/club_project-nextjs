import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { AdultAgreement } from "@/features/adult-agreement";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdultAgreement />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
