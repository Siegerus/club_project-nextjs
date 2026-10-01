import { Container } from "@/shared/ui";
import { OuterWrapper } from "@/shared/ui";

const NotFound = () => {
  return (
    <OuterWrapper>
      <Container>
        <section className="mt-[100px]">
          <span className="block text-2xl text-center text-white-70">
            Page not found...
          </span>
        </section>
      </Container>
    </OuterWrapper>
  );
};

export default NotFound;
