import Image from "next/image";

import { phoneNumber, email } from "@/shared/lib/constants";
import cn from "@/shared/lib/utils";

type OuterInfoProps = {
  isPhone: boolean;
  width?: number;
  height?: number;
  linkClass?: string;
  wrapperClass?: string;
};

const OuterInfo = ({
  isPhone,
  linkClass,
  wrapperClass,
  width = 20,
  height = 20,
}: OuterInfoProps) => {
  const iconSrc = isPhone ? "/icons/phone.svg" : "/icons/gmail.svg";
  const imageAlt = isPhone ? "Телефон" : "Email";
  const linkHref = isPhone ? "tel:+70000000000" : "mailto:info@gmail.com";
  const linkData = isPhone ? phoneNumber : email;

  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      <div className={styles.iconWrap}>
        <Image
          src={iconSrc}
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
