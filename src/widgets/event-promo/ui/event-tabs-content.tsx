import { motion } from "framer-motion";

import type { EventTab, TabId } from "@/entities/event";
import { cn } from "@/shared/lib";

type EventTabsContentProps = {
  tabs: EventTab[];
  activeTab: TabId;
};

const styles = {
  description: cn(
    "mt-[15px] md:mt-[20px]",
    "text-sm md:text-base lg:text-xl",
    "leading-main md:leading-middle md:tracking-base lg:tracking-none lg:leading-main",
    "text-white-70",
    "whitespace-pre-line",
  ),
  content: cn(
    "w-full",
    "mt-[10px] p-[10px] md:p-[20px] lg:mt-[20px] md:pr-0",
    "rounded-[10px] md:rounded-base",
    "bg-main-bg",
    "backdrop-blur-[24px]",
    "animate-tab-shadow",
  ),
  contentLabel: cn(
    "block",
    "text-sm md:text-2xl lg:text-[2em] font-semibold",
    "leading-main lg:leading-[0.8]",
    "tracking-none md:tracking-base",
    "text-white",
  ),
};

const EventTabsContent = ({ tabs, activeTab }: EventTabsContentProps) => {
  return (
    <div role="tabpanel" id="event-tabs">
      {tabs.map((tab, i) => {
        const keyValue = `${tab.id}-${i}`;
        return (
          <div key={keyValue}>
            {activeTab === tab.id && (
              <motion.div
                className={styles.content}
                initial={{
                  opacity: 0.1,
                  boxShadow: "0 0 110px rgba(246, 246, 246, 1)",
                }}
                animate={{
                  opacity: 1,
                  boxShadow: "0 0 10px rgba(246, 246, 246, 0)",
                }}
                transition={{ duration: 0.9, ease: "linear" }}
              >
                <span className={styles.contentLabel}>{tab.label}</span>
                <p className={styles.description}>{tab.description}</p>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EventTabsContent;
