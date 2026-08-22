import SocialItem from "@/shared/ui/social-item/social-item";
import { navSocialItems } from "./constants";

const NavSocial = () => {
  return (
    <div className={styles.wrapper}>
      {navSocialItems.map((item) =>
        item.alt === "Вконтакте" ? (
          <SocialItem
            src={item.src}
            href={item.href}
            alt={item.alt}
            key={item.src}
            width={23}
            height={23}
          />
        ) : (
          <SocialItem
            src={item.src}
            href={item.href}
            alt={item.alt}
            key={item.src}
          />
        ),
      )}
    </div>
  );
};

export default NavSocial;

const styles = {
  wrapper: "flex items-center justify-between w-full mt-[10px] py-0 px-[34px]",
};
