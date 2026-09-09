import { cn } from "@/shared/lib/utils";
import { goalsDescription } from "../lib";

const styles = {
  wrapper: cn(
    "w-full mt-[13px] md:mt-[35px] lg:mt-[40px] pt-[10px] px-[10px] pb-0 md:pt-[14px] lg:pt-[14px] lg:px-[80px] xl:px-[195px]",
    "border-t-1 border-white-40/20",
  ),
  text: "text-sm md:text-base 2xl:text-lg 3xl:text-xl font-medium leading-main md:leading-[1.4] text-center text-white-70 tracking-base",
};

const FooterDesciption = () => {
  const { main, bottom } = goalsDescription;

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        {main}
        <br />
        <br className="lg:hidden" />
        {bottom}
      </div>
    </div>
  );
};

export default FooterDesciption;
