import { cn } from "@/shared/lib";
import { Container } from "@/shared/ui";
import { OuterWrapper } from "@/shared/ui";
import { Button } from "@/shared/ui";

type ErrorPageProps = {
  className?: string;
  errorMessage?: string;
  resetText?: string;
  onReset?: () => void;
  withWrapper?: boolean;
};

const styles = {
  text: "block text-2xl text-center text-white-70",
};

const ErrorPage = ({
  className,
  errorMessage = "Page not found...",
  resetText,
  onReset,
  withWrapper = true,
}: ErrorPageProps) => {
  if (!withWrapper)
    return (
      <section className="mt-[100px]">
        <span className="block text-2xl text-center text-white-70">
          <span className={cn(styles.text, className)}>{errorMessage}</span>
        </span>
        {resetText && onReset && <Button onClick={onReset}>{resetText}</Button>}
      </section>
    );

  return (
    <OuterWrapper>
      <Container>
        <section className="mt-[100px]">
          <span className="block text-2xl text-center text-white-70">
            <span className={cn(styles.text, className)}>{errorMessage}</span>
          </span>
          {resetText && onReset && (
            <Button onClick={onReset}>{resetText}</Button>
          )}
        </section>
      </Container>
    </OuterWrapper>
  );
};

export default ErrorPage;
