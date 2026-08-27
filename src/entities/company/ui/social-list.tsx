import { SocialItem } from "@/shared/ui/social-item";

import { socialConfigs, type SocialPlatform } from "../model";

type Size = { width: number; height: number };

type SocialListProps = {
  platforms: SocialPlatform[];
  variant?: "colored" | "white";
  size?: Size;
  /** Переопределение размера для отдельных платформ */
  sizeByPlatform?: Partial<Record<SocialPlatform, Size>>;
  wrapperClass?: string;
  linkClass?: string;
  imageClass?: string;
};

const defaultSize: Size = { width: 20, height: 20 };

const SocialList = ({
  platforms,
  variant = "colored",
  size = defaultSize,
  sizeByPlatform,
  wrapperClass,
  linkClass,
  imageClass,
}: SocialListProps) => {
  return (
    <div className={wrapperClass}>
      {platforms.map((platform) => {
        const config = socialConfigs[platform];
        const currentSize = sizeByPlatform?.[platform] ?? size;

        return (
          <SocialItem
            key={platform}
            src={variant === "white" ? config.iconWhite : config.icon}
            href={config.href}
            alt={config.alt}
            width={currentSize.width}
            height={currentSize.height}
            linkClass={linkClass}
            imageClass={imageClass}
          />
        );
      })}
    </div>
  );
};

export default SocialList;
