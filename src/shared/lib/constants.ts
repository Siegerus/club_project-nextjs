export const SliceNameSpace = {
  Session: "session",
  Event: "events",
} as const;

export const LoadingStatus = {
  Idle: "Idle",
  Loading: "Loading",
  Success: "Success",
  Failed: "Failed",
} as const;

export const requestTimeout = 5000;

export const APIRoute = {
  Login: "/login",
  Logout: "/logout",
  Events: "/mocks/events/events.json",
} as const;
