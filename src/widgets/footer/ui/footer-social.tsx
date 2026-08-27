import { SocialList } from "@/entities/company";

import cn from "@/shared/lib/utils";

const FooterSocial = () => {
  return (
    <SocialList
      platforms={["whatsapp", "telegram"]}
      variant="colored"
      size={{ width: 34, height: 34 }}
      wrapperClass={styles.wrapper}
      linkClass={styles.link}
      imageClass={styles.image}
    />
  );
};

export default FooterSocial;

const styles = {
  wrapper: "flex items-center",
  link: cn(
    "flex items-center justify-center rounded-full bg-white",
    "w-[40px] h-[40px] md:w-[70px] md:h-[70px] 2xl:w-[74px] 2xl:h-[74px] mr-[10px] md:mr-[25px] lg:mr-[20px]",
  ),
  image: "max-w-[20px] max-h-[20px] md:max-w-full md:max-h-full",
};
