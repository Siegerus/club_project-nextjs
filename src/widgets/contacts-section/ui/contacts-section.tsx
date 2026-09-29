import { ContactsForm } from "@/features/contacts-form";
import { cn } from "@/shared/lib";
import { Heading } from "@/shared/ui";
import { contactsSectionTitle, contactsSectionDescription } from "../lib";

const styles = {
  root: "pt-[22px] md:pt-[30px] lg:pt-[80px] pb-[20px] md:pb-[124px] lg:pb-[77px] ",
  title:
    "title-responsive_mobile-3xl tracking-base leading-one md:leading-[0.75] lg:leading-[0.8]",
  descripion: cn(
    "md:max-w-[395px] lg:max-w-[unset] mt-[10px] md:mt-[20px] md:mx-auto px-[30px] md:px-0",
    "text-base md:text-xl text-center text-white-70",
    "leading-main md:leading-middle lg:leading-main -tracking-[0.01em] md:tracking-base lg:tracking-none ",
  ),
};

const ContactsSection = () => {
  return (
    <section className={styles.root}>
      <Heading
        className={styles.title}
        level="h1"
        gradientType="white"
        title={contactsSectionTitle}
      />
      <p className={styles.descripion}>{contactsSectionDescription}</p>
      <ContactsForm />
    </section>
  );
};

export default ContactsSection;
