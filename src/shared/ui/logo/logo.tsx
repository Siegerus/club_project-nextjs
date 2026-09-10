import Image from "next/image";
import Link from "next/link";

import { AppRoute } from "@/shared/lib";

type LogoProps = {
  width?: number;
  height?: number;
};

const styles = {
  wrapper:
    "flex items-center justify-start min-w-[129px] lg:min-w-[260px] xl:max-w-[230px] xl:min-w-[230px] 2xl:min-w-[260px]",
  image: "w-[129px] h-[24px] max-w-full max-h-full md:w-full md:h-full",
};

const Logo = ({ width = 129, height = 24 }: LogoProps) => {
  return (
    <div className={styles.wrapper}>
      <Link href={AppRoute.Home}>
        <Image
          loading="eager"
          src="/images/logo.svg"
          alt="Логотип"
          width={width}
          height={height}
          className={styles.image}
        />
      </Link>
    </div>
  );
};

export default Logo;
