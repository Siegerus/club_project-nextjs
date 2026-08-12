import Image from "next/image";

import SocialItem from "@/components/ui/social-item/social-item";
import { footerSocialItems } from "./constants";
import cn from "@/lib/utils";

const FooterSocial = () => {
  const linkClass = cn(
    "flex items-center justify-center rounded-full bg-white",
    "w-[40px] h-[40px] md:w-[70px] md:h-[70px] 2xl:w-[74px] 2xl:h-[74px] mr-[10px] md:mr-[25px] lg:mr-[20px]",
  );
  return (
    <div className="flex items-center">
      {footerSocialItems.map((item) => (
        <SocialItem
          key={item.alt}
          alt={item.alt}
          href={item.href}
          src={item.src}
          width={34}
          height={34}
          linkClass={linkClass}
          imageClass="max-w-[20px] max-h-[20px] md:max-w-full md:max-h-full"
        />
      ))}
    </div>
  );
};

export default FooterSocial;
