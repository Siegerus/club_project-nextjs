import { Logo } from "@/shared/ui";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-1">
        <div className="pt-[30px] md:pt-[40px] lg:pt-[29px]">
          <Logo wrapperClass="justify-center" linkClass="w-[160px]" />
          {children}
        </div>
      </main>
    </>
  );
}
