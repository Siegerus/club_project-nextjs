import Image from "next/image";
import { cn } from "@/shared/lib";

const styles = {
  card: "flex flex-col w-[320px] lg:w-[310px] xl:w-[360px] 2xl:w-[450px] 3xl:w-[500px] min-h-[346px] xl:min-h-[470px] 2xl:min-h-[588px] mb-[10px] lg:mb-0 p-[10px] lg:p-[14px] rounded-t-[40px] rounded-b-[50px] bg-main-bg-secondary",
  photo:
    "relative min-h-[159px] lg:min-h-[192px] xl:min-h-[226px] 2xl:min-h-[322px] w-full overflow-visible rounded-t-[40px] rounded-b-[50px]",
  photoImage: "object-fill lg:object-fill rounded-base ",
  ticket:
    "absolute -bottom-[23px] xl:-bottom-[25px] 2xl:-bottom-[36px] right-[24px] 2xl:right-[16px] flex h-[46px] w-[93px] xl:w-[114px] xl:h-[51px] 2xl:w-[163px] 2xl:h-[73px] items-center justify-center",
  ticketImage:
    "h-[46px] w-[93px] xl:w-[114px] xl:h-[51px] 2xl:w-[163px] 2xl:h-[73px] object-cover",
  ticketDate:
    "absolute left-[10px] md:left-[14px] 2xl:left-[24px] 2xl:left-[24px] top-1/2 flex text-center lg:text-left w-[45px] -translate-y-1/2 text-sm xl:text-xl font-semibold uppercase leading-one md:leading-main lg:tracking-base text-white",
  ticketYear:
    "absolute right-[10px] 2xl:right-[20px] top-1/2 -translate-y-1/2 text-sm xl:text-xl  font-semibold leading-[1.3] tracking-base text-white [writing-mode:vertical-rl] rotate-[-180deg]",
  title:
    "mt-[33px] lg:mt-[35px] xl:mt-[57px] text-center text-3xl lg:text-[1.625em] xl:text-4xl font-semibold leading-[1.1] tracking-base text-white md:text-[30px]",
  button:
    "mt-[20px] xl:mt-[33px] relative z-10 w-full cursor-pointer rounded-full bg-white pt-[14px] pb-[16px] lg:pt-[20px] lg:pb-[22px] text-center text-sm lg:text-xl font-semibold tracking-base leading-main text-black button-interactive_fill",
};

const EventsCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <Image
          className={cn(styles.photoImage, "hidden lg:block")}
          src="/images/events-swing.png"
          alt="Swing свадьба Сегрея и Дарьи"
          fill
          sizes="(min-width: 768px) 314px, (min-width: 1280px) 550px, 100vw"
        />
        <Image
          className={cn(styles.photoImage, "lg:hidden")}
          src="/images/events-swing-tablet.png"
          alt="Swing свадьба Сегрея и Дарьи"
          fill
          sizes="(min-width: 768px) 314px, (min-width: 1280px) 550px, 100vw"
        />
        <div className={styles.ticket}>
          <Image
            className={styles.ticketImage}
            src="/icons/events-ticket.svg"
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
