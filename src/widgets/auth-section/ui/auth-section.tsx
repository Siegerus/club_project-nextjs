import { authSectionDescription } from "../lib";

const styles = {
  root: "",
  wrapper:
    "w-full mt-[116px] p-[20px] rounded-small bg-main-bg bg-blur box-shadow-main",
  description:
    "mt-[20px] mb-[24px] text-sm text-center text-white leading-main tracking-base",
  buttonList: "",
  button: "",
  formList: "",
};

const AuthSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <ul className={styles.buttonList}>
          <li>
            <button className={styles.button}></button>
          </li>
          <li>
            <button className={styles.button}></button>
          </li>
        </ul>
        <p className={styles.description}>{authSectionDescription}</p>
        <ul className={styles.formList}>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default AuthSection;
