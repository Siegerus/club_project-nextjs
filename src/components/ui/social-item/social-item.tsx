import Image from "next/image";
import { SocialItemType } from "./types";
import cn from "@/lib/utils";

type NavSocialItemProps = SocialItemType & {
  width?: number;
  height?: number;
  linkClass?: string;
  imageClass?: string;
};

const SocialItem = ({
  src,
  href,
  alt,
  width = 20,
  height = 20,
  linkClass,
  imageClass,
}: NavSocialItemProps) => {
  const linkClassName = cn(
    "flex items-center justify-center w-[48px] h-[48px] border-[1.5px] border-white-70 rounded-full",
    linkClass,
  );

  return (
    <a className={linkClassName} href={href}>
      <Image
        className={imageClass}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
};

export default SocialItem;
