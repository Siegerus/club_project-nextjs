import { motion } from "framer-motion";
import { cn } from "@/shared/lib";

type OverlayProps = {
  children: React.ReactNode;
};

const styles = {
  overlay: cn(
    "z-40 fixed top-0 left-0",
    "flex items-center justify-center",
    "w-full h-dvh bg-black/30",
  ),
};

const Overlay = ({ children }: OverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.overlay}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
