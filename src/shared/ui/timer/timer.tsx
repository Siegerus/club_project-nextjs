import { cn } from "@/shared/lib";

type TimerProps = {
  wrapperClass?: string;
  cardClass?: string;
  labelClass?: string;
  valueClass?: string;
};

const styles = {
  wrapper:
    "flex justify-around md:justify-between flex-wrap md:flex-nowrap gap-y-[10px]",
  cardWrapper: "flex flex-col items-center justify-center",
  card: "relative flex w-[80px] h-[80px] items-center justify-center rounded-[16px] bg-white-20 backdrop-blur-md",
  value:
    "text-[2.5em] font-semibold leading-one text-white md:text-[2.5em] tracking-base",
  label: "text-xl font-medium leading-main text-white-70 md:text-xl",
  line: "-z-[5] absolute w-full h-[3px] top-1/2 -translate-y-1/2 bg-black",
};

const timeUnits = [
  { id: "days", value: "00", label: "дней" },
  { id: "hours", value: "00", label: "часов" },
  { id: "minutes", value: "00", label: "минут" },
  { id: "seconds", value: "00", label: "секунд" },
];

const Timer = ({ wrapperClass }: TimerProps) => {
  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      {timeUnits.map((unit) => (
        <div className={styles.cardWrapper} key={unit.id}>
          <div className={styles.card}>
            <span className={styles.value}>{unit.value}</span>
            <span className={styles.line}></span>
          </div>
          <span className={styles.label}>{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Timer;
