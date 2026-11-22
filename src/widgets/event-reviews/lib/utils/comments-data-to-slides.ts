import type { CommentItem } from "@/entities/event";
import type { Slide } from "@/shared/ui/slider";

export const commentsDataToSlides = (data: CommentItem[]): Slide[] => {
  if (!Array.isArray(data)) return [];

  return data.map((comment) => ({
    id: comment.id,
    title: comment.author,
    image: comment.avatar,
    description: comment.event,
    comment: comment.comment,
    rating: comment.rating,
    date: comment.date,
  }));
};
