const styles = {
  wrapper:
    "flex flex-row gap-[30px] border-b-2 border-white/10 pb-2.5 md:gap-10 lg:gap-[42px] lg:border-b-0 lg:pb-0",
  tab: "text-sm font-semibold leading-main tracking-base text-white-70 md:text-base lg:text-xl",
  tabActive:
    "text-sm font-extrabold leading-main tracking-base text-white underline md:text-base lg:text-xl",
};

const tabs = [
  { id: "format", label: "Формат мероприятия", isActive: true },
  { id: "about", label: "О событии", isActive: false },
  { id: "timing", label: "Тайминг", isActive: false },
  { id: "bangles", label: "Браслеты", isActive: false },
  { id: "dresscode", label: "Дресс-код", isActive: false },
];

const EventTabs = () => {
  return (
    <ul className={styles.wrapper}>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            type="button"
            className={tab.isActive ? styles.tabActive : styles.tab}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EventTabs;
