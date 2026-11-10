import { EventPromo } from "@/widgets/event-promo";

import { Container } from "@/shared/ui";

type EventArticleProps = {
  params: Promise<{ id: string }>;
};

const EventArticle = async ({ params }: EventArticleProps) => {
  const { id } = await params;

  return (
    <>
      <EventPromo eventId={id} />
      <Container></Container>
    </>
  );
};

export default EventArticle;
