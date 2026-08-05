import Image from "next/image";

import { socialItems } from "./constants";
// import { SocialItem } from "./types";

const NavSocial = () => {
  return (
    <div className="flex items-center justify-between w-full mt-[10px] py-0 px-[34px]">
      {socialItems.map((item) =>
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

type SocialItemProps = {
  src: string;
  href: string;
  alt: string;
  width?: number;
  height?: number;
};

const SocialItem = ({
  src,
  href,
  alt,
  width = 20,
  height = 20,
}: SocialItemProps) => {
  return (
    <a
      className="flex items-center justify-center w-[48px] h-[48px] border-[1.5px] border-white-70 rounded-full"
      href={href}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </a>
  );
};
