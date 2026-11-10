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
export type { EventItem, TabId, EventTab } from "./types";
