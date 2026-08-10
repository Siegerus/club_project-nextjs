import Image from "next/image";

import cn from "@/lib/utils";
import { phoneNumber, email } from "@/lib/constants";

type OuterInfoProps = {
  isPhone: boolean;
  width?: number;
  height?: number;
};

const OuterInfo = ({ isPhone, width = 20, height = 20 }: OuterInfoProps) => {
  const iconSrc = isPhone ? "/icons/phone.svg" : "/icons/gmail.svg";
  const imageAlt = isPhone ? "Телефон" : "Email";
  const linkHref = isPhone ? "tel:+70000000000" : "mailto:info@gmail.com";
  const linkData = isPhone ? phoneNumber : email;
  const linkClass = cn(
    "text-base text-white-70",
    isPhone ? "ml-[10px]" : "ml-[15px]",
  );

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <Image src={iconSrc} alt={imageAlt} width={width} height={height} />
      </div>
      <a href={linkHref} className={linkClass}>
        {linkData}
      </a>
    </div>
  );
};

export default OuterInfo;
