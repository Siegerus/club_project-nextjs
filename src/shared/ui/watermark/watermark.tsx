import { cn } from "@/shared/lib";

type WatermarkProps = {
  markClass?: string;
  text: string;
};

const styles = {
  watermark: "absolute max-w-full watermark",
};

const Watermark = ({ text, markClass }: WatermarkProps) => {
  return (
    <div className="relative w-full h-full ">
      <div className={cn(styles.watermark, markClass)} aria-hidden="true">
        {text}
      </div>
    </div>
  );
};

export default Watermark;
