import SocialItem from "@/components/ui/social-item/social-item";
import { navSocialItems } from "./constants";

const NavSocial = () => {
  return (
    <div className="flex items-center justify-between w-full mt-[10px] py-0 px-[34px]">
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
