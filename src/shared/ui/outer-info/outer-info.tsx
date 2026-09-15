import Image from "next/image";

import { cn } from "@/shared/lib/utils";

type OuterInfoProps = {
  info: string;
  alt?: string;
  width?: number;
  height?: number;
  linkClass?: string;
  wrapperClass?: string;
  iconPath: string;
  linkHref: string;
};

const styles = {
  wrapper: "flex items-center",
  iconWrap: "flex items-center",
  image: "max-w-full max-h-full md:w-full md:h-full",
  link: "text-base text-white-70",
};

const OuterInfo = ({
  info,
  alt,
  linkClass,
  wrapperClass,
  width = 20,
  height = 20,
  iconPath,
  linkHref,
}: OuterInfoProps) => {
  const iconAlt = alt || "Иконка";

  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <div className={styles.iconWrap}>
        <Image
          src={iconPath}
          alt={iconAlt}
          width={width}
          height={height}
          className={styles.image}
          loading="eager"
        />
      </div>
      <a href={linkHref} className={cn(styles.link, linkClass)}>
        {info}
      </a>
    </div>
  );
};

export default OuterInfo;
