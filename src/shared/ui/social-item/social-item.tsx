import Image from "next/image";
import { cn } from "@/shared/lib";
import type { SocialItemType } from "./types";

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
  width,
  height,
  linkClass,
  imageClass,
}: NavSocialItemProps) => {
  return (
    <a
      className={cn(styles.link, linkClass)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={cn(styles.image, imageClass)}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
};

export default SocialItem;

const styles = {
  link: "flex items-center justify-center w-[48px] h-[48px] border-[1.5px] border-white-70 rounded-full",
  image: "max-w-full max-h-full",
};
