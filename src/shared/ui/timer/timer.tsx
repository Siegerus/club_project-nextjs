import { cn } from "@/shared/lib";

type TimerProps = {
  wrapperClass?: string;
};

const styles = {
  wrapper: "flex flex-row gap-5",
  card: "flex w-20 flex-col items-center rounded-lg bg-main-bg backdrop-blur-md",
  value:
    "text-[32px] font-semibold leading-one text-white md:text-[40px] md:tracking-base",
  label: "text-xs font-medium leading-main text-white-70 md:text-xl",
};

const timeUnits = [
  { id: "days", value: "02", label: "дней" },
  { id: "hours", value: "18", label: "часов" },
  { id: "minutes", value: "45", label: "минут" },
];

const Timer = ({ wrapperClass }: TimerProps) => {
  return (
    <div className={cn(styles.wrapper, wrapperClass)}>
      {timeUnits.map((unit) => (
        <div key={unit.id} className={styles.card}>
          <span className={styles.value}>{unit.value}</span>
          <span className={styles.label}>{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Timer;
