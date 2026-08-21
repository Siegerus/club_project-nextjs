import Image from "next/image";

import cn from "@/shared/lib/utils";
import { phoneNumber, email } from "@/shared/lib/constants";

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
  const wrapperClassName = cn("flex items-center", wrapperClass);
  const linkClassName = cn(
    "text-base text-white-70",
    isPhone ? "ml-[10px]" : "ml-[15px]",
    linkClass,
  );

  return (
    <div className={wrapperClassName}>
      <div className="flex items-center">
        <Image
          src={iconSrc}
          alt={imageAlt}
          width={width}
          height={height}
          className="max-w-full max-h-full md:w-full md:h-full"
        />
      </div>
      <a href={linkHref} className={linkClassName}>
        {linkData}
      </a>
    </div>
  );
};

export default OuterInfo;
