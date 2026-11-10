import { Logo } from "@/shared/ui";

type OuterWrapperProps = {
  children: React.ReactNode;
  withLogo?: boolean;
};

const OuterWrapper = ({ children, withLogo = true }: OuterWrapperProps) => {
  return (
    <div className="pt-[30px] pb-[100px] md:pt-[40px] md:pb-[140px] lg:pt-[29px]">
      {withLogo && (
        <Logo
          wrapperClass="justify-center"
          linkClass="w-[160px] xl:w-[260px]"
        />
      )}
      {children}
    </div>
  );
};

export default OuterWrapper;
