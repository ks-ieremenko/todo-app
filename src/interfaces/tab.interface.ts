import { ReactElement } from "react";

import { TodoItemModel } from "./todo.interface";

export interface TabPanelModel {
  value: string;
  data: TodoItemModel[];
}

export interface TabHeaderModel {
  value: string;
  icon: ReactElement;
}
