export enum Priority {
  highest = "urgent-important",
  high = "not-urgent-important",
  medium = "urgent-not-important",
  low = "not-urgent-not-important",
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
  selected: boolean;
  dateAdded: string;
}
