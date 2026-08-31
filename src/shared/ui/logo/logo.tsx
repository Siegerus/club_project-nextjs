import Image from "next/image";
import Link from "next/link";

import { AppRoute } from "@/shared/lib";

type LogoProps = {
  width?: number;
  height?: number;
};

const styles = {
  wrapper:
    "flex items-center justify-left min-w-[129px] lg:min-w-[260px] xl:max-w-[230px] xl:min-w-[230px] 2xl:min-w-[260px]",
  image: "w-[129px] h-[24px] max-w-full max-h-full md:w-full md:h-full",
};

const Logo = ({ width = 129, height = 24 }: LogoProps) => {
  return (
    <div className={styles.wrapper}>
      <Link href={AppRoute.Home}>
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/logo.svg" />
          <source media="(min-width: 768px)" srcSet="/images/logo.svg" />
          <Image
            loading="eager"
            src="/images/logo.svg"
            alt="Логотип"
            width={width}
            height={height}
            className={styles.image}
          />
        </picture>
      </Link>
    </div>
  );
};

export default Logo;
