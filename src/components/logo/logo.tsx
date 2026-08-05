import Link from "next/link";
import Image from "next/image";

import cn from "@/lib/utils/utils";

type LogoProps = {
  isMobile?: boolean;
};

const Logo = ({ isMobile }: LogoProps) => {
  const wrapperClass = cn(
    "flex items-center justify-left min-w-32 md:w-65 lg:w-57 xl:w-65",
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
            width={129}
            height={24}
            className="max-w-full max-h-full md:w-full h-full"
          />
        </picture>
      </Link>
    </div>
  );
};

export default Logo;
