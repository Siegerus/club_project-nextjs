import cn from "@/shared/lib/utils";
import { SocialItem } from "@/shared/ui/social-item";
import { footerSocialItems } from "./constants";

const FooterSocial = () => {
  return (
    <div className={styles.wrapper}>
      {footerSocialItems.map((item) => (
        <SocialItem
          key={item.alt}
          alt={item.alt}
          href={item.href}
          src={item.src}
          width={34}
          height={34}
          linkClass={styles.link}
          imageClass={styles.image}
        />
      ))}
    </div>
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
