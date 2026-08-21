import Link from "next/link";
import Image from "next/image";

import cn from "@/shared/lib/utils";
import { AppRoute } from "@/shared/lib/routes";

type LogoProps = {
  width?: number;
  height?: number;
};

const Logo = ({ width = 129, height = 24 }: LogoProps) => {
  const wrapperClass = cn(
    "flex items-center justify-left min-w-[129px] lg:min-w-[260px] xl:max-w-[230px] xl:min-w-[230px] 2xl:min-w-[260px]",
  );

  return (
    <div className={wrapperClass}>
      <Link href={AppRoute.Home}>
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/logo.svg" />
          <source media="(min-width: 768px)" srcSet="/images/logo.svg" />
          <Image
            src="/images/logo.svg"
            alt="Логотип"
            width={width}
            height={height}
            className="max-w-full max-h-full md:w-full md:h-full"
          />
        </picture>
      </Link>
    </div>
  );
};

export default Logo;
