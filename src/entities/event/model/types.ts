export type EventTab = {
  tabName: string;
  tabContent: string;
};

export type EventItem = {
  id: string;
  title: string;
  description: string;
  tabs: EventTab[];
  date: string;
  time: string;
  location: string;
  image: string;
};
