import Image from "next/image";
import type { EventItem } from "@/entities/event";
import { cn } from "@/shared/lib";
import { cardMobileTicketPath, cardTicketPath } from "../lib";

type EventsCardProps = {
  event: EventItem;
};

const styles = {
  card: cn(
    "flex flex-col",
    "w-[320px] lg:w-[310px] xl:w-[360px] 2xl:w-[420px] 3xl:w-[500px]",
    "min-h-[346px] xl:min-h-[470px] 2xl:min-h-[588px]",
    "mb-[10px] lg:mb-0 p-[10px] lg:p-[14px]",
    "rounded-t-[40px] rounded-b-[50px]",
    "bg-main-bg-secondary",
  ),
  photo: cn(
    "relative",
    "min-h-[159px] lg:min-h-[192px] xl:min-h-[226px] 2xl:min-h-[267px] 3xl:min-h-[322px]",
    "w-full overflow-visible",
    "rounded-t-[40px] rounded-b-[50px]",
  ),
  photoImage: "object-fill lg:object-fill rounded-base",
  ticket: cn(
    "absolute -bottom-[23px] xl:-bottom-[25px] 2xl:-bottom-[36px] right-[24px] lg:right-[16px] xl:right-[10px] 2xl:right-[16px]",
    "flex items-center justify-center",
    "h-[46px] w-[93px] xl:w-[114px] xl:h-[51px] 2xl:w-[135px] 2xl:h-[60px] 3xl:w-[163px] 3xl:h-[73px]",
  ),
  ticketImage: cn(
    "h-[46px] w-[93px] xl:w-[114px] xl:h-[51px] 2xl:w-[135px] 2xl:h-[60px] 3xl:w-[163px] 3xl:h-[73px]",
    "object-cover",
  ),
  ticketDate: cn(
    "absolute left-[10px] md:left-[14px] xl:left-[22px] 2xl:left-[24px]",
    "top-1/2 -translate-y-1/2",
    "flex text-center lg:text-left",
    "w-[45px]",
    "text-sm xl:text-[0.9375em] 2xl:text-[1.0625em] 3xl:text-xl font-semibold uppercase",
    "leading-main lg:leading-one 2xl:leading-one lg:tracking-base",
    "text-white",
  ),
  ticketYear: cn(
    "absolute right-[10px] lg:right-[8px] xl:right-[13px] 2xl:right-[16px] 3xl:right-[20px]",
    "top-1/2 -translate-y-1/2",
    "text-sm xl:text-[0.9375em] 2xl:text-[1.0625em] 3xl:text-xl font-semibold",
    "leading-[1.3] tracking-base",
    "text-white [writing-mode:vertical-rl] rotate-[-180deg]",
  ),
  title: cn(
    "mt-[33px] lg:mt-[35px] xl:mt-[57px]",
    "text-center",
    "text-3xl lg:text-[1.625em] xl:text-4xl",
    "font-semibold leading-[1.1] tracking-base",
    "text-white md:text-[30px]",
  ),
  button: cn(
    "mt-[20px] xl:mt-[33px]",
    "relative z-10 w-full cursor-pointer",
    "rounded-full bg-white",
    "pt-[14px] pb-[16px] lg:pt-[20px] lg:pb-[22px]",
    "text-center text-sm lg:text-xl font-semibold tracking-base leading-main",
    "text-black button-interactive_fill",
  ),
};

const EventsCard = ({ event }: EventsCardProps) => {
  const { id, title, date, image } = event;
  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <Image
          className={cn(styles.photoImage, "hidden lg:block")}
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width: 768px) 314px, (min-width: 1280px) 550px, 100vw"
          loading="eager"
        />
        <Image
          className={cn(styles.photoImage, "lg:hidden")}
          src="/images/events-swing-tablet.png"
          alt="Swing свадьба Сегрея и Дарьи"
          fill
          sizes="(min-width: 768px) 314px, (min-width: 1280px) 550px, 100vw"
          loading="eager"
        />
        <div className={styles.ticket}>
          <Image
            className={cn(styles.ticketImage, "hidden xl:block")}
            src={cardTicketPath}
            alt=""
            width={163}
            height={73}
            aria-hidden
          />
          <Image
            className={cn(styles.ticketImage, "xl:hidden")}
            src={cardMobileTicketPath}
            alt=""
            width={163}
            height={73}
            aria-hidden
          />
          <span className={styles.ticketDate}>
            20
            <br />
            июля
          </span>
          <span className={styles.ticketYear}>2024</span>
        </div>
      </div>
      <h2 className={styles.title}>Swing свадьба Сегрея и Дарьи</h2>
      <button type="button" className={styles.button}>
        Бронировать
      </button>
    </article>
  );
};

export default EventsCard;
