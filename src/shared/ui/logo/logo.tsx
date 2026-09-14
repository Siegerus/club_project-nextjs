import Image from "next/image";
import Link from "next/link";

import { cn } from "@/shared/lib";
import { AppRoute } from "@/shared/lib";

const styles = {
  wrapper: "flex items-center justify-start",
  link: "inline-flex w-[129px] md:w-[200px] lg:w-[260px] xl:w-[230px] 2xl:w-[260px]",
  image: "w-full h-auto",
};

type LogoProps = {
  linkClass?: string;
};

const Logo = ({ linkClass }: LogoProps) => {
  return (
    <div className={styles.wrapper}>
      <Link href={AppRoute.Home} className={cn(styles.link, linkClass)}>
        <Image
          loading="eager"
          src="/images/logo.svg"
          alt="Логотип"
          width={129}
          height={24}
          className={styles.image}
          style={{ height: "auto" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
