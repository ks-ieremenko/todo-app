import { Priority } from "../constants/todo";

export interface TodoItemModel {
  id: string;
  description: string;
  priority: Priority | string;
  completed: boolean;
  date?: string | null;
}

export interface TodoStatisticsModel {
  name: string;
  count: number;
}
