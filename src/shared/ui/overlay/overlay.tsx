import { motion } from "framer-motion";

type OverlayProps = {
  children: React.ReactNode;
};

const Overlay = ({ children }: OverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="z-40 fixed top-0 left-0 flex items-center justify-center w-full h-dvh bg-black/30"
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
