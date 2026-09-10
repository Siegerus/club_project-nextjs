import Image from "next/image";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Heading } from "@/shared/ui/heading";
import { joinTitleText } from "../lib";

const styles = {
  root: "",
  title: "",
};

const JoinSection = () => {
  return (
    <section className={styles.root}>
      <Heading level="h2" title={joinTitleText} />
    </section>
  );
};

export default JoinSection;
