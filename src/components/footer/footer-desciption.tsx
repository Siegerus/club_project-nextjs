import cn from "@/lib/utils";
import { goalsDescription } from "./constants";

const FooterDesciption = () => {
  const parts = goalsDescription.split("&");
  const [mainText, bottomText] = parts;

  console.log();

  const wrapperClass = cn(
    "w-full mt-[13px] md:mt-[35px] lg:mt-[40px] pt-[10px] px-[10px] pb-0 md:pt-[14px] lg:pt-[14px] lg:px-[80px] xl:px-[195px]",
    "border-t-1 border-white-40/20 ",
  );

  return (
    <div className={wrapperClass}>
      <div className="text-sm md:text-base 2xl:text-lg 3xl:text-xl leading-[1.3] md:leading-[1.4] text-center text-white-70 tracking-tight">
        {mainText}
        <br />
        <br className="lg:hidden " />
        {bottomText}
      </div>
    </div>
  );
};

export default FooterDesciption;
