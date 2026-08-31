import { socialConfigs } from "@/entities/company";
import cn from "@/shared/lib/utils";
import { SocialList, type SocialListItem } from "@/shared/ui/link-list";

const styles = {
  wrapper: "flex items-center",
  link: cn(
    "flex items-center justify-center rounded-full bg-white",
    "w-[40px] h-[40px] md:w-[70px] md:h-[70px] 2xl:w-[74px] 2xl:h-[74px] mr-[10px] md:mr-[25px] lg:mr-[20px]",
  ),
  image: "max-w-[20px] max-h-[20px] md:max-w-full md:max-h-full",
};

const FooterSocial = () => {
  const { whatsapp, telegram } = socialConfigs;

  const items: SocialListItem[] = [
    {
      src: whatsapp.icon,
      href: whatsapp.href,
      alt: whatsapp.alt,
      width: 34,
      height: 34,
    },
    {
      src: telegram.icon,
      href: telegram.href,
      alt: telegram.alt,
      width: 34,
      height: 34,
    },
  ];

  return (
    <SocialList
      items={items}
      wrapperClass={styles.wrapper}
      linkClass={styles.link}
      imageClass={styles.image}
    />
  );
};

export default FooterSocial;
