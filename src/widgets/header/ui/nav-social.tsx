import { SocialList } from "@/entities/company";

const NavSocial = () => {
  return (
    <SocialList
      platforms={["instagram", "whatsapp", "vk", "telegram"]}
      variant="white"
      size={{ width: 20, height: 20 }}
      sizeByPlatform={{ vk: { width: 23, height: 23 } }}
      wrapperClass={styles.wrapper}
    />
  );
};

export default NavSocial;

const styles = {
  wrapper: "flex items-center justify-between w-full mt-[10px] py-0 px-[34px]",
};
