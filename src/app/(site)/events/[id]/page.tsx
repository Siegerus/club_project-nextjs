import { EventPromo } from "@/widgets/event-promo";
import { ReserveModalOpen } from "@/features/reserve-form";
import { Container } from "@/shared/ui";

type EventArticleProps = {
  params: Promise<{ id: string }>;
};

const EventArticle = async ({ params }: EventArticleProps) => {
  const { id } = await params;

  return (
    <>
      <EventPromo eventId={id} />
      <ReserveModalOpen />
      <Container></Container>
    </>
  );
};

export default EventArticle;
