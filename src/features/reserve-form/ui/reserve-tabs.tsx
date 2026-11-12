import { Button } from "@/shared/ui";
import { reserveTabsConfig } from "../model";
import ReserveForm from "./reserve-form";

// type ReserveTabsProps = {}

const ReserveTabs = (/* props: ReserveTabsProps */) => {
  return (
    <>
      <ul>
        {reserveTabsConfig.map((tab, i) => {
          const keyValue = `${tab.id}-${i}`;
          return (
            <li key={keyValue}>
              <Button>{tab.label}</Button>
            </li>
          );
        })}
      </ul>
      <ReserveForm />
    </>
  );
};

export default ReserveTabs;
