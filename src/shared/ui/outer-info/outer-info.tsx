import Image from "next/image";

import cn from "@/shared/lib/utils";

type OuterInfoProps = {
  number?: string;
  mail?: string;
  isPhone?: boolean;
  width?: number;
  height?: number;
  linkClass?: string;
  wrapperClass?: string;
  iconPath: string;
  linkHref: string;
};

const OuterInfo = ({
  number,
  mail,
  isPhone = false,
  linkClass,
  wrapperClass,
  width = 20,
  height = 20,
  iconPath,
  linkHref,
}: OuterInfoProps) => {
  const imageAlt = isPhone ? "Телефон" : "Email";
  const linkData = isPhone ? number : mail;

  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <div className={styles.iconWrap}>
        <Image
          src={iconPath}
          alt={imageAlt}
          width={width}
          height={height}
          className={styles.image}
        />
      </div>
      <a
        href={linkHref}
        className={cn(
          styles.link,
          isPhone ? styles.phoneMargin : styles.emailMargin,
          linkClass,
        )}
      >
        {linkData}
      </a>
    </div>
  );
};

export default OuterInfo;

const styles = {
  wrapper: "flex items-center",
  iconWrap: "flex items-center",
  image: "max-w-full max-h-full md:w-full md:h-full",
  link: "text-base text-white-70",
  phoneMargin: "ml-[10px]",
  emailMargin: "ml-[15px]",
};
