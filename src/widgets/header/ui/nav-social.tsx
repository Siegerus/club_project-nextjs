import { socialConfigs } from "@/entities/company";
import { SocialList, type SocialListItem } from "@/shared/ui/social-list";

const NavSocial = () => {
  const { instagram, whatsapp, vk, telegram } = socialConfigs;

  const items: SocialListItem[] = [
    {
      src: instagram.icon,
      href: instagram.href,
      alt: instagram.alt,
    },
    {
      src: whatsapp.iconWhite,
      href: whatsapp.href,
      alt: whatsapp.alt,
    },
    { src: vk.icon, href: vk.href, alt: vk.alt, width: 23, height: 23 },
    {
      src: telegram.iconWhite,
      href: telegram.href,
      alt: telegram.alt,
    },
  ];

  return <SocialList items={items} wrapperClass={styles.wrapper} />;
};

export default NavSocial;

const styles = {
  wrapper: "flex items-center justify-between w-full mt-[10px] py-0 px-[34px]",
};
