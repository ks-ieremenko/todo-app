import moment from "moment";
import { TodoItemModel, TodoStatisticsModel } from "../interfaces/todo.interface";

interface DataInterface {
  [key: string]: number;
}

const generateDayOfWeeks = () => {
  return [1, 2, 3, 4, 5, 6, 7].reduce(
    (acc, item) => ({
      ...acc,
      [moment().day(item).format("ddd")]: 0,
    }),
    {}
  );
};
const filterByDateRange = (data: TodoItemModel[], dateStart: string, dateEnd: string) => {
  return Array.from(new Set(data.filter((item) => moment(item.date).isBetween(dateStart, dateEnd, null, "[]"))));
};

export const generateStatistics = (data: TodoItemModel[]) => {
  const startOfWeek: string = moment().startOf("isoWeek").format("YYYY-MM-DD");
  const endOfWeek: string = moment().endOf("isoWeek").format("YYYY-MM-DD");

  const dayOfWeeks: DataInterface = generateDayOfWeeks();
  const dates: Array<TodoItemModel> = filterByDateRange(data, startOfWeek, endOfWeek);
  const datesWithCompletedTasks: DataInterface = dates.reduce(
    (acc, todo) => ({
      ...acc,
      [moment(todo.date).format("ddd")]: data.filter((item) => item.date === todo.date).length,
    }),
    {}
  );
  const result: DataInterface = { ...dayOfWeeks, ...datesWithCompletedTasks };

  const calculatedData: Array<TodoStatisticsModel> = [];
  for (const key in result) {
    calculatedData.push({
      name: key,
      count: result[key],
    });
  }
  return calculatedData;
};
