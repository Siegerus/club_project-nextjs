import { EventPromo } from "@/widgets/event-promo";
import { EventReviews } from "@/widgets/event-reviews";

type EventArticleProps = {
  params: Promise<{ id: string }>;
};

const EventArticle = async ({ params }: EventArticleProps) => {
  const { id } = await params;

  return (
    <>
      <EventPromo eventId={id} />
      <EventReviews />
    </>
  );
};

export default EventArticle;
