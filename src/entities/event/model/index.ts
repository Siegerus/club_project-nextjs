export { default as eventSlice } from "./event-slice";
export {
  selectEventsLoadingStatus,
  selectEventsData,
  selectEventsError,
  eventSliceActions,
  selectActiveEventId,
  selectActiveEvent,
  selectActiveEventLoadingStatus,
  selectActiveEventError,
} from "./event-slice";
export type { EventItem, TabId, EventTab, CommentItem } from "./types";
export { useActiveEvent, useEvents } from "./hooks";

export { default as commentsSlice } from "./comments-slice";
export {
  selectCommentsData,
  selectCommentsLoadingStatus,
  selectCommentsError,
  commentsSliceActions,
} from "./comments-slice";
