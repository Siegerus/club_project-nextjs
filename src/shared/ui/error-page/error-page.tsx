import { cn } from "@/shared/lib";
import { Container } from "@/shared/ui";
import { OuterWrapper } from "@/shared/ui";

type ErrorPageProps = {
  errorMessage?: string;
  className?: string;
};

const styles = {
  text: "block text-2xl text-center text-white-70",
};

const ErrorPage = ({
  errorMessage = "Page not found...",
  className,
}: ErrorPageProps) => {
  return (
    <OuterWrapper>
      <Container>
        <section className="mt-[100px]">
          <span className="block text-2xl text-center text-white-70">
            <span className={cn(styles.text, className)}>{errorMessage}</span>
          </span>
        </section>
      </Container>
    </OuterWrapper>
  );
};

export default ErrorPage;
