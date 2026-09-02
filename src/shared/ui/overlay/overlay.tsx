const styles = {
  root: "z-40 fixed top-0 left-0 flex items-center justify-center w-full h-dvh bg-black/30",
};

type OverlayProps = {
  children: React.ReactNode;
};
const Overlay = ({ children }: OverlayProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default Overlay;
