import { Input } from "@/shared/ui";
import type { ReserveTabId } from "../model";

type ReserveFormProps = {
  id: ReserveTabId;
};

const ReserveForm = ({ id }: ReserveFormProps) => {
  return (
    <>
      <form id={`reserve-${id}-form`}></form>
    </>
  );
};

export default ReserveForm;
