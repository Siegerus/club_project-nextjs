const styles = {
  root: "z-90 fixed top-0 left-0 w-full h-dvh bg-black/30",
};

type OverlayProps = {
  children: React.ReactNode;
};
const Overlay = ({ children }: OverlayProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default Overlay;
