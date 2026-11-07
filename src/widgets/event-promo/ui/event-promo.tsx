import Image from "next/image";

import { Container } from "@/shared/ui";

const styles = {
  section: "relative flex flex-col overflow-hidden pt-6 pb-10",
  watermark:
    "absolute top-8 left-0 w-full select-none text-center text-[98px] font-semibold leading-one tracking-base text-main-input blur-[11px] md:top-16 md:text-[210px] md:blur-[22px]",
  content:
    "relative flex flex-col items-center gap-10 mt-44 md:mt-52 md:flex-row md:items-start md:gap-14",
  image: "h-80 w-80 rounded-base object-cover md:h-[520px] md:w-[520px]",
  info: "flex flex-col items-center gap-4 text-center md:items-start md:gap-4 md:text-left",
  date: "text-sm font-medium leading-main tracking-base text-white-70 uppercase md:text-xl",
  title:
    "text-sm font-semibold leading-one tracking-base text-white md:w-[652px] md:text-[88px]",
};

const EventPromo = () => {
  return (
    <section className={styles.section}>
      <p className={styles.watermark} aria-hidden="true">
        SWING СВАДЬБА
      </p>
      <Container>
        <div className={styles.content}>
          <Image
            src="/images/action-img.png"
            alt="Фото события"
            width={520}
            height={520}
            className={styles.image}
            priority
          />
          <div className={styles.info}>
            <p className={styles.date}>20 июля 2024 года</p>
            <h1 className={styles.title}>Swing свадьба Сегрея и Дарьи</h1>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventPromo;
