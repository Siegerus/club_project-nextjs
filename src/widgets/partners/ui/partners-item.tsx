import Image from "next/image";

import type { Partner } from "@/entities/company/";
import { cn } from "@/shared/lib";

type PartnersItemProps = Omit<Partner, "id">;

const style = {
  listItem: "",
  link: cn(
    "relative block w-[175px] md:w-[135px] lg:w-[150px] xl:w-[180px] 3xl:w-[250px] h-[41px] lg:h-[40px] xl:h-[54px] 3xl:h-[70px]",
    "mr-[28px] md:mr-[20px] lg:mr-0 md:ml-[20px] lg:ml-0 md:mb-[20px] lg:mb-0",
  ),
  image: "object-contain",
};

const PartnersItem = (props: PartnersItemProps) => {
  const { name, logoPath, href, alt } = props;
  return (
    <li className={style.listItem}>
      <a className={style.link} href={href} title={name}>
        <Image
          className={style.image}
          src={logoPath}
          alt={alt}
          fill
          sizes="100wh"
        />
      </a>
    </li>
  );
};

export default PartnersItem;
