import Image from "next/image";

import { cn } from "@/shared/lib";
import { Button, Container, LinkButton, OuterWrapper } from "@/shared/ui";

type ErrorPageIllustration = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ErrorPageProps = {
  className?: string;
  title: string;
  description: string;
  illustration?: ErrorPageIllustration;
  actionLabel?: string;
  actionPath?: string;
  resetText?: string;
  onReset?: () => void;
  withContent?: boolean;
};

const styles = {
  section: "mt-[100px]",
  card: cn(
    "mx-auto w-full max-w-[450px] p-[20px] md:p-[40px]",
    "rounded-middle bg-main-bg backdrop-blur-[12px]",
  ),
  image: "h-auto max-w-full",
  content: "flex flex-col items-center gap-4",
  text: "flex flex-col items-center gap-[6px] text-center",
  title:
    "text-[34px] md:text-[36px] lg:text-[40px] leading-[0.8] tracking-base font-semibold text-white",
  description: "text-lg md:text-xl leading-main text-white-70",
  action: "max-w-full md:max-w-[370px] mt-[60px] button-interactive_fill",
};

const ErrorPage = ({
  className,
  title,
  description,
  illustration,
  actionLabel,
  actionPath,
  resetText,
  onReset,
  withContent = true,
}: ErrorPageProps) => {
  const descriptionClass = cn(
    styles.description,
    !withContent && "mt-[135px] text-4xl text-center",
  );

  const content = (
    <section className={cn(styles.section, className)}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <p className={descriptionClass}>{description}</p>
          </div>
          {illustration && (
            <Image
              className={styles.image}
              height={illustration.height}
              width={illustration.width}
              alt={illustration.alt}
              priority
              src={illustration.src}
            />
          )}
          {resetText && onReset ? (
            <Button className={styles.action} onClick={onReset}>
              {resetText}
            </Button>
          ) : (
            actionLabel &&
            actionPath && (
              <LinkButton
                className={styles.action}
                label={actionLabel}
                path={actionPath}
              >
                {actionLabel}
              </LinkButton>
            )
          )}
        </div>
      </div>
    </section>
  );

  return (
    <OuterWrapper>
      <Container>
        {withContent ? (
          content
        ) : (
          <section>
            <h1 className={cn(styles.title, "sr-only")}>{title}</h1>
            <p className={descriptionClass}>{description}</p>
            {resetText && onReset && (
              <Button className={styles.action} onClick={onReset}>
                {resetText}
              </Button>
            )}
          </section>
        )}
      </Container>
    </OuterWrapper>
  );
};

export default ErrorPage;
