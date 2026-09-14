import { partners } from "@/entities/company";
import { cn } from "@/shared/lib";
import PartnersItem from "./partners-item";

const styles = {
  list: cn(
    "flex justify-start md:justify-center md:flex-wrap lg:flex-nowrap lg:justify-between",
    "min-w-[850px] md:min-w-auto mt-[20px] pb-[39px] md:pb-0 md:px-[30px] lg:px-[65px] list-none",
  ),
};

const PartnersList = () => {
  return (
    <ul className={styles.list}>
      {partners.map((item) => (
        <PartnersItem
          key={item.id}
          name={item.name}
          logoPath={item.logoPath}
          href={item.href}
          alt={item.alt}
        />
      ))}
    </ul>
  );
};

export default PartnersList;
