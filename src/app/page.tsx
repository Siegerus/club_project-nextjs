import { Benefit } from "@/widgets/benefit";
import { JoinSection } from "@/widgets/join";
import { MainPromo } from "@/widgets/main-promo";
import { Container } from "@/shared/ui/container";

export default function Home() {
  return (
    <Container>
      <MainPromo />
      <Benefit />
      <JoinSection />
    </Container>
  );
}
