import { cn } from "@/shared/lib";
import { authSectionDescription } from "../lib";
import AuthTabLists from "./auth-tab-lists";

const styles = {
  root: "",
  wrapper: cn(
    "w-full lg:max-w-[648px] xl:max-w-[730px] mt-[116px] md:mt-[137px] lg:mt-[106px] xl:mt-[114px] mx-auto p-[20px] md:p-[40px]",
    "rounded-small md:rounded-middle lg:rounded-base bg-main-bg backdrop-filter-[blur(24px)] box-shadow-main",
  ),

  description:
    "mt-[20px] md:mt-[40px] mb-[24px] md:mb-[30px] text-sm md:text-xl text-center text-white leading-main tracking-base md:tracking-none",
  buttonList: "flex items-center justify-center",
  button: "",
  formList: "",
};

const AuthSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <AuthTabLists>
          <p className={styles.description}>{authSectionDescription}</p>
        </AuthTabLists>
      </div>
    </section>
  );
};

export default AuthSection;
