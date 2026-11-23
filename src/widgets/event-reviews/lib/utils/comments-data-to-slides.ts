import type { CommentItem } from "@/entities/event";
import type { Slide } from "@/shared/ui";

const MIN_RATING = 0;
const MAX_RATING = 5;

const normalizeRating = (rating: number): number => {
  if (!Number.isFinite(rating)) return MIN_RATING;

  return Math.min(MAX_RATING, Math.max(MIN_RATING, Math.round(rating)));
};

export const commentsDataToSlides = (data: CommentItem[]): Slide[] => {
  if (!Array.isArray(data)) return [];

  return data.map((comment) => ({
    id: comment.id,
    title: comment.author,
    image: comment.avatar,
    description: comment.event,
    comment: comment.comment,
    rating: normalizeRating(comment.rating),
    date: comment.date,
  }));
};
