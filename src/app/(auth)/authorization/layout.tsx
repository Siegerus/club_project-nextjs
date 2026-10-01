import { OuterWrapper } from "@/shared/ui";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OuterWrapper>
      <main className="flex-1">{children}</main>
    </OuterWrapper>
  );
}
