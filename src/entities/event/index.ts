export {
  eventSlice,
  selectEventsLoadingStatus,
  selectEventsData,
  selectEventsError,
  eventSliceActions,
  selectActiveEventId,
  selectActiveEvent,
  selectActiveEventLoadingStatus,
  selectActiveEventError,
  commentsSlice,
  selectCommentsData,
  selectCommentsLoadingStatus,
  selectCommentsError,
  commentsSliceActions,
  useActiveEvent,
  useEvents,
} from "./model";
export type { EventItem, TabId, EventTab } from "./model";
