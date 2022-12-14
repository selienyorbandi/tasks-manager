export type TCuadrant = "urgent" | "high" | "medium" | "low";

export interface ITask {
  id: number;
  title: string;
  description: string;
  priority: TCuadrant;
  completed: boolean;
  selected: boolean;
  dateAdded: string;
}

export interface ITasksSlice {
  urgent: ITask[];
  high: ITask[];
  medium: ITask[];
  low: ITask[];
}
