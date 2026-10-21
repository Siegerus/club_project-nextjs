export const SliceNameSpace = {
  Session: "session",
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
} as const;
