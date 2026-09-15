import { bangles } from "@/entities/company";
import { cn } from "@/shared/lib";
import { Card } from "@/shared/ui";

const styles = {
  list: cn(
    "grid grid-cols-1 grid-rows-[minmax(228px,auto)] grid-auto-rows-[minmax(228px,_auto)] gap-y-[10px]",
    "mt-[20px]",
    "list-none",
  ),
};

const BanglesList = () => {
  return (
    <ul className={styles.list}>
      {/* {bangles.map((bangle, i) => (
        // <Card />
      ))} */}
    </ul>
  );
};

export default BanglesList;
