export const AppRoute = {
  Home: "/",
  Contacts: "/contacts",
  Bangles: "/bangles",
  Vip: "/vip",
  Rules: "/rules",
  Events: "/events",
  EventArticle: (id: string | number) => `/events/${id}`,
  Authorization: "/authorization",
  Faq: "/faq",
  Loyalty: "/loyalty",
  NotFound: "/404",
} as const;
