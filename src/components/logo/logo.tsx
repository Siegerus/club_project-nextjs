import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-left min-w-32 h-6 md:w-65 lg:w-57 xl:w-65 h-13">
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
