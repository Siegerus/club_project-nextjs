export type TabId = "format" | "about" | "timing" | "bangles" | "dresscode";

export type EventTab = {
  id: TabId;
  label: string;
  description: string;
};

export type EventItem = {
  id: string;
  title: string;
  description: string;
  watermark: string;
  tabs: EventTab[];
  date: string;
  time: string;
  location: string;
  image: string;
  tabletImage: string;
};
