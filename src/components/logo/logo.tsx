import Link from "next/link";
import Image from "next/image";

import cn from "@/lib/utils";

type LogoProps = {
  isMobile?: boolean;
  width?: number;
  height?: number;
};

const Logo = ({ isMobile, width = 129, height = 24 }: LogoProps) => {
  const wrapperClass = cn(
    "flex items-center justify-left min-w-[129px] lg:min-w-[260px] xl:max-w-[230px] xl:min-w-[230px] 2xl:min-w-[260px]",
    !isMobile && "h-6 xl:h-13",
  );

  return (
    <div className={wrapperClass}>
      <Link href="/index.html">
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
