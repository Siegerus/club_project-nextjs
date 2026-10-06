import { Logo } from "@/shared/ui";

type OuterWrapperProps = {
  children: React.ReactNode;
};

const OuterWrapper = ({ children }: OuterWrapperProps) => {
  return (
    <div className="pt-[30px] md:pt-[40px] lg:pt-[29px]">
      <Logo wrapperClass="justify-center" linkClass="w-[160px] xl:w-[260px]" />
      {children}
    </div>
  );
};

export default OuterWrapper;
